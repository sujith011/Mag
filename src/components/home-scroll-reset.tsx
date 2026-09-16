"use client";

import { useLayoutEffect } from "react";

export function HomeScrollReset() {
  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    const navigation = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming | undefined;

    window.history.scrollRestoration = "manual";

    if (navigation?.type === "reload" && window.location.hash) {
      window.history.replaceState(
        window.history.state,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }

    const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      scrollToTop();
      secondFrame = window.requestAnimationFrame(scrollToTop);
    });

    scrollToTop();
    window.addEventListener("pageshow", scrollToTop);

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.removeEventListener("pageshow", scrollToTop);
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  return null;
}
