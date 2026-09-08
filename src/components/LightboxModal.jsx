import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { getProductWhatsAppLink } from '../data/products';

export default function LightboxModal({ item, onClose, onCommissionLikeThis }) {
  if (!item) return null;

  const images = item.images && item.images.length > 0 
    ? item.images 
    : (item.image ? [item.image] : []);
    
  const [currentIndex, setCurrentIndex] = useState(item.initialIndex || 0);

  // Sync index if item changes
  useEffect(() => {
    setCurrentIndex(item.initialIndex || 0);
  }, [item]);

  // Keyboard navigation (Arrow keys + Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && images.length > 1) {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      } else if (e.key === 'ArrowLeft' && images.length > 1) {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length, onClose]);

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const currentImageSrc = images[currentIndex] || item.image;
  const activeImageDetails = item.imageDetails && item.imageDetails[currentIndex] ? item.imageDetails[currentIndex] : null;
  const currentTitle = activeImageDetails?.title || item.title || item.name;
  const currentDescription = activeImageDetails?.description || item.description;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-[#1C140F] text-[#FAF7F2] rounded-3xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 transition-all cursor-pointer shadow-lg hover:scale-105"
          aria-label="Close full screen viewer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* High Resolution Image Container */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[50vh] max-h-[70vh] overflow-hidden p-2">
          <img
            key={currentIndex}
            src={currentImageSrc}
            alt={`${currentTitle} (Photo ${currentIndex + 1})`}
            className="w-auto h-auto max-w-full max-h-[66vh] object-contain rounded-xl shadow-2xl transition-all duration-300 select-none animate-fade-in"
          />

          {/* Previous / Next Controls if multiple photos */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 backdrop-blur-sm transition-all shadow-xl z-20 cursor-pointer hover:scale-105"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 backdrop-blur-sm transition-all shadow-xl z-20 cursor-pointer hover:scale-105"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Photo Counter Pill */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-xs font-semibold text-[#F7E8C4] border border-white/10 z-20">
                Photo {currentIndex + 1} of {images.length}
              </div>
            </>
          )}
        </div>

        {/* Caption & Actions Footer with dynamic photo title and description */}
        <div className="p-4 sm:p-5 bg-[#1C140F] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left max-w-lg">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold px-2 py-0.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30">
                {item.category}
              </span>
              <span className="text-xs text-white/60">Full High-Res View</span>
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
              {currentTitle}
            </h3>
            {currentDescription && (
              <p className="text-xs text-[#FAF7F2]/80 font-light mt-1 line-clamp-2">
                {currentDescription}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
            <a
              href={getProductWhatsAppLink(currentTitle)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-md transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Enquire on WhatsApp</span>
            </a>

            {onCommissionLikeThis && (
              <button
                onClick={() => {
                  onClose();
                  onCommissionLikeThis(currentTitle, item.category);
                }}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-[#2C1F18] hover:bg-[#38271e] text-[#F7E8C4] border border-[#D4AF37]/40 font-semibold text-xs transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Customize</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
