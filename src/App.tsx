import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PlumbingPage } from './pages/PlumbingPage';
import { JourneyPage } from './pages/JourneyPage';
import { ResetPage } from './pages/ResetPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Sync document title with current page
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'Aquaflex Plumbing | Built in the Trades, Transformed by Discipline',
      plumbing: 'Dallas Master Plumbing Services | Aquaflex Plumbing',
      journey: 'Our Story & Transformation | Aquaflex Plumbing',
      reset: 'The RESET Movement for Tradesmen | Aquaflex Plumbing'
    };
    document.title = titles[currentPage] || 'Aquaflex Plumbing';
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleJumpToQuote = () => {
    if (currentPage === 'home' || currentPage === 'plumbing') {
      const el = document.getElementById('quote-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    // Switch to home and scroll to quote
    setCurrentPage('home');
    setTimeout(() => {
      const el = document.getElementById('quote-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-sky-500 selection:text-white w-full overflow-x-hidden">
      {/* 1-Row, 3-Zone Sticky Navigation Bar (Bright, Editorial, No Overflow) */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onJumpToQuote={handleJumpToQuote}
      />

      {/* Main Page Content (Bright, Editorial, No Popups) */}
      <main className="flex-1 w-full overflow-x-hidden">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onJumpToQuote={handleJumpToQuote}
          />
        )}

        {currentPage === 'plumbing' && (
          <PlumbingPage />
        )}

        {currentPage === 'journey' && (
          <JourneyPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'reset' && (
          <ResetPage />
        )}
      </main>

      {/* Quiet Editorial Footer */}
      <Footer
        onNavigate={handleNavigate}
        onJumpToQuote={handleJumpToQuote}
      />
    </div>
  );
}
