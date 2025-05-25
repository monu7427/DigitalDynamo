"use client"

import { useEffect, useState } from "react"

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <>
      <div
        className="cursor"
        style={{
          left: `${mousePosition.x - 1}px`,
          top: `${mousePosition.y - 1}px`,
        }}
      />
      <div
        className="cursor-blur"
        style={{
          left: `${mousePosition.x - 150}px`,
          top: `${mousePosition.y - 150}px`,
        }}
      />
    </>
  )
}
