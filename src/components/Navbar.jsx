import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import InstallModal from './InstallModal';

export default function Navbar({ onGoHome }) {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          setDeferredPrompt(null);
        }
      });
    } else {
      setIsInstallModalOpen(true);
    }
  };

  const handleNativeInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          setDeferredPrompt(null);
        }
      });
    }
  };

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

          {/* Top Right: Install Application Button */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleInstallClick}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#1C1714] hover:bg-[#332B26] text-white transition-all cursor-pointer shadow-2xs hover:scale-103"
              id="btn-nav-install"
              title="Install Trevooresin App"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Install</span>
            </button>
          </div>

        </div>
      </header>

      {/* Install Instruction / Prompt Modal */}
      <InstallModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
        onNativeInstall={handleNativeInstall}
        isInstallable={!!deferredPrompt}
      />
    </>
  );
}
