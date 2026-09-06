"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Showreel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { showreel } = PORTFOLIO_DATA;

  return (
    <section id="showreel" className="site-section">
      <div className="max-w-[1000px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-extrabold uppercase tracking-[0.03em] mb-2 text-white/90">
            {showreel.title}
          </h2>
          <p className="text-[0.95rem] text-white/60 font-normal">
            {showreel.subtitle}
          </p>
        </motion.div>

        {/* Video Player / Thumbnail Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative aspect-video w-full rounded-[10px] overflow-hidden border border-white/[0.08] bg-[#0A0A0A] group shadow-2xl transition-colors duration-300 hover:border-white/[0.18]"
        >
          {!isPlaying ? (
            <div
              onClick={() => setIsPlaying(true)}
              className="relative w-full h-full cursor-pointer overflow-hidden flex items-center justify-center"
              role="button"
              tabIndex={0}
              aria-label="Play showreel video"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setIsPlaying(true);
                }
              }}
            >
              {/* Thumbnail Image */}
              <Image
                src={showreel.thumbnail}
                alt="Subeesh Krishna Cinematography Showreel"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-cover transition-all duration-500 filter brightness-95 group-hover:brightness-105 group-hover:scale-[1.015]"
              />

              {/* Dark subtle overlay */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />

              {/* Play Button Icon */}
              <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 border-2 border-white/30 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-white/20 group-hover:border-white/50 shadow-lg">
                <div className="w-0 h-0 border-y-[10px] border-y-transparent md:border-y-[12px] border-l-[16px] md:border-l-[20px] border-l-white/90 ml-1" />
              </div>
            </div>
          ) : (
            <iframe
              src={`https://player.vimeo.com/video/${showreel.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
              className="w-full h-full border-0 absolute inset-0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
              title="Cinematography Showreel"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
