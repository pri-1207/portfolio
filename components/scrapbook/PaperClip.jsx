'use client';

export default function PaperClip({
    color = 'silver',
    rotation = 0,
    style = {},
    className = ''
}) {
    const colorMap = {
        silver: '#A0A0A0',
        gold: '#D4A94B',
        rose: '#D4A5A5',
        black: '#333333'
    };

    return (
        <div
            className={`paperclip ${className}`}
            style={{
                position: 'absolute',
                width: '28px',
                height: '65px',
                zIndex: 15,
                transform: `rotate(${rotation}deg)`,
                cursor: 'default',
                ...style
            }}
        >
            <svg
                viewBox="0 0 28 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '100%', height: '100%' }}
            >
                {/* Outer loop */}
                <path
                    d="M6 5C6 3 8 1 14 1C20 1 22 3 22 5V50C22 55 18 60 14 60C10 60 6 55 6 50V15"
                    stroke={colorMap[color]}
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                />
                {/* Inner loop */}
                <path
                    d="M10 15V45C10 48 12 52 14 52C16 52 18 48 18 45V10"
                    stroke={colorMap[color]}
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                />
                {/* Highlight */}
                <path
                    d="M8 8C8 6 10 4 14 4"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                />
            </svg>

            <style jsx>{`
        .paperclip:hover {
          animation: wiggle 0.3s ease-in-out;
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(${rotation}deg); }
          25% { transform: rotate(${rotation + 5}deg); }
          75% { transform: rotate(${rotation - 5}deg); }
        }
      `}</style>
        </div>
    );
}
