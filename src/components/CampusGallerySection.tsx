import React, { useState } from 'react';

// ============================================================================
// DIRECT WHATSAPP & OFFICIAL CHANNEL LINKS CONFIGURATION
// Replace the URLs below with your custom WhatsApp inquiry link or Channel link
// ============================================================================
export const WHATSAPP_INQUIRY_URL =
  'https://wa.me/917987683263?text=Hello%20Knowledge%20Gurukul%20(KGB%20Group)%2C%20I%20would%20like%20to%20inquire%20about%20Job-Ready%20Training%2C%20Resume%20Building%2C%20and%20Direct%20Placement%20Drives.';

// Replace with your Official WhatsApp Channel invite link (e.g., https://whatsapp.com/channel/...)
export const WHATSAPP_CHANNEL_URL =
  'https://wa.me/917987683263?text=Hello%20Knowledge%20Gurukul%2C%20please%20share%20the%20Official%20WhatsApp%20Channel%20link%20for%20Daily%20Placement%20Alerts.';

export interface TrackRecordCard {
  id: string;
  image: string;
  fallbackImage: string;
  badge: string;
  title: string;
  description: string;
  objectPosition?: string;
}

// ============================================================================
// PHOTO GALLERY GRID (11 Real Event Cards with Titles, Category Badges & Descriptions)
// Replace `images/photo1.jpg` to `images/photo11.jpg` in `/public/images/` with your
// local image files anytime. Each card also has an automatic fallback to the
// uploaded high-resolution studio asset so images never break.
// ============================================================================
const TRACK_RECORD_CARDS: TrackRecordCard[] = [
  {
    id: 'card-1',
    // Replace local file at public/images/photo1.jpg
    image: 'images/photo1.jpg',
    fallbackImage: '/assets/aistudio/IMG-20261031-WA0024_ece77407.jpg',
    badge: 'Entrepreneurship & Career',
    title: 'Corporate Entrepreneurship Development Cell',
    description:
      'Interactive seminar guiding students on industry demands, self-development, and emerging career opportunities.',
    objectPosition: 'center top',
  },
  {
    id: 'card-2',
    // Replace local file at public/images/photo2.jpg
    image: 'images/photo2.jpg',
    fallbackImage: '/assets/aistudio/IMG-20261031-WA0026_d4a6bbf8.jpg',
    badge: 'Expert Career Panel',
    title: 'Career Seminar – Sabdhani Institute & Swaraj Express (SMBC 24x7)',
    description:
      'State-level career guidance seminar organized in association with leading media and education partners to mentor aspiring youth.',
    objectPosition: 'center center',
  },
  {
    id: 'card-3',
    // Replace local file at public/images/photo3.jpg
    image: 'images/photo3.jpg',
    fallbackImage: '/assets/aistudio/IMG-20261031-WA0022_a6fb8ac8.jpg',
    badge: 'Corporate Recruitment',
    title: 'Reliance Retail – Orientation & Screening',
    description:
      'Pre-placement classroom briefing and initial candidate screening session conducted for Reliance Retail hiring.',
    objectPosition: 'center center',
  },
  {
    id: 'card-4',
    // Replace local file at public/images/photo4.jpg
    image: 'images/photo4.jpg',
    fallbackImage: '/assets/aistudio/IMG-20261031-WA0023_df311f0a.jpg',
    badge: 'Training & Placement',
    title: 'Corporate College T&P Session',
    description:
      'Large-scale Training & Placement workshop focusing on communication skills, corporate etiquette, and interview readiness.',
    objectPosition: 'center center',
  },
  {
    id: 'card-5',
    // Replace local file at public/images/photo5.jpg
    image: 'images/photo5.jpg',
    fallbackImage: '/assets/aistudio/IMG-20261031-WA0021_791d44ac.jpg',
    badge: 'On-Campus Drive',
    title: 'Mittal College Placement Drive',
    description:
      'On-campus recruitment drive at Mittal Group of Institutes, Bhopal, connecting final-year students with top employers.',
    objectPosition: 'center center',
  },
  {
    id: 'card-6',
    // Replace local file at public/images/photo6.jpg
    image: 'images/photo6.jpg',
    fallbackImage: '/assets/aistudio/IMG-20261031-WA0025_e495c632.jpg',
    badge: 'Mega Placement Drive',
    title: 'Millennium College Placement Drive',
    description:
      'Mega campus placement drive at Millennium Group of Institutions providing direct interview opportunities to hundreds of graduates.',
    objectPosition: 'center center',
  },
  {
    id: 'card-7',
    // Replace local file at public/images/photo7.jpg
    image: 'images/photo7.jpg',
    fallbackImage: '/assets/aistudio/IMG-20261031-WA0028_1272acd9.jpg',
    badge: 'Institutional Tie-Up',
    title: 'Scope Engineering College, Bhopal',
    description:
      'Collaborative academic and placement meet with faculty members and selected students at Scope College of Engineering.',
    objectPosition: 'center center',
  },
  {
    id: 'card-8',
    // Replace local file at public/images/photo8.jpg
    image: 'images/photo8.jpg',
    fallbackImage: '/assets/aistudio/IMG-20261031-WA0027_9988de5f.jpg',
    badge: 'Mass Hiring Drive',
    title: 'Reliance Retail Mega Placement Drive',
    description:
      'Enthusiastic participation of college freshers and job seekers during our dedicated Reliance Retail recruitment drive.',
    objectPosition: 'center center',
  },
  {
    id: 'card-9',
    // Replace local file at public/images/photo9.jpg
    image: 'images/photo9.jpg',
    fallbackImage: '/assets/aistudio/IMG-20261031-WA0020_01a4561e.jpg',
    badge: 'Career Counselling',
    title: 'Placement Drive & Career Counselling Workshop',
    description:
      'Dedicated counselling and resume-building workshop helping candidates choose the right career path and crack corporate interviews.',
    objectPosition: 'center center',
  },
  {
    id: 'card-10',
    // Replace local file at public/images/photo10.jpg
    image: 'images/photo10.jpg',
    fallbackImage: '/assets/aistudio/IMG-20261031-WA0029_a9523f8d.jpg',
    badge: 'Skill Training',
    title: 'Reliance Retail – Onboarding & Skill Training',
    description:
      'Hands-on induction and customer relationship training session for newly selected candidates prior to job deployment.',
    objectPosition: 'center center',
  },
  {
    id: 'card-11',
    // Replace local file at public/images/photo11.jpg
    image: 'images/photo11.jpg',
    fallbackImage: '/assets/aistudio/IMG-20261025-WA0045_61445018.jpg',
    badge: 'Student Grooming',
    title: 'Campus Pre-Placement & Grooming Seminar',
    description:
      'Intensive auditorium session designed to eliminate interview fear and transform college students into job-ready professionals.',
    objectPosition: 'center center',
  },
];

// Additional archive moments for visitors who click "View More Past Seminars & Archives"
const ADDITIONAL_ARCHIVE_CARDS: TrackRecordCard[] = [
  {
    id: 'arch-1',
    image: '/assets/aistudio/IMG-20261026-WA0024_9f825f44.jpg',
    fallbackImage: '/assets/aistudio/IMG-20261026-WA0024_9f825f44.jpg',
    badge: 'Leadership Address',
    title: 'Leadership & Career Development Address to Faculty & Students',
    description:
      'Knowledge Gurukul leadership and Former T&P Officers addressing faculty members and college students on industry-focused training and career pathways.',
  },
  {
    id: 'arch-2',
    image: '/assets/aistudio/IMG-20261026-WA0026_6a62f7b5.jpg',
    fallbackImage: '/assets/aistudio/IMG-20261026-WA0026_6a62f7b5.jpg',
    badge: 'Ministerial Skill Fair',
    title: 'With Hon’ble Technical Education & Skill Minister at PMKVY Fair',
    description:
      'Delegation interaction with Hon’ble Technical Education & Skills Development Minister of Madhya Pradesh Shri Deepak Joshi ji at the PMKVY Skills Development Fair.',
    objectPosition: 'center 85%',
  },
  {
    id: 'arch-3',
    image: '/assets/aistudio/IMG-20261026-WA0025_338fadf7.jpg',
    fallbackImage: '/assets/aistudio/IMG-20261026-WA0025_338fadf7.jpg',
    badge: 'Competitive Exams',
    title: 'Career Counselling & Competitive Exam Seminar at Nutan College',
    description:
      'Interactive seminar at Nutan College Bhopal guiding students on Competitive Exams (Bank, Railway, SSC), Speed Maths, and career placement preparation.',
    objectPosition: 'center 80%',
  },
  {
    id: 'arch-4',
    image: '/assets/aistudio/IMG-20261025-WA0046_7cf2ce13.jpg',
    fallbackImage: '/assets/aistudio/IMG-20261025-WA0046_7cf2ce13.jpg',
    badge: 'Admissions & Medical',
    title: 'Medical, Nursing & Allied Healthcare Clinical Batch',
    description:
      'Students guided into top B.Sc Nursing and Paramedical colleges during hands-on clinical and hospital training.',
  },
  {
    id: 'arch-5',
    image: '/assets/aistudio/IMG-20261025-WA0051_379e4451.jpg',
    fallbackImage: '/assets/aistudio/IMG-20261025-WA0051_379e4451.jpg',
    badge: 'Scholarship Drive',
    title: 'State-Level Scholarship & Aptitude Assessment Drive',
    description:
      'Hundreds of school and college students appearing for merit scholarship and stream aptitude evaluation.',
  },
  {
    id: 'arch-6',
    image: 'campus-drive-cedmap.jpg',
    fallbackImage: '/assets/aistudio/IMG-20261025-WA0048_7dd3bf1f.jpg',
    badge: 'CEDMAP Recruitment',
    title: 'CEDMAP Mega Campus Recruitment & Placement Drive',
    description:
      'On-ground placement drive in MP Nagar, Bhopal connecting trained graduates with leading corporate employers.',
  },
];

// ============================================================================
// "WE MAKE YOU JOB-READY" 3-COLUMN VALUE-PROPOSITION BAR ITEMS
// ============================================================================
const JOB_READY_PILLARS = [
  {
    icon: 'fa-solid fa-user-tie',
    title: 'Complete Job-Ready Training',
    description: 'Equipping freshers with practical corporate skills and confidence.',
    fullCopy:
      'Complete Job-Ready Training: Equipping freshers with practical corporate skills and confidence.',
  },
  {
    icon: 'fa-solid fa-file-signature',
    title: 'Professional Resume Building',
    description: 'Crafting industry-standard resumes that get shortlisted.',
    fullCopy:
      'Professional Resume Building: Crafting industry-standard resumes that get shortlisted.',
  },
  {
    icon: 'fa-solid fa-handshake-angle',
    title: 'Interview Prep & Direct Placement',
    description: 'Mock interviews, grooming sessions, and direct MNC/Corporate hiring drives.',
    fullCopy:
      'Interview Prep & Direct Placement: Mock interviews, grooming sessions, and direct MNC/Corporate hiring drives.',
  },
];

export const CampusGallerySection: React.FC = () => {
  const [showArchive, setShowArchive] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const displayedCards = showArchive
    ? [...TRACK_RECORD_CARDS, ...ADDITIONAL_ARCHIVE_CARDS]
    : TRACK_RECORD_CARDS;

  const activeLightboxItem =
    lightboxIndex !== null && displayedCards[lightboxIndex]
      ? displayedCards[lightboxIndex]
      : null;

  return (
    <section
      id="campus-drives"
      aria-labelledby="track-record-heading"
      className="py-14 sm:py-20 bg-[#FAF8F4] border-b border-slate-200/90 relative overflow-hidden"
    >
      {/* Subtle Top Gold Accent Hairline */}
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* ================================================================
            1. SECTION HEADER: "Our Proven Placement & Training Track Record"
            ================================================================ */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-800 bg-amber-500/12 border border-amber-500/30 px-3 py-1 rounded-lg mb-3">
              <i className="fa-solid fa-circle-check text-amber-600"></i>
              <span>Verified On-Ground Proof · 15 Lakh+ Students Guided &amp; Placed</span>
            </div>
            <h2
              id="track-record-heading"
              className="font-display font-extrabold text-2xl sm:text-4xl lg:text-[40px] text-slate-950 tracking-tight leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Our Proven Placement &amp; Training Track Record
            </h2>
            <p className="text-slate-600 text-xs sm:text-base mt-2.5 leading-relaxed max-w-2xl">
              Real proof of our past campus drives, corporate recruitment tie-ups, and intensive student grooming sessions across premier engineering, management, and degree colleges in Central India.
            </p>
          </div>

          {/* Direct Quick Action in Section Header */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href={WHATSAPP_INQUIRY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-95"
            >
              <i className="fa-brands fa-whatsapp text-base"></i>
              <span>Instant Placement &amp; Training Inquiry</span>
            </a>
          </div>
        </div>

        {/* ================================================================
            2. "WE MAKE YOU JOB-READY" HIGHLIGHT BANNER (3-Column Value Bar)
            ================================================================ */}
        <div className="mb-10 sm:mb-12 rounded-2xl sm:rounded-3xl bg-[#050A15] text-white border border-amber-400/30 shadow-[0_20px_50px_rgba(5,10,21,0.16)] overflow-hidden">
          <div className="px-4 sm:px-7 py-3.5 bg-linear-to-r from-amber-500/20 via-amber-400/10 to-transparent border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <span className="font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase text-amber-300">
                WE MAKE YOU JOB-READY
              </span>
            </div>
            <span className="text-[11px] sm:text-xs font-medium text-slate-300">
              End-to-End Student Grooming, Resume Shortlisting &amp; Direct Corporate Interviews
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {JOB_READY_PILLARS.map((pillar, index) => (
              <div
                key={pillar.title}
                className="p-4 sm:p-6 flex items-start gap-3.5 sm:gap-4 hover:bg-white/[0.03] transition-colors"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-amber-400/15 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0 shadow-inner">
                  <i className={`${pillar.icon} text-base sm:text-lg`}></i>
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-amber-400/90 font-semibold">
                    0{index + 1} · Core Student Service
                  </div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-white mt-0.5 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================================================================
            3. PHOTO GALLERY GRID (11 Real Event Cards with Titles, Category Badges & Descriptions)
            ================================================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {displayedCards.map((item, idx) => (
            <article
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/95 bg-white hover:border-amber-500/70 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Card Image Container with smooth hover-zoom effect */}
                <div className="relative aspect-[16/10] bg-[#050A15] overflow-hidden border-b border-slate-100">
                  <img
                    src={item.image}
                    alt={`${item.title} - ${item.badge} | Knowledge Gurukul (KGB Group)`}
                    loading={idx < 3 ? 'eager' : 'lazy'}
                    decoding="async"
                    referrerPolicy="no-referrer"
                    style={{ objectPosition: item.objectPosition || 'center center' }}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== window.location.origin + item.fallbackImage) {
                        target.src = item.fallbackImage;
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Subtle dark gradient vignette for badge contrast */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#050A15]/75 via-transparent to-[#050A15]/25 pointer-events-none" />

                  {/* Category Badge on Top-Left */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#050A15]/90 backdrop-blur-md border border-amber-400/40 text-amber-300 text-[11px] font-display font-bold tracking-wide shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      {item.badge}
                    </span>
                  </div>

                  {/* Zoom / Inspect indicator on Bottom-Right */}
                  <div className="absolute bottom-3 right-3 z-10">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 text-slate-950 text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm group-hover:bg-amber-400 transition-colors">
                      <i className="fa-solid fa-magnifying-glass-plus text-[10px]"></i>
                      <span>View Photo</span>
                    </span>
                  </div>
                </div>

                {/* Card Copy: Title & Description */}
                <div className="p-4 sm:p-5">
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-950 leading-snug group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Subtle Footer Bar inside Card */}
              <div className="px-4 sm:px-5 py-2.5 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                <span>Knowledge Gurukul · Track Record</span>
                <span className="text-amber-700 font-bold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                  <span>Enlarge</span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Optional Toggle for Additional Past Seminars & ministerial photos */}
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setShowArchive(!showArchive)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-bold transition-colors cursor-pointer shadow-2xs"
          >
            <i className={`fa-solid ${showArchive ? 'fa-chevron-up' : 'fa-images'} text-amber-600`}></i>
            <span>
              {showArchive
                ? 'Show Core 11 Placement & Training Highlights'
                : 'View +6 Additional Ministerial & Campus Archive Photos'}
            </span>
          </button>
        </div>

        {/* ================================================================
            4. DIRECT WHATSAPP & CHANNEL CTAs (High-Conversion Focus Below Gallery)
            ================================================================ */}
        <div className="mt-10 sm:mt-12 rounded-2xl sm:rounded-3xl bg-linear-to-br from-[#050A15] via-[#0B1528] to-[#050A15] border border-amber-400/35 p-5 sm:p-8 lg:p-10 text-white shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 bg-emerald-500/15 border border-emerald-400/30 px-3 py-1 rounded-lg mb-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Direct Placement Cell &amp; Training Helpline</span>
              </div>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
                Ready to Launch Your Career or Host a Campus Placement Drive?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                Connect directly with our Training &amp; Placement Officers on WhatsApp for job-ready training, resume building, upcoming corporate interview schedules, or join our official WhatsApp channel for daily placement alerts.
              </p>
            </div>

            {/* Dual High-Conversion WhatsApp CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3 shrink-0">
              {/* Primary CTA Button: Chat on WhatsApp for Instant Job & Training Inquiry */}
              <a
                href={WHATSAPP_INQUIRY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[50px] px-5 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-display font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-lg hover:shadow-emerald-500/25 transition-all active:scale-95"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                <span>Chat on WhatsApp for Instant Job &amp; Training Inquiry</span>
              </a>

              {/* Secondary Prominent CTA Button: Join Official WhatsApp Channel for Daily Placement Alerts */}
              <a
                href={WHATSAPP_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[50px] px-5 py-3.5 rounded-xl bg-gold-foil text-slate-950 font-display font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-lg transition-all active:scale-95"
              >
                <i className="fa-solid fa-bullhorn text-sm"></i>
                <span>Join Official WhatsApp Channel for Daily Placement Alerts</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Screen Lightbox Modal with Prev/Next Navigation */}
      {activeLightboxItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/92 backdrop-blur-md p-3 sm:p-4 flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="max-w-4xl w-full bg-[#080F20] border border-white/15 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 sm:px-5 py-3.5 border-b border-white/10 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[11px] font-semibold text-amber-300 truncate">
                  {activeLightboxItem.badge}
                </div>
                <h3 className="font-display font-bold text-xs sm:text-base text-white truncate">
                  {activeLightboxItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 flex items-center justify-center shrink-0 cursor-pointer"
                aria-label="Close photo preview"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="relative p-3 sm:p-4 bg-[#050A15] flex items-center justify-center max-h-[72vh] overflow-auto">
              <img
                src={activeLightboxItem.image}
                alt={activeLightboxItem.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (
                    target.src !==
                    window.location.origin + activeLightboxItem.fallbackImage
                  ) {
                    target.src = activeLightboxItem.fallbackImage;
                  }
                }}
                className="max-h-[65vh] w-auto object-contain rounded-xl"
              />

              {/* Prev / Next Lightbox Controls */}
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + displayedCards.length) % displayedCards.length
                  )
                }
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-[#050A15]/85 hover:bg-slate-800 text-white border border-white/15 flex items-center justify-center cursor-pointer"
              >
                <i className="fa-solid fa-chevron-left text-xs"></i>
              </button>
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((lightboxIndex + 1) % displayedCards.length)
                }
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-[#050A15]/85 hover:bg-slate-800 text-white border border-white/15 flex items-center justify-center cursor-pointer"
              >
                <i className="fa-solid fa-chevron-right text-xs"></i>
              </button>
            </div>

            <div className="px-4 sm:px-5 py-3 bg-[#080F20] border-t border-white/10 flex items-center justify-between gap-3 text-xs text-slate-300">
              <p className="line-clamp-2">{activeLightboxItem.description}</p>
              <span className="text-[11px] font-mono font-bold text-amber-300 shrink-0 tabular-nums">
                {lightboxIndex + 1} / {displayedCards.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
