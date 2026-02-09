import { useEffect, useState } from 'react'

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrolled = window.scrollY / windowHeight
            setProgress(scrolled)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className="scroll-progress"
            style={{ transform: `scaleX(${progress})` }}
        />
    )
}

export default ScrollProgress
