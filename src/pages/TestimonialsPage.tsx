import React, { useState } from 'react';
import { PageId, ReviewItem } from '../types';
import { SHOP_INFO, REVIEWS, IMAGES } from '../data/mockData';
import { Star, CheckCircle2, Shield, Clock, Phone, Calendar, ArrowRight, Activity, Send } from 'lucide-react';

interface TestimonialsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenCallModal: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onNavigate, onOpenCallModal }) => {
  const [reviewsList, setReviewsList] = useState<ReviewItem[]>(REVIEWS);
  const [activeFilter, setActiveFilter] = useState<'all' | 'engine' | 'brakes' | 'suspension' | 'fleet'>('all');
  
  // New Review Form State
  const [authorName, setAuthorName] = useState('');
  const [authorVehicle, setAuthorVehicle] = useState('');
  const [ratingScore, setRatingScore] = useState(5);
  const [serviceCategory, setServiceCategory] = useState<'engine' | 'brakes' | 'suspension' | 'fleet'>('engine');
  const [feedbackText, setFeedbackText] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredReviews = activeFilter === 'all'
    ? reviewsList
    : reviewsList.filter(r => r.category === activeFilter);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !authorVehicle.trim() || !feedbackText.trim()) return;

    const initials = authorName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() || 'RD';
    const newRev: ReviewItem = {
      id: `rev-${Date.now()}`,
      name: authorName,
      initials: initials,
      vehicle: authorVehicle,
      rating: ratingScore,
      timeAgo: 'Just now',
      category: serviceCategory,
      categoryLabel: serviceCategory === 'engine' ? 'Engine & Diagnostics' : serviceCategory === 'brakes' ? 'Brakes & Rotors' : serviceCategory === 'suspension' ? 'Suspension' : 'Fleet & Commuter',
      verified: true,
      quote: feedbackText
    };

    setReviewsList([newRev, ...reviewsList]);
    setFormSubmitted(true);
    setAuthorName('');
    setAuthorVehicle('');
    setFeedbackText('');
  };

  return (
    <div className="flex flex-col bg-[#050505]">
      {/* Top Header */}
      <section className="bg-gradient-to-b from-[#0A0A0A] to-[#050505] border-b border-[#222222] pt-8 pb-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-tech text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-wide">
                WHAT OUR <span className="text-red-500">AURORA DRIVERS</span> SAY
              </h1>
              <p className="mt-3 text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
                Real telemetry and unvarnished feedback from daily commuters, Aurora municipal fleet managers, and track enthusiasts who trust Road Dogs Auto Care with their vehicles.
              </p>
            </div>

            {/* Overall Rating Scoreboard */}
            <div className="flex items-center gap-4 bg-[#0F0F0F] border border-[#222222] p-4 rounded-xl shrink-0">
              <div className="p-3 rounded-lg bg-red-600/20 text-red-500 font-tech text-3xl font-extrabold">
                4.9
              </div>
              <div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="text-xs font-bold text-white uppercase mt-0.5">280+ VERIFIED REVIEWS</div>
                <div className="text-[10px] text-neutral-400">Google Verified & Bay Inspection Log</div>
              </div>
            </div>
          </div>

          {/* 4 Trust Metrics */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#0F0F0F] border border-[#222222]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-500" />
                <span className="font-mono-num text-2xl font-bold text-white">99.4%</span>
              </div>
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mt-1">
                ON-TIME DELIVERY
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#0F0F0F] border border-[#222222]">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span className="font-mono-num text-2xl font-bold text-white">100%</span>
              </div>
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mt-1">
                DIAGNOSTIC ACCURACY
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#0F0F0F] border border-[#222222]">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-red-500" />
                <span className="font-mono-num text-2xl font-bold text-white">24M / 24K</span>
              </div>
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mt-1">
                NATIONWIDE WARRANTY
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#0F0F0F] border border-[#222222]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="font-mono-num text-2xl font-bold text-red-500">$0.00</span>
              </div>
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block mt-1">
                HIDDEN DEALER FEES
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Telemetry & Reviews Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 lg:px-8 w-full">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 rounded-xl bg-[#0F0F0F] border border-[#222222] w-fit">
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 px-3 hidden sm:inline">
            FILTER TELEMETRY:
          </span>
          {[
            { id: 'all', label: 'ALL REVIEWS (280+)' },
            { id: 'engine', label: 'ENGINE & DIAGNOSTICS (94)' },
            { id: 'brakes', label: 'BRAKES & ROTORS (82)' },
            { id: 'suspension', label: 'SUSPENSION (51)' },
            { id: 'fleet', label: 'FLEET & COMMUTER (53)' }
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  isActive
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-[#141414]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-xl bg-[#0F0F0F] border border-[#222222] flex flex-col justify-between hover:border-red-500/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono-num text-neutral-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-red-500" />
                    Verified Aurora Driver
                  </span>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#222222]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-red-950/60 border border-red-500/30 text-red-400 font-tech font-bold text-xs flex items-center justify-center">
                      {rev.initials}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{rev.name}</div>
                      <div className="text-[10px] text-neutral-400">{rev.vehicle}</div>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono-num text-neutral-500">
                    {rev.timeAgo}
                  </span>
                </div>

                <div className="mt-2 text-[10px] font-mono-num text-red-400 uppercase font-semibold">
                  {rev.categoryLabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bay Case Studies: Telemetry Spotlights */}
      <section className="py-16 bg-[#0F0F0F] border-y border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-red-500 block mb-1">
              BAY CASE STUDIES
            </span>
            <h2 className="font-tech text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
              TELEMETRY SPOTLIGHTS
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Duramax Spotlight */}
            <div className="rounded-xl overflow-hidden border border-[#222222] bg-[#141414]">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={IMAGES.workshopBays}
                  alt="2018 GMC Sierra 2500HD Duramax Transmission Overhaul"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-red-600 text-white text-[10px] font-mono-num font-bold uppercase">
                  COMPLETE OVERHAUL TELEMETRY
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-tech text-lg sm:text-xl font-bold uppercase">
                    2018 GMC SIERRA 2500HD DURAMAX
                  </h3>
                  <div className="text-xs text-red-400 font-semibold uppercase">
                    ALLISON 1000 TRANSMISSION OVERHAUL
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs text-neutral-300 leading-relaxed italic">
                  "Other shops in Aurora wouldn't touch this heavy-duty transmission without charging dealer exchange prices. Road Dogs tore it down, rebuilt the torque converter clutch assembly, and completed factory relearn calibrations in 4 days flat. Tows like brand new."
                </p>
                <div className="text-[11px] text-neutral-400 mt-2 font-semibold">
                  — Robert Vance, Construction Logistics
                </div>

                <div className="mt-6 pt-4 border-t border-[#222222] grid grid-cols-3 gap-3 text-center">
                  <div className="p-2.5 rounded-lg bg-[#0F0F0F] border border-[#222222]">
                    <span className="text-[10px] text-neutral-400 uppercase font-bold block">LINE PRESSURE</span>
                    <span className="font-mono-num font-bold text-xs text-white">235 PSI</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#0F0F0F] border border-[#222222]">
                    <span className="text-[10px] text-neutral-400 uppercase font-bold block">SHIFT SLIP RATE</span>
                    <span className="font-mono-num font-bold text-xs text-emerald-400">0.0% Optimal</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#0F0F0F] border border-[#222222]">
                    <span className="text-[10px] text-neutral-400 uppercase font-bold block">WARRANTY</span>
                    <span className="font-mono-num font-bold text-xs text-white">24 Mo / 24k Mi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mustang GT Spotlight */}
            <div className="rounded-xl overflow-hidden border border-[#222222] bg-[#141414]">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={IMAGES.brakeCaliper}
                  alt="2020 Ford Mustang GT Performance Pack Brake Calibration"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-red-600 text-white text-[10px] font-mono-num font-bold uppercase">
                  TRACK TELEMETRY CALIBRATED
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-tech text-lg sm:text-xl font-bold uppercase">
                    2020 FORD MUSTANG GT PERFORMANCE PACK
                  </h3>
                  <div className="text-xs text-red-400 font-semibold uppercase">
                    TRACK CALIPER & ROTOR BEDDING CALIBRATION
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs text-neutral-300 leading-relaxed italic">
                  "Zero pedal fade under intense heat. Road Dogs didn't just install the hardware; they verified runout tolerances with a digital dial indicator to within 0.001 inches and test-bedded the compounds. True precision craftsmanship."
                </p>
                <div className="text-[11px] text-neutral-400 mt-2 font-semibold">
                  — Sean McAllister, SCCA Competitor
                </div>

                <div className="mt-6 pt-4 border-t border-[#222222] grid grid-cols-3 gap-3 text-center">
                  <div className="p-2.5 rounded-lg bg-[#0F0F0F] border border-[#222222]">
                    <span className="text-[10px] text-neutral-400 uppercase font-bold block">ROTOR RUNOUT</span>
                    <span className="font-mono-num font-bold text-xs text-emerald-400">&lt; 0.001"</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#0F0F0F] border border-[#222222]">
                    <span className="text-[10px] text-neutral-400 uppercase font-bold block">STOPPING DELTA</span>
                    <span className="font-mono-num font-bold text-xs text-red-400">-22 Ft @ 70mph</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#0F0F0F] border border-[#222222]">
                    <span className="text-[10px] text-neutral-400 uppercase font-bold block">FLUID TEMP SPEC</span>
                    <span className="font-mono-num font-bold text-xs text-white">600°F DOT4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Review Submission Form */}
      <section className="py-16 max-w-4xl mx-auto px-4 lg:px-8 w-full">
        <div className="p-6 sm:p-8 rounded-xl bg-[#0F0F0F] border border-[#222222] shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="w-10 h-10 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center mx-auto mb-3">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <h2 className="font-tech text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
              HAD YOUR VEHICLE SERVICED WITH US?
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              Submit your telemetry report. Honest reviews from local Kane & DuPage County drivers keep our workshop accountable to the highest standard.
            </p>
          </div>

          {formSubmitted && (
            <div className="mb-6 p-4 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Thank you! Your verified telemetry review has been recorded and posted to the live driver feed above.</span>
            </div>
          )}

          <form onSubmit={handleReviewSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  YOUR NAME / DRIVER ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="e.g. Jason Miller"
                  className="w-full bg-[#141414] border border-[#222222] rounded-lg px-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  VEHICLE YEAR / MAKE / MODEL <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={authorVehicle}
                  onChange={(e) => setAuthorVehicle(e.target.value)}
                  placeholder="e.g. 2020 Toyota Tacoma TRD"
                  className="w-full bg-[#141414] border border-[#222222] rounded-lg px-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-red-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              {/* Clickable Star Rating */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  RATING SCORE
                </label>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-[#141414] border border-[#222222]">
                  <div className="flex text-amber-400 cursor-pointer">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRatingScore(star)}
                        className="p-1 focus:outline-none hover:scale-110 transition-transform"
                      >
                        <Star className={`w-5 h-5 ${star <= ratingScore ? 'fill-current text-amber-400' : 'text-neutral-600'}`} />
                      </button>
                    ))}
                  </div>
                  <span className="font-mono-num text-xs font-bold text-white ml-2">
                    {ratingScore} / 5 STARS
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  SERVICE PERFORMED
                </label>
                <select
                  value={serviceCategory}
                  onChange={(e) => setServiceCategory(e.target.value as any)}
                  className="w-full bg-[#141414] border border-[#222222] rounded-lg px-3 py-2.5 text-xs text-white focus:border-red-500 focus:outline-none"
                >
                  <option value="engine">Engine & Computer Diagnostics</option>
                  <option value="brakes">Brakes & Rotor Servicing</option>
                  <option value="suspension">Suspension & Laser Alignment</option>
                  <option value="fleet">Fleet Maintenance & Routine Ops</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                YOUR EXPERIENCE & FEEDBACK <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="Describe the turnaround time, communication with Mike, diagnostic clarity, and overall repair quality..."
                className="w-full bg-[#141414] border border-[#222222] rounded-lg p-3 text-xs text-white placeholder-neutral-500 focus:border-red-500 focus:outline-none"
              />
            </div>

            <div className="pt-4 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] text-neutral-400">
                Verified by Road Dogs Shop Desk (Aurora, IL)
              </span>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-red-950/40"
              >
                <span>SUBMIT VERIFIED REVIEW</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Stranded or Warning Lights Emergency Banner */}
      <section className="bg-gradient-to-r from-red-950/60 via-[#141414] to-[#0F0F0F] border-t border-red-500/30 py-10 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block mb-1">
              AURORA IMMEDIATE BAY ACCESS
            </span>
            <h3 className="font-tech text-xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
              STRANDED OR EXPERIENCING WARNING LIGHTS?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl">
              Don't wait for minor issues to become cataclysmic mechanical failures. Call Mike directly at our Aurora workshop or schedule priority intake right now.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${SHOP_INFO.phone}`}
              className="px-5 py-3 rounded-lg bg-[#181818] hover:bg-[#222222] text-neutral-200 font-bold text-xs uppercase tracking-wider border border-[#2B2B2B] flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>{SHOP_INFO.phone}</span>
            </a>

            <button
              onClick={() => onNavigate('book')}
              className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-red-950/50"
            >
              <Calendar className="w-4 h-4" />
              <span>SCHEDULE INTAKE</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
