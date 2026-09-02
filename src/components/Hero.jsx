import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  return (
    <div className="overflow-hidden">
      {/* Top Profile Emblem & Brand Header */}
      <section className="flex flex-col items-center px-5 pt-8 sm:pt-12 text-center">
        
        {/* Official Trevoo Resin Logo Profile Emblem */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-white border border-[#E8DFC8] shadow-xs mb-3">
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
        <p className="mt-1.5 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#7C726A] font-medium">
          Handcrafted Luxury Resin Studio • Hyderabad, India
        </p>
      </section>

      {/* Main Hero Split Grid */}
      <header className="relative">
        <div className="mx-auto grid max-w-5xl items-center gap-8 sm:gap-12 px-5 pb-12 pt-6 md:grid-cols-2">
          
          {/* Left Hero Column: Intro & Actions */}
          <div className="text-center md:text-left">
            <p className="text-sm sm:text-base leading-relaxed text-[#524741] max-w-md mx-auto md:mx-0 font-light mb-6">
              Liquid art, poured by hand. We craft heirloom resin pieces — trays, coasters, clocks, tables and keepsakes — each one poured once, and never repeated.
            </p>

            {/* Actions: Call, WhatsApp, Explore Our Creations Button */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                {/* Call Button (Silent tel: link) */}
                <a
                  href="tel:+918639335031"
                  className="inline-flex items-center gap-2 rounded-full border border-[#E8DFC8] bg-white px-5 py-2.5 text-xs font-medium text-[#1C1714] shadow-2xs hover:bg-[#F5EFE3] transition-all cursor-pointer"
                  id="btn-hero-call"
                >
                  <Phone className="w-3.5 h-3.5 text-[#7C726A]" />
                  <span>Call</span>
                </a>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/8639335031?text=Hi%20Trevooresin!%20I%27d%20love%20to%20order%20a%20custom%20resin%20piece"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#E8DFC8] bg-white px-5 py-2.5 text-xs font-medium text-[#1C1714] shadow-2xs hover:bg-[#F5EFE3] transition-all cursor-pointer"
                  id="btn-hero-whatsapp"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Terracotta Explore Button matching screenshot */}
              <div>
                <button
                  onClick={onExploreClick}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#A46752] hover:bg-[#8F5542] text-white px-6 py-3 text-xs sm:text-sm font-medium shadow-sm hover:shadow-md transition-all cursor-pointer w-full sm:w-auto"
                  id="btn-hero-explore-creations"
                >
                  <span>Explore Our Creations</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Gold Marble Resin Platter Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-md border border-[#E8DFC8] bg-white">
              <img
                src="/assets/gold_marble_resin_platter.jpg"
                alt="Handcrafted luxury gold marble resin art platter"
                className="h-full w-full object-cover aspect-square"
              />
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}
