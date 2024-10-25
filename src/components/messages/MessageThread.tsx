import React from 'react';
import { MoreHorizontal, Camera, Image, Clock, Smile, Send } from 'lucide-react';

export default function MessageThread() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="border-b border-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white">
              MT
            </div>
            <div>
              <h2 className="text-white font-medium">Marcus Thompson</h2>
              <p className="text-sm text-gray-400">Frontend Developer Position - Senior React Developer</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-800 rounded-full">
              <Camera className="h-5 w-5 text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-full">
              <Image className="h-5 w-5 text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-full">
              <Clock className="h-5 w-5 text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-full">
              <MoreHorizontal className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white text-sm">
            MT
          </div>
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-white font-medium">Marcus Thompson</span>
              <span className="text-gray-500 text-sm">2:23 PM</span>
            </div>
            <div className="bg-gray-800 rounded-lg p-3 text-gray-200">
              Hi there! I noticed your profile and think you'd be a great fit for our frontend developer position. Would you be interested in discussing the opportunity?
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-3 justify-end">
          <div className="flex flex-col space-y-1 items-end">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 text-sm">2:25 PM</span>
              <span className="text-white font-medium">You</span>
            </div>
            <div className="bg-green-600 rounded-lg p-3 text-white">
              Thank you for reaching out! I'd be happy to learn more about the position. Could you share more details about the project and requirements?
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 p-4">
        <div className="flex items-center space-x-2">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full bg-gray-800 text-gray-200 px-4 py-2 rounded-lg border border-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500"
            />
          </div>
          <button className="p-2 hover:bg-gray-800 rounded-full">
            <Smile className="h-5 w-5 text-gray-400" />
          </button>
          <button className="p-2 bg-green-600 hover:bg-green-700 rounded-full">
            <Send className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}