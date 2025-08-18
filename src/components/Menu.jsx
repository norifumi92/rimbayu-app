function Menu({ currentLang }) {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-on-scroll animate-slide-up">
          <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>メニュー</span>
          <span className={currentLang === 'en' ? '' : 'hidden-lang'}>MENU</span>
        </h2>

        {/* Dinner Menu */}
        <div className="menu-category animate-on-scroll animate-fade-scale">
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
  )
}

export default Menu