"use client"

import { useEffect, useState, useRef } from "react"

const DecryptedText = ({
  text,
  className = "",
  delay = 0,
  duration = 2000,
  scrambleSpeed = 50,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?",
}) => {
  const [displayText, setDisplayText] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [isDecrypting, setIsDecrypting] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef()
  const intervalRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
          setTimeout(() => {
            setIsVisible(true)
            startDecryption()
          }, delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [delay, hasStarted])

  const getRandomChar = () => {
    return characters[Math.floor(Math.random() * characters.length)]
  }

  const startDecryption = () => {
    if (isDecrypting) return

    setIsDecrypting(true)
    let currentIndex = 0
    const targetText = text
    const scrambleArray = new Array(targetText.length)
      .fill("")
      .map((_, i) => (targetText[i] === " " ? " " : getRandomChar()))

    setDisplayText(scrambleArray.join(""))

    intervalRef.current = setInterval(() => {
      if (currentIndex < targetText.length) {
        // Set the current character to the correct one
        scrambleArray[currentIndex] = targetText[currentIndex]
        currentIndex++

        // Continue scrambling remaining characters
        for (let i = currentIndex; i < targetText.length; i++) {
          if (targetText[i] !== " ") {
            scrambleArray[i] = getRandomChar()
          }
        }

        setDisplayText(scrambleArray.join(""))
      } else {
        clearInterval(intervalRef.current)
        setIsDecrypting(false)
        setDisplayText(targetText) // Ensure final text is correct
      }
    }, duration / targetText.length)
  }

  return (
    <div ref={ref} className={`font-mono ${className}`}>
      <span className={`inline-block transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        {displayText || text}
      </span>
    </div>
  )
}

export default DecryptedText
