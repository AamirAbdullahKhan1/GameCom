"use client"

import { useState, useEffect, useRef } from "react"

const DecryptedText = ({
  text,
  className = "",
  delay = 0,
  duration = 1500,
  scrambleSpeed = 50,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?",
}) => {
  const [displayText, setDisplayText] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const textRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible || isAnimating) return

    const startAnimation = () => {
      setIsAnimating(true)
      const targetText = text.toUpperCase()
      let currentText = Array(targetText.length)
        .fill("")
        .map(() => characters[Math.floor(Math.random() * characters.length)])

      setDisplayText(currentText.join(""))

      const totalSteps = Math.floor(duration / scrambleSpeed)
      const revealStep = Math.floor(totalSteps / targetText.length)

      let step = 0

      const interval = setInterval(() => {
        const revealedChars = Math.floor(step / revealStep)

        currentText = currentText.map((char, index) => {
          if (index < revealedChars) {
            return targetText[index]
          } else if (index === revealedChars && step % 2 === 0) {
            return targetText[index]
          } else {
            return characters[Math.floor(Math.random() * characters.length)]
          }
        })

        setDisplayText(currentText.join(""))
        step++

        if (step >= totalSteps) {
          setDisplayText(targetText)
          clearInterval(interval)
          setIsAnimating(false)
        }
      }, scrambleSpeed)

      return () => clearInterval(interval)
    }

    const timer = setTimeout(startAnimation, delay)
    return () => clearTimeout(timer)
  }, [isVisible, text, delay, duration, scrambleSpeed, characters, isAnimating])

  return (
    <span ref={textRef} className={`font-mono ${className}`}>
      {displayText || text}
    </span>
  )
}

export default DecryptedText
