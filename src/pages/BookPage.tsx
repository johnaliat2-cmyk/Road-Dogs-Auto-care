import React, { useState } from 'react';
import { PageId, AppointmentState } from '../types';
import { SHOP_INFO, IMAGES } from '../data/mockData';
import { Calendar, Phone, Mail, Clock, CheckCircle2, AlertTriangle, ArrowRight, ArrowLeft, Car, Shield, Wrench, Check } from 'lucide-react';

interface BookPageProps {
  onNavigate: (page: PageId) => void;
  onOpenCallModal: () => void;
  preselectedService?: string;
}

const POPULAR_MAKES = [
  "Ford", "Chevrolet", "GMC", "Dodge / Ram", "Jeep", "Toyota", "Honda", 
  "BMW", "Mercedes-Benz", "Audi", "Subaru", "Nissan", "Hyundai", "Kia", "Other"
];

const AVAILABLE_SERVICES = [
  "Computer Diagnostics & CEL Clear",
  "Brake System Pad & Rotor Overhaul",
  "Full Synthetic Oil & 30-Pt Inspection",
  "Transmission & Drivetrain Service",
  "Laser 4-Wheel Alignment & Suspension",
  "HVAC & A/C System Recharge (1234yf/R134a)",
  "Basic Care Package ($89)",
  "Pro Road Guardian ($199)",
  "Performance Heavy Overhaul ($389)",
  "Unidentified Noise / Vibration Diagnosis"
];

const TIME_SLOTS = [
  { time: "8:30 AM", label: "Early Bay 1" },
  { time: "9:30 AM", label: "Morning Prime" },
  { time: "11:00 AM", label: "Mid-Day Slot" },
  { time: "1:30 PM", label: "Afternoon Bay" },
  { time: "3:30 PM", label: "Express Bay" },
  { time: "4:30 PM", label: "Late Drop-Off" }
];

export const BookPage: React.FC<BookPageProps> = ({ onNavigate, onOpenCallModal, preselectedService }) => {
  const [stage, setStage] = useState<1 | 2 | 3 | 4>(1);
  const [submitted, setSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  // Form State
  const [formData, setFormData] = useState<AppointmentState>({
    year: '2021',
    make: 'Ford',
    model: 'F-150',
    mileage: '64500',
    engineDrivetrain: '3.5L EcoBoost Twin-Turbo V6 / 4WD',
    selectedServices: preselectedService ? [preselectedService] : ['Computer Diagnostics & CEL Clear'],
    customServiceNotes: '',
    selectedDate: '2026-10-27',
    selectedTimeSlot: '9:30 AM',
    dropOffType: 'drop',
    fullName: '',
    phone: '',
    email: '',
    notes: '',
    urgentTowing: false
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleServiceToggle = (srv: string) => {
    setFormData(prev => {
      const exists = prev.selectedServices.includes(srv);
      return {
        ...prev,
        selectedServices: exists 
          ? prev.selectedServices.filter(s => s !== srv)
          : [...prev.selectedServices, srv]
      };
    });
  };

  const handleNextStage = () => {
    const errors: Record<string, string> = {};
    if (stage === 1) {
      if (!formData.year) errors.year = "Vehicle year is required";
      if (!formData.make) errors.make = "Vehicle make is required";
      if (!formData.model) errors.model = "Vehicle model is required";
    } else if (stage === 2) {
      if (formData.selectedServices.length === 0 && !formData.customServiceNotes.trim()) {
        errors.services = "Please select at least one service or describe symptoms";
      }
    } else if (stage === 3) {
      if (!formData.selectedDate) errors.date = "Please select a target date";
      if (!formData.selectedTimeSlot) errors.time = "Please choose a time slot";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    if (stage < 4) {
      setStage((stage + 1) as any);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = "Full name is required";
    if (!formData.phone.trim() || formData.phone.length < 7) errors.phone = "Valid phone number is required";
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = "Valid email address is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const code = `RD-AURORA-${randomNum}`;
    setConfirmationCode(code);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col bg-[#050505]">
      {/* Top Banner */}
      <section className="bg-gradient-to-b from-[#0A0A0A] to-[#050505] border-b border-[#222222] pt-8 pb-10 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-tech text-3xl sm:text-5xl font-extrabold uppercase text-white tracking-wide text-balance">
            SCHEDULE YOUR AUTO SERVICE <span className="text-red-500">IN AURORA</span>
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Reserve your diagnostic bay or routine maintenance slot in under 2 minutes. We review and confirm all appointments by phone within 2 hours.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-neutral-400">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
              ASE-Certified Master Techs
            </span>
            <span className="text-neutral-600">·</span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
              Real-Time Confirmation
            </span>
            <span className="text-neutral-600">·</span>
            <a href={`tel:${SHOP_INFO.phone}`} className="flex items-center gap-1.5 text-red-400 font-mono-num font-semibold hover:underline">
              <Phone className="w-3.5 h-3.5" />
              {SHOP_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Main Reservation Container */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 w-full">
        {submitted ? (
          /* Confirmation State */
          <div className="max-w-2xl mx-auto p-8 rounded-xl bg-[#0F0F0F] border border-red-500/50 shadow-2xl text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-red-600/20 border border-red-500 text-red-500 flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8" />
            </div>

            <div className="inline-block px-3 py-1 rounded bg-red-600/20 text-red-400 text-xs font-mono-num font-bold uppercase mb-2">
              CONFIRMATION: {confirmationCode}
            </div>

            <h2 className="font-tech text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
              RESERVATION QUEUED AT ROAD DOGS BAY
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 mt-3 leading-relaxed">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. Your bay reservation for your <strong className="text-white">{formData.year} {formData.make} {formData.model}</strong> has been logged to our Aurora dispatch desk.
            </p>

            <div className="mt-6 p-4 rounded-lg bg-[#141414] border border-[#222222] text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-400">Target Date & Slot:</span>
                <span className="font-mono-num text-white font-semibold">{formData.selectedDate} at {formData.selectedTimeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Scheduled Services:</span>
                <span className="text-white font-semibold text-right max-w-xs">{formData.selectedServices.join(', ')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Contact Telephone:</span>
                <span className="font-mono-num text-white font-semibold">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Facility Location:</span>
                <span className="text-white font-semibold">Road Dogs Workshop, Aurora, IL</span>
              </div>
            </div>

            <div className="mt-6 p-3 rounded-lg bg-[#050505] text-[11px] text-neutral-400 flex items-center gap-2 text-left">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Mike Henderson or service coordinator Elena Torres will phone or text you within 2 hours to confirm bay assignment and parts staging.</span>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setStage(1);
                }}
                className="px-5 py-2.5 rounded-lg bg-[#181818] hover:bg-[#222222] text-xs font-semibold text-neutral-200 transition-colors"
              >
                Book Another Vehicle
              </button>

              <button
                onClick={() => onNavigate('home')}
                className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-xs font-bold text-white uppercase tracking-wider transition-colors"
              >
                Back to Homepage
              </button>
            </div>
          </div>
        ) : (
          /* Multi-Stage Form & Reservation Manifest */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Form & Stepper */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* Stepper Tabs */}
              <div className="grid grid-cols-4 gap-2 p-1.5 rounded-xl bg-[#0F0F0F] border border-[#222222]">
                {[
                  { step: 1, label: "Vehicle Specs" },
                  { step: 2, label: "Service Needs" },
                  { step: 3, label: "Date & Time" },
                  { step: 4, label: "Dispatch Notes" }
                ].map((item) => {
                  const isActive = stage === item.step;
                  const isDone = stage > item.step;
                  return (
                    <button
                      key={item.step}
                      onClick={() => setStage(item.step as any)}
                      className={`py-2 px-1 sm:px-3 rounded-lg text-left transition-all focus-visible:outline-none ${
                        isActive
                          ? 'bg-red-600 text-white shadow-md'
                          : isDone
                          ? 'bg-[#141414] text-neutral-200'
                          : 'text-neutral-500 hover:text-neutral-300'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold font-mono-num ${
                          isActive ? 'bg-white text-red-600' : isDone ? 'bg-red-500 text-white' : 'bg-neutral-700 text-neutral-300'
                        }`}>
                          {isDone ? '✓' : item.step}
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-wider hidden sm:inline">
                          STAGE 0{item.step}
                        </span>
                      </div>
                      <div className="text-xs font-semibold truncate mt-0.5">
                        {item.label}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Form Content Area */}
              <div className="p-6 sm:p-8 rounded-xl bg-[#0F0F0F] border border-[#222222]">
                {/* Stage 1: Vehicle Specs */}
                {stage === 1 && (
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-[#222222] mb-6">
                      <div>
                        <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider block">
                          SYSTEM TELEMETRY INPUT · STEP 1 OF 4
                        </span>
                        <h2 className="font-tech text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
                          VEHICLE IDENTIFICATION & SPECS
                        </h2>
                      </div>
                      <Car className="w-6 h-6 text-neutral-500" />
                    </div>

                    <p className="text-xs text-neutral-400 mb-6">
                      Accurate details ensure our technicians preload OEM torque specs, scan tool profiles, and required fluids prior to check-in.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Year */}
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-1">
                          VEHICLE YEAR <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.year}
                          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                          className="w-full bg-[#141414] border border-[#222222] rounded-lg px-3 py-2.5 text-xs text-white focus:border-red-500 focus:outline-none"
                        >
                          {Array.from({ length: 32 }, (_, i) => 2026 - i).map((y) => (
                            <option key={y} value={y}>{y}</option>
                          ))}
                        </select>
                        {formErrors.year && <span className="text-[10px] text-red-400 mt-1 block">{formErrors.year}</span>}
                      </div>

                      {/* Make */}
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-1">
                          VEHICLE MAKE <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.make}
                          onChange={(e) => setFormData({ ...formData, make: e.target.value })}
                          className="w-full bg-[#141414] border border-[#222222] rounded-lg px-3 py-2.5 text-xs text-white focus:border-red-500 focus:outline-none"
                        >
                          {POPULAR_MAKES.map((m) => (
                            <option key={m} value={m}>{m}</option>
                          ))}
                        </select>
                        {formErrors.make && <span className="text-[10px] text-red-400 mt-1 block">{formErrors.make}</span>}
                      </div>

                      {/* Model */}
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-1">
                          VEHICLE MODEL <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.model}
                          onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                          placeholder="e.g. F-150 / Mustang GT / Silverado 1500"
                          className="w-full bg-[#141414] border border-[#222222] rounded-lg px-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-red-500 focus:outline-none"
                        />
                        {formErrors.model && <span className="text-[10px] text-red-400 mt-1 block">{formErrors.model}</span>}
                      </div>

                      {/* Mileage */}
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-1">
                          CURRENT MILEAGE <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.mileage}
                          onChange={(e) => setFormData({ ...formData, mileage: e.target.value })}
                          placeholder="e.g. 64,500"
                          className="w-full bg-[#141414] border border-[#222222] rounded-lg px-3 py-2.5 text-xs text-white placeholder-neutral-500 font-mono-num focus:border-red-500 focus:outline-none"
                        />
                      </div>

                      {/* Engine / Sub-model */}
                      <div className="sm:col-span-2">
                        <div className="flex justify-between items-center mb-1">
                          <label className="text-xs font-semibold text-neutral-300">
                            ENGINE TYPE / SUB-MODEL / DRIVETRAIN
                          </label>
                          <span className="text-[10px] text-neutral-500 uppercase">Optional</span>
                        </div>
                        <input
                          type="text"
                          value={formData.engineDrivetrain}
                          onChange={(e) => setFormData({ ...formData, engineDrivetrain: e.target.value })}
                          placeholder="e.g. 3.5L EcoBoost Twin-Turbo V6 / 4WD / Crew Cab"
                          className="w-full bg-[#141414] border border-[#222222] rounded-lg px-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-red-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#222222] flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                        <Wrench className="w-3.5 h-3.5 text-red-500" />
                        <span>Factory Tolerances Matched: <strong className="text-white">DOMESTIC & IMPORT</strong></span>
                      </div>

                      <button
                        type="button"
                        onClick={handleNextStage}
                        className="px-6 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-red-950/40"
                      >
                        <span>NEXT: SERVICE SELECTION</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Stage 2: Service Needs */}
                {stage === 2 && (
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-[#222222] mb-6">
                      <div>
                        <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider block">
                          SERVICE MANIFEST SELECTION · STEP 2 OF 4
                        </span>
                        <h2 className="font-tech text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
                          PRIMARY REPAIR & MAINTENANCE GOALS
                        </h2>
                      </div>
                      <Wrench className="w-6 h-6 text-neutral-500" />
                    </div>

                    <p className="text-xs text-neutral-400 mb-4">
                      Select all operations you need performed. You can also specify custom warning codes or symptoms below.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                      {AVAILABLE_SERVICES.map((srv) => {
                        const isSelected = formData.selectedServices.includes(srv);
                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => handleServiceToggle(srv)}
                            className={`p-3 rounded-lg border text-left text-xs transition-all flex items-start gap-2.5 ${
                              isSelected
                                ? 'bg-red-600/15 border-red-500/60 text-white font-medium shadow-sm'
                                : 'bg-[#141414] border-[#222222] text-neutral-300 hover:border-neutral-600'
                            }`}
                          >
                            <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 mt-0.5 ${
                              isSelected ? 'bg-red-600 border-red-500 text-white' : 'border-neutral-600 bg-transparent'
                            }`}>
                              {isSelected && <Check className="w-3 h-3" />}
                            </div>
                            <span>{srv}</span>
                          </button>
                        );
                      })}
                    </div>

                    {formErrors.services && (
                      <span className="text-xs text-red-400 mb-4 block">{formErrors.services}</span>
                    )}

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        SPECIFIC SYMPTOMS, CODES, OR CONCERNS
                      </label>
                      <textarea
                        rows={3}
                        value={formData.customServiceNotes}
                        onChange={(e) => setFormData({ ...formData, customServiceNotes: e.target.value })}
                        placeholder="e.g. Squeaking noise when braking from high speeds, check engine code P0420, or spongy brake pedal..."
                        className="w-full bg-[#141414] border border-[#222222] rounded-lg p-3 text-xs text-white placeholder-neutral-500 focus:border-red-500 focus:outline-none"
                      />
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#222222] flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStage(1)}
                        className="px-4 py-2.5 rounded-lg bg-[#181818] hover:bg-[#222222] text-neutral-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back to Specs</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNextStage}
                        className="px-6 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-red-950/40"
                      >
                        <span>NEXT: DATE & TIME</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Stage 3: Date & Time */}
                {stage === 3 && (
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-[#222222] mb-6">
                      <div>
                        <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider block">
                          BAY SCHEDULING · STEP 3 OF 4
                        </span>
                        <h2 className="font-tech text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
                          TARGET DATE & BAY SLOT
                        </h2>
                      </div>
                      <Calendar className="w-6 h-6 text-neutral-500" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      {/* Date Picker */}
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-1">
                          SELECT PREFERRED DATE <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          value={formData.selectedDate}
                          onChange={(e) => setFormData({ ...formData, selectedDate: e.target.value })}
                          className="w-full bg-[#141414] border border-[#222222] rounded-lg px-3 py-2.5 text-xs text-white focus:border-red-500 focus:outline-none"
                        />
                        <p className="text-[11px] text-neutral-400 mt-1.5">
                          Same-day checkups available if booked before 10:00 AM.
                        </p>
                      </div>

                      {/* Drop-off Preference */}
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-1">
                          LOGISTICS & DROP-OFF PREFERENCE
                        </label>
                        <select
                          value={formData.dropOffType}
                          onChange={(e) => setFormData({ ...formData, dropOffType: e.target.value as any })}
                          className="w-full bg-[#141414] border border-[#222222] rounded-lg px-3 py-2.5 text-xs text-white focus:border-red-500 focus:outline-none"
                        >
                          <option value="drop">Drop off vehicle & pick up when ready</option>
                          <option value="wait">Wait in climate-controlled customer lounge</option>
                          <option value="early">Early-bird / after-hours key drop box</option>
                        </select>
                      </div>
                    </div>

                    {/* Time Slot Buttons */}
                    <div className="mb-6">
                      <label className="block text-xs font-semibold text-neutral-300 mb-2">
                        TARGET ARRIVAL SLOT <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {TIME_SLOTS.map((slot) => {
                          const isSelected = formData.selectedTimeSlot === slot.time;
                          return (
                            <button
                              key={slot.time}
                              type="button"
                              onClick={() => setFormData({ ...formData, selectedTimeSlot: slot.time })}
                              className={`p-3 rounded-lg border text-center transition-all ${
                                isSelected
                                  ? 'bg-red-600 text-white border-red-500 shadow-md font-bold'
                                  : 'bg-[#141414] border-[#222222] text-neutral-300 hover:border-neutral-500'
                              }`}
                            >
                              <div className="font-mono-num text-sm">{slot.time}</div>
                              <div className="text-[10px] text-neutral-400 uppercase mt-0.5">{slot.label}</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#222222] flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStage(2)}
                        className="px-4 py-2.5 rounded-lg bg-[#181818] hover:bg-[#222222] text-neutral-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back to Services</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNextStage}
                        className="px-6 py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-red-950/40"
                      >
                        <span>NEXT: DISPATCH NOTES</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Stage 4: Dispatch Notes & Contact */}
                {stage === 4 && (
                  <form onSubmit={handleSubmit}>
                    <div className="flex items-center justify-between pb-4 border-b border-[#222222] mb-6">
                      <div>
                        <span className="text-[10px] font-bold text-red-500 uppercase tracking-wider block">
                          FINAL CONTACT CONFIRMATION · STEP 4 OF 4
                        </span>
                        <h2 className="font-tech text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
                          DRIVER CONTACT & DISPATCH INTAKE
                        </h2>
                      </div>
                      <Shield className="w-6 h-6 text-neutral-500" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                      {/* Name */}
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-neutral-300 mb-1">
                          FULL NAME <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Marcus Vance"
                          className="w-full bg-[#141414] border border-[#222222] rounded-lg px-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-red-500 focus:outline-none"
                        />
                        {formErrors.fullName && <span className="text-[10px] text-red-400 mt-1 block">{formErrors.fullName}</span>}
                      </div>

                      {/* Phone */}
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
                          className="w-full bg-[#141414] border border-[#222222] rounded-lg px-3 py-2.5 text-xs text-white placeholder-neutral-500 font-mono-num focus:border-red-500 focus:outline-none"
                        />
                        {formErrors.phone && <span className="text-[10px] text-red-400 mt-1 block">{formErrors.phone}</span>}
                      </div>

                      {/* Email */}
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
                          className="w-full bg-[#141414] border border-[#222222] rounded-lg px-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-red-500 focus:outline-none"
                        />
                        {formErrors.email && <span className="text-[10px] text-red-400 mt-1 block">{formErrors.email}</span>}
                      </div>

                      {/* Notes */}
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-neutral-300 mb-1">
                          DISPATCH INTAKE NOTES (OPTIONAL)
                        </label>
                        <textarea
                          rows={2}
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          placeholder="Any special handling instructions, aftermarket accessories, or urgent deadlines..."
                          className="w-full bg-[#141414] border border-[#222222] rounded-lg p-3 text-xs text-white placeholder-neutral-500 focus:border-red-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Urgent Towing Checkbox */}
                    <div className="p-3 rounded-lg bg-[#141414] border border-[#222222] flex items-center gap-3 mb-6">
                      <input
                        type="checkbox"
                        id="urgentTowing"
                        checked={formData.urgentTowing}
                        onChange={(e) => setFormData({ ...formData, urgentTowing: e.target.checked })}
                        className="w-4 h-4 rounded text-red-600 bg-[#050505] border-[#222222] focus:ring-0 focus:outline-none"
                      />
                      <label htmlFor="urgentTowing" className="text-xs text-neutral-300 cursor-pointer">
                        <strong className="text-white">Emergency Vehicle Towing Required:</strong> Vehicle is currently inoperable and needs roadside tow coordination to Road Dogs Auto Care.
                      </label>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#222222] flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStage(3)}
                        className="px-4 py-2.5 rounded-lg bg-[#181818] hover:bg-[#222222] text-neutral-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back to Date</span>
                      </button>

                      <button
                        type="submit"
                        className="px-8 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-lg shadow-red-950/50"
                      >
                        <Check className="w-4 h-4" />
                        <span>CONFIRM & SUBMIT RESERVATION</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Live Reservation Manifest Side Panel */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="p-6 rounded-xl bg-[#0F0F0F] border border-[#222222] shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-[#222222] mb-4">
                  <h3 className="font-tech text-base font-bold uppercase text-white tracking-wider">
                    RESERVATION MANIFEST
                  </h3>
                  <span className="px-2 py-0.5 rounded bg-red-600/20 text-red-400 font-mono-num text-[10px] font-bold uppercase">
                    PRIORITY
                  </span>
                </div>

                <div className="space-y-4 text-xs">
                  {/* Configured Vehicle */}
                  <div className="p-3 rounded-lg bg-[#141414] border border-[#222222]">
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">
                      CONFIGURED VEHICLE
                    </span>
                    <div className="flex items-center gap-2 font-bold text-white mt-1">
                      <Car className="w-4 h-4 text-red-500" />
                      <span>{formData.year} {formData.make} {formData.model}</span>
                    </div>
                    {formData.engineDrivetrain && (
                      <p className="text-[11px] text-neutral-400 mt-0.5 truncate">
                        {formData.engineDrivetrain}
                      </p>
                    )}
                    <span className="text-[10px] font-mono-num text-neutral-400 block mt-1">
                      Odometer: {formData.mileage} miles
                    </span>
                  </div>

                  {/* Scheduled Operations */}
                  <div className="p-3 rounded-lg bg-[#141414] border border-[#222222]">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
                        SCHEDULED OPERATIONS
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono-num">INCLUDED</span>
                    </div>
                    <ul className="mt-2 space-y-1 text-neutral-300">
                      <li className="flex items-center gap-1.5 text-[11px]">
                        <Check className="w-3 h-3 text-red-500" />
                        <span>Standard Vehicle Check-In</span>
                      </li>
                      {formData.selectedServices.map((s, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 text-[11px] text-white">
                          <Check className="w-3 h-3 text-red-500 shrink-0" />
                          <span className="truncate">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Target Date & Slot */}
                  <div className="p-3 rounded-lg bg-[#141414] border border-[#222222]">
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block">
                      TARGET DATE & SLOT
                    </span>
                    <div className="flex justify-between items-center mt-1">
                      <div className="flex items-center gap-1.5 font-bold text-white">
                        <Calendar className="w-3.5 h-3.5 text-red-500" />
                        <span>{formData.selectedDate}</span>
                      </div>
                      <span className="font-mono-num font-bold text-red-400">{formData.selectedTimeSlot}</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="text-[11px] text-neutral-400 pt-2 border-t border-[#222222]">
                    <strong className="text-white block font-tech uppercase">ROAD DOGS MAIN FACILITY</strong>
                    <span>Aurora, IL • Bays 1 through 6</span>
                  </div>

                  <div className="text-[10px] text-neutral-500 italic text-center">
                    Zero Upfront Obligation • Clear Estimates Provided
                  </div>
                </div>
              </div>

              {/* Aurora Workshop Floor Card */}
              <div className="rounded-xl overflow-hidden border border-[#222222] bg-[#0F0F0F]">
                <div className="relative h-36">
                  <img
                    src={IMAGES.workshopBays}
                    alt="Road Dogs workshop floor active bays"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono-num text-neutral-200">
                    AURORA WORKSHOP FLOOR
                  </div>
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 text-[10px] font-mono-num font-bold">
                    BAY ACTIVE
                  </div>
                </div>
                <div className="p-3.5 text-[11px] text-neutral-400 leading-normal">
                  Equipped with Snap-on diagnostic scanners, Hunter 3D computerized alignment rigs, and calibrated AC vacuum extraction stations.
                </div>
              </div>

              {/* Urgent Assistance Help Box */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-red-950/50 to-[#141414] border border-red-500/30">
                <div className="flex items-center gap-2 text-white text-xs font-bold uppercase mb-1">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  <span>NEED URGENT ASSISTANCE?</span>
                </div>
                <div className="text-[10px] text-red-400 font-bold uppercase mb-2">
                  Towing & Emergency Same-Day
                </div>
                <p className="text-[11px] text-neutral-300 leading-relaxed mb-3">
                  Stranded on I-88 or Route 59? Don't wait for online forms. Call our Aurora dispatch line directly for urgent tow truck coordination.
                </p>
                <a
                  href={`tel:${SHOP_INFO.phone}`}
                  className="w-full py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{SHOP_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Why Book Your Service With Us & Photo Triad */}
      <section className="py-16 bg-[#0F0F0F] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-red-500 mb-1">
                THE ROAD DOGS QUALITY STANDARD
              </div>
              <h2 className="font-tech text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
                WHY BOOK YOUR SERVICE WITH US
              </h2>
            </div>
            <p className="text-xs text-neutral-400 max-w-md">
              Aurora drivers trust our workshop for uncompromising mechanical accuracy, dealership-level diagnostic capabilities, and transparent client communication.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="p-5 rounded-xl bg-[#141414] border border-[#222222]">
              <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center mb-3">
                <Clock className="w-4 h-4" />
              </div>
              <h4 className="font-tech text-sm font-bold uppercase text-white">SAME-DAY TURNAROUND</h4>
              <p className="text-xs text-neutral-400 mt-1 leading-normal">
                On most factory maintenance, pad & rotor replacements, and diagnostic scans booked prior to 10:00 AM.
              </p>
              <div className="mt-3 text-[10px] font-mono-num font-bold text-red-400">FAST TURNAROUND ⚡</div>
            </div>

            <div className="p-5 rounded-xl bg-[#141414] border border-[#222222]">
              <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center mb-3">
                <Wrench className="w-4 h-4" />
              </div>
              <h4 className="font-tech text-sm font-bold uppercase text-white">ASE-CERTIFIED TECHS</h4>
              <p className="text-xs text-neutral-400 mt-1 leading-normal">
                Your vehicle is engineered with complex CAN-bus networks; our technicians hold national certifications to repair it properly.
              </p>
              <div className="mt-3 text-[10px] font-mono-num font-bold text-red-400">MASTER TECHNICIANS 🏆</div>
            </div>

            <div className="p-5 rounded-xl bg-[#141414] border border-[#222222]">
              <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center mb-3">
                <Shield className="w-4 h-4" />
              </div>
              <h4 className="font-tech text-sm font-bold uppercase text-white">24-MONTH / 24,000-MILE</h4>
              <p className="text-xs text-neutral-400 mt-1 leading-normal">
                Every qualifying repair is backed nationwide by our peace-of-mind parts and precision labor warranty guarantee.
              </p>
              <div className="mt-3 text-[10px] font-mono-num font-bold text-red-400">NATIONWIDE COVERAGE 🛡️</div>
            </div>

            <div className="p-5 rounded-xl bg-[#141414] border border-[#222222]">
              <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center mb-3">
                <Car className="w-4 h-4" />
              </div>
              <h4 className="font-tech text-sm font-bold uppercase text-white">DIGITAL PHOTO INSPECTION</h4>
              <p className="text-xs text-neutral-400 mt-1 leading-normal">
                No blind sales pitches. We text high-definition photos and video clips of worn bushings, leaked fluids, and scored rotors.
              </p>
              <div className="mt-3 text-[10px] font-mono-num font-bold text-red-400">100% TRANSPARENCY 📱</div>
            </div>
          </div>

          {/* 3 Real Gallery Photos Triad */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="relative rounded-xl overflow-hidden border border-[#222222] h-48 group">
              <img
                src={IMAGES.brakeCaliper}
                alt="Precision Brake System Overhauls"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-xs font-bold uppercase text-white tracking-wide">
                PRECISION BRAKE SYSTEM OVERHAULS
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-[#222222] h-48 group">
              <img
                src={IMAGES.diagnosticBay}
                alt="OBD-II & Oscilloscope Waveforms"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-xs font-bold uppercase text-white tracking-wide">
                OBD-II & OSCILLOSCOPE WAVEFORMS
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-[#222222] h-48 group">
              <img
                src={IMAGES.suspensionLift}
                alt="Suspension & Chassis Structural Care"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-xs font-bold uppercase text-white tracking-wide">
                SUSPENSION & CHASSIS STRUCTURAL CARE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Tow Callout Banner */}
      <section className="py-8 px-4 lg:px-8 bg-[#050505]">
        <div className="max-w-7xl mx-auto p-6 rounded-xl bg-gradient-to-r from-red-950/40 via-[#141414] to-[#0F0F0F] border border-red-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center text-white shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block">
                AURORA EMERGENCY RESPONSE
              </span>
              <h3 className="font-tech text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
                NEED EMERGENCY TOW OR IMMEDIATE SAME-DAY DROP-OFF?
              </h3>
              <p className="text-xs text-neutral-300 mt-0.5">
                Do not drive an overheating vehicle, flashing check engine light, or severely grinding brakes. Call our direct shop line right now for priority intake.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${SHOP_INFO.phone}`}
              className="px-5 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-lg shadow-red-950/50"
            >
              <Phone className="w-4 h-4" />
              <span>CALL DIRECT: {SHOP_INFO.phoneFormatted}</span>
            </a>

            <a
              href={`mailto:${SHOP_INFO.email}`}
              className="px-5 py-3 rounded-lg bg-[#181818] hover:bg-[#222222] text-neutral-200 font-bold text-xs uppercase tracking-wider border border-[#2B2B2B] flex items-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4 text-red-500" />
              <span>EMAIL BAY DESK</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
