import React from 'react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: About KGB Group (Knowledge Gurukul) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-bold text-blue-900">
              About KGB Group (Knowledge Gurukul) · Est. Bhopal, Madhya Pradesh
            </div>
            <h2
              className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              10+ Years of Academic Excellence &amp; 100% Genuine Guidance
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Headquartered at <strong>Zone-2, MP Nagar, Bhopal</strong>, KGB Group (Knowledge Gurukul) is an <strong>ISO 9001:2015 Certified</strong> and <strong>Govt. of India MSME Registered</strong> educational consultancy and training-placement organization.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We bridge the gap between ambitious students and India’s leading Engineering, Management, Medical, Nursing, Pharmacy, and Law institutions—ensuring transparent admissions, government scholarship support, and guaranteed career placement assistance.
            </p>
          </div>

          {/* Right: 4 Institutional Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-5">
              <div className="text-xs font-bold text-amber-600">ISO 9001:2015 Certified</div>
              <div className="font-display font-bold text-base text-slate-900 mt-1">
                Quality Educational Consultancy
              </div>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Cert No: <span className="font-mono font-semibold">QMP202604878</span> · Audited for transparent student counseling &amp; placement services.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5">
              <div className="text-xs font-bold text-emerald-700">Govt. of India MSME</div>
              <div className="font-display font-bold text-base text-slate-900 mt-1">
                Udyam Registered Organization
              </div>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Reg No: <span className="font-mono font-semibold">UDYAM-MP-10-0162140</span> · Verified institutional &amp; HR partner in Madhya Pradesh.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5">
              <div className="text-xs font-bold text-blue-900">150+ Partner Colleges</div>
              <div className="font-display font-bold text-base text-slate-900 mt-1">
                Direct University Tie-Ups
              </div>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Authorized admission &amp; placement partner for top NAAC A+ universities across Bhopal, Indore &amp; India.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5">
              <div className="text-xs font-bold text-amber-600">Dedicated Placement Wing</div>
              <div className="font-display font-bold text-base text-slate-900 mt-1">
                Guaranteed Placement Support
              </div>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Continuous skill development, internship drives, and MNC / Work-From-Home job placement assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
