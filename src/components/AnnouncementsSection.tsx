import React, { useState, useEffect } from 'react';
import { PosterRecord, subscribeToPosters } from '../firebase';

interface AnnouncementsSectionProps {
  onApplyClick: () => void;
}

export const AnnouncementsSection: React.FC<AnnouncementsSectionProps> = ({ onApplyClick }) => {
  const [posters, setPosters] = useState<PosterRecord[]>([]);
  const [selectedPoster, setSelectedPoster] = useState<PosterRecord | null>(null);

  useEffect(() => {
    const unsub = subscribeToPosters((items) => {
      setPosters(items);
    });
    return () => unsub();
  }, []);

  return (
    <section className="bg-slate-950 border-b border-slate-800/80 py-2 sm:py-3 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {posters.length === 0 ? (
          /* Compact, high-contrast mobile-friendly announcement bar */
          <div className="bg-linear-to-r from-blue-950/90 via-slate-900 to-blue-950/90 border border-amber-400/30 rounded-xl px-3 py-2 sm:px-5 sm:py-2.5 flex items-center justify-between gap-2.5 shadow-sm">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 font-bold text-xs shadow-2xs">
                <i className="fa-solid fa-bullhorn"></i>
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-block text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                    2026–27 Session
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-white truncate">
                    Admissions, Career Counseling &amp; Mega Placement Drives Open!
                  </p>
                </div>
                <p className="text-[11px] text-slate-300 truncate hidden sm:block">
                  Book 1-on-1 counseling or apply for WFH &amp; Corporate roles at Zone-2, MP Nagar, Bhopal.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onApplyClick}
              className="cursor-pointer shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-[11px] sm:text-xs transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <span>Book Now</span>
              <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        ) : (
          /* Horizontal snap carousel on mobile, grid on desktop */
          <div className="space-y-2.5">
            <div className="flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-amber-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <i className="fa-solid fa-bullhorn"></i>
                <span>Latest Announcements &amp; Drives ({posters.length})</span>
              </div>
              <span className="text-[11px] text-slate-400">
                Tap poster to enlarge
              </span>
            </div>

            <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-1">
              {posters.map((poster) => (
                <div
                  key={poster.id}
                  onClick={() => setSelectedPoster(poster)}
                  className="snap-start shrink-0 w-[85%] sm:w-auto cursor-pointer group bg-slate-900 rounded-2xl border border-amber-400/35 hover:border-amber-400 overflow-hidden shadow-md transition-all flex items-center gap-3 p-2.5"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-slate-800 shrink-0 relative">
                    <img
                      src={poster.imageUrl}
                      alt={poster.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute bottom-1 right-1 w-5 h-5 rounded bg-slate-950/80 text-amber-400 flex items-center justify-center text-[10px]">
                      <i className="fa-solid fa-expand"></i>
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 pr-1">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-1">
                      Official Notice
                    </span>
                    <h3 className="font-display font-bold text-xs sm:text-sm text-white group-hover:text-amber-300 transition-colors truncate">
                      {poster.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      {new Date(poster.createdAt).toLocaleDateString('en-IN')} · Tap to view
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Full-Screen Poster Preview Modal */}
      {selectedPoster && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPoster(null)}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-3.5 bg-slate-950 text-white flex items-center justify-between border-b border-slate-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                  Official KGB Group Announcement
                </span>
                <h3 className="font-display font-bold text-sm sm:text-base text-white">
                  {selectedPoster.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPoster(null)}
                className="cursor-pointer w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="p-4 bg-slate-950 max-h-[75vh] overflow-auto flex justify-center">
              <img
                src={selectedPoster.imageUrl}
                alt={selectedPoster.title}
                className="max-h-[68vh] w-auto object-contain rounded-xl border border-slate-800"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
