import React from 'react';

export const TrustStrip: React.FC = () => {
  return (
    <section id="trust" className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 4 Clean Accreditation & Benchmark Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        {/* Card 1: ISO 9001 Certified */}
        <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-200/80 hover:border-amber-400 transition-all hover:shadow-xl group">
          <div className="flex items-center gap-3.5 mb-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
              <i className="fa-solid fa-certificate text-2xl"></i>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block">Quality Benchmark</span>
              <h3 className="font-display font-extrabold text-base text-slate-900 leading-tight">ISO 9001 Certified</h3>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Standardized Quality Management in skill development, candidate evaluation, and corporate placement execution.
          </p>
          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
            <i className="fa-solid fa-circle-check text-emerald-500"></i>
            <span>Certified Operational Standards</span>
          </div>
        </div>

        {/* Card 2: MSME Registered under Govt. Startup Mission */}
        <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-200/80 hover:border-blue-500 transition-all hover:shadow-xl group">
          <div className="flex items-center gap-3.5 mb-3">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <i className="fa-solid fa-landmark-flag text-2xl"></i>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block">Govt. Startup Mission</span>
              <h3 className="font-display font-extrabold text-base text-slate-900 leading-tight">MSME Registered</h3>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Registered under Ministry of Micro, Small and Medium Enterprises & Govt. Startup initiatives for youth career advancement.
          </p>
          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
            <i className="fa-solid fa-circle-check text-emerald-500"></i>
            <span>Official Government Recognition</span>
          </div>
        </div>

        {/* Card 3: Central India College Placement Partner */}
        <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-200/80 hover:border-emerald-500 transition-all hover:shadow-xl group">
          <div className="flex items-center gap-3.5 mb-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <i className="fa-solid fa-building-columns text-2xl"></i>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 block">Campus Empanelled</span>
              <h3 className="font-display font-extrabold text-base text-slate-900 leading-tight">Central India Partner</h3>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Official Training & Placement Partner for leading Engineering, MBA, and Polytechnic Colleges across Central India.
          </p>
          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
            <i className="fa-solid fa-circle-check text-emerald-500"></i>
            <span>450+ Partner Institutions</span>
          </div>
        </div>

        {/* Card 4: 1,00,000+ Placed Benchmark */}
        <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-200/80 hover:border-indigo-500 transition-all hover:shadow-xl group">
          <div className="flex items-center gap-3.5 mb-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <i className="fa-solid fa-users-rays text-2xl"></i>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 block">Proven Track Record</span>
              <h3 className="font-display font-extrabold text-base text-slate-900 leading-tight">1,00,000+ Placed</h3>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Over one lakh candidates trained and successfully placed in verified domestic and multinational corporate roles.
          </p>
          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
            <i className="fa-solid fa-circle-check text-emerald-500"></i>
            <span>Verified Offer Letters</span>
          </div>
        </div>

      </div>
    </section>
  );
};
