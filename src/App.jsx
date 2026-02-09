import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './index.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Focus from './components/Focus'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import ScrollProgress from './components/ScrollProgress'
import RegistrationMarks from './components/RegistrationMarks'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const mainRef = useRef(null)

  useEffect(() => {
    // Initialize registration marks parallax
    const marks = document.querySelectorAll('.reg-mark')

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY
      marks.forEach((mark, i) => {
        const speed = (i + 1) * 0.02
        mark.style.transform = `translateY(${scrollY * speed}px)`
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={mainRef} className="relative">
      <ScrollProgress />
      <RegistrationMarks />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Focus />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <footer className="py-8 text-center border-t border-[var(--divider)]">
        <p className="small-text">
          © 2026 Prisha Gupta — Designed with editorial precision
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-4 small-text italic cursor-pointer hover:underline"
        >
          ↑ Back to top
        </button>
      </footer>
    </div>
  )
}

export default App
