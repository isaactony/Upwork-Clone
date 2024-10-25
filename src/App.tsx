import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MessagesPage from './pages/MessagesPage';
import ProfilePage from './pages/ProfilePage';
import StatsPage from './pages/StatsPage';
import FinancePage from './pages/FinancePage';
import ProposalsPage from './pages/ProposalsPage';
import ActiveContractsPage from './pages/ActiveContractsPage';
import SavedJobsPage from './pages/SavedJobsPage';

type Page = 'home' | 'messages' | 'profile' | 'stats' | 'finance' | 'proposals' | 'contracts' | 'savedJobs';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'messages':
        return <MessagesPage />;
      case 'profile':
        return <ProfilePage />;
      case 'stats':
        return <StatsPage />;
      case 'finance':
        return <FinancePage />;
      case 'proposals':
        return <ProposalsPage />;
      case 'contracts':
        return <ActiveContractsPage />;
      case 'savedJobs':
        return <SavedJobsPage onReturnToSearch={() => setCurrentPage('home')} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar 
        onMessagesClick={() => setCurrentPage('messages')}
        onProfileClick={() => setCurrentPage('profile')}
        onStatsClick={() => setCurrentPage('stats')}
        onHomeClick={() => setCurrentPage('home')}
        onFinanceClick={() => setCurrentPage('finance')}
        onProposalsClick={() => setCurrentPage('proposals')}
        onContractsClick={() => setCurrentPage('contracts')}
        onSavedJobsClick={() => setCurrentPage('savedJobs')}
      />
      {renderPage()}
    </div>
  );
}