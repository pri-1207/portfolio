'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ScrapPageCard,
  WashiTape,
  PaperClip,
  HeartSticker,
  LeafSticker,
  BowSticker
} from './scrapbook';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.about-page', { opacity: 0, y: 50, rotation: -2 });
      gsap.set('.about-line', { opacity: 0, x: -30 });
      gsap.set('.about-sticker', { opacity: 0, scale: 0 });
      gsap.set('.about-tape', { opacity: 0, y: -20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.to('.about-page', {
        opacity: 1,
        y: 0,
        rotation: -1,
        duration: 0.8,
        ease: 'power3.out'
      })
        .to('.about-tape', {
          opacity: 0.85,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out'
        }, '-=0.4')
        .to('.about-line', {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.12,
          ease: 'power2.out'
        }, '-=0.3')
        .to('.about-sticker', {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(2)'
        }, '-=0.3');

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about-section section">
      <div className="container">
        {/* Section Title */}
        <div className="section-header">
          <div className="section-title-wrapper">
            <h2>About Me</h2>
            <div className="label-strip"></div>
          </div>
          <div className="section-label">A LITTLE INTRODUCTION</div>
        </div>

        {/* Journal Page */}
        <div className="about-page-wrapper">
          <div className="about-page">
            <ScrapPageCard variant="white" rotation={-1}>
              {/* Washi Tapes */}
              <WashiTape
                color="peach"
                pattern="polka"
                direction="diagonal-left"
                style={{ top: '-10px', left: '30px' }}
                className="about-tape"
              />
              

              {/* Paper Clip */}
              <PaperClip color="silver" rotation={-10} style={{ top: '-25px', left: '150px' }} />

              {/* Notebook Lines Background */}
              <div className="notebook-lines">
                {/* Red margin line */}
                <div className="margin-line"></div>

                {/* Content */}
                <div className="journal-content">
                  {/* Greeting */}
                  <p className="about-line greeting">
                    <span className="greeting-hi">Hi!</span> I'm Prisha
                  </p>

                  {/* Main text */}
                  <p className="about-line main-text">
                    I'm a CSE student at IIIT Pune. I'm drawn to projects where engineering
                    meets clarity: building ML models that perform well, and interfaces that
                    feel clean and intentional.
                  </p>

                  <p className="about-line main-text">
                    Lately I've been exploring LLM workflows (RAG + retrieval systems),
                    computer vision, and explainability — basically anything that helps
                    turn raw data into something useful and trustworthy.
                  </p>

                  {/* Divider with heart */}
                  <div className="about-divider about-line">
                    <span className="divider-line"></span>
                    <HeartSticker style={{ position: 'relative' }} color="#D4A5A5" size={20} />
                    <span className="divider-line"></span>
                  </div>

                  {/* Personal note */}
                  <div className="about-line personal-note">
                    <div className="note-header">
                      <LeafSticker style={{ position: 'relative' }} color="#8BA888" size={20} />
                      <span>Outside tech...</span>
                    </div>
                    <p>
                      You'll usually find me playing tennis, reading fiction/non-fiction,
                      or writing poems. I also enjoy designing and creative roles alongside
                      development.
                    </p>
                  </div>

                  {/* Signature */}
                  <div className="about-line signature">
                    — Prisha
                  </div>
                </div>

                {/* Punch holes */}
                <div className="punch-holes">
                  <div className="hole"></div>
                  <div className="hole"></div>
                  <div className="hole"></div>
                </div>
              </div>

              {/* Side Label */}
              <div className="side-label" style={{ left: '-25px', top: '40%' }}>ABOUT</div>

              {/* Stickers */}
              <BowSticker style={{ bottom: '20px', right: '25px' }} color="#D4A5A5" size={35} className="about-sticker" />
            </ScrapPageCard>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
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
          background: var(--sticky-yellow);
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

        .about-page-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        .about-page :global(.scrap-page-card) {
          padding: 0;
          overflow: hidden;
        }

        .notebook-lines {
          position: relative;
          padding: 2.5rem 3rem 2.5rem 4rem;
          background: 
            repeating-linear-gradient(
              transparent,
              transparent 27px,
              #B8D4E8 28px
            );
          min-height: 400px;
        }

        .margin-line {
          position: absolute;
          left: 3.5rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, 
            transparent 0%, 
            #E8A8A8 10%, 
            #E8A8A8 90%, 
            transparent 100%
          );
          opacity: 0.6;
        }

        .punch-holes {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .hole {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--gingham-blue-light);
          box-shadow: inset 0 1px 3px rgba(0,0,0,0.15);
        }

        .journal-content {
          position: relative;
          z-index: 1;
        }

        .about-line {
          margin-bottom: 1.5rem;
        }

        .greeting {
          font-family: var(--font-title);
          font-size: 1.6rem;
          color: var(--charcoal);
          margin-bottom: 1.75rem;
        }

        .greeting-hi {
          color: var(--muted-red);
        }

        .main-text {
          font-family: var(--font-body);
          font-size: 1rem;
          line-height: 1.9;
          color: var(--cocoa);
        }

        .about-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin: 2rem 0;
        }

        .divider-line {
          height: 1px;
          width: 60px;
          background: linear-gradient(90deg, transparent, var(--dusty-pink), transparent);
        }

        .personal-note {
          background: rgba(139, 168, 136, 0.1);
          padding: 1.25rem 1.5rem;
          border-radius: 4px;
          border-left: 3px solid var(--sage-green);
        }

        .note-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-accent);
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--sage-green);
          margin-bottom: 0.5rem;
        }

        .personal-note p {
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--cocoa);
          margin: 0;
        }

        .signature {
          font-family: var(--font-typewriter);
          font-size: 0.95rem;
          color: var(--text-muted);
          text-align: right;
          margin-top: 2rem;
          font-style: italic;
        }

        .side-label {
          position: absolute;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-family: var(--font-typewriter);
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.4;
        }

        @media (max-width: 768px) {
          .notebook-lines {
            padding: 2rem 1.5rem 2rem 2.5rem;
          }

          .margin-line {
            left: 2rem;
          }

          .punch-holes {
            left: 0.5rem;
          }

          .hole {
            width: 12px;
            height: 12px;
          }
        }
      `}</style>
    </section>
  );
}
