"use client";

import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-start md:justify-center items-center text-center bg-black overflow-hidden px-4 md:px-8 pt-10 md:pt-20 pb-12 md:pb-16"
    >
      {/* DESKTOP BACKGROUND IMAGE (md and above) */}
      <div
        className="hidden md:block absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="/images/hero-bw.jpg"
          alt={`${personal.name} - Cinematographer, Video Editor, Director`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle cinematic gradient overlay on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/50" />
      </div>

      {/* MOBILE TOP IMAGE (phones & tablets < md) - placed at top like reference */}
      <div
        className="md:hidden relative w-full aspect-[16/9] max-h-[250px] pointer-events-none mb-4 z-0"
        aria-hidden="true"
      >
        <Image
          src="/images/hero-bw.jpg"
          alt={`${personal.name} - Cinematographer, Video Editor, Director`}
          fill
          priority
          sizes="100vw"
          className="object-contain object-top"
        />
        {/* Soft bottom fade to seamlessly blend into pure black text container */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      {/* Hero content - centered on both mobile and desktop */}
      <div className="relative z-10 max-w-4xl w-full mx-auto flex flex-col items-center text-center px-4">
        {/* Main Name Heading */}
        <h1 className="text-[clamp(1.95rem,8vw,2.5rem)] md:text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold tracking-[0.04em] leading-[1.0] text-white uppercase mb-2.5 md:mb-3 selection:bg-white selection:text-black">
          {personal.name}
        </h1>

        {/* Role Subtitle */}
        <p className="text-[0.68rem] md:text-[0.88rem] font-normal tracking-[0.14em] md:tracking-[0.2em] uppercase text-white/70 mb-5 md:mb-6">
          {personal.role}
        </p>

        {/* Hero Bio Paragraphs */}
        <div className="space-y-1.5 text-white/65 max-w-[620px]">
          {personal.heroIntro.map((line, idx) => (
            <p
              key={idx}
              className="text-[0.82rem] md:text-[0.93rem] font-normal leading-[1.65] md:leading-[1.7] [text-wrap:balance]"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}


