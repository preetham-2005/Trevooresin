import React, { useState, useEffect } from 'react';
import { CreditCard, MessageCircle, Download, X, Smartphone, CheckCircle } from 'lucide-react';

export default function Navbar({ onOpenAdmin, enquiryCount, onGoHome }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showInstallGuide, setShowInstallGuide] = useState(false);

  useEffect(() => {
    // Check if already running in standalone native PWA mode
    const checkStandalone = 
      window.matchMedia('(display-mode: standalone)').matches || 
      window.navigator.standalone === true;
    setIsStandalone(checkStandalone);

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    window.addEventListener('appinstalled', () => {
      setIsStandalone(true);
      setDeferredPrompt(null);
      setShowInstallGuide(false);
      console.log('Trevooresin App installed successfully as WebAPK standalone app!');
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    } else {
      setShowInstallGuide(true);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full max-w-full bg-[#FAF5EC]/95 backdrop-blur-sm border-b border-[#E8DFC8] transition-all duration-300">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 overflow-hidden">
          
          {/* Brand Logo & Name */}
          <button 
            onClick={() => {
              if (onGoHome) onGoHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-left group cursor-pointer flex items-center gap-2 sm:gap-2.5 shrink-0"
          >
            <img
              src="/assets/trevoo_resin_logo.jpg"
              alt="Trevooresin Studio Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-[#E8DFC8]"
            />
            <div>
              <span className="font-brand text-base sm:text-xl font-semibold tracking-[0.16em] sm:tracking-[0.18em] text-[#1C1714] block leading-tight">
                TREVOORESIN
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.18em] uppercase text-[#7C726A] font-medium block">
                Handcrafted Studio
              </span>
            </div>
          </button>

          {/* Top Actions: Install App, WhatsApp, and Card Symbol for Admin */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            
            {/* PWA Install App Button (Visible on web browser, hidden once installed) */}
            {!isStandalone && (
              <button
                onClick={handleInstallClick}
                className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold bg-[#A46752] hover:bg-[#8F5542] text-white shadow-xs transition-all cursor-pointer shrink-0"
                title="Install App without browser search bar"
                id="btn-install-pwa"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="inline">Install App</span>
              </button>
            )}

            {/* Quick Direct WhatsApp Button */}
            <a
              href="https://wa.me/8639335031?text=Hi%20Trevooresin!%20I%27d%20love%20to%20order%20a%20custom%20resin%20piece"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-medium bg-white text-[#1C1714] border border-[#E8DFC8] hover:bg-[#F5EFE3] transition-colors cursor-pointer shadow-2xs shrink-0"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Card Symbol: Admin enters password to view orders */}
            <button
              onClick={onOpenAdmin}
              title="Enter passcode to view orders"
              className="relative p-2 rounded-full bg-white hover:bg-[#F5EFE3] text-[#1C1714] border border-[#E8DFC8] shadow-2xs transition-all cursor-pointer shrink-0"
              id="btn-admin-card-symbol"
              aria-label="Studio Orders"
            >
              <CreditCard className="w-4 h-4 text-[#1C1714]" />
              {enquiryCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#A46752] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {enquiryCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Install App Guide Modal */}
      {showInstallGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fade-in">
          <div 
            className="relative w-full max-w-sm bg-[#FAF5EC] rounded-3xl p-6 border border-[#E8DFC8] shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E8DFC8]/60">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#A46752] text-white flex items-center justify-center">
                  <Smartphone className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1C1714]">
                  Install Trevooresin App
                </h3>
              </div>
              <button 
                onClick={() => setShowInstallGuide(false)}
                className="p-1 rounded-full hover:bg-black/5 text-[#7C726A] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#524741] leading-relaxed">
              Install Trevooresin as a standalone application on your phone so it opens with your brand logo, zero address bar, and no Google search engine bar:
            </p>

            <div className="space-y-2.5 text-xs text-[#1C1714]">
              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8DFC8]">
                <span className="w-5 h-5 rounded-full bg-[#FAF5EC] border border-[#E8DFC8] text-[#1C1714] font-bold text-[11px] flex items-center justify-center shrink-0">
                  1
                </span>
                <p>
                  Tap the Chrome menu button (the <strong>3 dots ⋮</strong> at top-right of Chrome).
                </p>
              </div>

              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8DFC8]">
                <span className="w-5 h-5 rounded-full bg-[#FAF5EC] border border-[#E8DFC8] text-[#1C1714] font-bold text-[11px] flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <p className="font-semibold text-[#A46752]">
                    Select "Install app" (or "Install Trevooresin")
                  </p>
                  <p className="text-[11px] text-[#7C726A] mt-0.5">
                    Avoid tapping "Add to Home screen shortcut", as shortcuts open inside the browser. Tapping <strong>"Install app"</strong> installs the full native app experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8DFC8]">
                <span className="w-5 h-5 rounded-full bg-[#FAF5EC] border border-[#E8DFC8] text-[#1C1714] font-bold text-[11px] flex items-center justify-center shrink-0">
                  3
                </span>
                <p>
                  Tap <strong>Install</strong>. The app will be placed in your phone's app drawer and home screen.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowInstallGuide(false)}
              className="w-full py-2.5 rounded-full bg-[#1C1714] text-white text-xs font-semibold hover:bg-[#332B26] transition-all cursor-pointer"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </>
  );
}
