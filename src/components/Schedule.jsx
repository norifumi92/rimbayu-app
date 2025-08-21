import React from 'react'

function Schedule({ currentLang, scheduleData }) {
  const [currentMonthIndex, setCurrentMonthIndex] = React.useState(0)
  
  const getAvailableMonths = () => {
    if (scheduleData.length === 0) return [new Date()]
    
    const monthsSet = new Set()
    scheduleData.forEach(event => {
      const date = new Date(event.date)
      const monthKey = `${date.getFullYear()}-${date.getMonth()}`
      monthsSet.add(monthKey)
    })
    
    return Array.from(monthsSet)
      .sort()
      .map(monthKey => {
        const [year, month] = monthKey.split('-')
        return new Date(parseInt(year), parseInt(month), 1)
      })
  }
  
  const availableMonths = getAvailableMonths()
  const currentMonth = availableMonths[currentMonthIndex] || new Date()
  
  const getCurrentMonth = () => currentMonth

  const generateCalendar = () => {
    const currentMonth = getCurrentMonth()
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startDate = firstDay.getDay()
    
    const days = []
    
    // Add empty cells for days before the month starts
    for (let i = 0; i < startDate; i++) {
      days.push(null)
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
      const eventForDay = scheduleData.find(event => event.date === dateStr)
      days.push({ day, event: eventForDay })
    }
    
    return { days, monthName: firstDay.toLocaleDateString(currentLang === 'ja' ? 'ja-JP' : 'en-US', { month: 'long', year: 'numeric' }) }
  }

  const getLocationTimeClass = (event) => {
    if (!event) return ''
    const locationJa = event.location_ja.toLowerCase()
    const locationEn = event.location_en.toLowerCase()
    
    if (locationJa.includes('フチノベース') || locationEn.includes('fuchinobase')) {
      return 'time-fuchinobase'
    }
    if (locationJa.includes('山崎団地') || locationEn.includes('yamazaki')) {
      return 'time-yamazaki'
    }
    return ''
  }

  const renderCalendarCell = (dayData) => {
    if (!dayData) {
      return <td key="empty" className="calendar-empty"></td>
    }

    const { day, event } = dayData
    const hasEvent = !!event

    return (
      <td key={day} className={`calendar-day ${hasEvent ? 'has-event' : ''} ${event?.color_theme || ''}`}>
        <div className="day-number">{day}</div>
        {hasEvent && (
          <div className="event-info">
            {/* <div className="location">
              <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>{event.location_ja}</span>
              <span className={currentLang === 'en' ? '' : 'hidden-lang'}>{event.location_en}</span>
            </div> */}
            <div className={`time ${getLocationTimeClass(event)}`}>
              <span className="time-start">{event.time_start}</span>
              <span className="time-separator">-</span>
              <span className="time-end">{event.time_end}</span>
            </div>
          </div>
        )}
      </td>
    )
  }

  const renderCalendar = () => {
    if (scheduleData.length === 0) {
      return (
        <div className="no-events">
          <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>今後の出店予定はありません</span>
          <span className={currentLang === 'en' ? '' : 'hidden-lang'}>No upcoming events scheduled</span>
        </div>
      )
    }

    const { days, monthName } = generateCalendar()
    const dayHeaders = currentLang === 'ja' 
      ? ['日', '月', '火', '水', '木', '金', '土']
      : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const weeks = []
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7))
    }

    return (
      <div className="calendar-container">
        <div className="calendar-header-section">
          <button
            onClick={() => setCurrentMonthIndex(Math.max(0, currentMonthIndex - 1))}
            disabled={currentMonthIndex === 0}
            className="month-nav-btn prev"
            aria-label={currentLang === 'ja' ? '前の月' : 'Previous Month'}
          >
            ←
          </button>
          <h3 className="calendar-month">{monthName}</h3>
          <button
            onClick={() => setCurrentMonthIndex(Math.min(availableMonths.length - 1, currentMonthIndex + 1))}
            disabled={currentMonthIndex >= availableMonths.length - 1}
            className="month-nav-btn next"
            aria-label={currentLang === 'ja' ? '次の月' : 'Next Month'}
          >
            →
          </button>
        </div>
        <table className="calendar-table">
          <thead>
            <tr>
              {dayHeaders.map((header, index) => (
                <th key={index} className="calendar-header">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weeks.map((week, weekIndex) => (
              <tr key={weekIndex}>
                {week.map((dayData) => renderCalendarCell(dayData))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <section id="schedule" className="py-20 schedule-section">
      <div className="container mx-auto px-4">
        <h2 className="section-title animate-on-scroll animate-slide-up">
          <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>SCHEDULE</span>
          <span className={currentLang === 'en' ? '' : 'hidden-lang'}>SCHEDULE</span>
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="animate-on-scroll animate-slide-up">
            {renderCalendar()}
          </div>
          
          <div className="schedule-legend animate-on-scroll animate-slide-up">
            <div className="legend-items">
              <div className="legend-item">
                <span className="legend-color time-fuchinobase"></span>
                <span className="legend-text">
                  <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>フチノベース</span>
                  <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Fuchinobase</span>
                </span>
              </div>
              <div className="legend-item">
                <span className="legend-color time-yamazaki"></span>
                <span className="legend-text">
                  <span className={currentLang === 'ja' ? '' : 'hidden-lang'}>山崎団地ぐりーんハウス</span>
                  <span className={currentLang === 'en' ? '' : 'hidden-lang'}>Yamazaki Danchi Green House</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule