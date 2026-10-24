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
    <section className="bg-slate-950 border-b border-slate-800 py-3 sm:py-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {posters.length === 0 ? (
          /* Sleek Default Welcome Notification Banner when no custom posters are uploaded yet */
          <div className="bg-linear-to-r from-blue-950/90 via-slate-900 to-blue-950/90 border border-amber-400/35 rounded-2xl px-4 py-3 sm:px-6 sm:py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 font-bold text-sm shadow-xs">
                <i className="fa-solid fa-bullhorn"></i>
              </span>
              <div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Latest Announcement
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white">
                    Welcome to Knowledge Gurukul Bhopal (KGB Group) — 2026 Mega Placement &amp; WFH Hiring Drive Open!
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Walk-in or apply online for WFH Tele-Caller, Data Entry (Rs. 25,000/mo), and MNC Customer Support roles at Zone I, MP Nagar, Bhopal.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onApplyClick}
              className="cursor-pointer shrink-0 px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs transition-all flex items-center gap-1.5 shadow-xs"
            >
              <span>Register Free</span>
              <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        ) : (
          /* Dynamic Posters Grid / Carousel when Admin uploads posters */
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <i className="fa-solid fa-bullhorn"></i>
                <span>Latest Announcements &amp; Hiring Drives ({posters.length})</span>
              </div>
              <span className="text-[11px] text-slate-400 hidden sm:inline">
                Click any poster for full-screen preview
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {posters.map((poster) => (
                <div
                  key={poster.id}
                  onClick={() => setSelectedPoster(poster)}
                  className="cursor-pointer group bg-slate-900 rounded-2xl border border-amber-400/40 hover:border-amber-400 overflow-hidden shadow-lg transition-all flex items-center gap-3.5 p-2.5"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-slate-800 shrink-0 relative">
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
                      New Drive Poster
                    </span>
                    <h3 className="font-display font-bold text-sm text-white group-hover:text-amber-300 transition-colors truncate">
                      {poster.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Posted {new Date(poster.createdAt).toLocaleDateString('en-IN')} &bull; Tap to view
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
                className="cursor-pointer w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center"
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
