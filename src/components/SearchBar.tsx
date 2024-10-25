import { Search, SlidersHorizontal } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="bg-gray-800 border-b border-gray-700 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search for jobs"
              className="block w-full pl-10 pr-3 py-2 bg-gray-900 border border-gray-700 rounded-md leading-5 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-700 text-sm font-medium rounded-md text-gray-300 bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-offset-gray-900">
            <SlidersHorizontal className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>
      </div>
    </div>
  );
}