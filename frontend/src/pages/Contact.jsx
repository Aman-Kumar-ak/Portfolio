import { useState } from 'react'
import BackButton from '../components/backbutton'
import api from '../api'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await api.sendContactMessage(formData)
      
      if (response.success) {
        setStatus({ type: 'success', message: response.message })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus({ type: 'error', message: response.error })
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again later.' 
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section" style={{position:'relative'}}>
      <div style={{position:'relative', paddingTop:16, marginBottom:18}}>
        <BackButton />
        <h2 style={{textAlign:'center', margin:0, fontSize:'clamp(28px, 6vw, 46px)'}}>Contact Me</h2>
      </div>
      
      <div style={{maxWidth: '600px', margin: '0 auto', padding: '0 20px'}}>
        <div className="card" style={{padding: 24}}>
          <p style={{textAlign: 'center', marginBottom: 24, color: '#666'}}>
            Have a question or want to work together? Feel free to reach out!
          </p>
          
          {status.message && (
            <div className={`alert ${status.type === 'success' ? 'success' : 'error'}`} 
                 style={{
                   padding: '12px 16px',
                   borderRadius: '8px',
                   marginBottom: '20px',
                   backgroundColor: status.type === 'success' ? '#d4edda' : '#f8d7da',
                   color: status.type === 'success' ? '#155724' : '#721c24',
                   border: `1px solid ${status.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                 }}>
              {status.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div style={{marginBottom: 20}}>
              <label htmlFor="name" style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#333'
              }}>
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
                placeholder="Your name"
              />
            </div>
            
            <div style={{marginBottom: 20}}>
              <label htmlFor="email" style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#333'
              }}>
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
                placeholder="your.email@example.com"
              />
            </div>
            
            <div style={{marginBottom: 20}}>
              <label htmlFor="subject" style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#333'
              }}>
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
                placeholder="What's this about?"
              />
            </div>
            
            <div style={{marginBottom: 24}}>
              <label htmlFor="message" style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: '#333'
              }}>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxSizing: 'border-box',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
                placeholder="Tell me more about your inquiry..."
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '14px 24px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => {
                if (!loading) e.target.style.backgroundColor = '#0056b3'
              }}
              onMouseOut={(e) => {
                if (!loading) e.target.style.backgroundColor = '#007bff'
              }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        
                 <div style={{textAlign: 'center', marginTop: 24, color: '#666'}}>
           <p>You can also reach me directly at:</p>
           <p style={{fontWeight: '500', color: '#333'}}>
             <a href="mailto:lifepointsaman@gmail.com" style={{color: '#007bff', textDecoration: 'none'}}>
               lifepointsaman@gmail.com
             </a>
           </p>
         </div>
      </div>
    </section>
  )
}
