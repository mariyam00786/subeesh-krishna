"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA, BtsItem } from "@/data/portfolioData";

export default function BehindTheScenes() {
  const { behindTheScenes } = PORTFOLIO_DATA;
  const [activeBtsModal, setActiveBtsModal] = useState<BtsItem | null>(null);

  return (
    <section id="bts" className="site-section">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-extrabold uppercase tracking-[0.03em] mb-2 text-white/90">
            BEHIND THE SCENES
          </h2>
          <p className="text-[0.95rem] text-white/60 font-normal">
            Set moments, lighting setups, and the process behind the final frame.
          </p>
        </motion.div>

        {/* Responsive 1:1 Square Grid (4 columns on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {behindTheScenes.map((item, index) => (
            <BtsCardItem
              key={item.id}
              item={item}
              index={index}
              onSelect={() => setActiveBtsModal(item)}
            />
          ))}
        </div>
      </div>

      {/* BTS Lightbox Modal */}
      <AnimatePresence>
        {activeBtsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveBtsModal(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 md:p-8 flex items-center justify-center cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[85vh] bg-[#0A0A0A] border border-white/[0.15] rounded-[10px] overflow-hidden shadow-2xl flex flex-col cursor-default"
            >
              <div className="relative flex-1 min-h-[400px] md:min-h-[550px] w-full bg-black">
                <Image
                  src={activeBtsModal.image}
                  alt={activeBtsModal.alt}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  quality={95}
                  priority
                  className="object-contain"
                />
              </div>
              <div className="p-4 md:p-5 flex items-center justify-between border-t border-white/[0.08] bg-[#0d0d0d]">
                <p className="text-xs uppercase tracking-wider text-white/60">
                  {activeBtsModal.alt}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveBtsModal(null)}
                  className="px-4 py-1.5 text-xs uppercase tracking-widest text-white/70 hover:text-white border border-white/20 rounded-full hover:border-white/50 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function BtsCardItem({
  item,
  index,
  onSelect,
}: {
  item: BtsItem;
  index: number;
  onSelect: () => void;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.07 }}
      onClick={onSelect}
      className="group relative aspect-square rounded-[10px] overflow-hidden border border-white/[0.08] bg-[#0A0A0A] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-white/[0.18] hover:brightness-[1.06]"
      tabIndex={0}
      role="button"
      aria-label={item.alt}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onSelect();
        }
      }}
    >
      {/* Dark Shimmer Skeleton Placeholder */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-white/[0.02] via-white/[0.06] to-white/[0.02] animate-pulse transition-opacity duration-700 pointer-events-none ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      />

      <Image
        src={item.image}
        alt={item.alt}
        fill
        loading="lazy"
        quality={90}
        onLoad={() => setIsLoaded(true)}
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 33vw, (max-width: 1400px) 25vw, 380px"
        className={`object-cover transition-all duration-700 group-hover:scale-[1.02] ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </motion.div>
  );
}

