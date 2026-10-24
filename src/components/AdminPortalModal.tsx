import React, { useState, useEffect } from 'react';
import {
  CandidateApplicationRecord,
  PosterRecord,
  DynamicJobRecord,
  subscribeToApplications,
  updateApplicationStatus,
  exportApplicationsToCSV,
  uploadImageToCloudinary,
  createPosterRecord,
  deletePosterRecord,
  subscribeToPosters,
  createDynamicJobRecord,
  deleteDynamicJobRecord,
  subscribeToDynamicJobs,
} from '../firebase';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_ADMIN_PIN = 'admin123';

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({ isOpen, onClose }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  const [activeTab, setActiveTab] = useState<'leads' | 'posters' | 'jobs'>('leads');

  // Tab 1: Leads state
  const [applications, setApplications] = useState<CandidateApplicationRecord[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'New' | 'Contacted'>('All');

  // Tab 2: Posters (Cloudinary) state
  const [posters, setPosters] = useState<PosterRecord[]>([]);
  const [posterTitle, setPosterTitle] = useState('');
  const [posterFile, setPosterFile] = useState<File | null>(null);
  const [isUploadingPoster, setIsUploadingPoster] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [posterStatusMsg, setPosterStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Tab 3: Vacancies state
  const [dynamicJobs, setDynamicJobs] = useState<DynamicJobRecord[]>([]);
  const [jobTitle, setJobTitle] = useState('');
  const [jobSalary, setJobSalary] = useState('');
  const [jobType, setJobType] = useState<'WFH' | 'Office' | 'Hybrid'>('WFH');
  const [jobLocation, setJobLocation] = useState('');
  const [jobQualifications, setJobQualifications] = useState('');
  const [isSavingJob, setIsSavingJob] = useState(false);
  const [jobStatusMsg, setJobStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    if (!isOpen || !isUnlocked) return;
    const unsubLeads = subscribeToApplications((records) => setApplications(records));
    const unsubPosters = subscribeToPosters((items) => setPosters(items));
    const unsubJobs = subscribeToDynamicJobs((items) => setDynamicJobs(items));
    return () => {
      unsubLeads();
      unsubPosters();
      unsubJobs();
    };
  }, [isOpen, isUnlocked]);

  if (!isOpen) return null;

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === DEFAULT_ADMIN_PIN) {
      setIsUnlocked(true);
      setPinError('');
      setPinInput('');
    } else {
      setPinError('Invalid Admin PIN. Default PIN is admin123.');
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

  // Tab 2: Cloudinary Upload & Save to Firebase 'posters/'
  const handlePosterUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPosterStatusMsg(null);

    if (!posterTitle.trim() || !posterFile) {
      setPosterStatusMsg({
        type: 'error',
        text: 'Please enter a Poster Title and select an image file to upload.',
      });
      return;
    }

    setIsUploadingPoster(true);
    setUploadProgress(25);
    const progressTimer = setInterval(() => {
      setUploadProgress((prev) => (prev < 85 ? prev + 15 : prev));
    }, 300);

    try {
      const secureUrl = await uploadImageToCloudinary(posterFile);
      clearInterval(progressTimer);
      setUploadProgress(95);

      await createPosterRecord(posterTitle.trim(), secureUrl);
      setUploadProgress(100);
      setPosterTitle('');
      setPosterFile(null);
      const fileEl = document.getElementById('cloudinary-poster-file') as HTMLInputElement | null;
      if (fileEl) fileEl.value = '';
      setPosterStatusMsg({
        type: 'success',
        text: 'Poster uploaded to Cloudinary & published live to website!',
      });
    } catch (err) {
      clearInterval(progressTimer);
      setPosterStatusMsg({
        type: 'error',
        text: err instanceof Error ? err.message : 'Failed to upload poster.',
      });
    } finally {
      setTimeout(() => {
        setIsUploadingPoster(false);
        setUploadProgress(0);
      }, 400);
    }
  };

  // Tab 3: Save New Vacancy to Firebase 'jobs/'
  const handleAddJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setJobStatusMsg(null);

    if (!jobTitle.trim() || !jobSalary.trim() || !jobLocation.trim() || !jobQualifications.trim()) {
      setJobStatusMsg({
        type: 'error',
        text: 'Please fill in all job vacancy fields.',
      });
      return;
    }

    setIsSavingJob(true);
    try {
      await createDynamicJobRecord({
        title: jobTitle,
        salary: jobSalary,
        jobType,
        location: jobLocation,
        qualifications: jobQualifications,
      });
      setJobTitle('');
      setJobSalary('');
      setJobType('WFH');
      setJobLocation('');
      setJobQualifications('');
      setJobStatusMsg({
        type: 'success',
        text: 'Vacancy added & published live to Active Job Openings!',
      });
    } catch (err) {
      setJobStatusMsg({
        type: 'error',
        text: err instanceof Error ? err.message : 'Failed to save vacancy.',
      });
    } finally {
      setIsSavingJob(false);
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
                  Staff / Admin Portal
                </span>
                <h3 className="font-display font-bold text-base text-white">
                  KGB Group Admin Authentication
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
              Enter your Staff / Admin PIN to manage candidate leads, upload Cloudinary posters, and publish live job vacancies.
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
                  placeholder="Enter Admin PIN (default: admin123)"
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
        /* Full-Screen 3-Tab Admin Dashboard Modal */
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
                    KGB Group - Staff &amp; HR Admin Portal
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-extrabold text-xs">
                    {totalCount} Leads
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Firebase Realtime Sync + Cloudinary Direct Upload &bull; Bhopal HQ</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
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

          {/* 3-Tab Navigation Bar */}
          <div className="bg-white border-b border-slate-200 px-4 sm:px-6 py-2.5 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('leads')}
              className={`cursor-pointer shrink-0 px-4 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-2 transition-all ${
                activeTab === 'leads'
                  ? 'bg-slate-900 text-amber-400 shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <i className="fa-solid fa-users-viewfinder"></i>
              <span>Received Leads &amp; Applications ({totalCount})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('posters')}
              className={`cursor-pointer shrink-0 px-4 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-2 transition-all ${
                activeTab === 'posters'
                  ? 'bg-slate-900 text-amber-400 shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <i className="fa-solid fa-cloud-arrow-up"></i>
              <span>Upload &amp; Manage Posters ({posters.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('jobs')}
              className={`cursor-pointer shrink-0 px-4 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-2 transition-all ${
                activeTab === 'jobs'
                  ? 'bg-slate-900 text-amber-400 shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <i className="fa-solid fa-briefcase-medical"></i>
              <span>Add &amp; Manage Vacancies ({dynamicJobs.length})</span>
            </button>
          </div>

          {/* Tab Content Body */}
          <div className="p-4 sm:p-6 flex-1 overflow-y-auto">
            {/* =================================================================
                TAB 1: RECEIVED LEADS & APPLICATIONS
            ================================================================== */}
            {activeTab === 'leads' && (
              <div className="space-y-5">
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

                {/* Applications Table */}
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
            )}

            {/* =================================================================
                TAB 2: UPLOAD & MANAGE POSTERS (CLOUDINARY INTEGRATED)
            ================================================================== */}
            {activeTab === 'posters' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Upload Form */}
                <div className="lg:col-span-5 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4 h-fit">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block">
                      Cloudinary Direct Unsigned Upload (dxeuzdwkz)
                    </span>
                    <h3 className="font-display font-black text-lg text-slate-900">
                      Upload New Hiring Banner / Poster
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Uploaded posters appear immediately in the top &ldquo;Latest Announcements &amp; Hiring Drives&rdquo; banner section.
                    </p>
                  </div>

                  {posterStatusMsg && (
                    <div
                      className={`p-3 rounded-xl text-xs font-bold border ${
                        posterStatusMsg.type === 'success'
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : 'bg-red-50 text-red-700 border-red-200'
                      }`}
                    >
                      {posterStatusMsg.text}
                    </div>
                  )}

                  <form onSubmit={handlePosterUploadSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Poster / Announcement Title *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mega Campus Drive at Bhopal CEDMAP - 15th Nov"
                        value={posterTitle}
                        onChange={(e) => setPosterTitle(e.target.value)}
                        className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5">
                        Select Poster Image File *
                      </label>
                      <input
                        id="cloudinary-poster-file"
                        type="file"
                        accept="image/*"
                        required
                        onChange={(e) => setPosterFile(e.target.files?.[0] || null)}
                        className="w-full text-xs text-slate-700 file:mr-3 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-extrabold file:bg-slate-900 file:text-amber-400 hover:file:bg-slate-800 cursor-pointer bg-slate-50 rounded-xl border border-slate-300 p-1.5"
                      />
                    </div>

                    {isUploadingPoster && (
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[11px] font-bold text-blue-800">
                          <span>Uploading to Cloudinary (Preset: Uttam Charitable)...</span>
                          <span>{uploadProgress}%</span>
                        </div>
                        <div className="w-full h-2.5 rounded-full bg-slate-200 overflow-hidden">
                          <div
                            className="h-full bg-amber-500 transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isUploadingPoster}
                      className="cursor-pointer w-full py-3.5 px-5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {isUploadingPoster ? (
                        <>
                          <i className="fa-solid fa-circle-notch fa-spin"></i>
                          <span>Uploading to Cloudinary...</span>
                        </>
                      ) : (
                        <>
                          <i className="fa-solid fa-cloud-arrow-up"></i>
                          <span>Upload Poster &amp; Publish Live</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>

                {/* Active Posters List */}
                <div className="lg:col-span-7 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-black text-base sm:text-lg text-slate-900">
                      Active Published Posters ({posters.length})
                    </h3>
                    <span className="text-[11px] text-slate-500">Synced with Firebase &lsquo;posters/&rsquo;</span>
                  </div>

                  {posters.length === 0 ? (
                    <div className="py-12 text-center border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-xs">
                      <i className="fa-solid fa-image text-2xl mb-2 block"></i>
                      No custom posters uploaded yet. Upload your first banner on the left!
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {posters.map((p) => (
                        <div
                          key={p.id}
                          className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between"
                        >
                          <div className="h-40 bg-slate-900 overflow-hidden">
                            <img
                              src={p.imageUrl}
                              alt={p.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-3.5 flex items-center justify-between gap-2">
                            <div className="min-w-0">
                              <h4 className="font-bold text-xs text-slate-900 truncate">{p.title}</h4>
                              <span className="text-[10px] text-slate-400">
                                {new Date(p.createdAt).toLocaleDateString('en-IN')}
                              </span>
                            </div>
                            <button
                              type="button"
                              onClick={() => deletePosterRecord(p.id)}
                              className="cursor-pointer shrink-0 px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 font-bold text-[11px] flex items-center gap-1"
                            >
                              <i className="fa-solid fa-trash-can"></i>
                              <span>Delete</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* =================================================================
                TAB 3: ADD & MANAGE VACANCIES
            ================================================================== */}
            {activeTab === 'jobs' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Add Job Form */}
                <div className="lg:col-span-5 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4 h-fit">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                      Real-Time Job Publisher
                    </span>
                    <h3 className="font-display font-black text-lg text-slate-900">
                      Add New Job Vacancy
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      New roles are immediately appended to the public Active Job Openings section with an &ldquo;Active Hiring&rdquo; badge.
                    </p>
                  </div>

                  {jobStatusMsg && (
                    <div
                      className={`p-3 rounded-xl text-xs font-bold border ${
                        jobStatusMsg.type === 'success'
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : 'bg-red-50 text-red-700 border-red-200'
                      }`}
                    >
                      {jobStatusMsg.text}
                    </div>
                  )}

                  <form onSubmit={handleAddJobSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                        Job Title *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. HR Executive / Tele-Counselor"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-amber-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                          Salary Package *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. ₹20,000 - ₹28,000 / mo"
                          value={jobSalary}
                          onChange={(e) => setJobSalary(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                          Job Type *
                        </label>
                        <select
                          value={jobType}
                          onChange={(e) => setJobType(e.target.value as 'WFH' | 'Office' | 'Hybrid')}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-amber-500"
                        >
                          <option value="WFH">WFH</option>
                          <option value="Office">Office</option>
                          <option value="Hybrid">Hybrid</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                        Location *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Zone 1, MP Nagar, Bhopal / Remote"
                        value={jobLocation}
                        onChange={(e) => setJobLocation(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                        Qualifications *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 12th Pass / Any Graduate / MBA / B.Tech"
                        value={jobQualifications}
                        onChange={(e) => setJobQualifications(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-amber-500"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSavingJob}
                      className="cursor-pointer w-full py-3.5 px-5 rounded-xl bg-slate-900 hover:bg-blue-900 text-white font-extrabold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      <i className="fa-solid fa-plus-circle text-amber-400"></i>
                      <span>{isSavingJob ? 'Publishing Vacancy...' : 'Publish Job Vacancy'}</span>
                    </button>
                  </form>
                </div>

                {/* Custom Added Jobs List */}
                <div className="lg:col-span-7 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-black text-base sm:text-lg text-slate-900">
                      Custom Added Job Vacancies ({dynamicJobs.length})
                    </h3>
                    <span className="text-[11px] text-slate-500">Synced with Firebase &lsquo;jobs/&rsquo;</span>
                  </div>

                  {dynamicJobs.length === 0 ? (
                    <div className="py-12 text-center border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-xs">
                      <i className="fa-solid fa-briefcase text-2xl mb-2 block"></i>
                      No custom vacancies added yet. Default featured openings are active on the page.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {dynamicJobs.map((job) => (
                        <div
                          key={job.id}
                          className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-extrabold text-[10px]">
                                Active Hiring &bull; {job.jobType}
                              </span>
                              <span className="text-xs font-bold text-amber-600">{job.salary}</span>
                            </div>
                            <h4 className="font-display font-bold text-sm text-slate-900">{job.title}</h4>
                            <p className="text-xs text-slate-600">
                              <i className="fa-solid fa-location-dot text-blue-600 mr-1"></i>
                              {job.location} &bull; <strong>Eligibility:</strong> {job.qualifications}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => deleteDynamicJobRecord(job.id)}
                            className="cursor-pointer shrink-0 px-3.5 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 font-bold text-xs flex items-center justify-center gap-1.5"
                          >
                            <i className="fa-solid fa-trash-can"></i>
                            <span>Remove</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
