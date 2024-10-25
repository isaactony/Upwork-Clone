import React from 'react';
import { Info } from 'lucide-react';

export default function StatsJobSuccess() {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-semibold text-white">Job Success Score</h2>
          <Info className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-300 text-sm">
          Keep up the great work. Use Job Success insights to maintain and build upon your top-tier score.
        </p>
      </div>

      <div className="flex items-center justify-center mb-4">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#2563EB"
              strokeWidth="3"
              strokeDasharray="100, 100"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">100%</span>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="text-white font-medium mb-1">Excellent</div>
        <div className="text-gray-400 text-sm">As of Oct 25, updates daily</div>
      </div>

      <button className="mt-4 w-full py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-600">
        View insights
      </button>
    </div>
  );
}