"use client"

import { useRef, useState } from "react"

const GlowingCard = ({ children, className = "", glowColor = "blue" }) => {
  const ref = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const glowColors = {
    blue: "rgba(59, 130, 246, 0.4)",
    purple: "rgba(147, 51, 234, 0.4)",
    green: "rgba(34, 197, 94, 0.4)",
    red: "rgba(239, 68, 68, 0.4)",
    yellow: "rgba(234, 179, 8, 0.4)",
  }

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 100,
            width: 200,
            height: 200,
            background: `radial-gradient(circle, ${glowColors[glowColor]} 0%, transparent 70%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}

      {children}
    </div>
  )
}

export default GlowingCard
