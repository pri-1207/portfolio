'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function FloatingDecorations() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate each paper bit with different timing
            gsap.to('.paper-bit', {
                y: '-=30',
                x: '+=10',
                rotation: '+=5',
                duration: gsap.utils.random(15, 25),
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                stagger: {
                    each: 2,
                    from: 'random'
                }
            });

            gsap.to('.stamp-deco', {
                rotation: '+=3',
                duration: 8,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="floating-decorations">
            {/* Paper bits drifting slowly */}
            <div className="paper-bit bit-1"></div>
            <div className="paper-bit bit-2"></div>
            <div className="paper-bit bit-3"></div>
            <div className="paper-bit bit-4"></div>
            <div className="paper-bit bit-5"></div>
            <div className="paper-bit bit-6"></div>

            {/* Decorative stamps/textures */}
            <div className="stamp-deco stamp-1">
                <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="18" stroke="var(--dusty-rose)" strokeWidth="1" strokeDasharray="4 2" opacity="0.3" />
                </svg>
            </div>
            <div className="stamp-deco stamp-2">
                <svg width="25" height="25" viewBox="0 0 40 40" fill="none">
                    <rect x="5" y="5" width="30" height="30" stroke="var(--sage)" strokeWidth="1" strokeDasharray="3 3" opacity="0.25" transform="rotate(15 20 20)" />
                </svg>
            </div>

            {/* Tape corner decorations */}
            <div className="tape-corner corner-1"></div>
            <div className="tape-corner corner-2"></div>

            <style jsx>{`
        .floating-decorations {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .paper-bit {
          position: absolute;
          background: var(--cream);
          box-shadow: 0 2px 8px var(--shadow-soft);
          opacity: 0.35;
        }

        .bit-1 {
          width: 45px;
          height: 60px;
          top: 10%;
          left: 3%;
          transform: rotate(-12deg);
          border-radius: 2px;
        }

        .bit-2 {
          width: 35px;
          height: 35px;
          top: 25%;
          right: 5%;
          transform: rotate(18deg);
          background: var(--blush-paper);
        }

        .bit-3 {
          width: 50px;
          height: 40px;
          top: 45%;
          left: 2%;
          transform: rotate(8deg);
        }

        .bit-4 {
          width: 40px;
          height: 55px;
          top: 60%;
          right: 4%;
          transform: rotate(-15deg);
          background: var(--cream-dark);
        }

        .bit-5 {
          width: 30px;
          height: 40px;
          top: 75%;
          left: 6%;
          transform: rotate(20deg);
          background: var(--blush-paper);
        }

        .bit-6 {
          width: 55px;
          height: 45px;
          top: 85%;
          right: 8%;
          transform: rotate(-8deg);
        }

        .stamp-deco {
          position: absolute;
        }

        .stamp-1 {
          top: 15%;
          right: 12%;
        }

        .stamp-2 {
          bottom: 20%;
          left: 10%;
        }

        .tape-corner {
          position: absolute;
          width: 50px;
          height: 18px;
          background: var(--tape);
          border: 1px solid rgba(200, 180, 150, 0.2);
          opacity: 0.4;
        }

        .corner-1 {
          top: 35%;
          left: -15px;
          transform: rotate(-45deg);
        }

        .corner-2 {
          bottom: 40%;
          right: -15px;
          transform: rotate(45deg);
        }

        @media (max-width: 1024px) {
          .floating-decorations {
            display: none;
          }
        }
      `}</style>
        </div>
    );
}
