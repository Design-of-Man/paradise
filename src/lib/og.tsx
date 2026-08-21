import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/**
 * Shared Open Graph card renderer.
 *
 * Every route that generates a social image funnels through here so cards stay
 * visually consistent. Uses the runtime's bundled font rather than fetching a
 * webfont at build time — one less network dependency in CI.
 */
export function renderOgImage({
  eyebrow,
  title,
  meta,
}: {
  eyebrow: string;
  title: string;
  meta?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0b0f0b",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* Brand green rule along the top edge */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 6,
            backgroundColor: "#8cc63f",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 44,
              height: 44,
              border: "1px solid rgba(255,255,255,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="30" height="30" viewBox="0 0 64 64" fill="none">
              <path d="M38 52 L48 22 L60 52 Z" fill="#AFCF63" />
              <path d="M18 52 L33 10 L52 52 Z" fill="#8CC63F" />
              <path d="M4 52 L20 24 L31 52 Z" fill="#4A90C4" />
            </svg>
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: 25,
              fontWeight: 600,
              letterSpacing: "-0.01em",
              display: "flex",
            }}
          >
            Paradise Ventures
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#a8d45c",
              fontSize: 19,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: title.length > 60 ? 60 : 74,
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              marginTop: 26,
              maxWidth: 1000,
              display: "flex",
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.16)",
            paddingTop: 26,
            color: "rgba(255,255,255,0.55)",
            fontSize: 21,
          }}
        >
          <div style={{ display: "flex" }}>{meta ?? "Retail Development · Est. 1988"}</div>
          <div style={{ display: "flex" }}>paradiseventuresinc.com</div>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
