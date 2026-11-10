import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, MapPin, Wrench, ArrowRight, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRAND_CONFIG, VERIFIED_SERVICES } from '../data/brandData';
import { PlumbingInquiry } from '../types';

interface InlineQuoteSectionProps {
  id?: string;
  defaultService?: string;
}

export const InlineQuoteSection: React.FC<InlineQuoteSectionProps> = ({
  id = 'quote-section',
  defaultService
}) => {
  const [formData, setFormData] = useState<PlumbingInquiry>({
    fullName: '',
    phone: '',
    email: '',
    city: 'Dallas',
    serviceType: defaultService || 'High-Efficiency Tankless & Water Systems',
    urgency: 'Within 24 Hours',
    description: '',
    preferredDate: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<PlumbingInquiry | null>(null);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter your full name.';
    }

    const phoneRegex = /^(\+?\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please provide a valid 10-digit phone number (e.g. 214-555-0199).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.description.trim() || formData.description.trim().length < 8) {
      newErrors.description = 'Please describe your plumbing project or problem.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#0284c7', '#0ea5e9', '#dc2626', '#09090b']
      });
    }, 500);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      city: 'Dallas',
      serviceType: 'High-Efficiency Tankless & Water Systems',
      urgency: 'Within 24 Hours',
      description: '',
      preferredDate: ''
    });
    setErrors({});
  };

  return (
    <section id={id} className="py-20 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Service Value */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-600 font-mono">
              <Wrench className="w-4 h-4 text-sky-600" />
              <span>Direct Dallas Plumbing Dispatch</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-zinc-950 font-display leading-[0.98]">
              REQUEST MASTER PLUMBING SERVICE.
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-sans">
              No hidden fees, no subcontracting. You get honest Texas plumbing craftsmanship backed by licensed master standards. Serving the entire Dallas-Fort Worth metroplex.
            </p>

            <div className="pt-2 space-y-3 border-t border-zinc-200">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 uppercase">Licensed Texas Master Oversight</h4>
                  <p className="text-xs text-zinc-500">Every project meets or exceeds International Plumbing Code (IPC).</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 uppercase">Dallas-Fort Worth Metro Coverage</h4>
                  <p className="text-xs text-zinc-500">Fast dispatch to Plano, Frisco, Arlington, Irving, and Dallas proper.</p>
                </div>
              </div>
            </div>

            {/* Direct Call Strip */}
            <div className="p-4 bg-white border border-zinc-200 rounded-xs flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                  Direct Emergency Consultation
                </span>
                <span className="text-base font-bold text-zinc-950 font-display">
                  (214) 555-0199
                </span>
              </div>
              <a
                href="tel:2145550199"
                className="px-4 py-2 text-xs font-bold uppercase text-white bg-zinc-950 hover:bg-zinc-800 rounded-xs flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Dispatch</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Editorial Form */}
          <div className="lg:col-span-7 bg-white border border-zinc-200 p-6 sm:p-10 shadow-xs">
            {submittedData ? (
              <div className="py-6 space-y-6 text-center">
                <div className="w-14 h-14 bg-sky-50 border border-sky-300 rounded-full flex items-center justify-center mx-auto text-sky-600">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-display text-zinc-950 uppercase">
                    Service Request Confirmed
                  </h3>
                  <p className="text-sm text-zinc-600 mt-2 max-w-md mx-auto">
                    Thank you, <strong className="text-zinc-900">{submittedData.fullName}</strong>. Our Dallas technician has received your project details and will call <strong className="text-zinc-900">{submittedData.phone}</strong> shortly.
                  </p>
                </div>

                <div className="bg-zinc-50 border border-zinc-200 p-4 text-left text-xs space-y-2 max-w-md mx-auto">
                  <div className="flex justify-between border-b border-zinc-200 pb-1.5">
                    <span className="text-zinc-500">Service:</span>
                    <span className="font-semibold text-zinc-900">{submittedData.serviceType}</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-200 pb-1.5">
                    <span className="text-zinc-500">Service Area:</span>
                    <span className="font-semibold text-zinc-900">{submittedData.city}, TX</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-200 pb-1.5">
                    <span className="text-zinc-500">Urgency:</span>
                    <span className="font-semibold text-sky-600">{submittedData.urgency}</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-zinc-500 block mb-0.5">Details:</span>
                    <p className="text-zinc-800 italic">{submittedData.description}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-800 bg-zinc-100 hover:bg-zinc-200 rounded-xs transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-zinc-200 pb-3 mb-4">
                  <h3 className="text-xl font-bold font-display text-zinc-950 uppercase">
                    Plumbing Dispatch Form
                  </h3>
                  <p className="text-xs text-zinc-500">
                    Submit your service requirement below for an upfront, guaranteed line-item quote.
                  </p>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-800 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Michael Vance"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-950 ${
                        errors.fullName ? 'border-red-500' : 'border-zinc-300'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-600 mt-1 block font-medium">{errors.fullName}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-800 uppercase mb-1">
                      Dallas Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 214-555-0199"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-950 ${
                        errors.phone ? 'border-red-500' : 'border-zinc-300'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-600 mt-1 block font-medium">{errors.phone}</span>
                    )}
                  </div>
                </div>

                {/* Email & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-800 uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full px-3.5 py-2.5 text-sm bg-white border text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-950 ${
                        errors.email ? 'border-red-500' : 'border-zinc-300'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-600 mt-1 block font-medium">{errors.email}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-800 uppercase mb-1">
                      Service City (Texas)
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-zinc-300 text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-950"
                    >
                      {BRAND_CONFIG.dallasCoverage.map((city) => (
                        <option key={city} value={city}>
                          {city}, TX
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service Type & Urgency */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-zinc-800 uppercase mb-1">
                      Plumbing Specialty
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-zinc-300 text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-950"
                    >
                      {VERIFIED_SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                      <option value="General Inspection">General Inspection / Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-800 uppercase mb-1">
                      Dispatch Priority
                    </label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-zinc-300 text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-950"
                    >
                      <option value="Standard">Standard (Within 2-3 Days)</option>
                      <option value="Within 24 Hours">Within 24 Hours</option>
                      <option value="Emergency Immediate">Critical Emergency (Immediate)</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-bold text-zinc-800 uppercase mb-1">
                    Describe Project / Issue *
                  </label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe what needs repair, installation, or diagnostics..."
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-950 ${
                      errors.description ? 'border-red-500' : 'border-zinc-300'
                    }`}
                  />
                  {errors.description && (
                    <span className="text-[11px] text-red-600 mt-1 block font-medium">{errors.description}</span>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-zinc-500 font-medium">
                    Zero spam · Direct Texas licensed dispatch
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-zinc-950 hover:bg-zinc-800 active:scale-95 transition-all shadow-xs disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Request'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
