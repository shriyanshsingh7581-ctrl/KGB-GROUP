import React from 'react';

interface ContactMapSectionProps {
  onBookSlotClick: () => void;
}

export const ContactMapSection: React.FC<ContactMapSectionProps> = ({ onBookSlotClick }) => {
  return (
    <section id="contact" className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="text-xs font-bold text-amber-700 mb-2">
            Visit Our Counseling Center · Bhopal Headquarters
          </div>
          <h2
            className="font-display font-extrabold text-2xl sm:text-4xl text-slate-950 tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Connect With Our Academic Advisors at Zone-2, MP Nagar
          </h2>
          <p className="text-slate-600 text-xs sm:text-base mt-2.5 leading-relaxed">
            Walk in for a face-to-face counseling session with parents or connect directly over phone and WhatsApp for admission guidance, scholarship verification, and placement support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address, Contact Details & Trust Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#050A15] bg-luxury-grid text-white rounded-3xl p-6 sm:p-8 border border-amber-400/25 shadow-2xl space-y-6">
            <div className="space-y-6">
              <div>
                <div className="text-xs font-semibold text-amber-300">
                  Official Registered Counseling Center
                </div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mt-1">
                  KGB Group (Knowledge Gurukul)
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Empowering Students, Enabling Careers
                </p>
              </div>

              {/* Address & Contact Blocks */}
              <div className="space-y-4 pt-3 border-t border-white/10 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-300 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <span className="font-bold text-white block">Center Address:</span>
                    <span className="text-slate-300 leading-relaxed block mt-0.5">
                      Zone-2, MP Nagar, Bhopal, Madhya Pradesh - 462011
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Monday – Saturday · 10:00 AM to 7:00 PM
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 text-amber-300 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <div>
                    <span className="font-bold text-white block">Counseling &amp; Admission Helpline:</span>
                    <a
                      href="tel:+917987683263"
                      className="text-amber-300 font-bold text-base hover:underline tabular-nums block mt-0.5"
                    >
                      +91 7987683263
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                    <i className="fa-brands fa-whatsapp text-lg"></i>
                  </div>
                  <div>
                    <span className="font-bold text-white block">WhatsApp Student Desk:</span>
                    <a
                      href="https://wa.me/917987683263?text=Hello%20KGB%20Group%20(Knowledge%20Gurukul)%2C%20I%20would%20like%20to%20book%20a%20free%20admission%20and%20career%20counseling%20session."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 font-bold hover:underline block mt-0.5"
                    >
                      Chat Instantly on WhatsApp →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 text-amber-300 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <span className="font-bold text-white block">Official Email:</span>
                    <a
                      href="mailto:kgbbhopal01@gmail.com"
                      className="text-slate-200 hover:text-amber-300 hover:underline block mt-0.5"
                    >
                      kgbbhopal01@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Trust Highlights */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-xs">
                <div className="bg-[#0A1326] rounded-2xl p-3.5 border border-white/10">
                  <div className="font-bold text-amber-300">100% Genuine Guidance</div>
                  <div className="text-[11px] text-slate-300 mt-0.5">
                    Transparent fee &amp; college verification
                  </div>
                </div>
                <div className="bg-[#0A1326] rounded-2xl p-3.5 border border-white/10">
                  <div className="font-bold text-emerald-400">ISO &amp; MSME Certified</div>
                  <div className="text-[11px] text-slate-300 mt-0.5">
                    15 Lakh+ Students Guided
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onBookSlotClick}
                className="flex-1 py-3.5 px-4 rounded-xl bg-gold-foil text-slate-950 font-display font-extrabold text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap"
              >
                Book Center Visit Slot
              </button>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Zone+2+MP+Nagar+Bhopal+Madhya+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/15 font-semibold text-xs sm:text-sm text-center transition-colors inline-flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <i className="fa-solid fa-diamond-turn-right text-amber-400"></i>
                <span>Open Maps</span>
              </a>
            </div>
          </div>

          {/* Right Column: Integrated Google Map Embed Container for Zone-2, MP Nagar, Bhopal */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200/90 bg-[#FAF8F4] flex flex-col min-h-[380px] sm:min-h-[440px] shadow-md">
            <div className="bg-white px-5 py-4 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="font-bold text-slate-900">
                <i className="fa-solid fa-map-location-dot text-amber-600 mr-1.5"></i>
                Location Map: Zone-2, MP Nagar, Bhopal, Madhya Pradesh
              </div>
              <span className="text-slate-500">
                5 Mins from Rani Kamlapati Railway Station &amp; DB Mall
              </span>
            </div>
            <div className="flex-1 w-full relative min-h-[340px]">
              <iframe
                title="KGB Group (Knowledge Gurukul) - Zone-2, MP Nagar, Bhopal Location Map"
                src="https://maps.google.com/maps?q=Zone%202%20MP%20Nagar%20Bhopal%20Madhya%20Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
