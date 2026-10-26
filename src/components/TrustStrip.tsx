import React, { useState } from 'react';

export const TrustStrip: React.FC = () => {
  const [previewPhoto, setPreviewPhoto] = useState<{
    src: string;
    title: string;
    subtitle: string;
  } | null>(null);

  return (
    <section className="py-12 sm:py-18 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Real Speaking / Training Event Visual & Ministerial Recognition */}
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-4">
            <div
              onClick={() =>
                setPreviewPhoto({
                  src: '/assets/aistudio/IMG-20261026-WA0024_9f825f44.jpg',
                  title: 'Leadership & Institutional Mentorship',
                  subtitle:
                    'Knowledge Gurukul Leadership & Former T&P Officers Addressing College Faculty & Students',
                })
              }
              className="cursor-pointer relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900 group"
            >
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <img
                  src="/assets/aistudio/IMG-20261026-WA0024_9f825f44.jpg"
                  alt="Knowledge Gurukul Leadership Addressing College Faculty & Students"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-lg border border-white/15 flex items-center gap-1">
                  <i className="fa-solid fa-expand text-amber-400"></i> Tap to Enlarge
                </span>
              </div>
              <div className="bg-slate-950 text-white px-4 py-3.5 sm:px-5 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div>
                  <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    Leadership &amp; Institutional Mentorship
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-100 mt-0.5">
                    Addressing College Faculty &amp; Students on Career Pathways &amp; Placements
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-extrabold text-slate-950 bg-amber-400 px-3 py-1 rounded-lg shrink-0 self-start sm:self-center">
                  <i className="fa-solid fa-award"></i> 15 Lakh+ Guided
                </span>
              </div>
            </div>

            {/* Secondary Supporting Real Proof Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div
                onClick={() =>
                  setPreviewPhoto({
                    src: '/assets/aistudio/IMG-20261026-WA0026_6a62f7b5.jpg',
                    title: 'Govt. Skill & Placement Initiatives',
                    subtitle:
                      'With Hon’ble Technical Education & Skill Development Minister of MP Shri Deepak Joshi ji at PMKVY Fair',
                  })
                }
                className="cursor-pointer rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-400 bg-slate-50/90 hover:bg-white transition-all flex items-center gap-3.5 p-3 shadow-2xs"
              >
                <img
                  src="/assets/aistudio/IMG-20261026-WA0026_6a62f7b5.jpg"
                  alt="With Hon'ble Technical Education & Skill Development Minister at PMKVY Fair"
                  style={{ objectPosition: 'center 85%' }}
                  className="w-20 h-16 rounded-xl object-cover shrink-0 border border-slate-200"
                />
                <div className="min-w-0">
                  <div className="text-[11px] font-extrabold text-blue-900 flex items-center gap-1">
                    <span>Govt. Skill Initiatives</span>
                    <i className="fa-solid fa-magnifying-glass-plus text-[10px] text-amber-600"></i>
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-snug mt-0.5">
                    With Hon’ble Technical Education &amp; Skill Minister at PMKVY Fair
                  </p>
                </div>
              </div>

              <div
                onClick={() =>
                  setPreviewPhoto({
                    src: '/assets/aistudio/IMG-20261026-WA0025_338fadf7.jpg',
                    title: 'Campus Seminars Across MP',
                    subtitle:
                      'Career Counselling & Competitive Exam Seminar at Nutan College, Bhopal',
                  })
                }
                className="cursor-pointer rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-400 bg-slate-50/90 hover:bg-white transition-all flex items-center gap-3.5 p-3 shadow-2xs"
              >
                <img
                  src="/assets/aistudio/IMG-20261026-WA0025_338fadf7.jpg"
                  alt="Nutan College Bhopal Career Counselling Seminar"
                  style={{ objectPosition: 'center 80%' }}
                  className="w-20 h-16 rounded-xl object-cover shrink-0 border border-slate-200"
                />
                <div className="min-w-0">
                  <div className="text-[11px] font-extrabold text-emerald-700 flex items-center gap-1">
                    <span>Campus Seminars Across MP</span>
                    <i className="fa-solid fa-magnifying-glass-plus text-[10px] text-emerald-600"></i>
                  </div>
                  <p className="text-xs text-slate-700 font-medium leading-snug mt-0.5">
                    Career &amp; Competitive Exam Seminars at Nutan College &amp; Universities
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Leadership Credibility Description & Core Pillars */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-blue-950 bg-amber-50 border border-amber-300/80 px-3.5 py-1.5 rounded-xl">
              <i className="fa-solid fa-user-tie text-amber-600"></i>
              <span>Leadership &amp; Institutional Pedigree · Bhopal, MP</span>
            </div>

            <h2
              className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Led by Former T&amp;P Officers &amp; MBA College Founder Team Members
            </h2>

            <p className="text-slate-700 text-xs sm:text-base leading-relaxed">
              With a legacy of serving <strong>15 Lakh+ students</strong> from schools to colleges, <strong>Knowledge Gurukul (KGB Group)</strong> stands as Central India’s most trusted name in education, career development, and professional training.
            </p>

            <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
              Unlike ordinary admission agents, our leadership brings direct inside experience as <strong>Training &amp; Placement Officers (T&amp;P) for numerous Engineering and Management Colleges</strong> and as key members of the <strong>Founder Teams of premier MBA Colleges</strong>—having successfully placed lakhs of students into top corporate and professional career paths.
            </p>

            {/* 4 Credibility Pillars (2x2 Grid on Mobile & Desktop) */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 pt-1">
              <div className="bg-slate-50 rounded-2xl border border-slate-200/90 border-t-2 border-t-blue-900 p-3.5 sm:p-4">
                <div className="text-[10px] sm:text-xs font-extrabold text-blue-900 uppercase tracking-wide">
                  Former T&amp;P Officers
                </div>
                <div className="font-display font-bold text-xs sm:text-base text-slate-900 mt-1">
                  Engineering &amp; Management
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-relaxed">
                  First-hand corporate recruitment networks &amp; campus placement leadership.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl border border-slate-200/90 border-t-2 border-t-amber-500 p-3.5 sm:p-4">
                <div className="text-[10px] sm:text-xs font-extrabold text-amber-600 uppercase tracking-wide">
                  Founder Team
                </div>
                <div className="font-display font-bold text-xs sm:text-base text-slate-900 mt-1">
                  Premier MBA Colleges
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-relaxed">
                  Deep academic governance insight helping students choose top ROI colleges.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl border border-slate-200/90 border-t-2 border-t-emerald-600 p-3.5 sm:p-4">
                <div className="text-[10px] sm:text-xs font-extrabold text-emerald-700 uppercase tracking-wide">
                  ISO 9001:2015 Certified
                </div>
                <div className="font-display font-bold text-xs sm:text-base text-slate-900 mt-1">
                  Quality Consultancy
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-relaxed">
                  Cert: <span className="font-mono font-semibold">QMP202604878</span> · Audited counseling &amp; placements.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl border border-slate-200/90 border-t-2 border-t-blue-900 p-3.5 sm:p-4">
                <div className="text-[10px] sm:text-xs font-extrabold text-blue-900 uppercase tracking-wide">
                  Govt. of India MSME
                </div>
                <div className="font-display font-bold text-xs sm:text-base text-slate-900 mt-1">
                  Udyam Registered
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-relaxed">
                  Reg: <span className="font-mono font-semibold">UDYAM-MP-10-0162140</span> · Zone-2, MP Nagar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Preview Modal for Leadership Photos */}
      {previewPhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-4 flex items-center justify-center"
          onClick={() => setPreviewPhoto(null)}
        >
          <div
            className="max-w-3xl w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  {previewPhoto.title}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white truncate">
                  {previewPhoto.subtitle}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setPreviewPhoto(null)}
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center shrink-0 cursor-pointer"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="p-3 bg-slate-950 flex justify-center">
              <img
                src={previewPhoto.src}
                alt={previewPhoto.subtitle}
                className="max-h-[72vh] w-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
