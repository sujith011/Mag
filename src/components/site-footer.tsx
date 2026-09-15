import { EnvelopeSimple, MapPin } from "@phosphor-icons/react";
import { MagFlowMark } from "@/components/magflow-mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-canvas pb-[max(2rem,env(safe-area-inset-bottom))] pt-10 sm:pt-16">
      <div className="page-gutter page-shell grid grid-cols-1 gap-8 min-[30rem]:grid-cols-2 desk:gap-10 wide:grid-cols-4">
        <div className="min-[30rem]:col-span-2">
          <MagFlowMark />
          <p className="mt-4 max-w-sm text-sm font-semibold tracking-tight text-brand">
            Accounts payable, under control
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
            MagFlow.ai captures, matches, approves, and pays invoices for finance
            teams that cannot afford a black box.
          </p>
        </div>
        <div>
          <p className="text-sm text-ink-soft">Product</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-ink">
            <li>
              <a href="#platform" className="transition-opacity hover:opacity-70">
                Platform
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="transition-opacity hover:opacity-70"
              >
                How it works
              </a>
            </li>
            <li>
              <a href="#faq" className="transition-opacity hover:opacity-70">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm text-ink-soft">Get in touch</p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-ink">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span>333 W Wacker Drive, Suite 2100, Chicago, IL 60606</span>
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeSimple size={18} className="shrink-0" aria-hidden="true" />
              <a href="mailto:hello@magflow.ai">hello@magflow.ai</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-gutter page-shell mt-10 flex flex-col gap-2 text-xs text-ink-soft desk:mt-12 desk:flex-row desk:items-center desk:justify-between">
        <p>© {new Date().getFullYear()} MagFlow.ai</p>
        <p>Built for AP teams in 60+ countries.</p>
      </div>
    </footer>
  );
}
