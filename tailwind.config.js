/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            /* STRICT COLOR PALETTE - Only these colors */
            colors: {
                // Primrose Garden Pink
                'primrose': {
                    DEFAULT: '#E8B4B8',
                    light: '#F0C8CB',
                    dark: '#D49599',
                },
                // Pinktone
                'pinktone': {
                    DEFAULT: '#FDF0F0',
                    deep: '#FAE3E3',
                },
                // Lime Lollipop
                'lime': {
                    DEFAULT: '#A8C69F',
                    light: '#C4D9BC',
                    dark: '#8FB085',
                },
                // Yucca White (Background)
                'yucca': {
                    DEFAULT: '#FDFCFA',
                    warm: '#FAF8F5',
                },
                // Text colors (neutral, derived)
                'text': {
                    primary: '#2D2926',
                    secondary: '#5C5552',
                    light: '#8A8582',
                },
            },
            fontFamily: {
                heading: ['"Playfair Display"', 'Georgia', 'serif'],
                body: ['Inter', '-apple-system', 'sans-serif'],
            },
            boxShadow: {
                'soft': '0 2px 8px rgba(45, 41, 38, 0.04)',
                'medium': '0 4px 16px rgba(45, 41, 38, 0.06)',
                'card': '0 2px 12px rgba(232, 180, 184, 0.15)',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                fadeInUp: {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
};
