import React from 'react';
import { PageId } from '../types';
import { SHOP_INFO, IMAGES, SERVICES, PROJECTS, REVIEWS } from '../data/mockData';
import { Phone, Calendar, ArrowRight, ShieldCheck, Wrench, CheckCircle2, Star, Cpu, Disc, Activity, AlertCircle } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenCallModal: () => void;
  onSelectProject: (projectId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenCallModal, onSelectProject }) => {
  return (
    <div className="flex flex-col bg-[#050505]">
      {/* Hero Section with Workshop Background Image */}
      <section className="relative overflow-hidden bg-black border-b border-[#1F1F1F]">
        {/* Background Workshop Image - Clearly Visible */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 scale-105 transform motion-safe:transition-transform duration-1000"
          style={{ backgroundImage: `url(${IMAGES.heroWorkshop})` }}
        />
        {/* Light Overlay Gradients so Picture is Vivid & Visible while Text remains Crisp */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/75 via-[#050505]/45 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-black/30" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 lg:px-8 pt-16 pb-16 md:pt-28 md:pb-24">
          <div className="max-w-3xl">
            {/* Main Headline */}
            <h1 className="font-tech text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[1.1] text-balance drop-shadow-md">
              AURORA'S MOST TRUSTED AUTO REPAIR & <span className="text-red-500">PERFORMANCE</span> SPECIALISTS
            </h1>

            <p className="mt-5 text-sm sm:text-base text-neutral-200 leading-relaxed max-w-2xl drop-shadow">
              From routine oil changes to complete engine overhauls, Road Dogs Auto Care keeps you rolling safely with honest pricing, transparent digital photo inspections, and expert certified craftsmanship.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('book')}
                className="px-6 py-3.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl shadow-red-950/60 flex items-center gap-2 focus-visible:outline-none"
              >
                <span>SCHEDULE SERVICE TODAY</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="px-5 py-3.5 rounded-lg bg-[#141414] hover:bg-[#1C1C1C] border border-[#2A2A2A] text-neutral-200 hover:text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all focus-visible:outline-none"
              >
                EXPLORE SERVICES
              </button>

              <button
                onClick={onOpenCallModal}
                className="px-4 py-3.5 rounded-lg text-neutral-300 hover:text-white font-medium text-xs sm:text-sm flex items-center gap-2 transition-colors"
              >
                <div className="text-left">
                  <span className="text-[10px] text-red-400 block font-bold leading-none">NEED IMMEDIATE HELP?</span>
                  <span className="font-mono-num font-bold text-xs text-white">{SHOP_INFO.phone}</span>
                </div>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-6 border-t border-[#262626]/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span className="font-semibold text-neutral-200">ASE CERTIFIED TECHNICIANS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span className="font-semibold text-neutral-200">OEM QUALITY PARTS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span className="font-semibold text-neutral-200">24-MONTH / 24,000-MILE WARRANTY</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Key Metrics Bar */}
        <div className="bg-[#0A0A0A] border-y border-[#1F1F1F]">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="font-mono-num font-bold text-2xl sm:text-3xl text-white">
                15+
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mt-1">
                YEARS EXPERIENCE
              </div>
              <div className="text-[11px] text-neutral-500 mt-0.5">
                Continuous precision automotive
              </div>
            </div>

            <div>
              <div className="font-mono-num font-bold text-2xl sm:text-3xl text-white">
                5,000+
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mt-1">
                CARS SERVICED
              </div>
              <div className="text-[11px] text-neutral-500 mt-0.5">
                Domestic, European & Japanese
              </div>
            </div>

            <div>
              <div className="font-mono-num font-bold text-2xl sm:text-3xl text-white">
                100%
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mt-1">
                SATISFACTION GUARANTEE
              </div>
              <div className="text-[11px] text-neutral-500 mt-0.5">
                Warranty-backed vehicle safety
              </div>
            </div>

            <div>
              <div className="font-tech font-bold text-xl sm:text-2xl text-red-500">
                AURORA, IL
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mt-1">
                PROUD LOCAL SHOP
              </div>
              <div className="text-[11px] text-neutral-500 mt-0.5">
                State of the art diagnostic bay
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Prominent Images */}
      <section className="py-16 md:py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-red-500 mb-1">
                EXPERT AUTOMOTIVE CARE
              </div>
              <h2 className="font-tech text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
                COMPREHENSIVE SERVICES FOR EVERY MAKE & MODEL
              </h2>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1.5 uppercase tracking-wider"
            >
              <span>VIEW ALL SERVICES & PRICING PACKAGES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Service Cards as Visual Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                onClick={() => onNavigate('services')}
                className="group rounded-xl bg-[#0F0F0F] border border-[#222222] hover:border-red-500/50 transition-all cursor-pointer flex flex-col justify-between overflow-hidden shadow-xl"
              >
                <div>
                  {/* Service Card Image */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-900">
                    <img
                      src={service.image || IMAGES.diagnosticBay}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/30 to-black/50" />
                    
                    {/* Badge and Category */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono-num font-bold text-red-400 border border-red-500/30">
                        {service.badge || "OEM SPEC"}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono-num text-neutral-300 border border-white/10">
                        {service.turnaround}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-red-600/90 text-white flex items-center justify-center shrink-0 shadow-md">
                        {service.id === 'engine-diag' && <Cpu className="w-4 h-4" />}
                        {service.id === 'brake-system' && <Disc className="w-4 h-4" />}
                        {service.id === 'transmission' && <Wrench className="w-4 h-4" />}
                        {service.id === 'suspension-alignment' && <Activity className="w-4 h-4" />}
                        {service.id === 'hvac-climate' && <Wrench className="w-4 h-4" />}
                        {service.id === 'routine-maintenance' && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                      <h3 className="font-tech text-base sm:text-lg font-bold text-white uppercase tracking-wide drop-shadow group-hover:text-red-400 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#1F1F1F] flex items-center gap-2 text-[11px] text-neutral-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span className="truncate">{service.guarantee}</span>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-1 flex items-center justify-between text-[11px] text-neutral-400 group-hover:text-white">
                  <span className="text-red-400 font-semibold group-hover:underline">Schedule Intake</span>
                  <span className="flex items-center gap-1 font-mono-num text-neutral-400 group-hover:text-red-400 transition-colors">
                    <span>Inspect Bay</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built on Integrity Feature Section */}
      <section className="py-16 md:py-20 bg-[#0B0B0B] border-y border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Image Slot */}
            <div className="lg:col-span-6 relative rounded-xl overflow-hidden border border-[#262626] shadow-2xl group">
              <img
                src={IMAGES.diagnosticBay}
                alt="Mike Master ASE Lead Tech calibrating vehicle diagnostics at Road Dogs Auto Care"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-85" />
              
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#0E0E0E]/90 backdrop-blur-md border border-[#262626] flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-xs text-white">
                  M
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Mike — Master ASE Diagnostic Lead</div>
                  <div className="text-[10px] text-neutral-400">15+ Yrs Pro Field Calibration & Engine Mapping Specialist</div>
                </div>
              </div>
            </div>

            {/* Story & Bullets */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-red-500 mb-1">
                  THE ROAD DOGS DIFFERENCE
                </div>
                <h2 className="font-tech text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
                  BUILT ON INTEGRITY, CRAFTSMANSHIP & SPEED
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                We reject the typical dealership runaround. In Aurora, drivers rely on our workshop because we explain every diagnostic code, show you the worn parts, and never perform unapproved work.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#141414] border border-[#222222]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-red-500" />
                    <h4 className="text-xs font-bold uppercase text-white">ASE-CERTIFIED TECHNICIANS</h4>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-1 leading-normal">
                    Specialized in domestic light trucks, sports performance, and complex European electrical architectures.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#141414] border border-[#222222]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-500" />
                    <h4 className="text-xs font-bold uppercase text-white">TRANSPARENT ESTIMATES</h4>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-1 leading-normal">
                    Zero hidden fees. Complete digital inspection reports with high-resolution photos sent directly to your phone.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#141414] border border-[#222222]">
                  <div className="flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-red-500" />
                    <h4 className="text-xs font-bold uppercase text-white">FAST TURNAROUND</h4>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-1 leading-normal">
                    Rapid parts fulfillment and systematic bay scheduling allow us to complete most factory services the exact same day.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#141414] border border-[#222222]">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-red-500" />
                    <h4 className="text-xs font-bold uppercase text-white">MODERN SCAN TECHNOLOGY</h4>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-1 leading-normal">
                    Direct OEM-level scan interfaces and computerized emissions and dyno-load testing rigs for 100% pinpoint accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects from the Garage */}
      <section className="py-16 md:py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-red-500 mb-1">
                BAY OPERATIONS ARCHIVE
              </div>
              <h2 className="font-tech text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
                RECENT PROJECTS FROM THE GARAGE
              </h2>
            </div>

            <button
              onClick={() => onNavigate('work')}
              className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1.5 uppercase tracking-wider"
            >
              <span>VIEW FULL GARAGE GALLERY & CASE STUDIES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 3).map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project.id)}
                className="group rounded-xl bg-[#0F0F0F] border border-[#222222] overflow-hidden hover:border-red-500/50 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-neutral-900">
                    <img
                      src={project.image || IMAGES.workshopBays}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono-num text-red-400 border border-white/10">
                      {project.categoryLabel}
                    </div>
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono-num text-neutral-300">
                      {project.turnaround}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="text-xs font-bold text-red-400 font-mono-num">
                      {project.vehicle}
                    </div>
                    <h3 className="font-tech text-base font-bold text-white uppercase mt-1 group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-[#1F1F1F] flex items-center justify-between text-xs text-neutral-300">
                  <span className="text-[11px] text-neutral-400 font-mono-num">{project.specs[0]?.value}</span>
                  <span className="text-red-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>View Telemetry</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Endorsements & Reviews Preview */}
      <section className="py-16 md:py-20 bg-[#0B0B0B] border-t border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-red-500 mb-1">
                AURORA COMMUNITY ENDORSEMENTS
              </div>
              <h2 className="font-tech text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
                TRUSTED BY THE TOUGHEST COMMUTERS & ENTHUSIASTS
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="font-tech text-3xl font-bold text-white">4.9</div>
              <div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <div className="text-[11px] text-neutral-400">Based on 280+ Verified Aurora Drivers</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="p-6 rounded-xl bg-[#121212] border border-[#222222] flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-amber-400 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed italic">
                    "{review.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1F1F1F] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-950/60 border border-red-500/30 text-red-400 font-bold text-xs flex items-center justify-center">
                    {review.initials}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{review.name}</div>
                    <div className="text-[11px] text-neutral-400">{review.vehicle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Impact Red CTA Banner */}
      <section className="bg-red-600 py-10 px-4 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-red-200 block mb-1">
              FAST BAY RESERVATION
            </span>
            <h2 className="font-tech text-2xl sm:text-4xl font-extrabold uppercase tracking-wide">
              NOTICE SOMETHING WRONG WITH YOUR CAR?
            </h2>
            <p className="text-xs sm:text-sm text-red-100 mt-1 max-w-xl">
              Don't wait until a small issue turns into an expensive repair. Stop by our Aurora shop or book online today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
            <a
              href={`tel:${SHOP_INFO.phone}`}
              className="px-5 py-3 rounded-lg bg-black hover:bg-neutral-900 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>CALL {SHOP_INFO.phone}</span>
            </a>

            <button
              onClick={() => onNavigate('book')}
              className="px-5 py-3 rounded-lg bg-white hover:bg-neutral-100 text-red-600 font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK APPOINTMENT ONLINE</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
