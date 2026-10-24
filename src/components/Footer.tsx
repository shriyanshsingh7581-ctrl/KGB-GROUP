import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 overflow-hidden shadow-xs shrink-0">
                <img
                  src="/assets/aistudio/IMG-20261024-WA0017_3feb77f8.jpg"
                  alt="Knowledge Gurukul Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display font-black text-xl text-white tracking-tight">
                  KGB <span className="text-amber-400">GROUP</span>
                </span>
                <p className="text-[11px] text-amber-300 font-semibold">
                  Knowledge Gurukul &bull; Placement India
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              "Your Trust. Our Commitment. | Great Careers Start Here!" <br />
              Central India's leading training & placement organization bridging qualified candidates with verified MNC, domestic, and Work From Home career opportunities.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="px-2.5 py-1 rounded bg-slate-800 text-amber-300 font-bold text-[10px] border border-amber-500/30">
                <i className="fa-solid fa-award text-amber-400 mr-1"></i> ISO 9001:2015 Certified
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-blue-300 font-bold text-[10px] border border-blue-500/30">
                <i className="fa-solid fa-landmark mr-1"></i> MSME Govt. Registered
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-emerald-300 font-bold text-[10px] border border-emerald-500/30">
                <i className="fa-solid fa-users mr-1"></i> 1,00,000+ Placed
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#jobs" className="hover:text-amber-400 transition-colors">
                  Featured Job Openings
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-amber-400 transition-colors">
                  Campus Placement Training
                </a>
              </li>
              <li>
                <a href="#colleges" className="hover:text-amber-400 transition-colors">
                  Engineering College Tie-ups
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-amber-400 transition-colors">
                  ISO & MSME Accreditations
                </a>
              </li>
              <li>
                <a href="#apply" className="hover:text-amber-400 transition-colors">
                  Online Application Form
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  FAQs & Verification
                </a>
              </li>
            </ul>
          </div>

          {/* Top Job Roles */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Active Vacancies
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#jobs" className="hover:text-amber-400 transition-colors">
                  WFH Data Entry (₹25k)
                </a>
              </li>
              <li>
                <a href="#jobs" className="hover:text-amber-400 transition-colors">
                  Customer Support (₹23k-₹30k)
                </a>
              </li>
              <li>
                <a href="#jobs" className="hover:text-amber-400 transition-colors">
                  Exam Invigilators
                </a>
              </li>
              <li>
                <a href="#jobs" className="hover:text-amber-400 transition-colors">
                  Warehouse Associates
                </a>
              </li>
              <li>
                <a href="#jobs" className="hover:text-amber-400 transition-colors">
                  Junior IT Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Helpline */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
              Helpline & Support
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href="tel:+917987683263"
                className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400/50 transition-colors text-amber-400"
              >
                <i className="fa-solid fa-phone-volume text-sm"></i>
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 block">Direct Placement Helpline</span>
                  <span className="font-bold text-sm">+91 7987683263</span>
                </div>
              </a>

              <a
                href="https://wa.me/917987683263?text=Hi%20KGB%20Group,%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 rounded-xl bg-emerald-950/50 border border-emerald-900/60 hover:border-emerald-500/50 transition-colors text-emerald-400"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 block">Official WhatsApp Support</span>
                  <span className="font-bold text-sm">+91 7987683263</span>
                </div>
              </a>

              <div className="pt-1 flex items-start gap-2 text-slate-400 text-xs">
                <i className="fa-solid fa-location-dot text-amber-400 mt-0.5"></i>
                <span>Operating across Indore, Bhopal, Jabalpur, Raipur & Central India Region</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} KGB Group (Knowledge Gurukul / Placement India). All Rights Reserved.
          </p>
          <p className="flex items-center gap-3">
            <span>ISO 9001:2015 Certified Organization</span>
            <span>&bull;</span>
            <span>Govt. MSME Registered Unit</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
