import React, { useState } from 'react';

interface NavbarProps {
  onBookConsultationClick: (prefilledService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookConsultationClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleServiceSelect = (serviceName: string) => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
    onBookConsultationClick(serviceName);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/90 text-white shadow-lg shadow-slate-950/20">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-15 sm:h-19 flex items-center justify-between gap-3 sm:gap-6">
        {/* Zone 1: Brand Identity */}
        <a
          href="#home"
          className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0 min-w-0"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-amber-400/40 bg-white p-0.5 flex items-center justify-center shrink-0 shadow-sm">
            <img
              src="/assets/aistudio/Picsart_26-10-24_18-22-58-239_1405d4be.png"
              alt="KGB Group (Knowledge Gurukul)"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('/assets/aistudio/IMG-20261024-WA0017_3feb77f8.jpg')) {
                  target.src = '/assets/aistudio/IMG-20261024-WA0017_3feb77f8.jpg';
                }
              }}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-display font-extrabold text-sm sm:text-lg tracking-tight text-white truncate leading-tight">
              KGB Group <span className="text-amber-400 font-bold">(Knowledge Gurukul)</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium text-slate-300 truncate">
              Empowering Students, Enabling Careers
            </span>
          </div>
        </a>

        {/* Zone 2: Primary Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-200">
          <a
            href="#home"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            About Us
          </a>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <a
              href="#services"
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 py-2"
            >
              <span>Services</span>
              <i className="fa-solid fa-chevron-down text-[10px] text-amber-400"></i>
            </a>

            {servicesDropdownOpen && (
              <div className="absolute left-0 top-full w-72 bg-slate-900 rounded-2xl border border-slate-700/90 shadow-2xl py-2 z-50">
                <button
                  type="button"
                  onClick={() => handleServiceSelect('Admission Guidance (Engineering, MBA, Medical, Law)')}
                  className="w-full text-left px-4 py-3 text-xs font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>Admissions (Engg, MBA, Medical, Law)</span>
                  <i className="fa-solid fa-arrow-right text-[10px] text-amber-400"></i>
                </button>
                <button
                  type="button"
                  onClick={() => handleServiceSelect('Career Counseling & Psychometric Assessment')}
                  className="w-full text-left px-4 py-3 text-xs font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>Career Guidance &amp; Counseling</span>
                  <i className="fa-solid fa-arrow-right text-[10px] text-amber-400"></i>
                </button>
                <button
                  type="button"
                  onClick={() => handleServiceSelect('Direct College Placement Tie-ups & Training')}
                  className="w-full text-left px-4 py-3 text-xs font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>Placement Support &amp; Training</span>
                  <i className="fa-solid fa-arrow-right text-[10px] text-amber-400"></i>
                </button>
                <button
                  type="button"
                  onClick={() => handleServiceSelect('Scholarship & Financial Guidance')}
                  className="w-full text-left px-4 py-3 text-xs font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>Scholarship &amp; Loan Assistance</span>
                  <i className="fa-solid fa-arrow-right text-[10px] text-amber-400"></i>
                </button>
              </div>
            )}
          </div>

          <a
            href="#campus-drives"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Moments &amp; Gallery
          </a>
          <a
            href="#success-stories"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Success Stories
          </a>
          <a
            href="#contact"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Contact Us
          </a>
        </nav>

        {/* Zone 3: Direct Action & Mobile Thumb Controls (>= 44px hitboxes) */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Quick Call Icon on Mobile */}
          <a
            href="tel:+917987683263"
            aria-label="Call Helpline +91 7987683263"
            className="sm:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl bg-amber-400/15 text-amber-400 border border-amber-400/30 active:scale-95 transition-transform"
          >
            <i className="fa-solid fa-phone text-sm"></i>
          </a>

          <button
            type="button"
            onClick={() => onBookConsultationClick()}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md shadow-amber-400/10 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <i className="fa-regular fa-calendar-check"></i>
            <span>Book Free Consultation</span>
          </button>

          {/* Mobile Menu Toggle (44x44px ergonomic target) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl bg-slate-900 text-white border border-slate-700/80 active:scale-95 transition-transform cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark text-amber-400' : 'fa-bars'} text-base`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 backdrop-blur-2xl border-t border-slate-800 px-4 pt-3.5 pb-6 space-y-4 shadow-2xl">
          {/* Quick Navigation Grid */}
          <div className="grid grid-cols-2 gap-2.5 text-xs font-semibold text-slate-100">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/40 flex items-center gap-2.5"
            >
              <i className="fa-solid fa-house text-amber-400 w-4 text-center"></i>
              <span>Home</span>
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/40 flex items-center gap-2.5"
            >
              <i className="fa-solid fa-award text-amber-400 w-4 text-center"></i>
              <span>Leadership &amp; Legacy</span>
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/40 flex items-center gap-2.5"
            >
              <i className="fa-solid fa-graduation-cap text-amber-400 w-4 text-center"></i>
              <span>Services &amp; Colleges</span>
            </a>
            <a
              href="#campus-drives"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/40 flex items-center gap-2.5"
            >
              <i className="fa-solid fa-camera-retro text-amber-400 w-4 text-center"></i>
              <span>Photo Gallery</span>
            </a>
            <a
              href="#certifications"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/40 flex items-center gap-2.5"
            >
              <i className="fa-solid fa-shield-halved text-emerald-400 w-4 text-center"></i>
              <span>ISO &amp; MSME Certs</span>
            </a>
            <a
              href="#jobs"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/40 flex items-center gap-2.5"
            >
              <i className="fa-solid fa-briefcase text-amber-400 w-4 text-center"></i>
              <span>Job Openings</span>
            </a>
            <a
              href="#success-stories"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/40 flex items-center gap-2.5"
            >
              <i className="fa-solid fa-star text-amber-400 w-4 text-center"></i>
              <span>Success Stories</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[46px] px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/40 flex items-center gap-2.5"
            >
              <i className="fa-solid fa-location-dot text-amber-400 w-4 text-center"></i>
              <span>Bhopal Center</span>
            </a>
          </div>

          {/* Direct Action Row */}
          <div className="pt-1 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookConsultationClick();
              }}
              className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <i className="fa-regular fa-calendar-check"></i>
              <span>Book Free Consultation Slot</span>
            </button>

            <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
              <span>
                <i className="fa-solid fa-location-dot text-amber-400 mr-1"></i>
                Zone-2, MP Nagar, Bhopal
              </span>
              <a href="tel:+917987683263" className="text-amber-400 font-bold tabular-nums">
                +91 7987683263
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
