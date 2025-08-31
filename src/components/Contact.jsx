import React from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact({ profile }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card p-6">
        <h3 className="text-lg font-semibold">Get in touch</h3>
        <p className="text-white/80 mt-2">
          Email me at{" "}
          <a className="link" href={'mailto:' + profile.email}>
            {profile.email}
          </a>{" "}
          or view my{" "}
          <a className="link" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {profile.linkedin && (
            <> or connect on{" "}
              <a className="link" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </>
          )}
          .
        </p>
      </div>

      <div className="card p-6">
        <h3 className="text-lg font-semibold">Quick actions</h3>
        <div className="mt-3 flex gap-3">
          <a className="btn-primary flex items-center gap-2" href={'mailto:' + profile.email}>
            <Mail size={16} /> Email
          </a>
          {profile.linkedin && (
            <a
              className="badge flex items-center gap-2"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          )}
          <button
            className="badge"
            onClick={() => alert('Resume will be added soon.')}
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  )
}
