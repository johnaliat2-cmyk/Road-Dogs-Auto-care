import React, { useState } from 'react';
import { PageId } from '../types';
import { SHOP_INFO, FAQS, IMAGES } from '../data/mockData';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertTriangle, Key, ChevronDown, ChevronUp, Navigation, Truck, Shield } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenCallModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenCallModal }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    year: '2018',
    make: 'Ford',
    model: 'F-150',
    mileage: '84,200',
    category: 'Engine Diagnostics & CEL',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col bg-[#050505]">
      {/* Top Header */}
      <section className="bg-gradient-to-b from-[#0A0A0A] to-[#050505] border-b border-[#1F1F1F] pt-8 pb-10 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-tech text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-wide">
                GET IN TOUCH WITH <span className="text-red-500">ROAD DOGS AUTO CARE</span>
              </h1>
              <p className="mt-3 text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
                Have a question about a repair, need a diagnostic quote, or need roadside mechanical assistance in Aurora? Our technicians are ready to troubleshoot, benchmark, and deploy immediate precision support.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-[#111111] border border-red-500/30 text-xs shrink-0 flex items-center gap-3">
              <div className="p-2 rounded bg-red-600/20 text-red-500 font-bold">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-red-400 font-bold uppercase block">RAPID TRIAGE DESK</span>
                <span className="font-tech text-sm font-bold text-white uppercase">KANE COUNTY & DUPAGE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Two-Column Layout */}
      <section className="py-12 max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Line & Ops + Early Bird Drop */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Workshop Headquarters */}
            <div className="p-6 rounded-xl bg-[#0F0F0F] border border-[#222222] shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-[#222222] mb-5">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                  WORKSHOP HEADQUARTERS
                </span>
                <h3 className="font-tech text-sm font-bold uppercase text-white tracking-wide">
                  DIRECT LINE & OPS
                </h3>
              </div>

              {/* Priority Voice Line */}
              <div className="p-4 rounded-lg bg-red-600/10 border border-red-500/40 text-center mb-5">
                <span className="text-[10px] font-bold uppercase text-red-400 tracking-wider block">
                  PRIORITY VOICE LINE
                </span>
                <div className="font-mono-num text-xl sm:text-2xl font-bold text-white mt-1">
                  {SHOP_INFO.phone}
                </div>
                <a
                  href={`tel:${SHOP_INFO.phone}`}
                  className="mt-3 w-full py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>TAP TO CALL</span>
                </a>
              </div>

              {/* Details List */}
              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase font-bold block">
                    SERVICE DESK EMAIL
                  </span>
                  <a
                    href={`mailto:${SHOP_INFO.email}`}
                    className="font-medium text-neutral-200 hover:text-red-400 transition-colors break-all flex items-center gap-1.5 mt-0.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span>{SHOP_INFO.email}</span>
                  </a>
                </div>

                <div>
                  <span className="text-[10px] text-neutral-500 uppercase font-bold block">
                    FACILITY ADDRESS
                  </span>
                  <div className="text-white font-medium flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    <span>{SHOP_INFO.fullAddress}</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-0.5">
                    Fox Valley Metro Zone • Complete Diagnostic Bay
                  </p>
                </div>

                <div className="pt-3 border-t border-[#222222]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] text-neutral-500 uppercase font-bold">
                      STANDARD SHOP HOURS
                    </span>
                    <span className="text-[10px] text-neutral-400 font-mono-num">CST ZONE</span>
                  </div>
                  <div className="space-y-1 text-neutral-300">
                    <div className="flex justify-between">
                      <span>Monday – Saturday</span>
                      <span className="font-mono-num font-semibold text-white">{SHOP_INFO.hoursWeekday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-red-400 font-semibold uppercase">EMERGENCY ON-CALL</span>
                    </div>
                  </div>
                </div>

                {/* 24/7 Roadside Card */}
                <div 
                  onClick={onOpenCallModal}
                  className="p-3.5 rounded-lg bg-[#141414] border border-red-900/40 hover:border-red-600/50 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2 text-white font-bold text-xs uppercase">
                    <Truck className="w-4 h-4 text-red-500" />
                    <span>24/7 ROADSIDE & TOW DISPATCH</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-1 leading-snug">
                    Immediate vehicle breakdown or lock-out in Aurora? Call our direct hotline anytime. We coordinate rapid towing & intake bays 24 hours a day.
                  </p>
                </div>
              </div>
            </div>

            {/* Early Bird / After-Hours Drop Box */}
            <div className="p-6 rounded-xl bg-[#0F0F0F] border border-[#222222] shadow-xl">
              <div className="flex items-center gap-2 pb-3 border-b border-[#222222] mb-4">
                <Key className="w-4 h-4 text-amber-400" />
                <div>
                  <span className="text-[10px] font-bold uppercase text-amber-400 block leading-none">
                    CONVENIENCE INTAKE
                  </span>
                  <h3 className="font-tech text-sm font-bold uppercase text-white tracking-wide">
                    EARLY BIRD / AFTER-HOURS DROP
                  </h3>
                </div>
              </div>

              <p className="text-xs text-neutral-300 mb-4 leading-relaxed">
                Dropping off before 8:00 AM or after 6:00 PM? Follow our secure bay check-in protocol:
              </p>

              <div className="space-y-2.5 text-xs text-neutral-300">
                <div className="p-2.5 rounded-lg bg-[#141414] border border-[#222222] flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded bg-red-600 text-white font-mono-num font-bold text-[10px] flex items-center justify-center shrink-0">
                    01
                  </span>
                  <span>Park vehicle in designated bay parking along the secure side perimeter.</span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#141414] border border-[#222222] flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded bg-red-600 text-white font-mono-num font-bold text-[10px] flex items-center justify-center shrink-0">
                    02
                  </span>
                  <span>Take an envelope from the heavy-duty steel drop box near Service Bay #1.</span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#141414] border border-[#222222] flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded bg-red-600 text-white font-mono-num font-bold text-[10px] flex items-center justify-center shrink-0">
                    03
                  </span>
                  <span>Fill out key-slip details, insert vehicle key fob, seal and slide into vault slot.</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#222222] text-[11px] text-neutral-400 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Vault checked every morning at 7:45 AM CST by lead technician.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Vehicle Symptom & Repair Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-[#0F0F0F] border border-[#222222] shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#222222] mb-6">
                <div>
                  <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider block">
                    FAST DIGITAL DISPATCH
                  </span>
                  <h2 className="font-tech text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
                    VEHICLE SYMPTOM & REPAIR INQUIRY
                  </h2>
                </div>
                <span className="px-2 py-0.5 rounded bg-red-600/20 text-red-400 font-mono-num text-[10px] font-bold uppercase">
                  DIRECT BAY INTAKE
                </span>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-[#141414] rounded-xl border border-emerald-500/40 animate-in fade-in duration-200">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-tech text-xl font-bold uppercase text-white">
                    INQUIRY TRANSMITTED TO SHOP DESK
                  </h3>
                  <p className="text-xs text-neutral-300 mt-2 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Mike Henderson and our service team have received your dispatch inquiry and will respond within 30 minutes during shop hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ ...formData, message: '' });
                    }}
                    className="mt-6 px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-xs font-bold text-white uppercase tracking-wider transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        FULL NAME <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Marcus Vance"
                        className="w-full bg-[#141414] border border-[#262626] rounded-lg px-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-red-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        DIRECT PHONE <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(331) 000-0000"
                        className="w-full bg-[#141414] border border-[#262626] rounded-lg px-3 py-2.5 text-xs text-white placeholder-neutral-500 font-mono-num focus:border-red-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      EMAIL ADDRESS <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full bg-[#141414] border border-[#262626] rounded-lg px-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-red-500 focus:outline-none"
                    />
                  </div>

                  {/* Vehicle Specs Grid */}
                  <div className="p-4 rounded-lg bg-[#141414] border border-[#262626]">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block mb-3">
                      VEHICLE SPECIFICATIONS (OPTIONAL BUT RECOMMENDED)
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      <div>
                        <span className="text-[10px] text-neutral-400 block mb-1">YEAR</span>
                        <input
                          type="text"
                          value={formData.year}
                          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                          className="w-full bg-[#0F0F0F] border border-[#262626] rounded px-2.5 py-1.5 text-xs text-white"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] text-neutral-400 block mb-1">MAKE</span>
                        <input
                          type="text"
                          value={formData.make}
                          onChange={(e) => setFormData({ ...formData, make: e.target.value })}
                          className="w-full bg-[#0F0F0F] border border-[#262626] rounded px-2.5 py-1.5 text-xs text-white"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] text-neutral-400 block mb-1">MODEL</span>
                        <input
                          type="text"
                          value={formData.model}
                          onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                          className="w-full bg-[#0F0F0F] border border-[#262626] rounded px-2.5 py-1.5 text-xs text-white"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] text-neutral-400 block mb-1">EST. MILEAGE</span>
                        <input
                          type="text"
                          value={formData.mileage}
                          onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
                          className="w-full bg-[#0F0F0F] border border-[#262626] rounded px-2.5 py-1.5 text-xs text-white font-mono-num"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      PRIMARY INQUIRY CATEGORY <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full bg-[#141414] border border-[#262626] rounded-lg px-3 py-2.5 text-xs text-white focus:border-red-500 focus:outline-none"
                    >
                      <option value="Engine Diagnostics & CEL">Engine Diagnostics & CEL Warning</option>
                      <option value="Brake System Overhaul">Brake System & Rotor Vibration</option>
                      <option value="Transmission & Drivetrain">Transmission Shift Slipping / Drivetrain</option>
                      <option value="Suspension & Steering">Suspension, Death Wobble & Laser Alignment</option>
                      <option value="A/C & Climate Control">A/C Evac/Recharge & Climate Control</option>
                      <option value="Commercial Fleet Maintenance">Commercial Fleet Account Maintenance</option>
                      <option value="General Mechanical Quote">General Mechanical Estimate</option>
                    </select>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-semibold text-neutral-300">
                        MESSAGE / VEHICLE SYMPTOMS DESCRIPTION <span className="text-red-500">*</span>
                      </label>
                      <span className="text-[10px] text-neutral-500">
                        Audible noises, vibrations, error codes...
                      </span>
                    </div>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you are experiencing (e.g. Squealing noise while decelerating from 45mph, Check Engine code P0300 misfire, sudden loss of cabin heat)..."
                      className="w-full bg-[#141414] border border-[#262626] rounded-lg p-3 text-xs text-white placeholder-neutral-500 focus:border-red-500 focus:outline-none"
                    />
                  </div>

                  <div className="pt-4 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                      <Clock className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>We respond to all digital inquiries within <strong className="text-white">30 minutes</strong> during shop hours.</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg shadow-red-950/50"
                    >
                      <span>SEND INQUIRY TO SHOP DESK</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Facility Verification: Direct Inside Look at Road Dogs Bays */}
      <section className="py-12 bg-[#0B0B0B] border-y border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-red-500 block mb-1">
                FACILITY VERIFICATION
              </span>
              <h2 className="font-tech text-xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
                DIRECT INSIDE LOOK AT ROAD DOGS BAYS
              </h2>
            </div>
            <p className="text-xs text-neutral-400 max-w-md">
              High-clearance hydraulic lifts, calibrated computerized scan tools, and sterile assembly benches in our Aurora workshop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group rounded-xl overflow-hidden border border-[#222222] bg-[#111111]">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={IMAGES.diagnosticBay}
                  alt="Bay 1 Computer Diagnostics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="font-bold text-white uppercase">BAY 1 • COMPUTER DIAGNOSTICS</span>
                  <span className="px-2 py-0.5 rounded bg-red-600/80 text-white font-mono-num text-[10px] font-bold">
                    LIVE INTAKE
                  </span>
                </div>
              </div>
            </div>

            <div className="group rounded-xl overflow-hidden border border-[#222222] bg-[#111111]">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={IMAGES.brakeCaliper}
                  alt="Bay 2 Precision Braking Bench"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="font-bold text-white uppercase">BAY 2 • PRECISION BRAKING BENCH</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-600/80 text-white font-mono-num text-[10px] font-bold">
                    OEM TOLERANCE
                  </span>
                </div>
              </div>
            </div>

            <div className="group rounded-xl overflow-hidden border border-[#222222] bg-[#111111]">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={IMAGES.workshopBays}
                  alt="Emergency Recovery 24/7 Unit"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="font-bold text-white uppercase">EMERGENCY RECOVERY • 24/7 UNIT</span>
                  <span className="px-2 py-0.5 rounded bg-amber-600/80 text-white font-mono-num text-[10px] font-bold">
                    ON-CALL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Location & Rapid Access Map Component */}
      <section className="py-12 max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="font-tech text-xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
              WORKSHOP LOCATION & ACCESS
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono-num text-neutral-300">
            <span>
              Downtown Aurora: <strong className="text-white">5 Mins</strong>
            </span>
            <span className="text-neutral-600">•</span>
            <span>
              I-88 Tech Corridor: <strong className="text-white">8 Mins</strong>
            </span>
            <span className="text-neutral-600">•</span>
            <span>
              Naperville Border: <strong className="text-white">12 Mins</strong>
            </span>
          </div>
        </div>

        {/* Stylized Automotive Map Visual Container */}
        <div className="relative rounded-xl overflow-hidden border border-[#222222] bg-[#0F0F0F] p-6 sm:p-10 shadow-2xl">
          {/* Subtle Road Grid / Schematic */}
          <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

          {/* Coordinate Header */}
          <div className="flex items-center justify-between text-[11px] font-mono-num text-neutral-400 mb-8 border-b border-[#222222] pb-3">
            <div>LAT: {SHOP_INFO.lat} · LONG: {SHOP_INFO.long}</div>
            <div className="text-red-400 font-bold">KANE CO. DISPATCH HUB</div>
          </div>

          {/* Stylized Visual Node Layout */}
          <div className="relative py-12 flex flex-col items-center justify-center text-center">
            {/* Pin for Road Dogs */}
            <div className="relative flex items-center justify-center mb-4">
              <div className="relative w-12 h-12 rounded-full bg-red-600 border-2 border-white flex items-center justify-center shadow-xl shadow-red-950/80">
                <MapPin className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="px-4 py-1.5 rounded-lg bg-black/90 border border-red-500 text-white font-tech text-base font-bold uppercase tracking-wider shadow-lg">
              ROAD DOGS AUTO CARE
            </div>
            <div className="text-xs text-neutral-300 mt-2 font-mono-num">
              Aurora, IL, United States · Bays 1 through 6
            </div>
            <p className="text-xs text-neutral-400 mt-1 max-w-md">
              Convenient arterial access via IL-31, IL-25, and Farnsworth Avenue corridor.
            </p>
          </div>

          {/* Bottom Bar with Directions Button */}
          <div className="mt-8 pt-4 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-400">
              <strong className="text-white uppercase block">DIRECT WORKSHOP NAVIGATION</strong>
              <span>Fast transit via IL-31, IL-25, and Farnsworth Ave exits.</span>
            </div>

            <a
              href="https://maps.google.com/?q=Aurora+IL+Auto+Repair"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg"
            >
              <span>GET TURN-BY-TURN DIRECTIONS</span>
              <Navigation className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-[#0B0B0B] border-t border-[#1F1F1F]">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-red-500 block mb-1">
              CLEAR TECHNICAL PROTOCOLS
            </span>
            <h2 className="font-tech text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              Transparent procedures, zero hidden add-ons, and upfront mechanical clarity.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#222222] bg-[#111111] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono-num font-bold text-red-500 text-sm">
                        0{idx + 1}
                      </span>
                      <span className="font-tech text-sm sm:text-base font-bold uppercase text-white tracking-wide">
                        {faq.q}
                      </span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-red-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs text-neutral-300 leading-relaxed border-t border-[#1F1F1F] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Fleet / Unique Build callout */}
          <div className="mt-8 p-4 rounded-xl bg-[#111111] border border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div>
              <strong className="text-white uppercase block">HAVE A UNIQUE VEHICLE BUILD OR COMMERCIAL FLEET?</strong>
              <span className="text-neutral-400">We handle custom diesel configurations, work van fleets, and high-performance track platforms.</span>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-2 rounded-lg bg-[#181818] hover:bg-[#252525] text-neutral-200 hover:text-white font-bold text-xs uppercase tracking-wider whitespace-nowrap border border-[#2B2B2B]"
            >
              SPEAK WITH LEAD TECH →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
