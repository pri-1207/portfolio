'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  ScrapPageCard,
  WashiTape,
  PolaroidFrame,
  PaperClip,
  StickyNote,
  DateTag,
  CameraSticker,
  BowSticker,
  StarSticker,
  FlowerSticker,
  HeartSticker
} from './scrapbook';

// Icons
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set('.hero-element', { opacity: 0, y: 40 });
      gsap.set('.hero-polaroid', { opacity: 0, scale: 0.8, rotation: -15 });
      gsap.set('.hero-sticker', { opacity: 0, scale: 0 });
      gsap.set('.hero-tape', { opacity: 0, y: -20 });
      gsap.set('.hero-sticky', { opacity: 0, scale: 0.8, rotation: -10 });

      // Main timeline
      const tl = gsap.timeline({ delay: 0.3 });

      // Main page drops in
      tl.to('.hero-main-card', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      })
        // Washi tapes stick down
        .to('.hero-tape', {
          opacity: 0.85,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out'
        }, '-=0.4')
        // Title appears
        .to('.hero-title', {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out'
        }, '-=0.2')
        // Subtitle
        .to('.hero-subtitle', {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out'
        }, '-=0.3')
        // Date tag
        .to('.hero-date', {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out'
        }, '-=0.2')
        // Microcopy sticky note
        .to('.hero-sticky', {
          opacity: 1,
          scale: 1,
          rotation: -2,
          duration: 0.6,
          ease: 'back.out(1.5)'
        }, '-=0.2')
        // Buttons
        .to('.hero-buttons', {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out'
        }, '-=0.3')
        // Polaroid slides in
        .to('.hero-polaroid', {
          opacity: 1,
          scale: 1,
          rotation: 3,
          duration: 0.7,
          ease: 'power3.out'
        }, '-=0.4')
        // Stickers pop in
        .to('.hero-sticker', {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(2)'
        }, '-=0.3');

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} id="hero" className="hero-section">
      <div className="hero-container">
        {/* Main Scrap Page */}
        <div className="hero-main-card hero-element">
          <ScrapPageCard variant="cream" rotation={-0.5}>
            {/* Washi Tape Decorations */}
            <WashiTape
              color="pink"
              pattern="polka"
              direction="diagonal-left"
              style={{ top: '-10px', left: '20px' }}
              className="hero-tape"
            />
            <WashiTape
              color="mint"
              pattern="striped"
              direction="diagonal-right"
              style={{ top: '-10px', right: '30px' }}
              className="hero-tape"
            />

            {/* Paper Clip */}
            <PaperClip color="gold" rotation={15} style={{ top: '-20px', right: '120px' }} />

            {/* Date Tag */}
            <div className="hero-date hero-element" style={{ marginBottom: '1.5rem' }}>
              <DateTag date="January 2026" />
            </div>

            {/* Title - Magazine cut-out style */}
            <h1 className="hero-title hero-element">
              <span className="title-highlight">Prisha</span> Gupta
            </h1>

            {/* Subtitle with label strip */}
            <div className="hero-subtitle hero-element">
              <span className="subtitle-text">Software Engineering Student</span>
              <div className="subtitle-tags">
                <span className="tag">AI</span>
                <span className="tag-dot"></span>
                <span className="tag">Full Stack</span>
                <span className="tag-dot"></span>
                <span className="tag">LLMs</span>
              </div>
            </div>

            {/* Location */}
            <p className="hero-location hero-element">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Pune, India
            </p>

            {/* Sticky Note with Microcopy */}
            <div className="hero-sticky-wrapper">
              <StickyNote color="yellow" rotation={-2} className="hero-sticky">
                <p className="sticky-text">
                  I like building systems that feel smart and simple at the same time —
                  from LLM-powered document search to full-stack apps that actually ship.
                </p>
                <span className="sticky-signature">— Prisha</span>
              </StickyNote>
            </div>

            {/* Buttons */}
            <div className="hero-buttons hero-element">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                <span>View Projects</span>
                <ArrowIcon />
              </button>
              <a href="/Prisha_Gupta_Resume.pdf" className="btn btn-secondary" download>
                <DownloadIcon />
                <span>Resume</span>
              </a>
              <button
                className="btn btn-kraft"
                onClick={() => scrollToSection('contact')}
              >
                <MailIcon />
                <span>Contact</span>
              </button>
            </div>

            {/* Side Label */}
            <div className="side-label" style={{ left: '-30px', top: '50%' }}>
              PORTFOLIO
            </div>
          </ScrapPageCard>
        </div>

        {/* Right Column - Polaroid + Stickers */}
        <div className="hero-right">
          {/* Polaroid */}
          <div className="hero-polaroid">
            <PolaroidFrame
              caption="— prisha, 2025"
              rotation={4}
              placeholder="photo goes here"
            />
            <WashiTape
              color="peach"
              pattern="gingham"
              direction="slight-left"
              style={{ top: '-8px', left: '50%', transform: 'translateX(-50%) rotate(-5deg)' }}
              className="hero-tape"
            />
          </div>

          {/* Quick Facts Sticky */}
          <StickyNote color="pink" rotation={3} className="hero-sticky quick-facts" style={{ marginTop: '1.5rem' }}>
            <h4 className="facts-title">Quick Facts</h4>
            <ul className="facts-list">
              <li>IIIT Pune, CSE</li>
              <li>Building RAG systems</li>
              <li>Full-stack enthusiast</li>
            </ul>
          </StickyNote>

          {/* Decorative Stickers */}
          <CameraSticker style={{ top: '10px', right: '-20px' }} size={45} className="hero-sticker" />
          <BowSticker style={{ bottom: '80px', left: '-30px' }} color="#D4A5A5" size={40} className="hero-sticker" />
          <StarSticker style={{ top: '180px', right: '-10px' }} color="#D4A94B" size={22} className="hero-sticker" />
          <FlowerSticker style={{ bottom: '20px', right: '30px' }} size={30} className="hero-sticker" />
          <HeartSticker style={{ top: '280px', left: '-15px' }} color="#D4A5A5" size={24} className="hero-sticker" />
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 6rem 0 4rem;
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          max-width: 1300px;
          width: 100%;
          margin: 0 auto;
          padding: 0 clamp(1.5rem, 4vw, 3rem);
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 3rem;
          align-items: center;
        }

        .hero-main-card :global(.scrap-page-card) {
          padding: 3rem;
        }

        .hero-title {
          font-family: var(--font-title);
          font-size: clamp(3rem, 8vw, 5rem);
          color: var(--charcoal);
          margin-bottom: 0.75rem;
          line-height: 1.1;
        }

        .title-highlight {
          position: relative;
          display: inline-block;
        }

        .title-highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: -5px;
          right: -5px;
          height: 15px;
          background: var(--sticky-yellow);
          opacity: 0.6;
          z-index: -1;
          transform: rotate(-1deg);
        }

        .hero-subtitle {
          margin-bottom: 1rem;
        }

        .subtitle-text {
          font-family: var(--font-typewriter);
          font-size: 1.1rem;
          color: var(--cocoa);
          display: block;
          margin-bottom: 0.5rem;
        }

        .subtitle-tags {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .tag {
          font-family: var(--font-accent);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--muted-red);
        }

        .tag-dot {
          width: 5px;
          height: 5px;
          background: var(--kraft-paper);
          border-radius: 50%;
        }

        .hero-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .hero-sticky-wrapper {
          margin-bottom: 2rem;
          max-width: 450px;
        }

        .sticky-text {
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--charcoal);
          margin-bottom: 0.5rem;
        }

        .sticky-signature {
          font-family: var(--font-typewriter);
          font-size: 0.8rem;
          color: var(--text-muted);
          display: block;
          text-align: right;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .hero-right {
          position: relative;
          padding: 2rem;
        }

        .hero-polaroid {
          position: relative;
        }

        .hero-polaroid :global(.polaroid-frame) {
          width: 100%;
          max-width: 280px;
        }

        .hero-polaroid :global(.photo-area) {
          height: 280px;
        }

        .quick-facts {
          max-width: 200px;
        }

        .facts-title {
          font-family: var(--font-typewriter);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--charcoal);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .facts-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .facts-list li {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--cocoa);
          padding: 3px 0;
          position: relative;
          padding-left: 12px;
        }

        .facts-list li::before {
          content: '♦';
          position: absolute;
          left: 0;
          color: var(--dusty-pink);
          font-size: 0.6rem;
        }

        .side-label {
          position: absolute;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-family: var(--font-typewriter);
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.5;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-right {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            justify-content: center;
            padding: 1rem;
          }

          .hero-polaroid :global(.polaroid-frame) {
            max-width: 240px;
          }

          .quick-facts {
            margin-top: 0;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 5rem 0 3rem;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .hero-buttons .btn {
            width: 100%;
            justify-content: center;
          }

          .hero-right :global(.sticker) {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
