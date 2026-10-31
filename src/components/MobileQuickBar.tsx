import React from 'react';
import { WHATSAPP_INQUIRY_URL } from './CampusGallerySection';

interface MobileQuickBarProps {
  onApplyClick: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onApplyClick }) => {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-[#050A15]/96 backdrop-blur-2xl border-t border-amber-400/25 px-2.5 py-2 pb-safe shadow-[0_-10px_30px_rgba(2,6,23,0.75)]">
      <div className="grid grid-cols-12 gap-1.5 items-center">
        {/* Sticky Mobile WhatsApp Inquiry CTA (8 cols) - Update WHATSAPP_INQUIRY_URL in CampusGallerySection.tsx */}
        <a
          href={WHATSAPP_INQUIRY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-8 min-h-[46px] flex items-center justify-center gap-1.5 px-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-display font-extrabold text-[11px] leading-tight active:scale-95 transition-transform shadow-sm text-center"
        >
          <i className="fa-brands fa-whatsapp text-base shrink-0"></i>
          <span className="truncate">Chat on WhatsApp: Job &amp; Training Inquiry</span>
        </a>

        {/* Primary CTA: Book Slot (4 cols) */}
        <button
          type="button"
          onClick={onApplyClick}
          className="col-span-4 min-h-[46px] flex items-center justify-center gap-1 px-2 rounded-xl bg-gold-foil text-slate-950 font-display font-extrabold text-[11px] active:scale-95 transition-transform cursor-pointer whitespace-nowrap"
        >
          <i className="fa-regular fa-calendar-check text-xs"></i>
          <span>Book Slot</span>
        </button>
      </div>
    </div>
  );
};
