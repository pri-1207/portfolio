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
    description: 'Developed RAG-based document search features, improving query accuracy by 40%. Built internal tools using Python, FastAPI, and React.',
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
    description: 'Delivered 5+ client projects including e-commerce platforms, portfolio websites, and custom web applications.',
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
          grid-template-columns: 280px 1fr;
          gap: 4rem;
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
          gap: 1.5rem;
          padding-bottom: 2.5rem;
        }

        .exp-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 6px;
        }

        .marker-dot {
          width: 12px;
          height: 12px;
          background: var(--primrose-pink);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .marker-line {
          width: 2px;
          flex: 1;
          background: var(--pinktone-deep);
          margin-top: 8px;
        }

        .exp-content {
          flex: 1;
          padding-bottom: 1rem;
        }

        .exp-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        .exp-period {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--primrose-pink-dark);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .exp-company {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--text-light);
        }

        .exp-role {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .exp-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 1rem;
        }

        .exp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        @media (max-width: 768px) {
          .exp-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .exp-header {
            position: static;
          }
        }
      `}</style>
    </section>
  );
}
