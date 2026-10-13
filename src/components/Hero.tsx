"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5+", label: "Years Experience" },
  { value: "30+", label: "Happy Clients" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current?.classList.add("visible");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #00002E 0%, #00004E 55%, #000070 100%)",
        paddingTop: "64px",
      }}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,182,6,0.5) 39px, rgba(255,182,6,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,182,6,0.5) 39px, rgba(255,182,6,0.5) 40px)",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-1/4 right-10 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{ background: "#FFB606" }}
      />
      <div
        className="absolute bottom-1/3 left-10 w-60 h-60 rounded-full opacity-8 blur-3xl"
        style={{ background: "#1D4ED8" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div ref={ref} className="stagger">
            <div className="section-label dark mb-6">
              Based in Accra, Ghana
            </div>

            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ color: "#FFFFFF" }}
            >
              We Build{" "}
              <span style={{ color: "#FFB606" }}>Digital Solutions</span>{" "}
              That Drive Real Results
            </h1>

            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
              From websites to web apps, mobile platforms to cybersecurity, OSEM Technologies
              delivers professional digital solutions built for businesses that want to grow.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3.5 rounded-lg font-semibold text-base transition-all duration-200 hover:scale-105"
                style={{ background: "#FFB606", color: "#00004E" }}
              >
                Start Your Project
              </a>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3.5 rounded-lg font-semibold text-base transition-all duration-200 border"
                style={{
                  color: "#FFFFFF",
                  borderColor: "rgba(255,255,255,0.3)",
                  background: "rgba(255,255,255,0.08)",
                }}
              >
                View Our Work
              </a>
            </div>
          </div>

          {/* Right: Stats card */}
          <div className="reveal">
            <div
              className="rounded-2xl p-8 border"
              style={{
                background: "rgba(255,255,255,0.06)",
                borderColor: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <div
                      className="font-display text-4xl font-bold mb-1"
                      style={{ color: "#FFB606" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-6 p-4 rounded-xl border"
                style={{
                  background: "rgba(255,182,6,0.1)",
                  borderColor: "rgba(255,182,6,0.25)",
                }}
              >
                <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                  🇬🇭 Proudly Ghanaian, serving clients globally
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>Scroll</div>
        <div
          className="w-0.5 h-8 rounded-full"
          style={{ background: "linear-gradient(to bottom, #FFB606, transparent)" }}
        />
      </div>
    </section>
  );
}
