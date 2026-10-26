import React from 'react';

interface SuccessStory {
  name: string;
  courseAndCollege: string;
  outcome: string;
  quote: string;
  year: string;
}

const SUCCESS_STORIES: SuccessStory[] = [
  {
    name: 'Aarav Raghuwanshi',
    courseAndCollege: 'B.Tech (Computer Science & AI) · Top RGPV College, Bhopal',
    outcome: 'Admitted via MP DTE Counseling + 100% MMVY Scholarship Approved',
    quote:
      'After 12th PCM, my family was confused between multiple engineering colleges in Bhopal. KGB Group compared placement records honestly, helped me lock a CSE seat, and completed my Medhavi scholarship documentation.',
    year: 'Batch 2024–28',
  },
  {
    name: 'Sneha Chouksey',
    courseAndCollege: 'MBA (Finance & Marketing) · Autonomous Institute, Bhopal',
    outcome: 'Placed in Corporate Banking Role (₹6.4 LPA Package)',
    quote:
      'Knowledge Gurukul guided me from my MBA admission right through pre-placement aptitude and interview training. Their campus placement drive helped me secure an offer in my 3rd semester.',
    year: 'Placed 2025',
  },
  {
    name: 'Pooja & Ritu Kushwaha',
    courseAndCollege: 'B.Sc Nursing · INC Approved Medical & Nursing College, Bhopal',
    outcome: 'Direct Merit Admission + Post-Matric OBC Scholarship',
    quote:
      'The counselors at Zone-2 MP Nagar explained the hospital clinical training facilities clearly to our parents and arranged a campus visit before admission. Best educational consultancy in MP.',
    year: 'Nursing Batch',
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="success-stories" className="py-12 sm:py-18 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 sm:mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-blue-900 bg-blue-50 border border-blue-200 px-3 py-1 rounded-lg mb-2.5">
              <i className="fa-solid fa-star text-amber-500"></i>
              <span>Verified Student &amp; Parent Testimonials · 15 Lakh+ Students Guided</span>
            </div>
            <h2
              className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Student Admission &amp; Placement Success Stories
            </h2>
            <p className="text-slate-600 text-xs sm:text-base mt-2 leading-relaxed">
              Real outcomes from students and parents across Madhya Pradesh who trusted KGB Group (Knowledge Gurukul) for college admissions, scholarship guidance, and guaranteed placement assistance.
            </p>
          </div>
          <span className="md:hidden text-[11px] font-bold text-amber-600">
            Swipe cards →
          </span>
        </div>

        {/* Horizontal Snap Carousel on Mobile, 3-Column Grid on Desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
          {SUCCESS_STORIES.map((story) => (
            <div
              key={story.name}
              className="snap-start shrink-0 w-[86%] sm:w-[75%] md:w-auto rounded-3xl border border-slate-200/90 bg-slate-50/80 hover:bg-white hover:border-amber-400/60 hover:shadow-lg transition-all p-5 sm:p-6 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg mb-3.5">
                  <i className="fa-solid fa-circle-check text-emerald-600"></i>
                  <span>{story.outcome}</span>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-between gap-2">
                <div>
                  <div className="font-display font-bold text-sm text-slate-900">
                    {story.name}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    {story.courseAndCollege}
                  </div>
                </div>
                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md shrink-0">
                  {story.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
