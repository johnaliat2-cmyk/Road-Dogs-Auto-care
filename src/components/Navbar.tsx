import React, { useState } from 'react';
import { PageId } from '../types';
import { SHOP_INFO } from '../data/mockData';
import { Phone, Mail, MapPin, Clock, Menu, X, Calendar, Wrench, Shield, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenCallModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenCallModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'services', label: 'SERVICES' },
    { id: 'testimonials', label: 'TESTIMONIALS' },
    { id: 'work', label: 'OUR WORK' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#000000]/95 backdrop-blur-md border-b border-[#1E1E1E]">
      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 md:h-18 flex items-center justify-between">
        {/* Brand Zone */}
        <button 
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-3 text-left focus-visible:outline-none group"
        >
          <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden border-2 border-red-500/70 shadow-lg shadow-red-950/50 bg-[#0A0A0A] shrink-0 group-hover:border-red-500 group-hover:scale-105 transition-all">
            <img 
              src={SHOP_INFO.logo} 
              alt="Road Dogs Auto Care Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="font-tech text-lg md:text-xl font-bold tracking-wider text-white flex items-center gap-1.5">
              <span>ROAD DOGS</span>
            </div>
            <div className="text-[10px] md:text-[11px] font-semibold tracking-wider text-red-500 uppercase -mt-0.5">
              AUTO CARE • AURORA, IL
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-xs font-semibold tracking-wider transition-colors relative py-1 focus-visible:outline-none ${
                  isActive 
                    ? 'text-white font-bold' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 md:gap-3">
          {/* Quick Call / Emergency Dispatch Button */}
          <button
            onClick={onOpenCallModal}
            className="p-2 md:px-3 md:py-2 rounded-lg bg-[#111111] hover:bg-[#1A1A1A] border border-[#262626] text-neutral-200 hover:text-white transition-colors flex items-center gap-2 text-xs font-medium focus-visible:outline-none"
            title="Direct Bay Hotline"
          >
            <Phone className="w-4 h-4 text-red-500" />
            <span className="hidden sm:inline font-mono-num">{SHOP_INFO.phoneFormatted}</span>
          </button>

          {/* Book Appointment CTA */}
          <button
            onClick={() => handleLinkClick('book')}
            className={`px-3.5 md:px-5 py-2 md:py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 whitespace-nowrap shadow-md focus-visible:outline-none ${
              currentPage === 'book'
                ? 'bg-red-700 text-white shadow-red-950/60 ring-2 ring-red-400'
                : 'bg-red-600 hover:bg-red-500 text-white shadow-red-950/40'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>BOOK APPOINTMENT</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#111111] text-neutral-300 hover:text-white border border-[#262626] focus-visible:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0A0A0A]/98 backdrop-blur-xl border-b border-[#222222] shadow-2xl p-5 z-50 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold tracking-wider transition-colors text-left ${
                    isActive 
                      ? 'bg-red-600/15 text-red-400 border border-red-500/30' 
                      : 'text-neutral-300 hover:bg-[#161616] hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </button>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-[#222222] flex flex-col gap-3">
            <a
              href={`tel:${SHOP_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-3 px-4 bg-[#111111] hover:bg-[#1A1A1A] border border-[#262626] rounded-lg text-sm font-semibold text-white"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call Direct Bay: {SHOP_INFO.phone}</span>
            </a>

            <button
              onClick={() => handleLinkClick('book')}
              className="w-full py-3 px-4 bg-red-600 hover:bg-red-500 rounded-lg text-sm font-bold text-white uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-950/50"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Auto Service Now</span>
            </button>

            <div className="text-center text-[11px] text-neutral-400 pt-2 flex items-center justify-center gap-2">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>24-Month / 24k-Mile Nationwide Warranty</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
