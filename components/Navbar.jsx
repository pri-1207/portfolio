'use client';

import { useEffect, useState } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setIsMobileOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <a href="#hero" className="nav-logo" onClick={(e) => scrollToSection(e, '#hero')}>
          <span className="logo-text">Prisha</span>
          <span className="logo-dot"></span>
        </a>

        {/* Desktop Links */}
        <div className="nav-links">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="nav-link"
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <a href="/Prisha_Gupta_Resume.pdf" className="nav-resume" download>
          Resume
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
        </a>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMobileOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`}>
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="mobile-link"
            onClick={(e) => scrollToSection(e, link.href)}
          >
            {link.label}
          </a>
        ))}
        <a href="/Prisha_Gupta_Resume.pdf" className="mobile-link resume" download>
          Download Resume
        </a>
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
          background: rgba(253, 252, 250, 0.95);
          backdrop-filter: blur(10px);
          padding: 0.75rem 0;
          box-shadow: 0 1px 8px rgba(0,0,0,0.04);
        }

        .nav-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 clamp(1.25rem, 4vw, 2.5rem);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 5px;
          text-decoration: none;
        }

        .logo-text {
          font-family: var(--font-heading);
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .logo-dot {
          width: 7px;
          height: 7px;
          background: var(--primrose-pink);
          border-radius: 50%;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          font-family: var(--font-body);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s ease;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primrose-pink);
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-resume {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 8px 16px;
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-primary);
          background: var(--primrose-pink-light);
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .nav-resume:hover {
          background: var(--primrose-pink);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }

        .hamburger {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--text-primary);
          position: relative;
          transition: all 0.3s ease;
        }

        .hamburger::before,
        .hamburger::after {
          content: '';
          position: absolute;
          width: 22px;
          height: 2px;
          background: var(--text-primary);
          transition: all 0.3s ease;
        }

        .hamburger::before { top: -6px; }
        .hamburger::after { top: 6px; }

        .hamburger.open {
          background: transparent;
        }

        .hamburger.open::before {
          top: 0;
          transform: rotate(45deg);
        }

        .hamburger.open::after {
          top: 0;
          transform: rotate(-45deg);
        }

        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--yucca);
          padding: 0.75rem 0;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
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
          padding: 0.9rem clamp(1.25rem, 4vw, 2.5rem);
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--text-primary);
          text-decoration: none;
          border-bottom: 1px solid var(--pinktone);
        }

        .mobile-link:last-child {
          border-bottom: none;
        }

        .mobile-link.resume {
          color: var(--primrose-pink-dark);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .nav-links,
          .nav-resume {
            display: none;
          }

          .mobile-toggle,
          .mobile-menu {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
