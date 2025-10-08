function Contact({ currentLang }) {
  return (
    <section id="contact" className="contact-section">
      <div className="content-wrapper">
        <h2 className="section-title animate-on-scroll animate-slide-up">
          <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>CONTACT</span>
          <span className={currentLang === 'en' ? '' : 'hidden-lang'}>CONTACT</span>
        </h2>
        
        <div className="contact-content animate-on-scroll animate-slide-up animate-delay-1">
          <div className="contact-social">
            <a 
              href="https://www.instagram.com/semenanjungandco/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="instagram-link"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          
          <p className="contact-description">
          <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>
            ご予約やご要望につきましては、Line/Instagramにて承っております。<br/> お気軽にお問い合わせください。
          </span>
          <span className={currentLang === 'en' ? '' : 'hidden-lang'}>
            For reservations or special requests, we kindly accept inquiries through Line/Instagram. <br/> Please feel free to contact us.
          </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact