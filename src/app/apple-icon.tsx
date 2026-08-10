import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#0e141d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="132" height="132" viewBox="0 0 64 64" fill="none">
          <path d="M38 52 L48 22 L60 52 Z" fill="#AFCF63" />
          <path d="M18 52 L33 10 L52 52 Z" fill="#8CC63F" />
          <path d="M4 52 L20 24 L31 52 Z" fill="#4A90C4" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
