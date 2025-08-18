import { useEffect, useState } from 'react'
import BackButton from '../components/backbutton'
import { useParams } from 'react-router-dom'
import api from '../api'

export default function Category(){
  const { slug } = useParams()
  const [cat, setCat] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    setError('')
    
    api.getCategory(slug)
      .then(categoryData => {
        setCat(categoryData)
      })
      .catch(err => {
        console.error('Failed to fetch category:', err)
        setError('Category not found or backend unavailable')
      })
  }, [slug])

  if (error) return (
    <div className="section">
      <BackButton />
      <div style={{textAlign:'center', paddingTop:40}}>
        <h2>Category Not Found</h2>
        <p style={{color:'var(--color-muted)'}}>
          {error === 'Category not found or backend unavailable' 
            ? 'The backend service is currently unavailable. Please try again later or contact support.'
            : error
          }
        </p>
        <div style={{marginTop:20}}>
          <a href="/" className="pill">Go Home</a>
        </div>
      </div>
    </div>
  )
  
  if (!cat) return (
    <div className="section">
      <BackButton />
      <div style={{textAlign:'center', paddingTop:40}}>
        <h2>No Data Available</h2>
        <p style={{color:'var(--color-muted)'}}>
          This category doesn't have any content yet.
        </p>
      </div>
    </div>
  )

  return (
    <div className="section" style={{position:'relative'}}>
      <BackButton />
      {cat && (
        <div style={{textAlign:'center', paddingTop:40, marginBottom:28}}>
          <h1 style={{
            margin:'0 0 8px 0',
            fontSize:'clamp(28px, 6vw, 56px)'
          }}>{cat.name}</h1>
          <p style={{
            color:'var(--color-muted)',
            margin:'0 auto',
            fontSize:'clamp(16px, 2.2vw, 20px)',
            maxWidth:800
          }}>{cat.description}</p>
        </div>
      )}

      {/* Projects Section */}
      {cat && cat.projects && cat.projects.length > 0 && (
        <section style={{marginBottom: 48}}>
          <h3 style={{fontSize: '1.6rem', marginBottom: 24}}>Projects in {cat.name}</h3>
          <div className="grid" style={{gridTemplateColumns:'1fr'}}>
            {cat.projects.map((p, idx) => (
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

      {/* Certifications Section */}
      {cat && cat.certifications && cat.certifications.length > 0 && (
        <section>
          <h3 style={{fontSize: '1.4rem', marginBottom: 24}}>Certifications in {cat.name}</h3>
          <div className="grid" style={{gridTemplateColumns:'1fr'}}>
            {cat.certifications.map((cert, idx) => (
              <div key={idx} className="card" style={{padding:18}}>
                <h3 style={{marginTop:0}}>{cert.title}</h3>
                <p>{cert.summary}</p>
                {cert.links?.length ? (
                  <div style={{display:'flex', gap:10, marginTop:12, flexWrap:'wrap'}}>
                    {cert.links.map((l, i) => (
                      <a key={i} className="pill" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* No Content Message */}
      {cat && (!cat.projects || cat.projects.length === 0) && 
       (!cat.certifications || cat.certifications.length === 0) && (
        <div style={{textAlign:'center', padding:'40px 20px'}}>
          <p style={{color:'var(--color-muted)', fontSize:'1.1rem'}}>
            No projects or certifications available for this category yet.
          </p>
        </div>
      )}
    </div>
  )
}


