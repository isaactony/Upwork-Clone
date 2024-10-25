import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface ChatPreview {
  id: string;
  name: string;
  avatar: string;
  title: string;
  preview: string;
  date: string;
  isActive?: boolean;
}

const chatPreviews: ChatPreview[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    avatar: 'SC',
    title: 'Technical Documentation Proj...',
    preview: 'You: Thanks for the detailed...',
    date: 'Yesterday'
  },
  {
    id: '2',
    name: 'Marcus Thompson',
    avatar: 'MT',
    title: 'Frontend Developer Position...',
    preview: 'You: I appreciate the offer...',
    date: 'Yesterday',
    isActive: true
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    avatar: 'ER',
    title: 'Content Strategy Project...',
    preview: 'Elena: Looking forward to...',
    date: '2d ago'
  }
];

export default function MessageSidebar() {
  return (
    <div className="w-80 border-r border-gray-800">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-white mb-4">Messages</h1>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search messages"
            className="w-full bg-gray-800 text-gray-200 pl-10 pr-4 py-2 rounded-full border border-gray-700 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
          <button className="absolute right-3 top-2.5">
            <SlidersHorizontal className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="overflow-y-auto">
        {chatPreviews.map((chat) => (
          <div
            key={chat.id}
            className={`p-4 hover:bg-gray-800 cursor-pointer ${
              chat.isActive ? 'bg-green-600' : ''
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white">
                {chat.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between">
                  <p className="text-sm font-medium text-white truncate">
                    {chat.name}
                  </p>
                  <p className="text-sm text-gray-500">{chat.date}</p>
                </div>
                <p className="text-sm text-gray-400 truncate">{chat.title}</p>
                <p className="text-sm text-gray-500 truncate">{chat.preview}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}