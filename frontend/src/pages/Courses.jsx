import { useEffect, useState } from 'react'
import BackButton from '../components/backbutton'
import api from '../api'

export default function Courses(){
  const [items, setItems] = useState([])
  useEffect(()=>{ api.getCourses().then(setItems) }, [])

  return (
    <section className="section">
      <BackButton />
      <h2>Courses</h2>
      <div className="grid" style={{gridTemplateColumns:'1fr'}}>
        {items.map((c, i) => (
          <div key={i} className="card" style={{padding:18}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
              <h3 style={{margin:'0 0 6px 0'}}>{c.title}</h3>
              <div className="pill">{c.provider} · {c.year}</div>
            </div>
            {c.url && <a className="btn" href={c.url} target="_blank" rel="noreferrer">View</a>}
          </div>
        ))}
      </div>
    </section>
  )
}


