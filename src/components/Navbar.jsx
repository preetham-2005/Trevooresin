import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import InstallModal from './InstallModal';

export default function Navbar({ onGoHome }) {
  const [deferredPrompt, setDeferredPrompt] = useState(window.deferredInstallPrompt || null);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if user is already running standalone
    const checkStandalone = 
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true;

    if (checkStandalone) {
      setIsStandalone(true);
    }

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
      setIsStandalone(true);
      setDeferredPrompt(null);
      window.deferredInstallPrompt = null;
      setIsInstallModalOpen(false);
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
    const promptEvent = deferredPrompt || window.deferredInstallPrompt;
    
    if (promptEvent) {
      try {
        promptEvent.prompt();
        const choice = await promptEvent.userChoice;
        if (choice && choice.outcome === 'accepted') {
          setDeferredPrompt(null);
          window.deferredInstallPrompt = null;
        }
      } catch (err) {
        setIsInstallModalOpen(true);
      }
    } else {
      setIsInstallModalOpen(true);
    }
  };

  const handleNativeTrigger = async () => {
    const promptEvent = deferredPrompt || window.deferredInstallPrompt;
    if (promptEvent) {
      try {
        promptEvent.prompt();
        await promptEvent.userChoice;
      } catch (err) {
        console.warn('Native prompt error:', err);
      }
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

          {/* Top Right: Install Button */}
          {!isStandalone && (
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleInstallClick}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#1C1714] hover:bg-[#332B26] text-white transition-all cursor-pointer shadow-2xs hover:scale-103 active:scale-98"
                id="btn-nav-install"
                title="Install Trevooresin App"
              >
                <Download className="w-3.5 h-3.5 text-[#C8A25D]" />
                <span>Install</span>
              </button>
            </div>
          )}

        </div>
      </header>

      {/* Reusable Install Guide Modal */}
      <InstallModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
        onNativeInstall={handleNativeTrigger}
        isNativeReady={!!(deferredPrompt || window.deferredInstallPrompt)}
      />
    </>
  );
}
