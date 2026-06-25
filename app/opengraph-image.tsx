import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Cognexa Technologies — Intelligence infrastructure for the modern enterprise";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A1628",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top: wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "rgba(27,79,216,0.3)",
              border: "1.5px solid rgba(27,79,216,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ color: "white", fontSize: 22, fontWeight: 700 }}>C</div>
          </div>
          <span style={{ color: "white", fontSize: 28, fontWeight: 700, letterSpacing: "-0.5px" }}>
            Cognexa Technologies
          </span>
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <p
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.05,
              margin: 0,
              letterSpacing: "-1px",
              maxWidth: 800,
            }}
          >
            Intelligence infrastructure for the modern enterprise.
          </p>
          <p
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.55)",
              margin: 0,
              maxWidth: 640,
            }}
          >
            Surakshitam · Aurobit · Vidya AI
          </p>
        </div>

        {/* Bottom: pillars */}
        <div style={{ display: "flex", gap: 16 }}>
          {[
            { label: "Cybersecurity", color: "#DC2626" },
            { label: "AI Automation", color: "#0F766E" },
            { label: "Knowledge Intelligence", color: "#0D9488" },
            { label: "Data Management", color: "#1B4FD8" },
          ].map((p) => (
            <div
              key={p.label}
              style={{
                padding: "8px 18px",
                borderRadius: 999,
                border: `1px solid ${p.color}40`,
                background: `${p.color}18`,
                color: p.color,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              {p.label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
