'use client';

export default function StickyNote({
    children,
    color = 'yellow',
    rotation = -1,
    className = '',
    style = {}
}) {
    const colorMap = {
        yellow: '#FFF59D',
        pink: '#F8BBD9',
        blue: '#B3E5FC',
        green: '#C8E6C9',
        orange: '#FFCC80',
        purple: '#E1BEE7'
    };

    return (
        <div
            className={`sticky-note ${className}`}
            style={{
                background: colorMap[color] || colorMap.yellow,
                padding: '1.25rem 1.5rem',
                position: 'relative',
                boxShadow: '2px 3px 8px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.08)',
                transform: `rotate(${rotation}deg)`,
                fontFamily: 'var(--font-body)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                ...style
            }}
        >
            {/* Fold shadow at top */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '20px',
                background: 'linear-gradient(180deg, rgba(0,0,0,0.04) 0%, transparent 100%)',
                pointerEvents: 'none'
            }} />
            {children}

            <style jsx>{`
        .sticky-note:hover {
          transform: rotate(${rotation}deg) translateY(-4px) !important;
          box-shadow: 4px 6px 15px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.1) !important;
        }
      `}</style>
        </div>
    );
}
