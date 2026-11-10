import React from 'react';
import { BrandLogo } from './BrandLogo';
import { PageId } from '../types';
import { BRAND_CONFIG } from '../data/brandData';
import { Youtube, MessageSquare, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onJumpToQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onJumpToQuote }) => {
  return (
    <footer className="bg-zinc-100 border-t border-zinc-200 text-zinc-700 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-zinc-200">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="md" />
            <p className="text-sm text-zinc-600 leading-relaxed max-w-sm pt-2">
              Licensed plumbing services in Dallas, Texas. Built on the honest grit of the trades, transformed through daily physical and mental discipline.
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-500 pt-1">
              <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Dallas-Fort Worth Metroplex, Texas</span>
              <span aria-hidden="true">·</span>
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Texas Licensed Craft</span>
            </div>
            
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={BRAND_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-zinc-800 hover:text-black bg-white hover:bg-zinc-50 border border-zinc-300 rounded-xs transition-colors"
                aria-label="Aquaflex Plumbing on Facebook"
              >
                <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook (20K Followers)</span>
              </a>

              <a
                href={BRAND_CONFIG.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-zinc-800 hover:text-black bg-white hover:bg-zinc-50 border border-zinc-300 rounded-xs transition-colors"
                aria-label="Homie Plumbing YouTube Channel"
              >
                <Youtube className="w-4 h-4 text-red-600" />
                <span>@homieplumbing</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-950 mb-4 font-display">
              Site Directory
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-sky-600 transition-colors cursor-pointer text-left font-medium"
                >
                  Home Editorial
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('plumbing'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-sky-600 transition-colors cursor-pointer text-left font-medium"
                >
                  Plumbing Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('journey'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-sky-600 transition-colors cursor-pointer text-left font-medium"
                >
                  Our Story &amp; Transformation
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('reset'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-sky-600 transition-colors cursor-pointer text-left font-medium"
                >
                  RESET Community
                </button>
              </li>
            </ul>
          </div>

          {/* Plumbing Specialties */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-950 mb-4 font-display">
              Trade Craft
            </h4>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>High-Efficiency Tankless Systems</li>
              <li>Custom Copper &amp; PEX Manifolds</li>
              <li>Commercial Mechanical Piping</li>
              <li>Fiberoptic Drain &amp; Sewer Scoping</li>
              <li>Acoustic Slab Leak Isolation</li>
              <li>Texas Municipal Code Compliance</li>
            </ul>
          </div>

          {/* Direct CTA */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-950 font-display">
              Direct Inquiries
            </h4>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Need master plumbing in Dallas, or ready to connect with the tradesmen community?
            </p>
            <div className="space-y-2.5">
              <button
                onClick={onJumpToQuote}
                className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-zinc-950 hover:bg-zinc-800 rounded-xs transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Request Dallas Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
              </button>

              <a
                href={BRAND_CONFIG.messengerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-sky-700 hover:text-sky-900 bg-white hover:bg-sky-50 border border-sky-300 rounded-xs transition-all flex items-center justify-center gap-2 text-center"
              >
                <MessageSquare className="w-3.5 h-3.5 text-sky-600" />
                <span>DM &quot;RESET&quot;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quiet Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Aquaflex Plumbing. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>Dallas, Texas</span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span>REAL TRADE EXPERIENCE</span>
            <span aria-hidden="true">·</span>
            <span>REAL DISCIPLINE</span>
            <span aria-hidden="true">·</span>
            <span className="text-sky-600 font-bold">REAL TRANSFORMATION</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
