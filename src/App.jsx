import { useState, useEffect } from 'react'
import scheduleJson from './schedule.json'
import './App.css'

function App() {
  const [currentLang, setCurrentLang] = useState('ja')
  const [scheduleData, setScheduleData] = useState([])

  const toggleLanguage = () => {
    setCurrentLang(currentLang === 'ja' ? 'en' : 'ja')
    document.documentElement.lang = currentLang === 'ja' ? 'en' : 'ja'
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
        if (window.scrollY > 100) {
          navbar.style.background = 'rgba(45, 80, 22, 0.98)'
        } else {
          navbar.style.background = 'rgba(45, 80, 22, 0.95)'
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('click', handleClick)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const renderSchedule = () => {
    if (scheduleData.length === 0) {
      return (
        <div className="schedule-loading">
          <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>今後の出店予定はありません</span>
          <span className={currentLang === 'en' ? '' : 'hidden-lang'}>No upcoming events scheduled</span>
        </div>
      )
    }

    return scheduleData.map((event, index) => {
      const dayText = currentLang === 'ja' ? event.day_ja : event.day_en
      const locationText = currentLang === 'ja' ? event.location_ja : event.location_en
      const colorTheme = event.color_theme === 'green' ? 'green' : 'pink'

      return (
        <div key={index} className={`schedule-item ${colorTheme}`}>
          <div className={`date-circle ${colorTheme}`}>
            <div className="day-text">{dayText}</div>
            <div className="day-number">{event.day_num}</div>
          </div>
          <div className="schedule-details">
            <div className="location-name">{locationText}</div>
            <div className="schedule-time">{event.time_start} - {event.time_end}</div>
          </div>
        </div>
      )
    })
  }

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
            <div className="text-white text-2xl font-bold">
              <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>Rimbayu</span>
              <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Rimbayu</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#news" className="text-white hover:text-green-300 transition-colors">
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
              </a>
              <a href="#schedule" className="text-white hover:text-green-300 transition-colors">
                <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>スケジュール</span>
                <span className={currentLang === 'en' ? '' : 'hidden-lang'}>SCHEDULE</span>
              </a>
              <a href="#access" className="text-white hover:text-green-300 transition-colors">
                <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>アクセス</span>
                <span className={currentLang === 'en' ? '' : 'hidden-lang'}>ACCESS</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6">
            <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>Rimbayu</span>
            <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Rimbayu</span>
          </h1>
          <p className="text-2xl mb-8">
            <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>by Semenanjung & Co.</span>
            <span className={currentLang === 'en' ? '' : 'hidden-lang'}>by Semenanjung & Co.</span>
          </p>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">
            <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>ニュース</span>
            <span className={currentLang === 'en' ? '' : 'hidden-lang'}>NEWS</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="news-card">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-lg font-semibold">
                <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>新メニュー登場</span>
                <span className={currentLang === 'en' ? '' : 'hidden-lang'}>New Menu Items</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>春の新メニューが登場しました</span>
                  <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Spring Menu Launch</span>
                </h3>
                <p className="text-gray-600">
                  <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>季節の食材を使った新しいマレーシア料理をお楽しみください</span>
                  <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Enjoy new Malaysian dishes featuring seasonal ingredients</span>
                </p>
              </div>
            </div>
            
            <div className="news-card">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-lg font-semibold">
                <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>出店情報</span>
                <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Pop-up Events</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>フチノベースでの週末出店</span>
                  <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Weekend Pop-up at Fuchinobase</span>
                </h3>
                <p className="text-gray-600">
                  <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>毎月第1土曜日にフチノベースで出店しています</span>
                  <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Visit us every first Saturday at Fuchinobase</span>
                </p>
              </div>
            </div>
            
            <div className="news-card">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white text-lg font-semibold">
                <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>コミュニティ</span>
                <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Community</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>地域交流イベント開催</span>
                  <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Community Exchange Event</span>
                </h3>
                <p className="text-gray-600">
                  <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>多文化交流を深めるイベントを定期開催</span>
                  <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Regular events fostering multicultural exchange</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-title">
            <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>コンセプト</span>
            <span className={currentLang === 'en' ? '' : 'hidden-lang'}>CONCEPT</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="concept-image">
              <i className="fas fa-leaf text-6xl"></i>
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-gray-800">
                <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>マレー半島をみんなで一緒に体験しよう</span>
                <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Experience the Malay Peninsula Together</span>
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>
                  「Rimbayu」とは「森の風を感じられる空間」というマレーシアの造語です。
                  まるで緑豊かなマレー半島でくつろいでいるような空間を創出し、
                  異なる背景を持つ人々が交流できる架け橋となることを目指しています。
                </span>
                <span className={currentLang === 'en' ? '' : 'hidden-lang'}>
                  "Rimbayu" is a Malaysian term meaning "a space where you can feel the forest breeze."
                  We aim to create a relaxing atmosphere reminiscent of the lush Malay Peninsula,
                  serving as a bridge connecting people from diverse backgrounds.
                </span>
              </p>
              <p className="text-lg text-gray-600">
                <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>
                  マレー半島の多様な文化（西洋、アラブ、インド、中国、オセアニア、英語圏）が
                  融合した豊かな食文化を、西東京の皆様にお届けします。
                </span>
                <span className={currentLang === 'en' ? '' : 'hidden-lang'}>
                  We bring the rich culinary culture of the Malay Peninsula, where diverse cultures
                  (Western, Arab, Indian, Chinese, Oceanic, English-speaking) have blended together,
                  to the Western Tokyo community.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">
            <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>メニュー</span>
            <span className={currentLang === 'en' ? '' : 'hidden-lang'}>MENU</span>
          </h2>

          {/* Dinner Menu */}
          <div className="menu-category">
            <h3 className="text-2xl font-semibold mb-4 text-center" style={{color: 'var(--forest-primary)'}}>
              <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>ディナー | DINNER</span>
              <span className={currentLang === 'en' ? '' : 'hidden-lang'}>DINNER</span>
            </h3>
            <div className="menu-gallery">
              <div className="menu-item">
                <div className="text-center">
                  <div className="text-lg font-semibold">レンダン</div>
                  <div className="text-sm">¥1,300</div>
                </div>
              </div>
              <div className="menu-item">
                <div className="text-center">
                  <div className="text-lg font-semibold">サテー</div>
                  <div className="text-sm">¥1,100</div>
                </div>
              </div>
              <div className="menu-item">
                <div className="text-center">
                  <div className="text-lg font-semibold">アヤムゴレン</div>
                  <div className="text-sm">¥1,200</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">
            <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>スケジュール</span>
            <span className={currentLang === 'en' ? '' : 'hidden-lang'}>SCHEDULE</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="schedule-container">
              {renderSchedule()}
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">
            <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>アクセス</span>
            <span className={currentLang === 'en' ? '' : 'hidden-lang'}>ACCESS</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Yamazaki Danchi */}
            <div className="location-card">
              <h3 className="text-2xl font-semibold mb-4" style={{color: 'var(--forest-primary)'}}>
                <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>山崎団地 ぐりーんハウス</span>
                <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Yamazaki Danchi Green House</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-calendar-alt text-green-600 mr-3"></i>
                  <span>
                    <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>毎週木曜日</span>
                    <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Every Thursday</span>
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock text-green-600 mr-3"></i>
                  <span>11:00-15:00</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-utensils text-green-600 mr-3"></i>
                  <span>
                    <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>テイクアウト中心</span>
                    <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Takeout Focused</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Fuchinobase */}
            <div className="location-card">
              <h3 className="text-2xl font-semibold mb-4" style={{color: 'var(--forest-primary)'}}>
                <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>フチノベース</span>
                <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Fuchinobase</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <i className="fas fa-calendar-alt text-green-600 mr-3"></i>
                  <span>
                    <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>月1回 第1土曜日</span>
                    <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Monthly, First Saturday</span>
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-clock text-green-600 mr-3"></i>
                  <span>11:00-17:00</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-chair text-green-600 mr-3"></i>
                  <span>
                    <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>店内飲食中心</span>
                    <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Dine-in Focused</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-semibold mb-6" style={{color: 'var(--forest-primary)'}}>
              <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>お問い合わせ</span>
              <span className={currentLang === 'en' ? '' : 'hidden-lang'}>CONTACT</span>
            </h3>
            <div className="space-y-4">
              <p className="text-lg">
                <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>Semenanjung & Co.</span>
                <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Semenanjung & Co.</span>
              </p>
              <p className="text-gray-600">
                <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>マレー半島をみんなで一緒に体験しよう</span>
                <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Experience the Malay Peninsula Together</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="forest-gradient text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>© 2025 Rimbayu by Semenanjung & Co. All Rights Reserved.</span>
            <span className={currentLang === 'en' ? '' : 'hidden-lang'}>© 2025 Rimbayu by Semenanjung & Co. All Rights Reserved.</span>
          </p>
          <p className="text-green-200">
            <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>西東京から始まる、多文化交流の新しい形</span>
            <span className={currentLang === 'en' ? '' : 'hidden-lang'}>A new form of multicultural exchange starting from Western Tokyo</span>
          </p>
        </div>
      </footer>
    </>
  )
}

export default App