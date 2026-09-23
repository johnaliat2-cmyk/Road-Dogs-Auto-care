import React from 'react';
import { PageId } from '../types';
import { SHOP_INFO, IMAGES, SERVICES, MAINTENANCE_PACKAGES } from '../data/mockData';
import { Phone, Calendar, ArrowRight, ShieldCheck, CheckCircle2, Cpu, Disc, Wrench, Activity, AlertTriangle, Clock } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceForBooking: (serviceName: string) => void;
  onOpenCallModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ 
  onNavigate, 
  onSelectServiceForBooking, 
  onOpenCallModal 
}) => {
  return (
    <div className="flex flex-col bg-[#050505]">
      {/* Top Header / Breadcrumb */}
      <section className="bg-gradient-to-b from-[#0A0A0A] to-[#050505] border-b border-[#1F1F1F] pt-8 pb-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-tech text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-wide">
                OUR AUTO REPAIR & MAINTENANCE SERVICES
              </h1>
              <p className="mt-3 text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
                From computerized diagnostics to heavy mechanical overhauls, our ASE-certified mechanics deliver dealer-level expertise without dealer markups in Aurora, IL.
              </p>
            </div>

            <div className="flex items-center gap-6 bg-[#111111] border border-[#262626] px-4 py-2.5 rounded-lg text-xs shrink-0">
              <div>
                <span className="text-[10px] text-neutral-400 block font-bold uppercase">SHOP THROUGHPUT</span>
                <span className="text-white font-mono-num font-bold">6 High-Precision Bays Active</span>
              </div>
              <div className="h-7 w-px bg-[#262626]" />
              <div>
                <span className="text-[10px] text-neutral-400 block font-bold uppercase">AURORA WORKSHOP SLA</span>
                <span className="text-emerald-400 font-mono-num font-bold">Same-Day Diagnostic Turnaround</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Visual Banner */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 -mt-4 mb-6 w-full">
        <div className="relative rounded-xl overflow-hidden border border-[#222222] h-64 sm:h-80 shadow-2xl group">
          <img
            src={IMAGES.workshopBays}
            alt="Road Dogs Auto Care modern diagnostic bay with hydraulic vehicle lifts"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/50 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2 py-0.5 rounded bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider">
                  HIGH-BAY WORKSHOP
                </span>
                <span className="text-[11px] font-mono-num text-neutral-300">
                  OEM HARDWARE CALIBRATED
                </span>
              </div>
              <h2 className="font-tech text-xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
                FACTORY-GRADE SCANNERS, DIRECT COMPONENT INSPECTION & DYNO VALIDATION
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Emergency Callout Ribbon */}
      <div className="bg-red-600 text-white text-xs font-semibold py-2.5 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>NEED URGENT SERVICE OR ROADSIDE MECHANICAL ASSESSMENT?</span>
          </div>
          <a
            href={`tel:${SHOP_INFO.phone}`}
            className="font-mono-num font-bold hover:underline flex items-center gap-1.5"
          >
            <span>Direct Aurora Line: {SHOP_INFO.phone}</span>
          </a>
        </div>
      </div>

      {/* Mechanical Service Bay - 6 Disciplines with Prominent Images */}
      <section className="py-16 max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-red-500 mb-1">
              COMPREHENSIVE AUTOMOTIVE DISCIPLINES
            </div>
            <h2 className="font-tech text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
              MECHANICAL SERVICE BAY
            </h2>
          </div>
          <p className="text-xs text-neutral-400 max-w-md">
            Every procedure conforms directly to original equipment manufacturer (OEM) tolerances, logged digitally to safeguard your factory vehicle warranty.
          </p>
        </div>

        {/* Grid with visual image cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="rounded-xl bg-[#0F0F0F] border border-[#222222] hover:border-red-500/50 transition-all flex flex-col justify-between overflow-hidden shadow-xl group"
            >
              <div>
                {/* Service Visual Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={service.image || IMAGES.diagnosticBay}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/30 to-black/50" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono-num font-bold text-red-400 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-red-500/30">
                      {service.badge}
                    </span>
                    <span className="text-[10px] font-mono-num text-neutral-300 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10">
                      {service.turnaround}
                    </span>
                  </div>

                  {/* Icon & Title over image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-red-600/90 text-white flex items-center justify-center shrink-0 shadow-md">
                      {service.id === 'engine-diag' && <Cpu className="w-4 h-4" />}
                      {service.id === 'brake-system' && <Disc className="w-4 h-4" />}
                      {service.id === 'transmission' && <Wrench className="w-4 h-4" />}
                      {service.id === 'suspension-alignment' && <Activity className="w-4 h-4" />}
                      {service.id === 'hvac-climate' && <Wrench className="w-4 h-4" />}
                      {service.id === 'routine-maintenance' && <CheckCircle2 className="w-4 h-4" />}
                    </div>
                    <h3 className="font-tech text-base sm:text-lg font-bold text-white uppercase tracking-wide drop-shadow">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="mt-4 space-y-2 text-xs text-neutral-300">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-4 border-t border-[#1F1F1F]">
                  <div className="text-[11px] text-neutral-400 mb-3 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{service.guarantee}</span>
                  </div>

                  <button
                    onClick={() => onSelectServiceForBooking(service.title)}
                    className="w-full py-2.5 rounded-lg bg-[#181818] hover:bg-red-600 text-neutral-200 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-[#2B2B2B] hover:border-red-600"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>BOOK THIS SERVICE</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Digital Vehicle Inspection (DVI) Thresholds */}
      <section className="bg-[#0B0B0B] border-y border-[#1F1F1F] py-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-red-500 mb-1">
                SHOP INSPECTION PROTOCOL
              </div>
              <h3 className="font-tech text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
                DIGITAL VEHICLE INSPECTION (DVI) THRESHOLDS
              </h3>
            </div>
            <div className="text-xs text-neutral-400 font-mono-num">
              EVERY TICKET LOGGED LIVE TO CUSTOMER PORTAL
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-[#121212] border border-[#222222]">
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="font-bold text-white uppercase">BRAKING FRICTION THICKNESS</span>
                <span className="text-[11px] font-mono-num text-red-400 font-bold">10-Point Mic</span>
              </div>
              <div className="w-full bg-black h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-red-600 via-amber-400 to-emerald-400 h-full w-3/4" />
              </div>
              <p className="text-[11px] text-neutral-400 mt-2">
                Tolerance limit: &lt; 3mm replacement mandatory. Measured with digital Vernier caliper.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#121212] border border-[#222222]">
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="font-bold text-white uppercase">OBD-II CAN-BUS TELEMETRY</span>
                <span className="text-[11px] font-mono-num text-emerald-400 font-bold">100% Protocols</span>
              </div>
              <div className="w-full bg-black h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-full" />
              </div>
              <p className="text-[11px] text-neutral-400 mt-2">
                Live freeze-frame sensor data analyzed against OEM factory operating envelopes.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#121212] border border-[#222222]">
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="font-bold text-white uppercase">FLUID VISCOSITY & BOILING</span>
                <span className="text-[11px] font-mono-num text-amber-400 font-bold">Lab Spectra</span>
              </div>
              <div className="w-full bg-black h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-amber-500 h-full w-4/5" />
              </div>
              <p className="text-[11px] text-neutral-400 mt-2">
                Moisture content verified under 2% PPM. Complete refractometer coolant test.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Workshop Billing - Maintenance Packages */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-red-500 mb-1">
            TRANSPARENT WORKSHOP BILLING
          </div>
          <h2 className="font-tech text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
            MAINTENANCE PACKAGES
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2">
            No hidden fees or surprise upcharges. Every package includes a full Road Dogs digital health report delivered straight to your phone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MAINTENANCE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-6 sm:p-8 rounded-xl border flex flex-col justify-between relative transition-all ${
                pkg.popular
                  ? 'bg-gradient-to-b from-[#181818] to-[#0F0F0F] border-red-500 shadow-xl shadow-red-950/40'
                  : 'bg-[#0F0F0F] border-[#222222]'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded bg-red-600 text-white font-bold text-[10px] uppercase tracking-wider shadow-md">
                  MOST POPULAR IN AURORA
                </div>
              )}

              <div>
                <h3 className="font-tech text-lg font-bold text-white uppercase tracking-wide">
                  {pkg.name}
                </h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  {pkg.subtitle}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-mono-num font-extrabold text-4xl sm:text-5xl text-white">
                    ${pkg.price}
                  </span>
                  <span className="text-xs text-neutral-400">/ {pkg.priceNote}</span>
                </div>

                <div className="mt-6 space-y-2.5 text-xs text-neutral-300">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#1F1F1F]">
                <div className="text-[11px] text-neutral-400 text-center mb-3 font-mono-num">
                  {pkg.reportIncluded}
                </div>

                <button
                  onClick={() => onSelectServiceForBooking(`${pkg.name} ($${pkg.price})`)}
                  className={`w-full py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-lg ${
                    pkg.popular
                      ? 'bg-red-600 hover:bg-red-500 text-white shadow-red-950/50'
                      : 'bg-[#181818] hover:bg-[#252525] text-white border border-[#2B2B2B]'
                  }`}
                >
                  CHOOSE {pkg.name.split(' ')[0]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Unresolved Trouble Code Callout */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 mb-16 w-full">
        <div className="p-8 rounded-xl bg-[#0F0F0F] border border-[#222222] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider mb-2">
              <AlertTriangle className="w-4 h-4" />
              <span>UNRESOLVED TROUBLE CODE?</span>
            </div>
            <h3 className="font-tech text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
              EXPERIENCING AN UNIDENTIFIED NOISE, VIBRATION, OR WARNING LIGHT?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
              Bring your car to Road Dogs Auto Care in Aurora, IL. We perform complete diagnostic testing before recommending any repairs. No guesswork, no pushy sales tactics—just certified data and honest advice.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('book')}
                className="px-5 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-red-950/50"
              >
                <span>SCHEDULE DIAGNOSTIC SCAN</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`tel:${SHOP_INFO.phone}`}
                className="px-5 py-3 rounded-lg bg-[#181818] hover:bg-[#252525] text-neutral-200 font-bold text-xs uppercase tracking-wider border border-[#2B2B2B] flex items-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-red-500" />
                <span>CALL TECHNICIAN: {SHOP_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-80 bg-[#141414] p-5 rounded-lg border border-[#222222] text-xs space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-[#222222]">
              <span className="font-bold uppercase text-white">AURORA SHOP TELEMETRY</span>
              <span className="text-[10px] text-emerald-400 font-mono-num font-bold">OPEN MON - SAT</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
              <span>24-Month / 24,000-Mile Nationwide Warranty</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <Disc className="w-4 h-4 text-red-500 shrink-0" />
              <span>Complete Digital Inspection with High-Res Photos</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-300">
              <Wrench className="w-4 h-4 text-red-500 shrink-0" />
              <span>Central Aurora Location with After-Hours Key Box</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
