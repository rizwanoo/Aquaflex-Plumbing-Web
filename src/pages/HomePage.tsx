import React from 'react';
import { PageId } from '../types';
import { BRAND_CONFIG, BRAND_IMAGES, VERIFIED_SERVICES } from '../data/brandData';
import { InlineMediaShowcase } from '../components/InlineMediaShowcase';
import { InlineQuoteSection } from '../components/InlineQuoteSection';
import { 
  ArrowRight, 
  Wrench, 
  Dumbbell, 
  MapPin, 
  MessageSquare, 
  ShieldCheck,
  ChevronRight,
  Flame,
  Check,
  Award
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onJumpToQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onJumpToQuote
}) => {
  return (
    <div className="min-h-screen bg-white text-zinc-900 w-full overflow-x-hidden">
      
      {/* =========================================================================
          1. CINEMATIC HERO SECTION
          Full-bleed visual extending completely behind the transparent navbar.
          Natural lighting, bold oversized typography, and authentic owner presence.
      ========================================================================== */}
      <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 lg:py-32">
        {/* Full-bleed background imagery with subtle directional vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src={BRAND_IMAGES.hero}
            alt="Aquaflex Plumbing Master Trade Craft Dallas"
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.12] transition-transform duration-1000 ease-out"
          />
          {/* Subtle directional gradient overlay only where needed for text contrast, leaving right side natural */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Bold Typography & Core Triad Message */}
            <div className="lg:col-span-7 space-y-6 text-white">
              
              {/* Unboxed Kicker */}
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-400 font-mono">
                <MapPin className="w-3.5 h-3.5" />
                <span>Dallas, Texas</span>
                <span aria-hidden="true">·</span>
                <span>Licensed Master Plumber</span>
                <span aria-hidden="true">·</span>
                <span>20K+ Community</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white font-display leading-[0.93] text-balance">
                BUILT IN THE TRADES.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-cyan-200">
                  TRANSFORMED BY DISCIPLINE.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans max-w-xl">
                Real trade experience. A stronger mindset. Helping the next generation of tradesmen level up.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onNavigate('plumbing')}
                  className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-zinc-950 bg-white hover:bg-slate-100 active:scale-95 transition-all rounded-xs shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Plumbing Services</span>
                  <ArrowRight className="w-4 h-4 text-sky-600" />
                </button>

                <button
                  onClick={() => onNavigate('reset')}
                  className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-500 active:scale-95 transition-all rounded-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-sky-600/30"
                >
                  <span>Start Your RESET</span>
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Metrics Bar */}
              <div className="pt-6 grid grid-cols-3 gap-6 border-t border-white/15 max-w-lg">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold font-display text-white tabular-nums tracking-tight block">
                    {BRAND_CONFIG.communityFollowers}
                  </span>
                  <span className="text-[11px] text-slate-300 uppercase tracking-wider font-mono">Tradesmen Audience</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold font-display text-white tabular-nums tracking-tight block">
                    100%
                  </span>
                  <span className="text-[11px] text-slate-300 uppercase tracking-wider font-mono">Texas Licensed</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold font-display text-sky-400 tabular-nums tracking-tight block">
                    DM RESET
                  </span>
                  <span className="text-[11px] text-slate-300 uppercase tracking-wider font-mono">Community CTA</span>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Owner Photograph Showcased As-Is */}
            <div className="lg:col-span-5 relative">
              <div className="relative border-2 border-white/20 bg-black/60 shadow-2xl overflow-hidden backdrop-blur-xs">
                <img
                  src={BRAND_IMAGES.owner}
                  alt="Aquaflex Plumbing Owner in Dallas Workshop"
                  className="w-full h-auto object-cover max-h-[580px] block"
                />

                {/* Architectural Caption Strip */}
                <div className="bg-zinc-950/90 text-white p-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 font-bold block">
                      Founder · Master Plumber
                    </span>
                    <h3 className="text-sm font-bold font-display uppercase tracking-tight text-white">
                      Aqua Flex Plumbing · Dallas, TX
                    </h3>
                  </div>

                  <div className="text-[11px] font-mono text-zinc-400">
                    Real Trade Craft
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. OWNER SPOTLIGHT & EDITORIAL PHILOSOPHY (WARM CRISP OFF-WHITE SECTION)
          Provides strong visual rhythm against the cinematic hero above!
      ========================================================================== */}
      <section className="py-24 bg-[#faf9f6] border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-700 font-mono">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>The Voice Behind Aquaflex</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-zinc-950 font-display">
                &quot;LICENSED PLUMBER TURNED CONTENT CREATOR.&quot;
              </h2>

              <blockquote className="text-lg text-zinc-800 leading-relaxed italic border-l-4 border-sky-600 pl-4 py-1">
                &quot;Came up in the trades, transformed my body and mindset, now I help other tradesmen do the same.&quot;
              </blockquote>

              <p className="text-base text-zinc-600 leading-relaxed font-sans">
                Years spent in Texas crawlspaces and muddy commercial trenches taught me the unmatched value of hard work. But it also showed me the reality: working 60-hour weeks without physical discipline breaks down the strongest men by age thirty-five.
              </p>

              <p className="text-base text-zinc-600 leading-relaxed font-sans">
                Aquaflex Plumbing brings together two uncompromising standards: delivering commercial and residential master plumbing that lasts decades, and empowering blue-collar tradesmen to reclaim their health, joint longevity, and mental edge.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('journey')}
                  className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-zinc-950 hover:bg-zinc-800 rounded-xs transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                </button>

                <button
                  onClick={() => onNavigate('reset')}
                  className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-900 bg-white hover:bg-zinc-100 border border-zinc-300 rounded-xs transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>The RESET Movement</span>
                </button>
              </div>
            </div>

            {/* Split Editorial Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 bg-white border border-zinc-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-zinc-950 font-bold text-sm uppercase font-display">
                  <Wrench className="w-4 h-4 text-sky-600" />
                  <span>01. The Plumbing Standard</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Clean soldered copper manifolds, high-efficiency tankless water heaters, and optical sewer diagnostics. Built to strict Texas plumbing codes with zero shortcuts.
                </p>
              </div>

              <div className="p-6 bg-white border border-zinc-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-zinc-950 font-bold text-sm uppercase font-display">
                  <Dumbbell className="w-4 h-4 text-red-600" />
                  <span>02. The RESET Brotherhood</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Daily 4:30 AM physical conditioning, spinal decompression for tradesmen, ditching convenience store junk food, and building bulletproof longevity.
                </p>
              </div>

              <div className="p-6 bg-white border border-zinc-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-zinc-950 font-bold text-sm uppercase font-display">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <span>03. The Creator Voice</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Over 20,000 tradesmen following on YouTube (@homieplumbing) and Facebook. Real discussions from the jobsite without fluff or corporate scripts.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          3. MASTER PLUMBING CRAFTSMANSHIP (DEEP INDUSTRIAL NAVY/CHARCOAL SECTION)
          Creates powerful visual pacing and showcases the precision of the trade!
      ========================================================================== */}
      <section className="py-24 bg-[#0a0f1d] text-white border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400 font-mono">
                Dallas Metroplex Service Business
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white font-display">
                MASTER WORKMANSHIP. ZERO SHORTCUTS.
              </h2>
              <p className="text-sm text-slate-400">
                Precision installations and diagnostics engineered for commercial and high-end residential applications across North Texas.
              </p>
            </div>

            <button
              onClick={() => onNavigate('plumbing')}
              className="text-xs font-bold uppercase tracking-wider text-sky-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors cursor-pointer self-start md:self-end"
            >
              <span>Explore All Plumbing Services</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Asymmetric Technical Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VERIFIED_SERVICES.slice(0, 3).map((service, idx) => (
              <div
                key={service.id}
                className="bg-[#101728] border border-slate-800 flex flex-col group hover:border-sky-500/60 transition-colors"
              >
                {/* Media Image */}
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 filter brightness-95"
                  />
                  <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-xs text-sky-300 text-[10px] font-mono font-bold px-2.5 py-1 border border-slate-700">
                    0{idx + 1} · {service.badgeText}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-display uppercase tracking-tight text-white group-hover:text-sky-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800 space-y-1.5">
                    {service.specs.slice(0, 2).map((spec, i) => (
                      <div key={i} className="text-xs text-slate-300 flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onJumpToQuote}
                    className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-slate-200 bg-slate-900 hover:bg-sky-500 hover:text-black border border-slate-700 transition-colors text-center cursor-pointer"
                  >
                    Request Quote for This
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick DFW Direct Banner */}
          <div className="mt-12 p-8 bg-[#121a2d] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl font-bold font-display text-white uppercase">
                Serving Dallas Metro, Fort Worth, Plano, Frisco &amp; Irving
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Direct Master Technician dispatch with transparent upfront scope pricing.
              </p>
            </div>

            <button
              onClick={onJumpToQuote}
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-sky-400 hover:bg-sky-300 rounded-xs transition-colors shrink-0 cursor-pointer shadow-md"
            >
              Request Plumbing Dispatch
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. INLINE CREATOR MEDIA STREAM (@homieplumbing) — CRISP LIGHT GALLERY
      ========================================================================== */}
      <InlineMediaShowcase
        title="CREATOR STREAM &amp; TRADES INSIGHTS"
        subtitle="Watch real jobsite rough-ins, tool reviews, and the no-excuses mindset that built a 20,000+ tradesmen audience on YouTube &amp; Facebook."
      />

      {/* =========================================================================
          5. RESET COMMUNITY PROMOTION — HIGH-CONTRAST ATHLETIC SECTION
      ========================================================================== */}
      <section className="py-24 bg-zinc-950 text-white border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-400 font-mono">
              The Blue-Collar Revolution
            </span>

            <h2 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white font-display text-balance">
              RESET YOUR BODY.{' '}
              <span className="text-sky-400">RESET YOUR MIND.</span>{' '}
              LEVEL UP YOUR LIFE.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-sans">
              Stop letting joint wear, exhaustion, and bad habits rob you of your strength. Connect directly with the owner and join thousands of plumbers, electricians, and tradesmen leveling up.
            </p>

            {/* Preserving the exact requested brand CTA: DM "RESET" */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={BRAND_CONFIG.messengerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-zinc-950 bg-sky-400 hover:bg-sky-300 transition-all rounded-xs shadow-lg flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>DM &quot;RESET&quot; ON MESSENGER</span>
              </a>

              <button
                onClick={() => onNavigate('reset')}
                className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore The 5 Pillars</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </button>
            </div>

            <div className="pt-4 text-xs text-zinc-400 flex items-center justify-center gap-4 font-mono">
              <span>Authentic Trade Brotherhood</span>
              <span aria-hidden="true">·</span>
              <span>Direct Owner Access</span>
              <span aria-hidden="true">·</span>
              <span>Zero Artificial Gimmicks</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. INLINE SERVICE DISPATCH & QUOTE REQUEST — CLEAN ARCHITECTURAL SECTION
      ========================================================================== */}
      <InlineQuoteSection id="quote-section" />
    </div>
  );
};
