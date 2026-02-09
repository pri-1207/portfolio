'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="brand-name">Prisha Gupta</span>
            <span className="brand-dot"></span>
          </div>

          <div className="footer-links">
            <a href="https://github.com/pri-1207" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span className="divider">·</span>
            <a href="https://www.linkedin.com/in/prishagupta2005/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <span className="divider">·</span>
            <a href="mailto:gprisha1207@gmail.com">
              Email
            </a>
          </div>

          <p className="footer-copy">
            © {currentYear} · Built with Next.js
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          padding: 2.5rem 0;
          background: var(--yucca-warm);
          border-top: 1px solid var(--pinktone-deep);
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 clamp(1.25rem, 4vw, 2.5rem);
        }

        .footer-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .brand-name {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .brand-dot {
          width: 5px;
          height: 5px;
          background: var(--primrose-pink);
          border-radius: 50%;
        }

        .footer-links {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .footer-links a {
          font-size: 0.85rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: var(--primrose-pink-dark);
        }

        .divider {
          color: var(--text-light);
          font-size: 0.8rem;
        }

        .footer-copy {
          font-size: 0.8rem;
          color: var(--text-light);
        }

        @media (max-width: 600px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
            gap: 0.75rem;
          }
        }
      `}</style>
    </footer>
  );
}
