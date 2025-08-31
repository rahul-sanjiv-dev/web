import React from 'react'

export default function Achievements({ items }){
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map((a,idx) => (
        <div key={idx} className="card p-6">
          <h3 className="text-lg font-semibold">{a.year} — {a.title}</h3>
          {a.detail && <p className="text-white/80 mt-2">{a.detail}</p>}
        </div>
      ))}
    </div>
  )
}