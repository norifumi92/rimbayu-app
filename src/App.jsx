import { useState, useEffect } from 'react'
import scheduleJson from './schedule.json'
import './App.css'
import News from './components/News'
// import Concept from './components/Concept'
// import Menu from './components/Menu'
import Schedule from './components/Schedule'
import Access from './components/Access'
import Contact from './components/Contact'
import HeroSection from './components/HeroSection'

function App() {
  const [currentLang, setCurrentLang] = useState('ja')
  const [scheduleData, setScheduleData] = useState([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'ja' ? 'en' : 'ja')
    document.documentElement.lang = currentLang === 'ja' ? 'en' : 'ja'
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    // Load from JSON
    setScheduleData(scheduleJson)

    // Smooth scrolling for navigation links
    const handleClick = (e) => {
      const href = e.target.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    document.addEventListener('click', handleClick)

    // Add scroll effect to navbar
    const handleScroll = () => {
      const navbar = document.querySelector('.nav-bar')
      if (navbar) {
        // Keep navbar transparent regardless of scroll
        navbar.style.background = 'transparent'
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Scroll animations with Intersection Observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible')
        }
      })
    }, observerOptions)

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      document.removeEventListener('click', handleClick)
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])


  return (
    <>
      {/* Language Toggle */}
      <button className="lang-toggle" onClick={toggleLanguage}>
        <span>{currentLang === 'ja' ? 'English' : '日本語'}</span>
      </button>

      {/* Navigation */}
      <nav className="nav-bar">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold" style={{color: '#333'}}>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {/* <a href="#news" className="text-white hover:text-green-300 transition-colors">
                <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>ニュース</span>
                <span className={currentLang === 'en' ? '' : 'hidden-lang'}>NEWS</span>
              </a>
              <a href="#concept" className="text-white hover:text-green-300 transition-colors">
                <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>コンセプト</span>
                <span className={currentLang === 'en' ? '' : 'hidden-lang'}>CONCEPT</span>
              </a>
              <a href="#menu" className="text-white hover:text-green-300 transition-colors">
                <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>メニュー</span>
                <span className={currentLang === 'en' ? '' : 'hidden-lang'}>MENU</span>
              </a> */}
              <a href="#schedule" className="transition-colors">
                <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>スケジュール</span>
                <span className={currentLang === 'en' ? '' : 'hidden-lang'}>SCHEDULE</span>
              </a>
              <a href="#access" className="transition-colors">
                <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>アクセス</span>
                <span className={currentLang === 'en' ? '' : 'hidden-lang'}>ACCESS</span>
              </a>
              <a href="#contact" className="transition-colors">
                <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>お問い合わせ</span>
                <span className={currentLang === 'en' ? '' : 'hidden-lang'}>CONTACT</span>
              </a>
            </div>

            {/* Mobile Hamburger Menu */}
            <button 
              className="md:hidden focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              style={{color: '#333'}}
            >
              <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          {/* <a href="#news" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>ニュース</span>
            <span className={currentLang === 'en' ? '' : 'hidden-lang'}>NEWS</span>
          </a>
          <a href="#concept" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>コンセプト</span>
            <span className={currentLang === 'en' ? '' : 'hidden-lang'}>CONCEPT</span>
          </a>
          <a href="#menu" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>メニュー</span>
            <span className={currentLang === 'en' ? '' : 'hidden-lang'}>MENU</span>
          </a> */}
          <a href="#schedule" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>SCHEDULE</span>
            <span className={currentLang === 'en' ? '' : 'hidden-lang'}>SCHEDULE</span>
          </a>
          <a href="#access" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>ACCESS</span>
            <span className={currentLang === 'en' ? '' : 'hidden-lang'}>ACCESS</span>
          </a>
          <a href="#contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>お問い合わせ</span>
            <span className={currentLang === 'en' ? '' : 'hidden-lang'}>CONTACT</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection currentLang={currentLang} />

      {/* <Concept currentLang={currentLang} />

      <Menu currentLang={currentLang} /> */}

      <Schedule currentLang={currentLang} scheduleData={scheduleData} />

      <Access currentLang={currentLang} />

      {/* News Section */}
      <News currentLang={currentLang} />

      <Contact currentLang={currentLang} />

      {/* Footer */}
      <footer className="forest-gradient text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>© 2025 Rimbayu by Semenanjung & Co. All Rights Reserved.</span>
            <span className={currentLang === 'en' ? '' : 'hidden-lang'}>© 2025 Rimbayu by Semenanjung & Co. All Rights Reserved.</span>
          </p>
        </div>
      </footer>
    </>
  )
}

export default App