import React from 'react'

export default function Blog({ items }){
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {items.map(b => (
        <article key={b.id} className="card p-6">
          <h3 className="text-lg font-semibold">{b.title}</h3>
          <p className="text-white/70 mt-2">{b.desc}</p>
          <a className="badge mt-4" href="#" aria-disabled="true">Read (coming soon)</a>
        </article>
      ))}
    </div>
  )
}