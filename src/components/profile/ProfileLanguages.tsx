import React from 'react';
import { Plus } from 'lucide-react';

export default function ProfileLanguages() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Languages</h2>
        <button className="p-1 hover:bg-gray-700 rounded-full">
          <Plus className="w-5 h-5 text-green-500" />
        </button>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between">
          <span className="text-white">English:</span>
          <span className="text-gray-400">Native or Bilingual</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white">Swahili:</span>
          <span className="text-gray-400">Native or Bilingual</span>
        </div>
      </div>
    </div>
  );
}