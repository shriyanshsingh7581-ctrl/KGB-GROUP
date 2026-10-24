import React from 'react';

interface MobileQuickBarProps {
  onApplyClick: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onApplyClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 py-2 sm:hidden shadow-[0_-4px_20px_rgba(15,23,42,0.08)]">
      <div className="grid grid-cols-12 gap-2 items-center max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href="tel:+917987683263"
          className="col-span-4 py-3 px-2 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs active:scale-95 transition-transform"
        >
          <i className="fa-solid fa-phone text-amber-400 text-xs"></i>
          <span>Call HR</span>
        </a>

        {/* Primary Apply Now Button */}
        <button
          onClick={onApplyClick}
          className="col-span-5 py-3 px-3 rounded-xl bg-linear-to-r from-amber-400 to-amber-500 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform cursor-pointer"
        >
          <i className="fa-solid fa-paper-plane text-xs"></i>
          <span>Apply Now</span>
        </button>

        {/* Direct WhatsApp Button with Online Badge */}
        <a
          href="https://wa.me/917987683263?text=Hi%20KGB%20Group%20Knowledge%20Gurukul,%20I%20am%20interested%20in%20applying%20for%20job%20openings."
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-3 relative py-3 px-2 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1 shadow-2xs active:scale-95 transition-transform"
          aria-label="Chat on WhatsApp +91 7987683263"
        >
          <i className="fa-brands fa-whatsapp text-base"></i>
          <span>Chat</span>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white animate-pulse"></span>
        </a>
      </div>
    </div>
  );
};
