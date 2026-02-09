import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Icons
const EmailIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 6l-10 7L2 6" />
    </svg>
)

const GithubIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
)

const LinkedInIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
)

const contactLinks = [
    {
        icon: EmailIcon,
        label: 'Email',
        value: 'gprisha1207@gmail.com',
        href: 'mailto:gprisha1207@gmail.com'
    },
    {
        icon: GithubIcon,
        label: 'GitHub',
        value: 'github.com/pri-1207',
        href: 'https://github.com/pri-1207'
    },
    {
        icon: LinkedInIcon,
        label: 'LinkedIn',
        value: 'linkedin.com/in/prishagupta2005',
        href: 'https://linkedin.com/in/prishagupta2005/'
    }
]

const Contact = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const linksRef = useRef([])
    const underlineRefs = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title fade in
            gsap.fromTo(titleRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

            // Links fade in with underline draw
            linksRef.current.forEach((link, i) => {
                if (link) {
                    gsap.fromTo(link,
                        { opacity: 0, y: 15 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.5,
                            delay: 0.2 + (i * 0.1),
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: 'top 70%',
                                toggleActions: 'play none none reverse'
                            }
                        }
                    )
                }

                // Underline draw animation
                if (underlineRefs.current[i]) {
                    gsap.fromTo(underlineRefs.current[i],
                        { scaleX: 0 },
                        {
                            scaleX: 1,
                            duration: 0.6,
                            delay: 0.5 + (i * 0.1),
                            ease: 'power2.out',
                            transformOrigin: 'left center',
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: 'top 70%',
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
            id="contact"
            className="section"
        >
            <div className="container">
                <div className="max-w-2xl mx-auto text-center">
                    <h2
                        ref={titleRef}
                        className="display-md mb-12"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Contact
                    </h2>

                    <div className="space-y-6">
                        {contactLinks.map((contact, i) => {
                            const IconComponent = contact.icon
                            return (
                                <div
                                    key={i}
                                    ref={el => linksRef.current[i] = el}
                                    className="flex items-center justify-center gap-4"
                                >
                                    <span className="text-[var(--text-muted)]">
                                        <IconComponent />
                                    </span>
                                    <a
                                        href={contact.href}
                                        target={contact.href.startsWith('mailto') ? undefined : '_blank'}
                                        rel={contact.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                        className="relative group"
                                    >
                                        <span
                                            className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors"
                                            style={{ fontFamily: 'var(--font-body)' }}
                                        >
                                            {contact.value}
                                        </span>
                                        {/* Underline */}
                                        <span
                                            ref={el => underlineRefs.current[i] = el}
                                            className="absolute bottom-0 left-0 w-full h-px bg-[var(--text-primary)]"
                                        />
                                    </a>
                                </div>
                            )
                        })}
                    </div>

                    {/* Classified style note */}
                    <div className="mt-16 pt-8 border-t border-[var(--divider)]">
                        <p
                            className="text-sm italic text-[var(--text-muted)]"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Open to opportunities in AI/ML, Full-Stack Development, and Research.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
