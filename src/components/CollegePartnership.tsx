import React from 'react';
import { COLLEGE_PARTNERS } from '../data/testimonials';

export const CollegePartnership: React.FC = () => {
  return (
    <section id="colleges" className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-300 font-bold text-xs uppercase tracking-wider border border-amber-500/30 mb-3">
            <i className="fa-solid fa-building-columns text-xs text-amber-400"></i>
            <span>Institutional Collaboration Wing</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
            Official Training & Placement Partner for Central India Colleges
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Empanelled with leading Engineering, Management, and Polytechnic campuses to bridge industry-academic gaps, deliver corporate placement drives, and train youth for top-tier careers.
          </p>
        </div>

        {/* 3 Pillars of Campus Training */}
        <div id="training" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          
          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 hover:border-amber-400/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl mb-4">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">Campus Placement Drives</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              We organize dedicated pooled and in-campus recruitment drives inviting top MNCs, BFSI giants, IT firms, and logistics corporations directly to partner institutions.
            </p>
            <ul className="text-xs text-slate-400 space-y-1.5 border-t border-slate-700/60 pt-3">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check text-amber-400 text-[10px]"></i>
                <span>Direct HR round on college premises</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check text-amber-400 text-[10px]"></i>
                <span>Multi-company concurrent selection drives</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 hover:border-blue-400/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-xl mb-4">
              <i className="fa-solid fa-comments"></i>
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">Interview & Soft Skills Bootcamps</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Knowledge Gurukul trainers provide rigorous corporate grooming: mock interviews, corporate communication, resume building, and group discussion coaching.
            </p>
            <ul className="text-xs text-slate-400 space-y-1.5 border-t border-slate-700/60 pt-3">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check text-blue-400 text-[10px]"></i>
                <span>1-on-1 personalized feedback sessions</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check text-blue-400 text-[10px]"></i>
                <span>Overcoming English fluency hesitations</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 hover:border-emerald-400/50 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl mb-4">
              <i className="fa-solid fa-laptop-code"></i>
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">Technical & WFH Readiness</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Custom modules in Excel analytics, desktop troubleshooting, CRM navigation, and customer success protocols tailored for instant day-1 employee productivity.
            </p>
            <ul className="text-xs text-slate-400 space-y-1.5 border-t border-slate-700/60 pt-3">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check text-emerald-400 text-[10px]"></i>
                <span>Hands-on typing speed certification</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-check text-emerald-400 text-[10px]"></i>
                <span>ISO 9001 quality compliance certificate</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Partner Colleges Grid */}
        <div className="bg-slate-800/40 rounded-2xl p-6 sm:p-8 border border-slate-700/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h4 className="font-display font-bold text-base text-white">
                Affiliated & Associated Campuses Across MP, CG & Central Region
              </h4>
              <p className="text-xs text-slate-400">
                Over 450+ academic institutions trust KGB Group Knowledge Gurukul for student placement assistance.
              </p>
            </div>
            <a
              href="https://wa.me/917987683263?text=Hi%20KGB%20Group,%20I%20am%20a%20College%20TPO%20interested%20in%20a%20campus%20drive%20tie-up."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400 text-slate-900 font-bold text-xs hover:bg-amber-300 transition-colors shrink-0"
            >
              <i className="fa-solid fa-handshake"></i>
              <span>College TPO / MOU Tie-Up</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {COLLEGE_PARTNERS.map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-slate-800/80 p-3 rounded-xl border border-slate-700/60 text-xs text-slate-200"
              >
                <i className="fa-solid fa-building-columns text-amber-400 shrink-0"></i>
                <span className="font-medium">{partner}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
