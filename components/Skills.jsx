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
          gap: 2rem;
          margin-top: 3rem;
        }

        .skill-group {
          padding: 2.25rem;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          border: 1px solid rgba(232, 180, 184, 0.05);
          transition: all 0.4s ease;
        }

        .skill-group:hover {
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border-color: rgba(232, 180, 184, 0.2);
        }

        .skill-group:first-child {
          grid-column: span 2;
        }

        .skill-group-title {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--primrose-pink-dark);
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .skill-group-title::after {
          content: '';
          height: 1px;
          flex-grow: 1;
          background: linear-gradient(to right, rgba(232, 180, 184, 0.3), transparent);
        }

        .skill-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-pill {
          padding: 8px 18px;
          font-size: 0.85rem;
          font-weight: 500;
          border-radius: 30px;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: default;
          color: var(--text-primary);
        }

        /* Pink category */
        .skill-group.pink .skill-pill {
          background: var(--pinktone);
        }

        .skill-group.pink .skill-pill:hover {
          background: var(--primrose-pink);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(232, 180, 184, 0.3);
        }

        /* Lime category */
        .skill-group.lime .skill-pill {
          background: var(--lime-light);
        }

        .skill-group.lime .skill-pill:hover {
          background: var(--lime);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(168, 198, 159, 0.3);
        }

        @media (max-width: 900px) {
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
