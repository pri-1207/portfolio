import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const experienceData = [
    {
        role: 'Literary Club Head',
        organization: 'Eclectic — IIIT Pune',
        period: '09/2025 – Present',
        bullets: [
            'Leading and managing 30+ members',
            'Debates, poetry, writing events'
        ]
    },
    {
        role: 'Core Placement Coordinator',
        organization: 'IIIT Pune',
        period: '03/2025 – Present',
        bullets: [
            'Coordinated recruitment drives',
            'Recruiter–student communication'
        ]
    },
    {
        role: 'Core Member',
        organization: 'Vanity Crew — Dance Club of IIIT Pune',
        period: 'Ongoing',
        bullets: [
            'Team coordination and performances'
        ]
    }
]

const Experience = () => {
    const sectionRef = useRef(null)
    const itemsRef = useRef([])
    const rulesRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Rules draw in
            rulesRef.current.forEach((rule, i) => {
                if (rule) {
                    gsap.fromTo(rule,
                        { scaleX: 0 },
                        {
                            scaleX: 1,
                            duration: 0.6,
                            delay: i * 0.1,
                            ease: 'power2.out',
                            transformOrigin: 'left center',
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: 'top 60%',
                                toggleActions: 'play none none reverse'
                            }
                        }
                    )
                }
            })

            // Items fade in
            itemsRef.current.forEach((item, i) => {
                if (item) {
                    const title = item.querySelector('.exp-title')
                    const bullets = item.querySelectorAll('.exp-bullet')

                    // Title first
                    gsap.fromTo(title,
                        { opacity: 0, x: -20 },
                        {
                            opacity: 1,
                            x: 0,
                            duration: 0.5,
                            delay: 0.2 + (i * 0.15),
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: 'top 60%',
                                toggleActions: 'play none none reverse'
                            }
                        }
                    )

                    // Then bullets
                    bullets.forEach((bullet, j) => {
                        gsap.fromTo(bullet,
                            { opacity: 0, x: 10 },
                            {
                                opacity: 1,
                                x: 0,
                                duration: 0.4,
                                delay: 0.4 + (i * 0.15) + (j * 0.08),
                                ease: 'power2.out',
                                scrollTrigger: {
                                    trigger: sectionRef.current,
                                    start: 'top 60%',
                                    toggleActions: 'play none none reverse'
                                }
                            }
                        )
                    })
                }
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="experience"
            className="section bg-[var(--paper-alt)]"
        >
            <div className="container">
                <h2 className="section-title">Experience</h2>

                <div className="space-y-0">
                    {experienceData.map((exp, i) => (
                        <div
                            key={i}
                            ref={el => itemsRef.current[i] = el}
                        >
                            {/* Top rule */}
                            <hr
                                ref={el => rulesRef.current[i] = el}
                                className="border-0 border-t border-[var(--divider)] mb-6"
                            />

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 pb-6">
                                {/* Left column - Role */}
                                <div className="md:col-span-4">
                                    <h3
                                        className="exp-title text-lg font-normal"
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        {exp.role}
                                    </h3>
                                    <p
                                        className="italic text-sm text-[var(--text-muted)] mt-1"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        {exp.organization}
                                    </p>
                                </div>

                                {/* Right column - Details */}
                                <div className="md:col-span-6">
                                    <ul className="space-y-2">
                                        {exp.bullets.map((bullet, j) => (
                                            <li
                                                key={j}
                                                className="exp-bullet flex items-start gap-3 text-[var(--text-secondary)]"
                                                style={{ fontFamily: 'var(--font-body)' }}
                                            >
                                                <span className="text-[var(--text-muted)] mt-1.5">—</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Period */}
                                <div className="md:col-span-2 md:text-right">
                                    <span
                                        className="text-xs text-[var(--text-muted)] tracking-wide"
                                        style={{ fontFamily: 'var(--font-sans)' }}
                                    >
                                        {exp.period}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Final rule */}
                    <hr
                        ref={el => rulesRef.current[experienceData.length] = el}
                        className="border-0 border-t border-[var(--divider)]"
                    />
                </div>

                <hr className="rule mt-12" />
            </div>
        </section>
    )
}

export default Experience
