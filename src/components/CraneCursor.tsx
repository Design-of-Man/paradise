"use client";

import { useEffect } from "react";

/**
 * Pointer control for the crane trolley.
 *
 * Scroll already drives the hoist. This gives the pointer the other control a
 * crane operator has — travel along the jib — so the hook tracks the cursor
 * and the load swings behind it.
 *
 * Everything CSS could do is left in CSS; this exists only because stylesheets
 * cannot read a pointer. It writes two custom properties and nothing else: no
 * React state, no re-renders, no layout reads inside the frame loop. The
 * animation frame runs only while the trolley is still catching up and stops
 * itself once it has settled, so an idle page costs nothing.
 *
 * It does not run at all without a fine pointer, or when reduced motion is
 * asked for — in both cases the ambient timed cycle in globals.css continues.
 */

/** Trolley travel in viewBox units, matching the timed keyframes it replaces. */
const TRAVEL_MIN = -520;
const TRAVEL_MAX = 0;
/** The trolley's resting x in the drawing; the pointer maps relative to it. */
const TROLLEY_HOME = 1182;

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

export function CraneCursor() {
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || still.matches) return;

    const hero = document.querySelector<HTMLElement>(".crane-hero");
    const svg = hero?.querySelector<SVGSVGElement>(".crane-hero__svg");
    // The two groups are written to directly. Setting a custom property on the
    // hero instead invalidates style for everything beneath it — all eighty-odd
    // lattice paths, the patterns and the gradients — on every single frame,
    // which measured 30fps under CPU throttle. Touching only the two elements
    // that actually move puts it back to 60.
    const trolley = svg?.querySelector<SVGGElement>(".crane-trolley");
    const swingEl = svg?.querySelector<SVGGElement>(".crane-swing");
    if (!hero || !svg || !trolley || !swingEl) return;

    // Mapping screen coordinates into the drawing. getScreenCTM can force
    // layout, so it is cached and only recomputed when something could have
    // moved the SVG — not on every pointer event.
    let toLocal: DOMMatrix | null = null;
    const invalidate = () => {
      toLocal = null;
    };
    const localX = (clientX: number, clientY: number): number => {
      if (!toLocal) {
        const ctm = svg.getScreenCTM();
        if (!ctm) return TROLLEY_HOME;
        toLocal = ctm.inverse();
      }
      const pt = new DOMPoint(clientX, clientY).matrixTransform(toLocal);
      return pt.x;
    };

    let target = 0;
    let current = 0;
    let swing = 0;
    let frame = 0;

    const step = () => {
      const delta = target - current;
      // Ease toward the pointer rather than snapping to it. A trolley carrying
      // a load does not teleport, and the lag is what sells the weight.
      current += delta * 0.12;

      // The load trails the direction of travel, then settles as it catches up.
      const lag = clamp(-delta * 0.02, -5.5, 5.5);
      swing += (lag - swing) * 0.09;

      trolley.style.transform = `translateX(${current.toFixed(2)}px)`;
      swingEl.style.transform = `rotate(${swing.toFixed(3)}deg)`;

      // Stop once it has arrived. Restarted by the next pointer move.
      if (Math.abs(delta) > 0.15 || Math.abs(swing) > 0.02) {
        frame = requestAnimationFrame(step);
      } else {
        frame = 0;
      }
    };

    const onMove = (e: PointerEvent) => {
      target = clamp(localX(e.clientX, e.clientY) - TROLLEY_HOME, TRAVEL_MIN, TRAVEL_MAX);
      if (!frame) frame = requestAnimationFrame(step);
    };

    // Handing over only on the first real movement means the crane is already
    // working when the page loads, rather than parked and waiting to be found.
    hero.classList.add("crane-hero--pointer");

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("resize", invalidate, { passive: true });
    window.addEventListener("scroll", invalidate, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", invalidate);
      window.removeEventListener("scroll", invalidate);
      if (frame) cancelAnimationFrame(frame);
      hero.classList.remove("crane-hero--pointer");
      trolley.style.transform = "";
      swingEl.style.transform = "";
    };
  }, []);

  return null;
}
