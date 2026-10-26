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
    <section className="bg-[#050A15] border-b border-white/10 py-2.5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {posters.length === 0 ? (
          <div className="bg-linear-to-r from-[#0B152C] via-[#091224] to-[#0B152C] border border-amber-400/25 rounded-2xl px-3.5 py-2 sm:px-5 sm:py-2.5 flex items-center justify-between gap-3 shadow-sm">
            <div className="flex items-center gap-3 min-w-0">
              <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-amber-400/15 border border-amber-400/35 text-amber-300 flex items-center justify-center shrink-0 text-xs">
                <i className="fa-solid fa-bullhorn"></i>
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white truncate">
                  <span className="text-amber-300 font-bold shrink-0">2026–27 Admissions &amp; Drives:</span>
                  <span className="truncate text-slate-200">
                    1-on-1 College Counseling, Scholarship Verification &amp; WFH/Corporate Hiring Open at Zone-2, MP Nagar
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onApplyClick}
              className="cursor-pointer shrink-0 px-3.5 py-1.5 rounded-xl bg-white/[0.08] hover:bg-amber-400 hover:text-slate-950 text-amber-300 border border-amber-400/30 font-display font-bold text-[11px] sm:text-xs transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Reserve Slot</span>
              <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        ) : (
          <div className="space-y-2.5">
            <div className="flex items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 font-semibold text-amber-300">
                <i className="fa-solid fa-bullhorn"></i>
                <span>Latest Official Announcements &amp; Hiring Drives ({posters.length})</span>
              </div>
              <span className="text-[11px] text-slate-400">
                Select notice to inspect full poster
              </span>
            </div>

            <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-1">
              {posters.map((poster) => (
                <div
                  key={poster.id}
                  onClick={() => setSelectedPoster(poster)}
                  className="snap-start shrink-0 w-[85%] sm:w-auto cursor-pointer group bg-[#0A1326] rounded-2xl border border-amber-400/25 hover:border-amber-400/70 overflow-hidden transition-all flex items-center gap-3 p-2.5"
                >
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden bg-slate-900 shrink-0 relative border border-white/10">
                    <img
                      src={poster.imageUrl}
                      alt={poster.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="min-w-0 flex-1 pr-1">
                    <div className="text-[11px] text-amber-300/90 font-medium">
                      Official Notice · {new Date(poster.createdAt).toLocaleDateString('en-IN')}
                    </div>
                    <h3 className="font-display font-bold text-xs sm:text-sm text-white group-hover:text-amber-300 transition-colors truncate mt-0.5">
                      {poster.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Click to view full-resolution circular →
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
            className="bg-[#080F20] border border-white/15 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-3.5 bg-[#050A15] text-white flex items-center justify-between border-b border-white/10">
              <div>
                <span className="text-[11px] font-semibold text-amber-300 block">
                  Official KGB Group Announcement
                </span>
                <h3 className="font-display font-bold text-sm sm:text-base text-white">
                  {selectedPoster.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPoster(null)}
                className="cursor-pointer w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 flex items-center justify-center"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="p-4 bg-[#050A15] max-h-[75vh] overflow-auto flex justify-center">
              <img
                src={selectedPoster.imageUrl}
                alt={selectedPoster.title}
                referrerPolicy="no-referrer"
                className="max-h-[68vh] w-auto object-contain rounded-xl border border-white/10"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
