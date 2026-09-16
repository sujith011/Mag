"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { MagFlowMark } from "@/components/magflow-mark";

const NAV = [
  { href: "#platform", label: "Platform" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#faq", label: "FAQ" },
];

const DESK_MQ = "(min-width: 48rem)";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    function onResize() {
      if (window.matchMedia(DESK_MQ).matches) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-canvas/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="page-gutter page-shell flex h-14 items-center justify-between gap-3 sm:h-16">
        <a href="#top" className="min-w-0 shrink-0" onClick={() => setOpen(false)}>
          <MagFlowMark />
        </a>

        <nav className="hidden items-center gap-4 text-sm font-medium text-ink desk:flex wide:gap-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-opacity duration-150 hover:opacity-70"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#demo"
          className="hidden h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-brand px-4 text-sm font-semibold text-canvas shadow-[0_4px_2px_rgb(35_22_69/0.05)] transition-colors duration-150 hover:bg-brand-hover active:scale-[0.96] desk:inline-flex"
        >
          Request a Demo
        </a>

        <div className="flex min-w-0 items-center gap-2 desk:hidden">
          <a
            href="#demo"
            className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg bg-brand px-3 text-sm font-semibold text-canvas"
            onClick={() => setOpen(false)}
          >
            <span className="min-[24rem]:hidden">Demo</span>
            <span className="hidden min-[24rem]:inline">Request a Demo</span>
          </a>
          <button
            type="button"
            className="flex size-11 shrink-0 items-center justify-center rounded-lg text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="max-h-[calc(100dvh-3.5rem-env(safe-area-inset-top))] overflow-y-auto border-t border-line bg-canvas desk:hidden"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="page-gutter flex flex-col gap-1 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex min-h-12 items-center text-base font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
