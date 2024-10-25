import React from 'react';
import { Info } from 'lucide-react';

interface TimeEntry {
  project: string;
  hours: number[];
  rate: number;
  totalHours: number;
  amount: number;
}

const timeEntries: TimeEntry[] = [
  {
    project: "Cloud Infrastructure Documentation Project",
    hours: [6.2, 7.0, 4.3, 5.0, 0],
    rate: 35.00,
    totalHours: 22.50,
    amount: 787.50
  },
  {
    project: "API Documentation Framework Setup",
    hours: [0, 0, 0, 0, 0],
    rate: 30.00,
    totalHours: 0.00,
    amount: 0.00
  },
  {
    project: "DevOps Documentation Platform",
    hours: [0, 0, 0, 0, 0],
    rate: 40.00,
    totalHours: 0.00,
    amount: 0.00
  }
];

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const dates = ['10/21', '10/22', '10/23', '10/24', '10/25', '10/26', '10/27'];

export default function FinanceOverviewPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Overview</h1>

      <div className="grid grid-cols-4 gap-6 mb-12">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-green-500">Work in progress</span>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-white">$787.50</div>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-gray-400">In review</span>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-white">$700.00</div>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-gray-400">Pending</span>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-white">$2045.30</div>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-gray-400">Available</span>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <div className="text-2xl font-bold text-white">$390.00</div>
          <div className="text-sm text-gray-500">Last payment: $2892.45</div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-xl font-semibold text-white">Timesheet for Oct 21 - 27 (this week)</h2>
            <span className="text-gray-400">in progress</span>
          </div>
          <button className="text-green-500 hover:text-green-400">
            When will I get paid?
          </button>
        </div>

        <div className="mb-4 text-gray-400 text-sm">
          This timesheet includes 0:00 hrs manual time <Info className="inline-block w-4 h-4 ml-1" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-4 text-gray-400 font-medium">Contract</th>
                {days.map((day, i) => (
                  <th key={day} className={`pb-4 text-gray-400 font-medium ${i >= 5 ? 'text-gray-600' : ''}`}>
                    {day}<br/>{dates[i]}
                  </th>
                ))}
                <th className="pb-4 text-gray-400 font-medium">Hours</th>
                <th className="pb-4 text-gray-400 font-medium">Rate</th>
                <th className="pb-4 text-gray-400 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {timeEntries.map((entry, index) => (
                <tr key={index} className="border-t border-gray-700">
                  <td className="py-4 pr-4">
                    <a href="#" className="text-green-500 hover:text-green-400">
                      {entry.project}
                    </a>
                  </td>
                  {entry.hours.map((hours, i) => (
                    <td key={i} className={`py-4 ${hours > 0 ? 'text-green-500' : ''}`}>
                      {hours > 0 ? hours.toFixed(1) : '—'}
                    </td>
                  ))}
                  <td className="py-4">{entry.totalHours.toFixed(2)}</td>
                  <td className="py-4">${entry.rate.toFixed(2)}/hr</td>
                  <td className="py-4">${entry.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-gray-700 font-medium text-white">
                <td className="py-4">Total</td>
                <td className="py-4">6.2</td>
                <td className="py-4">7.0</td>
                <td className="py-4">4.3</td>
                <td className="py-4">5.0</td>
                <td className="py-4">—</td>
                <td className="py-4">—</td>
                <td className="py-4">—</td>
                <td className="py-4">22.50</td>
                <td className="py-4">$35.00 ⌀</td>
                <td className="py-4">$787.50</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="mt-4 text-sm text-gray-500">
          Note: this report is updated every hour.
        </div>
      </div>
    </div>
  );
}