import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomDesignSection from './components/CustomDesignSection';
import EnquiryForm from './components/EnquiryForm';
import CreationsCatalogue from './components/CreationsCatalogue';
import LightboxModal from './components/LightboxModal';
import Footer from './components/Footer';

export default function App() {
  const [activeView, setActiveView] = useState('home'); // 'home' | 'catalogue'
  const [lightboxItem, setLightboxItem] = useState(null);
  const [prefillCategory, setPrefillCategory] = useState('');

  useEffect(() => {
    // Handle hash routing e.g. #catalogue, #creations
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#catalogue' || hash === '#creations') {
        setActiveView('catalogue');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleExploreCreations = () => {
    setActiveView('catalogue');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProductForCustom = (productName, category) => {
    setPrefillCategory(category);
    setActiveView('home');
    setTimeout(() => {
      const formEl = document.getElementById('custom-enquiry-section');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const handleScrollToForm = () => {
    const formEl = document.getElementById('custom-enquiry-section');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF5EC] text-[#1C1714] selection:bg-[#E8DFC8] selection:text-[#1C1714] relative w-full max-w-full overflow-x-hidden">
      
      {/* Top Navigation */}
      <Navbar
        onGoHome={() => setActiveView('home')}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {activeView === 'home' ? (
          /* =================================================== */
          /* HOMEPAGE: Clean, Focused & Conversion-Driven        */
          /* =================================================== */
          <div className="animate-fade-in">
            {/* 1. Hero / Brand Intro with Call, WhatsApp & Explore button */}
            <Hero onExploreClick={handleExploreCreations} />

            {/* 2. Custom-Design & Bespoke Commission Emphasis */}
            <CustomDesignSection onScrollToForm={handleScrollToForm} />

            {/* 3. Custom Design Enquiry Form with direct WhatsApp sharing to 8639335031 */}
            <EnquiryForm
              prefillCategory={prefillCategory}
            />
          </div>
        ) : (
          /* =================================================== */
          /* DEDICATED CREATIONS / CATALOGUE EXPERIENCE          */
          /* =================================================== */
          <div className="animate-fade-in">
            <CreationsCatalogue
              onBackToHome={() => {
                setActiveView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectProductForCustomOrder={handleSelectProductForCustom}
              onOpenLightbox={(item) => setLightboxItem(item)}
            />
          </div>
        )}
      </main>

      {/* Studio Footer */}
      <Footer />

      {/* Fullscreen Photo Lightbox Modal */}
      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onCommissionLikeThis={(title, category) => {
          handleSelectProductForCustom(title, category);
        }}
      />

    </div>
  );
}
