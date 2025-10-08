function Access({ currentLang }) {
  return (
    <section id="access" className="section-standard section-background">
      <div className="section-container">
        <h2 className="section-title animate-on-scroll animate-slide-up">
          <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>FIND US</span>
          <span className={currentLang === 'en' ? '' : 'hidden-lang'}>FIND US</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">

          {/* Fuchinobase */}
          <div className="location-card animate-on-scroll animate-slide-right">
            <h3 className="text-2xl font-semibold mb-4" style={{color: 'var(--forest-primary)'}}>
              <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>フチノベース</span>
              <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Fuchinobase</span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-green-600 mr-3"></i>
                <a 
                  href="https://maps.app.goo.gl/CD7TJymvkRDQC525A" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>地図で確認</span>
                  <span className={currentLang === 'en' ? '' : 'hidden-lang'}>View on Map</span>
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-train text-green-600 mr-3"></i>
                <span>
                  <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>淵野辺駅から徒歩4分</span>
                  <span className={currentLang === 'en' ? '' : 'hidden-lang'}>4 mins walk from Fuchinobe St.</span>
                </span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-chair text-green-600 mr-3"></i>
                <span>
                  <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>店内８テーブルあり</span>
                  <span className={currentLang === 'en' ? '' : 'hidden-lang'}>8 Dine-in Tables Available</span>
                </span>
              </div>
            </div>
          </div>

          {/* Yamazaki Danchi */}
          <div className="location-card animate-on-scroll animate-slide-left">
            <h3 className="text-2xl font-semibold mb-4" style={{color: 'var(--forest-primary)'}}>
              <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>山崎団地 ぐりーんハウス</span>
              <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Yamazaki Danchi Green House</span>
            </h3>
            <div className="space-y-3">
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
                <i className="fas fa-train text-green-600 mr-3"></i>
                <span>
                  <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>町田駅からバス20分/古淵駅からバス10分</span>
                  <span className={currentLang === 'en' ? '' : 'hidden-lang'}>20 mins by bus from Machida St./10 mins by bus from Kobuchi St.</span>
                </span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-car text-green-600 mr-3"></i>
                <span>
                  <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>駐車場あり</span>
                  <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Parking Available</span>
                </span>
              </div>
              <div className="flex items-center">
                <span>
                  <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>駐車場を利用する際は駐車サービス券を発行しますのでお会計時に駐車券を提示してください。</span>
                  <span className={currentLang === 'en' ? '' : 'hidden-lang'}>If you come by car, please present your parking ticket at the cashier to receive the parking discount.</span>
                </span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-chair text-green-600 mr-3"></i>
                <span>
                  <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>店前２テーブル・アウトドアスペースあり</span>
                  <span className={currentLang === 'en' ? '' : 'hidden-lang'}>2 Dine-in Tables and Outdoor Space Available</span>
                </span>
              </div>
            </div>
          </div>

          {/* Bonus Track */}
          <div className="location-card animate-on-scroll animate-slide-right">
            <h3 className="text-2xl font-semibold mb-4" style={{color: 'var(--forest-primary)'}}>
              <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>BONUS TRACK</span>
              <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Bonus Track</span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-green-600 mr-3"></i>
                <a 
                  href="https://maps.app.goo.gl/BKmg1nNJDxF1KNMz6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>地図で確認</span>
                  <span className={currentLang === 'en' ? '' : 'hidden-lang'}>View on Map</span>
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-train text-green-600 mr-3"></i>
                <span>
                  <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>下北沢駅から徒歩5分</span>
                  <span className={currentLang === 'en' ? '' : 'hidden-lang'}>5 mins walk from Shimokitazawa St.</span>
                </span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-chair text-green-600 mr-3"></i>
                <span>
                  <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>店内８席・屋外スペースあり</span>
                  <span className={currentLang === 'en' ? '' : 'hidden-lang'}>8 Dine-in Seats and Outdoor Space Available</span>
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Access