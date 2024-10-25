import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function StatsProfileMetrics() {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold text-white">Profile metrics</h2>
          <span className="text-gray-400 text-sm">3 days ago</span>
        </div>
        <button className="flex items-center space-x-2 text-white bg-gray-700 px-3 py-1.5 rounded-md">
          <span>Last 7 days</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <div className="flex space-x-4 mb-6">
        <button className="text-green-500 border-b-2 border-green-500 pb-2">Profile views</button>
        <button className="text-gray-400 hover:text-white pb-2">Invites</button>
        <button className="text-gray-400 hover:text-white pb-2">Impressions and clicks</button>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white mb-4">5 profile views</h3>
        <div className="h-48 relative">
          {/* Graph placeholder */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-500/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-green-500"></div>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-teal-400"></div>
          <span className="text-gray-300">Available now badge is off</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-gray-300">Available now badge is on</span>
        </div>
      </div>
    </div>
  );
}