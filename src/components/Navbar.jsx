import React from 'react';

export default function Navbar({ onGoHome }) {
  return (
    <header className="sticky top-0 z-40 w-full max-w-full bg-[#FAF5EC]/95 backdrop-blur-sm border-b border-[#E8DFC8] transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-center sm:justify-start gap-2 overflow-hidden">
        
        {/* Brand Logo & Name */}
        <button 
          onClick={() => {
            if (onGoHome) onGoHome();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-left group cursor-pointer flex items-center gap-2.5"
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

      </div>
    </header>
  );
}
