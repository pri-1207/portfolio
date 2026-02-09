'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Clean SVG icons matching the theme
const icons = {
  trophy: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  ),
  mic: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  ),
  chart: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
};

const achievementsData = [
  {
    icon: 'trophy',
    title: 'HackRx 6.0',
    subtitle: 'Top 3 + Best Pitch Award',
    description: 'Won among 500+ teams for innovative LLM-based solution'
  },
  {
    icon: 'mic',
    title: 'COEP Debate Competition',
    subtitle: '3rd Place',
    description: 'Inter-college parliamentary debate competition'
  },
  {
    icon: 'chart',
    title: 'JEE Mains 2023',
    subtitle: '97.7 Percentile',
    description: 'Among top 2.3% of 1.2M+ candidates'
  }
];

export default function Achievements() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.achieve-animate', { opacity: 0, y: 25 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to('.achieve-animate', {
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
    <section ref={sectionRef} id="achievements" className="achievements section alt-bg">
      <div className="container">
        <div className="section-header achieve-animate">
          <span className="section-label">Recognition</span>
          <h2 className="section-title">
            Key <span className="italic-accent">Achievements</span>
          </h2>
        </div>

        <div className="achievements-grid">
          {achievementsData.map((item, index) => (
            <div key={index} className="achievement-card achieve-animate">
              <div className="achievement-icon">{icons[item.icon]}</div>
              <div className="achievement-content">
                <h4>{item.title}</h4>
                <p className="achievement-subtitle">{item.subtitle}</p>
                <p className="achievement-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .achievement-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: white;
          border-radius: 10px;
          box-shadow: var(--shadow-soft);
          transition: all 0.3s ease;
        }

        .achievement-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-medium);
        }

        .achievement-icon {
          width: 45px;
          height: 45px;
          background: var(--lime-light);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--lime-dark);
        }

        .achievement-content h4 {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .achievement-subtitle {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--primrose-pink-dark);
          margin-bottom: 0.3rem;
        }

        .achievement-desc {
          font-size: 0.8rem;
          color: var(--text-light);
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .achievements-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
