"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-8 overflow-hidden pt-20 pb-16 bg-black"
    >
      {/* Atmospheric blurred background layer */}
      <div
        className="absolute -top-[10%] -left-[10%] -right-[10%] -bottom-[10%] z-0 pointer-events-none filter blur-[40px] brightness-[0.35] grayscale scale-125 overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="/images/hero.jpeg"
          alt="Atmospheric background"
          fill
          priority
          className="object-cover object-[center_25%]"
        />
      </div>

      {/* Main hero background photo layer with user's real on-set photography */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-45 md:opacity-60 filter grayscale contrast-[1.12] brightness-[0.85]"
        aria-hidden="true"
      >
        <Image
          src="/images/hero.jpeg"
          alt="Subeesh Krishna Operating Cinema Camera on Crane"
          fill
          priority
          className="object-cover object-[center_22%]"
        />
      </div>

      {/* Dark gradient overlay for text readability and cinematic mood */}
      <div
        className="absolute inset-0 z-[2] bg-gradient-to-b from-black/55 via-black/65 to-black/95 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[850px] mx-auto flex flex-col items-center">
        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.4rem,7.5vw,5.2rem)] font-bold tracking-[0.04em] leading-[0.92] text-white/90 uppercase mb-3 md:mb-4 selection:bg-white selection:text-black"
        >
          {personal.name}
        </motion.h1>

        {/* Role Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(0.72rem,1.2vw,0.92rem)] font-normal tracking-[0.18em] uppercase text-white/60 mb-5 md:mb-7"
        >
          {personal.role}
        </motion.p>

        {/* Hero Bio Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[680px] px-4 space-y-1 mb-6 md:mb-8"
        >
          {personal.heroIntro.map((line, idx) => (
            <p
              key={idx}
              className="text-[0.88rem] md:text-[0.95rem] font-normal text-white/60 leading-[1.65] [text-wrap:balance]"
            >
              {line}
            </p>
          ))}
        </motion.div>

        {/* CTA Button linking to Projects section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#projects"
            className="btn-pill group flex items-center gap-2"
          >
            <span>VIEW PROJECTS</span>
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
