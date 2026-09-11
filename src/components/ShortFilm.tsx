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
      className="relative w-full min-h-[calc(100vh-70px)] flex flex-col justify-center bg-black px-6 md:px-12 lg:px-16 py-4 md:py-6 border-b border-white/[0.08] overflow-hidden scroll-mt-[70px]"
    >
      {/* Ambient background cinematic lighting accents */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-1/4 w-[350px] h-[250px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[840px] w-full mx-auto my-auto flex flex-col justify-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-2.5 md:mb-3 flex flex-col items-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[0.68rem] font-semibold tracking-[0.14em] uppercase mb-1 shadow-[0_0_15px_rgba(245,158,11,0.12)]">
            <Film className="w-3 h-3" />
            <span>{shortFilm.badge}</span>
          </div>

          {/* Title */}
          <h2 className="text-[clamp(1.5rem,2.6vw,2.2rem)] font-extrabold uppercase tracking-[0.04em] text-white/95 leading-tight mb-0.5">
            {shortFilm.title}
          </h2>

          {/* Subtitle */}
          <p className="text-[clamp(0.72rem,0.95vw,0.84rem)] font-medium text-amber-300/85 tracking-[0.12em] uppercase mb-1">
            {shortFilm.subtitle}
          </p>

          {/* Logline */}
          <p className="max-w-[560px] text-[0.76rem] md:text-[0.82rem] text-white/60 font-normal leading-[1.45] [text-wrap:balance]">
            {shortFilm.logline}
          </p>
        </motion.div>

        {/* Centerpiece Cinema Screen Player */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="relative aspect-video w-full mx-auto rounded-[12px] overflow-hidden border border-white/[0.12] bg-[#070707] shadow-[0_0_50px_-15px_rgba(245,158,11,0.15)] transition-all duration-500 hover:border-amber-500/40 hover:shadow-[0_0_65px_-10px_rgba(245,158,11,0.22)] group"
          style={{
            maxHeight: "min(390px, 44vh)",
          }}
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
                sizes="(max-width: 840px) 100vw, 840px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025] filter brightness-[0.95] group-hover:brightness-105"
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60 pointer-events-none" />

              {/* Pulsing Play Button */}
              <div className="relative z-10 flex flex-col items-center gap-1.5">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-14 h-14 md:w-16 md:h-16 rounded-full bg-amber-500/25 animate-ping pointer-events-none" />
                  <div className="w-11 h-11 md:w-13 md:h-13 rounded-full bg-black/70 backdrop-blur-md border border-amber-400/40 flex items-center justify-center text-white shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-300">
                    <Play className="w-5 h-5 md:w-5 md:h-5 fill-current ml-0.5 transition-transform duration-300 group-hover:scale-105" />
                  </div>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/90 text-[0.68rem] font-semibold tracking-[0.12em] uppercase transition-all duration-300 group-hover:border-amber-400/50 group-hover:text-white">
                  <Sparkles className="w-3 h-3 text-amber-400" />
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
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="w-full mx-auto mt-2.5 p-2.5 md:p-3 rounded-[10px] bg-[#0c0c0c]/90 border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-2.5 md:gap-4"
        >
          {/* Credit Pills */}
          <div className="flex flex-wrap items-center gap-x-5 md:gap-x-7 gap-y-1">
            {shortFilm.credits.map((item, idx) => (
              <div key={idx} className="flex flex-col whitespace-nowrap">
                <span className="text-[0.62rem] font-medium tracking-[0.1em] uppercase text-white/40">
                  {item.label}
                </span>
                <span className="text-[0.76rem] md:text-[0.80rem] font-semibold text-white/90 mt-0.5">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* External Action */}
          <div className="flex items-center gap-2 pt-1.5 md:pt-0 border-t md:border-t-0 border-white/[0.08] shrink-0">
            <a
              href={shortFilm.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill group flex items-center gap-1.5 !py-1.5 !px-3.5 text-[0.70rem] whitespace-nowrap"
            >
              <span>WATCH ON YOUTUBE</span>
              <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
