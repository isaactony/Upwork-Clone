import React from 'react';

interface StatsProps {
  label: string;
  value: string;
  sublabel: string;
}

function StatItem({ label, value, sublabel }: StatsProps) {
  return (
    <div>
      <div className="text-sm text-gray-400">{label}</div>
      <div className="text-xl font-bold text-white mt-1">{value}</div>
      <div className="text-xs text-gray-500">{sublabel}</div>
    </div>
  );
}

export default function ProfileStats() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">Back-End Development</h2>
        <div className="grid grid-cols-2 gap-4">
          <StatItem label="Earnings" value="$20K+" sublabel="" />
          <StatItem label="Jobs" value="4" sublabel="" />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-white mb-4">All stats</h2>
        <div className="grid grid-cols-3 gap-4">
          <StatItem label="Total earnings" value="$90K+" sublabel="" />
          <StatItem label="Total jobs" value="31" sublabel="" />
          <StatItem label="Total hours" value="4,311" sublabel="" />
        </div>
      </div>
    </div>
  );
}