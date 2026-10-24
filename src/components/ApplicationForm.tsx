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
        // If user picked WFH data entry, check laptop box default
        hasLaptop: selectedRoleFromCard.includes('Data Entry') ? true : prev.hasLaptop,
      }));
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateApplicationForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate instantaneous verification & reference generation
    setTimeout(() => {
      const ref = generateApplicationRef(formData.fullName);
      setSubmittedRef(ref);
      setIsSubmitting(false);
    }, 450);
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
    <section id="apply" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 font-bold text-xs uppercase tracking-wider border border-amber-300 mb-3">
            <i className="fa-solid fa-file-signature text-xs text-amber-600"></i>
            <span>Official Candidate Registration</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Fast-Track Job Application Form
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Fill in your details below to register directly with KGB Group’s placement pool. Our team will verify your profile and schedule your interview within 24 hours.
          </p>
        </div>

        {/* Success Modal / State */}
        {submittedRef ? (
          <div className="bg-linear-to-b from-emerald-50 to-white rounded-3xl p-6 sm:p-10 border-2 border-emerald-400/60 shadow-xl text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mx-auto text-3xl shadow-md">
              <i className="fa-solid fa-circle-check"></i>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Application Received Successfully
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
                Congratulations, {formData.fullName}!
              </h3>
              <p className="text-sm text-slate-600 max-w-lg mx-auto">
                Your application has been logged into the Knowledge Gurukul placement records. Please save your application reference number:
              </p>
            </div>

            {/* Reference Badge */}
            <div className="inline-block bg-white p-4 rounded-2xl border-2 border-dashed border-amber-400 shadow-xs">
              <span className="text-xs text-slate-500 block uppercase font-bold tracking-wider">Reference Application ID</span>
              <span className="font-mono font-black text-2xl text-slate-900 tracking-widest text-blue-900">
                {submittedRef}
              </span>
            </div>

            {/* Summary Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto text-left text-xs bg-white p-4 rounded-xl border border-slate-200">
              <div>
                <span className="text-slate-400 block">Applied Role:</span>
                <span className="font-bold text-slate-800">{formData.preferredRole}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Phone / WhatsApp:</span>
                <span className="font-bold text-slate-800">{formData.phone}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Qualification:</span>
                <span className="font-bold text-slate-800">{formData.qualification}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Location:</span>
                <span className="font-bold text-slate-800">{formData.city || 'Central India'}</span>
              </div>
            </div>

            {/* Next Steps CTA */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-semibold text-slate-700">
                Want immediate priority review? Send your application code directly to our recruitment desk:
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  <span>Send on WhatsApp (+91 7987683263)</span>
                </a>

                <a
                  href="tel:+917987683263"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all"
                >
                  <i className="fa-solid fa-phone text-amber-400"></i>
                  <span>Call Helpline Now</span>
                </a>
              </div>

              <div className="pt-4">
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
          /* Active Application Form */
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
            
            {/* Top notification if pre-selected role */}
            {selectedRoleFromCard && (
              <div className="mb-6 p-3.5 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <i className="fa-solid fa-circle-check text-blue-600 text-sm"></i>
                  <span className="text-xs text-blue-900 font-semibold">
                    Selected Role: <strong className="font-extrabold">{selectedRoleFromCard}</strong>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onClearSelectedRole}
                  className="cursor-pointer text-xs text-blue-700 hover:text-blue-900 underline font-medium"
                >
                  Change
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full pl-9 pr-3 py-3 rounded-xl bg-white border text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 ${
                        errors.fullName
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-slate-300 focus:ring-amber-400/20 focus:border-amber-500'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.fullName}</p>
                  )}
                </div>

                {/* Mobile / WhatsApp Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    WhatsApp / Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">
                      +91
                    </span>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      maxLength={14}
                      placeholder="e.g. 7987683263"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-3 py-3 rounded-xl bg-white border text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 ${
                        errors.phone
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-slate-300 focus:ring-amber-400/20 focus:border-amber-500'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Highest Qualification */}
                <div>
                  <label htmlFor="qualification" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Highest Qualification <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <i className="fa-solid fa-graduation-cap absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                    <select
                      id="qualification"
                      name="qualification"
                      required
                      value={formData.qualification}
                      onChange={handleChange}
                      className={`w-full pl-9 pr-8 py-3 rounded-xl bg-white border text-sm text-slate-900 focus:outline-hidden focus:ring-2 appearance-none ${
                        errors.qualification
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-slate-300 focus:ring-amber-400/20 focus:border-amber-500'
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
                    <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.qualification}</p>
                  )}
                </div>

                {/* Preferred Role */}
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
                      className={`w-full pl-9 pr-8 py-3 rounded-xl bg-white border text-sm text-slate-900 focus:outline-hidden focus:ring-2 appearance-none ${
                        errors.preferredRole
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-slate-300 focus:ring-amber-400/20 focus:border-amber-500'
                      }`}
                    >
                      <option value="">-- Select Preferred Role --</option>
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
                    <p className="text-[11px] text-red-600 mt-1 font-medium">{errors.preferredRole}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* City / State */}
                <div>
                  <label htmlFor="city" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Current City / Native District
                  </label>
                  <div className="relative">
                    <i className="fa-solid fa-location-dot absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="e.g. Indore, Bhopal, Raipur, Jabalpur..."
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-400/20 focus:border-amber-500"
                    />
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
                      className="w-full pl-9 pr-8 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-400/20 focus:border-amber-500 appearance-none"
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

              {/* Laptop Checkbox for WFH eligibility */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-start gap-3">
                <input
                  id="hasLaptop"
                  name="hasLaptop"
                  type="checkbox"
                  checked={formData.hasLaptop}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-amber-500 rounded border-slate-300 focus:ring-amber-400"
                />
                <label htmlFor="hasLaptop" className="text-xs text-slate-800 leading-normal cursor-pointer">
                  <strong className="font-bold text-slate-900 block">
                    I possess a working Laptop / Desktop computer with internet connectivity.
                  </strong>
                  <span className="text-slate-600">
                    Required for Work From Home (WFH) Data Entry & remote support roles. Check this to boost your eligibility for remote positions.
                  </span>
                </label>
              </div>

              {/* Submission CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cursor-pointer py-4 px-6 rounded-2xl bg-linear-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-display font-extrabold text-base tracking-wide shadow-lg shadow-amber-500/20 hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin text-base"></i>
                      <span>Processing Your Application...</span>
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane text-slate-900"></i>
                      <span>Submit Free Application & Get Recruiter Call</span>
                    </>
                  )}
                </button>
              </div>

              {/* Trust Footer Notice */}
              <div className="text-center pt-2">
                <p className="text-[11px] text-slate-500 flex items-center justify-center gap-2">
                  <i className="fa-solid fa-shield-halved text-emerald-600"></i>
                  <span>100% Genuine Corporate Drives &bull; Zero Registration Charges &bull; Data Strictly Confidential</span>
                </p>
              </div>

            </form>
          </div>
        )}

      </div>
    </section>
  );
};
