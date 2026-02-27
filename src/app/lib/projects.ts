export type Project = {
  id: string
  title: string
  category: string
  year: string
  description: string
  color: string
  link?: string
  inDevelopment?: boolean
}

export const projects: Project[] = [
  {
    id: '01',
     title: 'PORTFOLIO',
    category: 'Web Development',
    year: '2026',
    description: 'A personal portfolio website showcasing projects and skills.',
    color: '#1b1b2f',
    link: 'https://fehintiportfolio.netlify.app/',
    inDevelopment: false,
  },
  {
    id: '02',
     title: 'VITALITY-APP',
    category: 'A health and wellness application',
    year: '2026',
    description: 'A health and wellness application that provides personalized recommendations and insights.',
    color: '#1b1b2f',
    link: 'https://vitalityapp.netlify.app/',
    inDevelopment: true,
  },
  {
    id: '03',
     title: 'EVEN-EYE',
    category: 'A security application',
    year: '2026',
    description: 'An AI-powered security application that uses computer vision to monitor and analyze surveillance footage.',
    color: '#1b1b2f',
    link: '',
    inDevelopment: true,
  },
  {
    id: '04',
    title: 'AI-Resume Critic App',
    category: 'AI Application',
    year: '2026',
    description: 'An AI-powered app that critiques and improves resumes.',
    color: '#1b1b2f',
    link: 'https://resumecritic.netlify.app/',
    inDevelopment: false,
  },
  {
    id: '05',
    title: 'Mental Health Chatbot',
    category: 'Healthcare AI',
    year: '2025',
    description: 'An AI-powered chatbot designed to support mental health and wellness.',
    color: '#16213e',
    link: 'https://embrase.netlify.app/',
    inDevelopment: false,
  },
  {
    id: '06',
    title: 'Contact App',
    category: 'Web Application',
    year: '2024',
    description: 'A web app that stores and manages contact information, built with Reactjs',
    color: '#0f3460',
    link: 'https://pops-contact-app.netlify.app/',
    inDevelopment: false,
  },
   {
    id: '07',
    title: 'SpicyTee',
    category: 'Restaurant website',
    year: '2023',
    description: 'A restaurant website project for a local eatery, featuring a modern design and online reservation system.',
    color: '#1a1a2e',
    link: '',
    inDevelopment: false,
  },
  {
    id: '08',
    title: 'NEWT-Tech',
    category: 'Web Development',
    year: '2022',
    description: 'Newt Tech is a technology company that specializes in web development and digital solutions.',
    color: '#1b1b2f',
    link: 'https://newttech.netlify.app/',
    inDevelopment: false,
  },
]