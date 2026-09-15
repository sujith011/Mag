"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/reveal";

const STEPS = [
  {
    id: "capture",
    title: "Stop chasing invoices",
    body: "Email, PDF, EDI, XML, and e-invoice networks land in one inbox. No more shared mailboxes or lost attachments.",
    image: "/images/invoice-capture.jpg",
    alt: "Paper, tablet, and phone invoices collected on a white desk",
  },
  {
    id: "extract",
    title: "Drop manual data entry",
    body: "AI reads any layout, in any language, without templates. Validation forms appear only when something looks off.",
    image: "/images/hero-dashboard.jpg",
    alt: "Accounts payable dashboard showing extracted invoice data",
  },
  {
    id: "match",
    title: "Catch exceptions early",
    body: "Two-way and three-way matching against POs, receipts, and contracts. Duplicates and tax issues block before they post.",
    image: "/images/three-way-match.jpg",
    alt: "Finance analyst reviewing a three-way match on a laptop",
  },
  {
    id: "approve",
    title: "Keep approvals moving",
    body: "Route by entity, amount, or cost center. Approvers act from email or phone. Average cycle time falls by half.",
    image: "/images/mobile-approve.jpg",
    alt: "Phone showing a one-tap invoice approval",
  },
  {
    id: "pay",
    title: "Post, pay, and archive",
    body: "Clean invoices flow into the ERP. Payments run on the rails you already use. The full trail stays audit-ready.",
    image: "/images/supplier-portal.jpg",
    alt: "Supplier checking a paid invoice status in a portal",
  },
] as const;

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const step = STEPS[active] ?? STEPS[0];
  const imageWrap = useRef<HTMLDivElement>(null);

  function selectStep(index: number) {
    setActive(index);
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 47.99rem)").matches) {
      imageWrap.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  return (
    <section id="how-it-works" className="page-section scroll-mt-24 bg-canvas">
      <div className="page-shell grid grid-cols-1 gap-5 desk:grid-cols-2 desk:items-start desk:gap-10 wide:gap-16">
        <Reveal className="min-w-0">
          <h2 className="text-title font-medium text-ink">
            From receipt to payment, without the chase
          </h2>
          <p className="mt-3 max-w-[65ch] text-base leading-relaxed text-ink-soft desk:mt-4">
            Five steps. One platform. Finance stays in control at every gate.
          </p>
        </Reveal>
        <Reveal
          delay={0.08}
          className="min-w-0 desk:col-start-2 desk:row-span-2 desk:sticky desk:top-24"
        >
          <div
            ref={imageWrap}
            className="overflow-hidden rounded-2xl bg-muted p-1.5 shadow-lift sm:rounded-3xl sm:p-2"
          >
            <img
              src={step.image}
              alt={step.alt}
              className="img-frame aspect-video w-full rounded-xl object-cover sm:rounded-2xl desk:aspect-photo"
            />
          </div>
        </Reveal>
        <Reveal className="min-w-0">
          <ol className="divide-y divide-line desk:mt-2">
            {STEPS.map((item, index) => {
              const selected = index === active;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => selectStep(index)}
                    className={cn(
                      "flex min-h-12 w-full items-start gap-3 py-3.5 text-left transition-colors duration-150 sm:gap-4 sm:py-5",
                      selected ? "opacity-100" : "opacity-55 hover:opacity-90",
                    )}
                    aria-current={selected ? "step" : undefined}
                  >
                    <span
                      className={cn(
                        "mt-0.5 font-sans text-sm font-semibold tabular-nums",
                        selected ? "text-brand" : "text-ink-soft",
                      )}
                    >
                      0{index + 1}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-base font-medium tracking-tight text-ink sm:text-lg">
                        {item.title}
                      </span>
                      <span
                        className={cn(
                          "mt-1 max-w-[52ch] text-sm leading-relaxed text-ink-soft",
                          selected ? "block" : "hidden",
                        )}
                      >
                        {item.body}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
