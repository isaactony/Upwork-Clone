import React from 'react';
import { Search, MoreHorizontal } from 'lucide-react';

interface Contract {
  title: string;
  client: string;
  company: string;
  period: string;
  status: 'Active' | 'Paused';
  hours: string;
  amount: string;
  rate: string;
  weeklyLimit: string;
}

const contracts: Contract[] = [
  {
    title: 'Spring Boot Microservices Architecture Development',
    client: 'David Chen',
    company: 'TechFlow Systems',
    period: 'Sep 23 - Present',
    status: 'Active',
    hours: '22:50 hrs',
    amount: '$900.00',
    rate: '$40.00/hr',
    weeklyLimit: '30 hrs weekly limit'
  },
  {
    title: 'Kafka Event-Driven System Implementation',
    client: 'Sarah Miller',
    company: 'DataStream Solutions',
    period: 'Sep 11 - Present',
    status: 'Active',
    hours: '0:00 hrs',
    amount: '$1000.00',
    rate: '$45.00/hr',
    weeklyLimit: '20 hrs weekly limit'
  },
  {
    title: 'Java Enterprise Application Development',
    client: 'Michael Roberts',
    company: 'Enterprise Tech',
    period: 'Aug 7 - Present',
    status: 'Active',
    hours: '0:00 hrs',
    amount: '$20000.00',
    rate: '$42.00/hr',
    weeklyLimit: '25 hrs weekly limit'
  }
];

export default function ActiveContractsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-white mb-4">My jobs</h1>
      
      <div className="flex items-center space-x-2 mb-8">
        <h2 className="text-xl text-white">Earnings available now:</h2>
        <span className="text-xl text-green-500">$900.00</span>
        <button className="text-gray-400 hover:text-white">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Active contracts</h2>
        <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search contracts"
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>

        <div className="flex space-x-6 border-b border-gray-700 mb-6">
          <button className="text-green-500 border-b-2 border-green-500 pb-4">All</button>
          <button className="text-gray-400 hover:text-white pb-4">Hourly (3)</button>
          <button className="text-gray-400 hover:text-white pb-4">Active Milestones (4)</button>
          <button className="text-gray-400 hover:text-white pb-4">Awaiting Milestones (3)</button>
          <button className="text-gray-400 hover:text-white pb-4">Payment Requests (1)</button>
        </div>

        <div className="space-y-6">
          {contracts.map((contract, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl text-green-500 hover:text-green-400 cursor-pointer mb-2">
                    {contract.title}
                  </h3>
                  <div className="text-gray-400">
                    Hired by {contract.client}
                  </div>
                  <div className="text-gray-400">
                    {contract.company}
                  </div>
                  <div className="text-gray-500 text-sm mt-2">
                    {contract.period}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="px-4 py-2 text-green-500 hover:text-green-400 border border-gray-700 rounded-lg">
                    See timesheet
                  </button>
                  <button className="text-gray-400 hover:text-white">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                  {contract.status}
                </span>
                <span className="text-white">
                  {contract.hours}, {contract.amount} this week
                </span>
              </div>

              <div className="text-gray-400">
                Rate: {contract.rate}, {contract.weeklyLimit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}