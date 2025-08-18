import { useEffect, useState } from 'react'
import api from '../api'
import { Link } from 'react-router-dom'

export default function About(){
  const [categories, setCategories] = useState([])
  useEffect(()=>{ api.getCategories().then(setCategories) }, [])

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
            <img className="photo" src="/hero-image/aman.jpg" alt="Aman portrait" />
          </div>
        </div>
      </section>

      {/* Highlights Section redesigned as alternating media/text */}
      <section id="featured" className="section featured" style={{marginTop: 10}}>
        <h2>Featured Highlights</h2>

        {/* MERN Row */}
        <div className="highlight-row theme-mern" style={{marginTop: 40}}>
          <div className="text">
            <Link to="/category/mern" className="pill" style={{marginBottom: 12, background:'#E3F2FD', color:'#1565C0'}}>MERN</Link>
            <h3 style={{margin:'0 0 8px 0'}}>Full‑stack Projects</h3>
            <p style={{color:'var(--color-muted)', lineHeight:1.6}}>End‑to‑end products using MongoDB, Express, React, and Node. Real‑world apps with authentication, dashboards, and clean UI systems.</p>
            <ul style={{margin:'12px 0 0 18px', color:'var(--color-muted)'}}>
              <li>Project 1 – E‑commerce admin + storefront</li>
              <li>Project 2 – Realtime chat with sockets</li>
              <li>Project 3 – Portfolio CMS</li>
            </ul>
          </div>
          <div className="media">
            <img src="/highlight/mern-demo.svg" alt="MERN project previews" />
          </div>
        </div>

        {/* UI/UX Row (reversed) */}
        <div className="highlight-row reverse theme-uiux">
          <div className="text">
            <Link to="/category/ui-ux" className="pill" style={{marginBottom: 12, background:'#F3E5F5', color:'#7B1FA2'}}>UI/UX</Link>
            <h3 style={{margin:'0 0 8px 0'}}>Design Systems & Prototypes</h3>
            <p style={{color:'var(--color-muted)', lineHeight:1.6}}>Design explorations, component libraries, and prototype flows focused on usability and accessibility.</p>
            <ul style={{margin:'12px 0 0 18px', color:'var(--color-muted)'}}>
              <li>Atomic design component kit</li>
              <li>Usability studies and reports</li>
              <li>Interactive prototypes</li>
            </ul>
          </div>
          <div className="media">
            <img src="/highlight/uiux-demo.svg" alt="UI/UX prototypes" />
          </div>
        </div>

        {/* Android Row */}
        <div className="highlight-row theme-android">
          <div className="text">
            <Link to="/category/android" className="pill" style={{marginBottom: 12, background:'#E8F5E9', color:'#2E7D32'}}>Android</Link>
            <h3 style={{margin:'0 0 8px 0'}}>Native Apps & Experiments</h3>
            <p style={{color:'var(--color-muted)', lineHeight:1.6}}>Android apps with Kotlin, Jetpack, and Material design. Performance‑minded with offline‑first patterns.</p>
            <ul style={{margin:'12px 0 0 18px', color:'var(--color-muted)'}}>
              <li>Notes app with sync</li>
              <li>Habit tracker</li>
              <li>Widget experiments</li>
            </ul>
          </div>
          <div className="media">
            <img src="/highlight/android-demo.svg" alt="Android app previews" />
          </div>
        </div>
      </section>

      {/* Categories Section removed as requested */}

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


