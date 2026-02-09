import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skillsData = [
    {
        category: 'Programming Languages',
        subtitle: 'Core foundations',
        skills: ['C/C++', 'Python', 'JavaScript', 'Java', 'SQL']
    },
    {
        category: 'AI/ML Expertise',
        subtitle: 'Machine learning stack',
        skills: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'TensorFlow', 'XGBoost', 'SHAP']
    },
    {
        category: 'Web Development',
        subtitle: 'Full-stack technologies',
        skills: ['HTML5', 'CSS3', 'React.js', 'Node.js', 'REST APIs', 'JWT Authentication']
    },
    {
        category: 'Core CS',
        subtitle: 'Fundamental concepts',
        skills: ['DSA', 'OOP', 'DBMS', 'OS', 'Computer Networks', 'Software Engineering']
    },
    {
        category: 'Tools',
        subtitle: 'Development environment',
        skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Cursor']
    }
]

const Skills = () => {
    const sectionRef = useRef(null)
    const categoriesRef = useRef([])
    const tagsRef = useRef({})

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Category titles fade in
            categoriesRef.current.forEach((category, i) => {
                if (category) {
                    gsap.fromTo(category,
                        { opacity: 0, y: 20 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.5,
                            delay: i * 0.1,
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

            // Tags slide in
            Object.keys(tagsRef.current).forEach((key, catIndex) => {
                const tags = tagsRef.current[key]
                if (tags) {
                    tags.forEach((tag, i) => {
                        if (tag) {
                            gsap.fromTo(tag,
                                { opacity: 0, x: -15 },
                                {
                                    opacity: 1,
                                    x: 0,
                                    duration: 0.4,
                                    delay: (catIndex * 0.1) + (i * 0.05) + 0.2,
                                    ease: 'power2.out',
                                    scrollTrigger: {
                                        trigger: sectionRef.current,
                                        start: 'top 55%',
                                        toggleActions: 'play none none reverse'
                                    }
                                }
                            )
                        }
                    })
                }
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="section bg-[var(--paper-alt)]"
        >
            <div className="container">
                <h2 className="section-title">Skills & Expertise</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, catIndex) => {
                        // Initialize the ref array for this category
                        if (!tagsRef.current[catIndex]) {
                            tagsRef.current[catIndex] = []
                        }

                        return (
                            <div
                                key={catIndex}
                                ref={el => categoriesRef.current[catIndex] = el}
                                className="skill-category"
                            >
                                <h3 className="skill-category-title">{category.category}</h3>
                                <p className="skill-category-subtitle">{category.subtitle}</p>
                                <div className="skill-tags">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            ref={el => tagsRef.current[catIndex][skillIndex] = el}
                                            className="skill-tag"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>

                <hr className="rule mt-12" />
            </div>
        </section>
    )
}

export default Skills
