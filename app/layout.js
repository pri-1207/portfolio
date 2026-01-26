import './globals.css';

export const metadata = {
    title: 'Prisha Gupta | Software Engineering Student',
    description: 'Portfolio of Prisha Gupta - Software Engineering Student specializing in AI, Full-Stack Development, and LLM Applications. Building systems that feel smart and simple.',
    keywords: ['Prisha Gupta', 'Software Engineer', 'AI', 'Machine Learning', 'Full Stack Developer', 'LLM', 'Portfolio'],
    authors: [{ name: 'Prisha Gupta' }],
    openGraph: {
        title: 'Prisha Gupta | Software Engineering Student',
        description: 'Building systems that feel smart and simple at the same time.',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#F6F1E8" />
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
