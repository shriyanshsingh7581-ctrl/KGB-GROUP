import React, { useState } from 'react';

interface NavbarProps {
  onApplyClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onApplyClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-slate-100 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-semibold text-[11px] border border-amber-500/40">
              <i className="fa-solid fa-certificate text-[10px] text-amber-400"></i> ISO 9001:2015 & MSME Registered
            </span>
            <span className="hidden sm:inline text-slate-300">
              Official Placement Partner for Central India Engineering & Management Colleges
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href="tel:+917987683263"
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <i className="fa-solid fa-phone-volume text-xs"></i>
              <span>Helpline: +91 7987683263</span>
            </a>
            <span className="text-slate-600 hidden md:inline">|</span>
            <a
              href="https://wa.me/917987683263?text=Hi%20KGB%20Group%20Knowledge%20Gurukul,%20I%20want%20to%20inquire%20about%20job%20placements."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <i className="fa-brands fa-whatsapp text-sm"></i>
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-amber-400/30 bg-amber-50/50 shadow-xs p-1 flex items-center justify-center transition-transform group-hover:scale-105">
              <img
                src="/assets/aistudio/IMG-20261024-WA0017_3feb77f8.jpg"
                alt="Knowledge Gurukul Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900">
                  KGB <span className="text-amber-500">GROUP</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                  Govt. MSME
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-600 -mt-0.5 tracking-wide">
                Knowledge Gurukul &bull; Placement India
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            <a
              href="#jobs"
              className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors flex items-center gap-1.5"
            >
              <i className="fa-solid fa-briefcase text-xs text-amber-500"></i>
              <span>Featured Jobs</span>
            </a>
            <a
              href="#training"
              className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors flex items-center gap-1.5"
            >
              <i className="fa-solid fa-graduation-cap text-xs text-blue-600"></i>
              <span>Training Modules</span>
            </a>
            <a
              href="#colleges"
              className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors flex items-center gap-1.5"
            >
              <i className="fa-solid fa-building-columns text-xs text-emerald-600"></i>
              <span>College Tie-ups</span>
            </a>
            <a
              href="#trust"
              className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors flex items-center gap-1.5"
            >
              <i className="fa-solid fa-shield-halved text-xs text-indigo-600"></i>
              <span>Accreditations</span>
            </a>
            <a
              href="#faq"
              className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
            >
              FAQs
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+917987683263"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all shadow-2xs"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <i className="fa-solid fa-phone text-blue-700"></i>
              <span>+91 7987683263</span>
            </a>

            <button
              onClick={onApplyClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-slate-900 bg-linear-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              <i className="fa-solid fa-paper-plane text-slate-900"></i>
              <span>Apply Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+917987683263"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-800 border border-blue-200"
              aria-label="Call +91 7987683263"
            >
              <i className="fa-solid fa-phone text-sm"></i>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-2">Navigation</div>
          <a
            href="#jobs"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            <i className="fa-solid fa-briefcase text-amber-500 w-5"></i>
            <span>Featured Job Openings</span>
          </a>
          <a
            href="#training"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            <i className="fa-solid fa-graduation-cap text-blue-600 w-5"></i>
            <span>Training & Interview Grooming</span>
          </a>
          <a
            href="#colleges"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            <i className="fa-solid fa-building-columns text-emerald-600 w-5"></i>
            <span>Engineering & Management College Partners</span>
          </a>
          <a
            href="#trust"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            <i className="fa-solid fa-shield-halved text-indigo-600 w-5"></i>
            <span>ISO 9001 & MSME Accreditations</span>
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-100"
          >
            <i className="fa-solid fa-circle-question text-slate-500 w-5"></i>
            <span>Frequently Asked Questions</span>
          </a>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onApplyClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold text-slate-900 bg-amber-400 hover:bg-amber-500 shadow-xs"
            >
              <i className="fa-solid fa-paper-plane"></i>
              <span>Apply for Job Openings (Free)</span>
            </button>
            <a
              href="https://wa.me/917987683263?text=Hi%20KGB%20Group,%20I%20want%20to%20apply%20for%20jobs."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              <span>Chat on WhatsApp (+91 7987683263)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
