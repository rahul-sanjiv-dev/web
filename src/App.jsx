import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Section from './components/Section.jsx'
import Projects from './components/Projects.jsx'
import Achievements from './components/Achievements.jsx'
import Skills from './components/Skills.jsx'
import Vision from './components/Vision.jsx'
import Blog from './components/Blog.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { profile, projects, achievements, blog } from './data.js'
import ExperienceSection from "./components/ExperienceSection";

export default function App() {
  return (
    <div>
      <Navbar profile={profile} />
      <main className="space-y-28">
        <Hero profile={profile} />

        <Section id="about" title="About">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 card p-6">{profile.bio}</div>
            <div className="card p-6">
              <h3 className="text-sm text-white/70 mb-2">Details</h3>
              <ul className="text-white/80">
                <li><strong>Location:</strong> {profile.location}</li>
                <li><strong>School:</strong> {profile.school}</li>
                <li><strong>Email:</strong> {profile.email}</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* 🔥 New Experience Section */}
        <Section id="experience" title="Experience">
          <ExperienceSection />
        </Section>

        <Section id="projects" title="Projects">
          <Projects items={projects} />
        </Section>

        <Section id="achievements" title="Achievements">
          <Achievements items={achievements} />
        </Section>

        <Section id="skills" title="Skills">
          <Skills items={profile.skills} />
        </Section>

        <Section id="vision" title="Future Vision">
          <Vision />
        </Section>

        <Section id="blog" title="Blog">
          <Blog items={blog} />
        </Section>

        <Section id="contact" title="Contact">
          <Contact profile={profile} />
        </Section>
      </main>
      <Footer />
    </div>
  )
}
