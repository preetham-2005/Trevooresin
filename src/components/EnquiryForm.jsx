import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import { saveEnquiry } from '../utils/storage';
import PremiumSelect from './PremiumSelect';

export default function EnquiryForm({ onEnquirySubmitted, prefillCategory = '' }) {
  const [formData, setFormData] = useState({
    clientName: '',
    phone: '',
    email: '',
    category: prefillCategory || '',
    budget: '',
    neededBy: '',
    details: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const resetTimerRef = useRef(null);

  // Sync category prefill if updated from external card trigger
  useEffect(() => {
    if (prefillCategory) {
      setFormData(prev => ({ ...prev, category: prefillCategory }));
    }
  }, [prefillCategory]);

  // Clean up auto-reset timer on unmount
  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const categories = [
    'Festive & Pooja Essentials',
    'Custom Keychains',
    'Keepsakes (Fridge Magnets & Car Décor)',
    'Custom Resin Wall Clocks',
    'Milestone Calendars & Keepsakes',
    'Floral Nameplates & Home Décor',
    'Serving Trays & Platters',
    'Fully Custom Design Piece'
  ];

  const budgets = [
    'Flexible / Custom Quote',
    'Under ₹1,000',
    '₹1,000 – ₹3,000',
    '₹3,000 – ₹8,000',
    '₹8,000+'
  ];

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      clientName: '',
      phone: '',
      email: '',
      category: '',
      budget: '',
      neededBy: '',
      details: ''
    });
  };

  const formatDateDisplay = (dateStr) => {
    if (!dateStr) return '';
    try {
      const parts = dateStr.split('-');
      if (parts.length === 3) {
        const year = parts[0];
        const monthIndex = parseInt(parts[1], 10) - 1;
        const day = parseInt(parts[2], 10);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${day} ${months[monthIndex]} ${year}`;
      }
      return dateStr;
    } catch {
      return dateStr;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.clientName.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide your name and Phone / WhatsApp number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    const selectedCategory = formData.category || 'Fully Custom Design Piece';

    // Build clean, natural message without broken unicode symbols
    const lines = [
      `Hi Trevooresin! I would like to place a custom order enquiry:`,
      ``,
      `* Name: ${formData.clientName.trim()}`,
      `* Contact: ${formData.phone.trim()}`,
      formData.email.trim() ? `* Email: ${formData.email.trim()}` : null,
      `* Interested In: ${selectedCategory}`,
      formData.budget ? `* Budget: ${formData.budget}` : null,
      formData.neededBy ? `* Needed By: ${formatDateDisplay(formData.neededBy)}` : null,
      formData.details.trim() ? `* Custom Details: ${formData.details.trim()}` : null,
      ``,
      `(Sharing reference photos in this chat)`
    ].filter(Boolean);

    const fullMessage = lines.join('\n');
    const whatsappUrl = `https://wa.me/8639335031?text=${encodeURIComponent(fullMessage)}`;

    // Save lead locally for reference
    saveEnquiry({
      ...formData,
      category: selectedCategory
    });

    if (onEnquirySubmitted) onEnquirySubmitted();

    // Open WhatsApp directly with 8639335031
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Auto reset form after 5 seconds
    if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    resetTimerRef.current = setTimeout(() => {
      handleResetForm();
    }, 5000);
  };

  return (
    <section id="custom-enquiry-section" className="mx-auto max-w-3xl px-4 sm:px-6 pb-16">
      {/* Header */}
      <div className="mb-8 text-center">
        <span className="text-[11px] uppercase tracking-widest text-[#7C726A] font-medium block mb-1">
          Enquire
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1714] font-normal">
          Tell us about your piece
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm text-[#524741] font-light">
          Share your details below to send directly to our WhatsApp (863 933 5031).
        </p>
      </div>

      {isSubmitted ? (
        /* CONFIRMATION MESSAGE */
        <div className="rounded-2xl border border-[#E8E1D7] bg-white p-8 sm:p-12 text-center shadow-xs animate-fade-in">
          <div className="w-12 h-12 bg-[#FAF8F5] border border-[#E8E1D7] rounded-full flex items-center justify-center mx-auto mb-3 text-[#1C1714]">
            <CheckCircle2 className="w-6 h-6 text-[#25D366]" />
          </div>
          
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1714] mb-2">
            Details Sent to WhatsApp!
          </h3>
          
          <p className="text-xs sm:text-sm text-[#524741] font-light max-w-sm mx-auto leading-relaxed">
            Your custom enquiry has been prepared and opened in WhatsApp for <strong>863 933 5031</strong>.
          </p>

          <p className="mt-4 text-[11px] text-[#7C726A]">
            Form will automatically reset in 5 seconds...
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="rounded-2xl border border-[#E8E1D7] bg-white p-6 sm:p-8 shadow-xs space-y-4">
          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <input
                type="text"
                required
                maxLength={100}
                placeholder="Your name *"
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                className="w-full rounded-xl border border-[#E8DFC8] bg-[#FAF5EC] px-4 py-2.5 text-xs sm:text-sm text-[#1C1714] placeholder:text-[#7C726A] focus:outline-none focus:bg-white focus:border-[#1C1714]"
                id="input-client-name"
              />
            </div>

            <div>
              <input
                type="tel"
                required
                inputMode="tel"
                maxLength={16}
                placeholder="Phone / WhatsApp *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-xl border border-[#E8DFC8] bg-[#FAF5EC] px-4 py-2.5 text-xs sm:text-sm text-[#1C1714] placeholder:text-[#7C726A] focus:outline-none focus:bg-white focus:border-[#1C1714]"
                id="input-client-phone"
              />
            </div>

            <div className="sm:col-span-2">
              <input
                type="email"
                maxLength={255}
                placeholder="Email (optional)"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-[#E8DFC8] bg-[#FAF5EC] px-4 py-2.5 text-xs sm:text-sm text-[#1C1714] placeholder:text-[#7C726A] focus:outline-none focus:bg-white focus:border-[#1C1714]"
              />
            </div>

            <div>
              <PremiumSelect
                id="select-category"
                options={categories}
                value={formData.category}
                onChange={(val) => setFormData({ ...formData, category: val })}
                placeholder="I'm interested in… *"
                required={true}
              />
            </div>

            <div>
              <PremiumSelect
                id="select-budget"
                options={budgets}
                value={formData.budget}
                onChange={(val) => setFormData({ ...formData, budget: val })}
                placeholder="Budget range (optional)"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-1 block text-xs text-[#7C726A]">
                Needed by (occasion date, optional)
              </label>
              <input
                type="date"
                value={formData.neededBy}
                onChange={(e) => setFormData({ ...formData, neededBy: e.target.value })}
                className="w-full rounded-xl border border-[#E8DFC8] bg-[#FAF5EC] px-4 py-2.5 text-xs sm:text-sm text-[#1C1714] focus:outline-none focus:bg-white focus:border-[#1C1714]"
              />
            </div>

            <div className="sm:col-span-2">
              <textarea
                rows={3}
                maxLength={1000}
                placeholder="Tell us about your piece — colours, size, occasion, or attach your reference photo in WhatsApp…"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full rounded-xl border border-[#E8DFC8] bg-[#FAF5EC] px-4 py-2.5 text-xs sm:text-sm text-[#1C1714] placeholder:text-[#7C726A] focus:outline-none focus:bg-white focus:border-[#1C1714] min-h-24 resize-y"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#1C1714] text-white px-6 py-3 text-xs sm:text-sm font-medium transition-all hover:bg-[#332B26] disabled:opacity-60 cursor-pointer shadow-xs"
            id="btn-submit-enquiry"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>{isSubmitting ? 'Sending...' : 'Send Enquiry via WhatsApp'}</span>
          </button>
        </form>
      )}
    </section>
  );
}
