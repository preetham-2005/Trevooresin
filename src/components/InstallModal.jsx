import React from 'react';
import { X, Smartphone, Download, Sparkles } from 'lucide-react';

export default function InstallModal({ isOpen, onClose, onNativeInstall, isNativeReady }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-sm bg-[#FAF5EC] rounded-3xl p-5 sm:p-6 border border-[#E8DFC8] shadow-2xl space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#E8DFC8]/60">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#1C1714] text-[#C8A25D] flex items-center justify-center border border-[#C8A25D]/40">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#1C1714]">
                Install Trevooresin App
              </h3>
              <p className="text-[10px] text-[#7C726A] font-medium">
                Full-screen standalone studio app
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-[#7C726A] hover:text-[#1C1714] rounded-full hover:bg-black/5 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Direct 1-Click Install Button if ready */}
        {isNativeReady && (
          <button
            onClick={() => {
              if (onNativeInstall) onNativeInstall();
              onClose();
            }}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#1C1714] hover:bg-[#332B26] text-white py-3 px-4 text-xs font-semibold shadow-md transition-all cursor-pointer"
          >
            <Download className="w-4 h-4 text-[#C8A25D]" />
            <span>Install Directly to Home Screen</span>
          </button>
        )}

        <p className="text-xs text-[#524741] leading-relaxed">
          To install Trevooresin as an independent app on your home screen:
        </p>

        {/* Steps */}
        <div className="space-y-2 text-xs text-[#1C1714]">
          <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8DFC8]">
            <span className="w-5 h-5 rounded-full bg-[#FAF5EC] border border-[#E8DFC8] text-[#1C1714] font-bold text-[11px] flex items-center justify-center shrink-0">
              1
            </span>
            <p>
              Open browser menu (the <strong>3 vertical dots ⋮</strong> at top right in Chrome, or <strong>Share</strong> in Safari).
            </p>
          </div>

          <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8DFC8]">
            <span className="w-5 h-5 rounded-full bg-[#FAF5EC] border border-[#E8DFC8] text-[#1C1714] font-bold text-[11px] flex items-center justify-center shrink-0">
              2
            </span>
            <div>
              <p className="font-semibold text-[#A46752]">
                Tap "Install app" or "Add to Home screen"
              </p>
              <p className="text-[11px] text-[#7C726A] mt-0.5">
                This adds the standalone Trevooresin studio icon to your home screen and app drawer.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8DFC8]">
            <span className="w-5 h-5 rounded-full bg-[#FAF5EC] border border-[#E8DFC8] text-[#1C1714] font-bold text-[11px] flex items-center justify-center shrink-0">
              3
            </span>
            <p>
              Tap <strong>Install / Add</strong> to launch anytime with zero browser search bars!
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-full bg-[#1C1714] text-white text-xs font-semibold hover:bg-[#332B26] transition-all cursor-pointer shadow-xs"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
