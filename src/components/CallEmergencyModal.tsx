import React from 'react';
import { SHOP_INFO } from '../data/mockData';
import { Phone, X, AlertTriangle, Truck, MapPin, Clock, Key } from 'lucide-react';

interface CallEmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookBay: () => void;
}

export const CallEmergencyModal: React.FC<CallEmergencyModalProps> = ({ isOpen, onClose, onBookBay }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#0F0F0F] border border-[#222222] rounded-xl p-6 shadow-2xl text-neutral-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-red-600" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#181818] text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-red-600/20 text-red-500 border border-red-500/30">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-tech text-lg font-bold text-white tracking-wide">
              DIRECT BAY HOTLINE & EMERGENCY DISPATCH
            </h3>
            <p className="text-xs text-neutral-400">
              Immediate Aurora mechanical triage & 24/7 towing coordination
            </p>
          </div>
        </div>

        {/* Priority Phone Box */}
        <div className="mt-5 p-4 rounded-xl bg-gradient-to-br from-red-950/40 to-[#141414] border border-red-500/40 text-center">
          <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
            DIRECT TECHNICIAN LINE
          </span>
          <div className="mt-1 font-mono-num text-2xl sm:text-3xl font-bold text-white tracking-wider">
            {SHOP_INFO.phone}
          </div>
          <p className="text-xs text-neutral-300 mt-1">
            Mike "Chief" Henderson & Lead Diagnostic Desk
          </p>

          <a
            href={`tel:${SHOP_INFO.phone}`}
            className="mt-4 w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wider uppercase transition-colors shadow-lg shadow-red-950/50"
          >
            <Phone className="w-4 h-4" />
            <span>Tap to Call Direct Line</span>
          </a>
        </div>

        {/* Quick Triage Points */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-lg bg-[#141414] border border-[#222222]">
            <div className="flex items-center gap-2 font-bold text-neutral-200">
              <Truck className="w-4 h-4 text-amber-400" />
              <span>Flatbed Towing Routing</span>
            </div>
            <p className="text-neutral-400 mt-1 text-[11px] leading-relaxed">
              Stranded on I-88 or Route 59? Tell dispatch to tow directly to Road Dogs Auto Care.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-[#141414] border border-[#222222]">
            <div className="flex items-center gap-2 font-bold text-neutral-200">
              <Key className="w-4 h-4 text-emerald-400" />
              <span>After-Hours Drop Box</span>
            </div>
            <p className="text-neutral-400 mt-1 text-[11px] leading-relaxed">
              Key drop vault located next to Bay 1. Park in secure perimeter slot and deposit key.
            </p>
          </div>
        </div>

        {/* Location & Routing */}
        <div className="mt-4 p-3 rounded-lg bg-[#0A0A0A] border border-[#1F1F1F] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-neutral-300">
            <MapPin className="w-4 h-4 text-red-500 shrink-0" />
            <span>{SHOP_INFO.fullAddress}</span>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-400">
            <Clock className="w-3.5 h-3.5 text-neutral-500" />
            <span className="font-mono-num">Mon-Sat {SHOP_INFO.hoursWeekday}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-5 pt-4 border-t border-[#222222] flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#181818] hover:bg-[#252525] text-xs font-semibold text-neutral-300 transition-colors border border-[#2B2B2B]"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onBookBay();
            }}
            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-xs font-semibold text-white transition-colors"
          >
            Schedule Non-Urgent Slot
          </button>
        </div>
      </div>
    </div>
  );
};
