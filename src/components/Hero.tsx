"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-black overflow-hidden pt-24 pb-16 px-6 md:px-12 lg:px-16"
    >
      {/* Background ambient glow */}
      <div
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero photo positioned on right side - fully visible, properly exposed, natural framing */}
      <div
        className="absolute right-0 top-0 bottom-0 w-full md:w-[50%] lg:w-[48%] h-full z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/about.jpg"
            alt="Subeesh Krishna - Cinematographer, Video Editor, Director"
            fill
            priority
            className="object-cover object-[60%_52%] filter brightness-[1.32] contrast-[1.12] saturate-[1.08]"
          />
          {/* Subtle left fade only so text background stays pure black on desktop */}
          <div className="hidden md:block absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-black to-transparent" />
          {/* Subtle top/bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 to-transparent" />
          {/* Mobile-only subtle dark veil so text is crisp on phones */}
          <div className="md:hidden absolute inset-0 bg-black/45" />
        </div>
      </div>

      {/* Hero content - aligned on the left for maximum readability and visual balance */}
      <div className="relative z-10 max-w-[650px] w-full mx-auto md:mx-0 flex flex-col items-center md:items-start text-center md:text-left">
        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.4rem,6vw,4.8rem)] font-bold tracking-[0.04em] leading-[0.95] text-white/95 uppercase mb-3 md:mb-4 selection:bg-white selection:text-black"
        >
          {personal.name}
        </motion.h1>

        {/* Role Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(0.72rem,1.1vw,0.88rem)] font-medium tracking-[0.2em] uppercase text-white/70 mb-5 md:mb-6"
        >
          {personal.role}
        </motion.p>

        {/* Hero Bio Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-1.5 mb-7 md:mb-8 text-white/65 max-w-[560px]"
        >
          {personal.heroIntro.map((line, idx) => (
            <p
              key={idx}
              className="text-[0.88rem] md:text-[0.93rem] font-normal leading-[1.65]"
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
