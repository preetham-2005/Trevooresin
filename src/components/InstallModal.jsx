import React from 'react';
import { X, Download, Share, PlusSquare, Smartphone, Check, ExternalLink, AlertTriangle } from 'lucide-react';

export default function InstallModal({ isOpen, onClose, onNativeInstall, isInstallable }) {
  if (!isOpen) return null;

  const ua = navigator.userAgent || '';
  const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
  const isInAppBrowser = /WhatsApp|Instagram|FBAN|FBAV|Line|Snapchat/i.test(ua);

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
            className="w-13 h-13 rounded-2xl object-cover border border-[#E8DFC8] shadow-xs"
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

        {/* In-App Browser Warning (e.g. opened inside WhatsApp / Instagram) */}
        {isInAppBrowser ? (
          <div className="space-y-4">
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-2.5 text-xs text-amber-900">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>In-App Browser Detected:</strong> You are viewing inside WhatsApp/Instagram. App installation requires your main browser.
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#524741] leading-relaxed font-light">
              To install directly on your phone:
            </p>

            <div className="space-y-2 bg-white rounded-2xl p-4 border border-[#E8DFC8] text-xs text-[#1C1714]">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FAF5EC] border border-[#E8DFC8] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  Tap the <strong className="font-semibold">3 dots (⋮)</strong> or <strong className="font-semibold">Share</strong> at the top right of this screen.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FAF5EC] border border-[#E8DFC8] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  Tap <strong className="font-semibold text-[#1C1714]">"Open in Chrome"</strong> (or <strong className="font-semibold text-[#1C1714]">"Open in Safari"</strong>).
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#FAF5EC] border border-[#E8DFC8] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  Click <strong className="font-semibold text-[#1C1714]">Install</strong> in Chrome/Safari to add to your Home Screen!
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#1C1714] hover:bg-[#332B26] text-white px-6 py-2.5 text-xs sm:text-sm font-medium shadow-sm transition-all cursor-pointer"
            >
              <Check className="w-4 h-4" />
              <span>Understood</span>
            </button>
          </div>
        ) : isInstallable ? (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-[#524741] leading-relaxed font-light">
              Install the official Trevooresin App on your device for instant offline access and quick custom ordering.
            </p>

            <button
              onClick={() => {
                onNativeInstall();
                onClose();
              }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#1C1714] hover:bg-[#332B26] text-white px-6 py-3 text-xs sm:text-sm font-medium shadow-sm transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Install to Home Screen</span>
            </button>
          </div>
        ) : isIOS ? (
          <div className="space-y-4">
            <p className="text-xs sm:text-sm text-[#524741] leading-relaxed font-light">
              Add Trevooresin to your iPhone or iPad Home Screen:
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
                  Tap your browser menu (<strong className="font-semibold">⋮</strong>), then select <strong>Install App</strong> or <strong>Add to Home screen</strong>.
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
