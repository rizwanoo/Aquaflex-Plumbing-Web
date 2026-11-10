import React, { useState } from 'react';
import { PageId } from '../types';
import { BRAND_CONFIG, BRAND_IMAGES, STORY_MILESTONES } from '../data/brandData';
import { InlineMediaShowcase } from '../components/InlineMediaShowcase';
import { 
  Dumbbell, 
  Flame, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare, 
  Quote
} from 'lucide-react';

interface JourneyPageProps {
  onNavigate: (page: PageId) => void;
}

export const JourneyPage: React.FC<JourneyPageProps> = ({ onNavigate }) => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white text-zinc-900 pt-20 sm:pt-24">
      {/* =========================================================================
          JOURNEY HERO — DEEP INDUSTRIAL STORYTELLING SPLIT
      ========================================================================== */}
      <section className="relative py-20 sm:py-28 border-b border-zinc-800 bg-[#0a0f1d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Biography Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-400 font-mono">
                <span>The Authentic Journey</span>
                <span aria-hidden="true">·</span>
                <span>Dallas, Texas</span>
                <span aria-hidden="true">·</span>
                <span>The Tradesmen Standard</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white font-display leading-[0.96]">
                FROM THE TRENCHES TO TRANSFORMATION.
              </h1>

              <blockquote className="text-lg text-slate-200 leading-relaxed italic border-l-4 border-sky-400 pl-4 py-1">
                &quot;Licensed plumber turned content creator. Came up in the trades, transformed my body and mindset, now I help other tradesmen do the same.&quot;
              </blockquote>

              <p className="text-base text-slate-300 leading-relaxed font-sans">
                No corporate biography. Just years of digging muddy trenches in Dallas summer heat, crawling under Pier &amp; Beam foundations, lifting cast iron, and realizing that hard labor without self-discipline will destroy you before your career is half over.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('reset')}
                  className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-950 bg-white hover:bg-slate-100 rounded-xs transition-colors flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Join The RESET Movement</span>
                  <ArrowRight className="w-4 h-4 text-sky-600" />
                </button>

                <a
                  href={BRAND_CONFIG.messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-xs transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-sky-400" />
                  <span>DM &quot;RESET&quot;</span>
                </a>
              </div>
            </div>

            {/* Right: Authentic Owner Image Showcase */}
            <div className="lg:col-span-5">
              <div className="border-2 border-zinc-950 bg-white shadow-xl overflow-hidden">
                <img
                  src={BRAND_IMAGES.owner}
                  alt="Aquaflex Plumbing Owner Transformation"
                  className="w-full h-auto object-cover max-h-[580px]"
                />
                <div className="p-4 bg-zinc-950 text-white flex justify-between items-center text-xs font-mono">
                  <span>Authentic Trade Portrait</span>
                  <span className="text-sky-400 font-bold">Dallas, TX</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          THE 4 CHAPTERS OF TRANSFORMATION (EDITORIAL SPREAD)
      ========================================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-zinc-200">
        <div className="max-w-2xl mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 font-mono">
            Evolution of a Tradesman
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-zinc-950 font-display">
            THE 4 CHAPTERS OF DISCIPLINE
          </h2>
          <p className="text-sm text-zinc-600">
            From physical exhaustion and joint pain to master plumbing craft and national tradesmen leadership.
          </p>
        </div>

        {/* Phase Selector Tabs (Sharp, Light, Responsive) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {STORY_MILESTONES.map((item, idx) => (
            <button
              key={item.year}
              onClick={() => setActivePhaseIndex(idx)}
              className={`p-4 text-left border rounded-xs transition-all cursor-pointer ${
                activePhaseIndex === idx
                  ? 'bg-zinc-950 text-white border-zinc-950 shadow-xs'
                  : 'bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-zinc-400'
              }`}
            >
              <div className={`text-[11px] font-mono font-bold uppercase ${activePhaseIndex === idx ? 'text-sky-400' : 'text-sky-700'}`}>
                {item.year}
              </div>
              <div className="text-xs font-bold uppercase mt-1 truncate">
                {item.phase}
              </div>
            </button>
          ))}
        </div>

        {/* Active Chapter Spotlight */}
        <div className="bg-zinc-50 border border-zinc-200 p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-600 font-mono">
                <Clock className="w-4 h-4" />
                <span>{STORY_MILESTONES[activePhaseIndex].focus}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 font-display uppercase">
                {STORY_MILESTONES[activePhaseIndex].title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans">
                {STORY_MILESTONES[activePhaseIndex].description}
              </p>

              {STORY_MILESTONES[activePhaseIndex].quote && (
                <div className="bg-white border-l-4 border-sky-600 p-4 space-y-1">
                  <div className="flex items-center gap-2 text-sky-700 text-xs font-bold uppercase font-mono">
                    <Quote className="w-3.5 h-3.5" />
                    <span>Direct Quote</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-800 italic leading-relaxed">
                    &quot;{STORY_MILESTONES[activePhaseIndex].quote}&quot;
                  </p>
                </div>
              )}
            </div>

            <div className="lg:col-span-5">
              <div className="border border-zinc-300 bg-white aspect-[4/3] overflow-hidden">
                <img
                  src={
                    activePhaseIndex === 0
                      ? BRAND_IMAGES.jobsite
                      : activePhaseIndex === 1
                      ? BRAND_IMAGES.craftsmanship
                      : activePhaseIndex === 2
                      ? BRAND_IMAGES.owner
                      : BRAND_IMAGES.community
                  }
                  alt={STORY_MILESTONES[activePhaseIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          THE 4 PRINCIPLES OF TRADESMAN LONGEVITY
      ========================================================================== */}
      <section className="py-20 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 font-mono">
              The Code of Discipline
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-zinc-950 font-display">
              HOW TRADESMEN STAY IN THEIR PRIME
            </h2>
            <p className="text-sm text-zinc-600">
              Your body is the primary tool in your truck. If it breaks down, your business and your family suffer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-3">
              <div className="w-10 h-10 bg-zinc-950 text-white flex items-center justify-center font-bold">
                <Flame className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-base font-bold text-zinc-950 font-display uppercase">
                The 4:30 AM Standard
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                Win the battle with yourself before the work truck starts. Train your body and focus your mind before heading to the jobsite so nothing during the day can rattle you.
              </p>
            </div>

            <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-3">
              <div className="w-10 h-10 bg-zinc-950 text-white flex items-center justify-center font-bold">
                <Dumbbell className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-base font-bold text-zinc-950 font-display uppercase">
                Joint Armor &amp; Back Health
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                Reverse repetitive jobsite bending with posterior chain strength (deadlifts, farmer carries, deep thoracic openers) and eliminate chronic lumbar pain.
              </p>
            </div>

            <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-3">
              <div className="w-10 h-10 bg-zinc-950 text-white flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-base font-bold text-zinc-950 font-display uppercase">
                Ditch Gas Station Burritos
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                Energy drinks and processed gas station food guarantee a 2:00 PM crash and chronic inflammation. Pack clean whole foods and mineral electrolytes in your truck cooler.
              </p>
            </div>

            <div className="p-6 bg-zinc-50 border border-zinc-200 space-y-3">
              <div className="w-10 h-10 bg-zinc-950 text-white flex items-center justify-center font-bold">
                <MessageSquare className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-base font-bold text-zinc-950 font-display uppercase">
                Tradesman Brotherhood
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                Connect with plumbers, electricians, carpenters, and roofers across Dallas holding each other accountable to a higher physical and professional standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INLINE MEDIA SHOWCASE (NO POPUPS)
      ========================================================================== */}
      <InlineMediaShowcase
        title="VERIFIED VIDEO STORIES &amp; LESSONS"
        subtitle="Watch the owner break down his morning routine, jobsite tool choices, and tradesman physical protocols."
      />
    </div>
  );
};
