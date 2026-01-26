'use client';

export default function PolaroidFrame({
    caption = '',
    rotation = 2,
    placeholder = 'photo goes here',
    className = '',
    style = {},
    children
}) {
    return (
        <div
            className={`polaroid-frame ${className}`}
            style={{
                background: '#FFFEF9',
                padding: '12px 12px 45px 12px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1), 0 8px 30px rgba(0,0,0,0.05)',
                transform: `rotate(${rotation}deg)`,
                position: 'relative',
                transition: 'transform 0.4s ease',
                ...style
            }}
        >
            {/* Photo area */}
            <div className="photo-area" style={{
                background: 'linear-gradient(135deg, #E8E4DA 0%, #D4D0C6 100%)',
                aspectRatio: '1 / 1.1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-typewriter)',
                fontSize: '0.85rem',
                color: '#6B5B4B',
                border: '1px dashed #999'
            }}>
                {children || placeholder}
            </div>

            {/* Caption */}
            {caption && (
                <p className="caption" style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: 0,
                    right: 0,
                    textAlign: 'center',
                    fontFamily: 'var(--font-typewriter)',
                    fontSize: '0.75rem',
                    color: '#4A3A2A'
                }}>
                    {caption}
                </p>
            )}

            <style jsx>{`
        .polaroid-frame:hover {
          transform: rotate(0deg) scale(1.02) !important;
        }
      `}</style>
        </div>
    );
}
