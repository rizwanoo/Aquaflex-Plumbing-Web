import React, { useState } from 'react';
import { Play, Pause, Youtube, ExternalLink, Film } from 'lucide-react';
import { VERIFIED_MEDIA, BRAND_CONFIG } from '../data/brandData';
import { VideoContent } from '../types';

interface InlineMediaShowcaseProps {
  title?: string;
  subtitle?: string;
}

export const InlineMediaShowcase: React.FC<InlineMediaShowcaseProps> = ({
  title = 'REAL CREATOR CONTENT & TRADES TALK',
  subtitle = 'Authentic jobsite breakdowns, physical discipline protocols, and direct advice from @homieplumbing.'
}) => {
  const [activeVideo, setActiveVideo] = useState<VideoContent>(VERIFIED_MEDIA[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-600 font-mono">
              <Youtube className="w-4 h-4 text-red-600" />
              <span>Official YouTube &amp; Facebook Creator Stream</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-zinc-950 font-display">
              {title}
            </h2>
            <p className="text-sm text-zinc-600">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={BRAND_CONFIG.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-900 bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 rounded-xs flex items-center gap-2 transition-colors"
            >
              <Youtube className="w-4 h-4 text-red-600" />
              <span>YouTube @homieplumbing</span>
            </a>
          </div>
        </div>

        {/* Media Layout: Clean, non-overlapping 2-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Full Video Screen + Docked Controls Below */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-4">
            
            {/* Video Viewport */}
            <div className="relative aspect-video w-full bg-black rounded-xs overflow-hidden border border-zinc-300 shadow-md flex items-center justify-center group">
              <img
                src={activeVideo.thumbnail}
                alt={activeVideo.title}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  isPlaying ? 'scale-102 filter brightness-100' : 'scale-100 filter brightness-90'
                }`}
              />

              {/* Centered Play Button */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-zinc-950 hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center justify-center cursor-pointer"
                  aria-label={isPlaying ? 'Pause video preview' : 'Play video preview'}
                >
                  {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                </button>
              </div>

              {/* Top HUD Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs pointer-events-none">
                <span className="bg-black/75 backdrop-blur-xs text-white px-2.5 py-1 font-mono text-[11px] rounded-xs border border-white/20 font-bold">
                  {activeVideo.category}
                </span>
                <span className="bg-black/75 backdrop-blur-xs text-white px-2.5 py-1 font-mono text-[11px] rounded-xs border border-white/20 font-bold">
                  {activeVideo.duration}
                </span>
              </div>
            </div>

            {/* Video Details & Action Dock (Cleanly placed below the video so nothing is covered!) */}
            <div className="p-5 bg-zinc-50 border border-zinc-200 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                  <Film className="w-3.5 h-3.5 text-sky-600" />
                  <span>@homieplumbing</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-sky-700 font-bold">{activeVideo.views}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold font-display uppercase tracking-tight text-zinc-950 leading-tight">
                  {activeVideo.title}
                </h3>
                <p className="text-xs text-zinc-600 line-clamp-2 pt-0.5">
                  {activeVideo.description}
                </p>
              </div>

              <a
                href={activeVideo.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:scale-95 transition-all rounded-xs flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
              >
                <Youtube className="w-4 h-4" />
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

          {/* Right Column: Playlist (Clean, legible, zero overlapping) */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-3">
            <div className="flex items-center justify-between pb-1 border-b border-zinc-200">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono">
                Featured Video Lessons
              </span>
              <span className="text-xs font-mono text-zinc-400">
                {VERIFIED_MEDIA.length} Episodes
              </span>
            </div>

            <div className="space-y-2.5">
              {VERIFIED_MEDIA.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveVideo(item);
                    setIsPlaying(true);
                  }}
                  className={`w-full p-4 text-left border rounded-xs transition-all cursor-pointer flex flex-col gap-1.5 ${
                    activeVideo.id === item.id
                      ? 'bg-sky-50 border-sky-500 text-zinc-950 shadow-xs'
                      : 'bg-zinc-50 border-zinc-200 hover:bg-white hover:border-zinc-300 text-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span className="font-bold text-sky-700">{item.category}</span>
                    <span>{item.duration}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-950 uppercase font-display leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-500 line-clamp-2">
                    {item.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
