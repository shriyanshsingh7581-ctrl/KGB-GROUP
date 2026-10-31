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
    <section id="jobs" className="scroll-mt-24 py-14 sm:py-20 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="text-xs font-bold text-amber-700 mb-2">
            Direct Corporate &amp; Work-From-Home Placement Drives · Zero Registration Fee
          </div>
          <h2
            className="font-display text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Active Job Openings &amp; Hiring Drives
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-base leading-relaxed">
            Direct corporate and Work From Home opportunities verified by Knowledge Gurukul Bhopal (KGB). Apply online for fast-track HR interview scheduling.
          </p>
        </div>

        {/* Featured Spotlight Banner: Work From Home Tele-Caller */}
        <div className="mb-10 bg-[#050A15] bg-luxury-grid rounded-3xl border border-amber-400/35 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Image Column */}
            <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[280px] bg-slate-900 overflow-hidden flex items-center justify-center">
              <img
                src={featuredTelecaller.posterImage || 'telecaller-hiring.jpg'}
                alt="Work From Home Tele-Caller Job Opening Poster - KGB Bhopal"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (featuredTelecaller.fallbackPosterImage && !target.src.includes(featuredTelecaller.fallbackPosterImage)) {
                    target.src = featuredTelecaller.fallbackPosterImage;
                  }
                }}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050A15] via-[#050A15]/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-semibold text-amber-300">
                  Featured Opening · Immediate Joining
                </div>
                <p className="font-display font-extrabold text-base sm:text-lg leading-tight mt-0.5">
                  Work From Home Tele-Caller (Male / Female)
                </p>
              </div>
            </div>

            {/* Right Details Column */}
            <div className="lg:col-span-7 p-5 sm:p-8 text-white flex flex-col justify-between space-y-5">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold mb-2">
                  <span className="text-amber-300">
                    Knowledge Gurukul Bhopal · Direct Hiring
                  </span>
                  <span className="text-emerald-400 font-mono tabular-nums">
                    110 Active Seats
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-3xl font-extrabold text-white">
                  Work From Home Tele-Caller — High Incentive + Fixed Salary
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Ideal for college students, freshers, graduates, and homemakers looking for flexible part-time or full-time tele-counseling roles from home or our Bhopal office.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                  <div className="bg-[#0A1326] border border-white/10 p-3.5 rounded-2xl">
                    <span className="text-[11px] font-semibold text-slate-400 block">Compensation</span>
                    <span className="font-display font-bold text-sm sm:text-base text-amber-300 mt-0.5 block">
                      Fixed Salary + High Incentive
                    </span>
                  </div>
                  <div className="bg-[#0A1326] border border-white/10 p-3.5 rounded-2xl">
                    <span className="text-[11px] font-semibold text-slate-400 block">Shift Timings</span>
                    <span className="font-display font-bold text-sm sm:text-base text-white mt-0.5 block">
                      Flexible Timings
                    </span>
                  </div>
                  <div className="bg-[#0A1326] border border-white/10 p-3.5 rounded-2xl">
                    <span className="text-[11px] font-semibold text-slate-400 block">Office / Center</span>
                    <span className="font-display font-bold text-sm sm:text-base text-emerald-400 mt-0.5 block">
                      MP Nagar, Bhopal
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="text-xs text-slate-300">
                  <span className="text-slate-400 block text-[11px]">Direct Tele-Caller HR Helpline:</span>
                  <a href="tel:+917987683263" className="font-bold text-amber-300 text-sm hover:underline tabular-nums">
                    +91 7987683263
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => onSelectRoleForApply('Work From Home Tele-Caller')}
                    className="cursor-pointer flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-gold-foil text-slate-950 font-display font-extrabold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <i className="fa-solid fa-file-pen"></i>
                    <span>Apply for Tele-Caller</span>
                  </button>
                  <a
                    href="https://wa.me/917987683263?text=Hi%20KGB%20Group%20Bhopal,%20I%20want%20to%20apply%20for%20the%20Work%20From%20Home%20Tele-Caller%20opening."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
                  >
                    <i className="fa-brands fa-whatsapp text-base"></i>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mb-8 bg-[#FAF8F4] p-2.5 sm:p-3 rounded-2xl border border-slate-200/90">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5 md:pb-0">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`cursor-pointer shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-[#050A15] text-amber-300 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              All Roles ({combinedJobs.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('wfh')}
              className={`cursor-pointer shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeFilter === 'wfh'
                  ? 'bg-[#050A15] text-amber-300 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Work From Home
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('office')}
              className={`cursor-pointer shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeFilter === 'office'
                  ? 'bg-[#050A15] text-amber-300 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Office &amp; Hybrid
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('field')}
              className={`cursor-pointer shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeFilter === 'field'
                  ? 'bg-[#050A15] text-amber-300 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              Coordinator &amp; Invigilator
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('tech')}
              className={`cursor-pointer shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeFilter === 'tech'
                  ? 'bg-[#050A15] text-amber-300 shadow-xs'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              IT &amp; Tech Support
            </button>
          </div>

          <div className="relative w-full md:w-64">
            <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
            <input
              type="search"
              placeholder="Search role or city (Bhopal...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-amber-500"
            />
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="card-luxury bg-[#FAF8F4] hover:bg-white rounded-3xl border border-slate-200/90 hover:border-amber-500/60 shadow-2xs hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-5 sm:p-6 pb-4">
                <div className="flex items-center justify-between gap-2 text-xs font-semibold text-slate-500 mb-2">
                  <span>{job.categoryLabel}</span>
                  <span className="text-amber-700 font-bold">{job.highlightBadge}</span>
                </div>

                <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-950 group-hover:text-amber-800 transition-colors leading-snug">
                  {job.title}
                </h3>

                {/* Prominent Salary Callout */}
                <div className="mt-3.5 p-3.5 rounded-2xl bg-white border border-slate-200/80">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 block">
                        Monthly Compensation
                      </span>
                      <span className="font-display font-extrabold text-base sm:text-lg text-slate-950 tabular-nums">
                        {job.salary}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 shrink-0">
                      Verified
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">{job.salaryNote}</p>
                </div>

                {/* Unboxed Meta Summary */}
                <div className="mt-3.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-600">
                  <span>{job.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{job.timing}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-semibold text-slate-900 tabular-nums">{job.openings} Seats</span>
                </div>

                {/* Key Eligibility / Requirements */}
                <div className="mt-3.5 pt-3.5 border-t border-slate-200/80">
                  <ul className="space-y-1.5">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                        <i className="fa-solid fa-check text-[10px] text-amber-600 mt-1 shrink-0"></i>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 bg-white border-t border-slate-200/80 flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => onSelectRoleForApply(job.title)}
                  className="cursor-pointer flex-1 py-3 px-4 rounded-xl bg-[#050A15] hover:bg-slate-800 text-white text-xs font-display font-bold transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Apply For Role</span>
                  <i className="fa-solid fa-arrow-right text-amber-400 text-[10px]"></i>
                </button>

                <a
                  href={`https://wa.me/917987683263?text=${encodeURIComponent(
                    `Hi KGB Group Bhopal, I am interested in applying for: ${job.title}. Please share interview details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shrink-0 whitespace-nowrap"
                  title="Apply via WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp text-sm"></i>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
