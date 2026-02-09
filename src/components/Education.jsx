import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const educationData = [
    {
        institution: 'IIIT Pune',
        degree: 'B.Tech CSE',
        score: 'CGPA 7.5',
        period: 'Current'
    },
    {
        institution: 'Spring Valley School (CBSE)',
        degree: 'Senior Secondary',
        score: '91.8%',
        period: '2023'
    },
    {
        institution: 'Sacred Heart Convent School',
        degree: 'Class 10',
        score: '95%',
        period: '2021'
    }
]

const Education = () => {
    const sectionRef = useRef(null)
    const timelineRef = useRef(null)
    const itemsRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Timeline line draws down
            gsap.fromTo(timelineRef.current,
                { scaleY: 0 },
                {
                    scaleY: 1,
                    duration: 1,
                    ease: 'power2.out',
                    transformOrigin: 'top center',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 60%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

            // Items fade in
            itemsRef.current.forEach((item, i) => {
                if (item) {
                    gsap.fromTo(item,
                        { opacity: 0, x: 20 },
                        {
                            opacity: 1,
                            x: 0,
                            duration: 0.6,
                            delay: 0.2 + (i * 0.15),
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
            id="education"
            className="section"
        >
            <div className="container">
                <h2 className="section-title">Education</h2>

                <div className="relative pl-8 md:pl-12">
                    {/* Timeline line */}
                    <div
                        ref={timelineRef}
                        className="absolute left-0 top-2 bottom-2 w-px bg-[var(--text-primary)]"
                        style={{ transformOrigin: 'top center' }}
                    />

                    {/* Timeline items */}
                    <div className="space-y-8">
                        {educationData.map((item, i) => (
                            <div
                                key={i}
                                ref={el => itemsRef.current[i] = el}
                                className="relative"
                            >
                                {/* Timeline dot */}
                                <div className="absolute -left-8 md:-left-12 top-1.5 w-2 h-2 rounded-full bg-[var(--paper)] border border-[var(--text-primary)]" />

                                {/* Content */}
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
                                    <div className="md:col-span-2">
                                        <h3
                                            className="text-lg font-normal"
                                            style={{ fontFamily: 'var(--font-display)' }}
                                        >
                                            {item.institution}
                                        </h3>
                                    </div>
                                    <div>
                                        <p
                                            className="italic text-[var(--text-muted)]"
                                            style={{ fontFamily: 'var(--font-body)' }}
                                        >
                                            {item.degree}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <span
                                            className="text-sm text-[var(--text-secondary)]"
                                            style={{ fontFamily: 'var(--font-sans)' }}
                                        >
                                            {item.score}
                                        </span>
                                        <span className="mx-2 text-[var(--divider)]">|</span>
                                        <span
                                            className="text-xs text-[var(--text-muted)] tracking-wide"
                                            style={{ fontFamily: 'var(--font-sans)' }}
                                        >
                                            {item.period}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <hr className="rule mt-12" />
            </div>
        </section>
    )
}

export default Education
