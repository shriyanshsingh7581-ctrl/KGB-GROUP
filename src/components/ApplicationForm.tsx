import React, { useState, useEffect } from 'react';
import {
  ApplicationFormData,
  validateApplicationForm,
  generateApplicationRef,
  formatWhatsAppMessage,
} from '../utils/jobValidation';

interface ApplicationFormProps {
  selectedRoleFromCard?: string;
  onClearSelectedRole?: () => void;
}

const QUICK_CITIES = ['Indore', 'Bhopal', 'Raipur', 'Jabalpur', 'Gwalior', 'Nagpur'];

const QUICK_QUALIFICATIONS = [
  { label: '12th Pass', value: '12th Pass' },
  { label: 'Graduate (BA/B.Com/B.Sc)', value: 'B.Com / BBA / BA / B.Sc General' },
  { label: 'B.Tech / B.E', value: 'B.Tech / B.E' },
  { label: 'BCA / B.Sc IT', value: 'BCA / B.Sc (IT/CS)' },
  { label: 'MBA / PGDM', value: 'MBA / PGDM' },
  { label: 'Diploma / ITI', value: 'Diploma / Polytechnic' },
];

export const ApplicationForm: React.FC<ApplicationFormProps> = ({
  selectedRoleFromCard,
  onClearSelectedRole,
}) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    phone: '',
    email: '',
    qualification: '',
    preferredRole: selectedRoleFromCard || '',
    city: '',
    hasLaptop: false,
    experience: 'Fresher (No Prior Experience)',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateApplicationForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const ref = generateApplicationRef(formData.fullName);
      setSubmittedRef(ref);
      setIsSubmitting(false);
    }, 350);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      qualification: '',
      preferredRole: '',
      city: '',
      hasLaptop: false,
      experience: 'Fresher (No Prior Experience)',
    });
    setErrors({});
    if (onClearSelectedRole) {
      onClearSelectedRole();
    }
  };

  const whatsAppUrl = submittedRef
    ? `https://wa.me/917987683263?text=${formatWhatsAppMessage(formData, submittedRef)}`
    : `https://wa.me/917987683263?text=${encodeURIComponent(
        'Hi KGB Group, I want to submit my candidate profile for open vacancies.'
      )}`;

  return (
    <section id="apply" className="scroll-mt-24 py-12 sm:py-16 lg:py-24 bg-white relative">
      <div className="max-w-3xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 font-bold text-[11px] sm:text-xs uppercase tracking-wider border border-amber-300 mb-2.5">
            <i className="fa-solid fa-bolt text-xs text-amber-600"></i>
            <span>Takes 60 Seconds &bull; Zero Registration Fee</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Fast-Track Job Application Form
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-base max-w-xl mx-auto">
            Fill in your basic details below. Our HR team will verify your profile and call you within 24 hours for interview scheduling.
          </p>
        </div>

        {/* Success State */}
        {submittedRef ? (
          <div className="bg-linear-to-b from-emerald-50 to-white rounded-3xl p-5 sm:p-10 border-2 border-emerald-400/70 shadow-xl text-center space-y-5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mx-auto text-2xl sm:text-3xl shadow-md">
              <i className="fa-solid fa-circle-check"></i>
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Application Logged Successfully
              </span>
              <h3 className="font-display font-extrabold text-xl sm:text-3xl text-slate-900 pt-1">
                Congratulations, {formData.fullName}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Your application has been registered in Knowledge Gurukul’s placement drive. Save your reference ID:
              </p>
            </div>

            {/* Reference ID Box */}
            <div className="inline-block bg-white px-5 py-3.5 rounded-2xl border-2 border-dashed border-amber-400 shadow-2xs">
              <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Reference Application ID</span>
              <span className="font-mono font-black text-xl sm:text-2xl text-blue-900 tracking-widest">
                {submittedRef}
              </span>
            </div>

            {/* Summary Details */}
            <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto text-left text-xs bg-white p-3.5 rounded-2xl border border-slate-200">
              <div className="col-span-2 sm:col-span-1">
                <span className="text-slate-400 text-[11px] block">Applied Role:</span>
                <span className="font-bold text-slate-800">{formData.preferredRole}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[11px] block">WhatsApp / Phone:</span>
                <span className="font-bold text-slate-800">{formData.phone}</span>
              </div>
              <div>
                <span className="text-slate-400 text-[11px] block">Qualification:</span>
                <span className="font-bold text-slate-800">{formData.qualification}</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-slate-400 text-[11px] block">Location:</span>
                <span className="font-bold text-slate-800">{formData.city || 'Central India'}</span>
              </div>
            </div>

            {/* Priority WhatsApp Dispatch */}
            <div className="space-y-2.5 pt-1">
              <p className="text-xs font-bold text-slate-800">
                For instant interview slot confirmation, tap below to send your Reference ID on WhatsApp:
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md transition-all"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  <span>Send on WhatsApp (+91 7987683263)</span>
                </a>

                <a
                  href="tel:+917987683263"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all"
                >
                  <i className="fa-solid fa-phone text-amber-400"></i>
                  <span>Call HR Desk</span>
                </a>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="cursor-pointer text-xs font-bold text-slate-500 hover:text-slate-800 underline underline-offset-4"
                >
                  Submit Another Application
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Mobile-First Application Form Card */
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

                {/* Mobile / WhatsApp Number (Opens Numeric Keypad on Mobile) */}
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

              {/* Highest Qualification with 1-Tap Mobile Pills + Select */}
              <div>
                <label htmlFor="qualification" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Highest Qualification <span className="text-red-500">*</span>
                </label>

                {/* Quick Tap Qualification Chips for Mobile Thumb Ergonomics */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2">
                  {QUICK_QUALIFICATIONS.map((q) => (
                    <button
                      key={q.value}
                      type="button"
                      onClick={() => handleQuickQualification(q.value)}
                      className={`cursor-pointer shrink-0 px-3 py-1.5 rounded-lg text-[11px] font-bold border transition-all ${
                        formData.qualification === q.value
                          ? 'bg-slate-900 text-amber-400 border-slate-900 shadow-2xs'
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
                    <option value="">-- Select Highest Qualification --</option>
                    <option value="12th Pass">12th Standard Pass (Higher Secondary)</option>
                    <option value="Diploma / Polytechnic">Diploma / Polytechnic (All Branches)</option>
                    <option value="B.Tech / B.E">B.Tech / B.E (Engineering)</option>
                    <option value="BCA / B.Sc (IT/CS)">BCA / B.Sc (IT / Computer Science)</option>
                    <option value="B.Com / BBA / BA / B.Sc General">B.Com / BBA / BA / B.Sc General</option>
                    <option value="MBA / PGDM">MBA / PGDM (Management)</option>
                    <option value="MCA / M.Tech / Post Graduate">MCA / M.Tech / Post Graduate</option>
                    <option value="Other Certification">Other Skill Certificate</option>
                  </select>
                  <i className="fa-solid fa-chevron-down absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none"></i>
                </div>
                {errors.qualification && (
                  <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.qualification}</p>
                )}
              </div>

              {/* Preferred Job Role */}
              <div>
                <label htmlFor="preferredRole" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Preferred Job Role <span className="text-red-500">*</span>
                </label>
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
                    <option value="">-- Select Preferred Role --</option>
                    {selectedRoleFromCard &&
                      ![
                        'Work From Home Data Entry Operator (Rs. 25,000/mo)',
                        'Customer Support Executive (Rs. 23,000 - 30,000/mo)',
                        'Exam Invigilator & Assessment Coordinator',
                        'Warehouse Associate & Logistics Supervisor',
                        'Junior IT Desktop & Network Support',
                        'HR Recruiter & Talent Acquisition Trainee',
                        'Open to Any Suitable Role (Based on Interview)',
                      ].includes(selectedRoleFromCard) && (
                        <option value={selectedRoleFromCard}>{selectedRoleFromCard}</option>
                      )}
                    <option value="Work From Home Data Entry Operator (Rs. 25,000/mo)">
                      Work From Home Data Entry Operator (Rs. 25,000/mo - Laptop compulsory)
                    </option>
                    <option value="Customer Support Executive (Rs. 23,000 - 30,000/mo)">
                      Customer Support Executive (Rs. 23,000 - 30,000/mo)
                    </option>
                    <option value="Exam Invigilator & Assessment Coordinator">
                      Exam Invigilator & Assessment Coordinator (Rs. 18,000 - 24,000/mo)
                    </option>
                    <option value="Warehouse Associate & Logistics Supervisor">
                      Warehouse Associate & Logistics Supervisor (Rs. 20,000 - 26,000/mo)
                    </option>
                    <option value="Junior IT Desktop & Network Support">
                      Junior IT Desktop & Network Support (Rs. 28,000 - 35,000/mo)
                    </option>
                    <option value="HR Recruiter & Talent Acquisition Trainee">
                      HR Recruiter & Talent Acquisition Trainee (Rs. 22,000 - 28,000/mo)
                    </option>
                    <option value="Open to Any Suitable Role (Based on Interview)">
                      Open to Any Suitable Role (Based on Interview)
                    </option>
                  </select>
                  <i className="fa-solid fa-chevron-down absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none"></i>
                </div>
                {errors.preferredRole && (
                  <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.preferredRole}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* City / District with 1-Tap Quick Chips */}
                <div>
                  <label htmlFor="city" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Current City / District
                  </label>
                  <div className="relative">
                    <i className="fa-solid fa-location-dot absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      autoComplete="address-level2"
                      placeholder="Tap below or type city..."
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-3.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-400/25 focus:border-amber-500"
                    />
                  </div>
                  {/* Quick City Chips */}
                  <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2">
                    {QUICK_CITIES.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => handleQuickCity(c)}
                        className={`cursor-pointer shrink-0 px-2.5 py-1 rounded-md text-[10px] font-bold border transition-colors ${
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

                {/* Experience Level */}
                <div>
                  <label htmlFor="experience" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Experience Level
                  </label>
                  <div className="relative">
                    <i className="fa-solid fa-business-time absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full pl-9 pr-8 py-3.5 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-400/25 focus:border-amber-500 appearance-none"
                    >
                      <option value="Fresher (No Prior Experience)">Fresher (No Prior Experience)</option>
                      <option value="0 - 1 Year Experience">0 - 1 Year Experience</option>
                      <option value="1 - 3 Years Experience">1 - 3 Years Experience</option>
                      <option value="3+ Years Experience">3+ Years Experience</option>
                    </select>
                    <i className="fa-solid fa-chevron-down absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none"></i>
                  </div>
                </div>
              </div>

              {/* Touch-Friendly Laptop Checkbox Card */}
              <label
                htmlFor="hasLaptop"
                className={`p-3.5 sm:p-4 rounded-2xl border flex items-start gap-3 cursor-pointer transition-colors ${
                  formData.hasLaptop
                    ? 'bg-amber-500/15 border-amber-500/60'
                    : 'bg-white border-slate-200 hover:bg-amber-50/40'
                }`}
              >
                <input
                  id="hasLaptop"
                  name="hasLaptop"
                  type="checkbox"
                  checked={formData.hasLaptop}
                  onChange={handleChange}
                  className="mt-0.5 w-5 h-5 text-amber-500 rounded border-slate-300 focus:ring-amber-400 shrink-0"
                />
                <span className="text-xs text-slate-800 leading-snug">
                  <strong className="font-bold text-slate-900 block">
                    I have a Laptop / Computer with internet connection
                  </strong>
                  <span className="text-[11px] text-slate-600">
                    Mandatory for Work From Home (WFH) Data Entry roles (Rs. 25,000/month).
                  </span>
                </span>
              </label>

              {/* High-Contrast Mobile Submit Button */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cursor-pointer py-4 px-6 rounded-2xl bg-linear-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-500 hover:to-amber-600 active:scale-[0.99] text-slate-950 font-display font-black text-sm sm:text-base tracking-wide shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2.5"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin text-base"></i>
                      <span>Submitting Application...</span>
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane text-slate-950"></i>
                      <span>Submit Free Application & Get HR Call</span>
                    </>
                  )}
                </button>
              </div>

              {/* Trust Notice */}
              <p className="text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                <i className="fa-solid fa-shield-halved text-emerald-600"></i>
                <span>100% Genuine Drives &bull; Zero Registration Fee &bull; Safe & Confidential</span>
              </p>

            </form>
          </div>
        )}

      </div>
    </section>
  );
};
