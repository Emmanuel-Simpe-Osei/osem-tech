"use client";

import { useEffect, useRef } from "react";

const plans = [
  {
    name: "Starter",
    price: "GHS 1,500",
    desc: "Perfect for small businesses and personal brands that need a clean, professional online presence.",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "Contact form",
      "Basic SEO optimization",
      "1 month free support",
      "Delivery in 7–10 days",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "GHS 3,500",
    desc: "For growing businesses that need more functionality, custom features, and a stronger digital presence.",
    features: [
      "Up to 15 pages",
      "Custom UI design",
      "CMS integration",
      "Payment gateway",
      "Advanced SEO",
      "3 months free support",
      "Delivery in 14–21 days",
    ],
    cta: "Most Popular",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For large organizations needing complex systems, integrations, and dedicated ongoing support.",
    features: [
      "Unlimited pages",
      "Full custom development",
      "API integrations",
      "Cybersecurity audit",
      "Priority support",
      "SLA guarantee",
      "Dedicated project manager",
    ],
    cta: "Let's Talk",
    highlighted: false,
  },
];

export default function Pricing() {
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

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24" ref={sectionRef} style={{ background: "var(--off-white)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-label mb-4">Transparent Pricing</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--text)" }}>
            Simple, Honest Pricing
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: "var(--text-light)" }}>
            No hidden fees. Every plan includes everything listed. Custom projects are scoped and quoted individually.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 stagger">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1"
              style={
                plan.highlighted
                  ? {
                      background: "linear-gradient(145deg, #00004E, #000070)",
                      borderColor: "rgba(255,182,6,0.4)",
                      boxShadow: "0 8px 40px rgba(0,0,78,0.25)",
                    }
                  : {
                      background: "var(--card-bg)",
                      borderColor: "var(--light-border)",
                    }
              }
            >
              {plan.highlighted && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                  style={{ background: "#FFB606", color: "#00004E" }}
                >
                  Most Popular
                </div>
              )}

              <h3
                className="font-display text-xl font-bold mb-2"
                style={{ color: plan.highlighted ? "#FFFFFF" : "var(--text)" }}
              >
                {plan.name}
              </h3>

              <div className="mb-3">
                <span
                  className="font-display text-4xl font-extrabold"
                  style={{ color: plan.highlighted ? "#FFB606" : "var(--navy)" }}
                >
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-sm ml-1" style={{ color: plan.highlighted ? "rgba(255,255,255,0.6)" : "var(--muted)" }}>
                    starting from
                  </span>
                )}
              </div>

              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: plan.highlighted ? "rgba(255,255,255,0.7)" : "var(--text-light)" }}
              >
                {plan.desc}
              </p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm">
                    <span style={{ color: "#FFB606" }} className="mt-0.5 flex-shrink-0">✓</span>
                    <span style={{ color: plan.highlighted ? "rgba(255,255,255,0.82)" : "var(--text-light)" }}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105"
                style={
                  plan.highlighted
                    ? { background: "#FFB606", color: "#00004E" }
                    : {
                        background: "var(--navy)",
                        color: "#FFFFFF",
                      }
                }
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-8" style={{ color: "var(--muted)" }}>
          All prices in Ghanaian Cedis (GHS). International projects quoted in USD. Prices may vary based on scope.
        </p>
      </div>
    </section>
  );
}
