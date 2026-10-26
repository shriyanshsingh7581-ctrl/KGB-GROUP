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
    <section id="success-stories" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-blue-900 mb-2">
            Verified Student &amp; Parent Testimonials · 1,00,000+ Careers Guided
          </div>
          <h2
            className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Student Admission &amp; Placement Success Stories
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
            Real outcomes from students and parents across Madhya Pradesh who trusted KGB Group (Knowledge Gurukul) for college admissions, scholarship guidance, and guaranteed placement assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SUCCESS_STORIES.map((story) => (
            <div
              key={story.name}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-bold text-emerald-700 mb-3">
                  {story.outcome}
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80">
                <div className="font-display font-bold text-sm text-slate-900">
                  {story.name}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {story.courseAndCollege} · {story.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
