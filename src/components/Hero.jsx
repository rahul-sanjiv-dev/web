import React from 'react'
import { motion } from 'framer-motion'

export default function Hero({ profile }){
  return (
    <section className="relative pt-28 md:pt-32">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
      </div>
      <div className="section text-center">
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }} className="space-y-6">
          <div className="inline-flex items-center gap-2 badge"><span>{profile.location}</span><span>•</span><span>{profile.school}</span></div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">{profile.name}</h1>
          <p className="text-lg md:text-xl text-white/80">{profile.role}</p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <a href="#projects" className="btn-primary">See Projects</a>
            <a href={'mailto:'+profile.email} className="badge">Contact</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}