import React from 'react';
import { PageId } from '../types';
import { SHOP_INFO } from '../data/mockData';
import { Phone, Mail, MapPin, Wrench, Shield, ArrowRight, Truck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenCallModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCallModal }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#1F1F1F] text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand & Overview */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-red-500/70 shadow-lg shadow-red-950/40 bg-[#0A0A0A] shrink-0">
                <img 
                  src={SHOP_INFO.logo} 
                  alt="Road Dogs Auto Care Logo" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-tech text-lg font-bold text-white tracking-wider">ROAD DOGS</span>
              </div>
            </div>

            <p className="text-xs font-bold text-neutral-200 tracking-wider uppercase">
              RELIABLE, PRECISION AUTO REPAIR & MAINTENANCE IN AURORA, IL.
            </p>

            <p className="text-xs text-neutral-400 leading-relaxed">
              Elite automotive diagnostics, high-performance maintenance, and precision mechanical engineering designed to keep your vehicle operating at peak manufacturer tolerances.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded bg-[#111111] border border-[#262626] text-neutral-300 flex items-center gap-1.5">
                <Shield className="w-3 h-3 text-red-500" />
                ASE CERTIFIED TECHS
              </span>
              <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded bg-[#111111] border border-[#262626] text-neutral-300 flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-red-500" />
                AURORA WORKSHOP
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              QUICK LINKS
            </h4>
            <div className="flex flex-col gap-2 text-xs text-neutral-400">
              <button 
                onClick={() => handleNav('home')} 
                className="text-left hover:text-white transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => handleNav('services')} 
                className="text-left hover:text-white transition-colors"
              >
                Services & Diagnostics
              </button>
              <button 
                onClick={() => handleNav('testimonials')} 
                className="text-left hover:text-white transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => handleNav('work')} 
                className="text-left hover:text-white transition-colors"
              >
                Our Work & Gallery
              </button>
              <button 
                onClick={() => handleNav('about')} 
                className="text-left hover:text-white transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => handleNav('contact')} 
                className="text-left hover:text-white transition-colors"
              >
                Contact
              </button>
              <button 
                onClick={() => handleNav('book')} 
                className="text-left font-bold text-red-400 hover:text-red-300 flex items-center gap-1 mt-1"
              >
                <span>BOOK NOW</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              CONTACT DETAILS
            </h4>
            <div className="flex flex-col gap-3 text-xs text-neutral-300">
              <div>
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-semibold">
                  DIRECT PHONE
                </span>
                <a 
                  href={`tel:${SHOP_INFO.phone}`} 
                  className="font-mono-num font-semibold text-neutral-200 hover:text-red-400 transition-colors flex items-center gap-1.5 mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-red-500" />
                  <span>{SHOP_INFO.phone}</span>
                </a>
              </div>

              <div>
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-semibold">
                  SERVICE DESK EMAIL
                </span>
                <a 
                  href={`mailto:${SHOP_INFO.email}`} 
                  className="text-neutral-300 hover:text-red-400 transition-colors break-all flex items-center gap-1.5 mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span>{SHOP_INFO.email}</span>
                </a>
              </div>

              <div>
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-semibold">
                  WORKSHOP BAY
                </span>
                <div className="text-neutral-300 flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>{SHOP_INFO.fullAddress}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Emergency Dispatch */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              HOURS OF OPERATION
            </h4>
            <div className="text-xs text-neutral-300 flex flex-col gap-1.5 bg-[#0D0D0D] p-3 rounded-lg border border-[#222222]">
              <div className="flex justify-between items-center">
                <span className="text-neutral-400">Mon - Sat:</span>
                <span className="font-mono-num text-neutral-200">{SHOP_INFO.hoursWeekday}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-400">Sunday:</span>
                <span className="text-red-400 font-semibold">{SHOP_INFO.hoursSunday}</span>
              </div>
            </div>

            {/* 24/7 Emergency Dispatch Card */}
            <div 
              onClick={onOpenCallModal}
              className="mt-2 p-3.5 rounded-lg bg-[#111111] border border-red-900/40 hover:border-red-600/60 cursor-pointer transition-colors group"
            >
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded bg-red-600/20 text-red-500">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-red-400 transition-colors">
                    24/7 EMERGENCY DISPATCH
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                    Priority towing & emergency vehicle assistance available 24 hours. Call direct line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#1F1F1F] flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-3">
          <div>
            Copyright © 2026 Road Dogs Auto Care. All rights reserved. · Aurora, Illinois
          </div>
          <div className="flex items-center gap-6">
            <span className="text-neutral-500">
              Warranty: 24-Month / 24,000-Mile Nationwide Coverage
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
