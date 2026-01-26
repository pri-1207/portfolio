'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollPercent = (scrollTop / docHeight) * 100
            setProgress(scrollPercent)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* Top progress bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-pink-100/50 z-[100]">
                <div
                    className="h-full bg-gradient-to-r from-accent-rose to-accent-blush transition-all duration-150 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Side progress indicator */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-4">
                <div className="w-px h-20 bg-pink-200 relative overflow-hidden rounded-full">
                    <div
                        className="absolute bottom-0 w-full bg-gradient-to-t from-accent-rose to-accent-blush transition-all duration-150"
                        style={{ height: `${progress}%` }}
                    />
                </div>
                <span className="text-xs font-semibold text-accent-rose">
                    {Math.round(progress)}%
                </span>
            </div>
        </>
    )
}
