import React, { useState } from 'react';

interface NavbarProps {
  onApplyClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onApplyClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      {/* Compact Single-Line Top Bar for Mobile & Desktop */}
      <div className="bg-slate-900 text-slate-100 text-[11px] sm:text-xs py-1.5 px-3 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-bold text-[10px] sm:text-[11px] border border-amber-500/40 shrink-0">
              <i className="fa-solid fa-certificate text-[9px] text-amber-400"></i>
              <span>ISO 9001 & MSME</span>
            </span>
            <span className="hidden md:inline text-slate-300 truncate">
              Official Placement Partner for Central India Engineering & Management Colleges
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0 font-semibold">
            <a
              href="tel:+917987683263"
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <i className="fa-solid fa-phone-volume text-[10px]"></i>
              <span>+91 7987683263</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a
              href="https://wa.me/917987683263?text=Hi%20KGB%20Group%20Knowledge%20Gurukul,%20I%20want%20to%20inquire%20about%20job%20placements."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <i className="fa-brands fa-whatsapp text-sm"></i>
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-amber-400/40 bg-white shadow-2xs p-0.5 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
              <img
                src="/assets/aistudio/IMG-20261024-WA0017_3feb77f8.jpg"
                alt="Knowledge Gurukul Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-lg sm:text-2xl tracking-tight text-slate-900 leading-none">
                  KGB <span className="text-amber-500">GROUP</span>
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200 shrink-0">
                  MSME
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-600 mt-0.5 truncate">
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
              <span>Training</span>
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

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+917987683263"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <i className="fa-solid fa-phone text-blue-700"></i>
              <span>+91 7987683263</span>
            </a>

            <button
              onClick={onApplyClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-linear-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 transition-all shadow-sm cursor-pointer"
            >
              <i className="fa-solid fa-paper-plane"></i>
              <span>Apply Now</span>
            </button>
          </div>

          {/* Mobile Quick Actions & Menu Toggle */}
          <div className="flex items-center gap-1.5 sm:hidden">
            <a
              href="https://wa.me/917987683263?text=Hi%20KGB%20Group,%20I%20want%20to%20apply%20for%20job%20openings."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 active:scale-95 transition-transform"
              aria-label="WhatsApp +91 7987683263"
            >
              <i className="fa-brands fa-whatsapp text-base"></i>
            </a>
            <a
              href="tel:+917987683263"
              className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 active:scale-95 transition-transform"
              aria-label="Call +91 7987683263"
            >
              <i className="fa-solid fa-phone text-sm"></i>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 active:scale-95 transition-transform"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-base`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* App-Like Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-3 pt-3 pb-5 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2">
            <a
              href="#jobs"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-slate-800 active:bg-slate-100"
            >
              <div className="w-7 h-7 rounded-lg bg-amber-500/15 text-amber-600 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <span>Open Jobs</span>
            </a>
            <a
              href="#training"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-slate-800 active:bg-slate-100"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-600 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <span>Training</span>
            </a>
            <a
              href="#colleges"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-slate-800 active:bg-slate-100"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-building-columns"></i>
              </div>
              <span>Colleges</span>
            </a>
            <a
              href="#trust"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-slate-800 active:bg-slate-100"
            >
              <div className="w-7 h-7 rounded-lg bg-indigo-500/15 text-indigo-600 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <span>ISO & MSME</span>
            </a>
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onApplyClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-extrabold text-slate-950 bg-linear-to-r from-amber-400 to-amber-500 shadow-xs"
            >
              <i className="fa-solid fa-paper-plane"></i>
              <span>Apply Online Now (Zero Fee)</span>
            </button>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+917987683263"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 border border-slate-200"
              >
                <i className="fa-solid fa-phone text-blue-700"></i>
                <span>Call Helpline</span>
              </a>
              <a
                href="https://wa.me/917987683263?text=Hi%20KGB%20Group,%20I%20want%20to%20apply%20for%20jobs."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600"
              >
                <i className="fa-brands fa-whatsapp text-sm"></i>
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
