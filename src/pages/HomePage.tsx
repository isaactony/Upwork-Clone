import React from 'react';
import JobCard from '../components/JobCard';
import Sidebar from '../components/Sidebar';
import ProfileSection from '../components/ProfileSection';
import Banner from '../components/Banner';
import { Job } from '../types';

const SAMPLE_JOBS: Job[] = [
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

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Banner />
      <div className="flex gap-8">
        <Sidebar />
        <div className="flex-1 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-200">Jobs you might like</h2>
            <select className="bg-gray-800 border border-gray-700 rounded-md text-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500">
              <option>Best Matches</option>
              <option>Most Recent</option>
              <option>Highest Budget</option>
            </select>
          </div>
          
          <div className="space-y-4">
            {SAMPLE_JOBS.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
        <ProfileSection />
      </div>
    </div>
  );
}