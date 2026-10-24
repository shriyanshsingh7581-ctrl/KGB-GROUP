import React, { useState, useEffect } from 'react';
import { JOB_OPENINGS, JobOpening } from '../data/jobListings';
import { DynamicJobRecord, subscribeToDynamicJobs } from '../firebase';

interface FeaturedJobsProps {
  onSelectRoleForApply: (roleTitle: string) => void;
}

export const FeaturedJobs: React.FC<FeaturedJobsProps> = ({ onSelectRoleForApply }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'wfh' | 'office' | 'field' | 'tech'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dynamicJobs, setDynamicJobs] = useState<DynamicJobRecord[]>([]);

  useEffect(() => {
    const unsub = subscribeToDynamicJobs((jobs) => {
      setDynamicJobs(jobs);
    });
    return () => unsub();
  }, []);

  // Convert dynamic jobs into unified JobOpening format with "Active Hiring" badge
  const mappedDynamicJobs: JobOpening[] = dynamicJobs.map((dj) => ({
    id: dj.id,
    title: dj.title,
    category: dj.jobType === 'WFH' ? 'wfh' : 'office',
    categoryLabel: `${dj.jobType} Opening`,
    salary: dj.salary,
    salaryNote: 'Direct KGB Group Verified Opening',
    location: dj.location,
    timing: dj.jobType === 'WFH' ? 'Flexible / Remote' : 'Standard Shift',
    openings: 25,
    highlightBadge: 'Active Hiring',
    isUrgent: true,
    isWFH: dj.jobType === 'WFH',
    requirements: [
      `Qualifications: ${dj.qualifications}`,
      `Job Type: ${dj.jobType} (${dj.location})`,
      'Direct HR interview & fast-track joining via Knowledge Gurukul Bhopal',
    ],
    description: `${dj.title} role at ${dj.location}. Required qualification: ${dj.qualifications}.`,
  }));

  const combinedJobs = [...mappedDynamicJobs, ...JOB_OPENINGS];

  const filteredJobs = combinedJobs.filter((job) => {
    const matchesFilter = activeFilter === 'all' || job.category === activeFilter;
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featuredTelecaller = JOB_OPENINGS[0];

  return (
    <section id="jobs" className="scroll-mt-24 py-12 sm:py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-[11px] sm:text-xs uppercase tracking-wider border border-blue-200 mb-2.5">
            <i className="fa-solid fa-briefcase text-xs"></i>
            <span>Active Job Openings &bull; Hybrid Static + Live Sync</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Active Job Openings &amp; Hiring Drives
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-base leading-relaxed">
            Direct corporate &amp; Work From Home opportunities verified by Knowledge Gurukul Bhopal (KGB). Zero registration charges.
          </p>
        </div>

        {/* Featured Spotlight Banner: Work From Home Tele-Caller with telecaller-hiring.jpg */}
        <div className="mb-8 sm:mb-10 bg-linear-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl border-2 border-amber-400/70 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Image Column: telecaller-hiring.jpg */}
            <div className="lg:col-span-5 relative min-h-[220px] sm:min-h-[260px] bg-slate-800 overflow-hidden flex items-center justify-center">
              <img
                src={featuredTelecaller.posterImage || 'telecaller-hiring.jpg'}
                alt="Work From Home Tele-Caller Job Opening Poster - KGB Bhopal"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (featuredTelecaller.fallbackPosterImage && !target.src.includes(featuredTelecaller.fallbackPosterImage)) {
                    target.src = featuredTelecaller.fallbackPosterImage;
                  }
                }}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
              <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] sm:text-xs uppercase tracking-wider shadow-md">
                  <i className="fa-solid fa-fire mr-1"></i>Featured Opening
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/90 text-white font-bold text-[10px] sm:text-xs">
                  Immediate Joining
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[11px] font-bold text-amber-300 block">
                  <i className="fa-solid fa-location-dot mr-1"></i>Zone 1, MP Nagar, Bhopal / Remote WFH
                </span>
                <p className="font-display font-black text-base sm:text-lg leading-tight">
                  Work From Home Tele-Caller (Male / Female)
                </p>
              </div>
            </div>

            {/* Right Details Column */}
            <div className="lg:col-span-7 p-5 sm:p-7 lg:p-8 text-white flex flex-col justify-between space-y-4">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    <i className="fa-solid fa-headset mr-1.5"></i>Knowledge Gurukul Bhopal &bull; Direct Hiring
                  </span>
                  <span className="text-xs bg-white/10 border border-white/15 px-3 py-1 rounded-full font-bold text-emerald-300">
                    110 Active Seats
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-3xl font-black text-white">
                  Work From Home Tele-Caller — High Incentive + Fixed Salary
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                  Ideal for college students, freshers, graduates, and homemakers looking for flexible part-time or full-time tele-counseling roles from home or our Zone 1, MP Nagar Bhopal office.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-4">
                  <div className="bg-slate-800/90 border border-slate-700 p-3 rounded-2xl">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Compensation</span>
                    <span className="font-display font-extrabold text-sm sm:text-base text-amber-400">
                      Fixed Salary + High Incentive
                    </span>
                  </div>
                  <div className="bg-slate-800/90 border border-slate-700 p-3 rounded-2xl">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Shift Timings</span>
                    <span className="font-display font-extrabold text-sm sm:text-base text-white">
                      Flexible Timings
                    </span>
                  </div>
                  <div className="bg-slate-800/90 border border-slate-700 p-3 rounded-2xl">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Office / Center</span>
                    <span className="font-display font-extrabold text-sm sm:text-base text-emerald-300">
                      Zone 1, MP Nagar Bhopal
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="text-xs text-slate-300">
                  <span className="text-slate-400 block text-[11px]">Direct Tele-Caller HR Helpline:</span>
                  <a href="tel:+917987683263" className="font-extrabold text-amber-400 text-sm hover:underline">
                    <i className="fa-solid fa-phone mr-1.5"></i>+91 7987683263
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => onSelectRoleForApply('Work From Home Tele-Caller')}
                    className="cursor-pointer flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <i className="fa-solid fa-file-pen"></i>
                    <span>Apply for Tele-Caller</span>
                  </button>
                  <a
                    href="https://wa.me/917987683263?text=Hi%20KGB%20Group%20Bhopal,%20I%20want%20to%20apply%20for%20the%20Work%20From%20Home%20Tele-Caller%20opening."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5"
                  >
                    <i className="fa-brands fa-whatsapp text-base"></i>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-Friendly Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mb-6 sm:mb-8 bg-white p-2.5 sm:p-3 rounded-2xl shadow-xs border border-slate-200">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5 md:pb-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`cursor-pointer shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100/80 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
              }`}
            >
              All Roles ({combinedJobs.length})
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
              <span>Office &amp; Hybrid</span>
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
              <span>Coordinator &amp; Invigilator</span>
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
              <span>IT &amp; Tech Support</span>
            </button>
          </div>

          <div className="relative w-full md:w-64">
            <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
            <input
              type="search"
              placeholder="Search role or city (Bhopal, Indore...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
            />
          </div>
        </div>

        {/* Job Cards Grid (Static + Dynamically Added Jobs) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredJobs.map((job) => {
            const isDynamic = job.id.startsWith('job_');
            return (
              <div
                key={job.id}
                className={`bg-white rounded-2xl border shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between overflow-hidden group ${
                  isDynamic
                    ? 'border-emerald-400/90 ring-1 ring-emerald-400/30'
                    : 'border-slate-200/90 hover:border-amber-400'
                }`}
              >
                <div className="p-4 sm:p-6 pb-3 sm:pb-4">
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                      {job.categoryLabel}
                    </span>
                    {isDynamic ? (
                      <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-extrabold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                        <span>Active Hiring</span>
                      </span>
                    ) : job.isWFH ? (
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
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">Monthly Compensation</span>
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
                      Eligibility &amp; Key Requirements:
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

                {/* Action Buttons */}
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
                      `Hi KGB Group Bhopal, I am interested in applying for: ${job.title}. Please share interview details.`
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
            );
          })}
        </div>

      </div>
    </section>
  );
};
