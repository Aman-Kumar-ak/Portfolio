import { useEffect, useState } from 'react'
import BackButton from '../components/backbutton'
import { useParams } from 'react-router-dom'
import api from '../api'

export default function Category(){
  const { slug } = useParams()
  const [cat, setCat] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    api.getCategory(slug).then(setCat).catch(()=> setError('Not found'))
  }, [slug])

  if (error) return <div className="section"><h2>Category not found</h2></div>
  if (!cat) return <div className="section">Loading...</div>

  return (
    <div className="section">
      <BackButton />
      <h2 style={{marginBottom:6}}>{cat.name}</h2>
      <p style={{color:'var(--color-muted)', marginTop:0}}>{cat.description}</p>

      {/* Projects Section */}
      <section style={{marginBottom: 48}}>
        <h3 style={{fontSize: '1.4rem', marginBottom: 24}}>Projects in {cat.name}</h3>
        <div className="grid" style={{gridTemplateColumns:'1fr'}}>
          {cat.projects?.map((p, idx) => (
            <div key={idx} className="card" style={{padding:18}}>
              <h3 style={{marginTop:0}}>{p.title}</h3>
              <p>{p.summary}</p>
              <div style={{display:'grid', gap:10, gridTemplateColumns:'1fr 1fr'}}>
                <div className="card" style={{padding:12}}>
                  <div className="pill" style={{marginBottom:8}}>Success</div>
                  <p style={{margin:0}}>{p.success}</p>
                </div>
                <div className="card" style={{padding:12}}>
                  <div className="pill" style={{marginBottom:8}}>Learning</div>
                  <p style={{margin:0}}>{p.learning}</p>
                </div>
              </div>
              {p.links?.length ? (
                <div style={{display:'flex', gap:10, marginTop:12, flexWrap:'wrap'}}>
                  {p.links.map((l, i) => (
                    <a key={i} className="pill" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      {cat.certifications && cat.certifications.length > 0 && (
        <section>
          <h3 style={{fontSize: '1.4rem', marginBottom: 24}}>Certifications in {cat.name}</h3>
        <div className="grid" style={{gridTemplateColumns:'1fr'}}>
          {cat.projects?.map((p, idx) => (
            <div key={idx} className="card" style={{padding:18}}>
              <h3 style={{marginTop:0}}>{p.title}</h3>
              <p>{p.summary}</p>
              <div style={{display:'grid', gap:10, gridTemplateColumns:'1fr 1fr'}}>
                <div className="card" style={{padding:12}}>
                  <div className="pill" style={{marginBottom:8}}>Success</div>
                  <p style={{margin:0}}>{p.success}</p>
                </div>
                <div className="card" style={{padding:12}}>
                  <div className="pill" style={{marginBottom:8}}>Learning</div>
                  <p style={{margin:0}}>{p.learning}</p>
                </div>
              </div>
              {p.links?.length ? (
                <div style={{display:'flex', gap:10, marginTop:12, flexWrap:'wrap'}}>
                  {p.links.map((l, i) => (
                    <a key={i} className="pill" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>
      )}
    </div>
  )
}


