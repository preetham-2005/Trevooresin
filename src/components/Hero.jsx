import React from 'react';
import { MessageCircle } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Hero() {
  return (
    <div className="overflow-hidden">
      {/* Top Profile Emblem & Brand Header */}
      <section className="flex flex-col items-center px-5 pt-10 sm:pt-14 text-center">
        
        {/* Official Trevoo Resin Logo Profile Emblem */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-white border border-[#E8E1D7] shadow-sm mb-4">
          <div className="w-full h-full rounded-full overflow-hidden">
            <img
              src="/assets/trevoo_resin_logo.jpg"
              alt="Trevoo Resin Studio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#1C1714]">
          Trevooresin
        </h1>
        <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#7C726A] font-medium">
          Handcrafted Resin Studio • Hyderabad, India
        </p>
      </section>

      {/* Main Hero Split Grid */}
      <header className="relative">
        <div className="mx-auto grid max-w-5xl items-center gap-8 sm:gap-12 px-5 pb-12 pt-8 md:grid-cols-2">
          
          {/* Left Hero Column: Intro & Direct Actions */}
          <div className="text-center md:text-left">
            <p className="font-serif text-2xl sm:text-3xl text-[#1C1714] font-normal mb-3 leading-snug">
              Liquid art, poured by hand. <span className="italic text-[#7C726A]">Memories sealed forever.</span>
            </p>
            <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm leading-relaxed text-[#524741] md:mx-0 font-light">
              We handcraft heirloom resin art pieces — sacred pooja thalis, Krishna jhulas, wedding varmala floral blocks, statement wall clocks, and bespoke entrance nameplates.
            </p>

            {/* 2 Simple Action Buttons (WhatsApp & Instagram) */}
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/8639335031?text=Hi%20Trevooresin!%20I%27d%20love%20to%20order%20a%20custom%20resin%20piece"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1C1714] text-white px-5 py-2.5 text-xs font-medium shadow-xs hover:bg-[#332B26] transition-all cursor-pointer"
                id="btn-hero-whatsapp"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/trevooresin/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E8E1D7] bg-white px-5 py-2.5 text-xs font-medium text-[#1C1714] shadow-2xs hover:bg-[#F4EFEA] transition-all cursor-pointer"
                id="btn-hero-instagram"
              >
                <InstagramIcon className="w-4 h-4 text-[#1C1714]" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Right Hero Column: Single Clean Master Resin Art Photo */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-md border border-[#E8E1D7] bg-white">
              <img
                src="/assets/floral_preservation.jpg"
                alt="Handcrafted luxury resin art creation"
                className="h-full w-full object-cover aspect-[4/3] sm:aspect-square"
              />
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}
