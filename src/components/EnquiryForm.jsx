import React, { useState, useRef, useEffect } from 'react';
import { ImagePlus, X, CheckCircle2, AlertCircle } from 'lucide-react';
import { saveEnquiry } from '../utils/storage';
import { sendSilentWhatsAppEnquiry } from '../utils/whatsappCloudService';
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

  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef(null);
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage('Please upload an image smaller than 5MB.');
        return;
      }
      setErrorMessage('');
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

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
    removeImage();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.clientName.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide your name and Phone / WhatsApp number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // 1. Maintain local/database lead storage
    const newLead = saveEnquiry({
      ...formData,
      category: formData.category || 'Fully Custom Design Piece',
      imagePreview
    });

    // 2. Invoke silent server-side WhatsApp Business Cloud API integration with reference photo
    sendSilentWhatsAppEnquiry({
      ...formData,
      imagePreview,
      id: newLead ? newLead.id : Date.now()
    });

    setIsSubmitting(false);

    if (newLead) {
      // 3. Immediately display exact confirmation message: "Thanks for submitting!"
      setIsSubmitted(true);
      if (onEnquirySubmitted) onEnquirySubmitted();

      // 4. After 5 seconds, automatically clear confirmation and reset form
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
      resetTimerRef.current = setTimeout(() => {
        handleResetForm();
      }, 5000);
    } else {
      setErrorMessage('Failed to submit enquiry. Please check your connection and try again.');
    }
  };

  return (
    <section id="custom-enquiry-section" className="mx-auto max-w-3xl px-5 pb-16">
      {/* Header */}
      <div className="mb-8 text-center">
        <span className="text-[11px] uppercase tracking-widest text-[#7C726A] font-medium block mb-1">
          Enquire
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#1C1714] font-normal">
          Tell us about your piece
        </h2>
        <p className="mt-1.5 text-xs sm:text-sm text-[#524741] font-light">
          Share a few details and we'll get back with ideas, timelines and pricing.
        </p>
      </div>

      {isSubmitted ? (
        /* EXACT CONFIRMATION MESSAGE */
        <div className="rounded-2xl border border-[#E8E1D7] bg-white p-8 sm:p-12 text-center shadow-xs animate-fade-in">
          <div className="w-12 h-12 bg-[#FAF8F5] border border-[#E8E1D7] rounded-full flex items-center justify-center mx-auto mb-3 text-[#1C1714]">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1714] mb-2">
            Thanks for submitting!
          </h3>
          
          <p className="text-xs sm:text-sm text-[#524741] font-light max-w-sm mx-auto">
            We have received your custom order request and reference details.
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
                placeholder="Tell us about your piece — colours, size, occasion, a memory you want preserved…"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full rounded-xl border border-[#E8DFC8] bg-[#FAF5EC] px-4 py-2.5 text-xs sm:text-sm text-[#1C1714] placeholder:text-[#7C726A] focus:outline-none focus:bg-white focus:border-[#1C1714] min-h-24 resize-y"
              />
            </div>

            <div className="sm:col-span-2">
              {imagePreview ? (
                <div className="relative inline-block rounded-xl overflow-hidden border border-[#E8E1D7] shadow-2xs">
                  <img src={imagePreview} alt="Attached reference" className="w-28 h-28 object-cover" />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-1 right-1 p-1 bg-black/70 text-white rounded-full hover:bg-black cursor-pointer"
                    title="Remove"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[#E8DFC8] bg-[#FAF5EC] px-4 py-3.5 text-xs sm:text-sm text-[#7C726A] hover:bg-white transition-colors cursor-pointer"
                >
                  <ImagePlus className="h-4 w-4" />
                  <span>Attach a reference image (optional, max 5 MB)</span>
                </button>
              )}
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#1C1714] text-white px-6 py-3 text-xs sm:text-sm font-medium transition-all hover:bg-[#332B26] disabled:opacity-60 cursor-pointer"
            id="btn-submit-enquiry"
          >
            {isSubmitting ? 'Submitting...' : 'Send Enquiry'}
          </button>
        </form>
      )}
    </section>
  );
}
