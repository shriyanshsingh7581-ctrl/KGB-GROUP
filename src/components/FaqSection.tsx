import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Are there any registration charges or fees to apply?',
    answer: 'No. Candidate registration, profile evaluation, and initial placement assistance at KGB Group Knowledge Gurukul are completely free. We do not charge arbitrary upfront fees from job seekers.'
  },
  {
    question: 'What are the exact requirements for the Work From Home Data Entry role?',
    answer: 'For the WFH Data Entry Operator role (₹25,000/month), you must have a personal Laptop or Desktop computer with an active internet connection. Minimum qualification is 12th pass, with a typing speed of 30+ WPM and basic proficiency in Microsoft Excel / Google Sheets.'
  },
  {
    question: 'Can college students in final year or freshers apply for MNC jobs?',
    answer: 'Yes! Both freshers and final-year students (Engineering, Management, B.Sc, B.Com, Arts, Diploma) are eligible for multiple positions including Customer Support, IT Trainee, and Assessment Coordinators. Training is provided to make you interview-ready.'
  },
  {
    question: 'How soon will I receive an interview call after submitting the form?',
    answer: 'Our placement team reviews applications continuously. You will typically receive an evaluation call or WhatsApp notification within 24 working hours. You can also send your Reference ID directly to our WhatsApp (+91 7987683263) for expedited review.'
  },
  {
    question: 'What is KGB Group’s accreditation and college partnership background?',
    answer: 'KGB Group (Knowledge Gurukul / Placement India) is an ISO 9001:2015 certified organization and MSME registered under the Government Startup Mission. We have empaneled 450+ colleges across Central India and trained/placed over 1,00,000+ candidates.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider border border-slate-200 mb-3">
            <i className="fa-solid fa-circle-question text-xs text-blue-600"></i>
            <span>Clear Answers to Common Queries</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Everything you need to know about KGB Group’s training, placement process, and job eligibility.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left px-5 py-4 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-4 cursor-pointer transition-colors"
                >
                  <span className="font-display font-bold text-sm sm:text-base text-slate-900">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 bg-amber-400 text-slate-900' : 'bg-slate-200 text-slate-600'
                  }`}>
                    <i className="fa-solid fa-chevron-down text-xs"></i>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 py-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-5 rounded-2xl bg-amber-50 border border-amber-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-sm text-slate-900">Still have questions or special queries?</h4>
            <p className="text-xs text-slate-600">Our support desk is available Monday to Saturday, 9:30 AM - 7:00 PM.</p>
          </div>
          <a
            href="tel:+917987683263"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors shrink-0"
          >
            <i className="fa-solid fa-phone text-amber-400"></i>
            <span>Call +91 7987683263</span>
          </a>
        </div>

      </div>
    </section>
  );
};
