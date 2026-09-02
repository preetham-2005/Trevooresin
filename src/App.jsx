import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExploreBanner from './components/ExploreBanner';
import CustomDesignSection from './components/CustomDesignSection';
import EnquiryForm from './components/EnquiryForm';
import CreationsCatalogue from './components/CreationsCatalogue';
import AdminPortal from './components/AdminPortal';
import LightboxModal from './components/LightboxModal';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import { getEnquiries } from './utils/storage';

export default function App() {
  const [activeView, setActiveView] = useState('home'); // 'home' | 'catalogue'
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState(null);
  const [prefillCategory, setPrefillCategory] = useState('');
  const [enquiryCount, setEnquiryCount] = useState(0);

  const refreshEnquiryCount = () => {
    const list = getEnquiries();
    const newCount = list.filter(e => e.status === 'New').length;
    setEnquiryCount(newCount);
  };

  useEffect(() => {
    refreshEnquiryCount();

    // Handle hash routing e.g. #admin, #catalogue
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#admin') {
        setIsAdminOpen(true);
      } else if (hash === '#catalogue' || hash === '#creations') {
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
        onOpenAdmin={() => setIsAdminOpen(true)}
        enquiryCount={enquiryCount}
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

            {/* 2. Prominent Explore Our Creations CTA Banner */}
            <ExploreBanner onExploreClick={handleExploreCreations} />

            {/* 3. Custom-Design & Bespoke Commission Emphasis */}
            <CustomDesignSection onScrollToForm={handleScrollToForm} />

            {/* 4. Custom Design Enquiry Form with Secure Silent Storage */}
            <EnquiryForm
              onEnquirySubmitted={refreshEnquiryCount}
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

      {/* Persistent Floating WhatsApp Quick-Action */}
      <FloatingActions />

      {/* Fullscreen Photo Lightbox Modal */}
      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onCommissionLikeThis={(title, category) => {
          handleSelectProductForCustom(title, category);
        }}
      />

      {/* Private Owner Admin Portal Modal */}
      {isAdminOpen && (
        <AdminPortal
          isOpen={isAdminOpen}
          onClose={() => {
            setIsAdminOpen(false);
            refreshEnquiryCount();
          }}
        />
      )}

    </div>
  );
}
