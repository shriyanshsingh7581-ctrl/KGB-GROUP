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
    icon: 'fa-solid fa-user-graduate',
  },
  {
    badge: 'Lakhs Placed',
    label: 'Direct Placement Track Record',
    icon: 'fa-solid fa-briefcase',
  },
  {
    badge: 'Former T&P Officers',
    label: 'Engineering & Management Colleges',
    icon: 'fa-solid fa-chalkboard-user',
  },
  {
    badge: 'Founder Team',
    label: 'Premier MBA Colleges Network',
    icon: 'fa-solid fa-building-columns',
  },
];

export const Hero: React.FC<HeroProps> = ({ onBookSlotClick, onExploreCollegesClick }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800/90"
    >
      {/* Executive Royal Navy & Academic Gold Ambient Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-95"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 15%, rgba(30, 58, 138, 0.6) 0%, transparent 52%), radial-gradient(circle at 85% 78%, rgba(217, 119, 6, 0.24) 0%, transparent 48%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-7 sm:py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-10 lg:gap-12 items-center">
          {/* Left Column: Exact Headline, Impact Description, CTAs & Key Stats Badges */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Eyebrow / Top Tag */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-amber-300 bg-amber-400/15 border border-amber-400/40 px-3 py-1.5 rounded-lg shadow-xs">
                KNOWLEDGE GURUKUL 🇮🇳
              </span>
              <span className="text-[11px] sm:text-xs text-slate-300 font-medium">
                ISO 9001:2015 · Govt. MSME · Zone-2, MP Nagar, Bhopal
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="font-display font-extrabold text-[28px] sm:text-5xl lg:text-[54px] tracking-tight text-white leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              The Most Trusted Name in{' '}
              <span className="bg-linear-to-r from-amber-300 via-amber-400 to-yellow-200 bg-clip-text text-transparent">
                Central India
              </span>
            </h1>

            {/* Impact Description (Exact Client Copy with Mobile Editorial Accent Border) */}
            <div className="pl-3.5 sm:pl-4 border-l-2 border-amber-400/70">
              <p className="text-slate-200 text-[13.5px] sm:text-base lg:text-[16.5px] leading-relaxed max-w-2xl font-normal">
                With a legacy of serving <strong className="text-white font-semibold">15 Lakh+ students</strong> from schools to colleges, <strong className="text-amber-300 font-semibold">Knowledge Gurukul</strong> stands as a trusted name in education, career development, and professional training. Our expertise includes serving as <strong className="text-white font-semibold">Training &amp; Placement Officers</strong> for numerous Engineering and Management Colleges, being part of the <strong className="text-white font-semibold">Founder Teams of MBA Colleges</strong>, and successfully placing lakhs of students in their desired career paths. We are committed to shaping futures, empowering students, and building successful careers through quality education, industry-focused training, and dedicated placement support.
              </p>
            </div>

            {/* Primary & Secondary Action Buttons (>= 48px touch hitboxes) */}
            <div className="grid grid-cols-1 sm:flex sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-0.5">
              <button
                type="button"
                onClick={() => onBookSlotClick()}
                className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-display font-extrabold text-sm sm:text-base shadow-lg shadow-amber-400/15 active:scale-[0.99] transition-all cursor-pointer"
              >
                <i className="fa-regular fa-calendar-check"></i>
                <span>Book Counselling Slot</span>
              </button>

              <button
                type="button"
                onClick={onExploreCollegesClick}
                className="min-h-[48px] inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-slate-900/95 hover:bg-slate-800 text-white border border-slate-700 font-display font-bold text-sm sm:text-base active:scale-[0.99] transition-all cursor-pointer"
              >
                <i className="fa-solid fa-building-columns text-amber-400"></i>
                <span>Explore Top Colleges</span>
              </button>
            </div>

            {/* Key Stats Badges — 2x2 Bento Grid on Mobile & Desktop */}
            <div className="pt-1 grid grid-cols-2 gap-2.5 sm:gap-3.5">
              {KEY_STATS_BADGES.map((stat) => (
                <div
                  key={stat.badge}
                  className="bg-slate-900/90 backdrop-blur-md border border-slate-800/90 hover:border-amber-400/50 rounded-2xl p-3 sm:p-3.5 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3.5 transition-colors shadow-sm"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0">
                    <i className={`${stat.icon} text-xs sm:text-base`}></i>
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-extrabold text-[13px] sm:text-base lg:text-lg text-amber-400 tracking-tight leading-snug">
                      [ {stat.badge} ]
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-300 font-medium leading-snug mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Course Selection Triggers (Swipeable on Mobile) */}
            <div className="pt-2 border-t border-slate-800/80">
              <div className="text-[11px] sm:text-xs font-semibold text-slate-400 mb-2 flex items-center justify-between">
                <span>Direct Admission &amp; Career Guidance For:</span>
                <span className="sm:hidden text-[10px] text-amber-400/80">Swipe →</span>
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
                    className="shrink-0 min-h-[38px] text-xs font-semibold text-slate-200 hover:text-amber-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 px-3.5 py-1.5 rounded-xl transition-colors cursor-pointer"
                  >
                    {stream} →
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: High-Resolution Campus Seminar / Auditorium Interaction Carousel */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-slate-900/95 border border-slate-800/90 p-2.5 sm:p-3.5 shadow-2xl">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-950">
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
                      style={{ objectPosition: slide.objectPosition }}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="inline-block bg-slate-950/85 backdrop-blur-md text-amber-300 text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-lg border border-amber-400/30">
                        {slide.tag}
                      </span>
                      <span className="bg-slate-950/75 backdrop-blur-md text-slate-200 text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/10 tabular-nums">
                        {index + 1} / {HERO_SLIDES.length}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <p className="text-xs sm:text-sm font-semibold text-white leading-snug drop-shadow">
                        {slide.caption}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Prev / Next Controls (>= 40px touch friendly) */}
                <button
                  type="button"
                  onClick={() =>
                    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
                  }
                  aria-label="Previous seminar photo"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-950/75 hover:bg-slate-950 text-white flex items-center justify-center border border-slate-700/80 active:scale-95 transition-all cursor-pointer"
                >
                  <i className="fa-solid fa-chevron-left text-xs"></i>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                  aria-label="Next seminar photo"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-950/75 hover:bg-slate-950 text-white flex items-center justify-center border border-slate-700/80 active:scale-95 transition-all cursor-pointer"
                >
                  <i className="fa-solid fa-chevron-right text-xs"></i>
                </button>
              </div>

              {/* Interactive Thumbnail Filmstrip for Instant Mobile Touch Preview */}
              <div className="mt-2.5 grid grid-cols-5 gap-1.5">
                {HERO_SLIDES.map((s, idx) => (
                  <button
                    key={s.src}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`Select slide ${idx + 1}`}
                    className={`relative aspect-[4/3] rounded-lg overflow-hidden border transition-all cursor-pointer ${
                      idx === activeSlide
                        ? 'border-amber-400 ring-2 ring-amber-400/40 opacity-100'
                        : 'border-slate-800 opacity-55 hover:opacity-90'
                    }`}
                  >
                    <img
                      src={s.src}
                      alt={s.tag}
                      style={{ objectPosition: s.objectPosition }}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Bottom Consultation Callout Strip */}
              <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between gap-2.5 px-1">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                    <i className="fa-solid fa-location-dot text-sm"></i>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white truncate">
                      Zone-2, MP Nagar, Bhopal Center
                    </div>
                    <div className="text-[11px] text-slate-400 truncate">
                      1-on-1 with Former T&amp;P Officers
                    </div>
                  </div>
                </div>
                <a
                  href="#campus-drives"
                  className="text-[11px] font-bold text-amber-400 hover:text-amber-300 shrink-0 transition-colors"
                >
                  Full Gallery →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
