// Replace placeholders with your real portfolio data
module.exports = {
  categories: [
    {
      slug: 'mern',
      name: 'MERN',
      description: 'Full-stack projects with MongoDB, Express, React, Node.',
      certifications: [
        {
          title: 'M001: MongoDB Basics',
          issuer: 'MongoDB University',
          date: '2024-03',
          credentialId: 'MDB-001',
          credentialUrl: '#'
        }
      ],
      projects: [
        {
          title: 'Project Alpha',
          summary: 'A MERN app that does X.',
          success: 'Deployed to production; 1k users.',
          learning: 'Advanced state management, JWT auth, CI/CD.',
          links: [
            { label: 'GitHub', url: 'https://github.com/Aman-Kumar-ak' },
            { label: 'Live', url: 'https://example.com' }
          ]
        }
      ]
    },
    {
      slug: 'ui-ux',
      name: 'UI/UX',
      description: 'Design systems, prototypes, and usability testing.',
      certifications: [
        {
          title: 'Google UX Design Professional Certificate',
          issuer: 'Google',
          date: '2024-02',
          credentialId: 'GUX-001',
          credentialUrl: '#'
        }
      ],
      projects: [
        {
          title: 'Design System Omega',
          summary: 'Tokenized design system for multi-brand apps.',
          success: 'Cut dev time by 30%.',
          learning: 'Accessibility, Figma variants, motion guidelines.',
          links: [ { label: 'Case Study', url: 'https://example.com/case' } ]
        }
      ]
    },
    {
      slug: 'android',
      name: 'Android',
      description: 'Native Android apps and Kotlin experiments.',
      certifications: [
        {
          title: 'Android Development with Kotlin',
          issuer: 'Google',
          date: '2024-01',
          credentialId: 'ADK-001',
          credentialUrl: '#'
        }
      ],
      projects: [
        {
          title: 'FitTrack',
          summary: 'Workout tracker with offline sync.',
          success: 'Featured in campus showcase.',
          learning: 'Room DB, WorkManager, MVVM.',
          links: []
        }
      ]
    },
    {
      slug: 'data-annotator',
      name: 'Data Annotator',
      description: 'Annotation pipelines for CV/NLP datasets.',
      projects: [
        {
          title: 'Vision Label Suite',
          summary: 'Bounding boxes & segmentation for retail images.',
          success: '200k images labeled with QC.',
          learning: 'COCO format, QA workflows, inter-annotator agreement.',
          links: []
        }
      ]
    },
    {
      slug: 'startup-ideas',
      name: 'Startup Ideas',
      description: 'Startup explorations and MVPs.',
      projects: [
        {
          title: 'LocalHub',
          summary: 'Marketplace MVP for local services.',
          success: '50 paying users in pilot.',
          learning: 'JTBD interviews, pricing tests.',
          links: []
        }
      ]
    }
  ],
  hackathons: [
    { name: 'HackX 2024', org: 'ABC University', year: 2024, result: 'Top 5', description: 'Built AI tutor in 24h', links: [ { label: 'Demo', url: 'https://example.com/demo' } ] }
  ],
  courses: [
    { provider: 'Coursera', title: 'React Advanced', year: 2024, url: 'https://coursera.org/...' },
    { provider: 'Udemy', title: 'Node.js Masterclass', year: 2023, url: 'https://udemy.com/...' }
  ],
  certifications: [
    { title: 'AWS Cloud Practitioner', issuer: 'Amazon', date: '2024-06', credentialUrl: 'https://...', credentialId: 'ABC-123' }
  ]
};


