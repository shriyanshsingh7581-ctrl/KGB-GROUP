import React, { useState, useEffect } from 'react';

interface HeroProps {
  onBookSlotClick: (prefillCourse?: string) => void;
  onExploreCollegesClick: () => void;
}

const HERO_SLIDES = [
  {
    src: '/assets/aistudio/IMG-20261026-WA0024_9f825f44.jpg',
    caption: 'Leadership & Career Guidance Seminar Addressing Faculty & Students',
    tag: 'Leadership Seminar · Bhopal',
    objectPosition: 'center center',
  },
  {
    src: '/assets/aistudio/IMG-20261025-WA0045_61445018.jpg',
    caption: 'Netritva Vikas Youth Leadership & Career Conclave in Packed Auditorium',
    tag: 'Auditorium Interaction · 500+ Students',
    objectPosition: 'center center',
  },
  {
    src: '/assets/aistudio/IMG-20261026-WA0026_6a62f7b5.jpg',
    caption: 'With Hon’ble Technical Education & Skill Development Minister of MP Shri Deepak Joshi ji at PMKVY Fair',
    tag: 'PMKVY Skill Development Fair',
    objectPosition: 'center 85%',
  },
  {
    src: '/assets/aistudio/IMG-20261026-WA0025_338fadf7.jpg',
    caption: 'Career Counselling & Competitive Exam Seminar at Nutan College, Bhopal',
    tag: 'Nutan College Seminar · Bhopal',
    objectPosition: 'center 80%',
  },
  {
    src: '/assets/aistudio/IMG-20261025-WA0046_7cf2ce13.jpg',
    caption: 'Dedicated Admission & Clinical Training Guidance for Nursing & Medical Batches',
    tag: 'Medical & Nursing Admissions',
    objectPosition: 'center center',
  },
];

const KEY_STATS_BADGES = [
  {
    badge: '15 Lakh+',
    label: 'Students Guided (School to College)',
    subtext: 'Pan-MP Academic & Career Mentorship',
    icon: 'fa-solid fa-user-graduate',
  },
  {
    badge: 'Lakhs Placed',
    label: 'Direct Placement Track Record',
    subtext: 'MNC, Banking, IT & Core Recruitment',
    icon: 'fa-solid fa-briefcase',
  },
  {
    badge: 'Former T&P Officers',
    label: 'Engineering & Management Colleges',
    subtext: 'Direct Corporate Hiring Leadership',
    icon: 'fa-solid fa-chalkboard-user',
  },
  {
    badge: 'Founder Team',
    label: 'Premier MBA Colleges Network',
    subtext: 'Institutional Governance & ROI Insight',
    icon: 'fa-solid fa-building-columns',
  },
];

export const Hero: React.FC<HeroProps> = ({ onBookSlotClick, onExploreCollegesClick }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-[#050A15] bg-luxury-grid text-white overflow-hidden border-b border-amber-400/15"
    >
      {/* Sovereign Royal Navy & Academic Gold Radial Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 14% 18%, rgba(30, 58, 138, 0.52) 0%, transparent 50%), radial-gradient(circle at 86% 75%, rgba(217, 119, 6, 0.22) 0%, transparent 46%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 pt-8 pb-10 sm:py-14 lg:py-20">
        {/* Main 2-Column Split (Balanced Stretch Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Exact Headline, Impact Description, CTAs & Quick Stream Triggers */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-5 sm:space-y-6">
              {/* Eyebrow / Top Tag (Unboxed Clean Metadata + Flag) */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm font-semibold">
                <span className="text-amber-300 font-display font-extrabold tracking-wide">
                  KNOWLEDGE GURUKUL 🇮🇳
                </span>
                <span className="text-slate-600" aria-hidden="true">·</span>
                <span className="text-slate-300">
                  Empowering Students, Enabling Careers
                </span>
                <span className="hidden sm:inline text-slate-600" aria-hidden="true">·</span>
                <span className="text-emerald-400 text-xs">
                  Zone-2, MP Nagar, Bhopal
                </span>
              </div>

              {/* Main Headline */}
              <h1
                className="font-display font-extrabold text-[30px] sm:text-5xl lg:text-[56px] tracking-tight text-white leading-[1.09]"
                style={{ textWrap: 'balance' }}
              >
                The Most Trusted Name in{' '}
                <span className="text-gold-foil">
                  Central India
                </span>
              </h1>

              {/* Impact Description (Exact Client Copy in Glassmorphic Architectural Surface) */}
              <div className="rounded-2xl bg-white/[0.035] border border-white/10 p-4 sm:p-6 shadow-inner">
                <p className="text-slate-200 text-[13.5px] sm:text-[15.5px] lg:text-base leading-[1.7] font-normal">
                  With a legacy of serving <strong className="text-white font-semibold">15 Lakh+ students</strong> from schools to colleges, <strong className="text-amber-300 font-semibold">Knowledge Gurukul</strong> stands as a trusted name in education, career development, and professional training. Our expertise includes serving as <strong className="text-white font-semibold">Training &amp; Placement Officers</strong> for numerous Engineering and Management Colleges, being part of the <strong className="text-white font-semibold">Founder Teams of MBA Colleges</strong>, and successfully placing lakhs of students in their desired career paths. We are committed to shaping futures, empowering students, and building successful careers through quality education, industry-focused training, and dedicated placement support.
                </p>
              </div>
            </div>

            <div className="space-y-5 pt-1">
              {/* Primary & Secondary Action Buttons */}
              <div className="grid grid-cols-1 sm:flex sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => onBookSlotClick()}
                  className="min-h-[50px] inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gold-foil text-slate-950 font-display font-extrabold text-sm sm:text-base active:scale-[0.99] transition-all cursor-pointer whitespace-nowrap shrink-0"
                >
                  <i className="fa-regular fa-calendar-check"></i>
                  <span>Book Counselling Slot</span>
                </button>

                <button
                  type="button"
                  onClick={onExploreCollegesClick}
                  className="min-h-[50px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/15 hover:border-amber-400/40 font-display font-bold text-sm sm:text-base active:scale-[0.99] transition-all cursor-pointer whitespace-nowrap shrink-0"
                >
                  <i className="fa-solid fa-building-columns text-amber-400"></i>
                  <span>Explore Top Colleges</span>
                </button>
              </div>

              {/* Quick Course Selection Triggers (Swipeable on Mobile) */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-xs font-medium text-slate-400 mb-2.5 flex items-center justify-between">
                  <span>Direct Admission &amp; Career Guidance Streams:</span>
                  <span className="sm:hidden text-[11px] text-amber-300">Swipe →</span>
                </div>
                <div className="flex sm:flex-wrap overflow-x-auto no-scrollbar gap-2 pb-1">
                  {[
                    'Engineering (B.Tech / M.Tech)',
                    'MBA / PGDM / BBA',
                    'Medical / Nursing / B.Pharm',
                    'Law (BA LLB / BBA LLB)',
                    'Placement & Career Training',
                  ].map((stream) => (
                    <button
                      key={stream}
                      type="button"
                      onClick={() => onBookSlotClick(stream)}
                      className="shrink-0 min-h-[38px] text-xs font-semibold text-slate-200 hover:text-amber-300 bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-amber-400/40 px-3.5 py-1.5 rounded-xl transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {stream} →
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Resolution Campus Seminar / Auditorium Interaction Showcase */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative flex-1 flex flex-col justify-between rounded-3xl bg-[#0A1326]/95 border border-amber-400/25 p-3 sm:p-4 shadow-[0_24px_60px_rgba(0,0,0,0.65)]">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:flex-1 min-h-[250px] sm:min-h-[310px] w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10">
                {HERO_SLIDES.map((slide, index) => (
                  <div
                    key={slide.src}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <img
                      src={slide.src}
                      alt={slide.caption}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      fetchPriority={index === 0 ? 'high' : 'auto'}
                      decoding="async"
                      referrerPolicy="no-referrer"
                      style={{ objectPosition: slide.objectPosition }}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050A15] via-[#050A15]/30 to-transparent" />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 text-xs">
                      <span className="bg-[#050A15]/85 backdrop-blur-md text-amber-300 text-[11px] font-semibold px-3 py-1 rounded-lg border border-amber-400/30">
                        {slide.tag}
                      </span>
                      <span className="bg-[#050A15]/80 backdrop-blur-md text-slate-200 text-[11px] font-mono font-semibold px-2.5 py-1 rounded-lg border border-white/10 tabular-nums">
                        {index + 1} / {HERO_SLIDES.length}
                      </span>
                    </div>
                    <div className="absolute bottom-3.5 left-3.5 right-3.5">
                      <p className="text-xs sm:text-sm font-semibold text-white leading-snug drop-shadow">
                        {slide.caption}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Prev / Next Controls */}
                <button
                  type="button"
                  onClick={() =>
                    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
                  }
                  aria-label="Previous seminar photo"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#050A15]/80 hover:bg-[#050A15] text-white flex items-center justify-center border border-white/15 active:scale-95 transition-all cursor-pointer"
                >
                  <i className="fa-solid fa-chevron-left text-xs"></i>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                  aria-label="Next seminar photo"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#050A15]/80 hover:bg-[#050A15] text-white flex items-center justify-center border border-white/15 active:scale-95 transition-all cursor-pointer"
                >
                  <i className="fa-solid fa-chevron-right text-xs"></i>
                </button>
              </div>

              {/* Interactive Thumbnail Filmstrip */}
              <div className="mt-3 grid grid-cols-5 gap-2">
                {HERO_SLIDES.map((s, idx) => (
                  <button
                    key={s.src}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`Select slide ${idx + 1}`}
                    className={`relative aspect-[4/3] rounded-xl overflow-hidden border transition-all cursor-pointer ${
                      idx === activeSlide
                        ? 'border-amber-400 ring-2 ring-amber-400/35 opacity-100'
                        : 'border-white/10 opacity-50 hover:opacity-85'
                    }`}
                  >
                    <img
                      src={s.src}
                      alt={s.tag}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      style={{ objectPosition: s.objectPosition }}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Bottom Consultation Callout Strip */}
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between gap-2.5 px-1">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
                    <i className="fa-solid fa-location-dot text-sm"></i>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white truncate">
                      Zone-2, MP Nagar, Bhopal Headquarters
                    </div>
                    <div className="text-[11px] text-slate-400 truncate">
                      ISO 9001:2015 (QMP202604878) · MSME Verified
                    </div>
                  </div>
                </div>
                <a
                  href="#campus-drives"
                  className="text-xs font-bold text-amber-300 hover:text-amber-200 shrink-0 transition-colors whitespace-nowrap"
                >
                  Full Gallery →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Key Stats Badges Row Beneath Hero Split */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {KEY_STATS_BADGES.map((stat) => (
            <div
              key={stat.badge}
              className="card-luxury bg-[#0A1326]/90 backdrop-blur-md border border-white/10 hover:border-amber-400/45 rounded-2xl p-3.5 sm:p-5 flex flex-col justify-between gap-2.5 shadow-lg"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="font-display font-extrabold text-sm sm:text-xl text-gold-foil tracking-tight tabular-nums">
                  [ {stat.badge} ]
                </div>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-400/10 border border-amber-400/25 text-amber-300 flex items-center justify-center shrink-0">
                  <i className={`${stat.icon} text-xs sm:text-sm`}></i>
                </div>
              </div>
              <div>
                <div className="text-xs sm:text-sm text-white font-semibold leading-snug">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">
                  {stat.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
