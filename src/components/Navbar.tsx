"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        style={{
          backgroundColor: "#00004E",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,78,0.18)" : "none",
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-xl font-bold tracking-wide"
            style={{ color: "#FFFFFF" }}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <span style={{ color: "#FFB606" }}>OSEM</span>{" "}
            <span className="font-light opacity-90">Technologies</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.82)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFB606")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.82)")}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#contact")}
              className="ml-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
              style={{ background: "#FFB606", color: "#00004E" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#FFC933")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#FFB606")}
            >
              Get a Quote
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-0.5 transition-all duration-300"
              style={{
                background: "#FFB606",
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-300"
              style={{
                background: "#FFB606",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-300"
              style={{
                background: "#FFB606",
                transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 flex flex-col pt-16 transition-all duration-300 md:hidden"
        style={{
          background: "#00002E",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <div className="flex flex-col items-center gap-6 pt-12">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="text-lg font-medium transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.82)" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("#contact")}
            className="mt-4 px-8 py-3 rounded-lg font-semibold"
            style={{ background: "#FFB606", color: "#00004E" }}
          >
            Get a Quote
          </button>
        </div>
      </div>
    </>
  );
}
