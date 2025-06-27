"use client"

import { useRef, useEffect, useState } from "react"

const GlowingCard = ({ children, className = "", glowColor = "blue", glowIntensity = 0.5, glowSize = 300 }) => {
  const cardRef = useRef()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const glowColors = {
    blue: "59, 130, 246",
    purple: "147, 51, 234",
    green: "34, 197, 94",
    red: "239, 68, 68",
    yellow: "234, 179, 8",
    pink: "236, 72, 153",
  }

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    card.addEventListener("mousemove", handleMouseMove)
    card.addEventListener("mouseenter", handleMouseEnter)
    card.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card.removeEventListener("mousemove", handleMouseMove)
      card.removeEventListener("mouseenter", handleMouseEnter)
      card.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  const glowStyle = isHovered
    ? {
        background: `radial-gradient(${glowSize}px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${glowColors[glowColor]}, ${glowIntensity}), transparent 40%)`,
      }
    : {}

  return (
    <div ref={cardRef} className={`relative ${className}`}>
      {/* Glow effect */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-inherit"
        style={glowStyle}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default GlowingCard
