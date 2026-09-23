import React from 'react';
import { PageId } from '../types';
import { SHOP_INFO, FOUNDATIONAL_PILLARS, TECHNICIANS, WORKSHOP_FACILITIES, IMAGES } from '../data/mockData';
import { Phone, Calendar, ArrowRight, ShieldCheck, CheckCircle2, Clock, Wrench, Cpu, Users, Eye } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenCallModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenCallModal }) => {
  return (
    <div className="flex flex-col bg-[#050505]">
      {/* Top Header / Kicker */}
      <section className="bg-gradient-to-b from-[#0A0A0A] to-[#050505] border-b border-[#222222] pt-8 pb-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-tech text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-wide text-balance">
                MEET THE CREW BEHIND <span className="text-red-500">ROAD DOGS</span> AUTO CARE
              </h1>
              <p className="mt-3 text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
                Founded on old-school mechanical grit and modern computerized precision, we built Road Dogs to give Aurora drivers honest answers, crystal-clear digital diagnostics, and uncompromising mechanical repairs.
              </p>
            </div>

            {/* Workshop Readiness Pill */}
            <div className="p-4 rounded-xl bg-[#0F0F0F] border border-[#222222] text-xs shrink-0 space-y-2">
              <div className="flex items-center justify-between gap-4 font-mono-num">
                <span className="text-neutral-400 font-bold uppercase text-[10px]">WORKSHOP READINESS</span>
                <span className="text-emerald-400 font-bold">BAY 01 – 06 ACTIVE</span>
              </div>
              <div className="w-48 bg-[#181818] h-2 rounded-full overflow-hidden">
                <div className="bg-red-500 h-full w-full" />
              </div>
              <div className="flex items-center justify-between text-[11px] pt-1 border-t border-[#222222]">
                <span className="text-neutral-400">Direct Bay Hotline:</span>
                <a href={`tel:${SHOP_INFO.phone}`} className="font-mono-num text-white font-bold hover:text-red-400">
                  {SHOP_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 // The Manifesto */}
      <section className="py-16 max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Story Text */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <div>
              <span className="text-xs font-mono-num font-bold uppercase tracking-wider text-red-500 block mb-1">
                01. THE MANIFESTO
              </span>
              <h2 className="font-tech text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
                BUILT BY MECHANICS WHO REFUSED TO SELL SMOKE AND MIRRORS
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Road Dogs Auto Care was born out of frustration. After decades working in corporate franchise dealerships and regional service chains, our master technicians grew tired of the high-pressure sales quotas, commissioned service advisors pushing unnecessary flushes, and markups on parts that never needed replacement.
            </p>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              We set up shop right here in Aurora with a single unbending standard: <strong className="text-white">total transparency backed by indisputable diagnostic data</strong>. When you bring your truck, commuter sedan, or track build to Road Dogs, we don't just hand you a vague quote. We deliver a complete Digital Vehicle Inspection (DVI) directly to your smartphone with high-definition photos, fluid condition readings, and calibrated measurement data before any tool turns.
            </p>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Whether it's a high-mileage engine teardown, a computerized CAN bus electrical fault, or precision laser suspension tuning, our shop combines raw mechanical mastery with laboratory-grade electronic diagnostics.
            </p>

            {/* 3 Metric Badges */}
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#222222]">
              <div className="p-3 rounded-lg bg-[#0F0F0F] border border-[#222222]">
                <div className="font-mono-num text-xl sm:text-2xl font-bold text-white">15+</div>
                <div className="text-[10px] text-neutral-400 font-bold uppercase">YEARS IN AURORA</div>
              </div>
              <div className="p-3 rounded-lg bg-[#0F0F0F] border border-[#222222]">
                <div className="font-mono-num text-xl sm:text-2xl font-bold text-white">100%</div>
                <div className="text-[10px] text-neutral-400 font-bold uppercase">LOCAL OWNERSHIP</div>
              </div>
              <div className="p-3 rounded-lg bg-[#0F0F0F] border border-[#222222]">
                <div className="font-mono-num text-xl sm:text-2xl font-bold text-red-500">24/24</div>
                <div className="text-[10px] text-neutral-400 font-bold uppercase">WARRANTY MO/MI</div>
              </div>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative rounded-xl overflow-hidden border border-[#222222] shadow-2xl group">
            <img
              src={IMAGES.diagnosticBay}
              alt="Master ASE Lead Bay diagnostic session at Road Dogs Auto Care"
              className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-black/80 text-[10px] font-mono-num text-neutral-200 border border-white/10">
                DIAGNOSTIC SYSTEM: ACTIVE BUS LINK
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-600/90 text-white text-[10px] font-mono-num font-bold">
                LIVE OEM SCAN: PASS
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-lg bg-black/85 backdrop-blur-md border border-[#222222] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-xs text-white">
                  M
                </div>
                <div>
                  <div className="font-bold text-white">MASTER ASE LEAD BAY</div>
                  <div className="text-[11px] text-neutral-400">Mike Henderson executing digital live-stream scan</div>
                </div>
              </div>
              <span className="px-2 py-1 rounded bg-[#181818] text-[10px] font-mono-num text-neutral-300">
                BAY 03
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 02 // Four Foundational Pillars */}
      <section className="py-16 bg-[#0F0F0F] border-y border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono-num font-bold uppercase tracking-wider text-red-500 block mb-1">
                02. CODE OF OPERATING EXCELLENCE
              </span>
              <h2 className="font-tech text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
                OUR FOUR FOUNDATIONAL PILLARS
              </h2>
            </div>
            <p className="text-xs text-neutral-400 max-w-md">
              Every vehicle checked into our bays is managed according to strict engineering standards and uncompromising ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUNDATIONAL_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#141414] border border-[#222222] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-red-950/40 border border-red-500/30 text-red-500 flex items-center justify-center mb-4">
                    {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                    {idx === 1 && <Cpu className="w-5 h-5" />}
                    {idx === 2 && <Users className="w-5 h-5" />}
                    {idx === 3 && <Wrench className="w-5 h-5" />}
                  </div>

                  <h3 className="font-tech text-base font-bold uppercase text-white">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#222222] flex items-center justify-between text-[10px] font-mono-num text-neutral-400">
                  <span>{pillar.protocol}</span>
                  <span className="text-red-400 font-bold">{pillar.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 // Meet Our Technicians & Leadership */}
      <section className="py-16 max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono-num font-bold uppercase tracking-wider text-red-500 block mb-1">
              03. TECHNICAL MASTERY
            </span>
            <h2 className="font-tech text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
              MEET OUR TECHNICIANS & LEADERSHIP
            </h2>
          </div>
          <p className="text-xs text-neutral-400 max-w-md">
            Real mechanics with verifiable certifications, decades of continuous diagnostics, and grease under their fingernails.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECHNICIANS.map((tech) => (
            <div
              key={tech.id}
              className="p-6 rounded-xl bg-[#0F0F0F] border border-[#222222] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#181818] border border-[#222222] flex items-center justify-center font-tech text-xl font-bold text-white">
                    {tech.name.charAt(0)}
                  </div>
                  <span className="px-2 py-0.5 rounded bg-red-600 text-white text-[10px] font-mono-num font-bold uppercase tracking-wider">
                    {tech.tag}
                  </span>
                </div>

                <h3 className="font-tech text-lg font-bold uppercase text-white tracking-wide">
                  {tech.name}
                </h3>
                <div className="text-xs text-red-400 font-semibold mt-0.5">
                  {tech.role}
                </div>
                <div className="text-[11px] font-mono-num text-neutral-400 mt-1">
                  Experience: {tech.experience}
                </div>

                <p className="text-xs text-neutral-300 mt-3 leading-relaxed">
                  {tech.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#222222] text-[11px]">
                <span className="text-neutral-500 block text-[10px] uppercase font-bold">CERTIFICATIONS</span>
                <span className="text-white font-mono-num font-semibold">{tech.certifications}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04 // Inside the Aurora Workshop */}
      <section className="py-16 bg-[#0F0F0F] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono-num font-bold uppercase tracking-wider text-red-500 block mb-1">
                04. THE FACILITY
              </span>
              <h2 className="font-tech text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
                INSIDE THE AURORA WORKSHOP
              </h2>
            </div>
            <p className="text-xs text-neutral-400 max-w-md">
              Engineered for clinical cleanliness and rapid mechanical turnaround. We invested in equipment that dealership franchises often consider too costly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {WORKSHOP_FACILITIES.map((facility, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#141414] border border-[#222222] flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <div className="w-8 h-8 rounded-lg bg-red-950/40 text-red-500 flex items-center justify-center">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono-num text-neutral-400 font-bold uppercase">
                      {facility.category}
                    </span>
                  </div>

                  <h3 className="font-tech text-lg font-bold uppercase text-white">
                    {facility.title}
                  </h3>

                  <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                    {facility.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#222222] text-[10px] font-mono-num text-red-400 font-bold">
                  {facility.badge} →
                </div>
              </div>
            ))}
          </div>

          {/* Diagnostic Turnaround Rate Ribbon */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#050505] border border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-red-600/20 text-red-500">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-tech text-sm font-bold uppercase text-white">
                  SAME-DAY DIAGNOSTIC TURNAROUND RATE
                </h4>
                <p className="text-xs text-neutral-400">
                  Over 92% of computer checkups completed within 4 operating hours.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <span className="text-[10px] text-neutral-400 uppercase font-bold block">AVERAGE RESOLUTION</span>
                <span className="font-mono-num text-lg font-bold text-emerald-400">3.2 HOURS</span>
              </div>

              <button
                onClick={() => onNavigate('services')}
                className="px-4 py-2 rounded-lg bg-[#181818] hover:bg-[#222222] text-xs font-bold uppercase tracking-wider text-white border border-[#2B2B2B] whitespace-nowrap"
              >
                VIEW ALL SERVICES
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ready For A Shop Banner */}
      <section className="bg-gradient-to-r from-red-950/60 via-[#141414] to-[#0F0F0F] py-12 px-4 lg:px-8 border-t border-red-500/30">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-400 block mb-1">
              EXPERIENCE HONEST AUTO CARE IN AURORA
            </span>
            <h2 className="font-tech text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
              READY FOR A SHOP THAT RESPECTS YOUR TIME & YOUR WALLET?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl">
              Book your reservation online or speak directly with Mike and our diagnostic team. Transparent quotes, zero gimmicks, and unmatched precision engineering.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('book')}
              className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-red-950/50"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK YOUR APPOINTMENT</span>
            </button>

            <a
              href={`tel:${SHOP_INFO.phone}`}
              className="px-5 py-3 rounded-lg bg-[#181818] hover:bg-[#222222] text-neutral-200 font-bold text-xs uppercase tracking-wider border border-[#2B2B2B] flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>{SHOP_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
