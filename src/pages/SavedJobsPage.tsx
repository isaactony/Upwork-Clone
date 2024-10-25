import React from 'react';
import { ArrowLeft, MessageSquare, Heart } from 'lucide-react';

interface SavedJob {
  id: string;
  title: string;
  postedDate: string;
  budget: string;
  duration: string;
  description: string;
  rating: number;
  spent: string;
  isVerified: boolean;
  freelancersNeeded?: number;
}

const savedJobs: SavedJob[] = [
  {
    id: '1',
    title: 'Software developer',
    postedDate: 'Posted 4 quarters ago',
    budget: 'Fixed price - Intermediate - Est. budget: $10000.00',
    duration: '',
    description: 'About Us: Handsinfotech is a leading healthcare technology company dedicated to delivering innovative solutions. Our flagship product, Sigma Health Pro, is a state-of-the-art healthcare platform designed to optimize clinical operations, enhance patient care, and streamline healthcare processes. Job Overview: We are seeking a skilled and detail-oriented Technical Writer to join our dynamic...',
    rating: 4.9,
    spent: '$40K+',
    isVerified: true
  },
  {
    id: '2',
    title: 'Technical Researcher needed to research and document Workflow Engines, Libraries and Platforms',
    postedDate: 'Posted 3 years ago',
    budget: 'Hourly: $10.00 - $20.00 - Intermediate - Est. time: Less than 1 month, Less than 30 hrs/week',
    duration: '',
    description: 'Hi, I need a researcher and technical person to research a range of "workflow" and "automation" platforms, libraries and engines and write up brief summary of each finding with screenshots. For example, (link removed), (link removed), (link removed), (link removed) I will schedule an interview with shortlisted applicants to further discuss and define the scope and requirements of the job. The idea...',
    rating: 5.0,
    spent: '$40K+',
    isVerified: true
  },
  {
    id: '3',
    title: 'Python expert needed',
    postedDate: 'Posted 3 years ago',
    budget: 'Hourly: $20.00 - $45.00 - Intermediate - Est. time: Less than 1 month, Hours to be determined',
    duration: '',
    description: 'I need python language expert.................., ......',
    rating: 4.6,
    spent: '$6K+',
    isVerified: false,
    freelancersNeeded: 3
  }
];

export default function SavedJobsPage({ onReturnToSearch }: { onReturnToSearch: () => void }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button 
        onClick={onReturnToSearch}
        className="flex items-center text-green-500 hover:text-green-400 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        return to search
      </button>

      {savedJobs.map((job) => (
        <div key={job.id} className="mb-8">
          <div className="text-gray-400 mb-2">Job is no longer available</div>
          <div className="text-gray-500 text-sm mb-2">{job.postedDate}</div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl text-white">{job.title}</h2>
              <div className="flex space-x-2">
                <button className="p-2 hover:bg-gray-700 rounded-full">
                  <MessageSquare className="w-5 h-5 text-gray-400" />
                </button>
                <button className="p-2 hover:bg-gray-700 rounded-full">
                  <Heart className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2 mb-4">
              {job.isVerified && (
                <>
                  <div className="flex items-center space-x-1">
                    <span className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                    <span className="text-gray-400">Payment verified</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`text-sm ${i < Math.floor(job.rating) ? 'text-yellow-400' : 'text-gray-600'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-gray-400">{job.rating}</span>
                  </div>
                  <span className="text-gray-400">{job.spent} spent</span>
                </>
              )}
            </div>

            <div className="text-gray-400 mb-4">{job.budget}</div>
            <p className="text-gray-300 mb-4">{job.description}</p>
            
            {job.freelancersNeeded && (
              <div className="text-gray-400">
                Number of freelancers needed: {job.freelancersNeeded}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}