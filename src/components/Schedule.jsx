function Schedule({ currentLang, scheduleData }) {
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
      const colorTheme = event.color_theme || 'green'

      return (
        <div key={index} className={`schedule-card ${colorTheme}`}>
          <div className="date-section">
            <div className="day-label">{dayText}</div>
            <div className="day-number">{event.day_num}</div>
          </div>
          <div className="event-details">
            <div className="location-name">{locationText}</div>
            <div className="event-time">{event.time_start} - {event.time_end}</div>
          </div>
        </div>
      )
    })
  }


  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="schedule-header">
          <h2 className="section-title animate-on-scroll animate-slide-up">
            <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>スケジュール</span>
            <span className={currentLang === 'en' ? '' : 'hidden-lang'}>SCHEDULE</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="schedule-container animate-on-scroll animate-slide-up">
            {renderSchedule()}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule