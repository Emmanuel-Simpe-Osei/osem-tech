"use client";

import { useEffect, useRef } from "react";

const highlights = [
  {
    icon: "🎯",
    title: "Mission",
    body: "To empower Ghanaian and African businesses with affordable, world-class digital technology that drives growth.",
  },
  {
    icon: "🌍",
    title: "Vision",
    body: "To be Africa's most trusted digital partner, known for quality, speed, and client success.",
  },
  {
    icon: "🤝",
    title: "Values",
    body: "Integrity, excellence, innovation, and a genuine commitment to client satisfaction in every project.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const els = sectionRef.current?.querySelectorAll(".reveal, .stagger");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24" ref={sectionRef} style={{ background: "var(--section-alt)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="section-label mb-4">Who We Are</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 gold-underline" style={{ color: "var(--text)" }}>
            About OSEM Technologies
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed mt-6" style={{ color: "var(--text-light)" }}>
            Founded in Accra, Ghana, OSEM Technologies is a full-service digital agency delivering
            websites, web applications, mobile apps, payment integrations, and cybersecurity solutions
            to businesses that want to compete at the highest level.
          </p>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid md:grid-cols-3 gap-6 stagger">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="p-7 rounded-2xl border transition-transform duration-300 hover:-translate-y-1"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--light-border)",
              }}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-display text-xl font-bold mb-3" style={{ color: "var(--text)" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-light)" }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div
          className="mt-12 p-8 rounded-2xl text-center reveal"
          style={{
            background: "linear-gradient(135deg, #00004E, #000070)",
            border: "1px solid rgba(255,182,6,0.2)",
          }}
        >
          <p className="text-lg font-medium" style={{ color: "rgba(255,255,255,0.9)" }}>
            From a single landing page to a full enterprise platform, we build it right,
            the first time.
          </p>
          <div
            className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold cursor-pointer transition-colors"
            style={{ background: "rgba(255,182,6,0.15)", color: "#FFB606", border: "1px solid rgba(255,182,6,0.3)" }}
          >
            🇬🇭 Based in Accra &bull; Serving Ghana &amp; Beyond
          </div>
        </div>
      </div>
    </section>
  );
}
