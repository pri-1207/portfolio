'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import AnimatedSection from './AnimatedSection';

export default function Hero() {
  const containerRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set('.hero-reveal', { opacity: 0, y: 20 });
      gsap.set('.photo-animate', { opacity: 0, scale: 0.9, rotation: -2 });

      const tl = gsap.timeline({ delay: 0.2 });

      tl.to('.hero-reveal', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      })
        .to('.photo-animate', {
          opacity: 1,
          scale: 1,
          rotation: 2,
          duration: 1,
          ease: 'back.out(1.7)'
        }, '-=0.4');

      // Subtle floating animation for the photo
      gsap.to(photoRef.current, {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="hero" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">

          <h1 className="hero-title">
            <span className="hero-reveal block">Hi, I'm Prisha</span>
            <span className="hero-reveal block italic-accent">Software Engineer</span>
          </h1>
          <p className="hero-description hero-reveal">
            Engineering intelligent systems @ <strong>IIIT Pune</strong>.
            Blending Machine Learning, Full-stack Development and human-centric design
            to solve complex problems.
          </p>
          <div className="hero-actions hero-reveal">
            <a href="#projects" className="btn btn-primary btn-elevated">
              View Projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/Prisha_Gupta_Resume.pdf" className="btn btn-outline btn-elevated" download>
              Resume
            </a>
          </div>
          <div className="hero-keywords hero-reveal">
            {['LLM Systems', 'ML/AI', 'Full Stack', 'DSA'].map((keyword, i) => (
              <span key={i} className="keyword-chip">{keyword}</span>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div ref={photoRef} className="photo-container photo-animate">
            <div className="washi-tape"></div>
            <div className="polaroid-frame">
              <img src="/prisha-photo.jpeg" alt="Prisha Gupta" className="hero-img" />
              <div className="polaroid-text">— prisha ✦</div>
            </div>
          </div>
        </div>
      </div>



      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px;
          position: relative;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }



        .hero-title {
          margin-bottom: 1.5rem;
        }

        .block {
          display: block;
        }

        .hero-description {
          max-width: 480px;
          margin-bottom: 2rem;
          font-size: 1.05rem;
          color: var(--text-secondary);
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .btn-elevated {
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                      box-shadow 0.3s ease;
        }

        .btn-elevated:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.08);
        }

        .hero-keywords {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .keyword-chip {
          padding: 4px 12px;
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--lime-dark);
          background: var(--lime-light);
          border-radius: 20px;
          opacity: 0.8;
          transition: all 0.2s ease;
        }

        .keyword-chip:hover {
          opacity: 1;
          transform: scale(1.05);
          background: var(--lime);
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .photo-container {
          position: relative;
          z-index: 10;
        }

        .polaroid-frame {
          background: white;
          padding: 12px;
          padding-bottom: 44px;
          border-radius: 2px;
          box-shadow: 0 15px 45px rgba(0,0,0,0.08);
          max-width: 280px;
        }

        .hero-img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          border-radius: 1px;
        }

        .polaroid-text {
          font-family: var(--font-heading);
          font-style: italic;
          font-size: 0.9rem;
          color: var(--text-light);
          text-align: center;
          margin-top: 12px;
        }

        .washi-tape {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%) rotate(-4deg);
          width: 90px;
          height: 30px;
          background: rgba(168, 198, 159, 0.7);
          backdrop-filter: blur(2px);
          z-index: 20;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
          mask-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M0,0 L100,0 L100,100 L0,100 Z" /></svg>');
          clip-path: polygon(0% 5%, 5% 0%, 95% 2%, 100% 7%, 98% 95%, 92% 100%, 8% 98%, 0% 92%);
        }



        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }

          .hero-content {
            order: 2;
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-actions, .hero-keywords {
            justify-content: center;
          }

          .hero-visual {
            order: 1;
          }
        }
      `}</style>
    </section>
  );
}
