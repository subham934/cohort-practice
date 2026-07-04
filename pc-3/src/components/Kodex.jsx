import React from 'react'

const Kodex = () => {
  return (
    <section style={pageStyle}>
      <h2>Kodex</h2>
      <p>Build stronger coding skills with guided practice.</p>
    </section>
  )
}

const pageStyle = {
  maxWidth: '600px',
  margin: '30px auto',
  padding: '30px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  textAlign: 'center',
  background: '#fff8f2',
  color: '#111827',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
}

export default Kodex
