'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Leadership from '@/components/Leadership';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import CustomCursor from '@/components/CustomCursor';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
    useEffect(() => {
        // Smooth section reveals
        const sections = document.querySelectorAll('section');

        sections.forEach((section) => {
            gsap.fromTo(section,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.6,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 90%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <main className="main-wrapper">
            {/* Custom Cursor */}
            <CustomCursor />

            {/* Scroll progress bar */}
            <ScrollProgress />

            {/* Navigation */}
            <Navbar />

            {/* Hero - Introduction */}
            <Hero />

            {/* About Me */}
            <About />

            {/* Technical Skills */}
            <Skills />

            {/* Featured Projects */}
            <Projects />

            {/* Key Achievements */}
            <Achievements />

            {/* Leadership & Activities */}
            <Leadership />

            {/* Contact */}
            <Contact />

            {/* Footer */}
            <Footer />
        </main>
    );
}
