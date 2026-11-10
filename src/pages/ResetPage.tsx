import React, { useState } from 'react';
import { BRAND_CONFIG, BRAND_IMAGES, RESET_PILLARS } from '../data/brandData';
import { InlineMediaShowcase } from '../components/InlineMediaShowcase';
import { 
  Flame, 
  MessageSquare, 
  Check, 
  HeartPulse, 
  ShieldAlert, 
  Sparkles,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ResetPage: React.FC = () => {
  // Interactive Tradesman Readiness Assessment (Inline, No Popups)
  const [selectedTrade, setSelectedTrade] = useState('Plumber');
  const [selectedChallenge, setSelectedChallenge] = useState('Chronic Back & Joint Pain');
  const [waterIntake, setWaterIntake] = useState('Under 1/2 Gallon');
  const [assessmentSubmitted, setAssessmentSubmitted] = useState(false);

  const handleAssessmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAssessmentSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 55,
      origin: { y: 0.6 },
      colors: ['#0284c7', '#0ea5e9', '#dc2626', '#09090b']
    });
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 pt-20 sm:pt-24">
      {/* =========================================================================
          RESET EDITORIAL HERO — HIGH-CONTRAST ATHLETIC POWER
      ========================================================================== */}
      <section className="relative py-20 sm:py-28 border-b border-zinc-800 bg-[#090d16] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-400 font-mono">
                <span>The Blue-Collar Brotherhood</span>
                <span aria-hidden="true">·</span>
                <span>20,000+ Strong</span>
                <span aria-hidden="true">·</span>
                <span>Dallas, Texas</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white font-display leading-[0.96]">
                RESET YOUR BODY.{' '}
                <span className="text-sky-400">RESET YOUR MIND.</span>{' '}
                LEVEL UP YOUR LIFE.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
                Blue-collar work is demanding on your skeleton and nervous system. The RESET philosophy rejects the toxic lie that tradesmen must break down, live on painkillers, or burn out before forty.
              </p>

              {/* Crucial CTA: DM "RESET" */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={BRAND_CONFIG.messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-zinc-950 bg-sky-400 hover:bg-sky-300 rounded-xs shadow-lg shadow-sky-500/25 flex items-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-current text-zinc-950" />
                  <span>DM &quot;RESET&quot; ON FACEBOOK MESSENGER</span>
                </a>

                <a
                  href={BRAND_CONFIG.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-xs flex items-center gap-2 transition-all"
                >
                  <span>Visit Facebook Page (20K)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: Authentic Owner Image Showcase */}
            <div className="lg:col-span-5">
              <div className="border-2 border-zinc-950 bg-white shadow-xl overflow-hidden">
                <img
                  src={BRAND_IMAGES.owner}
                  alt="Aqua Flex Founder in Dallas Gym"
                  className="w-full h-auto object-cover max-h-[580px]"
                />
                <div className="p-4 bg-zinc-950 text-white flex justify-between items-center text-xs font-mono">
                  <span>Founder &amp; Mentor</span>
                  <span className="text-sky-400 font-bold">DM &quot;RESET&quot;</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          THE REALITY: WHY TRADESMEN BREAK DOWN BY 35
      ========================================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-zinc-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 font-mono">
              <ShieldAlert className="w-4 h-4 text-red-600" />
              <span>The Industry Reality</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-zinc-950 font-display">
              WHY TRADESMEN BREAK DOWN BEFORE 40
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans">
              We carry 80-pound pipe, crawl through attics in 120°F Texas heat, and lift heavy boilers. Yet most guys run on two monster energy drinks, a gas station burrito, and four hours of broken sleep.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 bg-zinc-50 border border-zinc-200 flex items-start gap-3">
                <HeartPulse className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 uppercase">Lumbar Compression &amp; Joint Atrophy</h4>
                  <p className="text-xs text-zinc-500">Repetitive bending creates anterior pelvic tilt and severe sciatica if posterior chains are neglected.</p>
                </div>
              </div>

              <div className="p-4 bg-zinc-50 border border-zinc-200 flex items-start gap-3">
                <Flame className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 uppercase">The 2:00 PM Gas Station Energy Crash</h4>
                  <p className="text-xs text-zinc-500">Synthetic caffeine and sugar burn out adrenal glands, leaving zero energy for your wife and kids at home.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="border border-zinc-300 bg-zinc-100 p-8 space-y-4">
              <div className="text-xs font-mono uppercase text-sky-700 font-bold">
                The Core RESET Belief
              </div>
              <blockquote className="text-xl font-bold font-display uppercase tracking-tight text-zinc-950 leading-snug">
                &quot;DISCIPLINE IS DOING WHAT NEEDS TO BE DONE, EVEN WHEN YOU ARE EXHAUSTED FROM 10 HOURS RUNNING PIPE.&quot;
              </blockquote>
              <p className="text-xs text-zinc-600 leading-relaxed">
                When you take ownership of your physical health, you don&apos;t just prolong your trade career—you earn the respect of your apprentices and set an unbreakable standard for your family.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          THE 5 PILLARS OF R.E.S.E.T.
      ========================================================================== */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 font-mono">
              The Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-zinc-950 font-display">
              THE 5 PILLARS OF R.E.S.E.T.
            </h2>
            <p className="text-sm text-zinc-600">
              Developed by a licensed plumber for working tradesmen. No fluff, no fake promises.
            </p>
          </div>

          <div className="space-y-6">
            {RESET_PILLARS.map((pillar) => (
              <div
                key={pillar.letter + pillar.title}
                className="bg-white border border-zinc-200 p-6 sm:p-8 hover:border-zinc-950 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Pillar Letter */}
                  <div className="lg:col-span-2 flex items-center">
                    <div className="w-16 h-16 bg-zinc-950 text-sky-400 font-display text-4xl font-extrabold flex items-center justify-center shrink-0">
                      {pillar.letter}
                    </div>
                  </div>

                  {/* Title & Body */}
                  <div className="lg:col-span-6 space-y-1">
                    <h3 className="text-xl font-bold font-display uppercase tracking-tight text-zinc-950">
                      {pillar.title}
                    </h3>
                    <div className="text-xs font-bold uppercase tracking-wider text-sky-700 font-mono">
                      {pillar.subtitle}
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pt-2">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Specific Action Protocols */}
                  <div className="lg:col-span-4 bg-zinc-50 border border-zinc-200 p-4 space-y-2 self-stretch flex flex-col justify-center">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 font-mono">
                      Daily Protocols:
                    </div>
                    <ul className="space-y-1.5">
                      {pillar.tactics.map((tactic, i) => (
                        <li key={i} className="text-xs text-zinc-800 flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                          <span>{tactic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE TRADESMAN READINESS ASSESSMENT (INLINE, ZERO POPUPS)
      ========================================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-zinc-200">
        <div className="bg-white border border-zinc-200 p-6 sm:p-12 shadow-xs">
          <div className="max-w-2xl mx-auto text-center space-y-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 font-mono">
              Self-Assessment
            </span>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-zinc-950 font-display">
              TRADESMAN READINESS &amp; PRIORITY TARGET
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600">
              Select your trade and primary physical friction point to generate your immediate daily RESET priority.
            </p>
          </div>

          {assessmentSubmitted ? (
            <div className="max-w-xl mx-auto bg-zinc-50 border border-zinc-300 p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold font-display uppercase tracking-tight text-zinc-950">
                Action Blueprint Generated for {selectedTrade}s
              </h3>

              <div className="text-left text-xs text-zinc-800 space-y-2 bg-white p-4 border border-zinc-200">
                <div className="flex justify-between border-b border-zinc-200 pb-1.5">
                  <span className="text-zinc-500">Target Area:</span>
                  <span className="font-bold text-zinc-950">{selectedChallenge}</span>
                </div>
                <div className="flex justify-between border-b border-zinc-200 pb-1.5">
                  <span className="text-zinc-500">Daily Priority:</span>
                  <span className="font-bold text-sky-700">10-min Morning Thoracic Opener + 1 Gal Water</span>
                </div>
                <p className="text-zinc-600 pt-1 leading-relaxed">
                  Connect with the owner directly. Use the official code <strong className="text-zinc-950 font-mono">DM &quot;RESET&quot;</strong> on Messenger to receive the complete jobsite mobility checklist.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={BRAND_CONFIG.messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-zinc-950 hover:bg-zinc-800 rounded-xs flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-sky-400 fill-current" />
                  <span>DM &quot;RESET&quot; on Messenger</span>
                </a>

                <button
                  onClick={() => setAssessmentSubmitted(false)}
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-zinc-700 bg-zinc-200 hover:bg-zinc-300 rounded-xs"
                >
                  Retake Assessment
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleAssessmentSubmit} className="max-w-xl mx-auto space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-zinc-800 mb-1">
                  What is Your Primary Trade?
                </label>
                <select
                  value={selectedTrade}
                  onChange={(e) => setSelectedTrade(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-zinc-300 text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-950"
                >
                  <option value="Plumber">Plumber (Residential / Commercial)</option>
                  <option value="Electrician">Electrician / Wireman</option>
                  <option value="HVAC Tech">HVAC Technician</option>
                  <option value="Carpenter">Carpenter / Framer</option>
                  <option value="Welder">Welder / Fabricator</option>
                  <option value="General Tradesman">General Tradesman / Contractor</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-zinc-800 mb-1">
                  What is Your Biggest Physical Roadblock?
                </label>
                <select
                  value={selectedChallenge}
                  onChange={(e) => setSelectedChallenge(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-zinc-300 text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-950"
                >
                  <option value="Chronic Back & Joint Pain">Chronic Lower Back &amp; Knees Hurting</option>
                  <option value="Gas Station Diet & Low Energy">Living on Fast Food &amp; Energy Drink Crashes</option>
                  <option value="Lack of Morning Discipline">Waking Up Stiff &amp; Rushed Every Morning</option>
                  <option value="Exhaustion & Brain Fog">Zero Energy Left for Family After Work</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-zinc-800 mb-1">
                  Daily Water Consumption on Jobsite
                </label>
                <select
                  value={waterIntake}
                  onChange={(e) => setWaterIntake(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-white border border-zinc-300 text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-950"
                >
                  <option value="Under 1/2 Gallon">Under 1/2 Gallon (Mostly Coffee/Soda)</option>
                  <option value="Around 1/2 Gallon">Around 1/2 Gallon</option>
                  <option value="1 Gallon+ With Electrolytes">1 Gallon+ With Essential Electrolytes</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-zinc-950 hover:bg-zinc-800 rounded-xs transition-colors cursor-pointer"
              >
                Generate My RESET Action Target
              </button>
            </form>
          )}
        </div>
      </section>

      {/* =========================================================================
          INLINE MEDIA STREAM (NO POPUPS)
      ========================================================================== */}
      <InlineMediaShowcase
        title="THE RESET VIDEO VAULT (@homieplumbing)"
        subtitle="Practical tradesman routines, meal prep tips for your work truck cooler, and no-excuses mindset training."
      />
    </div>
  );
};
