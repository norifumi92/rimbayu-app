function News({ currentLang }) {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-on-scroll animate-slide-up">
          <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>NEWS</span>
          <span className={currentLang === 'en' ? '' : 'hidden-lang'}>NEWS</span>
        </h2>
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          <div className="news-card news-card-vertical animate-on-scroll animate-slide-up animate-delay-1">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>下北沢で初出店！</span>
                <span className={currentLang === 'en' ? '' : 'hidden-lang'}>First Pop-Up in Shimokitazawa</span>
              </h3>
              <p className="text-gray-600">
                <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>2025年10月6日、下北沢Bonus Trackにて初出店しました。
                  お越しいただいた方々、大変ありがとうございました。
                  今後Bonus Trackでの定期出店をおむすび不動産様のご支援いただき計画中です。その際はぜひお立ち寄りください。
                </span>
                <span className={currentLang === 'en' ? '' : 'hidden-lang'}>
                  On October 6, 2025, we made our first appearance at Bonus Track Shimokitazawa.
                  A huge thank-you to everyone who stopped by!
                  We're currently planning regular pop-ups at Bonus Track with the kind support of Omusubi Real Estate. We hope you'll visit us again when we're back!
                </span>
              </p>
            </div>
          </div>
          {/* <div className="news-card news-card-vertical animate-on-scroll animate-slide-up animate-delay-2">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>下北沢で隔週</span>
                <span className={currentLang === 'en' ? '' : 'hidden-lang'}>First Pop-Up in Shimokitazawa</span>
              </h3>
              <p className="text-gray-600">
                <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>2025年10月6日、下北沢Bonus Trackにて初出店しました。
                  お越しいただいた方々、大変ありがとうございました。
                  今後Bonus Trackでの定期出店をおむすび不動産様のご支援いただき計画中です。その際はぜひお立ち寄りください。
                </span>
                <span className={currentLang === 'en' ? '' : 'hidden-lang'}>
                  On October 6, 2025, we made our first appearance at Bonus Track Shimokitazawa.
                  A huge thank-you to everyone who stopped by!
                  We're currently planning regular pop-ups at Bonus Track with the kind support of Omusubi Real Estate. We hope you'll visit us again when we're back!
                </span>
              </p>
            </div>
          </div> */}
        </div>

      </div>
    </section>
  )
}

export default News