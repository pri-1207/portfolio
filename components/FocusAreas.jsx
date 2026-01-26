'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StickyNote, WashiTape, StarSticker, FlowerSticker } from './scrapbook';

gsap.registerPlugin(ScrollTrigger);

const focusAreas = [
  { title: 'AI & Machine Learning', color: 'peach', rotation: -2 },
  { title: 'Full-Stack Development', color: 'lightblue', rotation: 1.5 },
  { title: 'LLM Applications (RAG, Document Retrieval)', color: 'blue', rotation: -1 },
  { title: 'Explainable AI (SHAP)', color: 'pastel-green', rotation: 2 },
  { title: 'Computer Vision (Vision Transformers)', color: 'light-yellow', rotation: -1.5 },
  { title: 'API Development & Authentication', color: 'light-purple', rotation: 1 }
];

export default function FocusAreas() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.focus-sticky', { opacity: 0, scale: 0.7, rotation: 0 });
      gsap.set('.focus-sticker', { opacity: 0, scale: 0 });
      gsap.set('.focus-tape', { opacity: 0, y: -15 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.to('.focus-tape', {
        opacity: 0.85,
        y: 0,
        duration: 0.3,
        stagger: 0.08,
        ease: 'power2.out'
      })
        .to('.focus-sticky', {
          opacity: 1,
          scale: 1,
          rotation: (i) => focusAreas[i]?.rotation || 0,
          duration: 0.5,
          stagger: {
            each: 0.1,
            from: 'random'
          },
          ease: 'back.out(1.5)'
        }, '-=0.1')
        .to('.focus-sticker', {
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
    <section ref={sectionRef} id="focus-areas" className="focus-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrapper">
            <h2>Focus Areas</h2>
            <div className="label-strip"></div>
          </div>
          <div className="section-label">WHAT I WORK ON</div>
        </div>

        {/* Sticky Notes Grid */}
        <div className="focus-grid">
          {/* Decorative Washi Tape */}
          <WashiTape
            color="mint"
            pattern="striped"
            direction="horizontal"
            style={{ top: '20px', left: '10%' }}
            className="focus-tape"
          />
          <WashiTape
            color="pink"
            pattern="polka"
            direction="slight-right"
            style={{ top: '50%', right: '5%' }}
            className="focus-tape"
          />

          {focusAreas.map((area, index) => (
            <div key={index} className="focus-item">
              <StickyNote
                color={area.color}
                rotation={area.rotation}
                className="focus-sticky"
              >
                {/* Tape on top */}
                <div className="sticky-tape" style={{
                  background: area.color === 'yellow' ? '#D4E6F1' : '#FADCD9'
                }}></div>

                <p className="focus-text">{area.title}</p>
              </StickyNote>
            </div>
          ))}

          {/* Decorative Stickers */}
          <StarSticker style={{ top: '-10px', right: '20%' }} size={22} className="focus-sticker" />
          <FlowerSticker style={{ bottom: '10px', left: '15%' }} size={28} className="focus-sticker" />
        </div>
      </div>

      <style jsx>{`
        .focus-section {
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
          background: var(--sticky-pink);
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

        .focus-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          padding: 2rem 0;
        }

        .focus-item {
          flex: 0 0 auto;
        }

        .focus-item :global(.sticky-note) {
          min-width: 180px;
          max-width: 280px;
          padding: 1.5rem 1.25rem;
          position: relative;
        }

        .sticky-tape {
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%) rotate(-3deg);
          width: 50px;
          height: 16px;
          opacity: 0.8;
        }

        .focus-text {
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--charcoal);
          text-align: center;
          margin: 0;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .focus-grid {
            gap: 1rem;
          }

          .focus-item :global(.sticky-note) {
            min-width: 150px;
            max-width: 100%;
            padding: 1.25rem 1rem;
          }

          .focus-text {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}
