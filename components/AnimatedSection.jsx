'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function AnimatedSection({ children, className = '', delay = 0, direction = 'up' }) {
    const ref = useRef(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const directions = {
            up: { y: 80, x: 0 },
            down: { y: -80, x: 0 },
            left: { y: 0, x: 80 },
            right: { y: 0, x: -80 },
        }

        const ctx = gsap.context(() => {
            gsap.fromTo(element,
                {
                    opacity: 0,
                    ...directions[direction],
                },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    duration: 1,
                    ease: 'power3.out',
                    delay,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top bottom-=100',
                        toggleActions: 'play none none reverse',
                    },
                }
            )
        })

        return () => ctx.revert()
    }, [delay, direction])

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    )
}
