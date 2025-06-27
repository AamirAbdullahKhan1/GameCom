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
  const [isPressed, setIsPressed] = useState(false)

  const baseClasses = "relative overflow-hidden font-semibold transition-all duration-300 transform-gpu"

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl",
    secondary: "border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 hover:shadow-lg",
    ghost: "text-gray-300 hover:text-white hover:bg-gray-800/50",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-2xl",
  }

  return (
    <button
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
        ${isPressed ? "scale-95" : "hover:scale-105"}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        group
      `}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {/* Ripple effect */}
      <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>

      {/* Shine effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  )
}

export default AnimatedButton
