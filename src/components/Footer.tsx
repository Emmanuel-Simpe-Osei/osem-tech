"use client";

const footerLinks = {
  Services: [
    "Website Development",
    "Web Applications",
    "Mobile Apps",
    "Cybersecurity",
    "Payment Integration",
    "Maintenance & Support",
  ],
  Products: [
    { label: "Storefront GH", href: "https://storefront.osemtech.com" },
    { label: "OSEM Secure Vote", href: "#projects" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer style={{ background: "#00002E", borderTop: "1px solid rgba(255,182,6,0.15)" }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-display text-2xl font-bold mb-4">
              <span style={{ color: "#FFB606" }}>OSEM</span>{" "}
              <span className="font-light" style={{ color: "rgba(255,255,255,0.9)" }}>Technologies</span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
              Professional digital solutions built in Ghana. Websites, apps, security, and more.
            </p>
            <div className="flex gap-3">
              {["LinkedIn", "Twitter", "GitHub"].map((soc) => (
                <div
                  key={soc}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-semibold cursor-pointer transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  title={soc}
                >
                  {soc[0]}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-5" style={{ color: "#FFB606" }}>
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.Services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-sm transition-colors duration-200 hover:text-white text-left"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-5" style={{ color: "#FFB606" }}>
              Products
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.Products.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    target={p.href.startsWith("http") ? "_blank" : undefined}
                    rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-5" style={{ color: "#FFB606" }}>
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.Company.map((c) => (
                <li key={c.label}>
                  <button
                    onClick={() => scrollTo(c.href)}
                    className="text-sm transition-colors duration-200 hover:text-white text-left"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {c.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-1.5">
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                📞 +233 25 636 4076
              </p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                ✉️ osemtechnologies@gmail.com
              </p>
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                📍 Accra, Ghana
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            &copy; {year} OSEM Technologies. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            Built with ❤️ in Ghana
          </p>
        </div>
      </div>
    </footer>
  );
}
