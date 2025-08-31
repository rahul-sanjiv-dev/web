import React from 'react'
import { Github, Linkedin } from 'lucide-react'
import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section text-center text-white/60">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            <Github size={20} />
          </a>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <Linkedin size={20} />
            </a>
          )}
        </div>
        <div className="border-t border-white/10 pt-6">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
