'use client';

// Camera Sticker
export function CameraSticker({ style = {}, size = 50 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 50 50"
            fill="none"
            style={{ position: 'absolute', ...style }}
        >
            <rect x="8" y="15" width="34" height="26" rx="4" fill="#4A3A2A" />
            <rect x="10" y="17" width="30" height="22" rx="3" fill="#2E2E2E" />
            <circle cx="25" cy="28" r="9" fill="#1E1E1E" />
            <circle cx="25" cy="28" r="7" fill="#3A3A3A" />
            <circle cx="25" cy="28" r="4" fill="#5A7A9A" />
            <circle cx="23" cy="26" r="1.5" fill="rgba(255,255,255,0.4)" />
            <rect x="17" y="10" width="16" height="6" rx="2" fill="#4A3A2A" />
            <circle cx="37" cy="20" r="2" fill="#B84A4A" />
            <rect x="12" y="20" width="5" height="3" rx="1" fill="#666" />
        </svg>
    );
}

// Bow Sticker
export function BowSticker({ style = {}, color = '#D4A5A5', size = 45 }) {
    return (
        <svg
            width={size}
            height={size * 0.7}
            viewBox="0 0 45 32"
            fill="none"
            style={{ position: 'absolute', ...style }}
        >
            <ellipse cx="10" cy="16" rx="9" ry="7" fill={color} />
            <ellipse cx="35" cy="16" rx="9" ry="7" fill={color} />
            <circle cx="22.5" cy="16" r="5" fill={color} />
            <ellipse cx="10" cy="16" rx="5" ry="4" fill="rgba(255,255,255,0.2)" />
            <ellipse cx="35" cy="16" rx="5" ry="4" fill="rgba(255,255,255,0.2)" />
            <path d="M18 22 L22.5 32 L27 22" fill={color} />
        </svg>
    );
}

// Heart Sticker
export function HeartSticker({ style = {}, color = '#D4A5A5', size = 30 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 30 30"
            fill="none"
            style={{ position: 'absolute', ...style }}
        >
            <path
                d="M15 26C15 26 3 18 3 10C3 5 7 2 11 4C13 5 15 7 15 7C15 7 17 5 19 4C23 2 27 5 27 10C27 18 15 26 15 26Z"
                fill={color}
            />
            <path
                d="M10 8C8 8 6 9 6 11"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
}

// Star Sticker
export function StarSticker({ style = {}, color = '#D4A94B', size = 25 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 25 25"
            fill="none"
            style={{ position: 'absolute', ...style }}
        >
            <path
                d="M12.5 2L15.5 9L23 10L17.5 15L19 23L12.5 19L6 23L7.5 15L2 10L9.5 9L12.5 2Z"
                fill={color}
            />
            <path
                d="M10 8L12.5 4L13 9"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1"
                strokeLinecap="round"
            />
        </svg>
    );
}

// Flower Sticker
export function FlowerSticker({ style = {}, size = 35 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 35 35"
            fill="none"
            style={{ position: 'absolute', ...style }}
        >
            <ellipse cx="17.5" cy="10" rx="5" ry="8" fill="#D4A5A5" />
            <ellipse cx="17.5" cy="10" rx="5" ry="8" fill="#D4A5A5" transform="rotate(72 17.5 17.5)" />
            <ellipse cx="17.5" cy="10" rx="5" ry="8" fill="#D4A5A5" transform="rotate(144 17.5 17.5)" />
            <ellipse cx="17.5" cy="10" rx="5" ry="8" fill="#D4A5A5" transform="rotate(216 17.5 17.5)" />
            <ellipse cx="17.5" cy="10" rx="5" ry="8" fill="#D4A5A5" transform="rotate(288 17.5 17.5)" />
            <circle cx="17.5" cy="17.5" r="5" fill="#D4A94B" />
            <circle cx="16" cy="16" r="1.5" fill="rgba(255,255,255,0.3)" />
        </svg>
    );
}

// Leaf Sticker
export function LeafSticker({ style = {}, color = '#8BA888', size = 30 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 30 30"
            fill="none"
            style={{ position: 'absolute', ...style }}
        >
            <path
                d="M15 28C15 28 3 20 3 10C3 4 8 2 15 2C22 2 27 4 27 10C27 20 15 28 15 28Z"
                fill={color}
            />
            <path
                d="M15 5V25M15 10L10 8M15 15L20 13M15 20L10 18"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1"
                strokeLinecap="round"
            />
        </svg>
    );
}

// Cat Sticker (minimal)
export function CatSticker({ style = {}, size = 40 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 40 40"
            fill="none"
            style={{ position: 'absolute', ...style }}
        >
            <circle cx="20" cy="24" r="12" fill="#4A3A2A" />
            <path d="M10 15L13 22L8 22Z" fill="#4A3A2A" />
            <path d="M30 15L27 22L32 22Z" fill="#4A3A2A" />
            <circle cx="16" cy="22" r="2" fill="#1E1E1E" />
            <circle cx="24" cy="22" r="2" fill="#1E1E1E" />
            <circle cx="15" cy="21" r="0.8" fill="white" />
            <circle cx="23" cy="21" r="0.8" fill="white" />
            <ellipse cx="20" cy="27" rx="1.5" ry="1" fill="#D4A5A5" />
            <path d="M18 29Q20 31 22 29" stroke="#1E1E1E" strokeWidth="0.8" fill="none" />
            <path d="M8 25L4 24M8 27L4 28M32 25L36 24M32 27L36 28" stroke="#4A3A2A" strokeWidth="0.8" />
        </svg>
    );
}

// Date Tag
export function DateTag({ date, style = {} }) {
    return (
        <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '5px 12px',
            background: '#FFFEF8',
            border: '1px solid #DDD',
            fontFamily: 'var(--font-typewriter)',
            fontSize: '0.7rem',
            color: '#6B5B4B',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            ...style
        }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {date}
        </div>
    );
}

// Ticket Stub
export function TicketStub({ children, style = {} }) {
    return (
        <div style={{
            background: '#FFF8E7',
            padding: '12px 16px 12px 20px',
            borderLeft: '4px dashed #C9A66B',
            position: 'relative',
            fontFamily: 'var(--font-typewriter)',
            ...style
        }}>
            {/* Punch holes */}
            <div style={{
                position: 'absolute',
                left: '-8px',
                top: '-8px',
                width: '16px',
                height: '16px',
                background: 'var(--gingham-blue-light)',
                borderRadius: '50%'
            }} />
            <div style={{
                position: 'absolute',
                left: '-8px',
                bottom: '-8px',
                width: '16px',
                height: '16px',
                background: 'var(--gingham-blue-light)',
                borderRadius: '50%'
            }} />
            {children}
        </div>
    );
}
