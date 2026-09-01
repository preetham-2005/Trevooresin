import React from 'react';
import { MessageCircle, ArrowDown } from 'lucide-react';

export default function CustomDesignSection({ onScrollToForm }) {
  const highlights = [
    'Preserved Wedding Varmalas',
    'Bespoke Nameplates & Clocks',
    'Pooja Thalis & Krishna Jhulas',
    'Photo Magnets & Trays'
  ];

  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 pb-10 sm:pb-14">
      <div className="rounded-2xl bg-white border border-[#E8E1D7] p-6 sm:p-10 text-center shadow-xs">
        
        <span className="text-[11px] uppercase tracking-widest text-[#7C726A] font-semibold block mb-1">
          Bespoke Commissions
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1714] font-normal mb-2">
          Dream it. We'll pour it.
        </h2>

        <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm leading-relaxed text-[#524741] font-light">
          From sacred pooja room essentials and wedding varmala memories to personalised home entrance plaques and custom timepieces—every piece is handcrafted to your chosen colours, flowers, and photos.
        </p>

        {/* Minimal Neutral Badges */}
        <div className="flex flex-wrap justify-center gap-2 mt-4 mb-6">
          {highlights.map((item, idx) => (
            <span 
              key={idx} 
              className="text-[11px] font-normal px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E8E1D7] text-[#524741]"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/8639335031?text=Hi%20Trevooresin!%20I%27d%20love%20to%20order%20a%20custom%20resin%20piece."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#1C1714] text-white px-6 py-2.5 text-xs sm:text-sm font-medium shadow-xs hover:bg-[#332B26] transition-all"
          >
            <MessageCircle className="h-4 w-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            onClick={onScrollToForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white border border-[#E8E1D7] px-6 py-2.5 text-xs sm:text-sm font-normal text-[#1C1714] shadow-2xs hover:bg-[#FAF8F5] transition-all cursor-pointer"
          >
            <span>Fill Custom Enquiry Form Below</span>
            <ArrowDown className="w-4 h-4 text-[#7C726A]" />
          </button>
        </div>

      </div>
    </section>
  );
}
