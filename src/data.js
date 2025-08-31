export const profile = {
  name: 'Rahul Sanjiv R',
  role: 'Developing Projects at the Intersection of Medicine & Tech',
  location: 'Coimbatore, Tamil Nadu, India',
  school: 'CS Academy',
  email: 'rahulsanjiv.projects@gmail.com',
  github: 'https://github.com/rahul-sanjiv-dev',
  linkedin: 'https://www.linkedin.com/in/rahul-sanjiv-r-ab2a45323/',
  resume: '#', // 👉 replace with Google Drive/Docs link when ready
  bio: "I am a high school student at CS Academy with interests in medicine, AI/ML, and biomedical technology. My projects focus on applying science and technology to solve real-world challenges — such as SafeRescue AI, an accident detection and emergency notification prototype recognized at Thalir Innovation Fest, G20 Science Expo, and IGNITIA 2025.",
  skills: [
    'Python (intermediate)',
    'Excel (advanced)',
    'AI/ML (foundational)',
    'Computer Vision (beginner)',
    'IoT Prototyping'
  ]
}

export const projects = [
  {
    title: 'SafeRescue AI — Accident Detection System',
    subtitle: 'Real-time crash detection and automated emergency alerts',
    description: 'Prototype that detects road accidents from live video using computer vision and triggers automated notifications (SMS/call) with location context. Designed for rapid response in low-infrastructure environments. Built with Python, basic ML models, and microcontroller-based I/O.',
    tags: ['AI/ML','Computer Vision','IoT','Safety'],
    links: { github: '', demo: '' },
  },
  {
    title: 'Vehicle Helper for Differently-Abled (Prototype)',
    subtitle: 'Assistive mobility prototype',
    description: 'A prototype designed to help differently-abled users with safer mobility. Presented at a national-level competition and received positive feedback.',
    tags: ['Assistive Tech','Prototype'],
    links: { github: '', demo: '' }
  }
]

export const achievements = [
  { year: '2024', title: 'Finalist — Thalir Innovation Fest', detail: 'Traffic-flow optimization prototype; qualified for nationals.' },
  { year: '2025', title: '3rd Prize — IGNITIA', detail: 'Awarded for SafeRescue AI (road-safety innovation).' },
  { year: '2024', title: 'State Winner & National Qualifier — G20 Science Expo' }
]

export const blog = [
  { id: 1, title: 'Designing an Accident Detection Prototype', desc: 'Notes on the approach, constraints, and roadmap.' },
  { id: 2, title: 'From Idea to Demo: Competing with STEM Projects', desc: 'What I learned building and iterating quickly.' }
]
