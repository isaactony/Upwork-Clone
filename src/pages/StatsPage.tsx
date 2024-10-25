import React from 'react';
import StatsOverview from '../components/stats/StatsOverview';
import StatsJobSuccess from '../components/stats/StatsJobSuccess';
import StatsProfileMetrics from '../components/stats/StatsProfileMetrics';
import StatsClientRelationships from '../components/stats/StatsClientRelationships';
import StatsConnects from '../components/stats/StatsConnects';
import StatsTopRated from '../components/stats/StatsTopRated';

export default function StatsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-white mb-6">My stats</h1>
      <p className="text-gray-400 mb-2">View proposal history, earnings, profile analytics, and your Job Success Score.</p>
      <p className="text-sm text-gray-500 mb-8">Stats are not updated in real-time and may take up to 24 hours to reflect recent activity.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatsOverview />
        <StatsJobSuccess />
        <StatsProfileMetrics />
        <StatsClientRelationships />
        <StatsConnects />
        <StatsTopRated />
      </div>
    </div>
  );
}