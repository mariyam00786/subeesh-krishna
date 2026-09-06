"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Contact() {
  const { contact } = PORTFOLIO_DATA;

  return (
    <footer id="contact" className="pt-24 md:pt-28 pb-0 bg-black">
      <div className="max-w-[1000px] mx-auto text-center px-6 mb-20 md:mb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-extrabold uppercase tracking-[0.03em] mb-2 text-white/90">
            {contact.heading}
          </h2>
          <p className="text-[0.95rem] text-white/60 font-normal max-w-md mx-auto">
            {contact.subtitle}
          </p>
        </motion.div>

        {/* Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 md:gap-5 mt-10"
        >
          {/* CLIENT NOTE: Update Email address if needed */}
          <a
            href={`mailto:${contact.email}`}
            className="btn-pill w-full sm:w-auto"
            aria-label={`Send email to ${contact.email}`}
          >
            Email
          </a>

          {/* CLIENT NOTE: Update Phone numbers if needed */}
          <a
            href={`tel:${contact.phone}`}
            className="btn-pill w-full sm:w-auto"
            aria-label={`Call phone number ${contact.displayPhone}`}
          >
            {contact.displayPhone}
          </a>

          {/* CLIENT NOTE: Update Instagram link if needed */}
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill w-full sm:w-auto"
            aria-label="Visit Instagram profile"
          >
            Instagram
          </a>

          {/* CLIENT NOTE: Update Vimeo profile link if needed */}
          <a
            href={contact.vimeoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill w-full sm:w-auto"
            aria-label="Visit Vimeo channel"
          >
            Vimeo
          </a>

          {/* CLIENT NOTE: LinkedIn profile link */}
          {contact.linkedinUrl && (
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill w-full sm:w-auto"
              aria-label="Visit LinkedIn profile"
            >
              LinkedIn
            </a>
          )}
        </motion.div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-white/[0.08] py-8 text-center">
        <p className="text-[0.75rem] text-white/50 tracking-wider">
          &copy; {contact.copyrightYear} Subeesh Krishna. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
