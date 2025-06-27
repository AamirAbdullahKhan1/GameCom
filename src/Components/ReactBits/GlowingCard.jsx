"use client"

import { useRef, useEffect, useState } from "react"

const GlowingCard = ({ children, className = "", glowColor = "blue" }) => {
  const ref = useRef()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const glowColors = {
    blue: "rgba(59, 130, 246, 0.5)",
    purple: "rgba(147, 51, 234, 0.5)",
    green: "rgba(34, 197, 94, 0.5)",
    red: "rgba(239, 68, 68, 0.5)",
    yellow: "rgba(234, 179, 8, 0.5)",
  }

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseenter", handleMouseEnter)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseenter", handleMouseEnter)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{
        background: isHovered
          ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColors[glowColor]}, transparent 40%)`
          : "transparent",
      }}
    >
      {children}
    </div>
  )
}

export default GlowingCard
