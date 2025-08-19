import { useEffect, useState } from 'react'
import BackButton from '../components/backbutton'
import api from '../api'

export default function Hackathons(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{ 
    setLoading(true)
    api.getHackathons()
      .then(data => {
        setItems(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to fetch hackathons:', err)
        setLoading(false)
      })
  }, [])

  if (loading) return (
    <div className="section" style={{display:'grid', placeItems:'center', minHeight:'60vh'}}>
      <div className="spinner" aria-label="Loading" role="status" />
    </div>
  )

  return (
    <section className="section" style={{position:'relative'}}>
      <div style={{position:'relative', paddingTop:16, marginBottom:18}}>
        <BackButton />
        <h2 style={{textAlign:'center', margin:0, fontSize:'clamp(28px, 6vw, 46px)'}}>Hackathons</h2>
      </div>
      <div className="grid" style={{gridTemplateColumns:'1fr'}}>
        {items.map((h, i) => (
          <div key={i} className="card" style={{padding:18}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
              <h3 style={{margin:'0 0 6px 0'}}>{h.name}</h3>
              <div className="pill">{h.org} · {h.year}</div>
            </div>
            <p style={{marginTop:6}}>{h.description}</p>
            <div style={{display:'flex', gap:10, flexWrap:'wrap'}}>
              {h.result && <span className="pill">{h.result}</span>}
              {h.links?.map((l, j) => (
                <a key={j} className="pill" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


