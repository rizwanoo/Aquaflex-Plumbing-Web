import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { PageId } from '../types';
import { BRAND_CONFIG } from '../data/brandData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onJumpToQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onJumpToQuote
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'plumbing', label: 'Plumbing' },
    { id: 'journey', label: 'Our Story' },
    { id: 'reset', label: 'RESET Community' }
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // When at the top of Home page (which has cinematic dark hero), navbar is transparent with light text
  // On other pages or when scrolled, it adapts
  const isTransparentHero = !scrolled && currentPage === 'home';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isTransparentHero
          ? 'bg-gradient-to-b from-black/60 via-black/25 to-transparent py-5 sm:py-6 border-b border-white/10'
          : 'bg-white/95 backdrop-blur-md border-b border-zinc-200/90 shadow-sm py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-4 w-full">
          
          {/* Zone 1: Single element brand mark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none shrink-0 cursor-pointer"
            aria-label="Aquaflex Plumbing Home"
          >
            <BrandLogo size="md" variant={isTransparentHero ? 'light' : 'dark'} />
          </button>

          {/* Zone 2: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-semibold tracking-normal">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 transition-all duration-200 whitespace-nowrap cursor-pointer text-xs uppercase tracking-wider ${
                    isActive
                      ? isTransparentHero ? 'text-sky-400 font-bold' : 'text-sky-600 font-bold'
                      : isTransparentHero
                        ? 'text-slate-200 hover:text-white font-medium'
                        : 'text-zinc-700 hover:text-black font-medium'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                      isTransparentHero ? 'bg-sky-400' : 'bg-sky-600'
                    }`} />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Exactly 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={onJumpToQuote}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider active:scale-95 transition-all rounded-xs shadow-sm flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                isTransparentHero
                  ? 'text-zinc-950 bg-white hover:bg-slate-100 shadow-lg shadow-black/20'
                  : 'text-white bg-zinc-950 hover:bg-zinc-800'
              }`}
            >
              <span>Get a Quote</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isTransparentHero ? 'text-sky-600' : 'text-sky-400'}`} />
            </button>
          </div>

          {/* Mobile hamburger button: Zero overflow, clean right alignment */}
          <div className="flex md:hidden items-center shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 -mr-1 rounded-xs border transition-colors cursor-pointer ${
                isTransparentHero
                  ? 'text-white border-white/20 bg-black/40 hover:bg-black/60'
                  : 'text-zinc-900 border-zinc-200 bg-zinc-50 hover:bg-zinc-100'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-zinc-900 border-b border-zinc-200 px-6 py-6 shadow-2xl w-full animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-base font-bold py-2 transition-colors cursor-pointer ${
                  currentPage === item.id
                    ? 'text-sky-600 pl-3 border-l-2 border-sky-600'
                    : 'text-zinc-800 hover:text-black'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-5 mt-4 border-t border-zinc-200 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onJumpToQuote();
              }}
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-zinc-950 hover:bg-zinc-800 rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Request Plumbing Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
            </button>

            <a
              href={BRAND_CONFIG.messengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-xs transition-colors block"
            >
              DM &quot;RESET&quot; on Messenger
            </a>
          </div>

          <div className="text-[11px] text-zinc-500 pt-3 flex items-center justify-between border-t border-zinc-100 mt-3 font-mono">
            <span>Dallas, Texas · Licensed Craft</span>
            <span>20K+ Tradesmen</span>
          </div>
        </div>
      )}
    </header>
  );
};
