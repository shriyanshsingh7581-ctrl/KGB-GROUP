import React from 'react';

interface MobileQuickBarProps {
  onApplyClick: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onApplyClick }) => {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-xl border-t border-amber-400/25 px-3 py-2 pb-safe shadow-[0_-10px_30px_rgba(2,6,23,0.65)]">
      <div className="grid grid-cols-12 gap-2 items-center">
        {/* Call Now (3 cols) */}
        <a
          href="tel:+917987683263"
          className="col-span-3 min-h-[46px] flex flex-col items-center justify-center rounded-xl bg-slate-900 border border-slate-700/90 text-white active:scale-95 transition-transform"
        >
          <i className="fa-solid fa-phone text-amber-400 text-xs"></i>
          <span className="text-[10px] font-bold tracking-tight mt-0.5">Call Now</span>
        </a>

        {/* WhatsApp Chat (4 cols) */}
        <a
          href="https://wa.me/917987683263?text=Hello%20KGB%20Group%20(Knowledge%20Gurukul)%2C%20I%20want%20to%20book%20a%20free%20admission%20and%20career%20counseling%20slot."
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-4 min-h-[46px] flex items-center justify-center gap-1.5 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs active:scale-95 transition-transform shadow-sm"
        >
          <i className="fa-brands fa-whatsapp text-base"></i>
          <span>WhatsApp</span>
        </a>

        {/* Primary CTA: Book Slot (5 cols) */}
        <button
          type="button"
          onClick={onApplyClick}
          className="col-span-5 min-h-[46px] flex items-center justify-center gap-1.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-display font-extrabold text-xs active:scale-95 transition-transform shadow-md shadow-amber-400/20 cursor-pointer"
        >
          <i className="fa-regular fa-calendar-check text-xs"></i>
          <span>Book Free Slot</span>
        </button>
      </div>
    </div>
  );
};
