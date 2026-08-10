import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Paradise Ventures — retail real estate development since 1988";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Retail Development · Est. 1988",
    title: "We build more than buildings.",
    meta: "5M+ sq ft · 52 Publix · 100+ Walgreens",
  });
}
