import React, { useState } from 'react';
import { BRAND_CONFIG, BRAND_IMAGES, VERIFIED_SERVICES } from '../data/brandData';
import { ServiceItem } from '../types';
import { InlineQuoteSection } from '../components/InlineQuoteSection';
import { 
  Wrench, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Check, 
  Phone, 
  Calculator, 
  ArrowRight
} from 'lucide-react';

export const PlumbingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Interactive Service Cost & Scope Estimator
  const [calcService, setCalcService] = useState<string>(VERIFIED_SERVICES[0].title);
  const [calcPropertyType, setCalcPropertyType] = useState<'Single Family' | 'Commercial' | 'Multi-Family'>('Single Family');
  const [calcUrgency, setCalcUrgency] = useState<'Standard' | 'Emergency 24/7'>('Standard');
  const [calcEstimatedHours, setCalcEstimatedHours] = useState<number>(3);

  const filteredServices = selectedCategory === 'All'
    ? VERIFIED_SERVICES
    : VERIFIED_SERVICES.filter(s => s.category === selectedCategory);

  const handleEstimateCalculate = (service: string, prop: string, urgency: string) => {
    let base = 2;
    if (service.includes('Tankless')) base = 4;
    if (service.includes('Commercial')) base = 6;
    if (service.includes('Manifold') || service.includes('Repiping')) base = 5;
    if (urgency.includes('Emergency')) base += 1;
    if (prop === 'Commercial') base += 2;
    setCalcEstimatedHours(base);
  };

  const handleScrollToQuote = (serviceName?: string) => {
    const el = document.getElementById('quote-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 pt-20 sm:pt-24">
      {/* =========================================================================
          PLUMBING EDITORIAL HERO — DEEP INDUSTRIAL ARCHITECTURAL CONTRAST
      ========================================================================== */}
      <section className="relative py-20 sm:py-28 border-b border-zinc-800 bg-[#0a0f1d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-400 font-mono">
                <MapPin className="w-3.5 h-3.5" />
                <span>Dallas-Fort Worth Service Division</span>
                <span aria-hidden="true">·</span>
                <span>Texas Master Craftsmanship</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white font-display leading-[0.96]">
                PRECISION PLUMBING.{' '}
                <span className="text-sky-400">UNCOMPROMISING STANDARDS.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
                Commercial and residential installations engineered to outlast the competition. Clean solder lines, balanced pressure manifolds, and non-destructive optical diagnostics across North Texas.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleScrollToQuote()}
                  className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-950 bg-white hover:bg-slate-100 rounded-xs transition-colors flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Request Dallas Dispatch</span>
                  <ArrowRight className="w-4 h-4 text-sky-600" />
                </button>

                <a
                  href="tel:2145550199"
                  className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-xs flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>Call (214) 555-0199</span>
                </a>
              </div>
            </div>

            {/* Workmanship Feature Photo */}
            <div className="lg:col-span-5">
              <div className="border-2 border-zinc-950 bg-white shadow-lg overflow-hidden">
                <img
                  src={BRAND_IMAGES.craftsmanship}
                  alt="Aquaflex Plumbing Manifold Precision"
                  className="w-full h-[360px] object-cover"
                />
                <div className="p-4 bg-zinc-950 text-white flex justify-between items-center text-xs font-mono">
                  <span>Custom Copper &amp; PEX Manifold</span>
                  <span className="text-sky-400 font-bold">100% IPC Code Compliant</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICE CATALOG WITH EDITORIAL FILTER
      ========================================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-zinc-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 font-mono">
              Verified Capabilities
            </span>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-zinc-950 font-display">
              Commercial &amp; Residential Services
            </h2>
          </div>

          {/* Clean Segmented Filter (No Pills) */}
          <div className="flex items-center gap-1 p-1 bg-zinc-100 border border-zinc-300 rounded-xs self-start">
            {['All', 'Residential', 'Specialty', 'Commercial'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-zinc-950 text-white shadow-xs'
                    : 'text-zinc-600 hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services List (Clean Editorial Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white border border-zinc-200 flex flex-col group hover:border-zinc-950 transition-colors"
            >
              <div className="relative aspect-video bg-zinc-100 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white text-zinc-950 text-[10px] font-mono font-bold px-2 py-0.5 border border-zinc-300">
                  {service.category} · {service.badgeText}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-display uppercase tracking-tight text-zinc-950">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed font-sans">
                    {service.fullDesc}
                  </p>
                </div>

                <div className="pt-2 border-t border-zinc-200 space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 font-mono">
                    Specifications:
                  </div>
                  {service.specs.map((spec, i) => (
                    <div key={i} className="text-xs text-zinc-700 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleScrollToQuote(service.title)}
                  className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-zinc-950 hover:bg-zinc-800 transition-colors text-center cursor-pointer"
                >
                  Request Dispatch For This
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE DALLAS ESTIMATOR (NO POPUPS)
      ========================================================================== */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-600 font-mono">
                <Calculator className="w-4 h-4" />
                <span>Transparent Scope Planning</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-zinc-950 font-display">
                DISPATCH SCOPE &amp; TIME ESTIMATOR
              </h2>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Zero surprise pricing. Configure your service requirements below to review estimated diagnostic and execution hours prior to dispatch.
              </p>

              <div className="pt-2 space-y-3">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-zinc-900 uppercase">Texas Licensed Oversight</h4>
                    <p className="text-xs text-zinc-500">Master Plumber supervision on every commercial and residential ticket.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-zinc-900 uppercase">Guaranteed 2-Hour Window</h4>
                    <p className="text-xs text-zinc-500">Live technician tracking and SMS alert before arriving at your property.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Estimator Box */}
            <div className="lg:col-span-7 bg-white border border-zinc-200 p-6 sm:p-8 shadow-xs space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-800 mb-1.5">
                    Target Specialty
                  </label>
                  <select
                    value={calcService}
                    onChange={(e) => {
                      setCalcService(e.target.value);
                      handleEstimateCalculate(e.target.value, calcPropertyType, calcUrgency);
                    }}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-zinc-300 text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-950"
                  >
                    {VERIFIED_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-800 mb-1.5">
                    Property Type
                  </label>
                  <select
                    value={calcPropertyType}
                    onChange={(e) => {
                      const val = e.target.value as any;
                      setCalcPropertyType(val);
                      handleEstimateCalculate(calcService, val, calcUrgency);
                    }}
                    className="w-full px-3.5 py-2.5 text-xs bg-white border border-zinc-300 text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-950"
                  >
                    <option value="Single Family">Single Family Residence</option>
                    <option value="Commercial">Commercial Facility</option>
                    <option value="Multi-Family">Multi-Family / Townhome</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-zinc-800 mb-1.5">
                  Priority
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setCalcUrgency('Standard');
                      handleEstimateCalculate(calcService, calcPropertyType, 'Standard');
                    }}
                    className={`py-2 px-3 text-xs font-bold uppercase border text-center transition-colors cursor-pointer ${
                      calcUrgency === 'Standard'
                        ? 'bg-zinc-950 text-white border-zinc-950'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-zinc-300'
                    }`}
                  >
                    Standard (2-3 Days)
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setCalcUrgency('Emergency 24/7');
                      handleEstimateCalculate(calcService, calcPropertyType, 'Emergency 24/7');
                    }}
                    className={`py-2 px-3 text-xs font-bold uppercase border text-center transition-colors cursor-pointer ${
                      calcUrgency === 'Emergency 24/7'
                        ? 'bg-red-600 text-white border-red-600'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-zinc-300'
                    }`}
                  >
                    Emergency (Immediate)
                  </button>
                </div>
              </div>

              <div className="p-4 bg-zinc-100 border border-zinc-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold text-zinc-600 font-mono">
                    Estimated Time Commitment:
                  </span>
                  <span className="text-xl font-extrabold font-display text-zinc-950 tabular-nums">
                    {calcEstimatedHours} - {calcEstimatedHours + 2} Hours
                  </span>
                </div>
                <p className="text-xs text-zinc-500">
                  Comprehensive testing, isolation valve inspection, and guaranteed line-item quote prior to touching any wrenches.
                </p>
              </div>

              <button
                onClick={() => handleScrollToQuote(calcService)}
                className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-zinc-950 hover:bg-zinc-800 rounded-xs transition-colors cursor-pointer"
              >
                Proceed to Booking Form
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          DALLAS-FORT WORTH METRO COVERAGE STRIP
      ========================================================================== */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600 font-mono">
            Local Service Area
          </span>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-zinc-950 font-display">
            SERVING GREATER DALLAS-FORT WORTH
          </h2>
          <p className="text-sm text-zinc-600">
            Dedicated mobile trucks equipped with complete commercial and residential inventory.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {BRAND_CONFIG.dallasCoverage.map((city) => (
            <div
              key={city}
              className="p-4 bg-white border border-zinc-200 text-center space-y-1 hover:border-zinc-950 transition-colors"
            >
              <MapPin className="w-4 h-4 text-sky-600 mx-auto" />
              <div className="text-sm font-bold text-zinc-950 font-display uppercase">{city}</div>
              <div className="text-[11px] text-zinc-400 font-mono">Texas Zone</div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          INLINE BOOKING / DISPATCH SECTION (NO POPUPS)
      ========================================================================== */}
      <InlineQuoteSection id="quote-section" />
    </div>
  );
};
