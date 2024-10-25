import React from 'react';
import { Briefcase, Users, FolderOpen } from 'lucide-react';

interface SearchDropdownProps {
  isOpen: boolean;
}

export default function SearchDropdown({ isOpen }: SearchDropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 mt-2 w-72 bg-gray-900 rounded-lg shadow-lg border border-gray-800 overflow-hidden z-50">
      <div className="p-2">
        <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-800 rounded-lg group">
          <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700">
            <Briefcase className="w-5 h-5 text-gray-400" />
          </div>
          <div>
            <div className="text-white font-medium">Jobs</div>
            <div className="text-sm text-gray-400">Apply to jobs posted by clients</div>
          </div>
        </button>

        <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-800 rounded-lg group">
          <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700">
            <Users className="w-5 h-5 text-gray-400" />
          </div>
          <div>
            <div className="text-white font-medium">Talent</div>
            <div className="text-sm text-gray-400">Find freelancers and agencies</div>
          </div>
        </button>

        <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-800 rounded-lg group">
          <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-gray-700">
            <FolderOpen className="w-5 h-5 text-gray-400" />
          </div>
          <div>
            <div className="text-white font-medium">Projects</div>
            <div className="text-sm text-gray-400">See projects from other pros</div>
          </div>
        </button>
      </div>
    </div>
  );
}