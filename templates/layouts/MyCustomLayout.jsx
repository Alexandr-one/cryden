import React from 'react'

export default function MyCustomLayout({ children }) {
  return (
    <div>
      <main style={{ padding: '2rem', backgroundColor: '#f5f5f5' }}>
        {children}
      </main>
    </div>
  )
}
