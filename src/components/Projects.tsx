"use client";

import { useEffect, useRef } from "react";

// Genluz removed per client request
const projects = [
  {
    name: "OSEM Secure Vote",
    category: "Web Application",
    desc: "A secure, blockchain-inspired digital voting platform with real-time results, audit trails, and multi-factor authentication for credible elections.",
    tags: ["Next.js", "Security", "Real-time"],
    badge: "Flagship",
  },
  {
    name: "OSEM Storefront",
    category: "E-commerce Platform",
    desc: "An online store builder that lets Ghanaian businesses launch a branded shop, manage products and orders, and accept payments online.",
    tags: ["E-commerce", "Payments", "Online Store"],
    badge: null,
  },
  {
    name: "RoomQuest",
    category: "Web Application",
    desc: "A property rental and search platform connecting tenants with verified landlords across Ghana, with map-based search and booking.",
    tags: ["Real Estate", "Maps", "Booking"],
    badge: null,
  },
  {
    name: "BenSena Farms",
    category: "Business Website",
    desc: "Modern agribusiness website for a leading Ghanaian farm, with online inquiry, product showcase, and content management.",
    tags: ["CMS", "Agribusiness", "SEO"],
    badge: null,
  },
  {
    name: "New Mission College",
    category: "Education Website",
    desc: "Full-featured school website with admissions portal, course catalog, news system, and student information sections.",
    tags: ["Education", "Admissions", "CMS"],
    badge: null,
  },
  {
    name: "Sync House",
    category: "Real Estate Platform",
    desc: "Property listing and management platform for a Ghanaian real estate company, with agent dashboards and lead tracking.",
    tags: ["Real Estate", "Dashboard", "CRM"],
    badge: null,
  },
  {
    name: "UPSA GradeHub",
    category: "Education Tool",
    desc: "An academic grade calculator and tracker tailored for UPSA students, with GPA simulation and semester planning.",
    tags: ["UPSA", "Education", "Calculator"],
    badge: null,
  },
  {
    name: "Julius Amoah Celebrant",
    category: "Personal Brand",
    desc: "Professional event celebrant website with booking calendar, gallery, testimonials, and service packages.",
    tags: ["Events", "Booking", "Gallery"],
    badge: null,
  },
];

const categoryColors: Record<string, { bg: string; color: string }> = {
  "Web Application": { bg: "rgba(29,78,216,0.1)", color: "#1D4ED8" },
  "E-commerce Platform": { bg: "rgba(219,39,119,0.1)", color: "#DB2777" },
  "Business Website": { bg: "rgba(0,0,78,0.08)", color: "#00004E" },
  "Education Website": { bg: "rgba(5,150,105,0.1)", color: "#059669" },
  "Real Estate Platform": { bg: "rgba(124,58,237,0.1)", color: "#7C3AED" },
  "Education Tool": { bg: "rgba(5,150,105,0.1)", color: "#059669" },
  "Personal Brand": { bg: "rgba(234,88,12,0.1)", color: "#EA580C" },
};

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );

    const els = sectionRef.current?.querySelectorAll(".reveal, .stagger");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24" ref={sectionRef} style={{ background: "var(--section-alt)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <div className="section-label mb-4">Our Work</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4" style={{ color: "var(--text)" }}>
            Featured Projects
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: "var(--text-light)" }}>
            A selection of projects we&apos;ve built for clients across Ghana.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {projects.map((project) => {
            const cat = categoryColors[project.category] ?? { bg: "rgba(0,0,78,0.08)", color: "#00004E" };
            return (
              <div
                key={project.name}
                className="group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col"
                style={{
                  background: "var(--card-bg)",
                  borderColor: "var(--light-border)",
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: cat.bg, color: cat.color }}
                  >
                    {project.category}
                  </span>
                  {project.badge && (
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{ background: "rgba(255,182,6,0.15)", color: "#C8A24A" }}
                    >
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-xl font-bold mb-3" style={{ color: "var(--text)" }}>
                  {project.name}
                </h3>
                <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--text-light)" }}>
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: "rgba(0,0,78,0.06)",
                        color: "var(--navy)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
