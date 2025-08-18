import { useEffect, useState } from 'react'
import api from '../api'
import { Link } from 'react-router-dom'

export default function About(){
  const [categories, setCategories] = useState([])
  useEffect(()=>{ api.getCategories().then(setCategories) }, [])

  return (
    <div>
      {/* Hero Section simplified on white background (no extra boxed container) */}
      <section className="hero">
        <div>
          <div className="pill" style={{marginBottom:12}}>Hello, I'm Aman</div>
          <h1 style={{margin:'8px 0 12px 0'}}>Building full‑stack apps, crafting interfaces, and exploring ideas.</h1>
          <p style={{color:'var(--color-muted)'}}>MERN • UI/UX • Android • Data Annotation • Business Ideas</p>
          <div style={{display:'flex', gap:12, marginTop:18}}>
            <Link to="/hackathons" className="pill">Hackathons</Link>
          </div>
        </div>
        <img src="/highlight/hero-placeholder.svg" alt="Aman portrait placeholder" />
      </section>

      {/* Highlights Section redesigned as alternating media/text */}
      <section className="section" style={{marginTop: 24}}>
        <h2 style={{
          fontSize: '1.75rem',
          marginBottom: 24,
          textAlign: 'center',
          color: 'var(--color-heading)'
        }}>Featured Highlights</h2>

        {/* MERN Row */}
        <div className="highlight-row theme-mern">
          <div className="text">
            <div className="pill" style={{marginBottom: 12, background:'#E3F2FD', color:'#1565C0'}}>MERN</div>
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
            <div className="pill" style={{marginBottom: 12, background:'#F3E5F5', color:'#7B1FA2'}}>UI/UX</div>
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
            <div className="pill" style={{marginBottom: 12, background:'#E8F5E9', color:'#2E7D32'}}>Android</div>
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

      {/* Categories Section */}
      <section className="section" style={{marginTop: 48, marginBottom: 48}}>
        <h2 style={{
          fontSize: '1.75rem',
          marginBottom: 32,
          textAlign: 'center',
          color: 'var(--color-heading)'
        }}>Explore Categories</h2>
        <div className="grid grid-3" style={{gap: 24}}>
          {categories.map(c => (
            <div key={c.slug} className="card" style={{
              padding: 24,
              background: 'var(--color-surface)',
              borderRadius: 16,
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              ':hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 24px rgba(0,0,0,0.1)'
              }
            }}>
              <div className="pill" style={{
                marginBottom: 16,
                fontSize: '1.1rem',
                padding: '8px 16px',
                background: 'var(--color-highlight)',
                alignSelf: 'flex-start'
              }}>{c.name}</div>
              <p style={{
                margin: '0 0 20px 0',
                color: 'var(--color-muted)',
                fontSize: '1.1rem',
                lineHeight: 1.5,
                flex: 1
              }}>{c.description}</p>
              
              {/* Category-specific certifications */}
              {c.certifications && c.certifications.length > 0 && (
                <div style={{marginBottom: 20}}>
                  <div style={{
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    marginBottom: 12
                  }}>Related Certifications</div>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8
                  }}>
                    {c.certifications.slice(0, 2).map((cert, i) => (
                      <div key={i} style={{
                        padding: 12,
                        background: 'var(--color-highlight)',
                        borderRadius: 8,
                        fontSize: '0.95rem'
                      }}>
                        <div style={{fontWeight: 500}}>{cert.title}</div>
                        <div style={{color: 'var(--color-muted)', fontSize: '0.9rem'}}>{cert.issuer}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <a className="btn" href={`/category/${c.slug}`} style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 24px',
                borderRadius: 8,
                background: 'var(--color-primary)',
                color: 'var(--color-text)',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'all 0.2s ease',
                ':hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }
              }}>
                Explore
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: 8}}>
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section" style={{marginTop: 64, marginBottom: 48}}>
        <h2 style={{
          fontSize: '1.75rem',
          marginBottom: 32,
          textAlign: 'center',
          color: 'var(--color-heading)'
        }}>Featured Certifications</h2>
        <div className="grid" style={{
          gap: 24,
          gridTemplateColumns: '1fr',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <div className="card" style={{
            padding: 24,
            background: 'var(--color-surface)',
            borderRadius: 16,
            marginBottom: 24
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 24
            }}>
              <h3 style={{fontSize: '1.4rem', margin: 0}}>Professional Certifications</h3>
              <Link to="/certifications" className="btn" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8
              }}>
                View All
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </Link>
            </div>
            <div className="grid" style={{
              gap: 16,
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
            }}>
              {/* Featured certificates */}
              <div className="card" style={{
                padding: 20,
                background: '#FFFFFF',
                borderRadius: 12,
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                border: '1px solid var(--border-weak)'
              }}>
                <div className="pill" style={{
                  marginBottom: 12,
                  background: '#FFE0B5',
                  color: '#000',
                  display: 'inline-block'
                }}>MERN Stack</div>
                <div style={{fontSize: '1.1rem', marginBottom: 4, fontWeight: 500}}>MongoDB University</div>
                <p style={{margin: '0 0 16px 0', color: 'var(--color-muted)'}}>M001: MongoDB Basics</p>
                <a href="#" className="btn" style={{
                  padding: '8px 16px',
                  fontSize: '0.95rem',
                  background: '#E3F2FD',
                  color: '#1565C0',
                  border: 'none'
                }}>View Certificate</a>
              </div>
              <div className="card" style={{
                padding: 20,
                background: '#FFFFFF',
                borderRadius: 12,
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                border: '1px solid var(--border-weak)'
              }}>
                <div className="pill" style={{
                  marginBottom: 12,
                  background: '#FFE0B5',
                  color: '#000000ff',
                  display: 'inline-block'
                }}>UI/UX Design</div>
                <div style={{fontSize: '1.1rem', marginBottom: 4, fontWeight: 500}}>Google</div>
                <p style={{margin: '0 0 16px 0', color: 'var(--color-muted)'}}>Google UX Design Professional Certificate</p>
                <a href="#" className="btn" style={{
                  padding: '8px 16px',
                  fontSize: '0.95rem',
                  background: '#F3E5F5',
                  color: '#7B1FA2',
                  border: 'none'
                }}>View Certificate</a>
              </div>
              <div className="card" style={{
                padding: 20,
                background: '#FFFFFF',
                borderRadius: 12,
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                border: '1px solid var(--border-weak)'
              }}>
                <div className="pill" style={{
                  marginBottom: 12,
                  background: '#FFE0B5',
                  color: '#000000ff',
                  display: 'inline-block'
                }}>Android Development</div>
                <div style={{fontSize: '1.1rem', marginBottom: 4, fontWeight: 500}}>Google</div>
                <p style={{margin: '0 0 16px 0', color: 'var(--color-muted)'}}>Android Development with Kotlin</p>
                <a href="#" className="btn" style={{
                  padding: '8px 16px',
                  fontSize: '0.95rem',
                  background: '#E8F5E9',
                  color: '#2E7D32',
                  border: 'none'
                }}>View Certificate</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


