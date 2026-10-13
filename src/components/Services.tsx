"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: "🌐",
    title: "Website Development",
    desc: "Professional, fast-loading websites that look great on every device. From landing pages to full business sites.",
    tags: ["Next.js", "React", "Tailwind"],
  },
  {
    icon: "⚙️",
    title: "Web Application Development",
    desc: "Custom web apps: dashboards, management systems, portals, SaaS platforms built for real business workflows.",
    tags: ["Node.js", "PostgreSQL", "APIs"],
  },
  {
    icon: "🛡️",
    title: "Cybersecurity Solutions",
    desc: "Protect your systems with security architecture, approved by defense-grade standards and tailored to your risk profile.",
    tags: ["Audits", "Hardening", "Compliance"],
  },
  {
    icon: "💳",
    title: "Payment Integration",
    desc: "Seamless integration of payment gateways for e-commerce, subscriptions, and mobile money across Ghana.",
    tags: ["Paystack", "MTN MoMo", "Telecel"],
  },
  {
    icon: "🔧",
    title: "Maintenance & Support",
    desc: "Ongoing technical maintenance plans: updates, monitoring, performance tuning, and same-day support.",
    tags: ["24/7 Support", "Uptime", "Updates"],
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    desc: "Native-quality mobile apps for iOS and Android, with offline support and seamless device integrations.",
    tags: ["React Native", "iOS", "Android"],
  },
];

export default function Services() {
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
    <section id="services" className="py-24" ref={sectionRef} style={{ background: "var(--off-white)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-label mb-4">What We Do</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--text)" }}>
            Our Services
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: "var(--text-light)" }}>
            End-to-end digital services from concept to deployment, and support beyond.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                background: "var(--card-bg)",
                borderColor: "var(--light-border)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ background: "rgba(0,0,78,0.08)" }}
              >
                {svc.icon}
              </div>
              <h3 className="font-display text-lg font-bold mb-3" style={{ color: "var(--text)" }}>
                {svc.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-light)" }}>
                {svc.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: "rgba(0,0,78,0.07)",
                      color: "var(--navy)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
