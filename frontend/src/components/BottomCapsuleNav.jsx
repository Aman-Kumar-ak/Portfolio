import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import api from '../api'

export default function BottomCapsuleNav(){
  const [cats, setCats] = useState([])
  const location = useLocation()

  useEffect(() => { api.getCategories().then(setCats) }, [])

  const items = useMemo(() => {
    const mapped = cats.map(c => ({ key: c.slug, label: c.name, to: `/category/${c.slug}` }))
    // Ensure order and include About first
    const order = ['home','mern','ui-ux','android','data-annotator','startup-ideas']
    const home = { key: 'home', label: 'Home', to: '/' }
    const contact = { key: 'contact', label: 'Contact', to: '/contact' }
    const byKey = Object.fromEntries(mapped.map(m => [m.key, m]))
    const ordered = order
      .map(k => k === 'home' ? home : byKey[k])
      .filter(Boolean)
    return [...ordered, contact]
  }, [cats])

  return (
    <div
      style={{
        position:'fixed', left:'50%', transform:'translateX(-50%)', bottom:18, zIndex:60,
        background:'rgba(255,255,255,0.30)',
        backdropFilter:'saturate(180%) blur(8px)',
        border:'1px solid var(--border-strong)',
        borderRadius:'9999px',
        boxShadow:'var(--shadow-2)',
        padding:'10px 12px',
        maxWidth:'90vw',
      }}
    >
      <div style={{display:'flex', alignItems:'center', gap:8, flexWrap:'nowrap', overflowX:'auto'}}>
        {items.map(item => {
          const active = location.pathname === item.to
          return (
            <Link
              key={item.key}
              to={item.to}
              className="pill"
              style={{
                padding:'8px 14px',
                background: active ? 'var(--color-primary)' : 'var(--color-highlight)',
                borderColor: active ? 'var(--border-strong)' : 'var(--border-weak)',
                color: '#111827',
                whiteSpace:'nowrap'
              }}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}


