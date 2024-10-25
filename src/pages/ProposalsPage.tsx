import React from 'react';
import { Info, Zap } from 'lucide-react';

interface Proposal {
  id: string;
  title: string;
  receivedDate: string;
  timeAgo: string;
  category: string;
  isBoostOutbid?: boolean;
  isBoosted?: boolean;
}

const activeProposals: Proposal[] = [
  {
    id: '1',
    title: 'API Development',
    receivedDate: 'Oct 24, 2024',
    timeAgo: 'yesterday',
    category: 'sotware development'
  },
  {
    id: '2',
    title: 'Springboot backend development',
    receivedDate: 'Oct 22, 2024',
    timeAgo: '3 days ago',
    category: 'Backend java development'
  },
  {
    id: '3',
    title: 'Product Manager for App Development',
    receivedDate: 'Oct 4, 2024',
    timeAgo: '3 weeks ago',
    category: 'General Profile'
  },
  {
    id: '4',
    title: 'Developer wwith Experience for RFPs',
    receivedDate: 'Sep 16, 2024',
    timeAgo: 'last month',
    category: 'Technical Writing'
  }
];

const submittedProposals: Proposal[] = [
  {
    id: '5',
    title: 'Documentation update',
    receivedDate: 'Oct 24, 2024',
    timeAgo: 'yesterday',
    category: 'Technical Writing'
  },
  {
    id: '6',
    title: 'Springboot microservice',
    receivedDate: 'Oct 23, 2024',
    timeAgo: '2 days ago',
    category: 'Springboot',
    isBoosted: true
  },
  {
    id: '7',
    title: 'Technical Documentation Specialist',
    receivedDate: 'Oct 20, 2024',
    timeAgo: '5 days ago',
    category: 'Backend development',
    isBoostOutbid: true
  }
];

export default function ProposalsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">My proposals</h1>

      <div className="mb-8">
        <nav className="flex space-x-8 border-b border-gray-700">
          <button className="text-green-500 border-b-2 border-green-500 pb-4 px-1">Active</button>
          <button className="text-gray-400 hover:text-white pb-4 px-1">Referrals</button>
          <button className="text-gray-400 hover:text-white pb-4 px-1">Archived</button>
        </nav>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <h2 className="text-xl font-semibold text-white">Offers (0)</h2>
            <Info className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-semibold text-white">Invitations to interview (0)</h2>
              <Info className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-blue-400">Available now</span>
              <button className="p-1 hover:bg-gray-700 rounded-full">
                <Info className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-6">
            <h2 className="text-xl font-semibold text-white">Active proposals (4)</h2>
            <Info className="w-5 h-5 text-gray-400" />
          </div>

          <div className="space-y-4">
            {activeProposals.map((proposal) => (
              <div key={proposal.id} className="flex justify-between items-start py-4 border-t border-gray-700">
                <div>
                  <div className="text-gray-400 text-sm mb-1">
                    Received {proposal.receivedDate}
                    <span className="text-gray-500 ml-2">({proposal.timeAgo})</span>
                  </div>
                  <a href="#" className="text-green-500 hover:text-green-400 block mb-1">
                    {proposal.title}
                  </a>
                </div>
                <span className="text-gray-400">{proposal.category}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-6">
            <h2 className="text-xl font-semibold text-white">Submitted proposals (8)</h2>
            <Info className="w-5 h-5 text-gray-400" />
          </div>

          <div className="space-y-4">
            {submittedProposals.map((proposal) => (
              <div key={proposal.id} className="flex justify-between items-start py-4 border-t border-gray-700">
                <div>
                  <div className="text-gray-400 text-sm mb-1">
                    Initiated {proposal.receivedDate}
                    <span className="text-gray-500 ml-2">({proposal.timeAgo})</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-1">
                    {proposal.isBoosted && (
                      <span className="flex items-center text-blue-400 text-sm">
                        <Zap className="w-4 h-4 mr-1" />
                        Boosted
                      </span>
                    )}
                    {proposal.isBoostOutbid && (
                      <span className="flex items-center text-yellow-400 text-sm">
                        <Zap className="w-4 h-4 mr-1" />
                        Boost outbid
                      </span>
                    )}
                  </div>
                  <a href="#" className="text-green-500 hover:text-green-400 block">
                    {proposal.title}
                  </a>
                </div>
                <span className="text-gray-400">{proposal.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}