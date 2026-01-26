/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Primary Colors - Warm & Contrasting
                parchment: '#F6F1E8',
                'blush-paper': '#FBE9E7',
                cream: '#FFF7F0',
                'cream-dark': '#F5EDE4',

                // Accent Colors - Muted but Poppy
                cherry: '#B44B4B',
                'cherry-dark': '#943D3D',
                terracotta: '#C07050',
                'terracotta-light': '#D4896D',
                'dusty-rose': '#C98B8B',
                sage: '#8BA888',
                'sage-light': '#A5C4A1',
                golden: '#D4A574',
                'golden-light': '#E5C49D',

                // Text Colors
                espresso: '#2A1F1F',
                'espresso-light': '#4A3F3F',
                'espresso-muted': '#6A5F5F',
            },
            fontFamily: {
                display: ['"DM Serif Display"', '"Playfair Display"', 'Georgia', 'serif'],
                heading: ['"Playfair Display"', 'Georgia', 'serif'],
                body: ['Inter', 'Manrope', '-apple-system', 'sans-serif'],
                accent: ['Manrope', 'sans-serif'],
            },
            boxShadow: {
                'soft': '0 2px 8px rgba(42, 31, 31, 0.08)',
                'medium': '0 4px 20px rgba(42, 31, 31, 0.12)',
                'strong': '0 8px 30px rgba(42, 31, 31, 0.18)',
            },
            animation: {
                'float-drift': 'float-drift 20s ease-in-out infinite',
                'gentle-bounce': 'gentle-bounce 1.5s ease-in-out infinite',
                'gentle-rotate': 'gentle-rotate 4s ease-in-out infinite',
            },
            keyframes: {
                'float-drift': {
                    '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
                    '25%': { transform: 'translateY(-20px) rotate(5deg)' },
                    '50%': { transform: 'translateY(-10px) rotate(-3deg)' },
                    '75%': { transform: 'translateY(-25px) rotate(3deg)' },
                },
                'gentle-bounce': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-5px)' },
                },
                'gentle-rotate': {
                    '0%, 100%': { transform: 'rotate(-2deg)' },
                    '50%': { transform: 'rotate(2deg)' },
                },
            },
        },
    },
    plugins: [],
};
