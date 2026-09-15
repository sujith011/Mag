"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { CaretDown } from "@phosphor-icons/react";

const FAQS = [
  {
    q: "What does accounts payable automation actually do?",
    a: "It digitizes invoice intake, matching, approvals, posting, and payment in one controlled flow. AP staff spend time on exceptions and suppliers, not keying data.",
  },
  {
    q: "Will AI replace the AP team?",
    a: "No. MagFlow.ai automates repetitive capture and matching. People still own approvals, exceptions, fraud review, and payment decisions. AI recommendations stay visible and reversible.",
  },
  {
    q: "How does MagFlow.ai connect to our ERP?",
    a: "Bidirectional connectors for SAP, Oracle, NetSuite, Microsoft Dynamics, Workday, and others. Purchase orders, vendors, and the chart of accounts come in. Approved invoices and payment status go back.",
  },
  {
    q: "Which countries and formats are supported?",
    a: "One platform covers 60+ countries and 135+ currencies. Native support for PDF, XML, EDI, PEPPOL, and government e-invoice networks, with country tax rules applied before posting.",
  },
  {
    q: "How long does it take to go live?",
    a: "Most teams import history, configure matching rules, and train approvers in weeks, not quarters. Parallel-run against the current process until touchless rates hold.",
  },
] as const;

export function FaqList() {
  return (
    <Accordion.Root type="single" collapsible className="divide-y divide-line">
      {FAQS.map((item) => (
        <Accordion.Item key={item.q} value={item.q} className="py-1">
          <Accordion.Header>
            <Accordion.Trigger className="group flex min-h-14 w-full items-center justify-between gap-3 py-4 text-left text-sm font-medium leading-snug tracking-tight text-ink sm:gap-4 sm:text-base">
              <span className="min-w-0">{item.q}</span>
              <CaretDown
                size={18}
                className="shrink-0 text-ink-soft transition-transform duration-200 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-none">
            <p className="max-w-[65ch] pb-5 text-sm leading-relaxed text-ink-soft">
              {item.a}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
