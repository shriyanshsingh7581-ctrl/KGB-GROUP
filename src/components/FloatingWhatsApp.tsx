import React from 'react';
import { WHATSAPP_INQUIRY_URL } from './CampusGallerySection';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="hidden sm:flex fixed bottom-6 right-6 z-50 items-center">
      {/* ====================================================================
          STICKY WHATSAPP CTA BUTTON (High-Conversion Focus)
          Update `WHATSAPP_INQUIRY_URL` in `src/components/CampusGallerySection.tsx`
          to change the destination WhatsApp number or pre-filled message.
          ==================================================================== */}
      <a
        href={WHATSAPP_INQUIRY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 pl-4 pr-3 py-2.5 rounded-full bg-[#050A15]/95 hover:bg-[#050A15] text-white border border-emerald-400/50 shadow-[0_14px_34px_rgba(2,6,23,0.55)] hover:shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
        aria-label="Chat on WhatsApp for Instant Job & Training Inquiry"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0"></span>
        <span className="font-display font-bold text-xs lg:text-sm tracking-tight text-white group-hover:text-emerald-300 transition-colors whitespace-nowrap">
          Chat on WhatsApp for Instant Job &amp; Training Inquiry
        </span>
        <span className="w-10 h-10 rounded-full bg-emerald-500 group-hover:bg-emerald-400 text-slate-950 flex items-center justify-center shrink-0 shadow-md transition-colors">
          <i className="fa-brands fa-whatsapp text-xl"></i>
        </span>
      </a>
    </div>
  );
};
