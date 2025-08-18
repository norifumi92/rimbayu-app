function Concept({ currentLang }) {
  return (
    <section id="concept" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-on-scroll animate-slide-up">
          <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>コンセプト</span>
          <span className={currentLang === 'en' ? '' : 'hidden-lang'}>CONCEPT</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="concept-image animate-on-scroll animate-slide-left">
            <i className="fas fa-leaf text-6xl"></i>
          </div>
          <div className="animate-on-scroll animate-slide-right">
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
  )
}

export default Concept