import './globals.css';

export const metadata = {
    title: 'Prisha Gupta | Software Engineer',
    description: 'Portfolio of Prisha Gupta - Software Engineering Student at IIIT Pune. Building intelligent systems that feel simple. AI, Full-Stack, LLM Applications.',
    keywords: ['Prisha Gupta', 'Software Engineer', 'Portfolio', 'AI', 'Machine Learning', 'Full Stack Developer'],
    authors: [{ name: 'Prisha Gupta' }],
    openGraph: {
        title: 'Prisha Gupta | Software Engineer',
        description: 'Building intelligent systems that feel simple.',
        type: 'website',
    },
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#FDFCFA',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="icon" href="/icon.svg" type="image/svg+xml" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
