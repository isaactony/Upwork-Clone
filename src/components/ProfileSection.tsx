import React from 'react';
import { ChevronDown, ChevronUp, Edit, HelpCircle } from 'lucide-react';

export default function ProfileSection() {
  return (
    <div className="w-80 space-y-4">
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center space-x-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold text-white">Isaac T.</h2>
            <p className="text-gray-400">Technical Writer | Us...</p>
          </div>
        </div>

        <a href="#" className="mt-4 block text-green-500 hover:text-green-400">
          Complete your profile
        </a>
        <div className="mt-2 bg-gray-700 rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full w-full"></div>
        </div>
        <span className="text-gray-400 text-sm">100%</span>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">Promote with ads</h3>
          <ChevronUp className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-white">Availability badge</h3>
          <Edit className="w-5 h-5 text-green-500" />
        </div>
        <p className="text-green-500">On</p>

        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-white">Boost your profile</h3>
          <Edit className="w-5 h-5 text-green-500" />
        </div>
        <p className="text-green-500">On</p>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">Connects: 16</h3>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">Consultations</h3>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">Preferences</h3>
          <ChevronUp className="w-5 h-5 text-gray-400" />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-white">Online for a consultation now</span>
              <HelpCircle className="w-4 h-4 text-gray-400" />
            </div>
            <Edit className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-gray-400">Off</p>

          <div className="flex items-center justify-between">
            <span className="text-white">Hours per week</span>
            <Edit className="w-5 h-5 text-green-500" />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-white">More than 30 hrs/week</span>
            <Edit className="w-5 h-5 text-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
}