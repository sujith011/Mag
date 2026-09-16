import {
  ArrowRight,
  ChartLineUp,
  Checks,
  FileArrowDown,
  GlobeHemisphereWest,
  Plugs,
  Receipt,
  ShieldCheck,
  UsersThree,
  Wallet,
} from "@phosphor-icons/react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HowItWorks } from "@/components/how-it-works";
import { DemoForm } from "@/components/demo-form";
import { FaqList } from "@/components/faq-list";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/cn";

const STATS = [
  { value: "80%+", label: "touchless invoices" },
  { value: "50%+", label: "faster approvals" },
  { value: "70%+", label: "fewer exceptions" },
  { value: "60+", label: "countries live" },
] as const;

const CAPABILITIES = [
  {
    icon: FileArrowDown,
    title: "Template-free capture",
    body: "Ingest any document, from any source, in any language. No template onboarding.",
  },
  {
    icon: Checks,
    title: "Two- and three-way match",
    body: "PO, receipt, and contract checks run automatically, with tolerance rules you set.",
  },
  {
    icon: UsersThree,
    title: "Supplier self-service",
    body: "Vendors see status, fix their own invoices, and stop flooding the AP inbox.",
  },
  {
    icon: GlobeHemisphereWest,
    title: "Global e-invoicing",
    body: "PEPPOL, CTC, VAT, and local clearance in 60+ countries, updated for you.",
  },
  {
    icon: Wallet,
    title: "Pay on your terms",
    body: "Schedule, capture early-pay discounts, and run cards or ACH from one desk.",
  },
  {
    icon: ShieldCheck,
    title: "Fraud and audit control",
    body: "Duplicate detection, bank validation, sealed archives, and a full decision log.",
  },
  {
    icon: Plugs,
    title: "Multi-ERP, one ledger view",
    body: "Run AP across SAP, Oracle, NetSuite, and Dynamics without a second close.",
  },
  {
    icon: ChartLineUp,
    title: "Cash you can actually see",
    body: "Accruals, liabilities, and cycle-time KPIs update as invoices move.",
  },
] as const;

export function LandingPage() {
  return (
    <div id="top" className="min-h-dvh bg-canvas text-ink">
      <SiteHeader />
      <main>
        <Hero />
        <Impact />
        <Platform />
        <HowItWorks />
        <Capabilities />
        <Roles />
        <DemoAndFaq />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(236_32_32/0.07)_0%,rgb(255_255_255/0)_58%)]"
      />
      <div className="page-gutter page-shell relative grid grid-cols-1 items-center gap-6 py-7 desk:grid-cols-2 desk:gap-10 desk:py-12 wide:gap-14 wide:py-14">
        <div className="min-w-0">
          <span className="hero-enter inline-flex max-w-full items-center rounded-full border border-line bg-canvas/70 px-3 py-1.5 text-xs font-medium text-ink sm:px-4 sm:text-sm">
            Accounts Payable Automation
          </span>
          <h1
            className="hero-enter mt-4 text-display font-medium text-ink desk:mt-5"
            style={{ animationDelay: "80ms" }}
          >
            Take <em className="not-italic font-medium italic">control</em> of
            every invoice
          </h1>
          <p
            className="hero-enter mt-4 max-w-[36ch] text-base leading-relaxed text-ink-soft desk:mt-5 desk:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            Capture, match, approve, and pay from one platform. AI handles the
            busywork. You keep the keys.
          </p>
          <div
            className="hero-enter mt-5 flex flex-col items-stretch gap-3 min-[24rem]:flex-row min-[24rem]:flex-wrap min-[24rem]:items-center desk:mt-8"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="#demo"
              className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-lg bg-brand px-5 text-sm font-semibold text-canvas shadow-[0_4px_2px_rgb(35_22_69/0.05)] transition-colors duration-150 hover:bg-brand-hover active:scale-[0.96] sm:px-6"
            >
              Request a Demo
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-lg bg-canvas px-5 text-sm font-semibold text-ink shadow-[0_0_0_1px_var(--color-line)] transition-colors duration-150 hover:bg-muted active:scale-[0.96] sm:px-6"
            >
              See how it works
            </a>
          </div>
        </div>
        <div
          className="hero-enter min-w-0 wide:justify-self-end"
          style={{ animationDelay: "180ms" }}
        >
          <div className="overflow-hidden rounded-2xl bg-muted p-1.5 shadow-lift sm:rounded-3xl sm:p-2">
            <img
              src="/images/ap-analytics-dashboard.png"
              alt="MagFlow.ai accounts payable analytics dashboard"
              width={1024}
              height={682}
              className="img-frame aspect-[1024/682] w-full rounded-xl object-contain sm:rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="bg-muted">
      <div className="page-shell grid grid-cols-2 gap-px bg-line desk:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 0.05}
            className="bg-muted px-4 py-6 sm:px-6 sm:py-10 desk:px-8 desk:py-12"
          >
            <p className="font-sans text-3xl font-medium tracking-tight text-brand tabular-nums sm:text-4xl desk:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-ink-soft">{stat.label}</p>
          </Reveal>
        ))}
      </div>
      <p className="page-gutter page-shell py-4 text-xs text-ink-soft">
        Typical results reported by finance teams after moving invoice-to-pay
        onto MagFlow.ai.
      </p>
    </section>
  );
}

function Platform() {
  return (
    <section id="platform" className="page-section scroll-mt-24 bg-canvas">
      <div className="page-shell">
        <Reveal>
          <h2 className="max-w-[18ch] text-title font-medium text-ink">
            One AP desk for capture, control, and cash
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-ink-soft">
            Built for high-volume, multi-entity finance teams. Invoice data
            becomes a working-capital lever, not a backlog.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 desk:mt-12 desk:grid-cols-2 wide:grid-cols-6">
          <Reveal className="min-w-0 desk:col-span-2 wide:col-span-4 wide:row-span-2">
            <article className="h-full overflow-hidden rounded-2xl bg-muted sm:rounded-3xl">
              <img
                src="/images/invoice-capture.jpg"
                alt="Invoices arriving on paper, tablet, and phone"
                className="img-frame aspect-video w-full object-cover desk:aspect-wide"
              />
              <div className="px-5 py-5 sm:px-6 sm:py-6 desk:px-8">
                <h3 className="text-xl font-medium tracking-tight text-ink">
                  Intelligent invoice capture
                </h3>
                <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-ink-soft">
                  Email, PDF, XML, EDI, and government networks collapse into
                  one standardized file. Duplicates never enter the workflow.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.06} className="min-w-0 wide:col-span-2">
            <article className="flex h-full flex-col justify-between rounded-2xl bg-wash px-5 py-6 sm:rounded-3xl desk:px-7 desk:py-8">
              <Receipt size={28} className="text-brand" weight="regular" />
              <div className="mt-6 desk:mt-8">
                <h3 className="text-lg font-medium tracking-tight text-ink">
                  Matching that holds the line
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Business rules, PO and GRN checks, and contract rates. Most
                  invoices post with no one in the loop.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1} className="min-w-0 wide:col-span-2">
            <article className="h-full overflow-hidden rounded-2xl bg-muted sm:rounded-3xl">
              <img
                src="/images/mobile-approve.jpg"
                alt="Approving an invoice from a phone"
                className="img-frame aspect-video w-full object-cover desk:aspect-photo"
              />
              <div className="px-5 py-5 sm:px-6">
                <h3 className="text-lg font-medium tracking-tight text-ink">
                  Approvals on the move
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Configured routes. One-tap from email or mobile.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.04} className="min-w-0 desk:col-span-2 wide:col-span-3">
            <article className="grid h-full overflow-hidden rounded-2xl bg-muted sm:rounded-3xl wide:grid-cols-2">
              <img
                src="/images/supplier-portal.jpg"
                alt="Supplier reviewing invoice payment status"
                className="img-frame aspect-video h-full w-full object-cover wide:aspect-auto wide:min-h-48"
              />
              <div className="flex flex-col justify-end px-5 py-5 sm:px-6 sm:py-6">
                <h3 className="text-lg font-medium tracking-tight text-ink">
                  A portal suppliers will actually use
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Real-time status, self-correction, and fewer "where is my
                  payment" calls.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08} className="min-w-0 desk:col-span-2 wide:col-span-3">
            <article className="flex h-full flex-col justify-between rounded-2xl bg-brand px-5 py-7 text-canvas sm:rounded-3xl desk:px-8 desk:py-8">
              <Wallet size={28} weight="regular" />
              <div className="mt-8 desk:mt-10">
                <h3 className="text-xl font-medium tracking-tight">
                  Pay the right supplier, on time
                </h3>
                <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-canvas/85">
                  Early-pay discounts, virtual cards, and open-banking rails
                  sit next to the invoice, not in a second tool.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="page-section bg-muted">
      <div className="page-shell">
        <Reveal>
          <h2 className="max-w-[16ch] text-title font-medium text-ink">
            Control that scales past one ERP
          </h2>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-ink-soft">
            The same controls for PO and non-PO, domestic and cross-border,
            shared-service and local AP.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-4 min-[28rem]:grid-cols-2 wide:mt-10 wide:grid-cols-4">
          {CAPABILITIES.map((item, index) => {
            const Icon = item.icon;
            const washed = index % 3 === 1;
            return (
              <article
                key={item.title}
                className={cn(
                  "min-w-0 rounded-2xl p-5 shadow-lift sm:p-6",
                  washed ? "bg-wash" : "bg-canvas",
                )}
              >
                <Icon size={26} className="text-brand" weight="regular" />
                <h3 className="mt-5 text-lg font-medium tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Roles() {
  return (
    <section className="page-section bg-canvas">
      <div className="page-shell grid grid-cols-1 gap-10 desk:grid-cols-2 desk:gap-12 wide:gap-20">
        <Reveal>
          <p className="text-sm font-medium text-brand">For CFOs</p>
          <h2 className="mt-3 text-title font-medium text-ink">
            Liabilities you can defend
          </h2>
          <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-ink-soft">
            See open payables, cycle time, and cash commitments in real time.
            Close faster with accruals that match the invoice file, not a
            spreadsheet guess.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink desk:mt-8">
            <li className="flex gap-3">
              <ArrowRight size={16} className="mt-1 shrink-0 text-brand" />
              Working capital view across entities and currencies
            </li>
            <li className="flex gap-3">
              <ArrowRight size={16} className="mt-1 shrink-0 text-brand" />
              Audit trails aligned to local tax authority rules
            </li>
            <li className="flex gap-3">
              <ArrowRight size={16} className="mt-1 shrink-0 text-brand" />
              Explainable AI: every recommendation is visible and reversible
            </li>
          </ul>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-sm font-medium text-brand">For AP teams</p>
          <h2 className="mt-3 text-title font-medium text-ink">
            Exceptions, not data entry
          </h2>
          <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-ink-soft">
            Touchless when the file is clean. A single queue when it is not.
            Coding, matching, and routing happen before the invoice hits your
            desk.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink desk:mt-8">
            <li className="flex gap-3">
              <ArrowRight size={16} className="mt-1 shrink-0 text-brand" />
              One queue for PO, non-PO, and utility invoices
            </li>
            <li className="flex gap-3">
              <ArrowRight size={16} className="mt-1 shrink-0 text-brand" />
              Supplier questions answered in the portal, not over email
            </li>
            <li className="flex gap-3">
              <ArrowRight size={16} className="mt-1 shrink-0 text-brand" />
              Mobile and email approvals so invoices do not stall
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function DemoAndFaq() {
  return (
    <section id="demo" className="page-section scroll-mt-24 border-t border-line bg-muted">
      <div className="page-shell grid grid-cols-1 gap-8 wide:grid-cols-2 wide:gap-16">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-line bg-muted px-3 py-1.5 text-sm font-medium text-ink sm:px-4">
            Request a Demo
          </span>
          <h2 className="mt-4 text-title font-medium text-ink desk:mt-5">
            See MagFlow.ai on an AP operation like yours
          </h2>
          <p className="mt-4 max-w-[54ch] text-base leading-relaxed text-ink-soft">
            A 30-minute walkthrough of capture, matching, and payment,
            configured for your ERP and countries.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl bg-muted p-1.5 sm:mt-8 sm:rounded-3xl sm:p-2">
            <img
              src="/images/ops-floor.jpg"
              alt="Bright finance operations floor"
              className="img-frame aspect-video w-full rounded-xl object-cover sm:rounded-2xl"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <DemoForm />
          <div id="faq" className="mt-10 scroll-mt-24 sm:mt-14">
            <h3 className="text-xl font-medium tracking-tight text-ink">
              Questions teams ask first
            </h3>
            <div className="mt-4">
              <FaqList />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
