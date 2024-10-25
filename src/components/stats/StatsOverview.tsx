import React from 'react';

export default function StatsOverview() {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl font-semibold text-white">12-month earnings</h2>
        <button className="text-green-500 hover:text-green-400 text-sm">
          Transaction history
        </button>
      </div>
      <div className="text-3xl font-bold text-white">$38,567</div>
    </div>
  );
}