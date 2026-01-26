'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrapPageCard, WashiTape, PaperClip, StarSticker, FlowerSticker } from './scrapbook';

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    title: 'Literary Club Head',
    organization: 'Eclectic — Literary Club',
    period: '09/2025 — Present',
    description: 'Leading and managing a club of 30+ members. Active in debates, poetry, and writing events.',
    color: '#FFF59D',
    rotation: -2
  },
  {
    title: 'Core Placement Coordinator',
    organization: 'IIIT Pune',
    period: '03/2025 — Present',
    description: 'Coordinated recruitment drives and streamlined communication between recruiters and students.',
    color: '#F8BBD9',
    rotation: 1.5
  },
  {
    title: 'Core Member',
    organization: 'Vanity Crew — Dance Club IIIT Pune',
    period: 'Ongoing',
    description: 'Contributed to performances and team coordination.',
    color: '#B3E5FC',
    rotation: -1
  }
];

// Pushpin component
const Pushpin = ({ color = '#B84A4A', style = {} }) => (
  <div style={{
    position: 'absolute',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    background: `radial-gradient(circle at 30% 30%, ${color} 0%, ${color}99 100%)`,
    boxShadow: '0 2px 4px rgba(0,0,0,0.25), inset 0 -2px 4px rgba(0,0,0,0.2)',
    zIndex: 15,
    ...style
  }}>
    <div style={{
      position: 'absolute',
      top: '4px',
      left: '5px',
      width: '5px',
      height: '5px',
      background: 'rgba(255,255,255,0.4)',
      borderRadius: '50%'
    }} />
  </div>
);

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.corkboard', { opacity: 0, scale: 0.95 });
      gsap.set('.exp-card', { opacity: 0, y: 30, rotation: 0 });
      gsap.set('.exp-sticker', { opacity: 0, scale: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.to('.corkboard', {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out'
      })
        .to('.exp-card', {
          opacity: 1,
          y: 0,
          rotation: (i) => experienceData[i]?.rotation || 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out'
        }, '-=0.3')
        .to('.exp-sticker', {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: 'back.out(2)'
        }, '-=0.3');

      // Gentle swing animation
      gsap.to('.exp-card', {
        rotation: '+=0.5',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.5
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="experience-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrapper">
            <h2>Experience</h2>
            <div className="label-strip"></div>
          </div>
          <div className="section-label">LEADERSHIP & ROLES</div>
        </div>

        {/* Cork Board */}
        <div className="corkboard-wrapper">
          <div className="corkboard">
            {/* Board frame */}
            <div className="board-frame">
              {/* Cork texture background */}
              <div className="cork-surface">
                {/* Experience Cards */}
                {experienceData.map((exp, index) => (
                  <div
                    key={index}
                    className="exp-card"
                    style={{
                      background: exp.color,
                      '--rotation': `${exp.rotation}deg`
                    }}
                  >
                    {/* Pushpin */}
                    <Pushpin
                      color={index === 0 ? '#B84A4A' : index === 1 ? '#2E5E8A' : '#8BA888'}
                      style={{ top: '-8px', left: '50%', transform: 'translateX(-50%)' }}
                    />

                    {/* Content */}
                    <h3 className="exp-title">{exp.title}</h3>
                    <p className="exp-org">{exp.organization}</p>

                    <div className="exp-period">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {exp.period}
                    </div>

                    <p className="exp-description">{exp.description}</p>

                    {/* Corner tape on some cards */}
                    {index === 1 && (
                      <div className="corner-tape"></div>
                    )}
                  </div>
                ))}

                {/* Decorative elements on board */}
                <StarSticker style={{ top: '20px', right: '30px' }} size={22} className="exp-sticker" />
                <FlowerSticker style={{ bottom: '25px', left: '40px' }} size={28} className="exp-sticker" />

                {/* Paper clip decoration */}
                <PaperClip color="silver" rotation={-15} style={{ top: '40px', left: '25px' }} className="exp-sticker" />
              </div>
            </div>
          </div>
        </div>

        {/* Side Label */}
        <div className="side-label-container">
          <span className="side-label">EXPERIENCE</span>
        </div>
      </div>

      <style jsx>{`
        .experience-section {
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
          background: var(--sticky-orange);
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

        .corkboard-wrapper {
          max-width: 950px;
          margin: 0 auto;
        }

        .corkboard {
          position: relative;
        }

        .board-frame {
          background: linear-gradient(180deg, #8B6914 0%, #705812 100%);
          padding: 16px;
          border-radius: 8px;
          box-shadow: 
            0 8px 30px rgba(0,0,0,0.15),
            inset 0 1px 1px rgba(255,255,255,0.1);
        }

        .cork-surface {
          background: 
            url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.12'/%3E%3C/svg%3E"),
            linear-gradient(135deg, #D4A574 0%, #C49664 50%, #B48654 100%);
          border-radius: 4px;
          padding: 2.5rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
          position: relative;
          min-height: 350px;
        }

        .exp-card {
          padding: 1.5rem;
          border-radius: 2px;
          position: relative;
          box-shadow: 2px 3px 10px rgba(0,0,0,0.12);
          transform: rotate(var(--rotation));
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .exp-card:hover {
          transform: rotate(0deg) scale(1.02);
          box-shadow: 4px 6px 20px rgba(0,0,0,0.18);
          z-index: 10;
        }

        .exp-title {
          font-family: var(--font-title);
          font-size: 1.15rem;
          color: var(--charcoal);
          margin-bottom: 0.35rem;
        }

        .exp-org {
          font-family: var(--font-typewriter);
          font-size: 0.8rem;
          color: var(--muted-red);
          margin-bottom: 0.75rem;
        }

        .exp-period {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 4px 10px;
          background: rgba(255,255,255,0.5);
          border-radius: 4px;
          font-family: var(--font-typewriter);
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }

        .exp-description {
          font-family: var(--font-body);
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--cocoa);
          margin: 0;
        }

        .corner-tape {
          position: absolute;
          bottom: -4px;
          right: 10px;
          width: 35px;
          height: 14px;
          background: rgba(255, 248, 220, 0.8);
          border: 1px solid rgba(200, 180, 150, 0.3);
          transform: rotate(5deg);
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
          .cork-surface {
            padding: 1.5rem;
            grid-template-columns: 1fr;
          }

          .exp-card {
            transform: rotate(0deg);
          }

          .side-label-container {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
