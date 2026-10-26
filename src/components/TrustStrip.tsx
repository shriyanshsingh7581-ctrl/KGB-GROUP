import React, { useState } from 'react';

const REGULATORY_BODIES = [
  'AICTE Approved',
  'UGC Recognized',
  'RGPV Bhopal',
  'Barkatullah University',
  'MPMSU Medical',
  'INC & PNC Nursing',
  'PCI Pharmacy',
  'BCI Law',
  'ISO 9001:2015 Certified',
  'Govt. of India MSME',
];

export const TrustStrip: React.FC = () => {
  const [previewPhoto, setPreviewPhoto] = useState<{
    src: string;
    title: string;
    subtitle: string;
  } | null>(null);

  return (
    <section className="bg-[#FAF8F4] border-b border-slate-200/80">
      {/* Top Institutional Affiliation & Regulatory Strip */}
      <div className="bg-white border-b border-slate-200/80 py-3.5">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-2.5">
          <span className="text-[11px] font-bold text-slate-500 shrink-0">
            Counseling &amp; Admissions Across Approved Universities:
          </span>
          <div className="flex items-center gap-x-3 gap-y-1 overflow-x-auto no-scrollbar text-xs font-semibold text-slate-800 whitespace-nowrap">
            {REGULATORY_BODIES.map((body, idx) => (
              <React.Fragment key={body}>
                <span>{body}</span>
                {idx < REGULATORY_BODIES.length - 1 && (
                  <span className="text-amber-500 font-bold" aria-hidden="true">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main Executive Leadership Credibility Block */}
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-12 sm:py-18 lg:py-22">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Real Speaking / Training Event Visual & Ministerial Recognition */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div
              onClick={() =>
                setPreviewPhoto({
                  src: '/assets/aistudio/IMG-20261026-WA0024_9f825f44.jpg',
                  title: 'Leadership & Institutional Mentorship',
                  subtitle:
                    'Knowledge Gurukul Leadership & Former T&P Officers Addressing College Faculty & Students',
                })
              }
              className="card-luxury cursor-pointer relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-[#050A15] group flex-1 flex flex-col justify-between"
            >
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <img
                  src="/assets/aistudio/IMG-20261026-WA0024_9f825f44.jpg"
                  alt="Knowledge Gurukul Leadership Addressing College Faculty & Students"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A15] via-transparent to-transparent opacity-70" />
                <span className="absolute top-3.5 right-3.5 bg-[#050A15]/85 backdrop-blur-md text-amber-300 text-[11px] font-semibold px-3 py-1 rounded-xl border border-amber-400/30 flex items-center gap-1.5">
                  <i className="fa-solid fa-expand text-[10px]"></i> Inspect Photo
                </span>
              </div>
              <div className="bg-[#050A15] text-white px-5 py-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] font-semibold text-amber-300">
                    Leadership &amp; Institutional Mentorship · Bhopal
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                    Addressing College Faculty &amp; Students on Career Pathways &amp; Placements
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-amber-300 shrink-0 tabular-nums">
                  15 Lakh+ Guided
                </span>
              </div>
            </div>

            {/* Secondary Supporting Real Proof Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div
                onClick={() =>
                  setPreviewPhoto({
                    src: '/assets/aistudio/IMG-20261026-WA0026_6a62f7b5.jpg',
                    title: 'Govt. Skill & Placement Initiatives',
                    subtitle:
                      'With Hon’ble Technical Education & Skill Development Minister of MP Shri Deepak Joshi ji at PMKVY Fair',
                  })
                }
                className="card-luxury cursor-pointer rounded-2xl overflow-hidden border border-slate-200/90 hover:border-amber-500/60 bg-white transition-all flex items-center gap-3.5 p-3 shadow-xs"
              >
                <img
                  src="/assets/aistudio/IMG-20261026-WA0026_6a62f7b5.jpg"
                  alt="With Hon'ble Technical Education & Skill Development Minister at PMKVY Fair"
                  referrerPolicy="no-referrer"
                  style={{ objectPosition: 'center 85%' }}
                  className="w-20 h-16 rounded-xl object-cover shrink-0 border border-slate-200"
                />
                <div className="min-w-0">
                  <div className="text-[11px] font-bold text-slate-900 flex items-center justify-between gap-1">
                    <span>Govt. Skill Initiatives</span>
                    <i className="fa-solid fa-magnifying-glass-plus text-[10px] text-amber-600"></i>
                  </div>
                  <p className="text-xs text-slate-600 leading-snug mt-0.5">
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
                className="card-luxury cursor-pointer rounded-2xl overflow-hidden border border-slate-200/90 hover:border-amber-500/60 bg-white transition-all flex items-center gap-3.5 p-3 shadow-xs"
              >
                <img
                  src="/assets/aistudio/IMG-20261026-WA0025_338fadf7.jpg"
                  alt="Nutan College Bhopal Career Counselling Seminar"
                  referrerPolicy="no-referrer"
                  style={{ objectPosition: 'center 80%' }}
                  className="w-20 h-16 rounded-xl object-cover shrink-0 border border-slate-200"
                />
                <div className="min-w-0">
                  <div className="text-[11px] font-bold text-slate-900 flex items-center justify-between gap-1">
                    <span>Nutan College Seminar</span>
                    <i className="fa-solid fa-magnifying-glass-plus text-[10px] text-amber-600"></i>
                  </div>
                  <p className="text-xs text-slate-600 leading-snug mt-0.5">
                    Career &amp; Competitive Exam Seminars Across Top MP Colleges
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Leadership Credibility Description & Core Institutional Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="text-xs font-bold text-amber-700">
                Leadership &amp; Institutional Pedigree · Bhopal Headquarters
              </div>

              <h2
                className="font-display font-extrabold text-2xl sm:text-4xl text-slate-950 tracking-tight leading-[1.15]"
                style={{ textWrap: 'balance' }}
              >
                Led by Former T&amp;P Officers &amp; MBA College Founder Team Members
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                With a legacy of serving <strong className="text-slate-950">15 Lakh+ students</strong> from schools to colleges, <strong className="text-slate-950">Knowledge Gurukul (KGB Group)</strong> stands as Central India’s most trusted name in education, career development, and professional training.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Unlike ordinary admission agents, our leadership brings direct inside experience as <strong className="text-slate-900">Training &amp; Placement Officers (T&amp;P) for numerous Engineering and Management Colleges</strong> and as key members of the <strong className="text-slate-900">Founder Teams of premier MBA Colleges</strong>—having successfully placed lakhs of students into top corporate and professional career paths.
              </p>
            </div>

            {/* 4 Numbered Institutional Credibility Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="card-luxury bg-white rounded-2xl border border-slate-200/90 hover:border-amber-500/60 p-4 shadow-2xs">
                <div className="text-xs font-mono font-bold text-amber-700">
                  01. Former T&amp;P Officers
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-slate-950 mt-1">
                  Engineering &amp; Management Colleges
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  First-hand corporate recruitment networks &amp; campus placement leadership.
                </p>
              </div>

              <div className="card-luxury bg-white rounded-2xl border border-slate-200/90 hover:border-amber-500/60 p-4 shadow-2xs">
                <div className="text-xs font-mono font-bold text-amber-700">
                  02. Founder Team
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-slate-950 mt-1">
                  Premier MBA Colleges Network
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Deep academic governance insight helping students choose top ROI colleges.
                </p>
              </div>

              <div className="card-luxury bg-white rounded-2xl border border-slate-200/90 hover:border-amber-500/60 p-4 shadow-2xs">
                <div className="text-xs font-mono font-bold text-emerald-700">
                  03. ISO 9001:2015 Certified
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-slate-950 mt-1">
                  Quality Management System
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Cert: <span className="font-mono font-semibold text-slate-900">QMP202604878</span> · Audited counseling &amp; placements.
                </p>
              </div>

              <div className="card-luxury bg-white rounded-2xl border border-slate-200/90 hover:border-amber-500/60 p-4 shadow-2xs">
                <div className="text-xs font-mono font-bold text-blue-900">
                  04. Govt. of India MSME
                </div>
                <div className="font-display font-bold text-sm sm:text-base text-slate-950 mt-1">
                  Official Udyam Registration
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Reg: <span className="font-mono font-semibold text-slate-900">UDYAM-MP-10-0162140</span> · Zone-2, MP Nagar.
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
            className="max-w-3xl w-full bg-[#080F20] border border-white/15 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-3.5 border-b border-white/10 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[11px] font-semibold text-amber-300">
                  {previewPhoto.title}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white truncate">
                  {previewPhoto.subtitle}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setPreviewPhoto(null)}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shrink-0 cursor-pointer"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="p-4 bg-[#050A15] flex justify-center">
              <img
                src={previewPhoto.src}
                alt={previewPhoto.subtitle}
                referrerPolicy="no-referrer"
                className="max-h-[72vh] w-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
