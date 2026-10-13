"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Discovery & Scoping",
    desc: "We start with a detailed consultation to understand your goals, audience, and requirements. We map out the project scope, timeline, and budget together.",
  },
  {
    num: "02",
    title: "Design & Planning",
    desc: "Our team produces wireframes, UI designs, and a technical architecture plan before any code is written. You approve everything before we build.",
  },
  {
    num: "03",
    title: "Development & Testing",
    desc: "We build in sprints with regular updates. Every feature is tested for functionality, performance, and security before it moves forward.",
  },
  {
    num: "04",
    title: "Launch & Support",
    desc: "We handle deployment and every update after. Post-launch support, monitoring, and maintenance keep your product running at its best.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    const els = sectionRef.current?.querySelectorAll(".reveal, .stagger");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="py-24"
      ref={sectionRef}
      style={{ background: "linear-gradient(135deg, #00004E 0%, #000070 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-label dark mb-4">How We Work</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#FFFFFF" }}>
            Our Process
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: "rgba(255,255,255,0.7)" }}>
            A structured approach that ensures every project is delivered on time, on budget, and above expectations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="relative p-6 rounded-2xl border"
              style={{
                background: "rgba(255,255,255,0.06)",
                borderColor: "rgba(255,255,255,0.12)",
              }}
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-full w-6 h-0.5 -translate-y-1/2 z-10"
                  style={{ background: "rgba(255,182,6,0.4)" }}
                />
              )}

              <div
                className="font-display text-4xl font-bold mb-4 opacity-25"
                style={{ color: "#FFB606" }}
              >
                {step.num}
              </div>
              <div
                className="w-8 h-0.5 mb-4 rounded-full"
                style={{ background: "#FFB606" }}
              />
              <h3 className="font-display text-lg font-bold mb-3" style={{ color: "#FFFFFF" }}>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
