'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Clean SVG icons for leadership roles
const icons = {
  book: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      <path d="M8 7h6" />
      <path d="M8 11h8" />
    </svg>
  ),
  briefcase: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  pen: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  )
};

const leadershipData = [
  {
    role: 'Head, Eclectic Literary Club',
    org: 'IIIT Pune',
    description: 'Leading club activities, organizing events and mentoring junior members in creative writing and debate.',
    icon: 'book'
  },
  {
    role: 'Placement Coordinator',
    org: 'IIIT Pune',
    description: 'Coordinating with companies, managing placement logistics and supporting fellow students in their placement journey.',
    icon: 'briefcase'
  },
  {
    role: 'Newsletter Lead',
    org: 'College Newsletter',
    description: 'Managing content, design and publication of the college newsletter. Leading a team of writers and designers.',
    icon: 'pen'
  }
];

const activitiesData = [
  { label: 'Debate' },
  { label: 'Creative Writing' },
  { label: 'Tennis' },
  { label: 'Poetry' }
];

export default function Leadership() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.lead-animate', { opacity: 0, y: 25 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to('.lead-animate', {
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
    <section ref={sectionRef} id="leadership" className="leadership section">
      <div className="container">
        <div className="lead-grid">
          {/* Leadership */}
          <div className="lead-main">
            <div className="section-header lead-animate">
              <span className="section-label">Leadership</span>
              <h2 className="section-title">
                Roles & <span className="italic-accent">Responsibilities</span>
              </h2>
            </div>

            <div className="lead-cards">
              {leadershipData.map((item, index) => (
                <div key={index} className="lead-card lead-animate">
                  <div className="lead-icon">{icons[item.icon]}</div>
                  <div className="lead-content">
                    <h4>{item.role}</h4>
                    <p className="lead-org">{item.org}</p>
                    <p className="lead-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities sidebar */}
          <div className="activities-sidebar">
            <div className="activities-card lead-animate">
              <h4>Beyond Academics</h4>
              <div className="activity-list">
                {activitiesData.map((activity, i) => (
                  <div key={i} className="activity-item">
                    <span className="activity-label">{activity.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="quote-card lead-animate">
              <p>"Growing as an engineer and a professional everyday"</p>
              <span className="quote-author">— Prisha</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .lead-grid {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 2.5rem;
          align-items: start;
        }

        .lead-cards {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .lead-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem;
          background: white;
          border-radius: 8px;
          box-shadow: var(--shadow-soft);
          transition: all 0.3s ease;
        }

        .lead-card:hover {
          transform: translateX(4px);
          box-shadow: var(--shadow-medium);
        }

        .lead-icon {
          width: 42px;
          height: 42px;
          background: var(--pinktone);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--primrose-pink-dark);
        }

        .lead-content h4 {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.15rem;
        }

        .lead-org {
          font-size: 0.8rem;
          color: var(--primrose-pink-dark);
          font-weight: 500;
          margin-bottom: 0.35rem;
        }

        .lead-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        /* Sidebar */
        .activities-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .activities-card {
          padding: 1.25rem;
          background: var(--pinktone);
          border-radius: 8px;
        }

        .activities-card h4 {
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--primrose-pink-dark);
          margin-bottom: 0.75rem;
        }

        .activity-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .activity-item {
          padding: 6px 14px;
          background: white;
          border-radius: 20px;
          font-size: 0.8rem;
          color: var(--text-primary);
          transition: all 0.2s ease;
        }

        .activity-item:hover {
          background: var(--primrose-pink-light);
          transform: translateY(-1px);
        }

        .quote-card {
          padding: 1.25rem;
          background: white;
          border-radius: 8px;
          box-shadow: var(--shadow-soft);
          border-left: 3px solid var(--lime);
        }

        .quote-card p {
          font-family: var(--font-heading);
          font-style: italic;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }

        .quote-author {
          font-size: 0.8rem;
          color: var(--text-light);
        }

        @media (max-width: 900px) {
          .lead-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
