import React, { useState } from 'react';

interface NavbarProps {
  onApplyClick: () => void;
  onOpenAdminPortal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onApplyClick, onOpenAdminPortal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      {/* Top Bar with Contact Helpline, Email, Bhopal Office & Quick Admin Access */}
      <div className="bg-slate-900 text-slate-100 text-[11px] sm:text-xs py-1.5 px-3 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-bold text-[10px] sm:text-[11px] border border-amber-500/40 shrink-0">
              <i className="fa-solid fa-certificate text-[9px] text-amber-400"></i>
              <span>ISO 9001:2015 &amp; Udyam MSME</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300 truncate">
              <i className="fa-solid fa-location-dot text-amber-400 text-[10px]"></i>
              <span>Zone 1, MP Nagar, Bhopal (MP)</span>
            </span>
            <span className="text-slate-700 hidden lg:inline">|</span>
            <a
              href="mailto:kgbbhopal01@gmail.com"
              className="hidden lg:inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-300 transition-colors"
            >
              <i className="fa-solid fa-envelope text-amber-400 text-[10px]"></i>
              <span>kgbbhopal01@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 font-semibold">
            <a
              href="tel:+917987683263"
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <i className="fa-solid fa-phone-volume text-[10px]"></i>
              <span>+91 7987683263</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a
              href="https://wa.me/917987683263?text=Hi%20KGB%20Group%20Knowledge%20Gurukul%20Bhopal,%20I%20want%20to%20inquire%20about%20job%20placements."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <i className="fa-brands fa-whatsapp text-sm"></i>
              <span>WhatsApp Desk</span>
            </a>
            <span className="text-slate-600">|</span>
            <button
              type="button"
              onClick={onOpenAdminPortal}
              className="cursor-pointer inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-300 border border-slate-700 transition-colors text-[10px] sm:text-[11px]"
              title="Open HR Admin Lead Management Portal"
            >
              <i className="fa-solid fa-lock text-[9px] text-amber-400"></i>
              <span>Admin Panel</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand Identity */}
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-amber-400/40 bg-white shadow-2xs p-0.5 flex items-center justify-center shrink-0 transition-transform group-hover:scale-105">
              <img
                src="kgb-logo.jpg"
                alt="KGB Group - Knowledge Gurukul Bhopal Logo"
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
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-base sm:text-xl tracking-tight text-slate-900 leading-none truncate">
                  KGB <span className="text-amber-500">GROUP</span>
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
                  <i className="fa-solid fa-circle-check text-emerald-600 mr-0.5"></i>Verified
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-600 mt-0.5 truncate">
                Knowledge Gurukul (Bhopal)
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links: Home, About, Certifications, Openings, Campus Drives, Registration Form */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            <a
              href="#home"
              className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
            >
              About
            </a>
            <a
              href="#certifications"
              className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors flex items-center gap-1"
            >
              <i className="fa-solid fa-award text-xs text-amber-500"></i>
              <span>Certifications</span>
            </a>
            <a
              href="#jobs"
              className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors flex items-center gap-1"
            >
              <i className="fa-solid fa-briefcase text-xs text-blue-600"></i>
              <span>Openings</span>
            </a>
            <a
              href="#campus-drives"
              className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors flex items-center gap-1"
            >
              <i className="fa-solid fa-camera text-xs text-emerald-600"></i>
              <span>Campus Drives</span>
            </a>
            <a
              href="#apply"
              className="text-xs xl:text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
            >
              Registration Form
            </a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="tel:+917987683263"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <i className="fa-solid fa-phone text-blue-700"></i>
              <span>+91 7987683263</span>
            </a>

            <button
              onClick={onApplyClick}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-linear-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 transition-all shadow-sm cursor-pointer"
            >
              <i className="fa-solid fa-paper-plane"></i>
              <span>Apply Now</span>
            </button>
          </div>

          {/* Mobile Quick Actions & Menu Toggle */}
          <div className="flex items-center gap-1.5 sm:hidden">
            <a
              href="https://wa.me/917987683263?text=Hi%20KGB%20Group%20Bhopal,%20I%20want%20to%20apply%20for%20job%20openings."
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
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-slate-800"
            >
              <div className="w-7 h-7 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-house"></i>
              </div>
              <span>Home</span>
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-slate-800"
            >
              <div className="w-7 h-7 rounded-lg bg-indigo-500/15 text-indigo-600 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-building-columns"></i>
              </div>
              <span>About</span>
            </a>
            <a
              href="#certifications"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-slate-800"
            >
              <div className="w-7 h-7 rounded-lg bg-amber-500/15 text-amber-600 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-award"></i>
              </div>
              <span>Certifications</span>
            </a>
            <a
              href="#jobs"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-slate-800"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-600 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <span>Openings</span>
            </a>
            <a
              href="#campus-drives"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-slate-800"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-camera"></i>
              </div>
              <span>Campus Drives</span>
            </a>
            <a
              href="#apply"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-slate-800"
            >
              <div className="w-7 h-7 rounded-lg bg-amber-500/15 text-amber-600 flex items-center justify-center shrink-0">
                <i className="fa-solid fa-file-pen"></i>
              </div>
              <span>Registration Form</span>
            </a>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
            <div><strong className="text-slate-800">Office:</strong> Zone 1, MP Nagar, Near Anand Namkeen, Bhopal</div>
            <div><strong className="text-slate-800">Email:</strong> kgbbhopal01@gmail.com</div>
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
          </div>
        </div>
      )}
    </header>
  );
};
