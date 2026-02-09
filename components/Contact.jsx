'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const contactLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/pri-1207',
    username: '@pri-1207',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    )
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prishagupta2005/',
    username: 'prishagupta2005',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  }
];

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.contact-animate', { opacity: 0, y: 25 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to('.contact-animate', {
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
    <section ref={sectionRef} id="contact" className="contact section alt-bg">
      <div className="container">
        <div className="contact-layout">
          {/* Main content */}
          <div className="contact-main">
            <div className="section-header contact-animate">
              <span className="section-label">Let's Connect</span>
              <h2 className="section-title">
                Get in <span className="italic-accent">Touch</span>
              </h2>
            </div>

            <p className="contact-intro contact-animate">
              I'm actively looking for <strong>SDE internship opportunities</strong> for Summer 2025.
              If you have an opening or just want to chat about tech, feel free to reach out!
            </p>

            <div className="contact-email contact-animate">
              <span className="email-label">Email</span>
              <a href="mailto:gprisha1207@gmail.com" className="email-link">
                gprisha1207@gmail.com
              </a>
            </div>

            <div className="contact-links contact-animate">
              {contactLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  {link.icon}
                  <div>
                    <span className="link-label">{link.label}</span>
                    <span className="link-username">{link.username}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Card with subtle scrapbook element */}
          <div className="contact-card-wrapper contact-animate">
            <div className="tape lime" style={{ top: '-6px', left: '30%', transform: 'rotate(-3deg)' }}></div>
            <div className="contact-card">
              <div className="card-content">
                <p className="card-quote">
                  "Open to discussing <em>internships</em>, <em>collaborations</em>,
                  or just nerding out about <em>Web Development</em> and <em>Machine Learning</em>."
                </p>
                <div className="card-signature">
                  <span>— Prisha Gupta</span>
                  <span className="sig-role">SDE Intern Candidate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-layout {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 5rem;
          align-items: center;
        }

        .contact-intro {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 2rem;
          max-width: 500px;
          color: var(--text-secondary);
        }

        .contact-email {
          margin-bottom: 2.5rem;
        }

        .email-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--primrose-pink-dark);
          margin-bottom: 0.5rem;
        }

        .email-link {
          font-family: var(--font-heading);
          font-size: 1.75rem;
          font-weight: 500;
          color: var(--text-primary);
          text-decoration: none;
          position: relative;
          transition: color 0.3s;
        }

        .email-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 40px;
          height: 2px;
          background: var(--lime);
          transition: width 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .email-link:hover {
          color: var(--primrose-pink-dark);
        }

        .email-link:hover::after {
          width: 100%;
        }

        .contact-links {
          display: flex;
          gap: 1.5rem;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 24px;
          background: white;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          border: 1px solid rgba(232, 180, 184, 0.05);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .contact-link:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.06);
          border-color: rgba(168, 198, 159, 0.3);
        }

        .contact-link svg {
          color: var(--primrose-pink-dark);
          transition: transform 0.3s ease;
        }

        .contact-link:hover svg {
          transform: scale(1.1) rotate(5deg);
        }

        .link-label {
          display: block;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .link-username {
          display: block;
          font-size: 0.8rem;
          color: var(--text-light);
        }

        /* Card */
        .contact-card-wrapper {
          position: relative;
        }

        .contact-card {
          background: white;
          border-radius: 16px;
          padding: 2.5rem;
          box-shadow: 0 20px 60px rgba(232, 180, 184, 0.15);
          position: relative;
          border: 1px solid rgba(232, 180, 184, 0.2);
        }

        .card-quote {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-style: italic;
          color: var(--text-primary);
          line-height: 1.8;
          margin-bottom: 2rem;
          position: relative;
        }

        .card-quote::before {
          content: '“';
          position: absolute;
          top: -20px;
          left: -15px;
          font-size: 3rem;
          color: var(--pinktone-deep);
          z-index: -1;
        }

        .card-quote em {
          color: var(--primrose-pink-dark);
          font-style: normal;
          font-weight: 500;
        }

        .card-signature {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .card-signature span:first-child {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .sig-role {
          font-size: 0.8rem;
          color: var(--lime-dark);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: 4rem;
          }

          .contact-card-wrapper {
            max-width: 480px;
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .contact-links {
            flex-direction: column;
          }

          .email-link {
            font-size: 1.35rem;
          }
        }
      `}</style>
    </section>
  );
}
