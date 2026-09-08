import React from 'react';
import { X, Download, Share, PlusSquare, Smartphone, Check } from 'lucide-react';

export default function InstallModal({ isOpen, onClose, onNativeInstall, isInstallable }) {
  if (!isOpen) return null;

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-md w-full bg-[#FAF5EC] text-[#1C1714] rounded-3xl p-6 sm:p-8 border border-[#E8DFC8] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-[#1C1714] border border-[#E8DFC8] transition-all cursor-pointer shadow-xs"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Studio Icon */}
        <div className="flex items-center gap-3 mb-5">
          <img
            src="/assets/trevoo_resin_logo.jpg"
            alt="Trevooresin Studio"
            className="w-14 h-14 rounded-2xl object-cover border border-[#E8DFC8] shadow-xs"
          />
          <div>
            <h3 className="font-brand text-lg font-semibold tracking-wider text-[#1C1714]">
              TREVOORESIN
            </h3>
            <p className="text-xs text-[#7C726A]">
              Handcrafted Resin Studio App
            </p>
          </div>
        </div>

        {/* Content based on platform and installability */}
        {isInstallable ? (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-[#524741] leading-relaxed font-light">
              Install the official Trevooresin App on your device for instant access to our creations catalogue, direct WhatsApp ordering, and offline viewing.
            </p>

            <button
              onClick={() => {
                onNativeInstall();
                onClose();
              }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#1C1714] hover:bg-[#332B26] text-white px-6 py-3 text-xs sm:text-sm font-medium shadow-sm transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Install Now</span>
            </button>
          </div>
        ) : isIOS ? (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-[#524741] leading-relaxed font-light">
              Install Trevooresin on your iPhone or iPad for quick access:
            </p>

            <div className="space-y-2.5 bg-white rounded-2xl p-4 border border-[#E8DFC8] text-xs text-[#1C1714]">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FAF5EC] border border-[#E8DFC8] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  Tap the <strong className="inline-flex items-center gap-1 font-semibold text-[#1C1714]"><Share className="w-3.5 h-3.5 inline" /> Share</strong> button in Safari toolbar.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FAF5EC] border border-[#E8DFC8] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  Scroll down and tap <strong className="inline-flex items-center gap-1 font-semibold text-[#1C1714]"><PlusSquare className="w-3.5 h-3.5 inline" /> Add to Home Screen</strong>.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FAF5EC] border border-[#E8DFC8] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  Tap <strong>Add</strong> in the top right corner.
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#1C1714] hover:bg-[#332B26] text-white px-6 py-2.5 text-xs sm:text-sm font-medium shadow-sm transition-all cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Got it</span>
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-[#524741] leading-relaxed font-light">
              To install Trevooresin App on your device:
            </p>

            <div className="space-y-2.5 bg-white rounded-2xl p-4 border border-[#E8DFC8] text-xs text-[#1C1714]">
              <div className="flex items-start gap-2.5">
                <Smartphone className="w-4 h-4 text-[#7C726A] shrink-0 mt-0.5" />
                <span>
                  Tap your browser menu (<strong className="font-semibold">⋮</strong> or <strong className="font-semibold">Share</strong>), then select <strong>Install App</strong> or <strong>Add to Home screen</strong>.
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#1C1714] hover:bg-[#332B26] text-white px-6 py-2.5 text-xs sm:text-sm font-medium shadow-sm transition-all cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Got it</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
