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
  DollarSign, 
  Clock, 
  Image as ImageIcon, 
  Trash2, 
  Edit3, 
  CheckCircle,
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { getEnquiries, updateEnquiryStatus, deleteEnquiry } from '../utils/storage';

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

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (pinInput === '2026' || pinInput === 'trevoor2026' || pinInput.toLowerCase() === 'trevoor') {
      setIsAuthenticated(true);
      setPinError('');
      setEnquiries(getEnquiries());
    } else {
      setPinError('Incorrect Passcode. Hint: Use 2026');
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
    if (window.confirm('Are you sure you want to delete this enquiry record?')) {
      const updated = deleteEnquiry(id);
      setEnquiries(updated);
      if (onDataChanged) onDataChanged();
    }
  };

  const handleExportCSV = () => {
    const headers = ['ID', 'Date', 'Client Name', 'Phone', 'Email', 'Category', 'Timeline', 'Budget', 'Status', 'Details', 'Notes'];
    const rows = enquiries.map(e => [
      `"${e.id}"`,
      `"${new Date(e.createdAt).toLocaleDateString()}"`,
      `"${(e.clientName || '').replace(/"/g, '""')}"`,
      `"${(e.phone || '').replace(/"/g, '""')}"`,
      `"${(e.email || '').replace(/"/g, '""')}"`,
      `"${(e.category || '').replace(/"/g, '""')}"`,
      `"${(e.timeline || '').replace(/"/g, '""')}"`,
      `"${(e.budget || '').replace(/"/g, '""')}"`,
      `"${(e.status || '').replace(/"/g, '""')}"`,
      `"${(e.details || '').replace(/"/g, '""')}"`,
      `"${(e.notes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Trevooresin_Leads_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredEnquiries = enquiries.filter(item => {
    const matchSearch = (item.clientName + item.phone + item.category + item.details).toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = statusFilter === 'All' || item.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'New': return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'In Design': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'In Progress': return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'Completed': return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Archived': return 'bg-gray-100 text-gray-800 border-gray-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="bg-[#1C140F] text-[#FAF7F2] px-6 py-4 flex items-center justify-between border-b border-[#D4AF37]/30">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#1C140F] flex items-center justify-center font-bold">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#F7E8C4]">
                Trevooresin Studio Admin
              </h2>
              <span className="text-[10px] uppercase tracking-widest text-[#E2B89D]">
                Lead Pipeline & Order Manager
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {!isAuthenticated ? (
          /* Login Pin Gate */
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto my-auto">
            <div className="w-16 h-16 rounded-full bg-[#EFE8DC] border border-[#D4AF37]/40 text-[#2C1F18] flex items-center justify-center mx-auto mb-4">
              <Lock className="w-7 h-7 text-[#9A7B2C]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#2C1F18] mb-2">
              Studio Owner Access
            </h3>
            <p className="text-xs sm:text-sm text-[#4A3528]/80 mb-6">
              Enter your secure studio passcode to access custom enquiries, attached photos, and client contacts.
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                placeholder="Enter Passcode (Default: 2026)"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                autoFocus
                className="w-full px-4 py-3 text-center text-lg font-bold tracking-widest rounded-2xl bg-white border border-[#E8DFC8] focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20"
              />

              {pinError && (
                <p className="text-xs text-red-600 font-medium">{pinError}</p>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#2C1F18] hover:bg-[#1C140F] text-[#F7E8C4] font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                Unlock Dashboard
              </button>
              
              <div className="text-[11px] text-[#4A3528]/60">
                Demo Quick Passcode: <code className="bg-[#EFE8DC] px-2 py-0.5 rounded text-[#2C1F18] font-bold">2026</code>
              </div>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            
            {/* KPI Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white p-4 rounded-2xl border border-[#E8DFC8] soft-shadow">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#4A3528]/70 block">
                  Total Leads
                </span>
                <span className="font-serif text-2xl font-bold text-[#2C1F18]">
                  {enquiries.length}
                </span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-[#E8DFC8] soft-shadow">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700 block">
                  New Unprocessed
                </span>
                <span className="font-serif text-2xl font-bold text-amber-600">
                  {enquiries.filter(e => e.status === 'New').length}
                </span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-[#E8DFC8] soft-shadow">
                <span className="text-[10px] uppercase font-bold tracking-wider text-blue-700 block">
                  In Design / Active
                </span>
                <span className="font-serif text-2xl font-bold text-blue-600">
                  {enquiries.filter(e => ['In Design', 'In Progress'].includes(e.status)).length}
                </span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-[#E8DFC8] soft-shadow">
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-700 block">
                  Completed Artworks
                </span>
                <span className="font-serif text-2xl font-bold text-emerald-600">
                  {enquiries.filter(e => e.status === 'Completed').length}
                </span>
              </div>
            </div>

            {/* Controls Bar: Search, Status Filter, Export */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border border-[#E8DFC8]">
              
              {/* Search */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#4A3528]/50" />
                <input
                  type="text"
                  placeholder="Search by client, phone, category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#FAF7F2] border border-[#E8DFC8] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-2">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 text-xs rounded-xl bg-[#FAF7F2] border border-[#E8DFC8] font-semibold text-[#2C1F18] focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="All">All Statuses</option>
                  <option value="New">New</option>
                  <option value="In Design">In Design</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Archived">Archived</option>
                </select>

                {/* CSV Export */}
                <button
                  onClick={handleExportCSV}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#2C1F18] text-[#F7E8C4] hover:bg-[#1C140F] text-xs font-semibold cursor-pointer whitespace-nowrap transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Export CSV</span>
                </button>
              </div>

            </div>

            {/* Leads List */}
            <div className="space-y-4">
              {filteredEnquiries.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-[#E8DFC8]">
                  <p className="text-sm text-[#4A3528]/70">No enquiry records match your search filter.</p>
                </div>
              ) : (
                filteredEnquiries.map((lead) => (
                  <div 
                    key={lead.id}
                    className="bg-white rounded-2xl p-5 border border-[#E8DFC8] soft-shadow hover:border-[#D4AF37]/50 transition-colors"
                  >
                    {/* Header: ID, Date, Status */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-[#E8DFC8]/60">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#2C1F18] bg-[#EFE8DC] px-2.5 py-1 rounded-lg">
                          {lead.id}
                        </span>
                        <span className="text-xs text-[#4A3528]/60">
                          {new Date(lead.createdAt).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}
                        </span>
                      </div>

                      {/* Status Dropdown */}
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-semibold text-[#4A3528]/70">Status:</span>
                        <select
                          value={lead.status || 'New'}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                          className={`text-xs font-bold px-2.5 py-1 rounded-full border cursor-pointer focus:outline-none ${getStatusBadge(lead.status || 'New')}`}
                        >
                          <option value="New">New</option>
                          <option value="In Design">In Design</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Completed">Completed</option>
                          <option value="Archived">Archived</option>
                        </select>
                      </div>
                    </div>

                    {/* Main Client Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      {/* Col 1: Client & Contact */}
                      <div>
                        <h4 className="font-bold text-sm text-[#2C1F18] mb-0.5">
                          {lead.clientName}
                        </h4>
                        <p className="text-xs text-[#4A3528] flex items-center gap-1.5 mb-1">
                          <strong>WhatsApp:</strong> {lead.phone}
                        </p>
                        {lead.email && (
                          <p className="text-xs text-[#4A3528]/80">
                            <strong>Email:</strong> {lead.email}
                          </p>
                        )}
                        <div className="mt-2.5">
                          {/* Direct WhatsApp Client Action */}
                          <a
                            href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(lead.clientName)}!%20This%20is%20Trevooresin%20Studio%20regarding%20your%20custom%20order%20inquiry.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#128C7E] bg-[#25D366]/15 hover:bg-[#25D366]/25 px-3 py-1 rounded-full border border-[#25D366]/30 transition-colors"
                          >
                            <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366]" />
                            Reply on WhatsApp
                          </a>
                        </div>
                      </div>

                      {/* Col 2: Specifications */}
                      <div className="text-xs space-y-1 bg-[#FAF7F2] p-3 rounded-xl border border-[#E8DFC8]/60">
                        <div>
                          <strong className="text-[#9A7B2C]">Category:</strong> {lead.category}
                        </div>
                        <div>
                          <strong className="text-[#9A7B2C]">Timeline:</strong> {lead.timeline || 'N/A'}
                        </div>
                        <div>
                          <strong className="text-[#9A7B2C]">Budget:</strong> {lead.budget || 'N/A'}
                        </div>
                        {lead.details && (
                          <div className="pt-1.5 mt-1.5 border-t border-[#E8DFC8]/60 text-[#2C1F18] leading-relaxed italic">
                            "{lead.details}"
                          </div>
                        )}
                      </div>

                      {/* Col 3: Reference Image */}
                      <div>
                        <span className="text-[11px] font-bold text-[#4A3528]/70 block mb-1.5">
                          Reference Attachment:
                        </span>
                        {lead.imagePreview ? (
                          <div 
                            onClick={() => setSelectedImage(lead.imagePreview)}
                            className="relative w-20 h-20 rounded-xl overflow-hidden border border-[#D4AF37]/40 cursor-pointer group shadow-sm"
                          >
                            <img src={lead.imagePreview} alt="Reference" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-[10px] font-bold transition-opacity">
                              Zoom
                            </div>
                          </div>
                        ) : (
                          <span className="text-xs text-[#4A3528]/50 italic">No image attached</span>
                        )}
                      </div>
                    </div>

                    {/* Internal Studio Notes & Delete */}
                    <div className="pt-3 border-t border-[#E8DFC8]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <div className="flex-1 w-full sm:w-auto">
                        {editingNotesId === lead.id ? (
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={tempNotes}
                              onChange={(e) => setTempNotes(e.target.value)}
                              placeholder="Add internal studio notes (e.g., 'Sent mockups', 'Silica drying started')..."
                              className="w-full px-3 py-1.5 text-xs rounded-lg bg-[#FAF7F2] border border-[#D4AF37] focus:outline-none"
                            />
                            <button
                              onClick={() => handleSaveNotes(lead.id)}
                              className="px-3 py-1.5 bg-[#2C1F18] text-[#F7E8C4] text-xs font-bold rounded-lg cursor-pointer"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => setEditingNotesId(null)}
                              className="px-2 py-1.5 text-xs text-[#4A3528] cursor-pointer"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-[#4A3528]/80">
                              <strong>Internal Notes:</strong> {lead.notes || <span className="italic text-[#4A3528]/50">None yet</span>}
                            </span>
                            <button
                              onClick={() => {
                                setEditingNotesId(lead.id);
                                setTempNotes(lead.notes || '');
                              }}
                              className="text-[#9A7B2C] hover:text-[#2C1F18] text-xs font-semibold inline-flex items-center gap-1 cursor-pointer"
                            >
                              <Edit3 className="w-3 h-3" /> Edit
                            </button>
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => handleDelete(lead.id)}
                        className="text-red-600 hover:text-red-800 p-1.5 text-xs inline-flex items-center gap-1 cursor-pointer rounded-lg hover:bg-red-50 transition-colors"
                        title="Delete record"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Delete</span>
                      </button>
                    </div>

                  </div>
                ))
              )}
            </div>

          </div>
        )}

      </div>

      {/* Image Zoom Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-xl max-h-[85vh]">
            <img src={selectedImage} alt="Attachment Zoom" className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-black/60 text-white p-2 rounded-full hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
