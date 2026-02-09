'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Theme-consistent SVG icons
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
  ),
  mic: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  ),
  pen: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  ),
  tennis: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2v20" />
      <path d="m4.93 4.93 14.14 14.14" />
      <path d="m4.93 19.07 14.14-14.14" />
    </svg>
  ),
  palette: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.2 2.1-.7.4-.4.5-.9.3-1.4-.2-.5-.3-1-.3-1.5 0-1.1.9-2 2-2h2c2.2 0 4-1.8 4-4 0-5.5-4.5-10-10-10Z" />
    </svg>
  ),
  users: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
};

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.about-animate', { opacity: 0, y: 20 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to('.about-animate', {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
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
          {/* Main: Intro & Highlights */}
          <div className="about-main about-animate">
            <div className="about-content">
              <div className="section-header">
                <span className="section-label">About Me</span>
                <h2 className="section-title">A Quick <span className="italic-accent">Introduction</span></h2>
              </div>

              <div className="about-text">
                <p>
                  I'm <strong>Prisha Gupta</strong>, a B.Tech CSE student at <strong>IIIT Pune</strong>
                  with a strong foundation in <em>Data Structures</em>, <em>Algorithms</em> and
                  <em>System Design</em>.
                </p>
                <p>
                  Currently focused on building <strong>LLM-powered applications</strong> and
                  <strong> intelligent systems</strong>. My recent work includes RAG-based document
                  retrieval, computer vision with transformers and full-stack web applications.
                </p>
              </div>

              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">{icons.trophy}</span>
                  <div>
                    <strong>HackRx 6.0</strong>
                    <p>Top 3 & Best Pitch</p>
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

            <div className="about-sidebar-simple">
              <div className="info-card edu-card">
                <div className="card-header">
                  <span className="card-dot"></span>
                  <h4>Education</h4>
                </div>
                <div className="edu-list">
                  <div className="edu-item">
                    <p className="edu-degree">B.Tech CSE @ IIIT Pune</p>
                    <p className="edu-detail">CGPA: 7.5 | 2023 - 2027</p>
                  </div>
                  <div className="edu-item">
                    <p className="edu-degree">Senior Secondary</p>
                    <p className="edu-detail">91.8% | CBSE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Beyond Code Section */}
          <div className="beyond-section about-animate">
            <div className="beyond-card">
              <div className="beyond-content">
                <div className="card-header">
                  <span className="card-dot lime"></span>
                  <h4>Beyond Code</h4>
                </div>
                <div className="beyond-row">
                  {[
                    { label: 'Debate', icon: icons.mic },
                    { label: 'Writing', icon: icons.pen },
                    { label: 'Tennis', icon: icons.tennis },
                    { label: 'Art', icon: icons.palette },
                    { label: 'Speaking', icon: icons.users }
                  ].map((item, idx) => (
                    <div key={idx} className="beyond-pill">
                      <span className="beyond-icon">{item.icon}</span>
                      <span className="beyond-label">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
          background: var(--yucca);
        }

        .about-grid {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .about-main {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3.5rem;
          align-items: center;
        }

        .about-text p {
          margin-bottom: 1.25rem;
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .about-text strong {
          color: var(--text-primary);
        }

        .about-text em {
          color: var(--primrose-pink-dark);
          font-style: normal;
          font-weight: 500;
        }

        .about-highlights {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          background: white;
          border-radius: 12px;
          border: 1px solid rgba(232, 180, 184, 0.15);
          flex: 1;
        }

        .highlight-icon {
          width: 38px;
          height: 38px;
          background: var(--pinktone);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primrose-pink-dark);
          flex-shrink: 0;
        }

        .highlight-item strong {
          display: block;
          font-size: 0.95rem;
        }

        .highlight-item p {
          font-size: 0.8rem;
          color: var(--text-light);
          margin: 0;
        }

        /* Sidebar simple */
        .info-card {
          background: white;
          padding: 1.5rem 2rem;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          border: 1px solid rgba(232, 180, 184, 0.1);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1rem;
        }

        .card-dot {
          width: 7px;
          height: 7px;
          background: var(--primrose-pink);
          border-radius: 50%;
        }

        .card-dot.lime {
          background: var(--lime);
        }

        .info-card h4 {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-light);
        }

        .edu-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .edu-item {
          padding-left: 0.75rem;
          border-left: 2px solid var(--yucca-warm);
        }

        .edu-degree {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .edu-detail {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        /* Pretty Beyond Code Section */
        .beyond-card {
           background: linear-gradient(135deg, white 0%, var(--pinktone) 100%);
           padding: 1.5rem 2.5rem;
           border-radius: 16px;
           box-shadow: 0 10px 40px rgba(232, 180, 184, 0.1);
           border: 1px solid rgba(232, 180, 184, 0.2);
           position: relative;
           overflow: hidden;
        }

        .beyond-card::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(168, 198, 159, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .beyond-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .beyond-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: white;
          border-radius: 30px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.03);
          border: 1px solid rgba(232, 180, 184, 0.1);
          transition: all 0.3s ease;
        }

        .beyond-pill:hover {
          transform: translateY(-2px);
          border-color: var(--lime);
          box-shadow: 0 5px 15px rgba(168, 198, 159, 0.1);
        }

        .beyond-icon {
          color: var(--primrose-pink-dark);
          display: flex;
          align-items: center;
        }

        .beyond-label {
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--text-primary);
        }

        @media (max-width: 1024px) {
          .about-main {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .beyond-row {
            gap: 0.75rem;
          }
          
          .beyond-pill {
            padding: 6px 12px;
          }
        }
      `}</style>
    </section>
  );
}
