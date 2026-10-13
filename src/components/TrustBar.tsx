const clients = [
  "New Mission College",
  "BenSena Farms",
  "UPSA",
  "Julius Amoah Celebrant",
  "RoomQuest",
  "Sync House",
  "OSEM Secure Vote",
  "OSEM Storefront",
];

export default function TrustBar() {
  return (
    <section
      className="py-5"
      style={{ background: "#00002E", borderTop: "1px solid rgba(255,182,6,0.15)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest opacity-50 mr-2" style={{ color: "#FFB606" }}>
            Trusted by
          </span>
          {clients.map((name) => (
            <span
              key={name}
              className="text-sm font-medium opacity-60 hover:opacity-90 transition-opacity duration-200"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
