import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ChevronRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { 
  PRODUCT_CATEGORIES, 
  PRODUCTS, 
  WHAT_WE_CREATE_CARDS, 
  WHY_CHOOSE_US 
} from '../data/products';
import ProductCard from './ProductCard';

export default function CreationsCatalogue({ onBackToHome, onSelectProductForCustomOrder, onOpenLightbox }) {
  const [selectedCategory, setSelectedCategory] = useState('All Creations');

  const filteredProducts = selectedCategory === 'All Creations'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const handleScrollToProducts = () => {
    const el = document.getElementById('view-all-products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen pb-20 bg-[#FAF5EC] w-full max-w-full overflow-x-hidden">
      
      {/* Top Breadcrumb / Action Bar - Non-sticky so it NEVER overlaps headings */}
      <div className="bg-[#FAF5EC] border-b border-[#E8DFC8] w-full">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 py-3 flex items-center justify-between gap-2">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#F5EFE3] text-[#1C1714] text-xs sm:text-sm font-semibold border border-[#E8DFC8] shadow-2xs transition-all cursor-pointer shrink-0"
            id="btn-back-to-card"
          >
            <ArrowLeft className="w-4 h-4 text-[#1C1714]" />
            <span>Back to Digital Card</span>
          </button>

          {/* Interactive Studio Catalogue button */}
          <button
            onClick={handleScrollToProducts}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#F5EFE3] text-[#1C1714] text-xs font-semibold border border-[#E8DFC8] shadow-2xs transition-all cursor-pointer shrink-0"
            title="Click to view all products & services"
          >
            <Layers className="w-3.5 h-3.5 text-[#C8A25D]" />
            <span>Studio Catalogue ↓</span>
          </button>
        </div>
      </div>

      {/* Catalogue Header */}
      <section className="pt-8 pb-6 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-[#1C1714] mb-3 leading-tight">
          Our Handcrafted Resin Creations
        </h1>
        <p className="text-xs sm:text-sm text-[#524741] max-w-xl mx-auto font-light leading-relaxed">
          From sacred pooja thalis and Krishna jhulas to wedding varmala preservation, wall clocks, and bespoke keepsakes—explore our complete studio collection.
        </p>
      </section>

      {/* ======================================================== */}
      {/* SECTION 1: WHAT WE CREATE (CORE SPECIALTIES)             */}
      {/* ======================================================== */}
      <section id="what-we-create" className="px-4 sm:px-6 max-w-5xl mx-auto my-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#7C726A] font-medium block">
              Core Specialties
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1714]">
              What We Create
            </h2>
          </div>
          <span className="text-xs text-[#7C726A] hidden sm:block">
            {WHAT_WE_CREATE_CARDS.length} Categories
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHAT_WE_CREATE_CARDS.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-[#E8DFC8] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 sm:h-52 overflow-hidden bg-[#FAF5EC]">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
                />
                <span className="absolute bottom-3 left-3 text-xs font-normal text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {item.subtitle}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#1C1714] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#524741] leading-relaxed font-light mb-4">
                    {item.description}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedCategory(item.category);
                    document.getElementById('view-all-products')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#1C1714] hover:text-[#524741] transition-all cursor-pointer"
                >
                  <span>Explore {item.category}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 2: VIEW ALL PRODUCTS & SERVICES (CATALOGUE)      */}
      {/* ======================================================== */}
      <section id="view-all-products" className="px-4 sm:px-6 max-w-5xl mx-auto my-12 pt-8 border-t border-[#E8DFC8]">
        <div className="text-center max-w-xl mx-auto mb-6">
          <span className="text-[11px] uppercase tracking-widest text-[#7C726A] font-medium block mb-1">
            Browse & Order
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#1C1714] mb-2">
            View All Products & Services
          </h2>
          <p className="text-xs text-[#524741]">
            Select any piece to enquire directly on WhatsApp with pre-filled specifications, or tap to view photos in full screen.
          </p>
        </div>

        {/* Minimal Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none justify-start sm:justify-center">
          {PRODUCT_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#1C1714] text-white shadow-xs'
                  : 'bg-white text-[#524741] border border-[#E8DFC8] hover:bg-[#FAF5EC]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              prod={prod}
              onSelectProductForCustomOrder={onSelectProductForCustomOrder}
              onOpenLightbox={onOpenLightbox}
            />
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 3: WHY CHOOSE TREVOORESIN                        */}
      {/* ======================================================== */}
      <section id="why-choose-us" className="px-4 sm:px-6 max-w-5xl mx-auto my-12 pt-8 border-t border-[#E8DFC8]">
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E8DFC8] shadow-xs">
          
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] uppercase tracking-widest text-[#7C726A] font-medium block mb-1">
              The Trevooresin Promise
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1714] mb-2">
              Why Choose Trevooresin
            </h2>
            <p className="text-xs text-[#524741] font-light">
              We combine scientific floral preservation with master artisan resin casting so your memories last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-[#FAF5EC] border border-[#E8DFC8] rounded-xl p-4 sm:p-5"
              >
                <div className="w-8 h-8 rounded-full bg-white text-[#1C1714] border border-[#E8DFC8] flex items-center justify-center mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1C1714] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#524741] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
