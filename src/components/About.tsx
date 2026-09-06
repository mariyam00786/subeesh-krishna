"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function About() {
  const { about } = PORTFOLIO_DATA;

  return (
    <section
      id="about"
      className="relative w-full min-h-fit md:min-h-screen flex flex-col justify-center bg-black px-6 md:px-12 lg:px-16 pt-24 md:pt-24 pb-12 md:pb-16 border-b border-white/[0.08]"
    >
      <div className="max-w-[1050px] w-full mx-auto my-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className="text-[clamp(1.35rem,2.2vw,1.75rem)] font-extrabold uppercase tracking-[0.03em] mb-1 text-white/90">
            {about.heading}
          </h2>
        </motion.div>

        {/* 2-Column Content: Text on Left (7 cols), Portrait on Right (5 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Bio Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-3.5 md:space-y-4 order-2 md:order-1 md:col-span-7"
          >
            {about.paragraphs.map((para, index) => (
              <p
                key={index}
                className="text-[0.90rem] md:text-[0.95rem] text-white/60 font-normal leading-[1.7]"
              >
                {para}
              </p>
            ))}
          </motion.div>

          {/* Portrait Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 md:col-span-5 flex justify-center md:justify-end"
          >
            <div className="relative aspect-[4/5] w-full max-w-[260px] sm:max-w-[290px] md:max-w-[310px] lg:max-w-[335px] rounded-[10px] overflow-hidden border border-white/[0.08] bg-[#0A0A0A] shadow-2xl transition-colors duration-300 hover:border-white/[0.18]">
              <Image
                src={about.portraitImage}
                alt="Subeesh Krishna T - Cinematographer and Director"
                fill
                sizes="(max-width: 768px) 290px, (max-width: 1100px) 35vw, 335px"
                className="object-cover transition-transform duration-500 hover:scale-[1.01]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
