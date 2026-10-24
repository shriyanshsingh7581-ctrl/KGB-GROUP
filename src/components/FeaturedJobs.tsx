import React, { useState } from 'react';
import { JOB_OPENINGS, JobOpening } from '../data/jobListings';

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
    <section id="jobs" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider border border-blue-200 mb-3">
            <i className="fa-solid fa-briefcase text-xs"></i>
            <span>Current Vacancies &bull; Batch 2026-2027</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Featured Job Openings
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Verified direct corporate opportunities with guaranteed salary structures and prompt onboarding. Choose your preferred role and apply immediately.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-3 rounded-2xl shadow-xs border border-slate-200">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`cursor-pointer px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              All Openings ({JOB_OPENINGS.length})
            </button>
            <button
              onClick={() => setActiveFilter('wfh')}
              className={`cursor-pointer px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeFilter === 'wfh'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <i className="fa-solid fa-house-laptop text-xs"></i>
              <span>Work From Home</span>
            </button>
            <button
              onClick={() => setActiveFilter('office')}
              className={`cursor-pointer px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeFilter === 'office'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <i className="fa-solid fa-headset text-xs"></i>
              <span>Customer Care / Office</span>
            </button>
            <button
              onClick={() => setActiveFilter('field')}
              className={`cursor-pointer px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeFilter === 'field'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <i className="fa-solid fa-clipboard-user text-xs"></i>
              <span>Invigilators & Warehouse</span>
            </button>
            <button
              onClick={() => setActiveFilter('tech')}
              className={`cursor-pointer px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                activeFilter === 'tech'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <i className="fa-solid fa-code text-xs"></i>
              <span>IT & Tech Support</span>
            </button>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
            <input
              type="text"
              placeholder="Search by role or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
            />
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between overflow-hidden group hover:border-amber-400"
            >
              {/* Card Top Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                    {job.categoryLabel}
                  </span>
                  {job.isWFH ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-300">
                      <i className="fa-solid fa-house-laptop text-amber-600"></i>
                      <span>{job.highlightBadge}</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                      <i className="fa-solid fa-bolt text-blue-600"></i>
                      <span>{job.highlightBadge}</span>
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                  {job.title}
                </h3>

                {/* Salary Banner */}
                <div className="mt-3 p-3 rounded-xl bg-linear-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-slate-500 block">Monthly Compensation</span>
                      <span className="font-display font-extrabold text-xl text-slate-900 flex items-center gap-1">
                        <i className="fa-solid fa-indian-rupee-sign text-base text-amber-500"></i>
                        <span>{job.salary.replace(/^₹\s*/, '')}</span>
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Verified Pay
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-0.5">{job.salaryNote}</p>
                </div>

                {/* Meta details */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-location-dot text-slate-400 w-3.5"></i>
                    <span className="truncate">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-clock text-slate-400 w-3.5"></i>
                    <span className="truncate">{job.timing}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-users text-slate-400 w-3.5"></i>
                    <span>{job.openings} Open Vacancies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-circle-check text-emerald-500 w-3.5"></i>
                    <span>Immediate Joining</span>
                  </div>
                </div>

                {/* Key Eligibility / Requirements */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Highlights & Requirements:
                  </span>
                  <ul className="space-y-1.5">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-slate-700 leading-normal">
                        <i className="fa-solid fa-check text-[10px] text-amber-500 mt-1 shrink-0"></i>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => onSelectRoleForApply(job.title)}
                  className="cursor-pointer flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-blue-900 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <i className="fa-solid fa-file-pen text-amber-400"></i>
                  <span>Apply Now</span>
                </button>

                <a
                  href={`https://wa.me/917987683263?text=${encodeURIComponent(
                    `Hi KGB Group, I am interested in applying for: ${job.title}. Please share details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 text-xs font-bold transition-colors flex items-center gap-1"
                  title="Apply via WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp text-base text-emerald-600"></i>
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* If no jobs match search */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <i className="fa-solid fa-magnifying-glass text-slate-300 text-4xl mb-3"></i>
            <h3 className="font-display font-bold text-base text-slate-800">No matching jobs found</h3>
            <p className="text-xs text-slate-500 mt-1">Try clearing your search term or select "All Openings".</p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchTerm('');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-amber-500 text-slate-900 text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Banner inside Jobs */}
        <div className="mt-12 bg-linear-to-r from-blue-900 to-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Need personalized career guidance?
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl">
              Not sure which role fits your profile best?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Talk directly with KGB Group’s dedicated placement officers. We evaluate your resume, suggest the best matching MNC or WFH job, and schedule interview prep for free.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+917987683263"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <i className="fa-solid fa-phone"></i>
              <span>Call Helpline: +91 7987683263</span>
            </a>
            <a
              href="https://wa.me/917987683263?text=Hi%20KGB%20Group,%20I%20need%20career%20counseling%20for%20suitable%20roles."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all"
            >
              <i className="fa-brands fa-whatsapp text-base"></i>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
