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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Identity */}
        <a
          href="#home"
          className="flex items-center gap-3 group shrink-0"
        >
          <div className="w-11 h-11 rounded-xl overflow-hidden border border-slate-200 bg-white p-0.5 flex items-center justify-center shrink-0">
            <img
              src="kgb-logo.jpg"
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
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-slate-900 whitespace-nowrap leading-tight">
              KGB Group <span className="text-blue-900 font-bold">(Knowledge Gurukul)</span>
            </span>
            <span className="text-[11px] font-medium text-slate-500 whitespace-nowrap">
              Empowering Students, Enabling Careers
            </span>
          </div>
        </a>

        {/* Zone 2: Primary Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
          <a
            href="#home"
            className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0"
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
              className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 py-2"
            >
              <span>Services</span>
              <i className="fa-solid fa-chevron-down text-[10px] text-slate-400"></i>
            </a>

            {servicesDropdownOpen && (
              <div className="absolute left-0 top-full w-64 bg-white rounded-xl border border-slate-200 shadow-lg py-2 z-50">
                <button
                  type="button"
                  onClick={() => handleServiceSelect('Admission Guidance (Engineering, MBA, Medical, Law)')}
                  className="w-full text-left px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-900 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>Admissions (Engg, MBA, Medical, Law)</span>
                  <i className="fa-solid fa-arrow-right text-[10px] text-slate-400"></i>
                </button>
                <button
                  type="button"
                  onClick={() => handleServiceSelect('Career Counseling & Psychometric Assessment')}
                  className="w-full text-left px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-900 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>Career Guidance &amp; Counseling</span>
                  <i className="fa-solid fa-arrow-right text-[10px] text-slate-400"></i>
                </button>
                <button
                  type="button"
                  onClick={() => handleServiceSelect('Direct College Placement Tie-ups & Training')}
                  className="w-full text-left px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-900 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>Placement Support &amp; Training</span>
                  <i className="fa-solid fa-arrow-right text-[10px] text-slate-400"></i>
                </button>
                <button
                  type="button"
                  onClick={() => handleServiceSelect('Scholarship & Financial Guidance')}
                  className="w-full text-left px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-900 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>Scholarship &amp; Loan Assistance</span>
                  <i className="fa-solid fa-arrow-right text-[10px] text-slate-400"></i>
                </button>
              </div>
            )}
          </div>

          <a
            href="#success-stories"
            className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0"
          >
            Success Stories
          </a>
          <a
            href="#book-consultation"
            className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0"
          >
            Book Consultation
          </a>
          <a
            href="#contact"
            className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0"
          >
            Contact Us
          </a>
        </nav>

        {/* Zone 3: Highlighted Direct CTA Button */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => onBookConsultationClick()}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
          >
            <i className="fa-regular fa-calendar-check"></i>
            <span>Book Free Consultation</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-base`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-800">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100"
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100"
            >
              Services (Admissions &amp; Career)
            </a>
            <a
              href="#success-stories"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100"
            >
              Success Stories
            </a>
            <a
              href="#book-consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100"
            >
              Book Consultation
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100"
            >
              Contact Us (Zone-2 MP Nagar)
            </a>
          </div>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onBookConsultationClick();
            }}
            className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <i className="fa-regular fa-calendar-check"></i>
            <span>Book Free Consultation</span>
          </button>
        </div>
      )}
    </header>
  );
};
