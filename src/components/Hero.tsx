import React, { useState } from 'react';

interface HeroProps {
  onBookSlotClick: (prefilledCourse?: string) => void;
  onExploreCollegesClick: () => void;
}

const HERO_SHOWCASE_SLIDES = [
  {
    id: 'slide-1',
    image: '/assets/aistudio/IMG-20261025-WA0045_61445018.jpg',
    category: 'State-Level Career Conclave',
    title: 'Netritva Vikas & Higher Education Counseling Seminar',
    subtitle: 'Guiding 12th Pass & Undergraduate students across Madhya Pradesh towards top universities.',
  },
  {
    id: 'slide-2',
    image: '/assets/aistudio/IMG-20261025-WA0046_7cf2ce13.jpg',
    category: 'Medical, Nursing & Allied Health',
    title: 'Clinical & Medical College Admission Guidance',
    subtitle: 'Complete NEET counseling, B.Sc Nursing, B.Pharm & Paramedical college admissions with hospital training.',
  },
  {
    id: 'slide-3',
    image: '/assets/aistudio/IMG-20261025-WA0047_8503b241.jpg',
    category: 'Expert Academic Panel • Bhopal',
    title: 'Swaraj Express Career Seminar & Mentorship Panel',
    subtitle: 'Senior educationists and career counselors addressing students on college selection and competitive exams.',
  },
  {
    id: 'slide-4',
    image: '/assets/aistudio/IMG-20261025-WA0053_b989acae.jpg',
    category: '1-on-1 Student Mentorship',
    title: 'Personalized Admission & Placement Roadmap',
    subtitle: 'Direct admission guidance for Engineering (B.Tech), Management (MBA/PGDM), Law & Medical streams.',
  },
];

export const Hero: React.FC<HeroProps> = ({ onBookSlotClick, onExploreCollegesClick }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeSlide = HERO_SHOWCASE_SLIDES[activeSlideIndex];

  return (
    <section
      id="home"
      className="relative bg-slate-900 text-white overflow-hidden border-b border-slate-800"
    >
      {/* Background Campus & Event Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={activeSlide.image}
          alt={activeSlide.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-15 scale-105 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900/95 to-slate-900/85"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Value Proposition & Dual CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Unboxed Editorial Kicker */}
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-amber-400">
                <span>KGB Group (Knowledge Gurukul)</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-300">Empowering Students, Enabling Careers</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-emerald-400">Zone-2, MP Nagar, Bhopal</span>
              </div>

              {/* Dynamic Headline */}
              <h1
                className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[50px] text-white tracking-tight leading-[1.12]"
                style={{ textWrap: 'balance' }}
              >
                Madhya Pradesh’s Premier Educational &amp; Admission Consultancy
              </h1>

              {/* Subheading */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Guiding students towards top <strong className="text-white">engineering, management, and medical colleges</strong> with guaranteed placement assistance, scholarship support, and 1-on-1 career counseling at our Bhopal center.
              </p>

              {/* Quick Stream Selector Buttons */}
              <div className="pt-1">
                <p className="text-xs font-semibold text-slate-400 mb-2.5">
                  Select your target stream for instant counseling slot:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: 'B.Tech / Engineering', value: 'B.Tech / B.E. (Engineering Admission)' },
                    { label: 'MBA / PGDM Management', value: 'MBA / PGDM (Management Admission)' },
                    { label: 'MBBS / Nursing / Medical', value: 'MBBS / B.Sc Nursing / B.Pharm (Medical)' },
                    { label: 'BA LLB / Law', value: 'BA LLB / BBA LLB (Law Admission)' },
                    { label: 'Placement & Career Guidance', value: 'Career Counseling & Placement Support' },
                  ].map((stream) => (
                    <button
                      key={stream.label}
                      type="button"
                      onClick={() => onBookSlotClick(stream.value)}
                      className="px-3.5 py-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-amber-300 border border-slate-700 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      {stream.label} →
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Dual Primary CTAs */}
            <div className="pt-2 space-y-6">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => onBookSlotClick()}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm sm:text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/20 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <i className="fa-regular fa-calendar-check"></i>
                  <span>Book Counselling Slot</span>
                </button>

                <button
                  type="button"
                  onClick={onExploreCollegesClick}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <i className="fa-solid fa-building-columns text-amber-400"></i>
                  <span>Explore Top Colleges</span>
                </button>
              </div>

              {/* Direct Helpline Strip */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800/90">
                <span>
                  Admission Helpline: <a href="tel:+917987683263" className="text-amber-400 font-bold hover:underline tabular-nums">+91 7987683263</a>
                </span>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <span>
                  ISO 9001:2015 Certified (<span className="font-mono tabular-nums">QMP202604878</span>)
                </span>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <span>
                  Govt. MSME (<span className="font-mono tabular-nums">UDYAM-MP-10-0162140</span>)
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Real Seminar & Campus Showcase */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-800/80 border border-slate-700/90 rounded-2xl p-4 sm:p-5">
            <div className="relative rounded-xl overflow-hidden aspect-4/3 bg-slate-950 border border-slate-700">
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <p className="text-xs font-semibold text-amber-400">
                  {activeSlide.category}
                </p>
                <h2 className="font-display font-bold text-base sm:text-lg text-white mt-0.5">
                  {activeSlide.title}
                </h2>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {activeSlide.subtitle}
                </p>
              </div>
            </div>

            {/* Thumbnail Switcher for Client Event Photos */}
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>Real Seminars &amp; Student Counseling Batches</span>
                <span className="font-mono tabular-nums">{activeSlideIndex + 1} / {HERO_SHOWCASE_SLIDES.length}</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {HERO_SHOWCASE_SLIDES.map((slide, idx) => (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setActiveSlideIndex(idx)}
                    className={`relative rounded-lg overflow-hidden aspect-4/3 border-2 transition-all cursor-pointer ${
                      idx === activeSlideIndex
                        ? 'border-amber-400 opacity-100'
                        : 'border-transparent opacity-60 hover:opacity-90'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Callout inside Hero Card */}
            <div className="mt-4 pt-3.5 border-t border-slate-700/80 flex items-center justify-between gap-3">
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-white block">Visit Our Bhopal Counseling Desk</span>
                <span className="text-slate-400">Zone-2, MP Nagar, Bhopal (Mon–Sat, 10 AM – 7 PM)</span>
              </div>
              <button
                type="button"
                onClick={() => onBookSlotClick()}
                className="px-3.5 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs whitespace-nowrap shrink-0 cursor-pointer"
              >
                Book Visit →
              </button>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Quantitative Proof Row Below Hero Split */}
        <div className="mt-10 pt-8 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-amber-400 tabular-nums">
              10+ Years
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              Academic Excellence &amp; 100% Genuine Admission Guidance
            </div>
          </div>
          <div>
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-white tabular-nums">
              1,00,000+
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              Students Counseled, Trained &amp; Placed Across India
            </div>
          </div>
          <div>
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-400 tabular-nums">
              150+ Colleges
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              Direct Tie-ups for Engineering, MBA, Medical &amp; Law
            </div>
          </div>
          <div>
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-white tabular-nums">
              100% Support
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              MP Scholarship, Education Loan &amp; Guaranteed Placement Cell
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
