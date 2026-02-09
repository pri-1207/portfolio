'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Clean SVG icons matching the theme
const icons = {
  brain: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
      <path d="M12 18v4" />
    </svg>
  ),
  satellite: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 7 9 3 5 7l4 4" />
      <path d="m17 11 4 4-4 4-4-4" />
      <path d="m8 12 4 4 6-6-4-4Z" />
      <path d="m16 8 3-3" />
      <path d="M9 21a6 6 0 0 0-6-6" />
    </svg>
  ),
  heart: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
      <path d="m18 15-2-2" />
      <path d="m15 18-2-2" />
    </svg>
  )
};

const projectsData = [
  {
    title: 'IntelliQuery',
    subtitle: 'LLM + LightRAG System',
    description: 'Built an intelligent document retrieval system using LightRAG architecture with semantic chunking, efficient embeddings, and context-aware query answering for enterprise knowledge bases.',
    tags: ['Python', 'LangChain', 'LightRAG', 'Vector DB'],
    icon: 'brain',
    github: 'https://github.com/pri-1207/intelliquery',
    gradient: 'pink'
  },
  {
    title: 'SAR Image ATR',
    subtitle: 'Vision Transformers & ConvNeXt',
    description: 'Automatic Target Recognition on SAR imagery using Vision Transformers and ConvNeXt architectures. Implemented explainability with LIME and SHAP for model interpretability.',
    tags: ['Python', 'PyTorch', 'ViT', 'ConvNeXt', 'XAI'],
    icon: 'satellite',
    github: 'https://github.com/pri-1207/sar-atr',
    gradient: 'lime'
  },
  {
    title: 'Health & Fitness System',
    subtitle: 'Personalized Wellness Platform',
    description: 'Full-stack personalized health platform with workout recommendations, nutrition tracking, and progress analytics. Built with React, Node.js, and PostgreSQL.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
    icon: 'heart',
    github: 'https://github.com/pri-1207/health-fitness',
    gradient: 'pink'
  }
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.project-animate', { opacity: 0, y: 30 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        onEnter: () => {
          gsap.to('.project-animate', {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out'
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="projects section">
      <div className="container">
        <div className="section-header project-animate">
          <span className="section-label">Featured Work</span>
          <h2 className="section-title">
            Recent <span className="italic-accent">Projects</span>
          </h2>
          <p className="section-desc">
            A selection of projects showcasing my work in AI, ML, and full-stack development.
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <article key={index} className="project-card project-animate">
              <div className={`project-thumb ${project.gradient}`}>
                <div className="project-icon">{icons[project.icon]}</div>
              </div>

              <div className="project-content">
                <span className="project-subtitle">{project.subtitle}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`tag ${i % 2 !== 0 ? 'lime' : ''}`}>{tag}</span>
                  ))}
                </div>

                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  View on GitHub
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-cta project-animate">
          <a href="https://github.com/pri-1207" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            View All on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .section-desc {
          max-width: 500px;
          margin-top: 1rem;
          font-size: 1rem;
          color: var(--text-secondary);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 4rem;
        }

        .project-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          border: 1px solid rgba(232, 180, 184, 0.1);
          transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
          border-color: rgba(232, 180, 184, 0.3);
        }

        .project-thumb {
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .project-thumb::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: 0.5s;
        }

        .project-card:hover .project-thumb::after {
          left: 150%;
        }

        .project-thumb.pink {
          background: linear-gradient(135deg, var(--pinktone) 0%, var(--primrose-pink-light) 100%);
        }

        .project-thumb.lime {
          background: linear-gradient(135deg, var(--lime-light) 0%, var(--lime) 100%);
        }

        .project-icon {
          width: 56px;
          height: 56px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 16px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .project-thumb.pink .project-icon {
          color: var(--primrose-pink-dark);
        }

        .project-thumb.lime .project-icon {
          color: var(--lime-dark);
        }

        .project-content {
          padding: 1.75rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .project-subtitle {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--primrose-pink-dark);
          margin-bottom: 0.5rem;
          display: block;
        }

        .project-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .project-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1.25rem;
          color: var(--text-secondary);
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          margin-top: auto;
        }

        .project-link {
          font-size: 0.85rem;
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          position: relative;
          width: fit-content;
        }

        .project-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--lime);
          transition: width 0.3s ease;
        }

        .project-link:hover::after {
          width: 100%;
        }

        .projects-cta {
          text-align: center;
          margin-top: 4rem;
        }

        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
