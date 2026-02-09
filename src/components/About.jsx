import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const sectionRef = useRef(null)
    const dropCapRef = useRef(null)
    const linesRef = useRef([])
    const noteRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Drop cap animation
            gsap.fromTo(dropCapRef.current,
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

            // Lines reveal one by one
            linesRef.current.forEach((line, i) => {
                if (line) {
                    gsap.fromTo(line,
                        { opacity: 0, y: 15 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.5,
                            delay: 0.1 * i,
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

            // Note box
            gsap.fromTo(noteRef.current,
                { opacity: 0, x: 20 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: noteRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const paragraphLines = [
        "I'm Prisha — a Computer Science student who enjoys building things that have structure and personality.",
        "Some days it's a retrieval pipeline that answers faster and better, and other days it's a full-stack feature that makes the product feel smoother.",
        "I'm currently exploring LLM-based systems, computer vision, and explainable ML."
    ]

    return (
        <section
            ref={sectionRef}
            id="about"
            className="section"
        >
            <div className="container">
                <h2 className="section-title">About</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Main content - 2 columns */}
                    <div className="lg:col-span-2">
                        <div className="body-text">
                            {/* First paragraph with drop cap */}
                            <p ref={dropCapRef} className="drop-cap mb-6">
                                {paragraphLines[0]}
                            </p>

                            {/* Remaining lines */}
                            {paragraphLines.slice(1).map((line, i) => (
                                <p
                                    key={i}
                                    ref={el => linesRef.current[i] = el}
                                    className="mb-4"
                                >
                                    {line}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar note - 1 column */}
                    <div className="lg:col-span-1">
                        <div ref={noteRef} className="sidebar-note">
                            <p className="italic text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                                Off-screen: tennis matches, fiction and non-fiction books, and poems in my notes app.
                                I'm also interested in designing and creative roles along with engineering.
                            </p>
                        </div>
                    </div>
                </div>

                <hr className="rule mt-12" />
            </div>
        </section>
    )
}

export default About
