function Access({ currentLang }) {
  return (
    <section id="access" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-on-scroll animate-slide-up">
          <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>ACCESS</span>
          <span className={currentLang === 'en' ? '' : 'hidden-lang'}>ACCESS</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Yamazaki Danchi */}
          <div className="location-card animate-on-scroll animate-slide-left">
            <h3 className="text-2xl font-semibold mb-4" style={{color: 'var(--forest-primary)'}}>
              <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>山崎団地 ぐりーんハウス</span>
              <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Yamazaki Danchi Green House</span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-green-600 mr-3"></i>
                <a 
                  href="https://maps.app.goo.gl/4pCy85f2XzxdNHQd9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>地図で確認</span>
                  <span className={currentLang === 'en' ? '' : 'hidden-lang'}>View on Map</span>
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-car text-green-600 mr-3"></i>
                <span>
                  <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>駐車場あり</span>
                  <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Car Parking Available</span>
                </span>
              </div>
              <div className="flex items-center">
                <span>
                  <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>駐車場を利用する際は駐車サービス券を発行しますのでお会計時に駐車券を提示してください。</span>
                  <span className={currentLang === 'en' ? '' : 'hidden-lang'}>If you come by car, please present your parking ticket at the cashier to receive the parking discount.</span>
                </span>
              </div>
            </div>
          </div>

          {/* Fuchinobase */}
          <div className="location-card animate-on-scroll animate-slide-right">
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
        <div className="text-center mt-12 animate-on-scroll animate-slide-up">
          <h3 className="text-2xl font-semibold mb-6" style={{color: 'var(--forest-primary)'}}>
            <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>お問い合わせ</span>
            <span className={currentLang === 'en' ? '' : 'hidden-lang'}>CONTACT</span>
          </h3>
          <div className="space-y-4">
            <p className="text-lg">
              <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>Semenanjung & Co.</span>
              <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Semenanjung & Co.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Access