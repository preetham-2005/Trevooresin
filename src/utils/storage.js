const STORAGE_KEY = 'trevooresin_enquiries_v1';

const INITIAL_DEMO_LEADS = [
  {
    id: 'TRV-1001',
    createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
    clientName: 'Ananya Sharma',
    phone: '+91 98765 43210',
    email: 'ananya.s@example.com',
    category: 'Wedding Flower Preservation',
    timeline: 'Within 2-3 weeks (Post Wedding)',
    budget: '₹8,000 - ₹15,000',
    details: 'Want to preserve my bridal varmala and groom boutonniere with gold leaf accents in an 8x8 inch square cube block with LED base.',
    imagePreview: '/assets/floral_preservation.jpg',
    status: 'In Design',
    notes: 'Bride requested mock layout with eucalyptus leaves and 24k gold leaf flakes.'
  },
  {
    id: 'TRV-1002',
    createdAt: new Date(Date.now() - 3600000 * 26).toISOString(),
    clientName: 'Vikram & Priya Reddy',
    phone: '+91 94401 22334',
    email: 'vikram.reddy@example.com',
    category: 'Geode Resin Wall Clock',
    timeline: 'Housewarming Next Month',
    budget: '₹12,000 - ₹20,000',
    details: '18-inch emerald green, white and champagne gold geode wall clock with crushed quartz crystal centers.',
    imagePreview: '/assets/geode_clock.jpg',
    status: 'New',
    notes: 'Sent initial color palette options on WhatsApp.'
  },
  {
    id: 'TRV-1003',
    createdAt: new Date(Date.now() - 3600000 * 72).toISOString(),
    clientName: 'Kavita Menon',
    phone: '+91 91234 56789',
    email: 'kavita.m@example.com',
    category: 'Ocean River Coffee Table',
    timeline: 'Flexible',
    budget: '₹25,000+',
    details: 'Living room live edge teak coffee table (48x24 inches) with turquoise ocean waves and foaming surf effect.',
    imagePreview: '/assets/ocean_table.jpg',
    status: 'In Progress',
    notes: 'Teak wood prepped, second layer of deep ocean resin poured.'
  }
];

export function getEnquiries() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DEMO_LEADS));
      return INITIAL_DEMO_LEADS;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load enquiries from storage', e);
    return INITIAL_DEMO_LEADS;
  }
}

export function saveEnquiry(enquiry) {
  try {
    const current = getEnquiries();
    const newEnquiry = {
      id: `TRV-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString(),
      status: 'New',
      notes: '',
      ...enquiry
    };
    const updated = [newEnquiry, ...current];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return newEnquiry;
  } catch (e) {
    console.error('Failed to save enquiry', e);
    return null;
  }
}

export function updateEnquiryStatus(id, newStatus, newNotes = null) {
  try {
    const current = getEnquiries();
    const updated = current.map(item => {
      if (item.id === id) {
        return {
          ...item,
          status: newStatus,
          notes: newNotes !== null ? newNotes : item.notes
        };
      }
      return item;
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Failed to update enquiry', e);
    return [];
  }
}

export function deleteEnquiry(id) {
  try {
    const current = getEnquiries();
    const updated = current.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Failed to delete enquiry', e);
    return [];
  }
}
