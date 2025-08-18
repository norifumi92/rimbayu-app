function News({ currentLang }) {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-on-scroll animate-slide-up">
          <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>ニュース</span>
          <span className={currentLang === 'en' ? '' : 'hidden-lang'}>NEWS</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="news-card animate-on-scroll animate-slide-up animate-delay-1">
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
          
          <div className="news-card animate-on-scroll animate-slide-up animate-delay-2">
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
          
          <div className="news-card animate-on-scroll animate-slide-up animate-delay-3">
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
  )
}

export default News