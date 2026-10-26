import React, { useState } from 'react';

interface GalleryItem {
  id: string;
  image: string;
  category: 'Seminars' | 'Admissions & Medical' | 'Campus & Exams' | 'Alumni & Mentorship';
  title: string;
  location: string;
  caption: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    image: '/assets/aistudio/IMG-20261025-WA0045_61445018.jpg',
    category: 'Seminars',
    title: 'Netritva Vikas Youth Leadership & Career Conclave',
    location: 'Bhopal Auditorium · Madhya Pradesh',
    caption: 'State-level youth career guidance seminar and auditorium address empowering hundreds of college aspirants.',
  },
  {
    id: 'gal-2',
    image: '/assets/aistudio/IMG-20261025-WA0046_7cf2ce13.jpg',
    category: 'Admissions & Medical',
    title: 'Medical, Nursing & Allied Healthcare Clinical Batch',
    location: 'Partner Teaching Hospital · Bhopal',
    caption: 'Students placed in top B.Sc Nursing and Paramedical colleges during hands-on clinical training.',
  },
  {
    id: 'gal-3',
    image: '/assets/aistudio/IMG-20261025-WA0047_8503b241.jpg',
    category: 'Seminars',
    title: 'Swaraj Express SMBC 24x7 Career Seminar Panel',
    location: 'Sri Sathya Sai College, BHEL Bhopal',
    caption: 'Expert academic panelists guiding students on higher education choices and competitive examinations.',
  },
  {
    id: 'gal-4',
    image: '/assets/aistudio/IMG-20261025-WA0051_379e4451.jpg',
    category: 'Campus & Exams',
    title: 'State-Level Scholarship & Aptitude Assessment Drive',
    location: 'Institutional Test Center · MP',
    caption: 'Hundreds of school and college students appearing for merit scholarship and stream aptitude evaluation.',
  },
  {
    id: 'gal-5',
    image: '/assets/aistudio/IMG-20261025-WA0049_38982242.jpg',
    category: 'Seminars',
    title: 'Engineering & Management Career Orientation Seminar',
    location: 'Bhopal Campus Hall',
    caption: 'Interactive session on B.Tech & MBA specialization trends, corporate internships, and campus placements.',
  },
  {
    id: 'gal-6',
    image: '/assets/aistudio/IMG-20261025-WA0048_7dd3bf1f.jpg',
    category: 'Alumni & Mentorship',
    title: 'Annual Alumni Meet & Placed Students Felicitation',
    location: 'Knowledge Gurukul Center · Bhopal',
    caption: 'Celebrating academic excellence and career milestones with our alumni network and faculty mentors.',
  },
  {
    id: 'gal-7',
    image: '/assets/aistudio/IMG-20261025-WA0052_04009bd9.jpg',
    category: 'Seminars',
    title: 'Higher Education & Women’s Career Empowerment Workshop',
    location: 'Degree College Auditorium · Bhopal',
    caption: 'Counseling undergraduate students on scholarship schemes, PG admissions, and corporate readiness.',
  },
  {
    id: 'gal-8',
    image: '/assets/aistudio/IMG-20261025-WA0053_b989acae.jpg',
    category: 'Admissions & Medical',
    title: '1-on-1 Student Mentorship & College Selection',
    location: 'Counseling Desk · Bhopal',
    caption: 'Direct interaction with college students to map out career goals and university admission pathways.',
  },
  {
    id: 'gal-9',
    image: '/assets/aistudio/IMG-20261025-WA0050_13fd7cab.jpg',
    category: 'Alumni & Mentorship',
    title: 'Teachers’ Day Academic Batch & Faculty Mentors',
    location: 'Knowledge Gurukul Bhopal',
    caption: 'Dedicated faculty and career mentors with students during academic celebration at our Bhopal center.',
  },
  {
    id: 'gal-10',
    image: '/assets/aistudio/IMG-20261025-WA0054_96f269d5.jpg',
    category: 'Campus & Exams',
    title: 'Pre-Placement & Aptitude Training Classroom',
    location: 'Training Wing · Bhopal',
    caption: 'Structured classroom sessions preparing students for university entrance tests and MNC interviews.',
  },
  {
    id: 'gal-11',
    image: '/assets/aistudio/IMG-20261025-WA0055_e6316da9.jpg',
    category: 'Alumni & Mentorship',
    title: 'Student Counseling & Academic Celebration Moments',
    location: 'MP Nagar Center · Bhopal',
    caption: 'Snapshots from student mentorship workshops, faculty felicitation, and batch celebrations.',
  },
  {
    id: 'gal-12',
    image: 'campus-drive-cedmap.jpg',
    category: 'Campus & Exams',
    title: 'CEDMAP Mega Campus Recruitment & Placement Drive',
    location: 'MP Nagar, Bhopal',
    caption: 'On-ground placement drive connecting trained graduates with leading corporate employers.',
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
  const [selectedCategory, setSelectedCategory] = useState<(typeof CATEGORIES)[number]>('All Events');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    selectedCategory === 'All Events'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="campus-drives" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Category Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-blue-900 mb-2">
              Real On-Ground Impact · Knowledge Gurukul Bhopal
            </div>
            <h2
              className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Our Seminars, College Drives &amp; Student Achievements
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
              Authentic moments from our career seminars, college admission counseling camps, scholarship exams, clinical batches, and campus placement drives across Madhya Pradesh.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-slate-200/80 p-1.5 rounded-xl self-start lg:self-auto">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-slate-900 text-amber-400 shadow-2xs'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Photo Proof Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-slate-300 transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-4/3 bg-slate-900 overflow-hidden border-b border-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-3">
                    <span className="bg-white/95 text-slate-900 text-[11px] font-bold px-2.5 py-1 rounded-lg">
                      <i className="fa-solid fa-expand mr-1"></i> Full View
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="text-[11px] font-semibold text-slate-500">
                    {item.category} · {item.location}
                  </div>
                  <h3 className="font-display font-bold text-sm text-slate-900 mt-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-4 flex items-center justify-center"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-3.5 border-b border-slate-800 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-amber-400">
                  {lightboxItem.category} · {lightboxItem.location}
                </div>
                <h3 className="font-display font-bold text-sm sm:text-base text-white">
                  {lightboxItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center cursor-pointer"
                aria-label="Close photo preview"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="p-4 bg-slate-950 flex items-center justify-center max-h-[75vh] overflow-auto">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                referrerPolicy="no-referrer"
                className="max-h-[68vh] w-auto object-contain rounded-lg"
              />
            </div>
            <div className="px-5 py-3.5 bg-slate-900 border-t border-slate-800 text-xs text-slate-300">
              {lightboxItem.caption}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
