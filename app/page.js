'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FocusAreas from '@/components/FocusAreas';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';

export default function Home() {
    return (
        <main className="main-wrapper">
            {/* Navigation */}
            <Navbar />

            {/* Hero - Magazine Cover Style */}
            <Hero />

            {/* About - Journal Page */}
            <About />

            {/* Focus Areas - Sticky Note Pills */}
            <FocusAreas />

            {/* Education - School Cards */}
            <Education />

            {/* Skills - Sticky Notes */}
            <Skills />

            {/* Projects - Box Unboxing */}
            <Projects />

            {/* Experience - Bulletin Board */}
            <Experience />

            {/* Achievements - Polaroid Stamps */}
            <Achievements />

            {/* Certifications - Ticket Stubs */}
            <Certifications />

            {/* Contact - Stationery Card */}
            <Contact />
        </main>
    );
}
