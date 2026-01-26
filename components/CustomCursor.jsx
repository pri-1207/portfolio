'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isMobile, setIsMobile] = useState(true)

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', updatePosition)
        return () => window.removeEventListener('mousemove', updatePosition)
    }, [])

    if (isMobile) return null

    return (
        <div
            className="custom-cursor flex items-center justify-center"
            style={{ left: position.x, top: position.y, transform: 'translate(-50%, -50%)' }}
        >
            <div className="w-1 h-1 bg-pastel-accent-pink rounded-full"></div>
        </div>
    )
}
