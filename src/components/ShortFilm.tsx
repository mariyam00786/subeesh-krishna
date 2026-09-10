"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Film, ExternalLink, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ShortFilm() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { shortFilm } = PORTFOLIO_DATA;

  return (
    <section
      id="short-film"
      className="relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-black overflow-hidden border-b border-white/[0.08]"
    >
      {/* Ambient background cinematic lighting accents */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14 flex flex-col items-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-[0.16em] uppercase mb-4 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
            <Film className="w-3.5 h-3.5" />
            <span>{shortFilm.badge}</span>
          </div>

          {/* Title */}
          <h2 className="text-[clamp(2rem,5vw,3.4rem)] font-extrabold uppercase tracking-[0.04em] text-white/95 leading-tight mb-2">
            {shortFilm.title}
          </h2>

          {/* Subtitle */}
          <p className="text-[clamp(0.85rem,1.4vw,1.05rem)] font-medium text-amber-300/80 tracking-[0.12em] uppercase mb-4">
            {shortFilm.subtitle}
          </p>

          {/* Logline */}
          <p className="max-w-[650px] text-[0.92rem] md:text-[0.98rem] text-white/60 font-normal leading-[1.7] [text-wrap:balance]">
            {shortFilm.logline}
          </p>
        </motion.div>

        {/* Centerpiece Cinema Screen Player */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative aspect-video w-full rounded-[14px] overflow-hidden border border-white/[0.12] bg-[#070707] shadow-[0_0_60px_-15px_rgba(245,158,11,0.12)] transition-all duration-500 hover:border-amber-500/40 hover:shadow-[0_0_70px_-10px_rgba(245,158,11,0.2)] group"
        >
          {!isPlaying ? (
            <div
              onClick={() => setIsPlaying(true)}
              className="relative w-full h-full cursor-pointer flex items-center justify-center overflow-hidden"
              role="button"
              tabIndex={0}
              aria-label="Play KANI Short Film"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setIsPlaying(true);
                }
              }}
            >
              {/* Thumbnail Image */}
              <Image
                src={shortFilm.thumbnail}
                alt={`${shortFilm.title} - ${shortFilm.subtitle}`}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1100px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] filter brightness-[0.95] group-hover:brightness-105"
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60 pointer-events-none" />

              {/* Pulsing Play Button */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full bg-amber-500/25 animate-ping pointer-events-none" />
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/70 backdrop-blur-md border border-amber-400/40 flex items-center justify-center text-white shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-300">
                    <Play className="w-7 h-7 md:w-8 md:h-8 fill-current ml-1 transition-transform duration-300 group-hover:scale-105" />
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/90 text-[0.78rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300 group-hover:border-amber-400/50 group-hover:text-white">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Watch Full Film</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${shortFilm.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={`${shortFilm.title} - ${shortFilm.subtitle}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          )}
        </motion.div>

        {/* Film Credits & Metadata Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 md:mt-8 p-5 md:p-6 rounded-[12px] bg-[#0c0c0c] border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-5"
        >
          {/* Credit Pills */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap items-center gap-4 md:gap-8">
            {shortFilm.credits.map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[0.72rem] font-medium tracking-[0.12em] uppercase text-white/40">
                  {item.label}
                </span>
                <span className="text-[0.88rem] md:text-[0.92rem] font-semibold text-white/90 mt-0.5">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* External Action */}
          <div className="flex items-center gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-white/[0.08]">
            <a
              href={shortFilm.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill group flex items-center gap-2 !py-2.5 !px-5 text-[0.8rem]"
            >
              <span>WATCH ON YOUTUBE</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
