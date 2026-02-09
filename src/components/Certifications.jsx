import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const certificationsData = [
    {
        title: 'Machine Learning A–Z (Python & R)',
        extra: '+ ChatGPT Prize',
        year: '2025'
    },
    {
        title: 'Full-Stack Web Development Bootcamp',
        extra: '',
        year: '2025'
    }
]

const Certifications = () => {
    const sectionRef = useRef(null)
    const itemsRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            itemsRef.current.forEach((item, i) => {
                if (item) {
                    gsap.fromTo(item,
                        { opacity: 0, y: 15 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.5,
                            delay: i * 0.1,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: 'top 75%',
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
            id="certifications"
            className="section bg-[var(--paper-alt)]"
        >
            <div className="container">
                <div className="max-w-3xl">
                    <h2
                        className="text-sm tracking-[0.2em] uppercase mb-6 text-[var(--text-muted)]"
                        style={{ fontFamily: 'var(--font-sans)' }}
                    >
                        Certifications
                    </h2>

                    <div className="border-l-2 border-[var(--text-primary)] pl-6 space-y-4">
                        {certificationsData.map((cert, i) => (
                            <div
                                key={i}
                                ref={el => itemsRef.current[i] = el}
                                className="flex flex-wrap items-baseline gap-x-4 gap-y-1"
                            >
                                <span
                                    className="italic"
                                    style={{ fontFamily: 'var(--font-body)' }}
                                >
                                    {cert.title}
                                </span>
                                {cert.extra && (
                                    <span
                                        className="text-sm text-[var(--text-muted)]"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {cert.extra}
                                    </span>
                                )}
                                <span
                                    className="text-xs text-[var(--text-muted)] tracking-wide ml-auto"
                                    style={{ fontFamily: 'var(--font-sans)' }}
                                >
                                    {cert.year}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <hr className="rule mt-12" />
            </div>
        </section>
    )
}

export default Certifications
