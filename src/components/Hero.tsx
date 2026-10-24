import React from 'react';

interface HeroProps {
  onApplyClick: () => void;
  onExploreJobsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onApplyClick }) => {
  const scrollToCertifications = () => {
    const certElement = document.getElementById('certifications');
    if (certElement) {
      certElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-linear-to-b from-slate-900 via-slate-900 to-blue-950 text-white pt-6 pb-12 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/90 border border-amber-400/35 text-amber-300 text-[11px] sm:text-sm font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping shrink-0"></span>
              <i className="fa-solid fa-shield-halved text-amber-400 shrink-0"></i>
              <span className="truncate">ISO 9001:2015 (QMP202604878) &bull; UDYAM-MP-10-0162140</span>
            </div>

            {/* Required Hero Headline */}
            <h1 className="font-display text-[26px] leading-[1.18] sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Empowering Careers Through{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-amber-300 to-yellow-200">
                Central India&apos;s Leading Training &amp; Placement Network
              </span>
            </h1>

            {/* Sub-headline highlighting official tie-ups with engineering & management colleges and Govt. initiatives */}
            <p className="text-slate-300 text-xs sm:text-base lg:text-lg max-w-2xl leading-relaxed">
              Official Training &amp; Placement Partner for AICTE-approved Engineering &amp; Management Colleges (MBA/BBA affiliated with Barkatullah University, Bhopal) and Government Startup &amp; Skill Initiatives across Madhya Pradesh.
            </p>

            {/* 2x2 Compact Benefit Grid on Mobile & Desktop */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 pt-1">
              <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 bg-slate-800/70 border border-slate-700/70 p-3 rounded-2xl backdrop-blur-xs">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-house-laptop text-sm"></i>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">WFH Tele-Caller &amp; DEO</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-snug">
                    Fixed salary + high incentives, flexible timings.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 bg-slate-800/70 border border-slate-700/70 p-3 rounded-2xl backdrop-blur-xs">
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-building-columns text-sm"></i>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">CEDMAP &amp; Campus Drives</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-snug">
                    Mega recruitment drives across Bhopal &amp; MP.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 bg-slate-800/70 border border-slate-700/70 p-3 rounded-2xl backdrop-blur-xs">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-award text-sm"></i>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">Govt. &amp; ISO Verified</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-snug">
                    Registered at Zone 1, MP Nagar, Bhopal.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 bg-slate-800/70 border border-slate-700/70 p-3 rounded-2xl backdrop-blur-xs">
                <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-indian-rupee-sign text-sm"></i>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">High Packages</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-snug">
                    <i className="fa-solid fa-indian-rupee-sign text-[9px] text-amber-400"></i>18k to <i className="fa-solid fa-indian-rupee-sign text-[9px] text-amber-400"></i>35k/mo + zero registration fee.
                  </p>
                </div>
              </div>
            </div>

            {/* Required CTAs: "Apply for Jobs" and "Verify Credentials" */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-1">
              <button
                onClick={onApplyClick}
                className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl font-extrabold text-slate-950 bg-linear-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-500 text-sm sm:text-base shadow-lg shadow-amber-500/25 active:scale-[0.99] transition-all"
              >
                <span>Apply for Jobs</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </button>

              <div className="grid grid-cols-2 sm:flex items-center gap-2.5">
                <button
                  onClick={scrollToCertifications}
                  className="cursor-pointer inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-3.5 rounded-2xl font-bold text-slate-100 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-xs sm:text-sm active:scale-[0.99] transition-all"
                >
                  <i className="fa-solid fa-certificate text-amber-400 text-xs"></i>
                  <span>Verify Credentials</span>
                </button>

                <a
                  href="https://wa.me/917987683263?text=Hi%20KGB%20Group%20Bhopal,%20I%20want%20to%20apply%20for%20the%20active%20job%20vacancies."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-3.5 rounded-2xl font-bold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900/70 border border-emerald-500/40 text-xs sm:text-sm active:scale-[0.99] transition-all"
                >
                  <i className="fa-brands fa-whatsapp text-base text-emerald-400"></i>
                  <span>WhatsApp HR</span>
                </a>
              </div>
            </div>

            {/* Verified Candidate Rating Strip */}
            <div className="pt-1 flex items-center gap-3 text-xs text-slate-300">
              <div className="flex -space-x-2 overflow-hidden shrink-0">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-500 text-slate-950 font-extrabold border-2 border-slate-900 text-[10px]">RK</span>
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-500 text-white font-extrabold border-2 border-slate-900 text-[10px]">PS</span>
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500 text-white font-extrabold border-2 border-slate-900 text-[10px]">+1L</span>
              </div>
              <div className="text-[11px] sm:text-xs text-slate-300 font-medium leading-tight">
                <span className="text-amber-400 font-bold">
                  <i className="fa-solid fa-star text-[10px] mr-1"></i>4.9/5
                </span>{' '}
                from <strong className="text-white">1,00,000+</strong> Trained &amp; Placed Candidates in Central India
              </div>
            </div>

          </div>

          {/* Right Column: Live Hiring Drive & Credentials Spotlight Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-linear-to-b from-slate-800/95 to-slate-900/95 border border-amber-400/40 rounded-3xl p-4 sm:p-6 shadow-2xl backdrop-blur-md">
              {/* Top Accent Ribbon */}
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Bhopal HQ &bull; Active Hiring 2026-27</span>
                </div>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-md font-bold">
                  Zero Fee
                </span>
              </div>

              {/* Logo Emblem Centerpiece */}
              <div className="flex items-center gap-3.5 bg-slate-950/60 p-3 rounded-2xl border border-slate-700/70 mb-4">
                <img
                  src="kgb-logo.jpg"
                  alt="Knowledge Gurukul Bhopal Official Emblem"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('/assets/aistudio/IMG-20261024-WA0017_3feb77f8.jpg')) {
                      target.src = '/assets/aistudio/IMG-20261024-WA0017_3feb77f8.jpg';
                    }
                  }}
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-xl bg-white p-1 shadow-md shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-sm sm:text-base text-white truncate">Knowledge Gurukul Bhopal (KGB)</h3>
                  <p className="text-[11px] sm:text-xs text-amber-400 font-semibold truncate">Zone 1, MP Nagar, Bhopal - 462023</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">ISO: QMP202604878 &bull; UDYAM-MP-10-0162140</p>
                </div>
              </div>

              {/* Immediate Vacancies Counter Box */}
              <div className="space-y-2.5 mb-4">
                <div
                  onClick={onApplyClick}
                  className="cursor-pointer bg-slate-800/70 hover:bg-slate-800 p-3 rounded-xl border border-amber-400/40 flex items-center justify-between gap-2 transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-phone-volume text-sm"></i>
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white truncate">Work From Home Tele-Caller</div>
                      <div className="text-[10px] text-amber-300">Flexible Timings &bull; Zone 1 MP Nagar / Remote</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-extrabold text-amber-400 shrink-0">
                    Fixed + Incentive
                  </span>
                </div>

                <div
                  onClick={onApplyClick}
                  className="cursor-pointer bg-slate-800/70 hover:bg-slate-800 p-3 rounded-xl border border-slate-700/60 flex items-center justify-between gap-2 transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-laptop text-sm"></i>
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white truncate">Data Entry Operator (WFH)</div>
                      <div className="text-[10px] text-slate-400">85 seats &bull; Laptop/Desktop required</div>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-amber-400 shrink-0">
                    <i className="fa-solid fa-indian-rupee-sign text-[10px] mr-0.5"></i>25,000/mo
                  </span>
                </div>

                <div
                  onClick={onApplyClick}
                  className="cursor-pointer bg-slate-800/70 hover:bg-slate-800 p-3 rounded-xl border border-slate-700/60 flex items-center justify-between gap-2 transition-colors"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-headset text-sm"></i>
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white truncate">Customer Support Executive</div>
                      <div className="text-[10px] text-slate-400">120 seats &bull; Voice &amp; Blended</div>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-300 shrink-0">
                    <i className="fa-solid fa-indian-rupee-sign text-[10px] mr-0.5"></i>23k-30k/mo
                  </span>
                </div>
              </div>

              {/* Direct Counselor Contact Strip */}
              <div className="bg-amber-500/10 p-3 rounded-2xl border border-amber-500/25 flex items-center justify-between gap-2">
                <div className="text-[11px] text-slate-200 font-medium leading-tight">
                  <strong className="text-amber-300 block">Bhopal Helpline &amp; WhatsApp:</strong>
                  <span>+91 7987683263</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href="tel:+917987683263"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-400 text-slate-950 font-extrabold text-xs hover:bg-amber-300 transition-colors"
                  >
                    <i className="fa-solid fa-phone"></i>
                    <span>Call</span>
                  </a>
                  <a
                    href="https://wa.me/917987683263?text=Hi%20KGB%20Bhopal,%20I%20want%20to%20apply%20for%20placement."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 text-white font-extrabold text-xs hover:bg-emerald-500 transition-colors"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                    <span>Chat</span>
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
