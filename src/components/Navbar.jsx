import React, { useState } from 'react'
import { Mail, Github, Linkedin, FileText, BadgeCheck, ChevronDown, Menu, X } from 'lucide-react'

export default function Navbar({ profile }) {
  const mainLinks = ['about', 'projects', 'achievements', 'contact']
  const moreLinks = ['experience', 'skills', 'vision', 'blog']
  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 nav-blur">
      <nav className="section flex items-center justify-between h-16">
        
        {/* Left: Name */}
        <a href="#" className="flex items-center gap-2 font-semibold">
          <span>{profile.name}</span>
          <BadgeCheck size={16} className="text-neon" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {mainLinks.map(l => (
            <a key={l} href={'#' + l} className="text-white/80 hover:text-white">
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          ))}

          {/* Dropdown for More */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 text-white/80 hover:text-white"
            >
              More <ChevronDown size={14} />
            </button>
            {open && (
              <div className="absolute top-6 left-0 bg-black/90 border border-white/10 rounded-lg shadow-lg p-2">
                {moreLinks.map(l => (
                  <a
                    key={l}
                    href={'#' + l}
                    className="block px-3 py-1 text-sm text-white/80 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {l.charAt(0).toUpperCase() + l.slice(1)}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: Socials (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <a className="badge" title="Email" href={'mailto:' + profile.email}><Mail size={16} /></a>
          <a className="badge" title="GitHub" href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /></a>
          <a className="badge" title="LinkedIn" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /></a>
          <a className="badge" title="Resume" href={profile.resume} target="_blank" rel="noreferrer"><FileText size={16} /></a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded hover:bg-white/10"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10 p-4 space-y-4">
          {/* Main Links */}
          {mainLinks.map(l => (
            <a
              key={l}
              href={'#' + l}
              className="block text-white/80 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          ))}

          {/* More Links */}
          <div className="border-t border-white/10 pt-2">
            {moreLinks.map(l => (
              <a
                key={l}
                href={'#' + l}
                className="block text-white/60 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-3 pt-4">
            <a className="badge flex-1 text-center" href={'mailto:' + profile.email}><Mail size={16} /></a>
            <a className="badge flex-1 text-center" href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /></a>
            <a className="badge flex-1 text-center" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /></a>
            <a className="badge flex-1 text-center" href={profile.resume} target="_blank" rel="noreferrer"><FileText size={16} /></a>
          </div>
        </div>
      )}
    </header>
  )
}
