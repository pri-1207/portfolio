'use client';

// Minimal floating decorations - just 2-3 subtle elements
// Following strict palette: primrose pink, lime, yucca white

export default function FloatingDecorations() {
  return (
    <div className="floating-decorations" aria-hidden="true">
      {/* Just 2 subtle circles - very minimal */}
      <div className="deco deco-1"></div>
      <div className="deco deco-2"></div>

      <style jsx>{`
        .floating-decorations {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .deco {
          position: absolute;
          border-radius: 50%;
          opacity: 0.15;
        }

        .deco-1 {
          width: 300px;
          height: 300px;
          background: var(--primrose-pink);
          top: 10%;
          right: -100px;
          filter: blur(80px);
        }

        .deco-2 {
          width: 250px;
          height: 250px;
          background: var(--lime);
          bottom: 20%;
          left: -80px;
          filter: blur(80px);
        }

        @media (max-width: 768px) {
          .deco-1, .deco-2 {
            opacity: 0.08;
          }
        }
      `}</style>
    </div>
  );
}
