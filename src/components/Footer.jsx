import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="w-full max-w-full bg-[#FAF5EC] text-[#1C1714] border-t border-[#E8DFC8] py-14 px-4 text-center relative overflow-hidden">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        
        {/* Brand Name */}
        <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1714] tracking-tight">
          Trevooresin
        </h3>

        {/* Tagline */}
        <p className="mt-2 text-xs sm:text-sm text-[#524741] font-light max-w-md mx-auto leading-relaxed">
          Handcrafted resin art, poured with patience and finished with love.
        </p>

        {/* 3 Circular Social & Action Icons */}
        <div className="flex items-center justify-center gap-4 my-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/8639335031?text=Hi%20Trevooresin!%20I%27d%20love%20to%20order%20a%20custom%20resin%20piece"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white border border-[#E8DFC8] flex items-center justify-center text-[#1C1714] shadow-2xs hover:scale-108 hover:border-[#25D366] hover:text-[#25D366] transition-all duration-300 cursor-pointer"
            aria-label="WhatsApp"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/trevooresin/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white border border-[#E8DFC8] flex items-center justify-center text-[#1C1714] shadow-2xs hover:scale-108 hover:border-[#E1306C] hover:text-[#E1306C] transition-all duration-300 cursor-pointer"
            aria-label="Instagram"
            title="Follow on Instagram"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>

          {/* Phone Call */}
          <a
            href="tel:+918639335031"
            className="w-11 h-11 rounded-full bg-white border border-[#E8DFC8] flex items-center justify-center text-[#1C1714] shadow-2xs hover:scale-108 hover:border-[#1C1714] transition-all duration-300 cursor-pointer"
            aria-label="Call Studio"
            title="Call Studio"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>

        {/* Location */}
        <p className="text-xs text-[#7C726A] font-normal tracking-wide">
          Hyderabad, India
        </p>

        {/* Copyright */}
        <p className="mt-1.5 text-xs text-[#7C726A]/80 font-light">
          © {new Date().getFullYear()} Trevooresin. Every piece is one of one.
        </p>

      </div>
    </footer>
  );
}
