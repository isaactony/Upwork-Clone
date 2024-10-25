import { Briefcase, Clock, Star, DollarSign, Award } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 border-r border-gray-700 p-4 space-y-6 rounded-lg">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-200">Category</h2>
        <div className="space-y-2">
          {['Web Development', 'Design', 'Writing', 'Admin Support', 'Customer Service'].map((category) => (
            <label key={category} className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-600 bg-gray-700 text-green-500 focus:ring-green-500 focus:ring-offset-gray-900" />
              <span className="text-gray-300">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-200">Experience Level</h2>
        <div className="space-y-2">
          {['Entry Level', 'Intermediate', 'Expert'].map((level) => (
            <label key={level} className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-600 bg-gray-700 text-green-500 focus:ring-green-500 focus:ring-offset-gray-900" />
              <span className="text-gray-300">{level}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-200">Job Type</h2>
        <div className="space-y-2">
          {['Hourly', 'Fixed-Price'].map((type) => (
            <label key={type} className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-600 bg-gray-700 text-green-500 focus:ring-green-500 focus:ring-offset-gray-900" />
              <span className="text-gray-300">{type}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}