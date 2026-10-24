import React, { useState } from 'react';

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  location: string;
  stats: string;
  imgPath: string;
  fallbackPath: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'campus-drive-cedmap',
    title: 'Mega Recruitment Drive at CEDMAP Center',
    subtitle: 'Hundreds of engineering & graduate candidates attending KGB Group mega placement drive at CEDMAP campus.',
    badge: 'CEDMAP Recruitment Drive',
    location: 'Bhopal, MP',
    stats: '450+ Candidates Screened',
    imgPath: 'campus-drive-cedmap.jpg',
    fallbackPath: '/assets/aistudio/IMG-20261024-WA0022_d60fc357.jpg',
  },
  {
    id: 'candidate-queue',
    title: 'Candidate Screening & Reception Queue',
    subtitle: 'Structured document verification, resume registration, and token allotment by Knowledge Gurukul coordinators.',
    badge: 'Registration & Verification',
    location: 'Zone 1, MP Nagar Center',
    stats: '100% Verified Profiles',
    imgPath: 'candidate-queue.jpg',
    fallbackPath: '/assets/aistudio/IMG-20261024-WA0021_503c800d.jpg',
  },
  {
    id: 'interview-hall',
    title: 'Formal Campus Interview & Panel Assessment',
    subtitle: 'Direct face-to-face HR panel interviews and aptitude assessments conducted in air-conditioned corporate halls.',
    badge: 'HR Panel Assessment',
    location: 'Central India Partner Campus',
    stats: 'On-Spot Offer Letters',
    imgPath: 'interview-hall.jpg',
    fallbackPath: '/assets/aistudio/IMG-20261024-WA0023_68054791.jpg',
  },
  {
    id: 'training-crowd',
    title: 'Orientation & Training Session',
    subtitle: 'Pre-placement career grooming, communication skills, and corporate readiness workshop for college students.',
    badge: 'Skill & Grooming Batch',
    location: 'Knowledge Gurukul Bhopal',
    stats: '1,00,000+ Trained & Placed',
    imgPath: 'training-crowd.jpg',
    fallbackPath: '/assets/aistudio/IMG-20261024-WA0020_b250fc32.jpg',
  },
];

export const CampusGallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="campus-drives" className="scroll-mt-24 py-12 sm:py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute -top-28 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-28 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 text-amber-300 font-bold text-[11px] sm:text-xs uppercase tracking-wider border border-amber-500/30 mb-3">
            <i className="fa-solid fa-camera-retro text-amber-400"></i>
            <span>Authentic Ground Reality &bull; Verified Drives</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
            Real Placement Drives &amp; Student Facilities in Central India
          </h2>
          <p className="mt-2.5 text-slate-300 text-xs sm:text-base leading-relaxed">
            Lakhs of candidates trained, verified, and placed across reputed organizations through our Bhopal headquarters and partner institutional centers.
          </p>
        </div>

        {/* 4-Column Dynamic Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group cursor-pointer bg-slate-800/90 rounded-2xl border border-slate-700/80 hover:border-amber-400/70 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Graceful Fallback */}
              <div className="relative h-56 sm:h-60 w-full bg-linear-to-br from-slate-800 via-slate-900 to-blue-950 overflow-hidden">
                <img
                  src={item.imgPath}
                  alt={item.title}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes(item.fallbackPath)) {
                      target.src = item.fallbackPath;
                    }
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/25 to-transparent"></div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/85 backdrop-blur-xs text-amber-300 text-[10px] font-bold border border-amber-400/30">
                    <i className="fa-solid fa-circle-check text-emerald-400"></i>
                    <span>{item.badge}</span>
                  </span>
                  <span className="w-7 h-7 rounded-lg bg-slate-950/75 text-white flex items-center justify-center text-xs opacity-85 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                    <i className="fa-solid fa-expand"></i>
                  </span>
                </div>

                {/* Bottom Location & Stats Overlay */}
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] text-slate-200 font-semibold">
                  <span className="inline-flex items-center gap-1">
                    <i className="fa-solid fa-location-dot text-amber-400"></i>
                    <span>{item.location}</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                    {item.stats}
                  </span>
                </div>
              </div>

              {/* Caption Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-slate-800/60">
                <div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-700/70 flex items-center justify-between text-[11px] text-amber-400 font-bold">
                  <span>Verified Drive Photo</span>
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>View Full</span>
                    <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight Banner */}
        <div className="mt-8 sm:mt-10 bg-slate-800/90 border border-slate-700 rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-400 flex items-center justify-center text-lg shrink-0">
              <i className="fa-solid fa-building-user"></i>
            </div>
            <div>
              <h4 className="font-display font-bold text-sm sm:text-base text-white">
                Walk-In Placement &amp; Counseling Desk — Bhopal Office
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Zone I, MP Nagar, Near Anand Namkeen, Bhopal - 462023 (MP) &bull; Mon–Sat: 10:00 AM to 6:30 PM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto shrink-0">
            <a
              href="tel:+917987683263"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs transition-all"
            >
              <i className="fa-solid fa-phone"></i>
              <span>+91 7987683263</span>
            </a>
            <a
              href="mailto:kgbbhopal01@gmail.com"
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs transition-all"
            >
              <i className="fa-solid fa-envelope text-amber-400"></i>
              <span>Email HR</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Gallery Photo */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 sm:px-6 py-3.5 bg-slate-950 flex items-center justify-between border-b border-slate-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                  {selectedPhoto.badge} &bull; {selectedPhoto.location}
                </span>
                <h3 className="font-display font-bold text-sm sm:text-base text-white">
                  {selectedPhoto.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="cursor-pointer w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center"
                aria-label="Close photo preview"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="p-3 sm:p-5 bg-slate-950 flex items-center justify-center max-h-[75vh] overflow-auto">
              <img
                src={selectedPhoto.imgPath}
                alt={selectedPhoto.title}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes(selectedPhoto.fallbackPath)) {
                    target.src = selectedPhoto.fallbackPath;
                  }
                }}
                className="max-h-[65vh] w-auto object-contain rounded-xl border border-slate-800"
              />
            </div>
            <div className="px-4 sm:px-6 py-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <span>{selectedPhoto.subtitle}</span>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="cursor-pointer px-3.5 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold shrink-0 ml-3"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
