import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "OSEM Technologies | Digital Solutions Built in Ghana";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "#00004E",
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700 }}>
          <span style={{ color: "#FFB606" }}>OSEM</span>
          <span style={{ marginLeft: 24 }}>Technologies</span>
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 40, color: "rgba(255,255,255,0.85)" }}>
          Digital Solutions Built in Ghana
        </div>
        <div style={{ display: "flex", marginTop: 44, fontSize: 28, color: "#FFB606" }}>
          Websites · Web Apps · Mobile Apps · Cybersecurity
        </div>
      </div>
    ),
    size
  );
}
