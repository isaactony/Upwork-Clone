import React, { useState } from 'react';
import { Search, Bell, MessageSquare, HelpCircle, LayoutGrid, ExternalLink, User, TrendingUp, CreditCard, Coins, Settings, Moon, LogOut } from 'lucide-react';
import Dropdown from './Dropdown';
import SearchDropdown from './SearchDropdown';

interface NavbarProps {
  onMessagesClick: () => void;
  onProfileClick: () => void;
  onStatsClick: () => void;
  onHomeClick: () => void;
  onFinanceClick: () => void;
  onProposalsClick: () => void;
  onContractsClick: () => void;
  onSavedJobsClick: () => void;
}

const findWorkDropdown = {
  sections: [
    {
      items: [
        { label: 'Saved jobs', onClick: 'savedJobs' },
        { label: 'Proposals and offers', onClick: 'proposals' }
      ]
    },
    {
      title: 'Reach more clients',
      items: [
        { label: 'Your services' },
        { label: 'Promote with ads', hasExternalIcon: true },
        { label: 'Direct Contracts' }
      ]
    }
  ]
};

const deliverWorkDropdown = {
  sections: [
    {
      items: [
        { label: 'Your active contracts', onClick: 'contracts' },
        { label: 'Contract history' },
        { label: 'Hourly work diary' }
      ]
    }
  ]
};

const manageFinancesDropdown = {
  sections: [
    {
      items: [
        { label: 'Financial overview', onClick: 'finance' },
        { label: 'Your reports' },
        { label: 'Billings and earnings' },
        { label: 'Transactions and invoices' },
        { label: 'Certificate of earnings', hasExternalIcon: true }
      ]
    }
  ]
};

const profileDropdown = {
  sections: [
    {
      items: [
        {
          label: 'Isaac Tony',
          description: 'Freelancer',
          isProfile: true,
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        }
      ]
    },
    {
      items: [
        {
          label: 'Online for messages',
          isToggle: true
        }
      ]
    },
    {
      items: [
        { label: 'Your profile', icon: User, onClick: 'profile' },
        { label: 'Stats and trends', icon: TrendingUp, onClick: 'stats' },
        { label: 'Membership plan', icon: CreditCard },
        { label: 'Connects', icon: Coins },
        { label: 'Theme: Dark', icon: Moon, hasSubmenu: true },
        { label: 'Account settings', icon: Settings }
      ]
    },
    {
      items: [
        { label: 'Log out', icon: LogOut }
      ]
    }
  ]
};

export default function Navbar({
  onMessagesClick,
  onProfileClick,
  onStatsClick,
  onHomeClick,
  onFinanceClick,
  onProposalsClick,
  onContractsClick,
  onSavedJobsClick
}: NavbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleItemClick = (action?: string) => {
    if (!action) return;
    
    switch (action) {
      case 'profile':
        onProfileClick();
        break;
      case 'stats':
        onStatsClick();
        break;
      case 'finance':
        onFinanceClick();
        break;
      case 'proposals':
        onProposalsClick();
        break;
      case 'contracts':
        onContractsClick();
        break;
      case 'savedJobs':
        onSavedJobsClick();
        break;
    }
    setActiveDropdown(null);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 
              className="text-2xl font-bold text-white cursor-pointer" 
              onClick={onHomeClick}
            >
              upwork
            </h1>
            
            <div className="hidden md:flex items-center space-x-1">
              <div className="relative">
                <button 
                  className="px-3 py-2 text-green-500 hover:text-green-400 flex items-center"
                  onClick={() => handleDropdownToggle('findWork')}
                >
                  Find work
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <Dropdown 
                  sections={findWorkDropdown.sections}
                  isOpen={activeDropdown === 'findWork'}
                  onItemClick={handleItemClick}
                />
              </div>
              
              <div className="relative">
                <button 
                  className="px-3 py-2 text-gray-300 hover:text-white flex items-center"
                  onClick={() => handleDropdownToggle('deliverWork')}
                >
                  Deliver work
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <Dropdown 
                  sections={deliverWorkDropdown.sections}
                  isOpen={activeDropdown === 'deliverWork'}
                  onItemClick={handleItemClick}
                />
              </div>
              
              <div className="relative">
                <button 
                  className="px-3 py-2 text-gray-300 hover:text-white flex items-center"
                  onClick={() => handleDropdownToggle('manageFinances')}
                >
                  Manage finances
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <Dropdown 
                  sections={manageFinancesDropdown.sections}
                  isOpen={activeDropdown === 'manageFinances'}
                  onItemClick={handleItemClick}
                />
              </div>
              
              <button 
                className="px-3 py-2 text-gray-300 hover:text-white"
                onClick={onMessagesClick}
              >
                Messages
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="w-64 pl-10 pr-4 py-1.5 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                onFocus={() => setIsSearchDropdownOpen(true)}
                onBlur={() => setIsSearchDropdownOpen(false)}
              />
              <SearchDropdown isOpen={isSearchDropdownOpen} />
            </div>
            
            <button className="text-gray-300 hover:text-white p-2">
              <HelpCircle className="h-5 w-5" />
            </button>
            
            <button className="text-gray-300 hover:text-white p-2">
              <LayoutGrid className="h-5 w-5" />
            </button>
            
            <button className="text-gray-300 hover:text-white p-2">
              <Bell className="h-5 w-5" />
            </button>
            
            <div className="relative">
              <button 
                className="flex items-center"
                onClick={() => handleDropdownToggle('profile')}
              >
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
              </button>
              <Dropdown 
                sections={profileDropdown.sections}
                isOpen={activeDropdown === 'profile'}
                className="right-0 w-72"
                onItemClick={handleItemClick}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}