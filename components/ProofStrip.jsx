'use client'

export default function ProofStrip() {
    const proofs = [
        { icon: '⚡', text: '5× Faster Retrieval' },
        { icon: '📈', text: '84.8% Accuracy Gain' },
        { icon: '🎯', text: '98-99% ViT Accuracy' },
        { icon: '🏆', text: 'Top 3 HackRx Winner' },
        { icon: '🚀', text: 'Best Pitchers Award' },
        { icon: '💡', text: 'LightRAG Pioneer' },
    ]

    // Double for seamless loop
    const allProofs = [...proofs, ...proofs]

    return (
        <section className="py-8 overflow-hidden border-y border-pink-200/50 bg-white/40 backdrop-blur-sm">
            <div className="relative">
                <div className="proof-strip">
                    {allProofs.map((proof, i) => (
                        <div key={i} className="proof-badge">
                            <span className="text-lg">{proof.icon}</span>
                            <span>{proof.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
