import React, { useState, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle, 
  Sparkles, 
  Check, 
  Clock, 
  Ruler, 
  Tag,
  Maximize2
} from 'lucide-react';
import { getProductWhatsAppLink } from '../data/products';

export default function ProductCard({ prod, onSelectProductForCustomOrder, onOpenLightbox }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const images = prod.images || (prod.image ? [prod.image] : []);
  const hasMultipleImages = images.length > 1;

  // Touch swipe support for mobile
  const touchStartXRef = useRef(null);
  const touchEndXRef = useRef(null);

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance && hasMultipleImages) {
      setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else if (distance < -minSwipeDistance && hasMultipleImages) {
      setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const handleOpenFullscreen = (e) => {
    e.stopPropagation();
    if (onOpenLightbox) {
      onOpenLightbox({
        ...prod,
        title: prod.name,
        image: images[currentImgIndex],
        images: images,
        initialIndex: currentImgIndex
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#E8E1D7] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group">
      
      {/* Product Visual Container with Carousel */}
      <div 
        className="relative h-64 sm:h-72 overflow-hidden bg-[#FAF8F5] select-none cursor-pointer"
        onClick={handleOpenFullscreen}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img 
          src={images[currentImgIndex]} 
          alt={`${prod.name} ${hasMultipleImages ? `(Image ${currentImgIndex + 1})` : ''}`}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" 
        />
        
        {/* Category Pill */}
        <div className="absolute top-3.5 left-3.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded-full shadow-xs z-10">
          {prod.category}
        </div>
        
        {/* Fullscreen View Trigger Badge */}
        <button
          onClick={handleOpenFullscreen}
          className="absolute top-3.5 right-3.5 bg-black/60 hover:bg-black/80 text-white p-1.5 rounded-full border border-white/20 backdrop-blur-sm shadow-xs transition-transform hover:scale-105 z-20 cursor-pointer flex items-center gap-1 px-2.5"
          title="View Full Screen"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span className="text-[10px] font-medium hidden sm:inline">View</span>
        </button>

        {/* Carousel Arrow Controls (if multiple images) */}
        {hasMultipleImages && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-all shadow-xs z-20 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-sm transition-all shadow-xs z-20 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm z-20">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(idx); }}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    currentImgIndex === idx ? 'w-3.5 bg-white' : 'w-1.5 bg-white/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Image Counter Pill */}
            <div className="absolute bottom-3 right-3 text-[10px] font-medium text-white bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full z-10">
              {currentImgIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Product Details */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#1C1714] mb-2 leading-snug">
            {prod.name}
          </h3>
          
          <p className="text-xs sm:text-sm text-[#524741] leading-relaxed mb-4 font-light">
            {prod.description}
          </p>

          {/* Pricing & Specification Box */}
          <div className="bg-[#FAF8F5] rounded-xl p-3 border border-[#E8E1D7] space-y-1.5 mb-4 text-xs text-[#1C1714]">
            {prod.craftingTime && (
              <div className="flex items-center justify-between">
                <span className="text-[#7C726A] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Turnaround:
                </span>
                <span className="font-medium">{prod.craftingTime}</span>
              </div>
            )}
            {prod.dimensions && (
              <div className="flex items-center justify-between">
                <span className="text-[#7C726A] flex items-center gap-1">
                  <Ruler className="w-3.5 h-3.5" /> Sizing:
                </span>
                <span className="font-medium">{prod.dimensions}</span>
              </div>
            )}
            {/* Price Line */}
            <div className="flex items-center justify-between pt-1.5 border-t border-[#E8E1D7]">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#7C726A] flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" /> Pricing:
              </span>
              <span className="text-xs sm:text-sm font-medium text-[#1C1714]">
                {prod.priceText || 'Price depends on customisation'}
              </span>
            </div>
          </div>

          {/* Minimal Feature Badges */}
          {prod.features && prod.features.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {prod.features.map((feat, fidx) => (
                <span 
                  key={fidx} 
                  className="inline-flex items-center gap-1 text-[11px] bg-[#FAF8F5] text-[#524741] px-2.5 py-0.5 rounded-full border border-[#E8E1D7]"
                >
                  <Check className="w-3 h-3 text-[#7C726A]" />
                  {feat}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
          {/* Enquire Now on WhatsApp Button */}
          <a
            href={getProductWhatsAppLink(prod.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-[#1C1714] hover:bg-[#332B26] text-white font-medium text-xs shadow-xs transition-all"
            id={`btn-enquire-${prod.id}`}
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Enquire on WhatsApp</span>
          </a>

          {/* Request Custom Variation */}
          <button
            onClick={() => onSelectProductForCustomOrder(prod.name, prod.category)}
            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-white hover:bg-[#FAF8F5] text-[#1C1714] font-medium text-xs transition-colors cursor-pointer border border-[#E8E1D7]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#7C726A]" />
            <span>Customize This Piece</span>
          </button>
        </div>

      </div>
    </div>
  );
}
