'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ScrapPageCard,
  WashiTape,
  PaperClip,
  StickyNote,
  StarSticker,
  HeartSticker
} from './scrapbook';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    title: 'IntelliQuery',
    subtitle: 'LightRAG LLM Document Retrieval',
    description: 'Built an LLM-powered retrieval system for enterprise document analysis. Achieved 5x faster retrieval + 84.8% accuracy improvement. Implemented semantic search + hybrid indexing + contextual reranking. Added explainable answers with source attribution.',
    tags: ['LLM', 'RAG', 'Semantic Search', 'Python'],
    color: 'yellow',
    rotation: -1
  },
  {
    title: 'ATR in SAR Images',
    subtitle: 'ViT + ConvNeXt',
    description: 'Benchmarked VGG16, ResNet50, ConvNeXt, ViT-B/16. Achieved 98-99% accuracy with Vision Transformers. Used AdamW + LR scheduling + augmentation. Evaluated via F1-score + Confusion Matrix.',
    tags: ['Computer Vision', 'ViT', 'Deep Learning', 'PyTorch'],
    color: 'pink',
    rotation: 1.5
  },
  {
    title: 'Health Fitness Recommendation',
    subtitle: 'Personalized System',
    description: 'Classifies users based on BMI/activity/goals. Recommends plans with XGBoost. Integrated SHAP explainability for transparent recommendations.',
    tags: ['XGBoost', 'SHAP', 'ML', 'Python'],
    color: 'blue',
    rotation: -0.5
  },
  {
    title: 'Smart Digital Wardrobe',
    subtitle: 'Outfit Recommender',
    description: 'Full-stack app (React + Node.js). Outfit suggestion via ML color/style matching + weather filtering for personalized fashion recommendations.',
    tags: ['React', 'Node.js', 'ML', 'Full-Stack'],
    color: 'green',
    rotation: 1
  }
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.project-card', { opacity: 0, y: 50, rotation: 0 });
      gsap.set('.projects-sticker', { opacity: 0, scale: 0 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        onEnter: () => {
          if (!isOpen) {
            // Show box entrance
            gsap.fromTo('.cardboard-box',
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
            );
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isOpen]);

  const handleBoxClick = () => {
    if (isOpen) return;

    setIsOpen(true);

    const tl = gsap.timeline();

    // Shake box
    tl.to('.cardboard-box', {
      x: -3,
      rotation: -1,
      duration: 0.07,
      yoyo: true,
      repeat: 5,
      ease: 'power1.inOut'
    })
      // Open lid
      .to('.box-lid', {
        rotateX: -130,
        duration: 0.5,
        ease: 'power2.out'
      })
      // Tape peels
      .to('.box-tape-strip', {
        y: -15,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      }, '-=0.3')
      // Hide box
      .to('.box-wrapper', {
        opacity: 0,
        y: -20,
        scale: 0.9,
        duration: 0.4,
        ease: 'power2.in'
      }, '+=0.1')
      .set('.box-wrapper', { display: 'none' })
      // Show projects
      .set('.projects-grid', { display: 'grid' })
      .to('.project-card', {
        opacity: 1,
        y: 0,
        rotation: (i) => projectsData[i]?.rotation || 0,
        duration: 0.6,
        stagger: 0.12,
        ease: 'back.out(1.2)'
      })
      .to('.projects-sticker', {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: 'back.out(2)'
      }, '-=0.3');
  };

  const handleReset = () => {
    if (!isOpen) return;

    const tl = gsap.timeline({
      onComplete: () => setIsOpen(false)
    });

    tl.to('.projects-sticker', {
      opacity: 0,
      scale: 0.5,
      duration: 0.2,
      stagger: 0.03
    })
      .to('.project-card', {
        opacity: 0,
        y: 30,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power2.in'
      }, '-=0.1')
      .set('.projects-grid', { display: 'none' })
      .set('.box-wrapper', { display: 'flex' })
      .to('.box-wrapper', {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      })
      .to('.box-tape-strip', {
        y: 0,
        opacity: 1,
        duration: 0.3
      }, '-=0.2')
      .to('.box-lid', {
        rotateX: 0,
        duration: 0.4,
        ease: 'power2.out'
      }, '-=0.1');
  };

  return (
    <section ref={sectionRef} id="projects" className="projects-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrapper">
            <h2>Projects</h2>
            <div className="label-strip"></div>
          </div>
          <div className="section-label">FEATURED WORK</div>
        </div>

        {/* Box Container */}
        <div className="box-container">
          {/* Cardboard Box */}
          <div className="box-wrapper">
            <div className="cardboard-box" onClick={handleBoxClick}>
              {/* Box Lid */}
              <div className="box-lid">
                <div className="lid-flap left"></div>
                <div className="lid-flap right"></div>
                <div className="lid-main">
                  {/* Tape on lid */}
                  <div className="box-tape-strip"></div>
                </div>
              </div>

              {/* Box Body */}
              <div className="box-body">
                {/* Tape continuation */}
                <div className="box-tape-strip body-tape"></div>

                {/* Label */}
                <div className="box-label">
                  <span className="label-text">Click to open</span>
                  <span className="label-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Desk surface */}
            <div className="desk-surface"></div>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <div key={index} className="project-card-wrapper">
                <StickyNote
                  color={project.color}
                  rotation={project.rotation}
                  className="project-card"
                >
                  {/* Washi tape on top */}
                  <WashiTape
                    color={index % 2 === 0 ? 'mint' : 'peach'}
                    pattern="polka"
                    direction="horizontal"
                    style={{ top: '-10px', left: '20%', width: '60px' }}
                  />

                  {/* Paperclip on some */}
                  {index === 0 && (
                    <PaperClip color="gold" rotation={10} style={{ top: '-20px', right: '15px' }} />
                  )}

                  {/* Content */}
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>

                  {/* Tags */}
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </StickyNote>
              </div>
            ))}

            {/* Close Button */}
            <button className="reset-btn" onClick={handleReset}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
              </svg>
              Close Box
            </button>

            {/* Stickers */}
            <StarSticker style={{ top: '30px', right: '10%' }} size={22} className="projects-sticker" />
            <HeartSticker style={{ bottom: '50px', left: '5%' }} color="#D4A5A5" size={25} className="projects-sticker" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .projects-section {
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
          background: var(--sticky-green);
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

        .box-container {
          max-width: 1000px;
          margin: 0 auto;
          min-height: 400px;
        }

        .box-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem 0;
        }

        .cardboard-box {
          width: 180px;
          cursor: pointer;
          perspective: 800px;
          transform-style: preserve-3d;
        }

        .box-lid {
          position: relative;
          transform-style: preserve-3d;
          transform-origin: bottom center;
        }

        .lid-main {
          height: 35px;
          background: linear-gradient(180deg, #D4B896 0%, #C4A574 100%);
          border-radius: 4px 4px 0 0;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lid-flap {
          position: absolute;
          bottom: 100%;
          height: 22px;
          background: linear-gradient(180deg, #C4A574 0%, #B8996A 100%);
        }

        .lid-flap.left {
          left: 0;
          width: 45%;
          border-radius: 3px 0 0 0;
          transform: rotateX(-20deg);
          transform-origin: bottom;
        }

        .lid-flap.right {
          right: 0;
          width: 45%;
          border-radius: 0 3px 0 0;
          transform: rotateX(-15deg);
          transform-origin: bottom;
        }

        .box-body {
          height: 100px;
          background: linear-gradient(180deg, #C4A574 0%, #A68B5B 50%, #8B7347 100%);
          border-radius: 0 0 4px 4px;
          position: relative;
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        .box-tape-strip {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 35px;
          background: rgba(255, 248, 220, 0.85);
          border: 1px solid rgba(200, 180, 150, 0.4);
        }

        .body-tape {
          top: 0;
          height: 40px;
        }

        .box-label {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--paper-white);
          padding: 6px 14px;
          border-radius: 3px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .label-text {
          font-family: var(--font-typewriter);
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--charcoal);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .label-icon {
          color: var(--kraft-paper);
          animation: bounce 1.5s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(3px); }
        }

        .desk-surface {
          width: 240px;
          height: 18px;
          background: linear-gradient(180deg, #DED4C7 0%, #C8BEB1 100%);
          border-radius: 0 0 6px 6px;
          margin-top: -8px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }

        .projects-grid {
          display: none;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          position: relative;
          padding: 1rem;
        }

        .project-card-wrapper :global(.sticky-note) {
          padding: 1.75rem;
          min-height: 240px;
        }

        .project-title {
          font-family: var(--font-title);
          font-size: 1.2rem;
          color: var(--charcoal);
          margin-bottom: 0.25rem;
        }

        .project-subtitle {
          font-family: var(--font-typewriter);
          font-size: 0.75rem;
          color: var(--muted-red);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }

        .project-description {
          font-family: var(--font-body);
          font-size: 0.85rem;
          line-height: 1.6;
          color: var(--cocoa);
          margin-bottom: 1rem;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .tag {
          padding: 3px 8px;
          background: rgba(255,255,255,0.5);
          border-radius: 3px;
          font-family: var(--font-body);
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--text-muted);
        }

        .reset-btn {
          grid-column: 1 / -1;
          justify-self: center;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          background: var(--paper-cream);
          border: 2px solid var(--kraft-paper);
          border-radius: 20px;
          font-family: var(--font-typewriter);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--kraft-dark);
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .reset-btn:hover {
          background: var(--kraft-paper);
          color: var(--paper-white);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .cardboard-box {
            width: 150px;
          }

          .box-body {
            height: 80px;
          }

          .project-card-wrapper :global(.sticky-note) {
            transform: rotate(0deg) !important;
          }
        }
      `}</style>
    </section>
  );
}
