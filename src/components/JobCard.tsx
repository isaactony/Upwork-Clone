import { Job } from '../types';
import { Bookmark, Star } from 'lucide-react';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 hover:border-green-500 transition-all">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-200 hover:text-green-500 cursor-pointer">
          {job.title}
        </h3>
        <button className="text-gray-500 hover:text-green-500">
          <Bookmark className="h-5 w-5" />
        </button>
      </div>
      
      <div className="mt-2 flex items-center text-sm text-gray-400">
        <span className="font-medium">{job.budget}</span>
        <span className="mx-2">•</span>
        <span>Expert Level</span>
        <span className="mx-2">•</span>
        <span>Est. Budget: {job.budget}</span>
      </div>
      
      <p className="mt-3 text-gray-300 line-clamp-2">{job.description}</p>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {job.skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
      
      <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center space-x-1">
          <Star className="h-4 w-4 fill-current text-yellow-500" />
          <span>{job.proposals} proposals</span>
        </div>
        <span>Posted {job.postedDate}</span>
      </div>
    </div>
  );
}