import React, { useState } from 'react';

interface CertificateDetail {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  regNumberLabel: string;
  regNumber: string;
  imageSrc: string;
  fallbackSrc: string;
  issuedBy: string;
  validUntil: string;
  scopeOrActivity: string;
  highlights: { label: string; value: string }[];
}

const CERTIFICATES: CertificateDetail[] = [
  {
    id: 'iso-9001',
    badge: 'UKASL Accredited · TQC Quality Management',
    title: 'ISO 9001:2015 Certified',
    subtitle: 'Quality Management Systems Compliance',
    regNumberLabel: 'Certification No.',
    regNumber: 'QMP202604878',
    imageSrc: '/assets/aistudio/202604878_KNOWLEDGE_GURUKUL_BHOPAL__KGB__9001_TQC_page-0001_29febc48.jpg',
    fallbackSrc: '/assets/aistudio/202604878_KNOWLEDGE_GURUKUL_BHOPAL__KGB__9001_TQC_page-0001_29febc48.jpg',
    issuedBy: 'Target Quality Certifications (UKASL, UK)',
    validUntil: '18.04.2026 – 17.04.2029',
    scopeOrActivity:
      'Educational Institutions, Campus Program MBA & BBA Approved by AICTE & Affiliated by Barkatullah University Bhopal. Online Program - Private Universities Registered Under Section 2(F) UGC Act 1956 (Approved by UGC, AICTE, PCI, BCI, AIU).',
    highlights: [
      { label: 'Client ID', value: '202604878' },
      { label: 'Cert Number', value: 'QMP202604878' },
      { label: 'Issue Date', value: '18.04.2026' },
      { label: 'Expiry Date', value: '17.04.2029' },
    ],
  },
  {
    id: 'udyam-msme',
    badge: 'Govt. of India · Ministry of MSME',
    title: 'Udyam MSME Registration',
    subtitle: 'KNOWLEDGE GURUKUL BHOPAL (KGB)',
    regNumberLabel: 'Udyam Reg. No.',
    regNumber: 'UDYAM-MP-10-0162140',
    imageSrc: '/assets/aistudio/udyam_page-0001_bfca635d.jpg',
    fallbackSrc: '/assets/aistudio/udyam_page-0001_bfca635d.jpg',
    issuedBy: 'Ministry of Micro, Small and Medium Enterprises (Govt. of India)',
    validUntil: 'Incorporated: 02/01/2023 (Active)',
    scopeOrActivity:
      'Major Activity: SERVICES — NIC 85491 (Academic Tutoring Services), NIC 85499 (Other Educational Services), NIC 85500 (Educational Support Services). Registered at MP Nagar, Bhopal.',
    highlights: [
      { label: 'Udyam Number', value: 'UDYAM-MP-10-0162140' },
      { label: 'Enterprise Type', value: 'Micro (Services)' },
      { label: 'Incorporation', value: '02/01/2023' },
      { label: 'DIC Center', value: 'Bhopal (MP)' },
    ],
  },
];

export const CertificationsSection: React.FC = () => {
  const [previewCert, setPreviewCert] = useState<CertificateDetail | null>(null);

  return (
    <section
      id="certifications"
      className="scroll-mt-24 py-14 sm:py-20 bg-[#FAF8F4] border-b border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="text-xs font-bold text-amber-700 mb-2">
            100% Verified Legal &amp; Government Credentials
          </div>
          <h2
            className="font-display text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Official Accreditation &amp; Government Recognition
          </h2>
          <p className="mt-2.5 text-slate-600 text-xs sm:text-base leading-relaxed">
            Knowledge Gurukul Bhopal (KGB) operates with complete transparency under ISO 9001:2015 Quality Standards and Ministry of MSME (Govt. of India) registration. Select any certificate to inspect the original document.
          </p>
        </div>

        {/* 2-Column Certificate Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="card-luxury bg-white rounded-3xl border border-slate-200/90 hover:border-amber-500/60 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div className="p-5 sm:p-7">
                {/* Top Status Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100 text-xs">
                  <span className="font-bold text-amber-800">
                    {cert.badge}
                  </span>
                  <span className="font-bold text-emerald-700">
                    Verified Active
                  </span>
                </div>

                {/* Main Content Layout: Thumbnail + Metadata */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-start">
                  {/* Click-to-Preview Certificate Thumbnail */}
                  <div className="sm:col-span-5">
                    <button
                      type="button"
                      onClick={() => setPreviewCert(cert)}
                      className="cursor-pointer relative w-full aspect-[4/3] sm:aspect-[3/4] rounded-2xl overflow-hidden bg-[#050A15] border border-slate-200 group-hover:border-amber-400 shadow-sm transition-all block text-left"
                      aria-label={`View full ${cert.title} document`}
                    >
                      <img
                        src={cert.imageSrc}
                        alt={`${cert.title} - ${cert.regNumber} | Knowledge Gurukul Bhopal`}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050A15]/90 via-[#050A15]/20 to-transparent flex items-end p-3">
                        <span className="w-full py-2 px-3 rounded-xl bg-white/95 text-slate-950 font-display font-bold text-[11px] flex items-center justify-center gap-1.5 shadow-md">
                          <i className="fa-solid fa-magnifying-glass-plus text-amber-600"></i>
                          <span>Enlarge Certificate</span>
                        </span>
                      </div>
                    </button>
                  </div>

                  {/* Certificate Official Details */}
                  <div className="sm:col-span-7 space-y-3.5">
                    <div>
                      <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-950">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-medium text-slate-500">{cert.subtitle}</p>
                    </div>

                    {/* Registration Number Callout */}
                    <div className="p-3.5 rounded-2xl bg-[#FAF8F4] border border-slate-200/80">
                      <span className="text-[11px] font-semibold text-slate-500 block">
                        {cert.regNumberLabel}
                      </span>
                      <span className="font-mono font-extrabold text-sm sm:text-base text-slate-950 tracking-wide tabular-nums">
                        {cert.regNumber}
                      </span>
                    </div>

                    {/* 2x2 Key Metadata Grid */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {cert.highlights.map((h, i) => (
                        <div key={i} className="bg-[#FAF8F4] p-2.5 rounded-xl border border-slate-200/70">
                          <span className="text-[10px] text-slate-500 font-semibold block">{h.label}</span>
                          <span className="text-xs font-bold text-slate-900 tabular-nums">{h.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Approved Scope */}
                    <div className="pt-1">
                      <span className="text-[11px] font-bold text-slate-700 block mb-1">
                        Official Registered Scope:
                      </span>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        {cert.scopeOrActivity}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Bottom Bar */}
              <div className="px-5 sm:px-7 py-3.5 bg-[#FAF8F4] border-t border-slate-200/80 flex items-center justify-between gap-2">
                <span className="text-xs text-slate-500 font-medium truncate">
                  Zone-2, MP Nagar, Bhopal
                </span>
                <button
                  type="button"
                  onClick={() => setPreviewCert(cert)}
                  className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-slate-950 shrink-0 transition-colors"
                >
                  <i className="fa-solid fa-eye"></i>
                  <span>Inspect Document →</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Certificate Lightbox Modal */}
      {previewCert && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/88 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setPreviewCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={previewCert.title}
        >
          <div
            className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-4 bg-[#050A15] text-white flex items-center justify-between gap-3">
              <div className="min-w-0">
                <h4 className="font-display font-bold text-sm sm:text-base truncate">
                  {previewCert.title} ({previewCert.regNumber})
                </h4>
                <p className="text-[11px] text-amber-300 truncate">{previewCert.issuedBy}</p>
              </div>
              <button
                type="button"
                onClick={() => setPreviewCert(null)}
                className="cursor-pointer w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shrink-0"
                aria-label="Close certificate preview"
              >
                <i className="fa-solid fa-xmark text-base"></i>
              </button>
            </div>

            {/* Scrollable Certificate Image */}
            <div className="p-4 sm:p-6 overflow-y-auto bg-[#FAF8F4] flex-1 flex items-center justify-center">
              <img
                src={previewCert.imageSrc}
                alt={previewCert.title}
                referrerPolicy="no-referrer"
                className="max-w-full h-auto rounded-xl shadow-lg border border-slate-300"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3.5 bg-white border-t border-slate-200 flex items-center justify-between gap-2 text-xs">
              <span className="text-slate-600 font-semibold truncate">
                Knowledge Gurukul Bhopal (KGB) · Zone-2, MP Nagar, Bhopal
              </span>
              <button
                type="button"
                onClick={() => setPreviewCert(null)}
                className="cursor-pointer px-4 py-2 rounded-xl bg-[#050A15] text-white font-bold text-xs shrink-0"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
