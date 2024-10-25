import React from 'react';

export default function StatsConnects() {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="text-center">
        <div className="text-4xl font-bold text-white mb-2">16</div>
        <div className="text-gray-300 mb-6">Connects left</div>
        <button className="w-full py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-600">
          Buy more
        </button>
      </div>
    </div>
  );
}