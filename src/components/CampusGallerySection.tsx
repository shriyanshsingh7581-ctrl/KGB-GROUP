import React, { useState } from 'react';

interface GalleryItem {
  id: string;
  image: string;
  category: 'Seminars' | 'Admissions & Medical' | 'Campus & Exams' | 'Alumni & Mentorship';
  title: string;
  location: string;
  caption: string;
  objectPosition?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-new-1',
    image: '/assets/aistudio/IMG-20261026-WA0024_9f825f44.jpg',
    category: 'Seminars',
    title: 'Leadership & Career Development Address to Faculty & Students',
    location: 'College Auditorium · Bhopal, MP',
    caption:
      'Knowledge Gurukul leadership and Former T&P Officers addressing faculty members and college students on industry-focused training and career pathways.',
    objectPosition: 'center center',
  },
  {
    id: 'gal-new-2',
    image: '/assets/aistudio/IMG-20261026-WA0026_6a62f7b5.jpg',
    category: 'Campus & Exams',
    title: 'With Hon’ble Technical Education & Skill Minister at PMKVY Fair',
    location: 'PMKVY Skills Development Fair · MP',
    caption:
      'Delegation interaction with Hon’ble Technical Education & Skills Development Minister of Madhya Pradesh Shri Deepak Joshi ji at the PMKVY Skills Development Fair.',
    objectPosition: 'center 85%',
  },
  {
    id: 'gal-new-3',
    image: '/assets/aistudio/IMG-20261026-WA0025_338fadf7.jpg',
    category: 'Seminars',
    title: 'Career Counselling & Competitive Exam Seminar at Nutan College',
    location: 'Nutan College · Bhopal',
    caption:
      'Interactive seminar at Nutan College Bhopal guiding students on Competitive Exams (Bank, Railway, SSC), Speed Maths, and career placement preparation.',
    objectPosition: 'center 80%',
  },
  {
    id: 'gal-new-4',
    image: '/assets/aistudio/IMG-20261026-WA0023_80cfa9e3.jpg',
    category: 'Alumni & Mentorship',
    title: 'Student Mentorship Batch & Institutional Campus Visit',
    location: 'Knowledge Gurukul Network · MP',
    caption:
      'Mentors and students gathered during an institutional exposure visit and group mentorship program.',
    objectPosition: 'center center',
  },
  {
    id: 'gal-1',
    image: '/assets/aistudio/IMG-20261025-WA0045_61445018.jpg',
    category: 'Seminars',
    title: 'Netritva Vikas Youth Leadership & Career Conclave',
    location: 'Bhopal Auditorium · Madhya Pradesh',
    caption:
      'State-level youth career guidance seminar and auditorium address empowering hundreds of school-to-college aspirants.',
    objectPosition: 'center center',
  },
  {
    id: 'gal-2',
    image: '/assets/aistudio/IMG-20261025-WA0046_7cf2ce13.jpg',
    category: 'Admissions & Medical',
    title: 'Medical, Nursing & Allied Healthcare Clinical Batch',
    location: 'Partner Teaching Hospital · Bhopal',
    caption:
      'Students guided into top B.Sc Nursing and Paramedical colleges during hands-on clinical and hospital training.',
    objectPosition: 'center center',
  },
  {
    id: 'gal-3',
    image: '/assets/aistudio/IMG-20261025-WA0047_8503b241.jpg',
    category: 'Seminars',
    title: 'Swaraj Express SMBC 24x7 Career Seminar Panel',
    location: 'Sri Sathya Sai College, BHEL Bhopal',
    caption:
      'Expert academic panelists and T&P mentors guiding students on higher education choices and competitive examinations.',
    objectPosition: 'center center',
  },
  {
    id: 'gal-4',
    image: '/assets/aistudio/IMG-20261025-WA0051_379e4451.jpg',
    category: 'Campus & Exams',
    title: 'State-Level Scholarship & Aptitude Assessment Drive',
    location: 'Institutional Test Center · MP',
    caption:
      'Hundreds of school and college students appearing for merit scholarship and stream aptitude evaluation.',
    objectPosition: 'center center',
  },
  {
    id: 'gal-5',
    image: '/assets/aistudio/IMG-20261025-WA0049_38982242.jpg',
    category: 'Seminars',
    title: 'Engineering & Management Career Orientation Seminar',
    location: 'Bhopal Campus Hall',
    caption:
      'Interactive session on B.Tech & MBA specialization trends, corporate internships, and campus placements.',
    objectPosition: 'center center',
  },
  {
    id: 'gal-6',
    image: '/assets/aistudio/IMG-20261025-WA0048_7dd3bf1f.jpg',
    category: 'Alumni & Mentorship',
    title: 'Annual Alumni Meet & Placed Students Felicitation',
    location: 'Knowledge Gurukul Center · Bhopal',
    caption:
      'Celebrating academic excellence and career milestones with our alumni network and faculty mentors.',
    objectPosition: 'center center',
  },
  {
    id: 'gal-7',
    image: '/assets/aistudio/IMG-20261025-WA0052_04009bd9.jpg',
    category: 'Seminars',
    title: 'Higher Education & Women’s Career Empowerment Workshop',
    location: 'Degree College Auditorium · Bhopal',
    caption:
      'Counseling undergraduate students on scholarship schemes, PG admissions, and corporate readiness.',
    objectPosition: 'center center',
  },
  {
    id: 'gal-8',
    image: '/assets/aistudio/IMG-20261025-WA0053_b989acae.jpg',
    category: 'Admissions & Medical',
    title: '1-on-1 Student Mentorship & College Selection',
    location: 'Counseling Desk · Bhopal',
    caption:
      'Direct interaction with college students to map out career goals and university admission pathways.',
    objectPosition: 'center center',
  },
  {
    id: 'gal-9',
    image: '/assets/aistudio/IMG-20261025-WA0050_13fd7cab.jpg',
    category: 'Alumni & Mentorship',
    title: 'Teachers’ Day Academic Batch & Faculty Mentors',
    location: 'Knowledge Gurukul Bhopal',
    caption:
      'Dedicated faculty and career mentors with students during academic celebration at our Bhopal center.',
    objectPosition: 'center center',
  },
  {
    id: 'gal-10',
    image: '/assets/aistudio/IMG-20261025-WA0054_96f269d5.jpg',
    category: 'Campus & Exams',
    title: 'Pre-Placement & Aptitude Training Classroom',
    location: 'Training Wing · Bhopal',
    caption:
      'Structured classroom sessions preparing students for university entrance tests and MNC interviews.',
    objectPosition: 'center center',
  },
  {
    id: 'gal-11',
    image: '/assets/aistudio/IMG-20261025-WA0055_e6316da9.jpg',
    category: 'Alumni & Mentorship',
    title: 'Student Counseling & Academic Celebration Moments',
    location: 'MP Nagar Center · Bhopal',
    caption:
      'Snapshots from student mentorship workshops, faculty felicitation, and batch celebrations.',
    objectPosition: 'center center',
  },
  {
    id: 'gal-12',
    image: 'campus-drive-cedmap.jpg',
    category: 'Campus & Exams',
    title: 'CEDMAP Mega Campus Recruitment & Placement Drive',
    location: 'MP Nagar, Bhopal',
    caption:
      'On-ground placement drive connecting trained graduates with leading corporate employers.',
    objectPosition: 'center center',
  },
];

const CATEGORIES = [
  'All Events',
  'Seminars',
  'Admissions & Medical',
  'Campus & Exams',
  'Alumni & Mentorship',
] as const;

export const CampusGallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof CATEGORIES)[number]>('All Events');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === 'All Events'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const activeLightboxItem =
    lightboxIndex !== null && filteredItems[lightboxIndex] ? filteredItems[lightboxIndex] : null;

  return (
    <section
      id="campus-drives"
      className="py-14 sm:py-20 bg-[#FAF8F4] border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Header & Category Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-amber-700 mb-2">
              Real On-Ground Legacy · 15 Lakh+ Students Served
            </div>
            <h2
              className="font-display font-extrabold text-2xl sm:text-4xl text-slate-950 tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Moments of Mentorship &amp; Campus Drives
            </h2>
            <p className="text-slate-600 text-xs sm:text-base mt-2 leading-relaxed">
              Authentic moments from our auditorium seminars, ministerial skill fairs, college counseling camps, felicitation ceremonies, and campus placement drives across Central India.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex overflow-x-auto no-scrollbar gap-1.5 bg-white p-1.5 rounded-2xl border border-slate-200/90 shadow-2xs w-full lg:w-auto">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setSelectedCategory(category);
                  setLightboxIndex(null);
                }}
                className={`min-h-[38px] px-3.5 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-[#050A15] text-amber-300 shadow-xs'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Aesthetic Photo Showcase Grid (Featured Spotlight + 2-Column Mobile Grid) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-6">
          {filteredItems.map((item, idx) => {
            const isMobileSpotlight = idx === 0;
            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className={`card-luxury group rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 bg-white hover:border-amber-500/60 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isMobileSpotlight ? 'col-span-2 sm:col-span-1' : 'col-span-1'
                }`}
              >
                <div>
                  <div
                    className={`relative ${
                      isMobileSpotlight ? 'aspect-[16/10] sm:aspect-[4/3]' : 'aspect-[4/3]'
                    } bg-[#050A15] overflow-hidden border-b border-slate-100`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      style={{ objectPosition: item.objectPosition || 'center center' }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute bottom-2.5 right-2.5 sm:inset-0 sm:bg-linear-to-t sm:from-[#050A15]/80 sm:via-transparent sm:to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-end sm:p-3">
                      <span className="bg-[#050A15]/85 sm:bg-white/95 text-amber-300 sm:text-slate-950 text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-xs">
                        <i className="fa-solid fa-expand sm:mr-1"></i>
                        <span className="hidden sm:inline">Inspect</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-4">
                    <div className="text-[10px] sm:text-[11px] font-semibold text-amber-800 truncate">
                      {item.category} · {item.location}
                    </div>
                    <h3 className="font-display font-bold text-xs sm:text-sm text-slate-950 mt-1 leading-snug group-hover:text-amber-700 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p
                      className={`text-[11px] sm:text-xs text-slate-600 mt-1 leading-relaxed ${
                        isMobileSpotlight ? 'line-clamp-2' : 'hidden sm:line-clamp-2'
                      }`}
                    >
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
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
                  {activeLightboxItem.category} · {activeLightboxItem.location}
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
                className="max-h-[65vh] w-auto object-contain rounded-xl"
              />

              {/* Prev / Next Lightbox Controls */}
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
                  )
                }
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-[#050A15]/85 hover:bg-slate-800 text-white border border-white/15 flex items-center justify-center cursor-pointer"
              >
                <i className="fa-solid fa-chevron-left text-xs"></i>
              </button>
              <button
                type="button"
                onClick={() => setLightboxIndex((lightboxIndex + 1) % filteredItems.length)}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-[#050A15]/85 hover:bg-slate-800 text-white border border-white/15 flex items-center justify-center cursor-pointer"
              >
                <i className="fa-solid fa-chevron-right text-xs"></i>
              </button>
            </div>

            <div className="px-4 sm:px-5 py-3 bg-[#080F20] border-t border-white/10 flex items-center justify-between gap-3 text-xs text-slate-300">
              <p className="line-clamp-2">{activeLightboxItem.caption}</p>
              <span className="text-[11px] font-mono font-bold text-amber-300 shrink-0 tabular-nums">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
