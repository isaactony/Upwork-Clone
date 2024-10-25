import React from 'react';
import { Edit, Trash2 } from 'lucide-react';

interface Education {
  school: string;
  degree: string;
  period: string;
  details?: string;
}

const educationList: Education[] = [
  {
    school: 'Jomo Kenyatta University of Agriculture and Technology',
    degree: "Master's degree, Computer science",
    period: '2024-2025 (expected)'
  },
  {
    school: 'Moringa School',
    degree: 'Other, Software Engineering',
    period: '2022-2023'
  },
  {
    school: 'Kenyatta University',
    degree: 'Bsc Statistics and programming',
    period: '2016-2020'
  }
];

export default function ProfileEducation() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-white">Education</h2>
      <div className="space-y-6">
        {educationList.map((edu, index) => (
          <div key={index} className="flex justify-between group">
            <div>
              <h3 className="text-white font-medium">{edu.school}</h3>
              <p className="text-gray-400 text-sm">{edu.degree}</p>
              <p className="text-gray-500 text-sm">{edu.period}</p>
              {edu.details && <p className="text-gray-400 text-sm mt-1">{edu.details}</p>}
            </div>
            <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-1 hover:bg-gray-700 rounded-full">
                <Edit className="w-4 h-4 text-gray-400" />
              </button>
              <button className="p-1 hover:bg-gray-700 rounded-full">
                <Trash2 className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}