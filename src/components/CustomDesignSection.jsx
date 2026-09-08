import React from 'react';
import { Sparkles, MessageCircle, ArrowDown } from 'lucide-react';

export default function CustomDesignSection({ onScrollToForm }) {
  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-12 sm:pb-16">
      {/* Soft Sage Green Card matching user's reference screenshot */}
      <div className="rounded-3xl bg-[#DFE7DC] p-8 sm:p-12 text-center shadow-sm border border-[#CFDACB]">
        
        {/* 4-point Sparkle Star Icon */}
        <div className="flex justify-center mb-3">
          <Sparkles className="w-6 h-6 text-[#243322]" />
        </div>

        {/* Serif Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1E2B1C] font-normal mb-3">
          Dream it. We'll pour it.
        </h2>

        {/* Narrative Copy */}
        <p className="mx-auto max-w-xl text-xs sm:text-sm leading-relaxed text-[#2D3D2A] font-light mb-6">
          Wedding favours, house-warming gifts, custom nameplates, or a keepsake holding flowers from a day you never want to forget — every piece is poured by hand, tailored to you.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/8639335031?text=Hi%20Trevooresin!%20I%27d%20love%20to%20order%20a%20custom%20resin%20piece."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#1E2B1C] hover:bg-[#2C3E29] text-[#FAF5EC] px-6 py-3 text-xs sm:text-sm font-medium shadow-sm transition-all cursor-pointer"
          >
            <MessageCircle className="h-4 w-4 fill-[#FAF5EC]" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            onClick={onScrollToForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/90 hover:bg-white text-[#1E2B1C] border border-[#CFDACB] px-6 py-3 text-xs sm:text-sm font-normal shadow-xs transition-all cursor-pointer"
          >
            <span>Fill Custom Enquiry Form Below</span>
            <ArrowDown className="w-4 h-4 text-[#2D3D2A]" />
          </button>
        </div>

      </div>
    </section>
  );
}
