import { ImageResponse } from "next/og";

export const alt = "Pavel Beregsázi – realitní makléř";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#0f1b2d", color: "#fff" }}>
        <div style={{ fontSize: 28, color: "#d6b97d", letterSpacing: 4 }}>REALITNÍ MAKLÉŘ · ERA REALPATRIA</div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 20 }}>Pavel Beregsázi</div>
        <div style={{ fontSize: 36, marginTop: 24, color: "#cdd5e2" }}>Prostějov · Olomouc · Přerov · Kroměříž</div>
      </div>
    ),
    size,
  );
}
