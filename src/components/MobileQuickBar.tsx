import React from 'react';

interface MobileQuickBarProps {
  onApplyClick: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onApplyClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 sm:hidden shadow-lg flex items-center gap-2">
      <a
        href="tel:+917987683263"
        className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs active:bg-slate-800"
      >
        <i className="fa-solid fa-phone text-amber-400 text-xs"></i>
        <span>Call Helpline</span>
      </a>

      <button
        onClick={onApplyClick}
        className="flex-1 py-2.5 px-3 rounded-xl bg-linear-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-xs active:from-amber-500 active:to-amber-600"
      >
        <i className="fa-solid fa-paper-plane text-xs"></i>
        <span>Apply Online</span>
      </button>

      <a
        href="https://wa.me/917987683263?text=Hi%20KGB%20Group,%20I%20want%20to%20apply%20for%20vacancies."
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs"
        aria-label="Direct WhatsApp Message"
      >
        <i className="fa-brands fa-whatsapp text-lg"></i>
      </a>
    </div>
  );
};
