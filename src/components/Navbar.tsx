"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "BTS", href: "#bts" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav
        className={`w-full px-6 md:px-12 py-5 md:py-6 flex justify-between items-center transition-colors duration-300 ${
          isScrolled
            ? "nav-bar-gradient border-b border-white/[0.05]"
            : "nav-bar-gradient"
        }`}
        aria-label="Main Navigation"
      >
        <Link
          href="#"
          className="text-[1.15rem] font-extrabold tracking-[0.03em] uppercase text-white/90 hover:text-white transition-opacity duration-300"
          id="nav-logo"
        >
          {PORTFOLIO_DATA.personal.name}
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="nav-link-item text-[0.85rem] font-normal tracking-[0.02em]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-5 h-[1.5px] bg-white transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-0" : "opacity-75"
            }`}
          />
          <span
            className={`w-5 h-[1.5px] bg-white transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[70px] bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 px-6 border-t border-white/[0.08]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium tracking-wide uppercase text-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
