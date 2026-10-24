import React, { useState } from 'react';
import { JOB_OPENINGS } from '../data/jobListings';

interface FeaturedJobsProps {
  onSelectRoleForApply: (roleTitle: string) => void;
}

export const FeaturedJobs: React.FC<FeaturedJobsProps> = ({ onSelectRoleForApply }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'wfh' | 'office' | 'field' | 'tech'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredJobs = JOB_OPENINGS.filter((job) => {
    const matchesFilter = activeFilter === 'all' || job.category === activeFilter;
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="jobs" className="scroll-mt-24 py-12 sm:py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-[11px] sm:text-xs uppercase tracking-wider border border-blue-200 mb-2.5">
            <i className="fa-solid fa-briefcase text-xs"></i>
            <span>Current Vacancies &bull; Batch 2026-2027</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Featured Job Openings
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-base leading-relaxed">
            Verified direct corporate opportunities with guaranteed salary structures and fast-track joining. Tap any role to apply in 60 seconds.
          </p>
        </div>

        {/* Mobile-Friendly Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mb-6 sm:mb-8 bg-white p-2.5 sm:p-3 rounded-2xl shadow-xs border border-slate-200">
          
          {/* Horizontal Swipeable Category Tabs on Mobile */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5 md:pb-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`cursor-pointer shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100/80 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              All Roles ({JOB_OPENINGS.length})
            </button>
            <button
              onClick={() => setActiveFilter('wfh')}
              className={`cursor-pointer shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeFilter === 'wfh'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'bg-slate-100/80 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              <i className="fa-solid fa-house-laptop text-xs"></i>
              <span>Work From Home</span>
            </button>
            <button
              onClick={() => setActiveFilter('office')}
              className={`cursor-pointer shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeFilter === 'office'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100/80 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              <i className="fa-solid fa-headset text-xs"></i>
              <span>Customer Support</span>
            </button>
            <button
              onClick={() => setActiveFilter('field')}
              className={`cursor-pointer shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeFilter === 'field'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100/80 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              <i className="fa-solid fa-clipboard-user text-xs"></i>
              <span>Invigilators & Warehouse</span>
            </button>
            <button
              onClick={() => setActiveFilter('tech')}
              className={`cursor-pointer shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeFilter === 'tech'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100/80 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              <i className="fa-solid fa-code text-xs"></i>
              <span>IT & Tech Support</span>
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
            <input
              type="search"
              placeholder="Search role or city (Indore, Bhopal...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
            />
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between overflow-hidden group hover:border-amber-400"
            >
              {/* Card Top Content */}
              <div className="p-4 sm:p-6 pb-3 sm:pb-4">
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                    {job.categoryLabel}
                  </span>
                  {job.isWFH ? (
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-300">
                      <i className="fa-solid fa-house-laptop text-amber-600"></i>
                      <span>{job.highlightBadge}</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200">
                      <i className="fa-solid fa-bolt text-blue-600"></i>
                      <span>{job.highlightBadge}</span>
                    </span>
                  )}
                </div>

                <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                  {job.title}
                </h3>

                {/* Prominent Salary Callout */}
                <div className="mt-3 p-3 rounded-xl bg-linear-to-r from-amber-500/12 via-amber-500/5 to-transparent border border-amber-500/25">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">Monthly Salary</span>
                      <span className="font-display font-black text-base sm:text-xl text-slate-900 flex items-center gap-1">
                        <i className="fa-solid fa-indian-rupee-sign text-sm sm:text-base text-amber-500"></i>
                        <span>{job.salary.replace(/₹\s*/g, '')}</span>
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-200 shrink-0">
                      <i className="fa-solid fa-check-double mr-1"></i>Verified
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-medium mt-0.5">{job.salaryNote}</p>
                </div>

                {/* 2x2 Meta Grid */}
                <div className="mt-3.5 grid grid-cols-2 gap-2 text-[11px] sm:text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <i className="fa-solid fa-location-dot text-blue-600 w-3.5 shrink-0"></i>
                    <span className="truncate font-medium">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 min-w-0">
                    <i className="fa-solid fa-clock text-amber-600 w-3.5 shrink-0"></i>
                    <span className="truncate font-medium">{job.timing}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <i className="fa-solid fa-users text-indigo-600 w-3.5 shrink-0"></i>
                    <span className="font-semibold text-slate-800">{job.openings} Vacancies</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <i className="fa-solid fa-circle-check text-emerald-600 w-3.5 shrink-0"></i>
                    <span className="font-semibold text-emerald-700">Fast Joining</span>
                  </div>
                </div>

                {/* Key Eligibility / Requirements */}
                <div className="mt-3.5 pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                    Eligibility & Key Requirements:
                  </span>
                  <ul className="space-y-1.5">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                        <i className="fa-solid fa-check text-[10px] text-amber-500 mt-1 shrink-0"></i>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mobile-Friendly Large Action Buttons */}
              <div className="p-3.5 sm:p-4 bg-slate-50/90 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => onSelectRoleForApply(job.title)}
                  className="cursor-pointer flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-blue-900 active:scale-[0.99] text-white text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <i className="fa-solid fa-file-pen text-amber-400"></i>
                  <span>Apply For This Role</span>
                </button>

                <a
                  href={`https://wa.me/917987683263?text=${encodeURIComponent(
                    `Hi KGB Group, I am interested in applying for: ${job.title}. Please share details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs shrink-0"
                  title="Apply via WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp text-base"></i>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-10 bg-white rounded-2xl border border-slate-200">
            <i className="fa-solid fa-magnifying-glass text-slate-300 text-3xl mb-2"></i>
            <h3 className="font-display font-bold text-base text-slate-800">No matching jobs found</h3>
            <p className="text-xs text-slate-500 mt-1">Try clearing your search or select "All Roles".</p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchTerm('');
              }}
              className="mt-3 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold"
            >
              Show All Jobs
            </button>
          </div>
        )}

        {/* Counselor Banner */}
        <div className="mt-8 sm:mt-12 bg-linear-to-r from-blue-950 via-slate-900 to-slate-900 rounded-2xl p-5 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-xl border border-blue-800/40">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
              Free Placement Counseling
            </span>
            <h3 className="font-display font-bold text-lg sm:text-2xl">
              Confused which role matches your qualification?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Connect with KGB Group’s placement officers for a free profile check and instant interview slot booking.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:flex items-center gap-2.5 w-full md:w-auto shrink-0">
            <a
              href="tel:+917987683263"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition-all"
            >
              <i className="fa-solid fa-phone"></i>
              <span>Call Helpline</span>
            </a>
            <a
              href="https://wa.me/917987683263?text=Hi%20KGB%20Group,%20I%20need%20career%20counseling%20for%20suitable%20roles."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm transition-all"
            >
              <i className="fa-brands fa-whatsapp text-base"></i>
              <span>WhatsApp HR</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
