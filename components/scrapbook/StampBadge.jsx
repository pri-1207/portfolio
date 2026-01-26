'use client';

export default function StampBadge({
    children,
    type = 'rectangular',
    color = 'red',
    rotation = -5,
    className = '',
    style = {}
}) {
    const colorMap = {
        red: '#B84A4A',
        blue: '#2E5E8A',
        green: '#5A8A5A',
        brown: '#8B6914'
    };

    const baseStyles = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `3px solid ${colorMap[color]}`,
        fontFamily: 'var(--font-typewriter)',
        fontSize: '0.7rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: colorMap[color],
        transform: `rotate(${rotation}deg)`,
        opacity: 0.85,
        ...style
    };

    if (type === 'circle') {
        return (
            <div
                className={`stamp-badge ${className}`}
                style={{
                    ...baseStyles,
                    borderRadius: '50%',
                    width: '70px',
                    height: '70px',
                    padding: 0
                }}
            >
                {children}
            </div>
        );
    }

    return (
        <div
            className={`stamp-badge ${className}`}
            style={{
                ...baseStyles,
                borderRadius: '4px',
                padding: '8px 16px'
            }}
        >
            {children}
        </div>
    );
}
