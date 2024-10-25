import React from 'react';
import { Star, Plus, Edit } from 'lucide-react';

interface WorkItem {
  title: string;
  period: string;
  rating?: number;
  review?: string;
  price: string;
  priceType: string;
  noFeedback?: boolean;
}

const workHistory: WorkItem[] = [
  {
    title: 'Django localization guide blogpost',
    period: 'Dec 13, 2022 - Jan 9, 2023',
    rating: 5,
    review: 'Isaac delivered the tutorial on time and as instructed with screenshots as well as a dummy app to showcase the before and after. Great results.',
    price: '$300.00',
    priceType: 'Fixed price'
  },
  {
    title: 'Programming How-To Style Article Writers Needed',
    period: 'Dec 11, 2021 - Oct 18, 2022',
    noFeedback: true,
    price: '$715.00',
    priceType: 'Fixed price'
  },
  {
    title: 'Native English developers wanted for content writing',
    period: 'Jun 30, 2022 - Aug 1, 2022',
    rating: 5,
    review: 'We had several projects with Isaac. He always delivers high-quality content on time, and his communication is excellent. I highly recommend working with him!',
    price: '$500.00',
    priceType: 'Fixed price'
  }
];

export default function ProfileWorkHistory() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl font-semibold text-white">Work history</h2>
          <button className="p-1 hover:bg-gray-700 rounded-full">
            <Plus className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        <button>
          <Edit className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <div>
        <h3 className="text-green-500 mb-4">Completed jobs (4)</h3>
        <div className="space-y-8">
          {workHistory.map((work, index) => (
            <div key={index} className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-green-500 hover:text-green-400 cursor-pointer">{work.title}</h4>
                  <p className="text-gray-500 text-sm mt-1">{work.period}</p>
                  {work.rating && (
                    <div className="flex items-center space-x-2 mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < work.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                          />
                        ))}
                      </div>
                      <span className="text-white">{work.rating}.00</span>
                    </div>
                  )}
                  {work.review && (
                    <p className="text-gray-300 mt-2">"{work.review}"</p>
                  )}
                  {work.noFeedback && (
                    <p className="text-gray-500 mt-2">No feedback given</p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-gray-300">{work.price}</p>
                  <p className="text-gray-500 text-sm">{work.priceType}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}