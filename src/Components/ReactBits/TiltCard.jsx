"use client"

import { useRef, useEffect } from "react"

const TiltCard = ({ children, className = "", tiltMaxAngleX = 15, tiltMaxAngleY = 15, scale = 1.05 }) => {
  const ref = useRef()

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = ((y - centerY) / centerY) * tiltMaxAngleX
      const rotateY = ((centerX - x) / centerX) * tiltMaxAngleY

      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
    }

    const handleMouseLeave = () => {
      element.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
    }

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [tiltMaxAngleX, tiltMaxAngleY, scale])

  return (
    <div
      ref={ref}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  )
}

export default TiltCard
