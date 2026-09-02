import React from 'react';
import { ArrowRight, Layers, Image as ImageIcon, Grid } from 'lucide-react';

export default function ExploreBanner({ onExploreClick }) {
  const previewItems = [
    { title: 'Turquoise Pooja Thali', img: '/assets/turquoise_pooja_thali_real.jpg' },
    { title: 'Krishna Jhula', img: '/assets/krishna_jhula_front.jpg' },
    { title: 'Custom Nameplates', img: '/assets/kasam_gold_nameplate.jpg' },
    { title: 'Heart Calendar', img: '/assets/heart_birthday_calendar_pink_real.jpg' },
  ];

  return (
    <section className="px-4 sm:px-6 max-w-4xl mx-auto my-6">
      <div 
        onClick={onExploreClick}
        className="rounded-3xl bg-white text-[#1C1714] p-6 sm:p-8 border border-[#E8DFC8] shadow-xs cursor-pointer group hover:border-[#1C1714]/40 transition-all"
        id="btn-explore-creations-banner"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-md">
            <span className="text-[11px] uppercase tracking-widest text-[#7C726A] font-semibold block mb-2">
              Studio Catalogue
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1714] mb-2 leading-tight">
              Explore Our Handcrafted Creations
            </h2>
            <p className="text-xs sm:text-sm text-[#524741] leading-relaxed font-light">
              Discover our sacred pooja thalis, Krishna jhulas, wedding floral keepsakes, geode wall clocks, and bespoke fridge magnets.
            </p>
          </div>

          {/* Visual Mini Thumbnails Preview */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex -space-x-2.5 overflow-hidden py-1">
              {previewItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="inline-block w-11 h-11 rounded-full ring-2 ring-white overflow-hidden shadow-2xs bg-white"
                >
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1C1714] text-white font-medium text-xs sm:text-sm shadow-xs group-hover:bg-[#332B26] transition-all whitespace-nowrap cursor-pointer"
            >
              <span>View Full Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Minimal Neutral Tags */}
        <div className="mt-5 pt-4 border-t border-[#F4EFEA] flex flex-wrap gap-2 text-xs text-[#7C726A]">
          <span className="bg-[#FAF5EC] border border-[#E8DFC8] px-2.5 py-1 rounded-full font-normal">
            Pooja & Festive Art
          </span>
          <span className="bg-[#FAF5EC] border border-[#E8DFC8] px-2.5 py-1 rounded-full font-normal">
            Wall Clocks & Nameplates
          </span>
          <span className="bg-[#FAF5EC] border border-[#E8DFC8] px-2.5 py-1 rounded-full font-normal">
            Preserved Florals & Keepsakes
          </span>
        </div>
      </div>
    </section>
  );
}
