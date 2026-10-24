import React from 'react';

interface HeroProps {
  onApplyClick: () => void;
  onExploreJobsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onApplyClick, onExploreJobsClick }) => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-slate-900 via-slate-900 to-blue-950 text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition & Headings */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline & Accreditation Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold backdrop-blur-xs">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping"></span>
              <i className="fa-solid fa-handshake-angle text-amber-400"></i>
              <span>Your Trust. Our Commitment. | Great Careers Start Here!</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-none text-white">
              Launch High-Paying <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-amber-300 to-yellow-200">
                WFH & Top MNC Careers
              </span>{' '}
              in Central India
            </h1>

            {/* Sub-headline */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              KGB Group (Knowledge Gurukul / Placement India) connects job seekers, fresh graduates, and college students to verified corporate hiring drives with guaranteed guidance.
            </p>

            {/* Bullet Points of Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 bg-slate-800/60 border border-slate-700/60 p-3 rounded-xl backdrop-blur-xs">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <i className="fa-solid fa-house-laptop text-sm"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Verified Work From Home (WFH)</h4>
                  <p className="text-xs text-slate-400">
                    Genuine data entry & support jobs with <i className="fa-solid fa-indian-rupee-sign text-[10px] text-amber-400"></i>25,000/mo fixed pay.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-800/60 border border-slate-700/60 p-3 rounded-xl backdrop-blur-xs">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <i className="fa-solid fa-building text-sm"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Tier-1 MNC Direct Hiring</h4>
                  <p className="text-xs text-slate-400">Customer care, IT desktop support, logistics & HR roles.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-800/60 border border-slate-700/60 p-3 rounded-xl backdrop-blur-xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <i className="fa-solid fa-indian-rupee-sign text-sm"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">High Salary Packages</h4>
                  <p className="text-xs text-slate-400">
                    <i className="fa-solid fa-indian-rupee-sign text-[10px] text-emerald-400"></i>23,000 to <i className="fa-solid fa-indian-rupee-sign text-[10px] text-emerald-400"></i>35,000/mo starting salary + PF, medical, bonuses.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-800/60 border border-slate-700/60 p-3 rounded-xl backdrop-blur-xs">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                  <i className="fa-solid fa-chalkboard-user text-sm"></i>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">100% Free Training & Grooming</h4>
                  <p className="text-xs text-slate-400">Resume review, mock interviews, and confidence building.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onApplyClick}
                className="cursor-pointer inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-bold text-slate-900 bg-linear-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-500 text-sm sm:text-base shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Apply for Jobs Now (Free)</span>
                <i className="fa-solid fa-arrow-right text-sm"></i>
              </button>

              <button
                onClick={onExploreJobsClick}
                className="cursor-pointer inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-sm sm:text-base transition-all"
              >
                <i className="fa-solid fa-briefcase text-amber-400 text-sm"></i>
                <span>Explore Open Roles</span>
              </button>

              <a
                href="https://wa.me/917987683263?text=Hi%20KGB%20Group,%20I%20want%20to%20apply%20for%20the%20WFH%20or%20MNC%20job%20vacancies."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 text-sm transition-all"
              >
                <i className="fa-brands fa-whatsapp text-lg text-emerald-400"></i>
                <span>Quick WhatsApp</span>
              </a>
            </div>

            {/* Verified Candidate Mini Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex -space-x-2 overflow-hidden">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-slate-900 font-bold border-2 border-slate-900 text-xs">RK</span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold border-2 border-slate-900 text-xs">PS</span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white font-bold border-2 border-slate-900 text-xs">AT</span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white font-bold border-2 border-slate-900 text-xs">+1L</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                <div className="flex text-amber-400 text-xs">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <span>4.9/5 Rating from 1,00,000+ Trained & Placed Candidates</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Highlight Card with Knowledge Gurukul Logo */}
          <div className="lg:col-span-5">
            <div className="relative bg-linear-to-b from-slate-800/90 to-slate-900/95 border border-amber-400/40 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md">
              {/* Top Accent Ribbon */}
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Active Hiring Drive 2026-2027</span>
                </div>
                <span className="text-[11px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-md font-semibold">
                  Zero Registration Fee
                </span>
              </div>

              {/* Logo Emblem Centerpiece */}
              <div className="flex items-center gap-4 bg-slate-950/50 p-3.5 rounded-xl border border-slate-700/70 mb-5">
                <img
                  src="/assets/aistudio/IMG-20261024-WA0017_3feb77f8.jpg"
                  alt="Knowledge Gurukul Official Emblem"
                  className="w-16 h-16 object-contain rounded-lg bg-white p-1 shadow-md"
                />
                <div>
                  <h3 className="font-display font-bold text-base text-white">Knowledge Gurukul</h3>
                  <p className="text-xs text-amber-400 font-semibold">Central India Training & Placement Wing</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Govt. MSME & ISO 9001:2015 Approved Process</p>
                </div>
              </div>

              {/* Immediate Vacancies Counter Box */}
              <div className="space-y-3 mb-5">
                <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <i className="fa-solid fa-laptop text-amber-400 text-base"></i>
                    <div>
                      <div className="text-xs font-semibold text-white">WFH Data Entry Operator</div>
                      <div className="text-[11px] text-slate-400">85 openings &bull; Laptop compulsory</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-amber-400">
                      <i className="fa-solid fa-indian-rupee-sign text-[10px] mr-0.5"></i>25,000/mo
                    </span>
                  </div>
                </div>

                <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <i className="fa-solid fa-headset text-blue-400 text-base"></i>
                    <div>
                      <div className="text-xs font-semibold text-white">Customer Support Executive</div>
                      <div className="text-[11px] text-slate-400">120 openings &bull; Voice & Blended</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-blue-300">
                      <i className="fa-solid fa-indian-rupee-sign text-[10px] mr-0.5"></i>23k - 30k/mo
                    </span>
                  </div>
                </div>

                <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <i className="fa-solid fa-clipboard-check text-purple-400 text-base"></i>
                    <div>
                      <div className="text-xs font-semibold text-white">Exam Invigilators / Warehouse</div>
                      <div className="text-[11px] text-slate-400">150+ openings &bull; Central India</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-emerald-400">Immediate</span>
                  </div>
                </div>
              </div>

              {/* Fast Apply Direct Action Box */}
              <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent p-3 rounded-xl border border-amber-500/30 text-center">
                <p className="text-xs text-slate-300 mb-2 font-medium">
                  Have questions before applying? Call or WhatsApp our counselors:
                </p>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="tel:+917987683263"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-400 text-slate-900 font-bold text-xs hover:bg-amber-300 transition-colors"
                  >
                    <i className="fa-solid fa-phone"></i>
                    <span>Call +91 7987683263</span>
                  </a>
                  <a
                    href="https://wa.me/917987683263?text=Hi,%20I%20want%20to%20apply%20for%20KGB%20Group%20placement."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition-colors"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
