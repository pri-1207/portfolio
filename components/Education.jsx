'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrapPageCard, WashiTape, PaperClip, StarSticker, LeafSticker } from './scrapbook';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    institution: 'IIIT Pune',
    degree: 'B.Tech Computer Science & Engineering',
    score: 'CGPA: 7.5',
    period: '2023 — Present',
    color: '#FFF59D',
    borderColor: '#B84A4A'
  },
  {
    institution: 'Spring Valley School (CBSE)',
    degree: 'Senior Secondary',
    score: '91.8%',
    period: '2023',
    color: '#F8BBD9',
    borderColor: '#2E5E8A'
  },
  {
    institution: 'Sacred Heart Convent School',
    degree: 'Class 10',
    score: '95%',
    period: '2021',
    color: '#B3E5FC',
    borderColor: '#8BA888'
  }
];

// Graduation Cap Icon
const GradCapIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
  </svg>
);

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.edu-card', { opacity: 0, y: 50, rotation: 0 });
      gsap.set('.edu-sticker', { opacity: 0, scale: 0 });
      gsap.set('.edu-tape', { opacity: 0, y: -15 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.to('.edu-tape', {
        opacity: 0.85,
        y: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: 'power2.out'
      })
        .to('.edu-card', {
          opacity: 1,
          y: 0,
          rotation: (i) => [-2, 1.5, -1][i] || 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out'
        }, '-=0.2')
        .to('.edu-sticker', {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: 'back.out(2)'
        }, '-=0.3');

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="education" className="education-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrapper">
            <h2>
              <span className="icon-wrapper"><GradCapIcon /></span>
              Education
            </h2>
            <div className="label-strip"></div>
          </div>
          <div className="section-label">ACADEMIC JOURNEY</div>
        </div>

        {/* Cards Stack */}
        <div className="cards-stack">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="edu-card"
              style={{
                '--card-color': edu.color,
                '--border-color': edu.borderColor,
                '--rotation': `${[-2, 1.5, -1][index]}deg`
              }}
            >
              {/* Tape on top */}
              <WashiTape
                color={['pink', 'blue', 'mint'][index]}
                pattern="polka"
                direction="horizontal"
                style={{ top: '-8px', left: '30%', width: '60px' }}
                className="edu-tape"
              />

              {/* Card top strip */}
              <div className="card-strip"></div>

              {/* Content */}
              <div className="card-content">
                <div className="card-main">
                  <h3 className="institution">{edu.institution}</h3>
                  <p className="degree">{edu.degree}</p>
                </div>

                {/* Score badge */}
                <div className="score-badge">
                  <StarSticker style={{ position: 'relative' }} size={14} />
                  <span>{edu.score}</span>
                </div>

                {/* Period */}
                <span className="period">{edu.period}</span>
              </div>

              {/* Paper clip on some */}
              {index === 0 && (
                <PaperClip color="gold" rotation={-12} style={{ top: '-18px', right: '25px' }} />
              )}
            </div>
          ))}

          {/* Decorative stickers */}
          <LeafSticker style={{ bottom: '-20px', left: '20%' }} size={26} className="edu-sticker" />
        </div>
      </div>

      <style jsx>{`
        .education-section {
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
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }

        .icon-wrapper {
          color: var(--sage-green);
        }

        .label-strip {
          position: absolute;
          bottom: 2px;
          left: -10px;
          right: -10px;
          height: 14px;
          background: var(--sticky-blue);
          opacity: 0.5;
          z-index: 0;
          transform: rotate(-1deg);
        }

        .section-label {
          font-family: var(--font-typewriter);
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          color: var(--text-muted);
        }

        .cards-stack {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          max-width: 650px;
          margin: 0 auto;
          position: relative;
        }

        .edu-card {
          width: 100%;
          background: var(--card-color);
          border-radius: 4px;
          position: relative;
          box-shadow: 2px 3px 12px rgba(0,0,0,0.1);
          transform: rotate(var(--rotation));
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          overflow: hidden;
        }

        .edu-card:hover {
          transform: rotate(0deg) translateY(-5px);
          box-shadow: 4px 6px 20px rgba(0,0,0,0.15);
          z-index: 10;
        }

        .card-strip {
          height: 8px;
          width: 100%;
          background: var(--border-color);
        }

        .card-content {
          padding: 1.5rem 2rem 1.75rem;
          position: relative;
        }

        .card-main {
          padding-right: 80px;
        }

        .institution {
          font-family: var(--font-title);
          font-size: 1.25rem;
          color: var(--charcoal);
          margin-bottom: 0.35rem;
        }

        .degree {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--cocoa);
          margin-bottom: 1rem;
        }

        .score-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 20px;
          font-family: var(--font-typewriter);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--charcoal);
        }

        .period {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          font-family: var(--font-typewriter);
          font-size: 0.75rem;
          color: var(--text-muted);
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .card-content {
            padding: 1.25rem 1.5rem 1.5rem;
          }

          .card-main {
            padding-right: 0;
          }

          .period {
            position: static;
            display: inline-block;
            margin-top: 0.5rem;
          }

          .edu-card {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
}
