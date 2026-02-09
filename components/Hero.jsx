'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['LLMs', 'ML Systems', 'Full Stack', 'AI'];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set('.hero-animate', { opacity: 0, y: 25 });
      gsap.set('.photo-frame', { opacity: 0, scale: 0.95, rotation: -2 });
      gsap.set('.letter', { opacity: 0, y: 50, rotationX: -90 });
      gsap.set('.name-highlight', { width: 0 });

      const tl = gsap.timeline({ delay: 0.2 });

      // Animate letters one by one
      tl.to('.letter', {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.6,
        stagger: 0.03,
        ease: 'back.out(1.7)'
      })
        // Highlight underline grows
        .to('.name-highlight', {
          width: '100%',
          duration: 0.6,
          ease: 'power2.out'
        }, '-=0.3')
        // Photo appears
        .to('.photo-frame', { opacity: 1, scale: 1, rotation: 2, duration: 0.8, ease: 'power2.out' }, '-=0.4')
        // Other content
        .to('.hero-role', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.5')
        .to('.typing-container', { opacity: 1, y: 0, duration: 0.4 }, '-=0.3')
        .to('.hero-desc', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')
        .to('.hero-tags', { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2')
        .to('.hero-buttons', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2');

    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Typing animation - cycle through words
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Split text into letters
  const splitText = (text) => {
    return text.split('').map((char, i) => (
      <span key={i} className="letter" style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section ref={heroRef} id="hero" className="hero">
      {/* Floating decorative elements */}
      <div className="floating-elements">
        <div className="float-circle circle-1"></div>
        <div className="float-circle circle-2"></div>
        <div className="float-star star-1">✦</div>
        <div className="float-star star-2">✦</div>
        <div className="float-star star-3">◇</div>
      </div>

      <div className="hero-container">
        {/* Content */}
        <div className="hero-content">
          {/* Animated Title */}
          <h1 className="hero-title">
            <span className="title-line">
              {splitText("Hi, I'm")}
            </span>
            <span className="name-wrapper">
              <span className="name-text">
                {splitText("Prisha ")}
                <span className="name-accent">
                  {splitText("Gupta")}
                </span>
              </span>
              <span className="name-highlight"></span>
            </span>
          </h1>

          <p className="hero-role hero-animate">
            <span className="role-icon">◆</span>
            Software Engineering Student @ IIIT Pune
          </p>

          {/* Dynamic typing text */}
          <div className="typing-container hero-animate">
            <span className="typing-label">Currently exploring</span>
            <span className="typing-text" key={currentWord}>
              <span className="typing-word">{words[currentWord]}</span>
              <span className="cursor">|</span>
            </span>
          </div>

          <p className="hero-desc hero-animate">
            Building <span className="highlight-word">intelligent systems</span> with a focus on
            <strong> machine learning</strong> and <strong>full-stack development</strong>.
            I love solving complex problems with clean, efficient code.
          </p>

          <div className="hero-tags hero-animate">
            <span className="tag lime interactive">DSA</span>
            <span className="tag lime interactive">LLM Systems</span>
            <span className="tag lime interactive">Full Stack</span>
            <span className="tag lime interactive">ML/AI</span>
          </div>

          <div className="hero-buttons hero-animate">
            <a href="#projects" className="btn btn-primary magnetic">
              <span>View Projects</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/Prisha_Gupta_Resume.pdf" className="btn btn-outline magnetic" download>
              <span>Resume</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Photo with Washi Tape */}
        <div className="hero-visual">
          <div className="photo-frame">
            <div className="washi-tape"></div>
            <div className="photo-inner">
              <img src="/prisha-photo.jpeg" alt="Prisha Gupta" />
            </div>
            <p className="photo-caption">— prisha ✦</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 5rem 0 3rem;
          position: relative;
          overflow: hidden;
        }

        /* Floating decorative elements */
        .floating-elements {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .float-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.4;
        }

        .circle-1 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, var(--primrose-pink-light) 0%, transparent 70%);
          top: 10%;
          right: -100px;
          animation: float-slow 20s ease-in-out infinite;
        }

        .circle-2 {
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, var(--lime-light) 0%, transparent 70%);
          bottom: 20%;
          left: -50px;
          animation: float-slow 25s ease-in-out infinite reverse;
        }

        .float-star {
          position: absolute;
          color: var(--primrose-pink);
          opacity: 0.6;
          animation: twinkle 3s ease-in-out infinite;
        }

        .star-1 {
          top: 20%;
          left: 15%;
          font-size: 1.2rem;
        }

        .star-2 {
          bottom: 30%;
          right: 20%;
          font-size: 1rem;
          animation-delay: 1.5s;
        }

        .star-3 {
          top: 60%;
          left: 8%;
          font-size: 0.9rem;
          color: var(--lime);
          animation-delay: 0.8s;
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.05); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.8; transform: scale(1.3) rotate(15deg); }
        }

        .hero-container {
          max-width: 1100px;
          width: 100%;
          margin: 0 auto;
          padding: 0 clamp(1.25rem, 4vw, 2.5rem);
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 3rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          max-width: 520px;
        }

        /* ===== DYNAMIC TYPOGRAPHY ===== */
        .hero-title {
          font-size: clamp(2rem, 5vw, 3rem);
          line-height: 1.2;
          margin-bottom: 0.75rem;
        }

        .title-line {
          display: block;
          margin-bottom: 0.25rem;
        }

        .letter {
          display: inline-block;
          transform-origin: bottom center;
        }

        .name-wrapper {
          display: inline-block;
          position: relative;
        }

        .name-text {
          display: block;
          position: relative;
          z-index: 2;
        }

        .name-accent {
          font-style: italic;
          color: var(--primrose-pink-dark);
          position: relative;
        }

        .name-accent .letter {
          animation: wave 2.5s ease-in-out infinite;
          animation-delay: calc(var(--i, 0) * 0.1s);
        }

        .name-accent .letter:nth-child(1) { --i: 0; }
        .name-accent .letter:nth-child(2) { --i: 1; }
        .name-accent .letter:nth-child(3) { --i: 2; }
        .name-accent .letter:nth-child(4) { --i: 3; }
        .name-accent .letter:nth-child(5) { --i: 4; }

        @keyframes wave {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .name-highlight {
          position: absolute;
          bottom: 2px;
          left: 0;
          height: 8px;
          background: linear-gradient(90deg, var(--lime-light) 0%, var(--lime) 100%);
          border-radius: 4px;
          z-index: 1;
          opacity: 0.5;
        }

        .hero-role {
          font-size: 1.05rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .role-icon {
          color: var(--lime);
          font-size: 0.6rem;
          animation: pulse-icon 2s ease-in-out infinite;
        }

        @keyframes pulse-icon {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.3); opacity: 1; }
        }

        /* Dynamic typing */
        .typing-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }

        .typing-label {
          font-size: 0.85rem;
          color: var(--text-light);
        }

        .typing-text {
          font-family: var(--font-heading);
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--lime-dark);
          padding: 4px 12px;
          background: var(--lime-light);
          border-radius: 4px;
          display: inline-flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .typing-word {
          animation: typeIn 0.5s ease-out;
        }

        @keyframes typeIn {
          0% { 
            opacity: 0; 
            transform: translateY(10px) rotateX(-20deg); 
            filter: blur(3px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) rotateX(0); 
            filter: blur(0);
          }
        }

        .cursor {
          margin-left: 2px;
          animation: blink 1s step-end infinite;
          color: var(--lime-dark);
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .hero-desc {
          font-size: 0.95rem;
          line-height: 1.75;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
          max-width: 440px;
        }

        .hero-desc strong {
          color: var(--text-primary);
          font-weight: 500;
        }

        .highlight-word {
          color: var(--primrose-pink-dark);
          font-weight: 500;
          position: relative;
        }

        .highlight-word::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--primrose-pink);
          transform: scaleX(0);
          transform-origin: right;
          animation: underline-grow 3s ease-in-out infinite;
        }

        @keyframes underline-grow {
          0%, 100% { transform: scaleX(0); transform-origin: right; }
          50% { transform: scaleX(1); transform-origin: left; }
        }

        .hero-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }

        .tag.interactive {
          cursor: default;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .tag.interactive:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 4px 12px rgba(168, 198, 159, 0.3);
        }

        .hero-buttons {
          display: flex;
          gap: 0.75rem;
        }

        .btn.magnetic {
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          overflow: hidden;
          position: relative;
        }

        .btn.magnetic::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: none;
        }

        .btn.magnetic:hover::before {
          animation: btn-shimmer 0.6s ease-out;
        }

        @keyframes btn-shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .btn.magnetic:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.12);
        }

        .hero-visual {
          display: flex;
          justify-content: center;
        }

        /* Photo Frame */
        .photo-frame {
          position: relative;
          background: white;
          padding: 12px;
          padding-bottom: 40px;
          border-radius: 4px;
          box-shadow: 
            0 4px 20px rgba(0,0,0,0.08),
            0 8px 40px rgba(0,0,0,0.06);
          transform: rotate(2deg);
          transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .photo-frame:hover {
          transform: rotate(0deg) scale(1.02);
        }

        .washi-tape {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%) rotate(-4deg);
          width: 80px;
          height: 28px;
          background: linear-gradient(
            90deg,
            rgba(168, 198, 159, 0.85) 0%,
            rgba(184, 212, 175, 0.9) 50%,
            rgba(168, 198, 159, 0.85) 100%
          );
          border-radius: 1px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          z-index: 10;
        }

        .washi-tape::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              transparent 4px,
              rgba(255,255,255,0.3) 4px,
              rgba(255,255,255,0.3) 5px
            );
          opacity: 0.5;
        }

        .photo-inner {
          border-radius: 2px;
          overflow: hidden;
        }

        .photo-inner img {
          width: 240px;
          height: 280px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .photo-frame:hover .photo-inner img {
          transform: scale(1.02);
        }

        .photo-caption {
          position: absolute;
          bottom: 12px;
          left: 0;
          right: 0;
          text-align: center;
          font-family: var(--font-heading);
          font-style: italic;
          font-size: 0.9rem;
          color: var(--text-light);
        }

        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: center;
          }

          .hero-content {
            max-width: 100%;
            order: 2;
          }

          .hero-visual {
            order: 1;
          }

          .hero-desc {
            max-width: 100%;
          }

          .hero-role {
            justify-content: center;
          }

          .hero-buttons, .hero-tags {
            justify-content: center;
          }

          .typing-container {
            justify-content: center;
          }

          .photo-inner img {
            width: 200px;
            height: 240px;
          }

          .float-circle {
            opacity: 0.2;
          }
        }

        @media (max-width: 480px) {
          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }

          .hero-buttons .btn {
            justify-content: center;
          }

          .photo-inner img {
            width: 180px;
            height: 220px;
          }
        }
      `}</style>
    </section>
  );
}
