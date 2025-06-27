"use client"

import { useRef, useEffect } from "react"

const TiltCard = ({ children, className = "", tiltMaxAngleX = 15, tiltMaxAngleY = 15, scale = 1.05 }) => {
  const cardRef = useRef()

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = ((y - centerY) / centerY) * tiltMaxAngleX
      const rotateY = ((centerX - x) / centerX) * tiltMaxAngleY

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
    }

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
    }

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [tiltMaxAngleX, tiltMaxAngleY, scale])

  return (
    <div
      ref={cardRef}
      className={`tilt-card transition-transform duration-200 ease-out ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  )
}

export default TiltCard
