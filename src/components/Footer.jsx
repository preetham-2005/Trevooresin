import React from 'react';
import { Phone, MessageCircle, Shield } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Footer({ onOpenAdmin }) {
  return (
    <footer className="bg-[#FAF6F0] text-[#2C1F18] border-t border-[#E8DFC8]/60 py-16 px-4 text-center relative overflow-hidden">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        
        {/* Brand Name */}
        <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#2C1F18] tracking-tight">
          Trevooresin
        </h3>

        {/* Tagline */}
        <p className="mt-2 text-xs sm:text-sm text-[#4A3528]/80 font-light max-w-md mx-auto leading-relaxed">
          Handcrafted resin art, poured with patience and finished with love.
        </p>

        {/* 3 Circular Social & Action Icons */}
        <div className="flex items-center justify-center gap-4 my-6">
          {/* WhatsApp */}
          <a
            href="https://wa.me/8639335031?text=Hi%20Trevooresin!%20I%27d%20love%20to%20order%20a%20custom%20resin%20piece"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white border border-[#E8DFC8]/80 flex items-center justify-center text-[#2C1F18] shadow-xs hover:scale-108 hover:border-[#25D366] hover:text-[#25D366] transition-all duration-300 cursor-pointer"
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
            className="w-11 h-11 rounded-full bg-white border border-[#E8DFC8]/80 flex items-center justify-center text-[#2C1F18] shadow-xs hover:scale-108 hover:border-[#E1306C] hover:text-[#E1306C] transition-all duration-300 cursor-pointer"
            aria-label="Instagram"
            title="Follow on Instagram"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>

          {/* Phone Call */}
          <a
            href="tel:+918639335031"
            className="w-11 h-11 rounded-full bg-white border border-[#E8DFC8]/80 flex items-center justify-center text-[#2C1F18] shadow-xs hover:scale-108 hover:border-[#D4AF37] hover:text-[#9A7B2C] transition-all duration-300 cursor-pointer"
            aria-label="Call Studio"
            title="Call Studio"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>

        {/* Location */}
        <p className="text-xs text-[#4A3528]/75 font-normal tracking-wide">
          Hyderabad, India
        </p>

        {/* Copyright */}
        <p className="mt-2 text-xs text-[#4A3528]/60 font-light">
          © {new Date().getFullYear()} Trevooresin. Every piece is one of one.
        </p>

        {/* Subtle Admin Trigger */}
        <button
          onClick={onOpenAdmin}
          className="mt-6 text-[10px] text-[#4A3528]/40 hover:text-[#4A3528] transition-colors inline-flex items-center gap-1 cursor-pointer"
          title="Owner Admin"
        >
          <Shield className="w-3 h-3 opacity-60" />
          <span>Admin Portal</span>
        </button>

      </div>
    </footer>
  );
}
