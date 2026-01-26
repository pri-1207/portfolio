'use client'

import { useState, useEffect } from 'react'

export default function FocusModeToggle() {
    const [isFocusMode, setIsFocusMode] = useState(false)

    useEffect(() => {
        if (isFocusMode) {
            document.body.style.background = '#FFFBEB'
        } else {
            document.body.style.background = ''
        }
    }, [isFocusMode])

    return (
        <button
            onClick={() => setIsFocusMode(!isFocusMode)}
            className={`fixed bottom-6 right-6 z-50 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group ${isFocusMode
                    ? 'bg-pastel-accent text-white'
                    : 'bg-white/80 backdrop-blur-sm border-2 border-dashed border-pastel-dark/10'
                }`}
            aria-label="Toggle Focus Mode"
            title={isFocusMode ? 'Exit Focus Mode' : 'Enter Focus Mode'}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:rotate-12">
                {isFocusMode ? (
                    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" />
                ) : (
                    <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" />
                )}
            </svg>
        </button>
    )
}
