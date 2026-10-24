import React from 'react';

export const TrustStrip: React.FC = () => {
  return (
    <section id="trust" className="relative -mt-5 sm:-mt-6 z-20 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
      {/* 2x2 Grid on Mobile, 4 Columns on Desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        
        {/* Card 1: ISO 9001 Certified */}
        <div className="bg-white rounded-2xl p-3.5 sm:p-5 shadow-md border border-slate-200/90 hover:border-amber-400 transition-all group flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3.5 mb-2 sm:mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <i className="fa-solid fa-certificate text-lg sm:text-2xl"></i>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block">Quality Standard</span>
                <h3 className="font-display font-extrabold text-xs sm:text-base text-slate-900 leading-tight">ISO 9001 Certified</h3>
              </div>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-600 leading-snug sm:leading-relaxed">
              Certified Quality Management in training, screening & corporate placements.
            </p>
          </div>
          <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-slate-500">
            <i className="fa-solid fa-circle-check text-emerald-500 shrink-0"></i>
            <span className="truncate">Verified Process</span>
          </div>
        </div>

        {/* Card 2: MSME Registered */}
        <div className="bg-white rounded-2xl p-3.5 sm:p-5 shadow-md border border-slate-200/90 hover:border-blue-500 transition-all group flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3.5 mb-2 sm:mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <i className="fa-solid fa-landmark-flag text-lg sm:text-2xl"></i>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">Govt. Startup Mission</span>
                <h3 className="font-display font-extrabold text-xs sm:text-base text-slate-900 leading-tight">MSME Registered</h3>
              </div>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-600 leading-snug sm:leading-relaxed">
              Registered under Ministry of MSME & Govt. Startup initiatives for youth careers.
            </p>
          </div>
          <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-slate-500">
            <i className="fa-solid fa-circle-check text-emerald-500 shrink-0"></i>
            <span className="truncate">Govt. Recognized</span>
          </div>
        </div>

        {/* Card 3: Central India College Partner */}
        <div className="bg-white rounded-2xl p-3.5 sm:p-5 shadow-md border border-slate-200/90 hover:border-emerald-500 transition-all group flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3.5 mb-2 sm:mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <i className="fa-solid fa-building-columns text-lg sm:text-2xl"></i>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">Campus Partner</span>
                <h3 className="font-display font-extrabold text-xs sm:text-base text-slate-900 leading-tight">Central India Partner</h3>
              </div>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-600 leading-snug sm:leading-relaxed">
              Official Training & Placement Partner for Engineering & Management Colleges.
            </p>
          </div>
          <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-slate-500">
            <i className="fa-solid fa-circle-check text-emerald-500 shrink-0"></i>
            <span className="truncate">450+ Colleges</span>
          </div>
        </div>

        {/* Card 4: 1,00,000+ Placed */}
        <div className="bg-white rounded-2xl p-3.5 sm:p-5 shadow-md border border-slate-200/90 hover:border-indigo-500 transition-all group flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3.5 mb-2 sm:mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <i className="fa-solid fa-users-rays text-lg sm:text-2xl"></i>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block">Track Record</span>
                <h3 className="font-display font-extrabold text-xs sm:text-base text-slate-900 leading-tight">1,00,000+ Placed</h3>
              </div>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-600 leading-snug sm:leading-relaxed">
              Over 1 Lakh candidates trained and placed in verified MNC & WFH roles.
            </p>
          </div>
          <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-slate-500">
            <i className="fa-solid fa-circle-check text-emerald-500 shrink-0"></i>
            <span className="truncate">Direct Offer Letters</span>
          </div>
        </div>

      </div>
    </section>
  );
};
