import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, Sparkles } from 'lucide-react';

export default function PremiumSelect({ 
  label, 
  options, 
  value, 
  onChange, 
  placeholder = 'Select an option…',
  id,
  required = false
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard accessibility
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  };

  const selectedOption = options.find((opt) => (typeof opt === 'string' ? opt : opt.value) === value);
  const displayLabel = selectedOption 
    ? (typeof selectedOption === 'string' ? selectedOption : selectedOption.label) 
    : placeholder;

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Hidden real input for required form validation if needed */}
      <input 
        type="text" 
        value={value || ''} 
        onChange={() => {}} 
        required={required} 
        className="sr-only" 
        tabIndex={-1} 
        aria-hidden="true" 
      />

      {/* Premium Select Trigger */}
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        className={`w-full flex items-center justify-between gap-2 rounded-xl border px-4 py-3 text-xs sm:text-sm text-left transition-all duration-200 cursor-pointer select-none ${
          isOpen 
            ? 'border-[#1C1714] bg-white ring-2 ring-[#1C1714]/10 shadow-xs' 
            : 'border-[#E8DFC8] bg-[#FAF5EC] hover:bg-white hover:border-[#C8A25D]/70'
        } ${value ? 'text-[#1C1714] font-medium' : 'text-[#7C726A] font-normal'}`}
      >
        <span className="truncate flex items-center gap-2">
          {value && <Sparkles className="w-3.5 h-3.5 text-[#C8A25D] shrink-0" />}
          {displayLabel}
        </span>
        <ChevronDown 
          className={`w-4 h-4 text-[#7C726A] shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#1C1714]' : ''
          }`} 
        />
      </button>

      {/* Floating Dropdown Menu */}
      {isOpen && (
        <div 
          role="listbox"
          className="dropdown-animate-in absolute left-0 right-0 top-full z-50 mt-1.5 max-h-60 overflow-y-auto rounded-2xl border border-[#E8DFC8] bg-white/98 backdrop-blur-md p-1.5 shadow-xl"
        >
          {options.map((option, idx) => {
            const optVal = typeof option === 'string' ? option : option.value;
            const optLabel = typeof option === 'string' ? option : option.label;
            const isSelected = value === optVal;

            return (
              <button
                key={idx}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(optVal);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm transition-all text-left cursor-pointer group ${
                  isSelected 
                    ? 'bg-[#1C1714] text-white font-medium shadow-2xs' 
                    : 'text-[#2C1F18] hover:bg-[#FAF5EC] hover:text-[#1C1714]'
                }`}
              >
                <span className="truncate">{optLabel}</span>
                {isSelected && (
                  <Check className="w-4 h-4 text-[#F5EFE3] shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
