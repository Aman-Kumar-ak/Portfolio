import { useEffect, useState } from 'react'
import api from '../api'
import { Link } from 'react-router-dom'

export default function About(){
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    api.getCategories()
      .then(cats => {
        setCategories(cats)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch categories:', err)
        setError('Failed to load categories')
        setLoading(false)
      })
  }, [])

  // Default categories if API fails
  const defaultCategories = [
    { slug: 'mern', name: 'MERN', description: 'Full-stack projects using MongoDB, Express, React, and Node' },
    { slug: 'ui-ux', name: 'UI/UX', description: 'Design systems and prototypes focused on usability' },
    { slug: 'android', name: 'Android', description: 'Native apps with Kotlin and Material design' }
  ]

  const displayCategories = categories.length > 0 ? categories : defaultCategories

  return (
    <div>
      {/* Hero Section: centered greeting with body grid */}
      <section className="hero">
        <h1 className="hero-title">Hello, I'm Aman</h1>
        <div className="hero-body">
          <div>
            <h2 style={{margin:'8px 0 12px 0', fontSize:'clamp(22px, 3.2vw, 36px)'}}>Building full‑stack apps, crafting interfaces, and exploring ideas.</h2>

            <div className="badge-row">
              <span className="pill">Design Systems</span>
              <span className="pill">Accessibility</span>
              <span className="pill">Prototyping</span>
              <span className="pill">Performance</span>
              <span className="pill">TypeScript/React</span>
            </div>

            <div className="cta">
              <Link to="/hackathons" className="btn">Hackathons</Link>
              <a href="#featured" className="pill">Featured work ↓</a>
            </div>
          </div>
          <div className="hero-media">
            <img className="photo" src="/hero-image/aman.jpg" alt="Aman portrait" loading="eager" fetchpriority="high" decoding="async" />
          </div>
        </div>
      </section>

      {/* Highlights Section redesigned as alternating media/text */}
      <section id="featured" className="section featured" style={{marginTop: 10}}>
        <h2>Featured Highlights</h2>

        {/* Dynamic Categories (filter out Data Annotator & Startup Ideas) */}
        {displayCategories
          .filter(cat => ['mern', 'ui-ux', 'android'].includes(cat.slug))
          .map((category, index) => {
          const isReversed = index % 2 === 1
          const themeClass = `theme-${category.slug}`
          
          return (
            <div key={category.slug} className={`highlight-row ${isReversed ? 'reverse' : ''} ${themeClass}`} style={{marginTop: index === 0 ? 40 : 0}}>
              <div className="text">
                <Link to={`/category/${category.slug}`} className="pill" style={{
                  marginBottom: 12, 
                  background: getCategoryColor(category.slug).bg, 
                  color: getCategoryColor(category.slug).text
                }}>
                  {category.name}
                </Link>
                <h3 style={{margin:'0 0 8px 0'}}>{getCategoryTitle(category.slug)}</h3>
                <p style={{color:'var(--color-muted)', lineHeight:1.6}}>{getCategoryDescription(category.slug)}</p>
                <ul style={{margin:'12px 0 0 18px', color:'var(--color-muted)'}}>
                  {getCategoryFeatures(category.slug).map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="media">
                <img src={`/highlight/${getCategoryImageFilename(category.slug)}`} alt={`${category.name} previews`} />
              </div>
            </div>
          )
        })}

        {/* API Status Message */}
        {error && (
          <div style={{textAlign:'center', padding:'20px', marginTop:'20px'}}>
            <p style={{color:'var(--color-muted)', fontSize:'0.9rem'}}>
              Using fallback data. Backend connection unavailable.
            </p>
          </div>
        )}
      </section>

      {/* Certifications Section */}
      <section className="section certs" style={{marginTop: 48, marginBottom: 48}}>
        <div className="section-header">
          <h2 style={{margin:0}}>Featured Certifications</h2>
          <Link to="/certifications" className="btn" style={{display:'inline-flex', alignItems:'center', gap:8}}>
            View All
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </Link>
        </div>
        <div className="certs-grid">
          <div className="cert-card t-mern">
            <div className="pill" style={{marginBottom: 12, background:'#FFE0B5'}}>MERN Stack</div>
            <div style={{fontSize: '1.1rem', marginBottom: 4, fontWeight: 500}}>MongoDB University</div>
            <p style={{margin: '0 0 16px 0', color: 'var(--color-muted)'}}>M001: MongoDB Basics</p>
            <a href="#" className="btn" style={{padding: '8px 16px', fontSize: '0.95rem', background: '#E3F2FD', color: '#1565C0', border: 'none'}}>View Certificate</a>
          </div>
          <div className="cert-card t-uiux">
            <div className="pill" style={{marginBottom: 12, background:'#FFE0B5'}}>UI/UX Design</div>
            <div style={{fontSize: '1.1rem', marginBottom: 4, fontWeight: 500}}>Google</div>
            <p style={{margin: '0 0 16px 0', color: 'var(--color-muted)'}}>Google UX Design Professional Certificate</p>
            <a href="#" className="btn" style={{padding: '8px 16px', fontSize: '0.95rem', background: '#F3E5F5', color: '#7B1FA2', border: 'none'}}>View Certificate</a>
          </div>
          <div className="cert-card t-android">
            <div className="pill" style={{marginBottom: 12, background:'#FFE0B5'}}>Android Development</div>
            <div style={{fontSize: '1.1rem', marginBottom: 4, fontWeight: 500}}>Google</div>
            <p style={{margin: '0 0 16px 0', color: 'var(--color-muted)'}}>Android Development with Kotlin</p>
            <a href="#" className="btn" style={{padding: '8px 16px', fontSize: '0.95rem', background: '#E8F5E9', color: '#2E7D32', border: 'none'}}>View Certificate</a>
          </div>
        </div>
      </section>
    </div>
  )
}

// Helper functions for category data
function getCategoryColor(slug) {
  const colors = {
    'mern': { bg: '#E3F2FD', text: '#1565C0' },
    'ui-ux': { bg: '#F3E5F5', text: '#7B1FA2' },
    'android': { bg: '#E8F5E9', text: '#2E7D32' }
  }
  return colors[slug] || { bg: '#F5F5F5', text: '#424242' }
}

function getCategoryTitle(slug) {
  const titles = {
    'mern': 'Full‑stack Projects',
    'ui-ux': 'Design Systems & Prototypes',
    'android': 'Native Apps & Experiments'
  }
  return titles[slug] || 'Category Projects'
}

function getCategoryDescription(slug) {
  const descriptions = {
    'mern': 'End‑to‑end products using MongoDB, Express, React, and Node. Real‑world apps with authentication, dashboards, and clean UI systems.',
    'ui-ux': 'Design explorations, component libraries, and prototype flows focused on usability and accessibility.',
    'android': 'Android apps with Kotlin, Jetpack, and Material design. Performance‑minded with offline‑first patterns.'
  }
  return descriptions[slug] || 'Projects and experiments in this category.'
}

function getCategoryFeatures(slug) {
  const features = {
    'mern': [
      'Project 1 – E‑commerce admin + storefront',
      'Project 2 – Realtime chat with sockets',
      'Project 3 – Portfolio CMS'
    ],
    'ui-ux': [
      'Atomic design component kit',
      'Usability studies and reports',
      'Interactive prototypes'
    ],
    'android': [
      'Notes app with sync',
      'Habit tracker',
      'Widget experiments'
    ]
  }
  return features[slug] || ['Project 1', 'Project 2', 'Project 3']
}

function getCategoryImageFilename(slug) {
  const map = {
    'mern': 'mern-demo.svg',
    'ui-ux': 'uiux-demo.svg',
    'android': 'android-demo.svg'
  }
  return map[slug] || `${slug}-demo.svg`
}


