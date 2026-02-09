import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projectsData = [
    {
        title: 'IntelliQuery',
        subtitle: 'LightRAG LLM Document Retrieval',
        details: [
            '5× faster retrieval, 84.8% accuracy improvement',
            'Semantic search + hybrid indexing + reranking',
            'Explainable answers with sources'
        ],
        tag: 'AI/ML'
    },
    {
        title: 'ATR in SAR Images',
        subtitle: 'ViT + ConvNeXt',
        details: [
            '98–99% accuracy with ViT',
            'Benchmarking VGG16/ResNet50/ConvNeXt/ViT',
            'Evaluation: F1-score + confusion matrix'
        ],
        tag: 'Computer Vision'
    },
    {
        title: 'Personalized Health Fitness',
        subtitle: 'Recommendation System',
        details: [
            'Recommendations with XGBoost',
            'SHAP explainability for transparent decisions'
        ],
        tag: 'ML'
    },
    {
        title: 'Smart Digital Wardrobe',
        subtitle: 'Outfit Recommender',
        details: [
            'React + Node.js full-stack',
            'Color/style matching + weather filtering'
        ],
        tag: 'Full-Stack'
    }
]

const Projects = () => {
    const sectionRef = useRef(null)
    const folderRef = useRef(null)
    const frontRef = useRef(null)
    const cardsRef = useRef([])
    const [isOpen, setIsOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Folder entrance animation
            gsap.fromTo(folderRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 60%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const handleFolderClick = () => {
        if (!isOpen) {
            setIsOpen(true)

            // Animate folder open
            gsap.to(frontRef.current, {
                rotateY: -160,
                duration: 0.8,
                ease: 'power2.inOut',
                onComplete: () => {
                    // Animate cards sliding out
                    cardsRef.current.forEach((card, i) => {
                        if (card) {
                            gsap.fromTo(card,
                                {
                                    opacity: 0,
                                    y: -30,
                                    x: -20,
                                    rotation: -5
                                },
                                {
                                    opacity: 1,
                                    y: 0,
                                    x: 0,
                                    rotation: 0,
                                    duration: 0.5,
                                    delay: i * 0.12,
                                    ease: 'power2.out'
                                }
                            )
                        }
                    })
                }
            })
        }
    }

    const handleProjectClick = (index) => {
        if (selectedProject === index) {
            setSelectedProject(null)
        } else {
            setSelectedProject(index)
        }
    }

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="section"
        >
            <div className="container">
                <h2 className="section-title">Projects</h2>

                {/* Dossier Folder */}
                <div
                    ref={folderRef}
                    className="relative max-w-4xl mx-auto"
                >
                    {/* Folder container */}
                    <div
                        className="dossier-folder"
                        onClick={handleFolderClick}
                        style={{ perspective: '1500px' }}
                    >
                        {/* Folder back */}
                        <div className="folder-back min-h-[450px] md:min-h-[500px]">
                            <div className="folder-tab">
                                Dossier
                            </div>

                            {/* Project cards inside */}
                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                                {projectsData.map((project, i) => (
                                    <div
                                        key={i}
                                        ref={el => cardsRef.current[i] = el}
                                        className={`project-card opacity-0 transition-all duration-300 ${selectedProject === i ? 'ring-2 ring-[var(--text-primary)]' : ''
                                            }`}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            handleProjectClick(i)
                                        }}
                                    >
                                        {/* Tag */}
                                        <span
                                            className="absolute top-2 right-2 text-xs tracking-wider text-[var(--text-muted)]"
                                            style={{ fontFamily: 'var(--font-sans)' }}
                                        >
                                            {project.tag}
                                        </span>

                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-subtitle">{project.subtitle}</p>

                                        {/* Details - expanded view */}
                                        <div className={`overflow-hidden transition-all duration-300 ${selectedProject === i ? 'max-h-40 mt-2' : 'max-h-0'
                                            }`}>
                                            <ul className="space-y-1">
                                                {project.details.map((detail, j) => (
                                                    <li key={j} className="project-detail flex items-start gap-2">
                                                        <span className="text-[var(--text-muted)]">•</span>
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Click hint */}
                                        <p className="text-xs text-[var(--text-muted)] mt-3 italic" style={{ fontFamily: 'var(--font-body)' }}>
                                            {selectedProject === i ? 'Click to collapse' : 'Click to expand'}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Folder front (cover) */}
                        <div
                            ref={frontRef}
                            className={`folder-front ${isOpen ? 'open' : ''}`}
                            style={{
                                transformStyle: 'preserve-3d',
                                backfaceVisibility: 'hidden'
                            }}
                        >
                            <div className="folder-label">Project Dossier</div>
                            <div className="folder-sublabel mt-2">Click to open</div>

                            {/* Folder texture lines */}
                            <div className="absolute inset-x-8 top-1/2 space-y-2 -translate-y-4">
                                <div className="h-px bg-white/10" />
                                <div className="h-px bg-white/10" />
                                <div className="h-px bg-white/10" />
                            </div>

                            {/* Corner accent */}
                            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/20" />
                        </div>
                    </div>

                    {/* Instruction text */}
                    {!isOpen && (
                        <p
                            className="text-center mt-6 text-sm text-[var(--text-muted)] italic"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Click the folder to reveal projects
                        </p>
                    )}
                </div>

                <hr className="rule mt-16" />
            </div>
        </section>
    )
}

export default Projects
