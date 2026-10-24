import React, { useState, useEffect } from 'react';
import {
  ApplicationFormData,
  validateApplicationForm,
  generateApplicationRef,
  formatWhatsAppMessage,
} from '../utils/jobValidation';
import { submitCandidateApplication } from '../firebase';

interface ApplicationFormProps {
  selectedRoleFromCard?: string;
  onClearSelectedRole?: () => void;
}

const QUICK_CITIES = ['Bhopal', 'Indore', 'Jabalpur', 'Gwalior', 'Raipur', 'Ujjain'];

const QUICK_QUALIFICATIONS = [
  { label: '10th / 12th Pass', value: '10th / 12th Pass' },
  { label: 'Graduate', value: 'Graduate' },
  { label: 'Post Graduate', value: 'Post Graduate' },
  { label: 'B.Tech / B.E', value: 'B.Tech / B.E' },
  { label: 'MBA / BBA', value: 'MBA / BBA' },
];

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  selectedRoleFromCard,
  onClearSelectedRole,
}) => {
  const [formData, setFormData] = useState<ApplicationFormData & { notes: string }>({
    fullName: '',
    phone: '',
    email: '',
    qualification: 'Graduate',
    preferredRole: selectedRoleFromCard || '',
    city: '',
    hasLaptop: false,
    experience: 'Fresher (No Prior Experience)',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedSnapshot, setSubmittedSnapshot] = useState<{
    ref: string;
    data: ApplicationFormData;
  } | null>(null);

  useEffect(() => {
    if (selectedRoleFromCard) {
      setFormData((prev) => ({
        ...prev,
        preferredRole: selectedRoleFromCard,
        hasLaptop: selectedRoleFromCard.toLowerCase().includes('data entry') ? true : prev.hasLaptop,
      }));
      setErrors((prev) => {
        const next = { ...prev };
        delete next.preferredRole;
        return next;
      });
    }
  }, [selectedRoleFromCard]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[name];
          return next;
        });
      }
    }
  };

  const handleQuickQualification = (val: string) => {
    setFormData((prev) => ({ ...prev, qualification: val }));
    if (errors.qualification) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.qualification;
        return next;
      });
    }
  };

  const handleQuickCity = (city: string) => {
    setFormData((prev) => ({ ...prev, city }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateApplicationForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setIsSubmitting(true);
    try {
      await submitCandidateApplication({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        city: formData.city || 'Bhopal',
        qualification: formData.qualification,
        role: formData.preferredRole,
        notes: formData.notes || formData.experience,
      });

      const ref = generateApplicationRef(formData.fullName);
      setSubmittedSnapshot({ ref, data: { ...formData } });
      setShowSuccessModal(true);

      // Reset form fields automatically
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        qualification: 'Graduate',
        preferredRole: '',
        city: '',
        hasLaptop: false,
        experience: 'Fresher (No Prior Experience)',
        notes: '',
      });
      setErrors({});
      if (onClearSelectedRole) {
        onClearSelectedRole();
      }
    } catch (error) {
      console.error('Error submitting application:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsAppUrl = submittedSnapshot
    ? `https://wa.me/917987683263?text=${formatWhatsAppMessage(
        submittedSnapshot.data,
        submittedSnapshot.ref
      )}`
    : `https://wa.me/917987683263?text=${encodeURIComponent(
        'Hi KGB Group Bhopal, I want to submit my candidate profile for open vacancies.'
      )}`;

  return (
    <section id="apply" className="scroll-mt-24 py-12 sm:py-16 lg:py-24 bg-white relative">
      <div className="max-w-3xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 font-bold text-[11px] sm:text-xs uppercase tracking-wider border border-amber-300 mb-2.5">
            <i className="fa-solid fa-bolt text-xs text-amber-600"></i>
            <span>Real-Time HR Database &bull; Zero Registration Fee</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Candidate Registration &amp; Job Application Form
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-base max-w-xl mx-auto">
            Fill in your details below. Your application is synced directly with Knowledge Gurukul Bhopal&apos;s HR team for 24-hour interview scheduling.
          </p>
        </div>

        {/* Application Form Card */}
        <div className="bg-slate-50 rounded-3xl p-4 sm:p-8 lg:p-10 border border-slate-200/90 shadow-lg">
          {/* Pre-selected Role Banner */}
          {selectedRoleFromCard && (
            <div className="mb-4 p-3 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <i className="fa-solid fa-circle-check text-blue-600 text-sm shrink-0"></i>
                <span className="text-xs text-blue-950 font-semibold truncate">
                  Applying for: <strong className="font-extrabold">{selectedRoleFromCard}</strong>
                </span>
              </div>
              <button
                type="button"
                onClick={onClearSelectedRole}
                className="cursor-pointer text-[11px] text-blue-700 hover:text-blue-900 underline font-bold shrink-0"
              >
                Change
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <i className="fa-solid fa-user absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full pl-9 pr-3 py-3.5 rounded-xl bg-white border text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 ${
                      errors.fullName
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-slate-300 focus:ring-amber-400/25 focus:border-amber-500'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.fullName}</p>
                )}
              </div>

              {/* WhatsApp / Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  WhatsApp / Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-extrabold text-slate-500">
                    +91
                  </span>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    required
                    maxLength={14}
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full pl-12 pr-3 py-3.5 rounded-xl bg-white border text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 ${
                      errors.phone
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-slate-300 focus:ring-amber-400/25 focus:border-amber-500'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <i className="fa-solid fa-envelope absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={150}
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-3.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-400/25 focus:border-amber-500"
                  />
                </div>
              </div>

              {/* City / Location */}
              <div>
                <label htmlFor="city" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  City / Location
                </label>
                <div className="relative">
                  <i className="fa-solid fa-location-dot absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    maxLength={100}
                    placeholder="Bhopal, Indore, Jabalpur..."
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full pl-9 pr-3 py-3.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-400/25 focus:border-amber-500"
                  />
                </div>
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1.5">
                  {QUICK_CITIES.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => handleQuickCity(c)}
                      className={`cursor-pointer shrink-0 px-2.5 py-0.5 rounded-md text-[10px] font-bold border transition-colors ${
                        formData.city === c
                          ? 'bg-amber-400 text-slate-950 border-amber-500'
                          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Highest Qualification */}
              <div>
                <label htmlFor="qualification" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Highest Qualification <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2">
                  {QUICK_QUALIFICATIONS.map((q) => (
                    <button
                      key={q.value}
                      type="button"
                      onClick={() => handleQuickQualification(q.value)}
                      className={`cursor-pointer shrink-0 px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-all ${
                        formData.qualification === q.value
                          ? 'bg-slate-900 text-amber-400 border-slate-900'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {q.label}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <i className="fa-solid fa-graduation-cap absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                  <select
                    id="qualification"
                    name="qualification"
                    required
                    value={formData.qualification}
                    onChange={handleChange}
                    className={`w-full pl-9 pr-8 py-3.5 rounded-xl bg-white border text-sm text-slate-900 focus:outline-hidden focus:ring-2 appearance-none ${
                      errors.qualification
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-slate-300 focus:ring-amber-400/25 focus:border-amber-500'
                    }`}
                  >
                    <option value="">-- Select Qualification --</option>
                    <option value="10th / 12th Pass">10th / 12th Pass</option>
                    <option value="Graduate">Graduate (BA / B.Com / B.Sc / BBA / BCA)</option>
                    <option value="Post Graduate">Post Graduate (MBA / MCA / M.Com / M.Sc)</option>
                    <option value="B.Tech / B.E">B.Tech / B.E (Engineering)</option>
                    <option value="MBA / BBA">MBA / BBA (Management)</option>
                    <option value="Diploma / Polytechnic">Diploma / Polytechnic / ITI</option>
                  </select>
                  <i className="fa-solid fa-chevron-down absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none"></i>
                </div>
                {errors.qualification && (
                  <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.qualification}</p>
                )}
              </div>

              {/* Desired Job Role */}
              <div>
                <label htmlFor="preferredRole" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Desired Job Role <span className="text-red-500">*</span>
                </label>
                <div className="hidden sm:block h-[30px]"></div>
                <div className="relative">
                  <i className="fa-solid fa-briefcase absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                  <select
                    id="preferredRole"
                    name="preferredRole"
                    required
                    value={formData.preferredRole}
                    onChange={handleChange}
                    className={`w-full pl-9 pr-8 py-3.5 rounded-xl bg-white border text-sm text-slate-900 focus:outline-hidden focus:ring-2 appearance-none ${
                      errors.preferredRole
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-slate-300 focus:ring-amber-400/25 focus:border-amber-500'
                    }`}
                  >
                    <option value="">-- Select Desired Job Role --</option>
                    <option value="Work From Home Tele-Caller">
                      Work From Home Tele-Caller (Fixed Salary + High Incentive)
                    </option>
                    <option value="Data Entry Operator">
                      Data Entry Operator (Rs. 25,000/mo - Laptop Required)
                    </option>
                    <option value="Customer Support Executive">
                      Customer Support Executive (Rs. 23,000 - 30,000/mo)
                    </option>
                    <option value="Campus Drive Coordinator & Invigilator">
                      Campus Drive Coordinator &amp; Invigilator (Rs. 18,000 - 25,000/mo)
                    </option>
                    <option value="Warehouse Associate & Logistics Supervisor">
                      Warehouse Associate &amp; Logistics Supervisor
                    </option>
                    <option value="Junior IT Desktop & Network Support">
                      Junior IT Desktop &amp; Network Support
                    </option>
                  </select>
                  <i className="fa-solid fa-chevron-down absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none"></i>
                </div>
                {errors.preferredRole && (
                  <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.preferredRole}</p>
                )}
              </div>
            </div>

            {/* Additional Notes / Experience */}
            <div>
              <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Additional Notes / Experience
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={2}
                maxLength={500}
                placeholder="Mention prior experience, typing speed, laptop availability, or preferred interview shift..."
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-3.5 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-400/25 focus:border-amber-500"
              ></textarea>
            </div>

            {/* Submit Button with Loading Spinner */}
            <div className="pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full cursor-pointer py-4 px-6 rounded-2xl bg-linear-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-500 hover:to-amber-600 active:scale-[0.99] text-slate-950 font-display font-black text-sm sm:text-base tracking-wide shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2.5 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-circle-notch fa-spin text-base"></i>
                    <span>Saving Application to Database...</span>
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane text-slate-950"></i>
                    <span>Submit Free Application &amp; Get HR Call</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5 pt-1">
              <i className="fa-solid fa-shield-halved text-emerald-600"></i>
              <span>100% Genuine Drives &bull; Zero Registration Fee &bull; Safe &amp; Confidential</span>
            </p>
          </form>
        </div>
      </div>

      {/* Modern Tailwind Success Modal / Popup */}
      {showSuccessModal && submittedSnapshot && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowSuccessModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 text-center shadow-2xl border-2 border-emerald-400 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mx-auto text-3xl shadow-md">
              <i className="fa-solid fa-circle-check"></i>
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Ref ID: {submittedSnapshot.ref}
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 pt-1">
                Application Submitted Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Application Submitted Successfully! Our HR team will contact you within 24 hours.
              </p>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-left text-xs space-y-1">
              <div>
                <span className="text-slate-400">Candidate:</span>{' '}
                <strong className="text-slate-800">{submittedSnapshot.data.fullName}</strong>
              </div>
              <div>
                <span className="text-slate-400">Applied Role:</span>{' '}
                <strong className="text-slate-800">{submittedSnapshot.data.preferredRole}</strong>
              </div>
              <div>
                <span className="text-slate-400">Status:</span>{' '}
                <strong className="text-emerald-700">New (Logged in HR Portal)</strong>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <i className="fa-brands fa-whatsapp text-base"></i>
                <span>Instant WhatsApp Confirmation</span>
              </a>
              <button
                type="button"
                onClick={() => setShowSuccessModal(false)}
                className="cursor-pointer w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
