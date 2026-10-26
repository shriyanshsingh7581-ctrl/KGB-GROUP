import React, { useState, useEffect } from 'react';
import { submitCandidateApplication, subscribeToDynamicJobs, DynamicJobRecord } from '../firebase';

interface ApplicationFormProps {
  selectedRoleFromCard: string;
  onClearSelectedRole: () => void;
}

const STREAM_OPTIONS = [
  '12th PCM (Mathematics / Science)',
  '12th PCB (Biology / Medical)',
  '12th Commerce / Arts / Humanities',
  'Undergraduate Final Year (B.Tech / BBA / B.Com / B.Sc / BCA)',
  'Graduate Seeking MBA / PGDM / Law / Placement',
  '10th Pass (Seeking Polytechnic / ITI / Skill Stream)',
  'Parent / Guardian Enquiring for Ward',
];

const TARGET_COURSE_OPTIONS = [
  'B.Tech / B.E. (CS, AI/ML, Data Science, Core Engineering)',
  'MBA / PGDM (Marketing, Finance, HR, Business Analytics)',
  'MBBS / B.Sc Nursing / B.Pharm / D.Pharm / Paramedical',
  'BA LLB / BBA LLB / LLB (Law Admission)',
  'BBA / B.Com (Hons) / BCA / MCA',
  'B.Ed / M.Ed / B.Sc Agriculture',
  'Career Counseling & Psychometric Assessment',
  'Direct College Placement Tie-ups & Training',
  'Scholarship & Financial Guidance (MMVY / Post-Matric / Loan)',
  'Work From Home / Corporate Job Placement',
];

const TIME_SLOTS = [
  { label: '10:30 AM – 12:00 PM', tag: 'Morning Slot', value: '10:30 AM – 12:00 PM (Morning Slot)' },
  { label: '12:30 PM – 02:00 PM', tag: 'Mid-Day Slot', value: '12:30 PM – 02:00 PM (Mid-Day Slot)' },
  { label: '03:00 PM – 04:30 PM', tag: 'Afternoon Slot', value: '03:00 PM – 04:30 PM (Afternoon Slot)' },
  { label: '05:00 PM – 06:30 PM', tag: 'Evening Slot', value: '05:00 PM – 06:30 PM (Evening Slot)' },
];

function getTomorrowDateString(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  selectedRoleFromCard,
  onClearSelectedRole,
}) => {
  const [studentName, setStudentName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [email, setEmail] = useState('');
  const [currentStream, setCurrentStream] = useState('');
  const [targetCourse, setTargetCourse] = useState('');
  const [preferredDate, setPreferredDate] = useState(getTomorrowDateString);
  const [preferredTimeSlot, setPreferredTimeSlot] = useState(TIME_SLOTS[0].value);
  const [consultationMode, setConsultationMode] = useState<
    'In-Office Visit at Bhopal Center' | 'Online Video Call'
  >('In-Office Visit at Bhopal Center');
  const [additionalNotes, setAdditionalNotes] = useState('');

  const [dynamicJobs, setDynamicJobs] = useState<DynamicJobRecord[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [confirmedBooking, setConfirmedBooking] = useState<{
    name: string;
    phone: string;
    stream: string;
    targetCourse: string;
    date: string;
    timeSlot: string;
    mode: string;
  } | null>(null);

  useEffect(() => {
    const unsub = subscribeToDynamicJobs((jobs) => setDynamicJobs(jobs));
    return () => unsub();
  }, []);

  useEffect(() => {
    if (selectedRoleFromCard) {
      setTargetCourse(selectedRoleFromCard);
    }
  }, [selectedRoleFromCard]);

  const allCourseOptions = Array.from(
    new Set([
      ...TARGET_COURSE_OPTIONS,
      ...dynamicJobs.map((j) => `${j.title} (${j.jobType})`),
      ...(selectedRoleFromCard ? [selectedRoleFromCard] : []),
    ])
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const cleanPhone = whatsappNumber.replace(/\D/g, '');
    if (!studentName.trim() || cleanPhone.length < 10 || !currentStream || !targetCourse) {
      setErrorMessage(
        'Please enter Student/Parent Name, a valid 10-digit WhatsApp Mobile Number, Current Education/Stream, and Target Course/College.'
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const formattedSlotSummary = `Slot: ${preferredDate} (${preferredTimeSlot}) | Mode: ${consultationMode}${
        additionalNotes.trim() ? ` | Note: ${additionalNotes.trim()}` : ''
      }`;

      await submitCandidateApplication({
        fullName: studentName.trim(),
        phone: whatsappNumber.trim(),
        email: email.trim(),
        city:
          consultationMode === 'In-Office Visit at Bhopal Center'
            ? 'In-Office Visit (Zone-2, MP Nagar, Bhopal)'
            : 'Online Video Call Consultation',
        qualification: currentStream,
        role: targetCourse,
        notes: formattedSlotSummary,
      });

      setConfirmedBooking({
        name: studentName.trim(),
        phone: cleanPhone.slice(-10),
        stream: currentStream,
        targetCourse,
        date: preferredDate,
        timeSlot: preferredTimeSlot,
        mode: consultationMode,
      });

      setStudentName('');
      setWhatsappNumber('');
      setEmail('');
      setCurrentStream('');
      setAdditionalNotes('');
      onClearSelectedRole();
    } catch (err) {
      console.error('Booking submission error:', err);
      setErrorMessage(
        'Could not complete booking at the moment. Please try again or message us directly on WhatsApp (+91 7987683263).'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const buildWhatsAppConfirmationUrl = () => {
    if (!confirmedBooking) return 'https://wa.me/917987683263';
    const message = [
      `Hello KGB Group (Knowledge Gurukul Bhopal),`,
      `I have booked a Free Counseling / Admission Consultation slot:`,
      `• Student/Parent Name: ${confirmedBooking.name}`,
      `• WhatsApp Number: ${confirmedBooking.phone}`,
      `• Current Education/Stream: ${confirmedBooking.stream}`,
      `• Target Course/College: ${confirmedBooking.targetCourse}`,
      `• Preferred Date: ${confirmedBooking.date}`,
      `• Time Slot: ${confirmedBooking.timeSlot}`,
      `• Mode: ${confirmedBooking.mode}`,
      `Please confirm my appointment slot.`,
    ].join('\n');

    return `https://wa.me/917987683263?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="book-consultation"
      className="py-12 sm:py-18 lg:py-20 bg-slate-900 text-white border-b border-slate-800 relative"
    >
      {/* Secondary anchor alias for #apply */}
      <div id="apply" className="absolute -top-20"></div>

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Why Book & Office Info */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-lg mb-2.5">
                <i className="fa-regular fa-calendar-check"></i>
                <span>Free 1-on-1 Consultation · Zone-2, MP Nagar</span>
              </div>
              <h2
                className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight"
                style={{ textWrap: 'balance' }}
              >
                Book Your Personal Counseling Slot Today
              </h2>
              <p className="text-slate-300 text-xs sm:text-base mt-2.5 leading-relaxed">
                Meet our senior admission &amp; career experts either via <strong className="text-white">Online Video Call</strong> or by visiting our <strong className="text-white">Bhopal Center at Zone-2, MP Nagar</strong>. Get unbiased college comparisons, scholarship eligibility checks, and guaranteed placement roadmaps.
              </p>
            </div>

            {/* What You Receive in a 30-Min Session */}
            <div className="bg-slate-800/80 border border-slate-700/90 rounded-2xl p-4 sm:p-5 space-y-3">
              <h3 className="font-display font-bold text-sm sm:text-base text-white flex items-center gap-2">
                <i className="fa-solid fa-gift text-amber-400"></i>
                <span>What’s Included in Your Free Session:</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <i className="fa-solid fa-circle-check text-amber-400 mt-0.5 text-xs shrink-0"></i>
                  <span>Shortlist of Top 5 NAAC-accredited colleges matching your rank &amp; budget</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="fa-solid fa-circle-check text-amber-400 mt-0.5 text-xs shrink-0"></i>
                  <span>Complete fee breakdown, hostel details &amp; hidden-cost transparency</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="fa-solid fa-circle-check text-amber-400 mt-0.5 text-xs shrink-0"></i>
                  <span>MP Govt. Scholarship (Medhavi / Post-Matric) &amp; Education Loan checklist</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <i className="fa-solid fa-circle-check text-amber-400 mt-0.5 text-xs shrink-0"></i>
                  <span>Direct campus placement guarantee &amp; internship registration</span>
                </li>
              </ul>
            </div>

            {/* Center Address & Helpline Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot text-amber-400 mt-1 shrink-0"></i>
                <div>
                  <span className="font-bold text-white block">Bhopal Counseling Center:</span>
                  <span className="text-slate-300">
                    Zone-2, MP Nagar, Bhopal, Madhya Pradesh - 462011
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-phone-volume text-emerald-400 mt-1 shrink-0"></i>
                <div>
                  <span className="font-bold text-white block">Direct Admission Helpline:</span>
                  <a href="tel:+917987683263" className="text-amber-400 font-bold hover:underline tabular-nums">
                    +91 7987683263
                  </a>{' '}
                  <span className="text-slate-400">(Mon–Sat, 10:00 AM – 7:00 PM)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Appointment Booking Engine */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-3xl p-4 sm:p-8 shadow-2xl border border-slate-200">
              <div className="pb-4 mb-5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="font-display font-extrabold text-lg sm:text-2xl text-slate-900">
                    Schedule Counseling Appointment
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Zero consultation charges · Instant WhatsApp slot confirmation
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  <i className="fa-solid fa-shield-check"></i> 100% Free Guidance
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Row 1: Student/Parent Name & WhatsApp Mobile Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label
                      htmlFor="booking-student-name"
                      className="block text-xs font-bold text-slate-700 mb-1.5"
                    >
                      Student / Parent Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="booking-student-name"
                      type="text"
                      required
                      placeholder="Enter full name"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full min-h-[48px] rounded-xl border border-slate-300 px-3.5 py-2.5 text-base sm:text-sm text-slate-900 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/15 outline-hidden"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="booking-whatsapp"
                      className="block text-xs font-bold text-slate-700 mb-1.5"
                    >
                      WhatsApp Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="booking-whatsapp"
                      type="tel"
                      required
                      placeholder="10-digit WhatsApp number"
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      className="w-full min-h-[48px] rounded-xl border border-slate-300 px-3.5 py-2.5 text-base sm:text-sm text-slate-900 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/15 outline-hidden tabular-nums"
                    />
                  </div>
                </div>

                {/* Row 2: Current Education / Stream & Target Course / College */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label
                      htmlFor="booking-stream"
                      className="block text-xs font-bold text-slate-700 mb-1.5"
                    >
                      Current Education / Stream <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="booking-stream"
                      required
                      value={currentStream}
                      onChange={(e) => setCurrentStream(e.target.value)}
                      className="w-full min-h-[48px] rounded-xl border border-slate-300 px-3.5 py-2.5 text-base sm:text-sm bg-white text-slate-900 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/15 outline-hidden"
                    >
                      <option value="">Select Current Education / Stream</option>
                      {STREAM_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="booking-target-course"
                      className="block text-xs font-bold text-slate-700 mb-1.5"
                    >
                      Target Course / College <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="booking-target-course"
                      required
                      value={targetCourse}
                      onChange={(e) => setTargetCourse(e.target.value)}
                      className="w-full min-h-[48px] rounded-xl border border-slate-300 px-3.5 py-2.5 text-base sm:text-sm bg-white text-slate-900 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/15 outline-hidden"
                    >
                      <option value="">Select Target Course / Service</option>
                      {allCourseOptions.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3: Preferred Date & Visual 2x2 Time Slot Picker */}
                <div className="space-y-3">
                  <div>
                    <label
                      htmlFor="booking-date"
                      className="block text-xs font-bold text-slate-700 mb-1.5"
                    >
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="booking-date"
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full min-h-[48px] rounded-xl border border-slate-300 px-3.5 py-2.5 text-base sm:text-sm bg-white text-slate-900 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/15 outline-hidden tabular-nums"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Select Preferred Time Slot <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {TIME_SLOTS.map((slot) => {
                        const active = preferredTimeSlot === slot.value;
                        return (
                          <button
                            key={slot.value}
                            type="button"
                            onClick={() => setPreferredTimeSlot(slot.value)}
                            className={`min-h-[46px] p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                              active
                                ? 'border-blue-900 bg-blue-50/90 text-slate-900 ring-2 ring-blue-900/15'
                                : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                            }`}
                          >
                            <div className="text-[11px] font-bold text-blue-900">{slot.tag}</div>
                            <div className="text-xs font-extrabold tabular-nums text-slate-900">
                              {slot.label}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Row 4: Consultation Mode Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    Preferred Consultation Mode <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => setConsultationMode('In-Office Visit at Bhopal Center')}
                      className={`min-h-[52px] p-3 rounded-xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                        consultationMode === 'In-Office Visit at Bhopal Center'
                          ? 'border-blue-900 bg-blue-50/80 text-slate-900 ring-2 ring-blue-900/15'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="w-9 h-9 rounded-lg bg-blue-900 text-amber-400 flex items-center justify-center shrink-0">
                        <i className="fa-solid fa-building-user"></i>
                      </div>
                      <div>
                        <div className="text-xs font-bold">In-Office Visit at Bhopal Center</div>
                        <div className="text-[11px] text-slate-500">Zone-2, MP Nagar, Bhopal</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setConsultationMode('Online Video Call')}
                      className={`min-h-[52px] p-3 rounded-xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                        consultationMode === 'Online Video Call'
                          ? 'border-blue-900 bg-blue-50/80 text-slate-900 ring-2 ring-blue-900/15'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="w-9 h-9 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0">
                        <i className="fa-solid fa-video"></i>
                      </div>
                      <div>
                        <div className="text-xs font-bold">Online Video Call</div>
                        <div className="text-[11px] text-slate-500">Google Meet / WhatsApp Video</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Row 5: Optional Questions / Specific College Preference */}
                <div>
                  <label
                    htmlFor="booking-notes"
                    className="block text-xs font-bold text-slate-700 mb-1.5"
                  >
                    Specific College Preference / Questions (Optional)
                  </label>
                  <input
                    id="booking-notes"
                    type="text"
                    placeholder="e.g., B.Tech CS in Bhopal with MMVY scholarship or MBA placement"
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    className="w-full min-h-[48px] rounded-xl border border-slate-300 px-3.5 py-2.5 text-base sm:text-sm text-slate-900 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/15 outline-hidden"
                  />
                </div>

                {errorMessage && (
                  <div className="rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold px-4 py-3">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-[52px] py-4 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-display font-extrabold text-sm sm:text-base shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-circle-notch fa-spin"></i>
                      <span>Confirming Your Counseling Slot...</span>
                    </>
                  ) : (
                    <>
                      <i className="fa-regular fa-calendar-check"></i>
                      <span>Confirm Free Counseling Slot</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Confirmation Modal with Instant WhatsApp Redirection */}
      {confirmedBooking && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm p-4 flex items-center justify-center"
          onClick={() => setConfirmedBooking(null)}
        >
          <div
            className="bg-white text-slate-900 rounded-3xl max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-slate-200 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl shrink-0">
                <i className="fa-solid fa-circle-check"></i>
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-700">
                  Appointment Registered
                </span>
                <h3 className="font-display font-extrabold text-xl text-slate-900">
                  Counseling Slot Confirmed!
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Thank you, <strong>{confirmedBooking.name}</strong>. Your consultation request with <strong>KGB Group (Knowledge Gurukul)</strong> has been logged. Our senior counselor will connect with you on <strong>+91 {confirmedBooking.phone}</strong>.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-1.5 text-xs text-slate-700">
              <div className="flex justify-between gap-2">
                <span className="text-slate-500">Target Course:</span>
                <span className="font-bold text-slate-900 text-right">{confirmedBooking.targetCourse}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-slate-500">Preferred Slot:</span>
                <span className="font-bold text-slate-900 tabular-nums">{confirmedBooking.date} · {confirmedBooking.timeSlot}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-slate-500">Consultation Mode:</span>
                <span className="font-bold text-blue-900">{confirmedBooking.mode}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <a
                href={buildWhatsAppConfirmationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-h-[48px] py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm text-center inline-flex items-center justify-center gap-2 transition-colors"
              >
                <i className="fa-brands fa-whatsapp text-base"></i>
                <span>Send Instant WhatsApp Confirmation</span>
              </a>
              <button
                type="button"
                onClick={() => setConfirmedBooking(null)}
                className="min-h-[48px] py-3.5 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm cursor-pointer"
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
