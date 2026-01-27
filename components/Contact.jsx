'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ScrapPageCard,
  WashiTape,
  PaperClip,
  CameraSticker,
  BowSticker,
  HeartSticker,
  FlowerSticker
} from './scrapbook';

gsap.registerPlugin(ScrollTrigger);

// Icons
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);



export default function Contact() {
  const sectionRef = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.contact-card', { opacity: 0, y: 40, rotation: 1 });
      gsap.set('.social-link', { opacity: 0, scale: 0.5 });
      gsap.set('.contact-sticker', { opacity: 0, scale: 0 });
      gsap.set('.contact-tape', { opacity: 0, y: -15 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.to('.contact-card', {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 0.7,
        ease: 'power3.out'
      })
        .to('.contact-tape', {
          opacity: 0.85,
          y: 0,
          duration: 0.3,
          stagger: 0.1,
          ease: 'power2.out'
        }, '-=0.4')
        .to('.social-link', {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: 'back.out(1.7)'
        }, '-=0.2')
        .to('.contact-sticker', {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: 'back.out(2)'
        }, '-=0.2');

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section ref={sectionRef} id="contact" className="contact-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrapper">
            <h2>Contact</h2>
            <div className="label-strip"></div>
          </div>
          <div className="section-label">GET IN TOUCH</div>
        </div>

        {/* Contact Card */}
        <div className="contact-layout">
          <div className="contact-card">
            <ScrapPageCard variant="cream" rotation={0}>
              {/* Washi Tapes */}
              <WashiTape
                color="pink"
                pattern="polka"
                direction="diagonal-left"
                style={{ top: '-10px', left: '25px' }}
                className="contact-tape"
              />
              <WashiTape
                color="blue"
                pattern="striped"
                direction="diagonal-right"
                style={{ top: '-10px', right: '35px' }}
                className="contact-tape"
              />

              {/* Paper Clip */}
              <PaperClip color="gold" rotation={12} style={{ top: '-22px', right: '130px' }} />

              {/* Header */}
              <div className="card-header">
                <h3>Let's connect</h3>
                <p>Find me on these platforms</p>
              </div>

              {/* Social Links */}
              <div className="social-section" style={{ marginTop: 0, paddingTop: 0, borderTop: 'none' }}>

                <div className="social-links">

                  <a href="https://github.com/pri-1207" target="_blank" rel="noopener noreferrer" className="social-link link-github" aria-label="GitHub">
                    <GitHubIcon />
                  </a>
                  <a href="https://linkedin.com/in/prisha" target="_blank" rel="noopener noreferrer" className="social-link link-linkedin" aria-label="LinkedIn">
                    <LinkedInIcon />
                  </a>
                </div>
              </div>

              {/* Stickers */}
              <BowSticker style={{ top: '25px', right: '20px' }} color="#D4A5A5" size={38} className="contact-sticker" />
              <HeartSticker style={{ bottom: '25px', left: '25px' }} color="#D4A5A5" size={22} className="contact-sticker" />
              <FlowerSticker style={{ bottom: '60px', right: '30px' }} size={28} className="contact-sticker" />
            </ScrapPageCard>
          </div>
        </div>

        {/* Footer */}
        <footer className="site-footer">
          <p className="footer-text">
            Built with calm design, clean code, and a soft spot for details.
          </p>
          <p className="footer-credit">
            Prisha Gupta © 2025
          </p>
        </footer>
      </div>

      <style jsx>{`
        .contact-section {
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
          background: var(--washi-peach);
          opacity: 0.8;
          z-index: 0;
          transform: rotate(-1deg);
        }

        .section-label {
          font-family: var(--font-typewriter);
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          color: var(--text-muted);
        }

        .contact-layout {
          max-width: 550px;
          margin: 0 auto;
        }

        .contact-card :global(.scrap-page-card) {
          padding: 2.5rem;
        }

        .card-header {
          text-align: center;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 2px dashed #E0D8C8;
        }

        .card-header h3 {
          font-family: var(--font-title);
          font-size: 1.5rem;
          color: var(--charcoal);
          margin-bottom: 0.5rem;
        }

        .card-header p {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--cocoa);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          font-family: var(--font-typewriter);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--charcoal);
        }

        .submit-btn {
          margin-top: 0.5rem;
          width: 100%;
          justify-content: center;
        }

        .social-section {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 2px dashed #E0D8C8;
          text-align: center;
        }

        .social-label {
          font-family: var(--font-typewriter);
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .social-link {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .link-email {
          background: rgba(184, 74, 74, 0.1);
          color: var(--muted-red);
        }

        .link-email:hover {
          background: var(--muted-red);
          color: white;
          transform: translateY(-3px);
        }

        .link-github {
          background: rgba(30, 30, 30, 0.1);
          color: var(--charcoal);
        }

        .link-github:hover {
          background: var(--charcoal);
          color: white;
          transform: translateY(-3px);
        }

        .link-linkedin {
          background: rgba(10, 102, 194, 0.1);
          color: #0A66C2;
        }

        .link-linkedin:hover {
          background: #0A66C2;
          color: white;
          transform: translateY(-3px);
        }

        .site-footer {
          margin-top: 4rem;
          text-align: center;
          padding-top: 2rem;
          border-top: 1px dashed #D0C8B8;
        }

        .footer-text {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-style: italic;
          color: var(--cocoa);
          margin-bottom: 0.5rem;
        }

        .footer-credit {
          font-family: var(--font-typewriter);
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .contact-card :global(.scrap-page-card) {
            padding: 2rem 1.5rem;
          }

          .contact-sticker {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
