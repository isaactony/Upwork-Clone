import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function MessageDetails() {
  return (
    <div className="w-80 border-l border-gray-800">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white text-lg">
            MT
          </div>
          <button className="text-gray-400 hover:text-white">×</button>
        </div>

        <h2 className="text-white font-medium mb-1">Marcus Thompson</h2>
        <p className="text-gray-400 text-sm mb-4">Senior Technical Recruiter</p>
        <p className="text-gray-500 text-sm mb-4">9:40 AM EDT (2 h ahead)</p>

        <button className="text-green-500 hover:text-green-400 text-sm mb-6">
          View job posting
        </button>

        <div className="space-y-4">
          <div>
            <button className="w-full flex items-center justify-between text-white p-2 hover:bg-gray-800 rounded">
              <span>Activity timeline</span>
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
          <div>
            <button className="w-full flex items-center justify-between text-white p-2 hover:bg-gray-800 rounded">
              <span>Search messages</span>
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
          <div>
            <button className="w-full flex items-center justify-between text-white p-2 hover:bg-gray-800 rounded">
              <span>Client profile</span>
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
          <div>
            <button className="w-full flex items-center justify-between text-white p-2 hover:bg-gray-800 rounded">
              <span>People</span>
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}