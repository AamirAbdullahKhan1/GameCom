"use client"

import { useEffect, useRef } from "react"

const Aurora = ({ className = "", intensity = 0.5, speed = 1 }) => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const animate = () => {
      time += 0.01 * speed

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)

      // Aurora colors with animation
      const hue1 = (time * 50) % 360
      const hue2 = (time * 30 + 120) % 360
      const hue3 = (time * 40 + 240) % 360

      gradient.addColorStop(0, `hsla(${hue1}, 70%, 60%, ${0.1 * intensity})`)
      gradient.addColorStop(0.3, `hsla(${hue2}, 80%, 70%, ${0.15 * intensity})`)
      gradient.addColorStop(0.6, `hsla(${hue3}, 75%, 65%, ${0.12 * intensity})`)
      gradient.addColorStop(1, `hsla(${hue1 + 60}, 65%, 55%, ${0.08 * intensity})`)

      // Draw aurora waves
      ctx.fillStyle = gradient
      ctx.beginPath()

      for (let x = 0; x <= canvas.width; x += 10) {
        const y1 = Math.sin(x * 0.01 + time) * 100 + canvas.height * 0.3
        const y2 = Math.cos(x * 0.008 + time * 1.2) * 80 + canvas.height * 0.5
        const y3 = Math.sin(x * 0.012 + time * 0.8) * 60 + canvas.height * 0.7

        if (x === 0) {
          ctx.moveTo(x, y1)
        } else {
          ctx.lineTo(x, y1)
        }
      }

      ctx.lineTo(canvas.width, canvas.height)
      ctx.lineTo(0, canvas.height)
      ctx.closePath()
      ctx.fill()

      // Second layer
      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.3,
        canvas.height * 0.2,
        0,
        canvas.width * 0.7,
        canvas.height * 0.8,
        canvas.width,
      )

      gradient2.addColorStop(0, `hsla(${hue2 + 30}, 80%, 70%, ${0.08 * intensity})`)
      gradient2.addColorStop(0.5, `hsla(${hue3 + 60}, 70%, 60%, ${0.05 * intensity})`)
      gradient2.addColorStop(1, `hsla(${hue1 + 90}, 60%, 50%, ${0.02 * intensity})`)

      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationRef.current = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [intensity, speed])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ mixBlendMode: "screen" }}
    />
  )
}

export default Aurora
