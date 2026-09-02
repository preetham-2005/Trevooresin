import React, { useState, useEffect } from 'react';
import { Compass, Lock, MessageCircle, Download } from 'lucide-react';

export default function Navbar({ activeView, setActiveView, onOpenAdmin, enquiryCount }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    window.addEventListener('appinstalled', () => {
      setIsInstallable(false);
      setDeferredPrompt(null);
      console.log('Trevooresin App installed successfully!');
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      alert('To install the app in Chrome, tap the 3-dots menu in Chrome and select "Install app"!');
      return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstallable(false);
    }
    setDeferredPrompt(null);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF5EC]/95 backdrop-blur-sm border-b border-[#E8DFC8] transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <button 
          onClick={() => { setActiveView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-left group cursor-pointer flex items-center gap-2.5"
        >
          <img
            src="/assets/trevoo_resin_logo.jpg"
            alt="Trevooresin Studio Logo"
            className="w-9 h-9 rounded-full object-cover border border-[#E8DFC8]"
          />
          <div>
            <span className="font-brand text-lg sm:text-xl font-semibold tracking-[0.18em] text-[#1C1714] block">
              TREVOORESIN
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#7C726A] font-medium block -mt-1">
              Handcrafted Studio
            </span>
          </div>
        </button>

        {/* Navigation Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* PWA Install App Button */}
          {isInstallable && (
            <button
              onClick={handleInstallClick}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#A46752] hover:bg-[#8F5542] text-white shadow-xs transition-all cursor-pointer"
              title="Install App like Play Store"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Install App</span>
            </button>
          )}

          {/* View Toggle Pill */}
          <div className="flex items-center bg-white p-1 rounded-full border border-[#E8DFC8]">
            <button
              onClick={() => { setActiveView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeView === 'home'
                  ? 'bg-[#1C1714] text-white shadow-xs'
                  : 'text-[#524741] hover:text-[#1C1714]'
              }`}
            >
              Card
            </button>
            <button
              onClick={() => { setActiveView('catalogue'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                activeView === 'catalogue'
                  ? 'bg-[#1C1714] text-white shadow-xs'
                  : 'text-[#524741] hover:text-[#1C1714]'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              Creations
            </button>
          </div>

          {/* Quick Direct WhatsApp Button */}
          <a
            href="https://wa.me/8639335031?text=Hi%20Trevooresin!%20I%27d%20love%20to%20order%20a%20custom%20resin%20piece"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-[#1C1714] border border-[#E8DFC8] hover:bg-[#F5EFE3] transition-colors cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
            WhatsApp
          </a>

          {/* Passcode Protected Order Access Trigger */}
          <button
            onClick={onOpenAdmin}
            title="Studio Orders"
            className="relative inline-flex items-center gap-1 p-2 text-[#7C726A] hover:text-[#1C1714] rounded-full hover:bg-white transition-colors cursor-pointer"
          >
            <Lock className="w-4 h-4 text-[#C8A25D]" />
            {enquiryCount > 0 && (
              <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-[#A46752] text-white text-[8px] font-bold rounded-full flex items-center justify-center">
                {enquiryCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
