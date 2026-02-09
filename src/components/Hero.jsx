import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Arrow icon
const ArrowIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
)

// Download icon
const DownloadIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
)

const Hero = () => {
    const heroRef = useRef(null)
    const mastheadRef = useRef(null)
    const subtitleRef = useRef(null)
    const contentRef = useRef(null)
    const rulesRef = useRef([])
    const idCardRef = useRef(null)
    const ribbonRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // ID Card swing animation
            gsap.fromTo(idCardRef.current,
                {
                    opacity: 0,
                    y: -100,
                    rotateZ: -15
                },
                {
                    opacity: 1,
                    y: 0,
                    rotateZ: 0,
                    duration: 1.5,
                    ease: 'elastic.out(1, 0.5)',
                    delay: 0.2
                }
            )

            // Ribbon animation
            gsap.fromTo(ribbonRef.current,
                {
                    opacity: 0,
                    scaleY: 0
                },
                {
                    opacity: 1,
                    scaleY: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    transformOrigin: 'top center',
                    delay: 0
                }
            )

            // Masthead animation - ink reveal
            gsap.fromTo(mastheadRef.current,
                {
                    opacity: 0,
                    filter: 'blur(8px)',
                    y: 30
                },
                {
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    delay: 0.5
                }
            )

            // Subtitle strip
            gsap.fromTo(subtitleRef.current,
                { opacity: 0, x: -30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    delay: 1
                }
            )

            // Content columns
            gsap.fromTo(contentRef.current.children,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power2.out',
                    delay: 1.2
                }
            )

            // Rules draw in
            rulesRef.current.forEach((rule, i) => {
                if (rule) {
                    gsap.fromTo(rule,
                        { scaleX: 0 },
                        {
                            scaleX: 1,
                            duration: 0.8,
                            ease: 'power2.inOut',
                            delay: 0.8 + (i * 0.2),
                            transformOrigin: 'left center'
                        }
                    )
                }
            })

            // Gentle swaying animation for the ID card
            gsap.to(idCardRef.current, {
                rotateZ: 2,
                duration: 3,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
                delay: 2
            })
        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={heroRef}
            className="min-h-screen flex flex-col justify-center pt-20 md:pt-24 pb-16 relative overflow-hidden"
        >
            {/* Column guides */}
            <div className="column-guide" style={{ left: '25%' }} />
            <div className="column-guide" style={{ left: '50%' }} />
            <div className="column-guide" style={{ left: '75%' }} />

            {/* Realistic ID Card on Left Side */}
            <div className="id-card-container" ref={idCardRef}>
                {/* Lanyard/Ribbon */}
                <div className="lanyard" ref={ribbonRef}>
                    <div className="lanyard-strap"></div>
                    <div className="lanyard-clip">
                        <div className="clip-ring"></div>
                    </div>
                </div>

                {/* ID Card */}
                <div className="id-card">
                    {/* Photo Section - Large */}
                    <div className="id-photo-frame">
                        <div className="id-photo-placeholder">
                            {/* User silhouette icon */}
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
                                <circle cx="12" cy="8" r="4" />
                                <path d="M20 21a8 8 0 10-16 0" />
                            </svg>
                            <span>Photo</span>
                        </div>
                    </div>

                    {/* Name Section */}
                    <div className="id-name-section">
                        <div className="id-name">PRISHA GUPTA</div>
                    </div>

                    {/* Card Edge Effects */}
                    <div className="card-shine"></div>
                </div>
            </div>


            <div className="container hero-content">
                {/* Top rule */}
                <hr
                    ref={el => rulesRef.current[0] = el}
                    className="rule-double mb-8 md:mb-12"
                />

                {/* Masthead */}
                <h1
                    ref={mastheadRef}
                    className="display-xl text-center mb-4 md:mb-6"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    PRISHA GUPTA
                </h1>

                {/* Subtitle strip */}
                <div
                    ref={subtitleRef}
                    className="flex justify-center mb-8 md:mb-12"
                >
                    <p
                        className="italic-subtitle text-center px-6 py-2 border-y border-[var(--divider)]"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        Software Engineering Student • AI • Full Stack • LLMs
                    </p>
                </div>

                {/* Rule */}
                <hr
                    ref={el => rulesRef.current[1] = el}
                    className="rule mb-12"
                />

                {/* Two column layout */}
                <div
                    ref={contentRef}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
                >
                    {/* Left column - Intro */}
                    <div className="lg:pl-8">
                        <p
                            className="body-text leading-[1.9] mb-8"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            I'm a CSE student at IIIT Pune who enjoys building practical systems —
                            LLM-powered retrieval, clean full-stack apps, and ML work that's measurable.
                            I like balancing performance with clarity, and I'm happiest when the solution
                            feels both smart and simple.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a href="#projects" className="btn btn-primary">
                                <span>Read Projects</span>
                                <ArrowIcon />
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                            >
                                <span>Download Resume</span>
                                <DownloadIcon />
                            </a>
                        </div>
                    </div>

                    {/* Right column - Additional info or empty */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="text-center lg:text-right">
                            <p className="body-text italic text-[var(--text-muted)]">
                                Building the future,<br />
                                one line of code at a time.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom rule */}
                <hr
                    ref={el => rulesRef.current[2] = el}
                    className="rule mt-16"
                />
            </div>
        </section>
    )
}

export default Hero
