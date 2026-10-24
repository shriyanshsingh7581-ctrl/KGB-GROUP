import React from 'react';
import { TESTIMONIALS } from '../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[11px] sm:text-xs uppercase tracking-wider border border-emerald-200 mb-2.5">
            <i className="fa-solid fa-star text-xs text-amber-500"></i>
            <span>Verified Candidate Success</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Trusted by Over 1,00,000+ Candidates
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-base">
            Real stories from job seekers and students across Central India who launched their careers with Knowledge Gurukul.
          </p>
        </div>

        {/* Horizontal Snap Carousel on Mobile, 4-Col Grid on Desktop */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
          {TESTIMONIALS.map((item, index) => (
            <div
              key={index}
              className="snap-center shrink-0 w-[84%] sm:w-[320px] md:w-auto bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400 text-xs">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Verified Placement
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs text-slate-700 italic leading-relaxed mb-4">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-3.5 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-900 text-amber-300 font-bold flex items-center justify-center text-xs shrink-0 shadow-2xs">
                  {item.avatarInitials}
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-xs text-slate-900 truncate">{item.name}</h4>
                  <p className="text-[11px] text-slate-500 truncate">{item.collegeOrCity}</p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-900 bg-blue-50 px-1.5 py-0.5 rounded mt-1">
                    <span>{item.rolePlaced}</span>
                    <span>&bull;</span>
                    <i className="fa-solid fa-indian-rupee-sign text-[9px] text-amber-600"></i>
                    <span>{item.packageText.replace(/₹\s*/g, '')}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="mt-2 text-center md:hidden">
          <span className="text-[11px] font-semibold text-slate-400 inline-flex items-center gap-1.5">
            <i className="fa-solid fa-arrows-left-right text-[10px]"></i>
            <span>Swipe to read more success stories</span>
          </span>
        </div>

      </div>
    </section>
  );
};
