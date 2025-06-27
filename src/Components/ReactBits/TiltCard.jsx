"use client"

import { useRef, useState } from "react"

const TiltCard = ({ children, className = "", tiltMaxAngleX = 15, tiltMaxAngleY = 15, scale = 1.05 }) => {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -tiltMaxAngleX
    const rotateY = ((x - centerX) / centerX) * tiltMaxAngleY

    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
    setIsHovered(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <div
      ref={ref}
      className={`transition-transform duration-200 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  )
}

export default TiltCard
