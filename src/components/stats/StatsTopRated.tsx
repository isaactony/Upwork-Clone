import React from 'react';

export default function StatsTopRated() {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-purple-500/20 p-2 rounded-lg">
          <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-white">Top Rated Plus</h2>
      </div>

      <button className="w-full text-green-500 hover:text-green-400">
        Earn Expert-Vetted
      </button>
    </div>
  );
}