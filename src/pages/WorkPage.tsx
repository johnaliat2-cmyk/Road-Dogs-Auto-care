import React, { useState } from 'react';
import { PageId, ProjectLog } from '../types';
import { SHOP_INFO, PROJECTS, IMAGES } from '../data/mockData';
import { Phone, Calendar, ArrowRight, CheckCircle2, ShieldCheck, Activity, Cpu, Wrench, Disc, Crosshair } from 'lucide-react';

interface WorkPageProps {
  onNavigate: (page: PageId) => void;
  onOpenCallModal: () => void;
  onOpenTelemetryModal: (project: ProjectLog) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ 
  onNavigate, 
  onOpenCallModal, 
  onOpenTelemetryModal 
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'engine' | 'brakes' | 'suspension' | 'performance'>('all');
  const [comparisonMode, setComparisonMode] = useState<'precision' | 'worn' | 'split'>('precision');

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="flex flex-col bg-[#050505]">
      {/* Top Header */}
      <section className="bg-gradient-to-b from-[#0A0A0A] to-[#050505] border-b border-[#222222] pt-8 pb-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-tech text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-wide">
            OUR WORK & <span className="text-red-500">GARAGE GALLERY</span>
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
            Take an inside look at recent builds, computerized diagnostics, heavy mechanical overhauls, and performance upgrades engineered in our Aurora shop. Every job is precision-tested to manufacturer or motorsport tolerances.
          </p>

          {/* 4 Tech Stats Bar */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#0F0F0F] border border-[#222222]">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">LOG ENTRIES</span>
              <span className="font-mono-num text-2xl font-bold text-white mt-1 block">1,420+</span>
              <span className="text-[11px] text-neutral-500">Fully Documented</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0F0F0F] border border-[#222222]">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">ACREAGE & BAYS</span>
              <span className="font-mono-num text-2xl font-bold text-white mt-1 block">6 High-Bays</span>
              <span className="text-[11px] text-neutral-500">BendPak 10K Certified</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0F0F0F] border border-[#222222]">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">AVG. TOLERANCES</span>
              <span className="font-mono-num text-2xl font-bold text-red-500 mt-1 block">±0.002"</span>
              <span className="text-[11px] text-neutral-500">Digital Micrometer QA</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0F0F0F] border border-[#222222]">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">MASTER ASE TECHS</span>
              <span className="font-tech text-xl font-bold text-white mt-1 block">Lead: Mike</span>
              <span className="text-[11px] text-neutral-500">L1 Advanced Spec</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 lg:px-8 w-full">
        {/* Interactive Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 rounded-xl bg-[#0F0F0F] border border-[#222222] w-fit">
          {[
            { id: 'all', label: 'ALL PROJECTS (48)' },
            { id: 'engine', label: 'ENGINE OVERHAULS (14)' },
            { id: 'brakes', label: 'BRAKE UPGRADES (12)' },
            { id: 'suspension', label: 'SUSPENSION & LIFT (9)' },
            { id: 'performance', label: 'PERFORMANCE & TUNING (13)' }
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
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

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl bg-[#0F0F0F] border border-[#222222] overflow-hidden hover:border-red-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative h-52 overflow-hidden bg-neutral-900">
                  <img
                    src={project.image || IMAGES.workshopBays}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-80" />

                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded bg-black/85 text-[10px] font-mono-num text-emerald-400 flex items-center gap-1 border border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>COMPLETED & DYNO TESTED</span>
                  </div>

                  <div className="absolute bottom-2.5 left-3 text-xs font-mono-num font-bold text-red-400">
                    {project.vehicle}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <div className="flex items-center justify-between text-[11px] font-mono-num text-neutral-400 mb-1">
                    <span className="font-bold text-neutral-300">{project.jobId}</span>
                    <span>Turnaround: {project.turnaround}</span>
                  </div>

                  <h3 className="font-tech text-base font-bold uppercase text-white tracking-wide mt-1 group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-400 mt-2 line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Specs Pill List */}
                  <div className="mt-4 pt-3 border-t border-[#222222] space-y-1.5 text-[11px]">
                    {project.specs.map((s, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-neutral-500 uppercase">{s.label}</span>
                        <span className="font-mono-num font-bold text-neutral-200">{s.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Lead Tech Quote */}
                  <div className="mt-4 p-2.5 rounded-lg bg-[#141414] border border-[#222222] flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-red-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                      M
                    </div>
                    <div className="text-[11px] text-neutral-300 italic truncate">
                      "{project.leadTechNote}"
                    </div>
                  </div>
                </div>
              </div>

              {/* View Telemetry Sheet CTA */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onOpenTelemetryModal(project)}
                  className="w-full py-2.5 rounded-lg bg-[#181818] hover:bg-red-600 text-neutral-200 hover:text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border border-[#2B2B2B] hover:border-red-600"
                >
                  <span>VIEW TELEMETRY SHEET</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Before & After: Brake System Architecture Interactive Showcase */}
      <section className="py-16 bg-[#0F0F0F] border-y border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-red-500 mb-1">
                DIAGNOSTIC CONTRAST
              </div>
              <h2 className="font-tech text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
                BEFORE & AFTER: <span className="text-red-500">BRAKE SYSTEM</span> ARCHITECTURE
              </h2>
              <p className="text-xs text-neutral-400 mt-1 max-w-xl">
                Inspect our overhaul standards. Witness how heat-crystallized, grooved rotors are engineered out for precision slotted carbon-metallic thermal dissipation setups.
              </p>
            </div>

            {/* Toggle Modes */}
            <div className="flex items-center gap-1 p-1 rounded-lg bg-[#141414] border border-[#222222]">
              <button
                onClick={() => setComparisonMode('worn')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-colors ${
                  comparisonMode === 'worn' ? 'bg-red-600 text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                WORN OEM SETUP
              </button>
              <button
                onClick={() => setComparisonMode('precision')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-colors ${
                  comparisonMode === 'precision' ? 'bg-red-600 text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                ROAD DOGS PRECISION
              </button>
              <button
                onClick={() => setComparisonMode('split')}
                className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-colors ${
                  comparisonMode === 'split' ? 'bg-red-600 text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                SIDE-BY-SIDE SPLIT
              </button>
            </div>
          </div>

          {/* Visual Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 relative rounded-xl overflow-hidden border border-[#222222] shadow-2xl h-80 sm:h-96">
              <img
                src={IMAGES.brakeCaliper}
                alt="Brembo brake rotor and red caliper overhaul"
                className={`w-full h-full object-cover transition-all duration-500 ${
                  comparisonMode === 'worn' ? 'filter grayscale contrast-125 brightness-75' : ''
                }`}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

              <div className="absolute top-3 left-3 px-3 py-1 rounded bg-black/80 text-[11px] font-mono-num font-bold text-white border border-white/10">
                {comparisonMode === 'worn' ? 'WORN OEM SETUP: SCORING & THERMAL GLAZING' : 'ROAD DOGS STANDARD: PRECISION SLOTTED CARBON-METALLIC'}
              </div>

              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-lg bg-black/85 backdrop-blur-md border border-[#222222] text-xs">
                <span className="text-red-400 font-bold uppercase block text-[10px]">
                  ENGINEERED RESULT:
                </span>
                <p className="text-neutral-300 mt-0.5 leading-relaxed">
                  0.0008" rotor runout on computerized dial indicator, curved ventilation internal vane passages reducing peak braking temps by 140°F, instant bite response.
                </p>
                <div className="mt-2 flex justify-between items-center text-[10px] text-neutral-500 font-mono-num">
                  <span>INSPECTION UNIT: 2020 MUSTANG GT FRONT ROTOR BAY</span>
                  <span>TOLERANCES RE-MEASURED @ 500-MILE CHECK</span>
                </div>
              </div>
            </div>

            {/* Telemetry Delta Report */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-[#141414] border border-[#222222]">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-5 h-5 text-red-500" />
                <h3 className="font-tech text-base font-bold uppercase text-white tracking-wide">
                  TELEMETRY DELTA REPORT
                </h3>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-3 rounded-lg bg-[#0F0F0F] border border-[#222222]">
                  <div className="flex justify-between items-center font-mono-num">
                    <span className="text-neutral-400 font-semibold">LATERAL RUNOUT FLUCTUATION</span>
                    <span className="text-emerald-400 font-bold">0.009" → 0.0008"</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    93% reduction in high-speed steering vibration & pedal pulsation.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#0F0F0F] border border-[#222222]">
                  <div className="flex justify-between items-center font-mono-num">
                    <span className="text-neutral-400 font-semibold">THERMAL DISSIPATION CEILING</span>
                    <span className="text-red-400 font-bold">760°F → 510°F</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    Direct flow curved directional cooling vanes eliminate catastrophic heat fade.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#0F0F0F] border border-[#222222]">
                  <div className="flex justify-between items-center font-mono-num">
                    <span className="text-neutral-400 font-semibold">PAD COMPOUND LONGEVITY</span>
                    <span className="text-white font-bold">+16,000 MILES EST.</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    Carbon-ceramic infused matrix compound resists rotor grooving.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#222222] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase font-bold block">SUSPECT ROTOR WARPAGE?</span>
                  <span className="text-xs font-bold text-white">FREE RUNOUT DIAL CHECK</span>
                </div>
                <button
                  onClick={onOpenCallModal}
                  className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  CALL SHOP
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Equipment & Standards Arsenal */}
      <section className="py-16 max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-red-500 mb-1">
            CALIBRATION LABORATORY ARSENAL
          </div>
          <h2 className="font-tech text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
            WORKSHOP EQUIPMENT & <span className="text-red-500">SHOP STANDARDS</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2">
            We don't guess. We utilize precision tier-one diagnostic workstations and structural alignment equipment identical to factory racing telemetry bays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-[#0F0F0F] border border-[#222222] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-950/40 border border-red-500/30 text-red-500 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">
                ECU & CAN-BUS TELEMETRY
              </span>
              <h3 className="font-tech text-base font-bold uppercase text-white mt-1">
                SNAP-ON ZEUS+ DIAGNOSTIC WORKSTATIONS
              </h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Bi-directional control, live OEM PID streaming, high-speed dual-channel digital lab oscilloscope, and verified factory guided component tests down to the millivolt.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#222222] text-[10px] font-mono-num text-red-400 font-bold">
              SPEC CAPABILITY: Live OEM Factory Flash & Key Coding
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#0F0F0F] border border-[#222222] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-950/40 border border-red-500/30 text-red-500 flex items-center justify-center mb-4">
                <Crosshair className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">
                CHASSIS GEOMETRY
              </span>
              <h3 className="font-tech text-base font-bold uppercase text-white mt-1">
                HUNTER HAWKEYE ELITE 3D LASER SYSTEM
              </h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Four high-resolution cameras calculate rolling compensation in 90 seconds. Touchless rim adapters ensure zero wheel-lip scuffing or clamping stress.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#222222] text-[10px] font-mono-num text-red-400 font-bold">
              SPEC CAPABILITY: ±0.01° Caster, Camber & Thrust Angle
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#0F0F0F] border border-[#222222] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-950/40 border border-red-500/30 text-red-500 flex items-center justify-center mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">
                HEAVY MECHANICAL STAGING
              </span>
              <h3 className="font-tech text-base font-bold uppercase text-white mt-1">
                BENDPAK 10K DUAL-COLUMN HYDRAULIC LIFTS
              </h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Clearfloor asymmetric design with triple-telescoping arms. Engineered for frame-rigid support during subframe drops, engine extraction, and drivetrain alignment.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#222222] text-[10px] font-mono-num text-red-400 font-bold">
              SPEC CAPABILITY: 10,000 LB Continuous Weight Capacity
            </div>
          </div>

          <div className="p-6 rounded-xl bg-[#0F0F0F] border border-[#222222] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-950/40 border border-red-500/30 text-red-500 flex items-center justify-center mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">
                LOAD SIMULATION & TUNING
              </span>
              <h3 className="font-tech text-base font-bold uppercase text-white mt-1">
                MUSTANG AWD EDDY CURRENT CHASSIS DYNO
              </h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                True road-load absorption power testing. Validates transient engine tuning, high-speed powertrain stability, boost regulation, and driveline vibration diagnostics.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-[#222222] text-[10px] font-mono-num text-red-400 font-bold">
              SPEC CAPABILITY: Up to 2,000 HP / 175 MPH Load Cell
            </div>
          </div>
        </div>
      </section>

      {/* Want Similar Work CTA */}
      <section className="bg-gradient-to-r from-red-950/60 via-[#141414] to-[#0F0F0F] border-t border-red-500/30 py-12 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-tech text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
              NEED EXPERT SERVICE ON <span className="text-red-500">YOUR VEHICLE?</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-xl">
              From basic fluid services to total mechanical reconstruction and performance tuning, experience the confidence of an ASE-certified repair shop that operates at peak accuracy.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('book')}
              className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-red-950/50"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK APPOINTMENT</span>
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
