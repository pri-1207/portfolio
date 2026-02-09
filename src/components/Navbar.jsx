import { useEffect, useState } from 'react'

// Flower logo SVG
const FlowerLogo = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300 hover:rotate-45"
    >
        <circle cx="16" cy="16" r="3" fill="currentColor" stroke="none" />
        <ellipse cx="16" cy="8" rx="3" ry="5" />
        <ellipse cx="16" cy="24" rx="3" ry="5" />
        <ellipse cx="8" cy="16" rx="5" ry="3" />
        <ellipse cx="24" cy="16" rx="5" ry="3" />
        <ellipse cx="10.3" cy="10.3" rx="3" ry="4" transform="rotate(45 10.3 10.3)" />
        <ellipse cx="21.7" cy="10.3" rx="3" ry="4" transform="rotate(-45 21.7 10.3)" />
        <ellipse cx="10.3" cy="21.7" rx="3" ry="4" transform="rotate(-45 10.3 21.7)" />
        <ellipse cx="21.7" cy="21.7" rx="3" ry="4" transform="rotate(45 21.7 21.7)" />
    </svg>
)

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Focus', href: '#focus' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${scrolled
                    ? 'bg-[var(--paper)]/95 backdrop-blur-sm shadow-sm'
                    : 'bg-transparent'
                }`}
        >
            <div className="container flex items-center justify-between h-16 md:h-20">
                {/* Logo */}
                <a
                    href="#"
                    className="flex items-center gap-2 text-[var(--text-primary)]"
                    aria-label="Home"
                >
                    <FlowerLogo />
                    <span
                        className="hidden sm:block font-[var(--font-sans)] text-xs tracking-[0.2em] uppercase"
                        style={{ fontFamily: 'var(--font-sans)' }}
                    >
                        Prisha Gupta
                    </span>
                </a>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="ink-link text-xs tracking-[0.15em] uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                                style={{ fontFamily: 'var(--font-sans)' }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        {mobileOpen ? (
                            <>
                                <line x1="6" y1="6" x2="18" y2="18" />
                                <line x1="6" y1="18" x2="18" y2="6" />
                            </>
                        ) : (
                            <>
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-[var(--paper)] border-b border-[var(--divider)] transition-all duration-300 ${mobileOpen
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
            >
                <ul className="container py-6 space-y-4">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="block text-sm tracking-[0.1em] uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                                style={{ fontFamily: 'var(--font-sans)' }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
