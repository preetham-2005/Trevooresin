import React from 'react';
import { MessageCircle, Phone, Compass, UserPlus, Sparkles } from 'lucide-react';
import { downloadVCard } from '../utils/vcard';

export default function FloatingActions({ activeView, setActiveView, onScrollToForm }) {
  return (
    <>
      {/* Floating Desktop / Tablet WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <a
          href="https://wa.me/8639335031?text=Hi%20Trevooresin!%20I%27d%20love%20to%20order%20a%20custom%20resin%20piece"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-green-500/25 border border-white/20"
          id="btn-floating-whatsapp"
        >
          <div className="relative">
            <MessageCircle className="w-6 h-6 fill-white" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
          </div>
          <span className="text-xs font-bold tracking-wide pr-1">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Bottom Quick-Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-lg border-t border-[#D4AF37]/30 px-3 py-2 shadow-2xl">
        <div className="grid grid-cols-4 gap-1 text-center">
          {/* 1. Call */}
          <a
            href="tel:+918639335031"
            className="flex flex-col items-center justify-center py-1 text-[#4A3528] hover:text-[#2C1F18]"
          >
            <Phone className="w-4 h-4 text-[#9A7B2C] mb-1" />
            <span className="text-[10px] font-semibold">Call</span>
          </a>

          {/* 2. WhatsApp */}
          <a
            href="https://wa.me/8639335031?text=Hi%20Trevooresin!%20I%27d%20love%20to%20order%20a%20custom%20resin%20piece"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1 text-[#128C7E] hover:text-[#25D366]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366] mb-1" />
            <span className="text-[10px] font-bold text-[#25D366]">WhatsApp</span>
          </a>

          {/* 3. Save Contact */}
          <button
            onClick={downloadVCard}
            className="flex flex-col items-center justify-center py-1 text-[#4A3528] hover:text-[#2C1F18] cursor-pointer"
          >
            <UserPlus className="w-4 h-4 text-[#9C5A3E] mb-1" />
            <span className="text-[10px] font-semibold">Save VCF</span>
          </button>

          {/* 4. Creations / Catalogue Toggle */}
          <button
            onClick={() => {
              if (activeView === 'catalogue') {
                setActiveView('home');
              } else {
                setActiveView('catalogue');
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex flex-col items-center justify-center py-1 text-[#4A3528] hover:text-[#2C1F18] cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#D4AF37] mb-1" />
            <span className="text-[10px] font-semibold">
              {activeView === 'catalogue' ? 'Card' : 'Creations'}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
