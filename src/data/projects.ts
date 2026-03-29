import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Bharat Policy Twin',
    description:
      'Full-stack policy analytics platform with ML modules — Isolation Forest for anomaly detection and DiD regression for causal inference.',
    techStack: [
      'FastAPI',
      'PostgreSQL',
      'Streamlit',
      'Docker',
      'AWS EC2',
      'pgvector',
    ],
    githubUrl: 'https://github.com/Krish-2114/bharat-policy',
    liveUrl: 'https://bharat-policy.vercel.app',
  },
  {
    id: 2,
    title: 'TeamTech Portfolio',
    description:
      'Professional portfolio with admin panel, project showcase, and team management deployed on AWS Lightsail.',
    techStack: ['Next.js', 'FastAPI', 'MySQL', 'AWS Lightsail', 'Nginx'],
    githubUrl: 'https://github.com/Krish-2114/TeamTech-portfolio',
    liveUrl: 'https://teamtech24.com',
  },
  {
    id: 3,
    title: 'AI Work Management System',
    description:
      'Local AI-powered work management for a 30-person company using Ollama with ML analytics for burnout detection and task prediction.',
    techStack: ['Python', 'Ollama', 'Llama 3.2', 'SQLite', 'Streamlit', 'XGBoost'],
    githubUrl: 'https://github.com/Krish-2114/ai-work-mgmt',
  },
];