'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StickyNote, WashiTape, PaperClip, CameraSticker, StarSticker } from './scrapbook';

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['C/C++', 'Python', 'JavaScript', 'Java', 'SQL'],
    color: 'yellow',
    rotation: -1.5
  },
  {
    category: 'Core CS',
    skills: ['DSA', 'OOP', 'DBMS', 'OS', 'Computer Networks', 'Software Engineering'],
    color: 'pink',
    rotation: 2
  },
  {
    category: 'AI/ML & Tools',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'TensorFlow', 'XGBoost', 'SHAP'],
    color: 'blue',
    rotation: -1
  },
  {
    category: 'Web Development',
    skills: ['HTML5', 'CSS3', 'React.js', 'Node.js', 'REST APIs', 'JWT Auth'],
    color: 'green',
    rotation: 1.5
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Cursor'],
    color: 'orange',
    rotation: -2
  }
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.skill-card', { opacity: 0, y: 40, rotation: 0 });
      gsap.set('.skill-tag', { opacity: 0, scale: 0.5 });
      gsap.set('.skills-sticker', { opacity: 0, scale: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.to('.skill-card', {
        opacity: 1,
        y: 0,
        rotation: (i) => skillsData[i]?.rotation || 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out'
      })
        .to('.skill-tag', {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          stagger: 0.02,
          ease: 'back.out(1.5)'
        }, '-=0.3')
        .to('.skills-sticker', {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: 'back.out(2)'
        }, '-=0.2');

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="skills-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrapper">
            <h2>Skills & Expertise</h2>
            <div className="label-strip"></div>
          </div>
          <div className="section-label">TECHNICAL TOOLKIT</div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-card-wrapper">
              <StickyNote
                color={category.color}
                rotation={category.rotation}
                className="skill-card"
              >
                {/* Paperclip on some cards */}
                {index % 2 === 0 && (
                  <PaperClip
                    color={index === 0 ? 'gold' : 'silver'}
                    rotation={15}
                    style={{ top: '-25px', right: '20px' }}
                  />
                )}

                {/* Category Title */}
                <h3 className="category-title">{category.category}</h3>

                {/* Skills Tags */}
                <div className="skills-tags">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </StickyNote>
            </div>
          ))}

          {/* Decorative Stickers */}
          <StarSticker style={{ top: '10px', right: '5%' }} size={25} className="skills-sticker" />
          <CameraSticker style={{ bottom: '20px', left: '8%' }} size={40} className="skills-sticker" />
        </div>

        {/* Side Label */}
        <div className="side-label-container">
          <span className="side-label">SKILLS</span>
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          padding: var(--section-padding) 0;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title-wrapper {
          display: inline-block;
          position: relative;
          margin-bottom: 0.75rem;
        }

        .section-title-wrapper h2 {
          font-family: var(--font-title);
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: var(--charcoal);
          position: relative;
          z-index: 1;
        }

        .label-strip {
          position: absolute;
          bottom: 2px;
          left: -10px;
          right: -10px;
          height: 14px;
          background: var(--sticky-blue);
          opacity: 0.6;
          z-index: 0;
          transform: rotate(-1deg);
        }

        .section-label {
          font-family: var(--font-typewriter);
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          color: var(--text-muted);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          padding: 1rem;
        }

        .skill-card-wrapper {
          position: relative;
        }

        .skill-card-wrapper :global(.sticky-note) {
          padding: 1.75rem;
          min-height: 180px;
        }

        .category-title {
          font-family: var(--font-typewriter);
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--charcoal);
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px dashed rgba(0,0,0,0.15);
        }

        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .skill-tag {
          display: inline-block;
          padding: 5px 10px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 3px;
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--cocoa);
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }

        .side-label-container {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }

        .side-label {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-family: var(--font-typewriter);
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.4;
        }

        @media (max-width: 768px) {
          .skills-grid {
            gap: 1.5rem;
          }

          .skill-card-wrapper :global(.sticky-note) {
            transform: rotate(0deg) !important;
          }

          .side-label-container {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
