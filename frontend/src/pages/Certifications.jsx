import { useEffect, useState } from 'react'
import BackButton from '../components/backbutton'
import api from '../api'

export default function Certifications(){
  const [items, setItems] = useState([])
  useEffect(()=>{ api.getCertifications().then(setItems) }, [])

  return (
    <section className="section" style={{position:'relative'}}>
      <div style={{position:'relative', paddingTop:16, marginBottom:18}}>
        <BackButton />
        <h2 style={{textAlign:'center', margin:0, fontSize:'clamp(28px, 6vw, 46px)'}}>Certifications</h2>
      </div>
      <div className="grid" style={{gridTemplateColumns:'1fr'}}>
        {items.map((c, i) => (
          <div key={i} className="card" style={{padding:18}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
              <h3 style={{margin:'0 0 6px 0'}}>{c.title}</h3>
              <div className="pill">{c.issuer}</div>
            </div>
            <div style={{display:'flex', gap:10, flexWrap:'wrap'}}>
              <span className="pill">{c.date}</span>
              {c.credentialId && <span className="pill">ID: {c.credentialId}</span>}
              {c.credentialUrl && <a className="btn" href={c.credentialUrl} target="_blank" rel="noreferrer">Verify</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


