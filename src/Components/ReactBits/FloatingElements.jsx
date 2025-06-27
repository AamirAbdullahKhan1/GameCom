"use client"

import { useEffect, useState } from "react"

const FloatingElements = ({ count = 20 }) => {
  const [elements, setElements] = useState([])

  useEffect(() => {
    const newElements = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }))
    setElements(newElements)
  }, [count])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute bg-blue-400/10 rounded-full blur-sm"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animation: `float ${element.duration}s ease-in-out infinite`,
            animationDelay: `${element.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default FloatingElements
