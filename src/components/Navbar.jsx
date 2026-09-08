import React from 'react';
import { CreditCard, MessageCircle } from 'lucide-react';

export default function Navbar({ onOpenAdmin, enquiryCount, onGoHome }) {
  return (
    <header className="sticky top-0 z-40 w-full max-w-full bg-[#FAF5EC]/95 backdrop-blur-sm border-b border-[#E8DFC8] transition-all duration-300">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 overflow-hidden">
        
        {/* Brand Logo & Name */}
        <button 
          onClick={() => {
            if (onGoHome) onGoHome();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-left group cursor-pointer flex items-center gap-2 sm:gap-2.5 shrink-0"
        >
          <img
            src="/assets/trevoo_resin_logo.jpg"
            alt="Trevooresin Studio Logo"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-[#E8DFC8]"
          />
          <div>
            <span className="font-brand text-base sm:text-xl font-semibold tracking-[0.16em] sm:tracking-[0.18em] text-[#1C1714] block leading-tight">
              TREVOORESIN
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.18em] uppercase text-[#7C726A] font-medium block">
              Handcrafted Studio
            </span>
          </div>
        </button>

        {/* Top Actions: WhatsApp, and Card Symbol for Studio Owner Admin */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          
          {/* Quick Direct WhatsApp Button */}
          <a
            href="https://wa.me/8639335031?text=Hi%20Trevooresin!%20I%27d%20love%20to%20order%20a%20custom%20resin%20piece"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-medium bg-white text-[#1C1714] border border-[#E8DFC8] hover:bg-[#F5EFE3] transition-colors cursor-pointer shadow-2xs shrink-0"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Card Symbol: Owner enters passcode to view order pipeline */}
          <button
            onClick={onOpenAdmin}
            title="Studio Orders Portal"
            className="relative p-2 rounded-full bg-white hover:bg-[#F5EFE3] text-[#1C1714] border border-[#E8DFC8] shadow-2xs transition-all cursor-pointer shrink-0"
            id="btn-admin-card-symbol"
            aria-label="Studio Orders"
          >
            <CreditCard className="w-4 h-4 text-[#1C1714]" />
            {enquiryCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#A46752] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {enquiryCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
