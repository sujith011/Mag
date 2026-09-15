"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle } from "@phosphor-icons/react";

export function DemoForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    if (!name || !email || !company) return;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-line bg-canvas px-6 py-10 text-center">
        <CheckCircle
          size={36}
          weight="fill"
          className="mx-auto text-brand"
          aria-hidden="true"
        />
        <h3 className="mt-4 text-xl font-medium tracking-tight text-ink">
          We have your request
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
          A specialist will reach out within one business day with a walkthrough
          of capture, matching, and payment on your stack.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid grid-cols-1 gap-5"
      noValidate={false}
    >
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-ink">
          Full name <span className="text-brand">*</span>
        </span>
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          suppressHydrationWarning
          className="h-12 w-full min-w-0 rounded-lg border border-line bg-canvas px-4 text-base text-ink outline-none transition-colors duration-150 placeholder:text-ink-soft/70 focus:border-brand"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-ink">
          Work email <span className="text-brand">*</span>
        </span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          suppressHydrationWarning
          className="h-12 w-full min-w-0 rounded-lg border border-line bg-canvas px-4 text-base text-ink outline-none transition-colors duration-150 placeholder:text-ink-soft/70 focus:border-brand"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-ink">
          Company <span className="text-brand">*</span>
        </span>
        <input
          name="company"
          type="text"
          required
          autoComplete="organization"
          suppressHydrationWarning
          className="h-12 w-full min-w-0 rounded-lg border border-line bg-canvas px-4 text-base text-ink outline-none transition-colors duration-150 placeholder:text-ink-soft/70 focus:border-brand"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-ink">Role (optional)</span>
        <input
          name="role"
          type="text"
          autoComplete="organization-title"
          suppressHydrationWarning
          className="h-12 w-full min-w-0 rounded-lg border border-line bg-canvas px-4 text-base text-ink outline-none transition-colors duration-150 placeholder:text-ink-soft/70 focus:border-brand"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-ink">
          What should we show you? (optional)
        </span>
        <textarea
          name="message"
          rows={4}
          suppressHydrationWarning
          className="w-full min-w-0 resize-none rounded-lg border border-line bg-canvas px-4 py-3 text-base text-ink outline-none transition-colors duration-150 placeholder:text-ink-soft/70 focus:border-brand"
        />
      </label>
      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-brand px-6 text-sm font-semibold text-canvas shadow-[0_4px_2px_rgb(35_22_69/0.05)] transition-colors duration-150 hover:bg-brand-hover active:scale-[0.96]"
      >
        Request a Demo
      </button>
    </form>
  );
}
