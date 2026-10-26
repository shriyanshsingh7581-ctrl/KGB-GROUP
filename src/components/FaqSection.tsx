import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Are there any registration charges or fees for career counseling and job applications?',
    answer:
      'No. Candidate registration, 1-on-1 college counseling, scholarship verification, and initial placement assistance at KGB Group (Knowledge Gurukul) are completely free. We do not charge upfront consultation fees from students or job seekers.',
  },
  {
    question: 'How does KGB Group help 12th Pass and Undergraduate students choose the right college?',
    answer:
      'Led by Former Training & Placement Officers and MBA College Founder Team members, we evaluate your academic score, career goals, and family budget to compare NAAC-accredited Engineering, MBA, Medical, Nursing, Pharmacy, and Law colleges transparently.',
  },
  {
    question: 'Do you assist with MP Government Scholarships and Education Loans?',
    answer:
      'Yes. Our dedicated scholarship desk handles complete documentation for Mukhyamantri Medhavi Vidyarthi Yojana (MMVY), MP Post-Matric Scholarship (OBC/SC/ST), Bihar Student Credit Card (DRCC), and bank education loan bonafide certificates.',
  },
  {
    question: 'Can college students in final year or freshers apply for Work From Home and MNC jobs?',
    answer:
      'Yes! Both freshers and final-year students (Engineering, Management, B.Sc, B.Com, Arts, Diploma) are eligible for multiple positions including Work From Home Tele-Caller, Data Entry, Customer Support, and Assessment Coordinators.',
  },
  {
    question: 'What is KGB Group’s official accreditation and Bhopal center address?',
    answer:
      'KGB Group (Knowledge Gurukul Bhopal) is an ISO 9001:2015 Certified organization (QMP202604878) and registered under the Ministry of MSME, Govt. of India (UDYAM-MP-10-0162140). Our counseling headquarters is located at Zone-2, MP Nagar, Bhopal.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-[#FAF8F4] border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <div className="text-xs font-bold text-amber-700 mb-2">
            Clear Answers to Common Student &amp; Parent Queries
          </div>
          <h2
            className="font-display text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-2.5 text-slate-600 text-xs sm:text-base leading-relaxed">
            Everything you need to know about KGB Group’s admission guidance, scholarship desk, training, and placement process.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-amber-500/60 shadow-md'
                    : 'bg-white border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left px-5 py-4.5 flex items-center justify-between gap-4 cursor-pointer transition-colors"
                >
                  <span className="font-display font-bold text-sm sm:text-base text-slate-950">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform ${
                      isOpen
                        ? 'rotate-180 bg-[#050A15] text-amber-400'
                        : 'bg-[#FAF8F4] text-slate-600 border border-slate-200'
                    }`}
                  >
                    <i className="fa-solid fa-chevron-down text-xs"></i>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-5 sm:p-6 rounded-3xl bg-[#050A15] text-white border border-amber-400/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div>
            <h4 className="font-display font-bold text-sm sm:text-base text-white">
              Have a specific college or scholarship question?
            </h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Speak directly with our senior counselors Monday to Saturday, 10:00 AM – 7:00 PM.
            </p>
          </div>
          <a
            href="tel:+917987683263"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gold-foil text-slate-950 font-display font-extrabold text-xs shrink-0 whitespace-nowrap tabular-nums"
          >
            <i className="fa-solid fa-phone"></i>
            <span>Call +91 7987683263</span>
          </a>
        </div>
      </div>
    </section>
  );
};
