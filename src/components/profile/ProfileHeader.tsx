import React from 'react';
import { MapPin, Clock, Share } from 'lucide-react';

export default function ProfileHeader() {
  return (
    <div className="flex justify-between items-start">
      <div className="flex items-start space-x-6">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-32 h-32 rounded-full"
          />
          <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-4 border-gray-900"></div>
        </div>
        
        <div>
          <div className="flex items-center space-x-3">
            <h1 className="text-3xl font-bold text-white">Isaac T.</h1>
            <div className="flex items-center space-x-2">
              <div className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full text-sm">
                100% Job Success
              </div>
              <div className="bg-purple-500/10 text-purple-400 px-2 py-1 rounded-full text-sm">
                Top Rated Plus
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 mt-2 text-gray-400">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span>Nairobi, Kenya</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>10:04 pm local time</span>
            </div>
          </div>
          
          <div className="mt-4 flex items-center space-x-2">
            <div className="flex items-center text-blue-400">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              Available now
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <button className="px-4 py-2 bg-transparent border border-gray-700 text-gray-300 rounded-full hover:bg-gray-800">
          See public view
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">
          Profile settings
        </button>
        <button className="text-green-500 hover:text-green-400">
          <Share className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}