import React from 'react';

interface MobileQuickBarProps {
  onApplyClick: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onApplyClick }) => {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2">
      <div className="grid grid-cols-3 gap-2">
        <a
          href="tel:+917987683263"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-slate-800 text-white font-bold text-xs whitespace-nowrap shrink-0"
        >
          <i className="fa-solid fa-phone text-amber-400 text-[11px]"></i>
          <span>Call Now</span>
        </a>

        <a
          href="https://wa.me/917987683263?text=Hello%20KGB%20Group%20(Knowledge%20Gurukul)%2C%20I%20want%20to%20book%20a%20free%20admission%20and%20career%20counseling%20slot."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald-600 text-white font-bold text-xs whitespace-nowrap shrink-0"
        >
          <i className="fa-brands fa-whatsapp text-sm"></i>
          <span>Book via WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={onApplyClick}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-amber-400 text-slate-950 font-extrabold text-xs whitespace-nowrap shrink-0 cursor-pointer"
        >
          <i className="fa-regular fa-calendar-check text-[11px]"></i>
          <span>Book Slot</span>
        </button>
      </div>
    </div>
  );
};
