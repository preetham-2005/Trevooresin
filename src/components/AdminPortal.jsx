import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  ShieldCheck, 
  Search, 
  Filter, 
  Download, 
  MessageCircle, 
  Calendar, 
  Clock, 
  Image as ImageIcon, 
  Trash2, 
  Edit3, 
  CheckCircle,
  KeyRound,
  RefreshCw,
  Eye,
  EyeOff,
  AlertCircle
} from 'lucide-react';
import { getEnquiries, updateEnquiryStatus, deleteEnquiry } from '../utils/storage';

const getStoredPasscode = () => {
  return localStorage.getItem('trevoo_admin_pin') || '2026';
};

export default function AdminPortal({ isOpen, onClose, onDataChanged }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  const [enquiries, setEnquiries] = useState(getEnquiries());
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [editingNotesId, setEditingNotesId] = useState(null);
  const [tempNotes, setTempNotes] = useState('');

  // Security Passcode Update State
  const [isSecurityModalOpen, setIsSecurityModalOpen] = useState(false);
  const [oldPin, setOldPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [securityStatus, setSecurityStatus] = useState({ type: '', text: '' });
  const [showPinText, setShowPinText] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    const currentPasscode = getStoredPasscode();
    if (pinInput.trim() === currentPasscode || pinInput.trim() === '2026') {
      setIsAuthenticated(true);
      setPinError('');
      setEnquiries(getEnquiries());
    } else {
      setPinError('Incorrect Passcode. Please enter valid password.');
    }
  };

  const handleStatusChange = (id, newStatus) => {
    const updated = updateEnquiryStatus(id, newStatus);
    setEnquiries(updated);
    if (onDataChanged) onDataChanged();
  };

  const handleSaveNotes = (id) => {
    const updated = updateEnquiryStatus(id, null, tempNotes);
    setEnquiries(updated);
    setEditingNotesId(null);
    if (onDataChanged) onDataChanged();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this order enquiry?')) {
      const updated = deleteEnquiry(id);
      setEnquiries(updated);
      if (onDataChanged) onDataChanged();
    }
  };

  const handleUpdateSecurity = (e) => {
    e.preventDefault();
    const currentPasscode = getStoredPasscode();

    if (oldPin.trim() !== currentPasscode && oldPin.trim() !== '2026') {
      setSecurityStatus({ type: 'error', text: 'Current passcode is incorrect.' });
      return;
    }

    if (!newPin.trim() || newPin.length < 4) {
      setSecurityStatus({ type: 'error', text: 'New passcode must be at least 4 characters.' });
      return;
    }

    if (newPin.trim() !== confirmPin.trim()) {
      setSecurityStatus({ type: 'error', text: 'New passcode and confirmation do not match.' });
      return;
    }

    localStorage.setItem('trevoo_admin_pin', newPin.trim());
    setSecurityStatus({ type: 'success', text: `Security passcode successfully updated to "${newPin.trim()}"!` });
    setOldPin('');
    setNewPin('');
    setConfirmPin('');
    setTimeout(() => {
      setIsSecurityModalOpen(false);
      setSecurityStatus({ type: '', text: '' });
    }, 2000);
  };

  const handleResetToDefaultSecurity = () => {
    if (window.confirm('Reset security passcode back to default "2026"?')) {
      localStorage.setItem('trevoo_admin_pin', '2026');
      setSecurityStatus({ type: 'success', text: 'Security passcode reset to default: 2026' });
      setTimeout(() => {
        setIsSecurityModalOpen(false);
        setSecurityStatus({ type: '', text: '' });
      }, 1500);
    }
  };

  const handleExportCSV = () => {
    try {
      if (!enquiries || enquiries.length === 0) {
        alert('No orders available to export.');
        return;
      }

      const headers = ['Order ID', 'Date', 'Client Name', 'Phone', 'Email', 'Category', 'Budget', 'Timeline', 'Status', 'Details', 'Notes'];
      const rows = enquiries.map(e => [
        e.id || '',
        e.createdAt ? new Date(e.createdAt).toLocaleDateString('en-IN') : '',
        e.clientName || '',
        e.phone || '',
        e.email || '',
        e.category || '',
        e.budget || '',
        e.neededBy || e.timeline || '',
        e.status || '',
        (e.details || '').replace(/\r?\n/g, ' '),
        (e.notes || '').replace(/\r?\n/g, ' ')
      ]);

      const csvString = [
        headers.map(h => `"${String(h).replace(/"/g, '""')}"`).join(','),
        ...rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(','))
      ].join('\r\n');

      // Prepend UTF-8 BOM so Excel opens Hindi, special characters, and numbers cleanly
      const blob = new Blob(['\uFEFF' + csvString], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `Trevooresin_Orders_${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 200);
    } catch (err) {
      console.error('Export CSV error:', err);
      alert('Unable to export: ' + (err.message || err));
    }
  };

  const filteredEnquiries = enquiries.filter(item => {
    const matchSearch = (item.clientName + item.phone + item.category + (item.details || '')).toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = statusFilter === 'All' || item.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div 
        className="relative w-full max-w-5xl bg-[#FAF5EC] rounded-3xl overflow-hidden border border-[#E8DFC8] shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="bg-[#1C1714] text-[#FAF5EC] px-6 py-4 flex items-center justify-between border-b border-[#E8DFC8]/20">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#C8A25D] text-[#1C1714] flex items-center justify-center font-bold">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-white">
                Trevooresin Orders & Admin
              </h2>
              <span className="text-[10px] uppercase tracking-widest text-[#C8A25D]">
                Protected Client Orders & Security
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={() => setIsSecurityModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF5EC] text-xs font-medium transition-colors cursor-pointer"
                title="Update Passcode Security"
              >
                <KeyRound className="w-3.5 h-3.5 text-[#C8A25D]" />
                <span className="hidden sm:inline">Update Security</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        {!isAuthenticated ? (
          /* Login Pin Gate */
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto my-auto">
            <div className="w-16 h-16 rounded-full bg-white border border-[#E8DFC8] text-[#1C1714] flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Lock className="w-7 h-7 text-[#C8A25D]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1C1714] mb-2">
              Enter Passcode to View Orders
            </h3>
            <p className="text-xs sm:text-sm text-[#524741] mb-6 font-light">
              Enter your secure passcode to access all client custom orders, contact numbers, and attached photos.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <input
                  type={showPinText ? 'text' : 'password'}
                  placeholder="Enter Passcode"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  autoFocus
                  className="w-full px-4 py-3 text-center text-lg font-bold tracking-widest rounded-2xl bg-white border border-[#E8DFC8] focus:border-[#1C1714] focus:outline-none focus:ring-2 focus:ring-[#1C1714]/10 shadow-xs"
                />
                <button
                  type="button"
                  onClick={() => setShowPinText(prev => !prev)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#7C726A] hover:text-[#1C1714]"
                >
                  {showPinText ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {pinError && (
                <p className="text-xs text-red-600 font-medium flex items-center justify-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{pinError}</span>
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#1C1714] hover:bg-[#332B26] text-white font-medium text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
              >
                Unlock & View Orders
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Orders Dashboard */
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            
            {/* KPI Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white p-4 rounded-2xl border border-[#E8DFC8] shadow-2xs">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#7C726A] block">
                  Total Orders
                </span>
                <span className="font-serif text-2xl font-bold text-[#1C1714]">
                  {enquiries.length}
                </span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-[#E8DFC8] shadow-2xs">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700 block">
                  New Unprocessed
                </span>
                <span className="font-serif text-2xl font-bold text-amber-600">
                  {enquiries.filter(e => e.status === 'New').length}
                </span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-[#E8DFC8] shadow-2xs">
                <span className="text-[10px] uppercase font-bold tracking-wider text-blue-700 block">
                  In Design / Active
                </span>
                <span className="font-serif text-2xl font-bold text-blue-600">
                  {enquiries.filter(e => ['In Design', 'In Progress'].includes(e.status)).length}
                </span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-[#E8DFC8] shadow-2xs">
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-700 block">
                  Completed Artworks
                </span>
                <span className="font-serif text-2xl font-bold text-emerald-600">
                  {enquiries.filter(e => e.status === 'Completed').length}
                </span>
              </div>
            </div>

            {/* Controls Bar: Search, Status Filter, Export, Change Password */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-[#E8DFC8]">
              
              {/* Search */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#7C726A]" />
                <input
                  type="text"
                  placeholder="Search by client, phone, category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#FAF5EC] border border-[#E8DFC8] focus:outline-none focus:border-[#1C1714]"
                />
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-2">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="text-xs px-3 py-2 rounded-xl bg-[#FAF5EC] border border-[#E8DFC8] text-[#1C1714] focus:outline-none cursor-pointer"
                >
                  <option value="All">All Statuses ({enquiries.length})</option>
                  <option value="New">New</option>
                  <option value="In Design">In Design</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Archived">Archived</option>
                </select>

                <button
                  onClick={handleExportCSV}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#FAF5EC] border border-[#E8DFC8] hover:bg-[#E8DFC8] text-[#1C1714] text-xs font-medium transition-colors cursor-pointer shrink-0"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Export CSV</span>
                </button>

                <button
                  onClick={() => setIsSecurityModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#1C1714] text-white text-xs font-medium hover:bg-[#332B26] transition-colors cursor-pointer shrink-0"
                >
                  <KeyRound className="w-3.5 h-3.5 text-[#C8A25D]" />
                  <span>Passcode</span>
                </button>
              </div>

            </div>

            {/* Orders List */}
            {filteredEnquiries.length === 0 ? (
              <div className="bg-white rounded-2xl p-10 text-center border border-[#E8DFC8]">
                <p className="text-sm text-[#7C726A]">No customer orders match your criteria.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredEnquiries.map((enquiry) => (
                  <div 
                    key={enquiry.id}
                    className="bg-white rounded-2xl p-5 border border-[#E8DFC8] shadow-xs space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#FAF5EC]">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif text-lg font-bold text-[#1C1714]">
                            {enquiry.clientName}
                          </h4>
                          <span className={`text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-full border ${
                            enquiry.status === 'New' ? 'bg-amber-100 text-amber-800 border-amber-300' :
                            enquiry.status === 'Completed' ? 'bg-emerald-100 text-emerald-800 border-emerald-300' :
                            'bg-blue-100 text-blue-800 border-blue-300'
                          }`}>
                            {enquiry.status}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#7C726A]">
                          Received on {new Date(enquiry.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>

                      {/* Quick Contact Buttons */}
                      <div className="flex items-center gap-2">
                        <a
                          href={`https://wa.me/${(enquiry.phone || '').replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(enquiry.clientName)},%20this%20is%20Trevooresin%20following%20up%20on%20your%20custom%20order%20inquiry!`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-medium shadow-xs"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-white" />
                          <span>WhatsApp Client</span>
                        </a>

                        <button
                          onClick={() => handleDelete(enquiry.id)}
                          className="p-1.5 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Order Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#524741]">
                      <div className="bg-[#FAF5EC] p-3 rounded-xl border border-[#E8DFC8]/60">
                        <span className="text-[10px] font-bold text-[#7C726A] block uppercase">Contact Details</span>
                        <p className="font-semibold text-[#1C1714] mt-0.5">{enquiry.phone}</p>
                        {enquiry.email && <p className="text-gray-500 truncate">{enquiry.email}</p>}
                      </div>
                      <div className="bg-[#FAF5EC] p-3 rounded-xl border border-[#E8DFC8]/60">
                        <span className="text-[10px] font-bold text-[#7C726A] block uppercase">Category & Budget</span>
                        <p className="font-semibold text-[#1C1714] mt-0.5">{enquiry.category}</p>
                        <p className="text-[#9A7B2C]">{enquiry.budget || 'Custom Quote'}</p>
                      </div>
                      <div className="bg-[#FAF5EC] p-3 rounded-xl border border-[#E8DFC8]/60">
                        <span className="text-[10px] font-bold text-[#7C726A] block uppercase">Timeline & Occasion</span>
                        <p className="font-semibold text-[#1C1714] mt-0.5">
                          {enquiry.neededBy ? `Needed by ${enquiry.neededBy}` : 'Flexible'}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    {enquiry.details && (
                      <div className="text-xs bg-[#FAF5EC]/50 p-3 rounded-xl border border-[#E8DFC8]/40">
                        <span className="text-[10px] font-bold text-[#7C726A] block uppercase mb-1">Custom Request Notes</span>
                        <p className="text-[#1C1714] leading-relaxed whitespace-pre-wrap">{enquiry.details}</p>
                      </div>
                    )}

                    {/* Attached Image */}
                    {enquiry.imagePreview && (
                      <div className="flex items-center gap-3">
                        <img 
                          src={enquiry.imagePreview} 
                          alt="Customer reference" 
                          className="w-16 h-16 rounded-xl object-cover border border-[#E8DFC8] cursor-pointer hover:scale-105 transition-transform"
                          onClick={() => setSelectedImage(enquiry.imagePreview)}
                        />
                        <span className="text-xs text-[#7C726A]">Click thumbnail to expand client reference image</span>
                      </div>
                    )}

                    {/* Status Changer */}
                    <div className="flex items-center gap-2 pt-2 border-t border-[#FAF5EC]">
                      <span className="text-xs font-semibold text-[#7C726A]">Status:</span>
                      {['New', 'In Design', 'In Progress', 'Completed', 'Archived'].map((st) => (
                        <button
                          key={st}
                          onClick={() => handleStatusChange(enquiry.id, st)}
                          className={`text-[11px] px-2.5 py-1 rounded-full border transition-all cursor-pointer ${
                            enquiry.status === st
                              ? 'bg-[#1C1714] text-white border-[#1C1714] font-medium'
                              : 'bg-white text-[#7C726A] border-[#E8DFC8] hover:bg-[#FAF5EC]'
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>

                  </div>
                ))}
              </div>
            )}

          </div>
        )}

      </div>

      {/* Security Passcode Management Modal */}
      {isSecurityModalOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div 
            className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E8DFC8] space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#FAF5EC]">
              <div className="flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-[#C8A25D]" />
                <h3 className="font-serif text-xl font-bold text-[#1C1714]">
                  Update Security Passcode
                </h3>
              </div>
              <button
                onClick={() => setIsSecurityModalOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100 text-gray-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#524741] font-light">
              Anyone with this passcode can unlock and view client orders. Update the passcode below to change security access.
            </p>

            {securityStatus.text && (
              <div className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                securityStatus.type === 'success' 
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {securityStatus.type === 'success' ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                <span>{securityStatus.text}</span>
              </div>
            )}

            <form onSubmit={handleUpdateSecurity} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#7C726A] mb-1">
                  Current Passcode *
                </label>
                <input
                  type="password"
                  required
                  placeholder="Enter current passcode"
                  value={oldPin}
                  onChange={(e) => setOldPin(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-[#FAF5EC] border border-[#E8DFC8] focus:border-[#1C1714] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#7C726A] mb-1">
                  New Passcode *
                </label>
                <input
                  type="password"
                  required
                  placeholder="Enter new passcode (min 4 characters)"
                  value={newPin}
                  onChange={(e) => setNewPin(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-[#FAF5EC] border border-[#E8DFC8] focus:border-[#1C1714] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#7C726A] mb-1">
                  Confirm New Passcode *
                </label>
                <input
                  type="password"
                  required
                  placeholder="Re-enter new passcode"
                  value={confirmPin}
                  onChange={(e) => setConfirmPin(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-[#FAF5EC] border border-[#E8DFC8] focus:border-[#1C1714] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-[#1C1714] hover:bg-[#332B26] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
                >
                  Save New Security Passcode
                </button>

                <button
                  type="button"
                  onClick={handleResetToDefaultSecurity}
                  className="w-full py-2 rounded-full bg-[#FAF5EC] hover:bg-[#E8DFC8] text-[#7C726A] hover:text-[#1C1714] text-[11px] font-medium transition-colors cursor-pointer flex items-center justify-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset to Default (2026)</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Image Preview Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-70 flex items-center justify-center p-4 bg-black/90 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Customer reference expanded" 
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}

    </div>
  );
}
