import React from 'react';

interface TimeEntry {
  id: string;
  project: string;
  hours: string[];
  rate: string;
  totalHours: string;
  amount: string;
}

const timeEntries: TimeEntry[] = [
  {
    id: '1',
    project: 'Spring Boot Microservices Development',
    hours: ['6:20', '7:00', '4:30', '5:00', '-'],
    rate: '$40.00/hr',
    totalHours: '22.50',
    amount: '$900.00'
  },
  {
    id: '2',
    project: 'Java Backend API Development',
    hours: ['-', '-', '-', '-', '-'],
    rate: '$45.00/hr',
    totalHours: '0:00',
    amount: '$0.00'
  }
];

export default function FinancePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">Overview</h1>
      
      <div className="grid grid-cols-4 gap-4 mb-12">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-sm font-medium text-gray-400 mb-2">Work in progress</h3>
          <p className="text-2xl font-bold text-white">$900.00</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-sm font-medium text-gray-400 mb-2">In review</h3>
          <p className="text-2xl font-bold text-white">$0.00</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-sm font-medium text-gray-400 mb-2">Pending</h3>
          <p className="text-2xl font-bold text-white">$250.00</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-sm font-medium text-gray-400 mb-2">Available</h3>
          <p className="text-2xl font-bold text-white">$0.00</p>
          <p className="text-sm text-gray-400 mt-1">Last payment: $1,200.00</p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">Timesheet for Oct 21 - 27 (this week)</h2>
          <button className="text-green-500 hover:text-green-400">
            When will I get paid?
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-700">
                <th className="pb-3">Contract</th>
                <th className="pb-3">Mon</th>
                <th className="pb-3">Tue</th>
                <th className="pb-3">Wed</th>
                <th className="pb-3">Thu</th>
                <th className="pb-3">Fri</th>
                <th className="pb-3">Hours</th>
                <th className="pb-3">Rate</th>
                <th className="pb-3">Amount</th>
              </tr>
            </thead>
            <tbody>
              {timeEntries.map((entry) => (
                <tr key={entry.id} className="border-b border-gray-700">
                  <td className="py-4">
                    <a href="#" className="text-green-500 hover:text-green-400">
                      {entry.project}
                    </a>
                  </td>
                  {entry.hours.map((hours, index) => (
                    <td key={index} className="py-4 text-gray-300">
                      {hours}
                    </td>
                  ))}
                  <td className="py-4 text-gray-300">{entry.totalHours}</td>
                  <td className="py-4 text-gray-300">{entry.rate}</td>
                  <td className="py-4 text-gray-300">{entry.amount}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="text-gray-300">
                <td colSpan={6} className="py-4 text-right font-medium">Total:</td>
                <td className="py-4">22.50</td>
                <td className="py-4"></td>
                <td className="py-4 font-medium">$900.00</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <p className="text-sm text-gray-400 mt-6">
          Note: this report is updated every hour.
        </p>
      </div>
    </div>
  );
}