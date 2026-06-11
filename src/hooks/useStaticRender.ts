"use client";

import { useEffect, useState } from "react";

function detectStatic(): boolean {
  if (typeof window === "undefined") return false;
  return (
    new URLSearchParams(window.location.search).has("static") ||
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true
  );
}

/**
 * Returns true when entrance animations should be skipped and content rendered
 * immediately at its final state. Triggers when:
 *   • the URL has ?static  (screenshots, snapshots, manual QA), or
 *   • the user prefers reduced motion (accessibility).
 *
 * SSR-safe: starts false (matching the server-rendered HTML to avoid hydration
 * mismatches) and resolves to the real value in an effect after mount.
 */
export function useStaticRender(): boolean {
  const [staticRender, setStaticRender] = useState(false);

  useEffect(() => {
    if (detectStatic()) setStaticRender(true);
  }, []);

  return staticRender;
}
