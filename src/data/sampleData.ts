import { Job } from '../types';

export const SAMPLE_JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior React Developer Needed for E-commerce Platform',
    description: 'Looking for an experienced React developer to help build a scalable e-commerce platform. Must have experience with TypeScript, Redux, and GraphQL.',
    budget: '$50-70/hr',
    skills: ['React', 'TypeScript', 'GraphQL', 'Redux'],
    experience: 'Expert',
    postedDate: '2 hours ago',
    proposals: 12
  },
  {
    id: '2',
    title: 'Full Stack Developer for SaaS Application',
    description: 'Need a full stack developer to work on a SaaS application. Experience with React, Node.js, and PostgreSQL required.',
    budget: '$8000-12000',
    skills: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    experience: 'Intermediate',
    postedDate: '4 hours ago',
    proposals: 8
  },
  {
    id: '3',
    title: 'UI/UX Designer for Mobile App',
    description: 'Seeking a talented UI/UX designer to create beautiful and intuitive interfaces for our mobile application.',
    budget: '$40-60/hr',
    skills: ['UI Design', 'UX Design', 'Figma', 'Mobile Design'],
    experience: 'Expert',
    postedDate: '1 day ago',
    proposals: 15
  }
];