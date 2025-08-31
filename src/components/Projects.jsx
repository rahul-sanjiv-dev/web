import React from 'react'
import { Github, Link as LinkIcon, Tag } from 'lucide-react'

function ProjectCard({ item }){
  return (
    <div className="card p-6 flex flex-col">
      <div className="mb-3"><h3 className="text-lg font-semibold">{item.title}</h3><p className="text-white/70 text-sm">{item.subtitle}</p></div>
      <p className="text-white/80">{item.description}</p>
      <div className="flex flex-wrap gap-2 mt-4">{item.tags.map(t => <span key={t} className="badge">{t}</span>)}</div>
      <div className="mt-5 flex gap-3">{item.links?.github && <a className="badge" href={item.links.github} target="_blank" rel="noreferrer"><Github size={16}/> Code</a>}{item.links?.demo && <a className="badge" href={item.links.demo} target="_blank" rel="noreferrer"><LinkIcon size={16}/> Demo</a>}</div>
    </div>
  )
}

export default function Projects({ items }){ return (<div className="grid md:grid-cols-2 gap-6">{items.map(p => <ProjectCard key={p.title} item={p} />)}</div>) }