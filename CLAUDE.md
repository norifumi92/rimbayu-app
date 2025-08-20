# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a bilingual (Japanese/English) React website for "Rimbayu," a Malaysian food business in Western Tokyo. The app is built with Vite and deployed on Vercel, showcasing a single-page application with smooth scrolling navigation, CSS animations, and scroll-triggered effects.

## Development Commands & Workflow

```bash
# Development
npm run dev          # Start development server (Vite)
npm run build        # Build for production
npm run lint         # ESLint code checking
npm run preview      # Preview production build locally

# Installation (for new setup)
npm install          # Install all dependencies
```

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

## High-Level Architecture

### Application Structure
```
src/
├── App.jsx              # Main application orchestrator with navigation and state
├── App.css              # Global styles with forest theme and custom font system
├── index.css            # Base CSS reset and global styles
├── main.jsx             # React 19 application entry point
├── schedule.json        # Dynamic event data with bilingual support
└── components/          # Modular section components
    ├── HeroSection.jsx  # Main hero with image slideshow (currently active)
    ├── Schedule.jsx     # Calendar with dynamic event scheduling
    ├── Access.jsx       # Location and contact information
    ├── News.jsx         # News announcements (commented out in App.jsx)
    ├── Concept.jsx      # Business philosophy (commented out in App.jsx)
    └── Menu.jsx         # Food menu display (commented out in App.jsx)
```

### Component Architecture Patterns

**1. Centralized State Management (App.jsx)**
- `currentLang` state controls language switching ('ja' | 'en')
- `scheduleData` state holds JSON-loaded event information
- `isMobileMenuOpen` state controls mobile hamburger menu visibility
- Props drilling pattern: language and data passed to child components
- Global effects managed at App level (scroll handlers, animation observers, smooth scrolling)

**2. Functional Component Pattern**
All components are functional components using modern React patterns:
```jsx
function ComponentName({ currentLang, additionalProps }) {
  // Component logic
  return (
    <section id="section-id" className="section-styles">
      {/* Bilingual content with conditional rendering */}
    </section>
  )
}
export default ComponentName
```

**3. Section-Based Architecture**
- Each main navigation item corresponds to a separate component
- Components are self-contained with their own styling concerns
- All sections follow consistent structure: id attribute for navigation, bilingual content
- **Currently Active**: HeroSection, Schedule, Access (News, Concept, Menu commented out in App.jsx)

**4. HeroSection Component Features**
- Image slideshow with 4 slides, auto-advancing every 6 seconds
- Touch/swipe support for mobile interaction
- Click indicators for manual navigation
- Pause on hover/touch interaction
- Bilingual slide content with smooth transitions

## Key Patterns & Conventions

### Bilingual Implementation Strategy
**Simultaneous Rendering Pattern**: Both languages rendered in DOM simultaneously
```jsx
<span className={currentLang === 'ja' ? '' : 'hidden-lang'}>日本語テキスト</span>
<span className={currentLang === 'en' ? '' : 'hidden-lang'}>English Text</span>
```
- CSS class `.hidden-lang { display: none }` controls visibility
- Language toggle updates `currentLang` state and `document.documentElement.lang`
- No conditional rendering to avoid DOM reflows

### Animation System
**Intersection Observer Pattern**: Scroll-triggered animations
```jsx
// In App.jsx useEffect
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-visible')
    }
  })
}, observerOptions)
```

**Animation Classes Convention**:
- `.animate-on-scroll` - Base class for elements that animate on scroll
- `.animate-slide-up/left/right` - Direction-specific transforms
- `.animate-fade-scale` - Scale and fade effects
- `.animate-delay-1/2/3/4` - Staggered animation timing
- `.animate-visible` - Target state applied by Intersection Observer

### Smooth Scrolling Navigation
**Event Delegation Pattern**: Single click handler for all navigation
```jsx
const handleClick = (e) => {
  const href = e.target.getAttribute('href')
  if (href && href.startsWith('#')) {
    e.preventDefault()
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
  }
}
```

### Dynamic Navbar Effects
**Scroll-based Styling**: Background opacity changes based on scroll position
```jsx
const handleScroll = () => {
  const navbar = document.querySelector('.nav-bar')
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(45, 80, 22, 0.98)' // RGBA color with opacity
  } else {
    navbar.style.background = 'rgba(45, 80, 22, 0.95)' // RGBA color with opacity
  }
}
```

## Data Flow & State Management

### State Architecture
**Single Source of Truth**: All shared state lives in App.jsx
- Language preference (`currentLang`) flows down to all components
- Schedule data loaded from JSON and passed to Schedule component
- No external state management library - pure React state

### Data Structure (schedule.json)
```json
{
  "date": "2025-01-18",           // ISO date string
  "day_ja": "土",                 // Japanese day abbreviation
  "day_en": "Sat",                // English day abbreviation  
  "day_num": "18",                // Day number for display
  "location_ja": "...",           // Japanese location name
  "location_en": "...",           // English location name
  "time_start": "11:00",          // Start time (24hr format)
  "time_end": "15:00",            // End time (24hr format)
  "color_theme": "green"          // Theme color ('green' | 'pink')
}
```

### Data Loading Pattern
```jsx
useEffect(() => {
  setScheduleData(scheduleJson)  // Direct JSON import
}, [])
```

### Schedule Component Architecture
**Dynamic Calendar Generation**: Builds monthly calendar views programmatically
- Automatically detects available months from schedule data
- Month navigation with previous/next controls
- Event overlay system with color theming (green/pink)
- Flyer generation using html2canvas for printable schedules
- Responsive calendar that adapts to mobile screen sizes

## Styling & Theming Approach

### CSS Custom Properties System
**Forest Theme Variables**:
```css
:root {
  --forest-primary: #2d5016;     /* Dark forest green */
  --forest-secondary: #4a7c59;   /* Medium forest green */
  --forest-light: #8fbc8f;       /* Light forest green */
  --forest-accent: #556b2f;      /* Olive green accent */
  --cream: #f5f5dc;              /* Cream background */
  --warm-white: #fefefe;         /* Warm white */
}
```

### Hybrid CSS Approach
**Custom CSS + Utility Classes**: Combines semantic CSS with utility patterns
- Global styles in `App.css` and `index.css`
- Component-specific classes (.news-card, .schedule-item, etc.)
- Utility classes for layout (Tailwind-inspired but custom)
- CSS Grid and Flex-box for responsive layouts

### Typography & Font System
**Custom Font Stack**: Mimics elegant restaurant/brand styling
- **Headers/Titles**: `Oswald` - Bold condensed sans-serif for brand names, section titles, navigation
- **Body Text**: `Playfair Display` - Elegant serif for readability and sophistication
- **Fallbacks**: System fonts (Arial Black, Times New Roman) for reliability
- **Font Features**: Uppercase transforms, letter-spacing, proper weights for hierarchy

### Responsive Design Strategy
**Mobile-First Approach**:
- Base styles target mobile
- `@media (min-width: 768px)` for desktop enhancements
- Grid layouts collapse to single column on mobile
- Schedule components stack vertically on small screens
- Hamburger menu system for mobile navigation

### Animation Performance
**Hardware Acceleration**: Uses transform and opacity for smooth animations
- `transform: translateX/Y()` for movement
- `opacity` changes for fade effects
- `transition` with easing functions
- Respects `prefers-reduced-motion` for accessibility

## Build & Deployment Process

### Build Configuration
**Vite Setup** (vite.config.js):
```javascript
export default defineConfig({
  plugins: [react()],  // React plugin for JSX support
})
```

**ESLint Configuration** (eslint.config.js):
- Modern ESM configuration format
- React Hooks plugin for hook rule enforcement
- React Refresh plugin for Vite HMR support
- Custom rule: unused vars allowed for UPPER_CASE constants

### Deployment
**Vercel Integration**:
- Automatic detection of Vite configuration
- Build command: `vite build`
- Output directory: `dist/`
- No additional configuration required

### Dependencies Strategy
**Minimal Dependency Approach**:
- **Core**: React 19.1.1, React DOM 19.1.1
- **Build**: Vite 7.1.2, @vitejs/plugin-react 5.0.0
- **Quality**: ESLint 9.33.0 with React-specific plugins
- **Utilities**: html2canvas 1.4.1 (for flyer generation in Schedule component)
- **No external libraries** for: routing, state management, UI components, animations

## Development Notes & Best Practices

### React Patterns Used
- **Functional Components**: All components use function declarations
- **React 19 Features**: Latest React with createRoot from react-dom/client
- **StrictMode**: Enabled for development debugging
- **Props Drilling**: Acceptable for small app scope
- **Effect Cleanup**: Proper event listener and observer cleanup

### File Organization Principles
- Components in `/src/components/` directory
- One component per file with default export
- Component names match file names (PascalCase)
- Static data in `/src/` root (schedule.json)
- Global styles in `/src/App.css`

### Performance Considerations
- **No Route Splitting**: Single-page app with smooth scrolling
- **Image Optimization**: Uses base64 SVG for hero background
- **Animation Optimization**: CSS transforms and opacity only
- **Event Optimization**: Event delegation for navigation clicks
- **Memory Management**: Effect cleanup prevents memory leaks

### Accessibility Features
- **Language Switching**: Updates `document.documentElement.lang`
- **Keyboard Navigation**: Maintains default browser behavior
- **Motion Preferences**: Respects `prefers-reduced-motion`
- **Semantic HTML**: Proper section, nav, and heading structure
- **Focus Management**: Smooth scroll maintains focus context

### Future Development Considerations
- **Testing**: No test framework currently - consider Vitest for Vite integration
- **Routing**: Could add React Router for multi-page expansion
- **CMS Integration**: Schedule data could connect to headless CMS
- **Performance**: Consider implementing route-based code splitting for larger scale
- **State Management**: Consider Context API or state library if complexity grows