import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Thin monochrome icons
const icons = {
    ai: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v4M12 19v4M1 12h4M19 12h4" />
            <path d="M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
        </svg>
    ),
    code: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    ),
    llm: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 9h6M9 12h6M9 15h4" />
        </svg>
    ),
    explainable: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
        </svg>
    ),
    vision: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    ),
    api: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
            <line x1="6" y1="1" x2="6" y2="4" />
            <line x1="10" y1="1" x2="10" y2="4" />
            <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
    )
}

const focusItems = [
    { icon: 'ai', title: 'AI & Machine Learning' },
    { icon: 'code', title: 'Full-Stack Development' },
    { icon: 'llm', title: 'LLM Applications (RAG, Document Retrieval)' },
    { icon: 'explainable', title: 'Explainable AI (SHAP)' },
    { icon: 'vision', title: 'Computer Vision (Vision Transformers)' },
    { icon: 'api', title: 'APIs, Auth & Integration' },
]

const Focus = () => {
    const sectionRef = useRef(null)
    const itemsRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            itemsRef.current.forEach((item, i) => {
                if (item) {
                    gsap.fromTo(item,
                        {
                            opacity: 0,
                            x: -20,
                            filter: 'blur(2px)'
                        },
                        {
                            opacity: 1,
                            x: 0,
                            filter: 'blur(0px)',
                            duration: 0.5,
                            delay: i * 0.1,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: 'top 65%',
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
            id="focus"
            className="section bg-[var(--paper-alt)]"
        >
            <div className="container">
                <h2 className="section-title">Focus Areas</h2>

                <div className="space-y-0">
                    {focusItems.map((item, i) => {
                        const IconComponent = icons[item.icon]
                        return (
                            <div
                                key={i}
                                ref={el => itemsRef.current[i] = el}
                                className="flex items-center gap-4 py-4 border-b border-[var(--divider)] group cursor-default hover:bg-[var(--paper)] transition-colors px-2 -mx-2"
                            >
                                <span className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                                    <IconComponent />
                                </span>
                                <span
                                    className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors"
                                    style={{ fontFamily: 'var(--font-body)' }}
                                >
                                    {item.title}
                                </span>
                                <span
                                    className="ml-auto text-xs text-[var(--text-muted)] tracking-widest"
                                    style={{ fontFamily: 'var(--font-sans)' }}
                                >
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                            </div>
                        )
                    })}
                </div>

                <hr className="rule mt-12" />
            </div>
        </section>
    )
}

export default Focus
