'use client'

import { useEffect, useRef } from 'react'

const FlowerTrail = () => {
    const flowers = useRef([])

    useEffect(() => {
        const createFlower = (e) => {
            const flower = document.createElement('div')
            flower.className = 'floating-flower'
            flower.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 100 100">
                    <path d="M50 50 Q 70 30, 50 10 Q 30 30, 50 50 Z" fill="%23FDA4AF" opacity="0.6" />
                    <path d="M50 50 Q 70 70, 90 50 Q 70 30, 50 50 Z" fill="%23A5B4FC" opacity="0.6" />
                    <path d="M50 50 Q 30 70, 50 90 Q 70 70, 50 50 Z" fill="%237DD3FC" opacity="0.6" />
                    <path d="M50 50 Q 10 50, 30 30 Q 50 50, 50 50 Z" fill="%23FFFBEB" opacity="0.6" />
                    <circle cx="50" cy="50" r="5" fill="white" />
                </svg>
            `
            flower.style.left = e.pageX + 'px'
            flower.style.top = e.pageY + 'px'
            document.body.appendChild(flower)

            setTimeout(() => {
                flower.style.transform = `translate(${(Math.random() - 0.5) * 100}px, -100px) rotate(${Math.random() * 360}deg)`
                flower.style.opacity = '0'
                flower.style.transition = 'all 1.5s ease-out'
            }, 10)

            setTimeout(() => flower.remove(), 1600)
        }

        window.addEventListener('click', createFlower)
        return () => window.removeEventListener('click', createFlower)
    }, [])

    return null
}

const BackgroundFlora = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
                <div
                    key={i}
                    className="absolute animate-float-flower"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 10}s`,
                        animationDuration: `${15 + Math.random() * 10}s`
                    }}
                >
                    <svg width="40" height="40" viewBox="0 0 100 100" className="opacity-10">
                        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M50 30 L 50 10 M50 70 L 50 90 M30 50 L 10 50 M70 50 L 90 50" stroke="currentColor" strokeWidth="2" />
                    </svg>
                </div>
            ))}
        </div>
    )
}

export default function LayoutDecorations() {
    return (
        <>
            <BackgroundFlora />
            <FlowerTrail />
        </>
    )
}
