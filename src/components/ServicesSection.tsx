import React, { useState } from 'react';

interface ServicesSectionProps {
  onSelectServiceForBooking: (targetCourseOrService: string) => void;
}

interface CoreServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  defaultCourseValue: string;
  ctaLabel: string;
  image: string;
}

const CORE_SERVICES: CoreServiceItem[] = [
  {
    number: '01.',
    title: 'Admission Guidance (Engineering, MBA, Medical, Law)',
    subtitle: 'MP DTE, JEE, NEET, CLAT & Direct Merit-Based College Admissions',
    description:
      'End-to-end admission counseling for 12th Pass and Undergraduate students seeking seats in AICTE, UGC, INC, PCI, and BCI approved colleges across Bhopal, Indore, and pan-India.',
    highlights: [
      'B.Tech / B.E. (CS, AI & Data Science, Cyber Security, Civil, Mechanical, EC)',
      'MBA / PGDM (Marketing, Finance, HR, Business Analytics, International Business)',
      'MBBS, B.Sc Nursing, GNM, B.Pharm, D.Pharm, BPT & Paramedical Courses',
      'BA LLB, BBA LLB, LLB & Integrated Management Programs',
    ],
    defaultCourseValue: 'B.Tech / MBA / Medical / Law Admission Guidance',
    ctaLabel: 'Book Admission Counseling',
    image: '/assets/aistudio/IMG-20261025-WA0046_7cf2ce13.jpg',
  },
  {
    number: '02.',
    title: 'Career Counseling & Psychometric Assessment',
    subtitle: 'Scientific Aptitude Testing & 1-on-1 Roadmap with Senior Mentors',
    description:
      'Confused about which stream, specialization, or college fits your career goals and budget? Our certified counselors evaluate student strengths, academic scores, and future industry demand.',
    highlights: [
      'Individual psychometric & interest profiling for 10th, 12th & Graduate students',
      'Transparent college fee structure, NAAC accreditation & ROI comparison',
      'Parent-student joint counseling sessions (Online Video Call or Bhopal Office)',
      'Competitive exam strategy & backup college seat assurance',
    ],
    defaultCourseValue: 'Career Counseling & Psychometric Assessment',
    ctaLabel: 'Schedule Assessment Session',
    image: '/assets/aistudio/IMG-20261025-WA0047_8503b241.jpg',
  },
  {
    number: '03.',
    title: 'Direct College Placement Tie-ups & Training',
    subtitle: 'Guaranteed Placement Assistance, Corporate Readiness & Job Drives',
    description:
      'Because we partner directly with 150+ Engineering & Management institutions and corporate recruiters, our students receive continuous internship and final placement support.',
    highlights: [
      'Pre-placement aptitude, GD/PI & corporate communication training modules',
      'Mega on-campus & off-campus recruitment drives at CEDMAP & partner centers',
      'Verified Work-From-Home, Corporate MNC, IT & Banking placement opportunities',
      'Dedicated placement tracking from first semester until final job offer',
    ],
    defaultCourseValue: 'Direct College Placement Tie-ups & Training',
    ctaLabel: 'Book Placement Consultation',
    image: '/assets/aistudio/IMG-20261025-WA0049_38982242.jpg',
  },
  {
    number: '04.',
    title: 'Scholarship & Financial Guidance',
    subtitle: 'State & Central Govt. Scholarships + Hassle-Free Education Loan Support',
    description:
      'Never let financial constraints stop your higher education. Our dedicated scholarship desk handles complete documentation for state and central government schemes.',
    highlights: [
      'MP Post-Matric Scholarship for OBC, SC & ST students (Up to 100% tuition fee)',
      'Mukhyamantri Medhavi Vidyarthi Yojana (MMVY) & Gaon Ki Beti Yojana guidance',
      'Bihar Student Credit Card (DRCC) & National Scholarship Portal (NSP) support',
      'Complete bank education loan documentation (Bonafide, Fee Structure & Demand Letter)',
    ],
    defaultCourseValue: 'Scholarship & Financial Guidance (MMVY / Post-Matric / Loan)',
    ctaLabel: 'Check Scholarship Eligibility',
    image: '/assets/aistudio/IMG-20261025-WA0051_379e4451.jpg',
  },
];

const TOP_COLLEGES_STREAMS = [
  {
    stream: 'Engineering & Technology',
    courses: 'B.Tech (CS, AI/ML, Data Science, IT, ME, CE, EC), M.Tech,BCA, MCA, Polytechnic Diploma',
    colleges: 'Top RGPV Affiliated & Private Universities in Bhopal, Indore & Central India',
    feeRange: '₹45,000 – ₹1,40,000 / Year (Scholarship Available)',
    targetValue: 'B.Tech / Engineering Admission',
  },
  {
    stream: 'Management & Commerce',
    courses: 'MBA (Dual Specialization), PGDM, BBA, B.Com (Hons)',
    colleges: 'AICTE Approved & BU Affiliated Management Institutes with MNC Placement Track Record',
    feeRange: '₹40,000 – ₹1,60,000 / Year',
    targetValue: 'MBA / PGDM Management Admission',
  },
  {
    stream: 'Medical, Nursing & Pharmacy',
    courses: 'MBBS, BAMS, BHMS, B.Sc Nursing, GNM, B.Pharm, D.Pharm, BMLT, BPT',
    colleges: 'INC, MPMSU & PCI Approved Medical, Nursing & Pharmacy Colleges with 300+ Bed Hospitals',
    feeRange: 'Merit & Counseling Based (Govt. Scholarship Eligible)',
    targetValue: 'MBBS / Nursing / Pharmacy Admission',
  },
  {
    stream: 'Law, Education & Agriculture',
    courses: 'BA LLB (5 Yr), BBA LLB, LLB (3 Yr), LLM, B.Ed, M.Ed, B.Sc Agriculture (Hons)',
    colleges: 'BCI & NCTE Approved Top Colleges in Bhopal & Madhya Pradesh',
    feeRange: '₹30,000 – ₹85,000 / Year',
    targetValue: 'Law / B.Ed / B.Sc Agriculture Admission',
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
}) => {
  const [selectedStreamTab, setSelectedStreamTab] = useState<number>(0);

  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-blue-900 mb-2">
            Comprehensive Educational Consultancy Services · Zone-2, MP Nagar, Bhopal
          </div>
          <h2
            className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            End-to-End Academic, Admission &amp; Career Guidance
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            From choosing the right course after 12th or graduation to securing admission in top colleges, claiming government scholarships, and landing your first corporate placement—KGB Group guides you at every step.
          </p>
        </div>

        {/* 4 Core Services Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.number}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-slate-300 transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Top Visual Banner with Real Photo */}
                <div className="relative h-48 sm:h-52 bg-slate-900 overflow-hidden border-b border-slate-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/35 to-transparent flex items-end p-5">
                    <div>
                      <span className="font-mono text-xs font-bold text-amber-400">
                        {service.number} {service.subtitle}
                      </span>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white mt-0.5">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-slate-200/80 pt-4 text-xs sm:text-sm text-slate-700">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <i className="fa-solid fa-check text-amber-500 mt-1 text-xs shrink-0"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => onSelectServiceForBooking(service.defaultCourseValue)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-blue-950 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>{service.ctaLabel}</span>
                  <i className="fa-solid fa-arrow-right text-amber-400"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Top Colleges & Streams Sub-Section (#colleges) */}
        <div
          id="colleges"
          className="mt-14 rounded-2xl bg-slate-900 text-white p-6 sm:p-8 lg:p-10 border border-slate-800"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="text-xs font-semibold text-amber-400">
                2026–27 Admission Session Open · Direct Counseling Desk
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-1">
                Explore Top Courses &amp; Partner Colleges in Madhya Pradesh
              </h3>
            </div>

            {/* Interactive Stream Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
              {TOP_COLLEGES_STREAMS.map((item, idx) => (
                <button
                  key={item.stream}
                  type="button"
                  onClick={() => setSelectedStreamTab(idx)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    selectedStreamTab === idx
                      ? 'bg-amber-400 text-slate-950'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.stream}
                </button>
              ))}
            </div>
          </div>

          {/* Active Stream Details */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="text-xs font-semibold text-emerald-400">
                Verified Admission &amp; Placement Tie-Ups
              </div>
              <h4 className="font-display font-bold text-lg sm:text-xl text-white">
                {TOP_COLLEGES_STREAMS[selectedStreamTab].stream}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                <strong className="text-white">Popular Programs:</strong>{' '}
                {TOP_COLLEGES_STREAMS[selectedStreamTab].courses}
              </p>
              <p className="text-xs sm:text-sm text-slate-300">
                <strong className="text-white">Partner Institutions:</strong>{' '}
                {TOP_COLLEGES_STREAMS[selectedStreamTab].colleges}
              </p>
              <p className="text-xs sm:text-sm text-amber-300 font-semibold tabular-nums">
                Estimated Annual Fee Range: {TOP_COLLEGES_STREAMS[selectedStreamTab].feeRange}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                type="button"
                onClick={() =>
                  onSelectServiceForBooking(TOP_COLLEGES_STREAMS[selectedStreamTab].targetValue)
                }
                className="w-full py-3.5 px-5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm text-center transition-colors cursor-pointer"
              >
                Get College List &amp; Fee Structure →
              </button>
              <a
                href="https://wa.me/917987683263?text=Hello%20KGB%20Group%20(Knowledge%20Gurukul)%2C%20please%20share%20the%20top%20college%20list%20and%20fee%20structure%20for%20admission."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold text-xs sm:text-sm text-center transition-colors inline-flex items-center justify-center gap-2"
              >
                <i className="fa-brands fa-whatsapp text-emerald-400"></i>
                <span>Ask Counselor on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
