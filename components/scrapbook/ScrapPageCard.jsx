'use client';

export default function ScrapPageCard({
    children,
    variant = 'white',
    rotation = 0,
    className = '',
    style = {},
    showShadow = true
}) {
    const variantMap = {
        white: '#FFFEF8',
        cream: '#FFF8E7',
        aged: '#F5ECD7',
        kraft: '#E5D5B5'
    };

    // Generate torn edge clip path
    const tornEdgeClipPath = `polygon(
    0% 0%,
    3% 0.5%,
    6% 0%,
    9% 0.8%,
    12% 0.2%,
    15% 0.6%,
    18% 0%,
    21% 0.4%,
    24% 0.1%,
    27% 0.7%,
    30% 0.2%,
    33% 0.5%,
    36% 0%,
    39% 0.6%,
    42% 0.1%,
    45% 0.4%,
    48% 0%,
    51% 0.5%,
    54% 0.2%,
    57% 0.7%,
    60% 0%,
    63% 0.4%,
    66% 0.1%,
    69% 0.6%,
    72% 0.2%,
    75% 0.5%,
    78% 0%,
    81% 0.7%,
    84% 0.3%,
    87% 0.6%,
    90% 0%,
    93% 0.4%,
    96% 0.1%,
    100% 0%,
    100% 100%,
    97% 99.5%,
    94% 100%,
    91% 99.3%,
    88% 99.8%,
    85% 99.4%,
    82% 100%,
    79% 99.6%,
    76% 99.2%,
    73% 99.7%,
    70% 100%,
    67% 99.5%,
    64% 99.8%,
    61% 99.3%,
    58% 100%,
    55% 99.6%,
    52% 99.2%,
    49% 99.8%,
    46% 99.4%,
    43% 100%,
    40% 99.5%,
    37% 99.9%,
    34% 99.3%,
    31% 99.7%,
    28% 100%,
    25% 99.4%,
    22% 99.8%,
    19% 99.2%,
    16% 99.6%,
    13% 100%,
    10% 99.5%,
    7% 99.8%,
    4% 99.3%,
    1% 99.7%,
    0% 100%
  )`;

    return (
        <div
            className={`scrap-page-card ${className}`}
            style={{
                background: variantMap[variant] || variantMap.white,
                position: 'relative',
                padding: '2.5rem',
                clipPath: tornEdgeClipPath,
                transform: rotation ? `rotate(${rotation}deg)` : 'none',
                boxShadow: showShadow ? '0 2px 8px rgba(0,0,0,0.08), 0 4px 20px rgba(0,0,0,0.04)' : 'none',
                ...style
            }}
        >
            {/* Paper texture overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)' opacity='0.02'/%3E%3C/svg%3E")`,
                pointerEvents: 'none',
                zIndex: 0
            }} />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </div>
        </div>
    );
}
