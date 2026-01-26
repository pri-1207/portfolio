'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StampBadge, WashiTape, PaperClip, StarSticker, HeartSticker } from './scrapbook';

gsap.registerPlugin(ScrollTrigger);

const achievementsData = [
  {
    title: 'Bajaj HackRx 6.0',
    subtitle: 'Top 3 + Best Pitchers Award',
    date: '08/2025',
    icon: 'trophy',
    stampColor: 'red'
  },
  {
    title: 'Inter-College Debate, COEP',
    subtitle: '4th place + Highest individual score',
    date: '11/2024',
    icon: 'mic',
    stampColor: 'blue'
  },
  {
    title: 'JEE Mains 2023',
    subtitle: '97.7 percentile',
    date: '02/2023',
    icon: 'star',
    stampColor: 'green'
  }
];

// Trophy Icon
const TrophyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

// Mic Icon
const MicIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

// Star Award Icon
const StarAwardIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const iconMap = {
  trophy: TrophyIcon,
  mic: MicIcon,
  star: StarAwardIcon
};

export default function Achievements() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.ach-card', { opacity: 0, scale: 0.8, rotation: 0 });
      gsap.set('.ach-stamp', { opacity: 0, scale: 1.5, rotation: -20 });
      gsap.set('.ach-sticker', { opacity: 0, scale: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.to('.ach-card', {
        opacity: 1,
        scale: 1,
        rotation: (i) => [2, -1.5, 1][i] || 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.3)'
      })
        .to('.ach-stamp', {
          opacity: 0.8,
          scale: 1,
          rotation: -8,
          duration: 0.4,
          stagger: 0.12,
          ease: 'power2.out'
        }, '-=0.3')
        .to('.ach-sticker', {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: 'back.out(2)'
        }, '-=0.2');

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="achievements" className="achievements-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-title-wrapper">
            <h2>Achievements</h2>
            <div className="label-strip"></div>
          </div>
          <div className="section-label">RECOGNITION</div>
        </div>

        {/* Achievements Cards */}
        <div className="achievements-grid">
          {achievementsData.map((ach, index) => {
            const IconComponent = iconMap[ach.icon];
            return (
              <div key={index} className="ach-card" style={{ '--rotation': `${[2, -1.5, 1][index]}deg` }}>
                {/* Washi tape at top */}
                <WashiTape
                  color={['pink', 'blue', 'mint'][index]}
                  pattern="polka"
                  direction="horizontal"
                  style={{ top: '-8px', left: '50%', transform: 'translateX(-50%)', width: '70px' }}
                />

                {/* Polaroid-style card */}
                <div className="card-inner">
                  {/* Icon area */}
                  <div className="icon-area">
                    <div className="icon-circle" style={{
                      background: ach.stampColor === 'red' ? 'linear-gradient(135deg, #D4A94B 0%, #C9A046 100%)' :
                        ach.stampColor === 'blue' ? 'linear-gradient(135deg, #B84A4A 0%, #A43E3E 100%)' :
                          'linear-gradient(135deg, #8BA888 0%, #7A9A77 100%)'
                    }}>
                      <IconComponent />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="card-content">
                    <h3 className="ach-title">{ach.title}</h3>
                    <p className="ach-subtitle">{ach.subtitle}</p>
                  </div>

                  {/* Date stamp */}
                  <div className="ach-stamp">
                    <StampBadge type="circle" color={ach.stampColor} rotation={-8}>
                      {ach.date}
                    </StampBadge>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Stickers */}
          <StarSticker style={{ top: '10px', right: '5%' }} size={24} className="ach-sticker" />
          <HeartSticker style={{ bottom: '20px', left: '10%' }} color="#D4A5A5" size={22} className="ach-sticker" />
        </div>
      </div>

      <style jsx>{`
        .achievements-section {
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
          background: #E5C49D;
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

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          max-width: 950px;
          margin: 0 auto;
          position: relative;
          padding: 1rem;
        }

        .ach-card {
          position: relative;
          transform: rotate(var(--rotation));
          transition: transform 0.3s ease;
        }

        .ach-card:hover {
          transform: rotate(0deg) translateY(-5px);
          z-index: 10;
        }

        .card-inner {
          background: #FFFEF9;
          padding: 16px 16px 22px;
          box-shadow: 
            0 4px 15px rgba(0,0,0,0.1),
            0 8px 30px rgba(0,0,0,0.05);
        }

        .icon-area {
          background: linear-gradient(135deg, #F5ECD7 0%, #E8E0CE 100%);
          aspect-ratio: 4/3;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          border-radius: 2px;
        }

        .icon-circle {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .card-content {
          text-align: center;
        }

        .ach-title {
          font-family: var(--font-title);
          font-size: 1.1rem;
          color: var(--charcoal);
          margin-bottom: 0.35rem;
        }

        .ach-subtitle {
          font-family: var(--font-typewriter);
          font-size: 0.8rem;
          color: var(--muted-red);
        }

        .ach-stamp {
          position: absolute;
          top: 20px;
          right: 20px;
        }

        @media (max-width: 768px) {
          .achievements-grid {
            gap: 1.5rem;
          }

          .ach-card {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
}
