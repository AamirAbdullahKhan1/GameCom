"use client"

import { useState } from "react"

const AnimatedButton = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...props
}) => {
  const [ripples, setRipples] = useState([])

  const createRipple = (event) => {
    const button = event.currentTarget
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2

    const newRipple = {
      x,
      y,
      size,
      id: Date.now(),
    }

    setRipples((prev) => [...prev, newRipple])

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
    }, 600)

    if (onClick) onClick(event)
  }

  const baseClasses = "relative overflow-hidden transition-all duration-300 font-medium rounded-full"

  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white",
    secondary: "border-2 border-gray-600 hover:bg-gray-800 hover:border-gray-500 text-white",
    ghost: "hover:bg-gray-800 text-gray-400 hover:text-white",
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105 active:scale-95"

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className} flex items-center justify-center gap-2`}
      onClick={createRipple}
      disabled={disabled}
      {...props}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ping"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            animationDuration: "600ms",
          }}
        />
      ))}
    </button>
  )
}

export default AnimatedButton
