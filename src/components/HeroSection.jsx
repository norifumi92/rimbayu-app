import { useState, useEffect, useRef, useCallback } from 'react'

function HeroSection({ currentLang }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideInterval = useRef(null)
  const slideshowContainer = useRef(null)
  const startX = useRef(0)
  const endX = useRef(0)

  const slides = [
    {
      ja: { title: 'ハラル', desc: 'ムスリムシェフ厳選のハラル食材のみ使用' },
      en: { title: 'Halal', desc: 'Only Halal ingredients by our Muslim chef' }
    },
    {
      ja: { title: '最先端', desc: 'マレーシアで最新の食文化を常に学び追求' },
      en: { title: 'Modern Trends', desc: 'Learning the latest food culture in Malaysia' }
    },
    {
      ja: { title: '洗練されたレシピ', desc: 'フレンチ技術と経験を生かした独自のレシピ' },
      en: { title: 'Refined Recipes', desc: 'Unique recipes built on French techniques' }
    },
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const startSlideshow = useCallback(() => {
    slideInterval.current = setInterval(nextSlide, 5000)
  }, [nextSlide])

  const stopSlideshow = useCallback(() => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current)
    }
  }, [])

  useEffect(() => {
    startSlideshow()
    return () => stopSlideshow()
  }, [startSlideshow, stopSlideshow])

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index)
    stopSlideshow()
    setTimeout(startSlideshow, 2000) // Brief pause after manual interaction
  }

  const handleMouseEnter = () => {
    stopSlideshow()
  }

  const handleMouseLeave = () => {
    startSlideshow()
  }

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX
    stopSlideshow()
  }

  const handleTouchEnd = (e) => {
    endX.current = e.changedTouches[0].clientX
    const diff = startX.current - endX.current

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left - next slide
        nextSlide()
      } else {
        // Swipe right - previous slide
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      }
    }

    setTimeout(startSlideshow, 2000) // Brief pause after manual interaction
  }

  return (
    <section className="hero-section-new">
      <div className="hero-container">
        <div className="hero-image-area">
          <div 
            className="hero-slideshow-container"
            ref={slideshowContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`hero-slide ${index === currentSlide ? 'active' : ''} slide-${index + 1}`}
              >
                <div>
                  <div className="slide-title">
                    {currentLang === 'ja' ? slide.ja.title : slide.en.title}
                  </div>
                  <div className="slide-desc">
                    {(currentLang === 'ja' ? slide.ja.desc : slide.en.desc)
                      .split('\n')
                      .map((line, i) => (
                        <div key={i}>{line}</div>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))}
            
            <div className="hero-slide-indicators">
              {slides.map((_, index) => (
                <div 
                  key={index}
                  className={`hero-indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => handleIndicatorClick(index)}
                />
              ))}
            </div>
          </div>

        </div>    
        
        <div className="hero-text-area">
          <h1>
            <span className="hero-brand-name">Rimbayu</span> 
            <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>by Semenanjung & Co.</span>
            <span className={currentLang === 'en' ? '' : 'hidden-lang'}>by Semenanjung & Co.</span>
          </h1>
          <p>
            <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>
              緑豊かで先進的なマレー半島の雰囲気を<br/>
              洗練されたモダン料理を通じてどなたにも共有できる空間<br/>
              の創出を目指して。
            </span>
            <span className={currentLang === 'en' ? '' : 'hidden-lang'}>
              Enriching the communities<br/>
              through the experience we offer with refined dishes <br/>
              from Malay Peninsula. 
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection