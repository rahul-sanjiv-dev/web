import React from 'react'

export default function Skills({ items }){
  return (
    <div className="card p-6">
      <ul className="grid grid-cols-2 gap-3">
        {items.map((s,idx) => <li key={idx} className="badge">{s}</li>)}
      </ul>
    </div>
  )
}