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
    subtitle: 'MP DTE, JEE, NEET, CLAT & Direct Merit-Based Admissions',
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
    icon: 'fa-solid fa-microchip',
    courses: 'B.Tech (CS, AI/ML, Data Science, IT, ME, CE, EC), M.Tech, BCA, MCA, Polytechnic Diploma',
    colleges: 'Top RGPV Affiliated & Private Universities in Bhopal, Indore & Central India',
    feeRange: '₹45,000 – ₹1,40,000 / Year (Scholarship Available)',
    targetValue: 'B.Tech / Engineering Admission',
  },
  {
    stream: 'Management & Commerce',
    icon: 'fa-solid fa-chart-line',
    courses: 'MBA (Dual Specialization), PGDM, BBA, B.Com (Hons)',
    colleges: 'AICTE Approved & BU Affiliated Management Institutes with MNC Placement Track Record',
    feeRange: '₹40,000 – ₹1,60,000 / Year',
    targetValue: 'MBA / PGDM Management Admission',
  },
  {
    stream: 'Medical, Nursing & Pharmacy',
    icon: 'fa-solid fa-user-doctor',
    courses: 'MBBS, BAMS, BHMS, B.Sc Nursing, GNM, B.Pharm, D.Pharm, BMLT, BPT',
    colleges: 'INC, MPMSU & PCI Approved Medical, Nursing & Pharmacy Colleges with 300+ Bed Hospitals',
    feeRange: 'Merit & Counseling Based (Govt. Scholarship Eligible)',
    targetValue: 'MBBS / Nursing / Pharmacy Admission',
  },
  {
    stream: 'Law, Education & Agriculture',
    icon: 'fa-solid fa-scale-balanced',
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
    <section id="services" className="py-12 sm:py-18 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-blue-900 bg-blue-50 border border-blue-200 px-3 py-1 rounded-lg mb-2.5">
            <i className="fa-solid fa-compass text-amber-600"></i>
            <span>Comprehensive Consultancy Services · Zone-2, MP Nagar, Bhopal</span>
          </div>
          <h2
            className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            End-to-End Academic, Admission &amp; Career Guidance
          </h2>
          <p className="text-slate-600 text-xs sm:text-base mt-2.5 leading-relaxed">
            From choosing the right course after 12th or graduation to securing admission in top colleges, claiming government scholarships, and landing your first corporate placement—KGB Group guides you at every step.
          </p>
        </div>

        {/* 4 Core Services Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.number}
              className="group rounded-3xl border border-slate-200/90 bg-slate-50/70 hover:bg-white hover:border-amber-400/70 hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Top Visual Banner with Real Photo */}
                <div className="relative h-44 sm:h-52 bg-slate-900 overflow-hidden border-b border-slate-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent flex items-end p-4 sm:p-5">
                    <div>
                      <span className="inline-block font-mono text-[11px] font-bold text-slate-950 bg-amber-400 px-2.5 py-0.5 rounded-md mb-1.5">
                        {service.number} {service.subtitle}
                      </span>
                      <h3 className="font-display font-bold text-base sm:text-xl text-white leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-4 sm:p-6">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-3.5 space-y-2 border-t border-slate-200/80 pt-3.5 text-xs sm:text-sm text-slate-700">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <i className="fa-solid fa-circle-check text-amber-500 mt-0.5 text-xs shrink-0"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1">
                <button
                  type="button"
                  onClick={() => onSelectServiceForBooking(service.defaultCourseValue)}
                  className="w-full min-h-[46px] py-3 px-4 rounded-xl bg-slate-900 hover:bg-blue-950 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-between cursor-pointer shadow-xs"
                >
                  <span>{service.ctaLabel}</span>
                  <span className="w-7 h-7 rounded-lg bg-amber-400/15 text-amber-400 flex items-center justify-center">
                    <i className="fa-solid fa-arrow-right text-xs"></i>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Top Colleges & Streams Sub-Section (#colleges) */}
        <div
          id="colleges"
          className="mt-10 sm:mt-14 rounded-3xl bg-slate-950 text-white p-5 sm:p-8 lg:p-10 border border-slate-800 shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-5 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>2026–27 Admission Session Open · Direct Counseling Desk</span>
              </div>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mt-1">
                Explore Top Courses &amp; Partner Colleges in Madhya Pradesh
              </h3>
            </div>

            {/* Mobile Horizontal Swipeable Stream Filter Tabs */}
            <div className="flex overflow-x-auto no-scrollbar gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800">
              {TOP_COLLEGES_STREAMS.map((item, idx) => (
                <button
                  key={item.stream}
                  type="button"
                  onClick={() => setSelectedStreamTab(idx)}
                  className={`min-h-[40px] px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer ${
                    selectedStreamTab === idx
                      ? 'bg-amber-400 text-slate-950 shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <i className={item.icon}></i>
                  <span>{item.stream}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Stream Details */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 rounded-lg">
                  <i className="fa-solid fa-building-circle-check mr-1"></i>
                  Verified Admission &amp; Placement Tie-Ups
                </span>
                <span className="text-[11px] font-bold text-amber-300 bg-amber-400/15 border border-amber-400/30 px-2.5 py-1 rounded-lg tabular-nums">
                  {TOP_COLLEGES_STREAMS[selectedStreamTab].feeRange}
                </span>
              </div>

              <h4 className="font-display font-extrabold text-lg sm:text-2xl text-white">
                {TOP_COLLEGES_STREAMS[selectedStreamTab].stream}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                    Popular Programs &amp; Specializations
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {TOP_COLLEGES_STREAMS[selectedStreamTab].courses}
                  </p>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    Partner Universities &amp; Institutions
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {TOP_COLLEGES_STREAMS[selectedStreamTab].colleges}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                type="button"
                onClick={() =>
                  onSelectServiceForBooking(TOP_COLLEGES_STREAMS[selectedStreamTab].targetValue)
                }
                className="w-full min-h-[48px] py-3.5 px-5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-display font-extrabold text-xs sm:text-sm text-center transition-colors shadow-lg cursor-pointer"
              >
                Get College List &amp; Fee Structure →
              </button>
              <a
                href="https://wa.me/917987683263?text=Hello%20KGB%20Group%20(Knowledge%20Gurukul)%2C%20please%20share%20the%20top%20college%20list%20and%20fee%20structure%20for%20admission."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] py-3 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-semibold text-xs sm:text-sm text-center transition-colors inline-flex items-center justify-center gap-2"
              >
                <i className="fa-brands fa-whatsapp text-emerald-400 text-base"></i>
                <span>Ask Counselor on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
