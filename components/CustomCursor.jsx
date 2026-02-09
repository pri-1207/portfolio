'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
    const cursorDotRef = useRef(null);
    const cursorOutlineRef = useRef(null);

    useEffect(() => {
        // Check if device is mobile - don't show custom cursor on mobile
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        if (isMobile) return;

        // Hide default cursor
        const style = document.createElement('style');
        style.innerHTML = `
      * { cursor: none !important; }
      body { cursor: none !important; }
    `;
        document.head.appendChild(style);

        const cursorDot = cursorDotRef.current;
        const cursorOutline = cursorOutlineRef.current;

        // Set initial states
        gsap.set([cursorDot, cursorOutline], { xPercent: -50, yPercent: -50 });

        const xToDot = gsap.quickSetter(cursorDot, "x", "px");
        const yToDot = gsap.quickSetter(cursorDot, "y", "px");

        const xToOutline = gsap.quickSetter(cursorOutline, "x", "px");
        const yToOutline = gsap.quickSetter(cursorOutline, "y", "px");

        const onMouseMove = (e) => {
            const { clientX: x, clientY: y } = e;
            xToDot(x);
            yToDot(y);

            gsap.to(cursorOutline, {
                x,
                y,
                duration: 0.4,
                ease: 'power3.out'
            });
        };

        const onMouseDown = () => {
            gsap.to(cursorDot, { scale: 0.6, duration: 0.2 });
            gsap.to(cursorOutline, { scale: 1.2, duration: 0.2 });
        };

        const onMouseUp = () => {
            gsap.to(cursorDot, { scale: 1, duration: 0.2 });
            gsap.to(cursorOutline, { scale: 1, duration: 0.2 });
        };

        // Hover interactions for all interactive elements
        const onMouseEnterInteractive = (e) => {
            const isLime = e.currentTarget.classList.contains('tag') || e.currentTarget.classList.contains('lime');

            gsap.to(cursorDot, {
                scale: 4,
                backgroundColor: isLime ? 'rgba(168, 198, 159, 0.3)' : 'rgba(232, 180, 184, 0.4)',
                duration: 0.3
            });
            gsap.to(cursorOutline, {
                scale: 1.6,
                borderColor: isLime ? 'var(--lime-dark)' : 'var(--primrose-pink)',
                borderWidth: '2px',
                duration: 0.3
            });
        };

        const onMouseLeaveInteractive = () => {
            gsap.to(cursorDot, {
                scale: 1,
                backgroundColor: 'var(--primrose-pink)',
                duration: 0.3
            });
            gsap.to(cursorOutline, {
                scale: 1,
                borderColor: 'var(--primrose-pink-light)',
                borderWidth: '1px',
                duration: 0.3
            });
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);

        const refreshListeners = () => {
            const items = document.querySelectorAll('a, button, .interactive, .tag, .keyword-chip');
            items.forEach(item => {
                item.addEventListener('mouseenter', onMouseEnterInteractive);
                item.addEventListener('mouseleave', onMouseLeaveInteractive);
            });
        };

        refreshListeners();
        // Re-bind occasionally or use a small delay to catch dynamic entries
        const timeoutId = setTimeout(refreshListeners, 1000);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            document.head.removeChild(style);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <>
            <div ref={cursorDotRef} className="cursor-dot" />
            <div ref={cursorOutlineRef} className="cursor-outline" />

            <style jsx>{`
        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          background-color: var(--primrose-pink);
          border-radius: 50%;
          z-index: 10001;
          pointer-events: none;
          mix-blend-mode: multiply;
        }

        .cursor-outline {
          position: fixed;
          top: 0;
          left: 0;
          width: 36px;
          height: 36px;
          border: 1px solid var(--primrose-pink-light);
          border-radius: 50%;
          z-index: 10000;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .cursor-dot, .cursor-outline {
            display: none;
          }
        }
      `}</style>
        </>
    );
}
