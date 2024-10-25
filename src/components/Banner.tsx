import React from 'react';

export default function Banner() {
  return (
    <div className="bg-green-600 rounded-2xl mx-4 sm:mx-6 lg:mx-8 my-6">
      <div className="max-w-7xl mx-auto px-8 py-12 relative overflow-hidden">
        <div className="max-w-2xl">
          <p className="text-white/90 text-lg mb-2">
            Upwork 101 will guide you through the basics of our platform.
          </p>
          <h2 className="text-white text-4xl font-bold mb-8">
            Learn how to get started on Upwork
          </h2>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Explore Upwork 101
          </button>
        </div>
        
        <div className="absolute right-0 bottom-0 transform translate-y-8">
          <img
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=300&h=300"
            alt="Person with laptop"
            className="w-64 h-64 object-cover transform -scale-x-100"
          />
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-16 h-1.5 bg-white rounded-full opacity-100"></div>
          <div className="w-4 h-1.5 bg-white/50 rounded-full"></div>
          <div className="w-4 h-1.5 bg-white/50 rounded-full"></div>
          <div className="w-4 h-1.5 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}