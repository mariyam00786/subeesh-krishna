"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA, ServiceItem } from "@/data/portfolioData";

function renderServiceIcon(iconType: ServiceItem["iconType"]) {
  switch (iconType) {
    case "camera":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255, 255, 255, 0.45)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-colors duration-300 group-hover:stroke-white/80"
        >
          <rect x="2" y="6" width="14" height="12" rx="2" />
          <path d="M16 10l4-2v8l-4-2" />
          <circle cx="7" cy="12" r="2" />
          <circle cx="12" cy="12" r="1" />
        </svg>
      );
    case "edit":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255, 255, 255, 0.45)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-colors duration-300 group-hover:stroke-white/80"
        >
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      );
    case "workflow":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255, 255, 255, 0.45)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-colors duration-300 group-hover:stroke-white/80"
        >
          <line x1="4" y1="21" x2="4" y2="14" />
          <line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" />
          <line x1="20" y1="12" x2="20" y2="3" />
          <line x1="1" y1="14" x2="7" y2="14" />
          <line x1="9" y1="8" x2="15" y2="8" />
          <line x1="17" y1="16" x2="23" y2="16" />
        </svg>
      );
    case "direction":
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255, 255, 255, 0.45)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-colors duration-300 group-hover:stroke-white/80"
        >
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
  }
}

export default function Services() {
  const { services } = PORTFOLIO_DATA;

  return (
    <section id="services" className="site-section">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-extrabold uppercase tracking-[0.03em] mb-2 text-white/90">
            HOW I CAN HELP
          </h2>
          <p className="text-[0.95rem] text-white/60 font-normal">
            Visuals, edits, and finishing.
          </p>
        </motion.div>

        {/* 4-column responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-[10px] border border-white/[0.08] bg-white/[0.01] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-white/[0.18] hover:bg-white/[0.02]"
            >
              <span className="block mb-5 opacity-90">
                {renderServiceIcon(service.iconType)}
              </span>
              <h3 className="text-[0.95rem] font-bold uppercase tracking-[0.03em] mb-3 text-white/90 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[0.9rem] font-normal text-white/55 leading-relaxed group-hover:text-white/85 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
