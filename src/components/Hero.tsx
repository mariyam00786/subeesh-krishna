"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-black overflow-hidden px-6 md:px-8 pt-20 pb-16"
    >
      {/* Blurred background base layer for smooth mobile responsiveness and depth */}
      <div
        className="absolute -inset-[10%] z-0 pointer-events-none opacity-30 blur-2xl md:hidden"
        aria-hidden="true"
      >
        <Image
          src="/images/hero-bw.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[75%_center] scale-110"
        />
      </div>

      {/* Main hero image layer positioned seamlessly across the right side */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="/images/hero-bw.jpg"
          alt={`${personal.name} - Cinematographer, Video Editor, Director`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_center] md:object-center"
        />
      </div>

      {/* Subtle cinematic gradient overlay for pristine text contrast and atmosphere */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-b from-black/40 via-black/20 to-black/70 md:from-black/25 md:via-transparent md:to-black/50"
        aria-hidden="true"
      />

      {/* Hero content - centered exactly like reference design */}
      <div className="relative z-10 max-w-[720px] w-full mx-auto flex flex-col items-center text-center">
        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.6rem,7vw,5rem)] font-bold tracking-[0.04em] leading-[0.95] text-white uppercase mb-3 md:mb-4 selection:bg-white selection:text-black"
        >
          {personal.name}
        </motion.h1>

        {/* Role Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(0.72rem,1.15vw,0.92rem)] font-normal tracking-[0.20em] md:tracking-[0.22em] uppercase text-white/70 mb-6 md:mb-7"
        >
          {personal.role}
        </motion.p>

        {/* Hero Bio Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-1 md:space-y-1.5 text-white/65 max-w-[660px]"
        >
          {personal.heroIntro.map((line, idx) => (
            <p
              key={idx}
              className="text-[0.88rem] md:text-[0.95rem] font-normal leading-[1.7] [text-wrap:balance]"
            >
              {line}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

