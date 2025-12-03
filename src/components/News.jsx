function News({ currentLang, newsData = [] }) {
  return (
    <section id="news" className="section-standard section-background">
      <div className="section-container">
        <h2 className="section-title">
          <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>NEWS</span>
          <span className={currentLang === 'en' ? '' : 'hidden-lang'}>NEWS</span>
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
          {newsData.map((newsItem, index) => (
            <div key={newsItem.id} className="news-card">
              <div style={{ padding: '1.5rem' }}>
                <h3>
                  <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>{newsItem.title_ja}</span>
                  <span className={currentLang === 'en' ? '' : 'hidden-lang'}>{newsItem.title_en}</span>
                </h3>
                <p>
                  <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>{newsItem.content_ja}</span>
                  <span className={currentLang === 'en' ? '' : 'hidden-lang'}>{newsItem.content_en}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default News