'use client';

export default function WashiTape({
    color = 'pink',
    pattern = 'solid',
    direction = 'horizontal',
    style = {},
    className = ''
}) {
    const colorMap = {
        pink: '#FADCD9',
        blue: '#D4E6F1',
        mint: '#D5F5E3',
        peach: '#FCE4D6',
        yellow: '#FFF59D',
        lavender: '#E8DAEF'
    };

    const getPattern = () => {
        switch (pattern) {
            case 'polka':
                return `radial-gradient(circle, rgba(255,255,255,0.6) 2px, transparent 2px)`;
            case 'striped':
                return `repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.4) 3px, rgba(255,255,255,0.4) 6px)`;
            case 'gingham':
                return `
          repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(255,255,255,0.3) 4px, rgba(255,255,255,0.3) 8px),
          repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.3) 4px, rgba(255,255,255,0.3) 8px)
        `;
            default:
                return 'none';
        }
    };

    const getTransform = () => {
        switch (direction) {
            case 'diagonal-left':
                return 'rotate(-35deg)';
            case 'diagonal-right':
                return 'rotate(35deg)';
            case 'slight-left':
                return 'rotate(-8deg)';
            case 'slight-right':
                return 'rotate(8deg)';
            default:
                return 'rotate(0deg)';
        }
    };

    return (
        <div
            className={`washi-tape ${className}`}
            style={{
                position: 'absolute',
                height: '26px',
                width: direction.includes('diagonal') ? '80px' : '100px',
                backgroundColor: colorMap[color] || colorMap.pink,
                backgroundImage: getPattern(),
                backgroundSize: pattern === 'polka' ? '8px 8px' : 'auto',
                opacity: 0.85,
                transform: getTransform(),
                zIndex: 10,
                ...style
            }}
        />
    );
}
