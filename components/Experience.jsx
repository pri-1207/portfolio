'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    role: 'Software Engineering Intern',
    company: 'Tech Startup',
    period: 'Summer 2025',
    description: 'Developed RAG-based document search features, improving query accuracy by 40%. Built internal tools using Python, FastAPI and React.',
    highlights: ['RAG Systems', 'Python', 'FastAPI']
  },
  {
    role: 'ML Research Assistant',
    company: 'IIIT Pune',
    period: '2024 - Present',
    description: 'Researching explainable AI methods for computer vision models. Published work on model interpretability and feature attribution.',
    highlights: ['Computer Vision', 'XAI', 'Research']
  },
  {
    role: 'Full Stack Developer',
    company: 'Freelance',
    period: '2023 - 2024',
    description: 'Delivered 5+ client projects including e-commerce platforms, portfolio websites and custom web applications.',
    highlights: ['Next.js', 'Node.js', 'PostgreSQL']
  }
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.exp-animate', { opacity: 0, y: 30 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to('.exp-animate', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out'
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="experience section">
      <div className="container">
        <div className="exp-layout">
          {/* Header */}
          <div className="exp-header exp-animate">
            <span className="section-label">Career</span>
            <h2 className="section-title">
              Work <span className="italic-accent">Experience</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="exp-timeline">
            {experienceData.map((exp, index) => (
              <div key={index} className="exp-item exp-animate">
                <div className="exp-marker">
                  <span className="marker-dot"></span>
                  {index < experienceData.length - 1 && <span className="marker-line"></span>}
                </div>

                <div className="exp-content">
                  <div className="exp-meta">
                    <span className="exp-period">{exp.period}</span>
                    <span className="exp-company">{exp.company}</span>
                  </div>

                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-desc">{exp.description}</p>

                  <div className="exp-tags">
                    {exp.highlights.map((tag, i) => (
                      <span key={i} className={`tag ${i % 2 === 0 ? '' : 'lime'}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience {
          background: var(--yucca);
        }

        .exp-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 5rem;
        }

        .exp-header {
          position: sticky;
          top: 120px;
          height: fit-content;
        }

        .exp-timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .exp-item {
          display: flex;
          gap: 2.5rem;
          padding-bottom: 3.5rem;
          position: relative;
        }

        .exp-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 10px;
        }

        .marker-dot {
          width: 14px;
          height: 14px;
          background: var(--primrose-pink);
          border: 3px solid white;
          box-shadow: 0 0 0 1px var(--primrose-pink-light);
          border-radius: 50%;
          flex-shrink: 0;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .exp-item:hover .marker-dot {
          transform: scale(1.3);
          background: var(--primrose-pink-dark);
        }

        .marker-line {
          width: 2px;
          flex: 1;
          background: linear-gradient(to bottom, var(--pinktone-deep), transparent);
          margin-top: 8px;
          opacity: 0.6;
        }

        .exp-content {
          flex: 1;
          padding: 1.5rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.02);
          border: 1px solid rgba(232, 180, 184, 0.05);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .exp-content:hover {
          transform: translateX(10px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border-color: rgba(232, 180, 184, 0.2);
        }

        .exp-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }

        .exp-period {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--primrose-pink-dark);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .exp-company {
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-light);
          padding: 2px 8px;
          background: var(--yucca-warm);
          border-radius: 4px;
        }

        .exp-role {
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .exp-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }

        .exp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        @media (max-width: 900px) {
          .exp-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .exp-header {
            position: static;
          }

          .exp-item {
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
