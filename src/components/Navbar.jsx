import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function Navbar({ onGoHome }) {
  return (
    <header className="sticky top-0 z-40 w-full max-w-full bg-[#FAF5EC]/95 backdrop-blur-sm border-b border-[#E8DFC8] transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 overflow-hidden">
        
        {/* Brand Logo & Name */}
        <button 
          onClick={() => {
            if (onGoHome) onGoHome();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-left group cursor-pointer flex items-center gap-2.5 shrink-0"
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

        {/* Top Actions: Quick Direct WhatsApp Button */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://wa.me/8639335031?text=Hi%20Trevooresin!%20I%27d%20love%20to%20order%20a%20custom%20resin%20piece"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-[#1C1714] border border-[#E8DFC8] hover:bg-[#F5EFE3] transition-colors cursor-pointer shadow-2xs shrink-0"
            title="Chat on WhatsApp"
            id="btn-nav-whatsapp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
            <span>WhatsApp</span>
          </a>
        </div>

      </div>
    </header>
  );
}
