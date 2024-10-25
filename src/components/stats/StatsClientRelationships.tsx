import React from 'react';
import { Info } from 'lucide-react';

export default function StatsClientRelationships() {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">Client relationships</h2>
        <Info className="w-5 h-5 text-gray-400" />
      </div>

      <p className="text-gray-300 text-sm mb-6">
        Client relationships longer than 90 days can positively impact your Job Success Score.
      </p>

      <div className="flex items-center justify-center mb-6">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#2563EB"
              strokeWidth="3"
              strokeDasharray="80, 100"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">80%</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-gray-300">More than 90 days</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-teal-400"></div>
          <span className="text-gray-300">Less than 90 days</span>
        </div>
      </div>

      <button className="mt-4 text-green-500 hover:text-green-400 text-sm">
        Explore how it works
      </button>
    </div>
  );
}