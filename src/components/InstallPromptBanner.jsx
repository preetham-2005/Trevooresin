import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Sparkles } from 'lucide-react';

export default function InstallPromptBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // 1. Check if user is already using the installed standalone app
    const checkStandalone = 
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true ||
      document.referrer.includes('android-app://');

    if (checkStandalone) {
      setIsStandalone(true);
      return;
    }

    // 2. Check if user previously dismissed the prompt in this session
    const isDismissed = sessionStorage.getItem('trevoo_install_dismissed');

    // 3. Listen for Chrome's native beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      if (!isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    window.addEventListener('appinstalled', () => {
      setIsVisible(false);
      setIsStandalone(true);
      setDeferredPrompt(null);
      console.log('Trevooresin App installed successfully!');
    });

    // 4. Show the bottom install bar after 1.5s on mobile if not in standalone
    const timer = setTimeout(() => {
      if (!checkStandalone && !isDismissed) {
        setIsVisible(true);
      }
    }, 1500);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      clearTimeout(timer);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsVisible(false);
      }
      setDeferredPrompt(null);
    } else {
      setShowModal(true);
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('trevoo_install_dismissed', 'true');
  };

  if (isStandalone || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Bottom Floating Install Prompt Banner */}
      <aside 
        aria-label="Install Trevooresin App"
        className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-6 sm:bottom-6 z-40 max-w-md bg-[#1C1714] text-[#FAF5EC] p-3 sm:p-3.5 rounded-2xl shadow-2xl border border-[#C8A25D]/40 backdrop-blur-md animate-slide-up flex items-center justify-between gap-2.5 sm:gap-3"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="relative shrink-0">
            <img 
              src="/icon-192.png" 
              alt="Trevooresin Studio" 
              className="w-10 h-10 rounded-xl object-cover border border-[#C8A25D]/60 shadow-xs"
            />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#C8A25D] text-[#1C1714] rounded-full flex items-center justify-center">
              <Sparkles className="w-2 h-2 fill-current" />
            </span>
          </div>

          <div className="min-w-0">
            <h4 className="font-serif text-sm font-bold text-white leading-tight truncate">
              Trevooresin Studio App
            </h4>
            <p className="text-[10px] text-[#C8A25D] tracking-wide leading-tight truncate">
              Install full-screen app (zero search bar)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={handleInstallClick}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#C8A25D] hover:bg-[#b58f4a] text-[#1C1714] text-xs font-bold shadow-md transition-all cursor-pointer whitespace-nowrap active:scale-95"
            id="btn-bottom-install-app"
          >
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Install App</span>
          </button>

          <button
            onClick={handleDismiss}
            className="p-1.5 text-white/60 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* Guide Modal if browser prompt is pending */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="relative w-full max-w-sm bg-[#FAF5EC] rounded-3xl p-5 sm:p-6 border border-[#E8DFC8] shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#E8DFC8]/60">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#1C1714] text-[#C8A25D] flex items-center justify-center">
                  <Smartphone className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#1C1714]">
                  Install Full-Screen App
                </h3>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="p-1 text-[#7C726A] hover:text-[#1C1714] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#524741] leading-relaxed">
              To install as an independent application on your home screen without any browser search engine bar:
            </p>

            <div className="space-y-2 text-xs text-[#1C1714]">
              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8DFC8]">
                <span className="w-5 h-5 rounded-full bg-[#FAF5EC] border border-[#E8DFC8] text-[#1C1714] font-bold text-[11px] flex items-center justify-center shrink-0">
                  1
                </span>
                <p>
                  Open Chrome's menu (the <strong>3 vertical dots ⋮</strong> at top right).
                </p>
              </div>

              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8DFC8]">
                <span className="w-5 h-5 rounded-full bg-[#FAF5EC] border border-[#E8DFC8] text-[#1C1714] font-bold text-[11px] flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <p className="font-semibold text-[#A46752]">
                    Tap "Install app" (or "Install Trevooresin")
                  </p>
                  <p className="text-[11px] text-[#7C726A] mt-0.5">
                    Avoid "Add to Home screen shortcut", as shortcuts open in Chrome. Tapping <strong>"Install app"</strong> installs the full native app package.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E8DFC8]">
                <span className="w-5 h-5 rounded-full bg-[#FAF5EC] border border-[#E8DFC8] text-[#1C1714] font-bold text-[11px] flex items-center justify-center shrink-0">
                  3
                </span>
                <p>
                  Tap <strong>Install</strong> to add the official full-screen app to your phone.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="w-full py-2.5 rounded-full bg-[#1C1714] text-white text-xs font-semibold hover:bg-[#332B26] transition-all cursor-pointer"
            >
              Understand & Continue
            </button>
          </div>
        </div>
      )}
    </>
  );
}
