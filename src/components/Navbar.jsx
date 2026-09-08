import React, { useState, useEffect } from 'react';
import { Download, Share, PlusSquare, X } from 'lucide-react';

export default function Navbar({ onGoHome }) {
  const [deferredPrompt, setDeferredPrompt] = useState(window.deferredInstallPrompt || null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showIOSTooltip, setShowIOSTooltip] = useState(false);

  useEffect(() => {
    // 1. Check if already installed / running in standalone mode
    const checkStandalone = () => {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
      if (isStandalone) {
        setIsInstalled(true);
      }
    };

    checkStandalone();

    // 2. Capture prompt if already fired
    if (window.deferredInstallPrompt) {
      setDeferredPrompt(window.deferredInstallPrompt);
    }

    const handlePromptReady = () => {
      if (window.deferredInstallPrompt) {
        setDeferredPrompt(window.deferredInstallPrompt);
      }
    };

    const handleBeforeInstall = (e) => {
      e.preventDefault();
      window.deferredInstallPrompt = e;
      setDeferredPrompt(e);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
      window.deferredInstallPrompt = null;
      setShowIOSTooltip(false);
    };

    window.addEventListener('pwa-install-ready', handlePromptReady);
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('pwa-install-ready', handlePromptReady);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const promptEvent = deferredPrompt || window.deferredInstallPrompt;

    if (isIOS) {
      setShowIOSTooltip((prev) => !prev);
      return;
    }

    if (promptEvent) {
      try {
        promptEvent.prompt();
        const choiceResult = await promptEvent.userChoice;
        if (choiceResult && choiceResult.outcome === 'accepted') {
          setIsInstalled(true);
          setDeferredPrompt(null);
          window.deferredInstallPrompt = null;
        }
      } catch (err) {
        console.warn('Install error:', err);
      }
    }
  };

  // Hide button if already installed in standalone mode
  if (isInstalled) {
    return (
      <header className="sticky top-0 z-40 w-full max-w-full bg-[#FAF5EC]/95 backdrop-blur-sm border-b border-[#E8DFC8] transition-all duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 overflow-hidden">
          <button 
            onClick={() => {
              if (onGoHome) onGoHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-left group cursor-pointer flex items-center gap-2.5 shrink-0"
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
        </div>
      </header>
    );
  }

  return (
    <>
      <header className="sticky top-0 z-40 w-full max-w-full bg-[#FAF5EC]/95 backdrop-blur-sm border-b border-[#E8DFC8] transition-all duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 overflow-hidden">
          
          {/* Brand Logo & Name */}
          <button 
            onClick={() => {
              if (onGoHome) onGoHome();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-left group cursor-pointer flex items-center gap-2.5 shrink-0"
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

          {/* Top Right: Native PWA Install Button */}
          <div className="flex items-center gap-2 shrink-0 relative">
            <button
              onClick={handleInstallClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#1C1714] hover:bg-[#332B26] text-white transition-all cursor-pointer shadow-2xs hover:scale-103 active:scale-98"
              id="btn-nav-install"
              title="Install Trevooresin App"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Install</span>
            </button>
          </div>

        </div>
      </header>

      {/* iOS Safari Non-Intrusive Banner Tooltip */}
      {showIOSTooltip && (
        <div className="bg-[#1C1714] text-white px-4 py-3 border-b border-[#E8DFC8]/20 flex items-center justify-between gap-3 text-xs animate-fade-in relative z-50">
          <div className="flex items-center gap-2 max-w-xl mx-auto">
            <span>To install on iOS: Tap <Share className="w-3.5 h-3.5 inline text-[#25D366]" /> <strong>Share</strong> in Safari, then select <PlusSquare className="w-3.5 h-3.5 inline text-[#25D366]" /> <strong>Add to Home Screen</strong>.</span>
          </div>
          <button 
            onClick={() => setShowIOSTooltip(false)} 
            className="p-1 hover:bg-white/20 rounded-full cursor-pointer shrink-0"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
}
