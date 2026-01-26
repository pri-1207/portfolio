'use client'

export default function Philosophy() {
    const principles = [
        {
            symbol: '✦',
            title: 'Calm UI, Strong Logic',
            desc: 'Beautiful interfaces backed by robust engineering',
        },
        {
            symbol: '◈',
            title: 'Explainability First',
            desc: 'AI that shows its reasoning, not just results',
        },
        {
            symbol: '→',
            title: 'Ship Fast, Refine Smart',
            desc: 'Move quickly, iterate with purpose',
        },
        {
            symbol: '◎',
            title: 'Engineering Over Flash',
            desc: 'Substance before spectacle, always',
        },
    ]

    return (
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-accent-rose tracking-widest uppercase mb-4">
                        How I Build
                    </p>
                    <h2 className="font-editorial text-4xl md:text-5xl font-medium text-text-primary">
                        Build Philosophy
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {principles.map((p, i) => (
                        <div key={i} className="philosophy-card group">
                            <span className="text-4xl text-accent-rose mb-4 block group-hover:scale-110 transition-transform">
                                {p.symbol}
                            </span>
                            <h3 className="font-sans-display text-lg font-bold text-text-primary mb-2">
                                {p.title}
                            </h3>
                            <p className="text-sm text-text-muted leading-relaxed">
                                {p.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
