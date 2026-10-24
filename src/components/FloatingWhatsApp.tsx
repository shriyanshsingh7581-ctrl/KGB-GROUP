import React, { useState } from 'react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-5 sm:right-6 z-50 flex items-center gap-3">
      {/* Tooltip / Prompt bubble */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs px-3.5 py-2 rounded-xl shadow-lg border border-slate-700 transition-all duration-300 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-90'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span>
          <strong className="text-amber-400">Need Job Help?</strong> Chat on WhatsApp
        </span>
      </div>

      {/* Floating Action Button */}
      <a
        href="https://wa.me/917987683263?text=Hi%20KGB%20Group%20Knowledge%20Gurukul,%20I%20am%20interested%20in%20applying%20for%20job%20openings."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-110 active:scale-95 animate-bounce-subtle"
        aria-label="Chat on WhatsApp +91 7987683263"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping pointer-events-none"></span>

        <i className="fa-brands fa-whatsapp text-3xl"></i>

        {/* Live Notification Indicator */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-amber-400 text-slate-950 font-black text-[9px] rounded-full border-2 border-white flex items-center justify-center">
          1
        </span>
      </a>
    </div>
  );
};
