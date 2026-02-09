'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  {
    category: 'Languages',
    color: 'pink',
    skills: ['C/C++', 'Python', 'Java', 'JavaScript', 'SQL']
  },
  {
    category: 'Core CS',
    color: 'lime',
    skills: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks']
  },
  {
    category: 'ML / AI',
    color: 'pink',
    skills: ['NumPy', 'Pandas', 'TensorFlow', 'LIME', 'SHAP', 'Scikit-learn']
  },
  {
    category: 'Web Development',
    color: 'lime',
    skills: ['React', 'Node.js', 'REST APIs', 'JWT', 'Next.js', 'Express']
  },
  {
    category: 'Tools & Platforms',
    color: 'pink',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Linux', 'Docker']
  }
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.skills-animate', { opacity: 0, y: 25 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to('.skills-animate', {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.06,
            ease: 'power2.out'
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="skills section alt-bg">
      <div className="container">
        <div className="section-header skills-animate">
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">What I <span className="italic-accent">Work With</span></h2>
        </div>

        <div className="skills-grid">
          {skillsData.map((group, index) => (
            <div key={index} className={`skill-group skills-animate ${group.color}`}>
              <h4 className="skill-group-title">{group.category}</h4>
              <div className="skill-pills">
                {group.skills.map((skill, i) => (
                  <span key={i} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .skill-group {
          padding: 1.5rem;
          background: white;
          border-radius: 10px;
          box-shadow: var(--shadow-soft);
        }

        .skill-group:first-child {
          grid-column: span 2;
        }

        .skill-group-title {
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-light);
          margin-bottom: 0.75rem;
        }

        .skill-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-pill {
          padding: 6px 14px;
          font-size: 0.8rem;
          font-weight: 500;
          border-radius: 20px;
          transition: all 0.2s ease;
          cursor: default;
        }

        /* Pink category - consistent base color */
        .skill-group.pink .skill-pill {
          background: var(--pinktone);
          color: var(--text-primary);
        }

        .skill-group.pink .skill-pill:hover {
          background: var(--primrose-pink);
          transform: translateY(-2px);
        }

        /* Lime category - consistent base color */
        .skill-group.lime .skill-pill {
          background: var(--lime-light);
          color: var(--text-primary);
        }

        .skill-group.lime .skill-pill:hover {
          background: var(--lime);
          transform: translateY(-2px);
        }

        @media (max-width: 700px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }

          .skill-group:first-child {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
}
