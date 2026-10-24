import React, { useState, useEffect } from 'react';
import {
  CandidateApplicationRecord,
  subscribeToApplications,
  updateApplicationStatus,
  exportApplicationsToCSV,
  signInAdminWithGoogle,
  auth,
} from '../firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_ADMIN_PIN = 'admin123';

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({ isOpen, onClose }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  const [applications, setApplications] = useState<CandidateApplicationRecord[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'New' | 'Contacted'>('All');
  const [currentUser, setCurrentUser] = useState<User | null>(auth.currentUser);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (u) => setCurrentUser(u));
    return () => unsubAuth();
  }, []);

  useEffect(() => {
    if (!isOpen || !isUnlocked) return;
    const unsub = subscribeToApplications((records) => {
      setApplications(records);
    });
    return () => unsub();
  }, [isOpen, isUnlocked]);

  if (!isOpen) return null;

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === DEFAULT_ADMIN_PIN) {
      setIsUnlocked(true);
      setPinError('');
      setPinInput('');
    } else {
      setPinError('Invalid Admin PIN. Default PIN for HR Desk is admin123.');
    }
  };

  const handleLogout = () => {
    setIsUnlocked(false);
    setPinInput('');
    setPinError('');
    onClose();
  };

  const handleToggleStatus = async (record: CandidateApplicationRecord) => {
    const nextStatus = record.status === 'New' ? 'Contacted' : 'New';
    try {
      await updateApplicationStatus(record.id, nextStatus, record.notes);
    } catch (err) {
      console.error('Status update error:', err);
    }
  };

  const filteredApplications = applications.filter((app) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      app.fullName.toLowerCase().includes(q) ||
      app.phone.toLowerCase().includes(q) ||
      app.role.toLowerCase().includes(q) ||
      app.city.toLowerCase().includes(q);
    const matchesStatus = statusFilter === 'All' || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalCount = applications.length;
  const newLeadsCount = applications.filter((a) => a.status === 'New').length;
  const contactedCount = applications.filter((a) => a.status !== 'New').length;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      {!isUnlocked ? (
        /* PIN Authentication Modal */
        <div
          className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-slate-900 px-6 py-5 text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-400 flex items-center justify-center">
                <i className="fa-solid fa-user-shield text-lg"></i>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                  Authorized Access Only
                </span>
                <h3 className="font-display font-bold text-base text-white">
                  KGB Group Admin Portal
                </h3>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center"
              aria-label="Close Admin Login"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <form onSubmit={handlePinSubmit} className="p-6 space-y-4">
            <p className="text-xs text-slate-600 leading-relaxed">
              Enter your HR Administrator PIN to unlock the real-time candidate lead management dashboard.
            </p>

            <div>
              <label
                htmlFor="admin-pin-input"
                className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
              >
                Admin Security PIN
              </label>
              <div className="relative">
                <i className="fa-solid fa-lock absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input
                  id="admin-pin-input"
                  type="password"
                  autoFocus
                  required
                  placeholder="Enter Admin PIN (e.g. admin123)"
                  value={pinInput}
                  onChange={(e) => {
                    setPinInput(e.target.value);
                    if (pinError) setPinError('');
                  }}
                  className="w-full pl-9 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-400/30 focus:border-amber-500"
                />
              </div>
              {pinError && (
                <p className="text-xs text-red-600 font-semibold mt-1.5">{pinError}</p>
              )}
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <button
                type="button"
                onClick={onClose}
                className="cursor-pointer flex-1 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="cursor-pointer flex-1 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs shadow-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <i className="fa-solid fa-unlock-keyhole"></i>
                <span>Unlock Dashboard</span>
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* Full-Screen Admin Dashboard Modal */
        <div
          className="bg-slate-50 rounded-3xl w-full max-w-7xl h-[92vh] flex flex-col overflow-hidden shadow-2xl border border-slate-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Dashboard Header */}
          <div className="bg-slate-900 text-white px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-display font-black text-sm shrink-0">
                KGB
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-display font-black text-base sm:text-xl text-white">
                    KGB Group - HR Lead Management Portal
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-extrabold text-xs">
                    {totalCount} Applications
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Firebase Realtime Sync Active &bull; Zone 1, MP Nagar, Bhopal</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              {!currentUser && (
                <button
                  type="button"
                  onClick={() => signInAdminWithGoogle().catch(() => {})}
                  className="cursor-pointer hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors"
                  title="Optional: Sign in with Google Admin Account for Cloud Firestore Sync"
                >
                  <i className="fa-brands fa-google text-amber-400"></i>
                  <span>Cloud Sync Login</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => exportApplicationsToCSV(filteredApplications)}
                className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xs transition-colors"
              >
                <i className="fa-solid fa-file-csv"></i>
                <span>Export to CSV</span>
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600/90 hover:bg-red-600 text-white font-bold text-xs transition-colors"
              >
                <i className="fa-solid fa-right-from-bracket"></i>
                <span>Close / Logout</span>
              </button>
            </div>
          </div>

          {/* Dashboard Body */}
          <div className="p-4 sm:p-6 flex-1 overflow-y-auto space-y-5">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Total Applications
                  </span>
                  <span className="font-display font-black text-2xl sm:text-3xl text-slate-900 mt-1 block">
                    {totalCount}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center text-xl">
                  <i className="fa-solid fa-users"></i>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-amber-200 shadow-2xs flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">
                    New Leads
                  </span>
                  <span className="font-display font-black text-2xl sm:text-3xl text-amber-600 mt-1 block">
                    {newLeadsCount}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl">
                  <i className="fa-solid fa-bolt"></i>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-emerald-200 shadow-2xs flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                    Contacted
                  </span>
                  <span className="font-display font-black text-2xl sm:text-3xl text-emerald-600 mt-1 block">
                    {contactedCount}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
              </div>
            </div>

            {/* Search & Filter Bar */}
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="relative flex-1">
                <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input
                  type="search"
                  placeholder="Search by Candidate Name, Phone Number, or Job Role..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-amber-500"
                />
              </div>

              <div className="flex items-center gap-1.5">
                {(['All', 'New', 'Contacted'] as const).map((status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setStatusFilter(status)}
                    className={`cursor-pointer px-3.5 py-2 rounded-xl text-xs font-bold transition-colors ${
                      statusFilter === status
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {status === 'All' ? `All (${totalCount})` : status}
                  </button>
                ))}
              </div>
            </div>

            {/* Responsive Applications Table */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white text-[11px] uppercase tracking-wider">
                      <th className="py-3.5 px-4 font-bold">Date / Time</th>
                      <th className="py-3.5 px-4 font-bold">Candidate Name</th>
                      <th className="py-3.5 px-4 font-bold">Contact (Call &amp; WhatsApp)</th>
                      <th className="py-3.5 px-4 font-bold">City</th>
                      <th className="py-3.5 px-4 font-bold">Qualification</th>
                      <th className="py-3.5 px-4 font-bold">Applied Role</th>
                      <th className="py-3.5 px-4 font-bold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-xs">
                    {filteredApplications.map((app) => {
                      const cleanPhone = app.phone.replace(/\D/g, '').slice(-10);
                      return (
                        <tr key={app.id} className="hover:bg-slate-50/90 transition-colors">
                          <td className="py-3.5 px-4 whitespace-nowrap text-slate-500 font-medium">
                            {new Date(app.timestamp).toLocaleString('en-IN', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="font-bold text-slate-900">{app.fullName}</div>
                            {app.email && (
                              <div className="text-[11px] text-slate-500">{app.email}</div>
                            )}
                            {app.notes && (
                              <div className="text-[11px] text-slate-500 italic mt-0.5 max-w-xs truncate">
                                &ldquo;{app.notes}&rdquo;
                              </div>
                            )}
                          </td>
                          <td className="py-3.5 px-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-bold text-slate-800">{app.phone}</span>
                              <a
                                href={`tel:+91${cleanPhone}`}
                                className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200"
                                title={`Call ${app.fullName}`}
                              >
                                <i className="fa-solid fa-phone text-[10px]"></i>
                              </a>
                              <a
                                href={`https://wa.me/91${cleanPhone}?text=${encodeURIComponent(
                                  `Hi ${app.fullName}, greetings from KGB Group (Knowledge Gurukul Bhopal) regarding your application for ${app.role}.`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200"
                                title={`WhatsApp ${app.fullName}`}
                              >
                                <i className="fa-brands fa-whatsapp text-xs"></i>
                              </a>
                            </div>
                          </td>
                          <td className="py-3.5 px-4 whitespace-nowrap text-slate-700 font-medium">
                            {app.city || 'Bhopal'}
                          </td>
                          <td className="py-3.5 px-4 whitespace-nowrap text-slate-700">
                            {app.qualification}
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="inline-block px-2.5 py-1 rounded-lg bg-blue-50 text-blue-900 font-bold border border-blue-200 text-[11px]">
                              {app.role}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 whitespace-nowrap">
                            <button
                              type="button"
                              onClick={() => handleToggleStatus(app)}
                              className={`cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-extrabold text-[11px] border transition-all ${
                                app.status === 'New'
                                  ? 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
                                  : 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                              }`}
                              title="Click to toggle status between New and Contacted"
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  app.status === 'New' ? 'bg-amber-500' : 'bg-emerald-500'
                                }`}
                              ></span>
                              <span>{app.status}</span>
                            </button>
                          </td>
                        </tr>
                      );
                    })}

                    {filteredApplications.length === 0 && (
                      <tr>
                        <td colSpan={7} className="py-10 text-center text-slate-500">
                          No matching candidate applications found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
