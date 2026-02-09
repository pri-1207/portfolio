'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Clean SVG icons
const icons = {
  trophy: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  ),
  chart: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  )
};

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.about-animate', { opacity: 0, y: 25 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to('.about-animate', {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out'
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          {/* Content */}
          <div className="about-content">
            <div className="section-header about-animate">
              <span className="section-label">About Me</span>
              <h2 className="section-title">A Quick <span className="italic-accent">Introduction</span></h2>
            </div>

            <div className="about-text">
              <p className="about-animate">
                I'm <strong>Prisha Gupta</strong>, a B.Tech CSE student at <strong>IIIT Pune</strong>
                with a strong foundation in <em>Data Structures</em>, <em>Algorithms</em>, and
                <em>System Design</em>.
              </p>

              <p className="about-animate">
                Currently focused on building <strong>LLM-powered applications</strong> and
                <strong>intelligent systems</strong>. My recent work includes RAG-based document
                retrieval, computer vision with transformers, and full-stack web applications.
              </p>

              <p className="about-animate">
                I'm actively seeking <strong>SDE internship opportunities</strong> where I can
                contribute to impactful projects while growing as an engineer.
              </p>
            </div>

            {/* Quick highlights */}
            <div className="about-highlights about-animate">
              <div className="highlight-item">
                <span className="highlight-icon">{icons.trophy}</span>
                <div>
                  <strong>HackRx 6.0</strong>
                  <p>Top 3 + Best Pitch</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">{icons.chart}</span>
                <div>
                  <strong>JEE 2023</strong>
                  <p>97.7 Percentile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="about-sidebar">
            <div className="info-card about-animate">
              <h4>Education</h4>
              <div className="edu-item">
                <p className="edu-degree">B.Tech CSE</p>
                <p className="edu-school">IIIT Pune</p>
                <p className="edu-detail">CGPA: 7.5</p>
              </div>
              <div className="edu-item">
                <p className="edu-degree">Senior Secondary (CBSE)</p>
                <p className="edu-detail">91.8%</p>
              </div>
            </div>

            <div className="info-card about-animate">
              <h4>Interests</h4>
              <div className="interest-tags">
                <span className="tag lime">Machine Learning</span>
                <span className="tag lime">Web Development</span>
                <span className="tag lime">LLM Systems</span>
                <span className="tag lime">System Design</span>
              </div>
            </div>

            <div className="info-card about-animate">
              <h4>Beyond Code</h4>
              <p className="beyond-text">Debate, Creative Writing, Tennis, Club Leadership</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          background: var(--yucca);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 3rem;
          align-items: start;
        }

        .about-text p {
          margin-bottom: 1rem;
          font-size: 0.95rem;
          line-height: 1.8;
        }

        .about-text strong {
          color: var(--text-primary);
        }

        .about-text em {
          color: var(--primrose-pink-dark);
          font-style: normal;
        }

        .about-highlights {
          display: flex;
          gap: 1.5rem;
          margin-top: 1.5rem;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem;
          background: var(--pinktone);
          border-radius: 8px;
          flex: 1;
        }

        .highlight-icon {
          width: 36px;
          height: 36px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primrose-pink-dark);
          flex-shrink: 0;
        }

        .highlight-item strong {
          display: block;
          font-size: 0.9rem;
          margin-bottom: 0.2rem;
        }

        .highlight-item p {
          font-size: 0.8rem;
          color: var(--text-light);
          margin: 0;
        }

        /* Sidebar */
        .about-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .info-card {
          padding: 1.25rem;
          background: white;
          border-radius: 8px;
          box-shadow: var(--shadow-soft);
        }

        .info-card h4 {
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--primrose-pink-dark);
          margin-bottom: 0.75rem;
        }

        .edu-item {
          margin-bottom: 0.75rem;
        }

        .edu-item:last-child {
          margin-bottom: 0;
        }

        .edu-degree {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-primary);
          margin-bottom: 0.1rem;
        }

        .edu-school {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .edu-detail {
          font-size: 0.8rem;
          color: var(--text-light);
        }

        .interest-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .beyond-text {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .about-highlights {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
