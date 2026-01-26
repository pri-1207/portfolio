'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TicketStub, WashiTape, StarSticker, FlowerSticker } from './scrapbook';

gsap.registerPlugin(ScrollTrigger);

const certificationsData = [
  {
    title: 'Machine Learning A–Z: AI (Python & R) + ChatGPT Prize',
    year: '2025',
    provider: 'Udemy',
    icon: 'brain'
  },
  {
    title: 'The Complete Full-Stack Web Development Bootcamp',
    year: '2025',
    provider: 'Udemy',
    icon: 'code'
  }
];

// Brain Icon
const BrainIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);

// Code Icon
const CodeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

// Check Icon
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const iconMap = {
  brain: BrainIcon,
  code: CodeIcon
};

export default function Certifications() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.cert-ticket', { opacity: 0, x: -40 });
      gsap.set('.cert-sticker', { opacity: 0, scale: 0 });
      gsap.set('.cert-tape', { opacity: 0, y: -15 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.to('.cert-tape', {
        opacity: 0.85,
        y: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: 'power2.out'
      })
        .to('.cert-ticket', {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out'
        }, '-=0.2')
        .to('.cert-sticker', {
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
    <section ref={sectionRef} id="certifications" className="certifications-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrapper">
            <h2>Certifications</h2>
            <div className="label-strip"></div>
          </div>
          <div className="section-label">CONTINUOUS LEARNING</div>
        </div>

        {/* Certifications List */}
        <div className="certifications-layout">
          {/* Decorative stripe on side */}
          <div className="side-stripe">
            <WashiTape
              color="mint"
              pattern="striped"
              direction="horizontal"
              style={{ position: 'relative', width: '100%', height: '24px' }}
              className="cert-tape"
            />
          </div>

          {/* Tickets container */}
          <div className="tickets-container">
            {certificationsData.map((cert, index) => {
              const IconComponent = iconMap[cert.icon];
              return (
                <div key={index} className="cert-ticket-wrapper">
                  <div className="cert-ticket">
                    {/* Ticket punch holes */}
                    <div className="punch-hole top"></div>
                    <div className="punch-hole bottom"></div>

                    {/* Perforated edge */}
                    <div className="perf-edge"></div>

                    {/* Content */}
                    <div className="cert-content">
                      {/* Icon */}
                      <div className="cert-icon">
                        <IconComponent />
                      </div>

                      {/* Details */}
                      <div className="cert-details">
                        <h3 className="cert-title">{cert.title}</h3>
                        <div className="cert-meta">
                          <span className="cert-provider">{cert.provider}</span>
                          <span className="cert-divider">•</span>
                          <span className="cert-year">{cert.year}</span>
                        </div>
                      </div>

                      {/* Verified badge */}
                      <div className="verified-badge">
                        <CheckIcon />
                        <span>Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Page number */}
          <div className="page-number">pg. 9</div>

          {/* Stickers */}
          <StarSticker style={{ top: '10px', right: '10%' }} size={22} className="cert-sticker" />
          <FlowerSticker style={{ bottom: '30px', left: '15%' }} size={26} className="cert-sticker" />
        </div>
      </div>

      <style jsx>{`
        .certifications-section {
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
          background: var(--washi-mint);
          opacity: 0.8;
          z-index: 0;
          transform: rotate(-1deg);
        }

        .section-label {
          font-family: var(--font-typewriter);
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          color: var(--text-muted);
        }

        .certifications-layout {
          max-width: 700px;
          margin: 0 auto;
          position: relative;
          padding-left: 50px;
        }

        .side-stripe {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 35px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .tickets-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .cert-ticket-wrapper {
          position: relative;
        }

        .cert-ticket {
          background: var(--paper-cream);
          padding: 1.5rem 1.5rem 1.5rem 2rem;
          position: relative;
          box-shadow: 
            0 2px 10px rgba(0,0,0,0.06),
            0 4px 20px rgba(0,0,0,0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .cert-ticket:hover {
          transform: translateX(5px);
          box-shadow: 
            0 4px 15px rgba(0,0,0,0.1),
            0 8px 30px rgba(0,0,0,0.06);
        }

        .punch-hole {
          position: absolute;
          left: -10px;
          width: 20px;
          height: 20px;
          background: var(--gingham-blue-light);
          border-radius: 50%;
        }

        .punch-hole.top { top: -10px; }
        .punch-hole.bottom { bottom: -10px; }

        .perf-edge {
          position: absolute;
          left: 1.5rem;
          top: 0;
          bottom: 0;
          width: 0;
          border-left: 3px dashed var(--kraft-paper);
          opacity: 0.5;
        }

        .cert-content {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;
          padding-left: 0.75rem;
        }

        .cert-icon {
          flex-shrink: 0;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #F5ECD7 0%, #E8E0CE 100%);
          border-radius: 10px;
          color: var(--kraft-dark);
        }

        .cert-details {
          flex: 1;
        }

        .cert-title {
          font-family: var(--font-title);
          font-size: 1rem;
          color: var(--charcoal);
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }

        .cert-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-typewriter);
          font-size: 0.8rem;
        }

        .cert-provider {
          color: var(--muted-red);
          font-weight: 500;
        }

        .cert-divider {
          color: var(--text-muted);
        }

        .cert-year {
          color: var(--text-muted);
        }

        .verified-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: rgba(139, 168, 136, 0.15);
          border-radius: 12px;
          font-family: var(--font-typewriter);
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--sage-green);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .page-number {
          position: absolute;
          bottom: -25px;
          right: 0;
          font-family: var(--font-typewriter);
          font-size: 0.7rem;
          font-style: italic;
          color: var(--text-muted);
          opacity: 0.6;
        }

        @media (max-width: 768px) {
          .certifications-layout {
            padding-left: 0;
          }

          .side-stripe {
            display: none;
          }

          .cert-content {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }

          .verified-badge {
            position: static;
            margin-top: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}
