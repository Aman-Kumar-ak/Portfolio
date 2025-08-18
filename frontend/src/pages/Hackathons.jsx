import { useEffect, useState } from 'react'
import BackButton from '../components/backbutton'
import api from '../api'

export default function Hackathons(){
  const [items, setItems] = useState([])
  useEffect(()=>{ api.getHackathons().then(setItems) }, [])

  return (
    <section className="section">
      <BackButton />
      <h2>Hackathons</h2>
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


