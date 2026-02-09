import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const achievementsData = [
    {
        title: 'Bajaj HackRx 6.0',
        description: 'Top 3 + Best Pitchers Award',
        date: '08/2025'
    },
    {
        title: 'Inter-College Debate (COEP)',
        description: '4th place + highest score',
        date: '11/2024'
    },
    {
        title: 'JEE Mains 2023',
        description: '97.7 percentile',
        date: '02/2023'
    }
]

const Achievements = () => {
    const sectionRef = useRef(null)
    const clippingsRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            clippingsRef.current.forEach((clipping, i) => {
                if (clipping) {
                    gsap.fromTo(clipping,
                        {
                            opacity: 0,
                            x: i % 2 === 0 ? -40 : 40,
                            rotation: i % 2 === 0 ? -3 : 3
                        },
                        {
                            opacity: 1,
                            x: 0,
                            rotation: i % 2 === 0 ? -0.5 : 0.5,
                            duration: 0.7,
                            delay: i * 0.15,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: 'top 60%',
                                toggleActions: 'play none none reverse'
                            }
                        }
                    )
                }
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="achievements"
            className="section"
        >
            <div className="container">
                <h2 className="section-title">Achievements</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {achievementsData.map((achievement, i) => (
                        <div
                            key={i}
                            ref={el => clippingsRef.current[i] = el}
                            className="clipping"
                        >
                            <h3
                                className="text-lg font-normal mb-2"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {achievement.title}
                            </h3>
                            <p
                                className="italic text-[var(--text-secondary)] mb-3"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                {achievement.description}
                            </p>
                            <span
                                className="text-xs text-[var(--text-muted)] tracking-wider"
                                style={{ fontFamily: 'var(--font-sans)' }}
                            >
                                {achievement.date}
                            </span>
                        </div>
                    ))}
                </div>

                <hr className="rule mt-12" />
            </div>
        </section>
    )
}

export default Achievements
