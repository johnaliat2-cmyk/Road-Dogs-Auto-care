import React from 'react';
import { ProjectLog } from '../types';
import { X, CheckCircle, Activity, Gauge, Cpu, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';

interface TelemetryModalProps {
  project: ProjectLog | null;
  onClose: () => void;
  onBookSimilar: (projectName: string) => void;
}

export const TelemetryModal: React.FC<TelemetryModalProps> = ({ project, onClose, onBookSimilar }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0F0F0F] border border-[#222222] rounded-xl p-6 shadow-2xl text-neutral-200 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-red-600" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#181818] text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge & Title */}
        <div className="flex items-center gap-2 text-xs font-mono-num text-red-400">
          <span className="font-bold">{project.jobId}</span>
          <span>·</span>
          <span className="text-neutral-400">Turnaround: {project.turnaround}</span>
          <span>·</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5" />
            COMPLETED & DYNO TESTED
          </span>
        </div>

        <h3 className="font-tech text-xl sm:text-2xl font-bold text-white tracking-wide mt-2">
          {project.vehicle}
        </h3>
        <p className="text-sm font-semibold text-neutral-300 mt-1">
          {project.title}
        </p>

        {/* Hero image if exists */}
        {project.image && (
          <div className="mt-4 relative rounded-lg overflow-hidden border border-[#222222] max-h-56">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-56 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono-num text-neutral-300 border border-white/10">
              AURORA BAY TELEMETRY ARCHIVE
            </div>
          </div>
        )}

        {/* Summary Description */}
        <div className="mt-4 p-4 rounded-lg bg-[#141414] border border-[#222222]">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
            <Wrench className="w-3.5 h-3.5 text-red-500" />
            OVERHAUL SUMMARY & PROTOCOL
          </h4>
          <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Specs Grid */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {project.specs.map((spec, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-[#141414] border border-[#222222]">
              <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-wider">
                {spec.label}
              </span>
              <span className="font-mono-num font-bold text-xs sm:text-sm text-white mt-1 block">
                {spec.value}
              </span>
            </div>
          ))}
        </div>

        {/* Telemetry Delta Metrics if available */}
        {project.telemetryMetrics && project.telemetryMetrics.length > 0 && (
          <div className="mt-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-red-500" />
              BENCHMARK & TELEMETRY DELTA
            </h4>
            <div className="mt-2 divide-y divide-[#222222] rounded-lg border border-[#222222] bg-[#0A0A0A] overflow-hidden">
              {project.telemetryMetrics.map((metric, idx) => (
                <div key={idx} className="p-3 flex items-center justify-between text-xs">
                  <span className="text-neutral-300 font-medium">{metric.label}</span>
                  <div className="flex items-center gap-4 font-mono-num">
                    <span className="text-neutral-500 line-through text-[11px]">{metric.before}</span>
                    <ArrowRight className="w-3 h-3 text-neutral-600" />
                    <span className="text-neutral-200 font-semibold">{metric.after}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold">
                      {metric.delta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technician Sign-off */}
        <div className="mt-5 p-3.5 rounded-lg bg-[#141414] border border-[#222222] flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center font-bold text-xs text-white shrink-0">
            M
          </div>
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-2">
              <span>{project.leadTech}</span>
              <span className="text-[10px] text-red-400 font-mono-num">VERIFIED SIGN-OFF</span>
            </div>
            <p className="text-xs text-neutral-400 italic mt-0.5">
              "{project.leadTechNote}"
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-[#222222] flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#181818] hover:bg-[#252525] text-xs font-semibold text-neutral-300 transition-colors border border-[#2B2B2B]"
          >
            Close Sheet
          </button>

          <button
            onClick={() => {
              onClose();
              onBookSimilar(project.vehicle);
            }}
            className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-lg shadow-red-950/40"
          >
            <span>Book Similar Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
