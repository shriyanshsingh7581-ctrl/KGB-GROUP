import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050A15] text-slate-400 text-xs border-t border-amber-400/15 pb-6 sm:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-0.5 overflow-hidden shrink-0 border border-amber-400/60 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                <img
                  src="/assets/aistudio/IMG-20261024-WA0017_3feb77f8.jpg"
                  alt="KGB Group (Knowledge Gurukul) Logo"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('/kgb-logo.jpg')) {
                      target.src = '/kgb-logo.jpg';
                    }
                  }}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-lg text-white tracking-tight block">
                  KGB Group <span className="text-gold-foil">(Knowledge Gurukul)</span>
                </span>
                <p className="text-[11px] text-amber-300 font-semibold">
                  Empowering Students, Enabling Careers
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              Central India’s most trusted ISO 9001:2015 certified &amp; Govt. of India MSME registered educational consultancy, career development, and placement organization at Zone-2, MP Nagar, Bhopal.
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-300 font-semibold">
              <span className="text-amber-300">15 Lakh+ Students Guided</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400">Former T&amp;P Officers</span>
              <span aria-hidden="true">·</span>
              <span>ISO 9001:2015 (QMP202604878)</span>
            </div>
          </div>

          {/* Quick Navigation & Key Services in 2-col on Mobile */}
          <div className="grid grid-cols-2 gap-6 md:contents">
            {/* Quick Navigation */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-display font-bold text-white text-sm">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#home" className="hover:text-amber-300 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-amber-300 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-amber-300 transition-colors">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#campus-drives" className="hover:text-amber-300 transition-colors">
                    Seminars &amp; Gallery
                  </a>
                </li>
                <li>
                  <a href="#success-stories" className="hover:text-amber-300 transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#book-consultation" className="hover:text-amber-300 transition-colors">
                    Book Consultation
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-amber-300 transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Key Services */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-display font-bold text-white text-sm">
                Key Services
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#services" className="hover:text-amber-300 transition-colors">
                    Engineering &amp; MBA Admissions
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-amber-300 transition-colors">
                    Medical, Nursing &amp; Pharmacy
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-amber-300 transition-colors">
                    Law (BA LLB / BBA LLB)
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-amber-300 transition-colors">
                    Psychometric Career Counseling
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-amber-300 transition-colors">
                    Scholarship &amp; Loan Support
                  </a>
                </li>
                <li>
                  <a href="#jobs" className="hover:text-amber-300 transition-colors">
                    Placement Tie-ups &amp; Jobs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Official Center Address & Helpline */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-white text-sm">
              Bhopal Counseling Center
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <i className="fa-solid fa-location-dot text-amber-400 mt-0.5 shrink-0"></i>
                <span>
                  <strong className="text-white block">Official Address:</strong>
                  Zone-2, MP Nagar, Bhopal, Madhya Pradesh - 462011
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <i className="fa-solid fa-phone text-amber-400 shrink-0"></i>
                <a
                  href="tel:+917987683263"
                  className="font-bold text-white hover:text-amber-300 transition-colors tabular-nums"
                >
                  +91 7987683263
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <i className="fa-brands fa-whatsapp text-emerald-400 shrink-0"></i>
                <a
                  href="https://wa.me/917987683263?text=Hello%20KGB%20Group%20(Knowledge%20Gurukul)%2C%20I%20want%20to%20book%20a%20free%20career%20counseling%20session."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-400 hover:underline"
                >
                  Book via WhatsApp Chat
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <i className="fa-solid fa-envelope text-amber-400 shrink-0"></i>
                <a
                  href="mailto:kgbbhopal01@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  kgbbhopal01@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} KGB Group (Knowledge Gurukul), Bhopal. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span>ISO 9001:2015 (QMP202604878)</span>
            <span aria-hidden="true">·</span>
            <span>MSME Udyam: UDYAM-MP-10-0162140</span>
            <span aria-hidden="true">·</span>
            <span>Zone-2, MP Nagar, Bhopal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
