'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// Flower Logo - Cute minimal
const FlowerLogo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="14" r="4" fill="#D4A94B" />
    <ellipse cx="16" cy="8" rx="4" ry="6" fill="#D4A5A5" opacity="0.9" />
    <ellipse cx="16" cy="8" rx="4" ry="6" fill="#D4A5A5" opacity="0.9" transform="rotate(72 16 14)" />
    <ellipse cx="16" cy="8" rx="4" ry="6" fill="#D4A5A5" opacity="0.9" transform="rotate(144 16 14)" />
    <ellipse cx="16" cy="8" rx="4" ry="6" fill="#D4A5A5" opacity="0.9" transform="rotate(216 16 14)" />
    <ellipse cx="16" cy="8" rx="4" ry="6" fill="#D4A5A5" opacity="0.9" transform="rotate(288 16 14)" />
    <path d="M16 20V30" stroke="#8BA888" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 25C18 23 21 23 22 25" stroke="#8BA888" strokeWidth="1.5" fill="none" />
  </svg>
);

// Menu Icon
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

// Close Icon
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo('.nav-item',
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.5,
        ease: 'power2.out'
      }
    );

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav ref={navRef} className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <a href="#hero" className="nav-logo nav-item" onClick={(e) => scrollToSection(e, '#hero')}>
          <FlowerLogo />
          <span className="logo-text">Prisha</span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="nav-link nav-item"
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn nav-item"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="mobile-link"
            onClick={(e) => scrollToSection(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 0;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(212, 228, 244, 0.92);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0,0,0,0.06);
          padding: 0.75rem 0;
        }

        .nav-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 clamp(1.5rem, 4vw, 3rem);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }

        .logo-text {
          font-family: var(--font-title);
          font-size: 1.3rem;
          color: var(--charcoal);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          font-family: var(--font-typewriter);
          font-size: 0.85rem;
          color: var(--cocoa);
          text-decoration: none;
          position: relative;
          padding: 0.25rem 0;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--muted-red);
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: var(--charcoal);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--charcoal);
          padding: 0.5rem;
        }

        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--paper-cream);
          padding: 1rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transform: translateY(-10px);
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
        }

        .mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-link {
          display: block;
          padding: 1rem;
          font-family: var(--font-typewriter);
          font-size: 0.95rem;
          color: var(--charcoal);
          text-decoration: none;
          text-align: center;
          border-bottom: 1px dashed var(--kraft-paper);
          transition: background 0.3s ease;
        }

        .mobile-link:last-child {
          border-bottom: none;
        }

        .mobile-link:hover {
          background: rgba(212, 169, 75, 0.1);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .mobile-menu {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
