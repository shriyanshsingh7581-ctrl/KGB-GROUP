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
  accentColor: 'amber' | 'blue';
}

const CERTIFICATES: CertificateDetail[] = [
  {
    id: 'iso-9001',
    badge: 'UKASL Accredited • TQC',
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
    accentColor: 'amber',
  },
  {
    id: 'udyam-msme',
    badge: 'Govt. of India • Ministry of MSME',
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
    accentColor: 'blue',
  },
];

export const CertificationsSection: React.FC = () => {
  const [previewCert, setPreviewCert] = useState<CertificateDetail | null>(null);

  return (
    <section
      id="certifications"
      className="scroll-mt-24 py-12 sm:py-16 lg:py-20 bg-white border-b border-slate-200 relative"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 font-bold text-[11px] sm:text-xs uppercase tracking-wider border border-amber-300 mb-2.5">
            <i className="fa-solid fa-shield-halved text-amber-600"></i>
            <span>100% Verified Legal &amp; Government Credentials</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Official Accreditation &amp; Government Recognition
          </h2>
          <p className="mt-2.5 text-slate-600 text-xs sm:text-base leading-relaxed">
            Knowledge Gurukul Bhopal (KGB) operates with complete transparency under ISO 9001:2015 Quality Standards and Ministry of MSME (Govt. of India) registration. Tap any certificate to inspect the original document.
          </p>
        </div>

        {/* 2-Column Certificate Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="bg-slate-50 rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div className="p-4 sm:p-6">
                {/* Top Status Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border ${
                      cert.accentColor === 'amber'
                        ? 'bg-amber-50 text-amber-800 border-amber-300'
                        : 'bg-blue-50 text-blue-800 border-blue-200'
                    }`}
                  >
                    <i
                      className={`fa-solid ${
                        cert.accentColor === 'amber' ? 'fa-award text-amber-600' : 'fa-landmark text-blue-600'
                      }`}
                    ></i>
                    <span>{cert.badge}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <i className="fa-solid fa-circle-check text-emerald-500"></i>
                    <span>Verified Active</span>
                  </span>
                </div>

                {/* Main Content Layout: Thumbnail + Metadata */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5 items-start">
                  {/* Click-to-Preview Certificate Thumbnail */}
                  <div className="sm:col-span-5">
                    <button
                      type="button"
                      onClick={() => setPreviewCert(cert)}
                      className="cursor-pointer relative w-full aspect-[4/3] sm:aspect-[3/4] rounded-2xl overflow-hidden bg-white border-2 border-slate-200 group-hover:border-amber-400 shadow-sm transition-all block text-left"
                      aria-label={`View full ${cert.title} document`}
                    >
                      <img
                        src={cert.imageSrc}
                        alt={`${cert.title} - ${cert.regNumber}`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/10 to-transparent flex items-end p-2.5 sm:p-3">
                        <span className="w-full py-2 px-3 rounded-xl bg-white/95 text-slate-900 font-extrabold text-[11px] flex items-center justify-center gap-1.5 shadow-md">
                          <i className="fa-solid fa-magnifying-glass-plus text-amber-600"></i>
                          <span>Tap to Enlarge Certificate</span>
                        </span>
                      </div>
                    </button>
                  </div>

                  {/* Certificate Official Details */}
                  <div className="sm:col-span-7 space-y-3">
                    <div>
                      <h3 className="font-display font-black text-lg sm:text-xl text-slate-900">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500">{cert.subtitle}</p>
                    </div>

                    {/* Registration Number Callout Box */}
                    <div className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        {cert.regNumberLabel}
                      </span>
                      <span className="font-mono font-black text-sm sm:text-base text-blue-950 tracking-wide">
                        {cert.regNumber}
                      </span>
                    </div>

                    {/* 2x2 Key Metadata Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      {cert.highlights.map((h, i) => (
                        <div key={i} className="bg-white p-2.5 rounded-xl border border-slate-200/80">
                          <span className="text-[10px] text-slate-400 font-semibold block">{h.label}</span>
                          <span className="text-xs font-bold text-slate-800">{h.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Approved Scope */}
                    <div className="p-3 rounded-xl bg-slate-100/90 border border-slate-200/70">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
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
              <div className="px-4 sm:px-6 py-3.5 bg-white border-t border-slate-200/80 flex items-center justify-between gap-2">
                <span className="text-[11px] text-slate-500 font-medium truncate">
                  <i className="fa-solid fa-location-dot text-amber-500 mr-1"></i>
                  Zone-2, MP Nagar, Bhopal
                </span>
                <button
                  type="button"
                  onClick={() => setPreviewCert(cert)}
                  className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-700 hover:text-blue-900 shrink-0"
                >
                  <i className="fa-solid fa-eye"></i>
                  <span>Inspect Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Certificate Lightbox Modal */}
      {previewCert && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
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
            <div className="px-4 sm:px-6 py-3.5 bg-slate-900 text-white flex items-center justify-between gap-3">
              <div className="min-w-0">
                <h4 className="font-display font-bold text-sm sm:text-base truncate">
                  {previewCert.title} ({previewCert.regNumber})
                </h4>
                <p className="text-[11px] text-amber-300 truncate">{previewCert.issuedBy}</p>
              </div>
              <button
                type="button"
                onClick={() => setPreviewCert(null)}
                className="cursor-pointer w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center shrink-0"
                aria-label="Close certificate preview"
              >
                <i className="fa-solid fa-xmark text-base"></i>
              </button>
            </div>

            {/* Scrollable Certificate Image */}
            <div className="p-3 sm:p-6 overflow-y-auto bg-slate-100 flex-1 flex items-center justify-center">
              <img
                src={previewCert.imageSrc}
                alt={previewCert.title}
                className="max-w-full h-auto rounded-xl shadow-lg border border-slate-300"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-4 sm:px-6 py-3 bg-white border-t border-slate-200 flex items-center justify-between gap-2 text-xs">
              <span className="text-slate-600 font-semibold truncate">
                Knowledge Gurukul Bhopal (KGB) &bull; Zone-2, MP Nagar, Bhopal
              </span>
              <button
                type="button"
                onClick={() => setPreviewCert(null)}
                className="cursor-pointer px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs shrink-0"
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
