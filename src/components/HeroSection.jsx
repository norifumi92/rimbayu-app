import { useState, useEffect, useRef, useCallback } from 'react'

function HeroSection({ currentLang }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideInterval = useRef(null)
  const slideshowContainer = useRef(null)
  const startX = useRef(0)
  const endX = useRef(0)
  const isUserInteracting = useRef(false)

  const slides = [
    {
      ja: { title: 'ハラル', desc: 'ムスリムシェフが厳選してハラル食材のみ使用しています。' },
      en: { title: 'Halal', desc: 'Our Muslim chefs carefully pick quality Halal ingredients.' }
    },
    {
      ja: { title: '最先端への追求', desc: 'マレー半島(タイ南部・マレーシア・シンガポール)に定期的に出向き、最新の食文化を常に学び追求しています。' },
      en: { title: 'Continuous Update', desc: 'We regularly visit and learn the latest food culture and techniques in Malay Peninsula including Southern Thailand, Malaysia and Singapore.' }
    },
    {
      ja: { title: '日常に寄り添う価格', desc: '特別な日だけでなく、普段の食事にも楽しめる価格で洗練された料理をご提供します。' },
      en: { title: 'Everyday Affordable', desc: 'Our refined dishes are priced so you can enjoy them not only on special occasions, but in daily life too.' }
    }
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const startSlideshow = useCallback(() => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current)
    }
    if (!isUserInteracting.current) {
      slideInterval.current = setInterval(nextSlide, 5000)
    }
  }, [nextSlide])

  const stopSlideshow = useCallback(() => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current)
      slideInterval.current = null
    }
  }, [])

  useEffect(() => {
    startSlideshow()
    return () => stopSlideshow()
  }, [startSlideshow, stopSlideshow])

  const handleIndicatorClick = (index) => {
    if (index !== currentSlide) {
      setCurrentSlide(index)
      isUserInteracting.current = true
      stopSlideshow()
      
      setTimeout(() => {
        isUserInteracting.current = false
        startSlideshow()
      }, 3000)
    }
  }

  const handleMouseEnter = () => {
    isUserInteracting.current = true
    stopSlideshow()
  }

  const handleMouseLeave = () => {
    isUserInteracting.current = false
    startSlideshow()
  }

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX
    isUserInteracting.current = true
    stopSlideshow()
  }

  const handleTouchEnd = (e) => {
    endX.current = e.changedTouches[0].clientX
    const diff = startX.current - endX.current

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide()
      } else {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      }
      
      setTimeout(() => {
        isUserInteracting.current = false
        startSlideshow()
      }, 3000)
    } else {
      isUserInteracting.current = false
      setTimeout(startSlideshow, 1000)
    }
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
              マレー半島の風を感じられる食空間
            </span>
            <span className={currentLang === 'en' ? '' : 'hidden-lang'}>
              Bringing the Breeze of Malaysia to Your Table.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection