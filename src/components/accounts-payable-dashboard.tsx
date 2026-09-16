import { CalendarBlank } from "@phosphor-icons/react";

const SUMMARY = [
  { value: "48", label: "Invoices received", tone: "blue" },
  { value: "35", label: "Invoices approved", tone: "green" },
  { value: "10", label: "Pending payment", tone: "orange" },
  { value: "3", label: "Invoices on hold", tone: "brand" },
  { value: "96%", label: "On-time payment rate", tone: "purple" },
] as const;

const RECEIVED_BARS = [50, 70, 58, 79, 90, 84, 105, 123, 105, 135, 127];
const VENDOR_STACKS = [
  [44, 42, 38],
  [36, 30, 27],
  [28, 22, 20],
  [21, 18, 17],
  [15, 13, 12],
] as const;
const MAX_VENDOR_STACK = Math.max(
  ...VENDOR_STACKS.map((stack) => stack.reduce((total, value) => total + value, 0)),
);
const METHODS = [
  { label: "Email", value: 48, width: "96%" },
  { label: "Portal", value: 32, width: "67%" },
  { label: "EDI", value: 18, width: "38%" },
  { label: "Paper", value: 7, width: "16%" },
] as const;

export function AccountsPayableDashboard() {
  return (
    <section className="ap-dashboard" aria-label="Accounts payable dashboard">
      <div className="ap-accent" aria-hidden="true" />

      <header className="ap-header">
        <h2>Accounts Payable</h2>
        <span className="ap-period">
          <CalendarBlank aria-hidden="true" weight="regular" />
          Jan 2026 to Dec 2026
        </span>
      </header>

      <div className="ap-summary">
        {SUMMARY.map((stat) => (
          <div className="ap-stat" key={stat.label}>
            <strong className={`ap-${stat.tone}`}>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}

        <aside className="ap-overdue" aria-label="Overdue invoices">
          <h3>Overdue invoices</h3>
          <div className="ap-overdue-grid">
            <div className="ap-overdue-item">
              <strong className="ap-brand">$120k</strong>
              <b className="ap-brand">8 invoices</b>
              <span>Overdue amount</span>
            </div>
            <div className="ap-overdue-item">
              <strong className="ap-orange">$24k</strong>
              <b className="ap-orange">4 invoices</b>
              <span>Overdue risk</span>
            </div>
          </div>
        </aside>
      </div>

      <div className="ap-chart-grid">
        <ChartCard title="Invoices received by month">
          <figure
            className="ap-chart"
            role="img"
            aria-label="Monthly invoices increased from January through December"
          >
            <svg viewBox="0 0 360 165" aria-hidden="true">
              <defs>
                <linearGradient id="ap-bar-gradient" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0" stopColor="var(--ap-brand-strong)" />
                  <stop offset="1" stopColor="var(--ap-brand-soft)" />
                </linearGradient>
              </defs>
              <path
                className="ap-axis"
                d="M35 15H350 M35 55H350 M35 95H350 M35 135H350 M35 15V135"
              />
              <g className="ap-bars">
                {RECEIVED_BARS.map((height, index) => (
                  <rect
                    key={index}
                    x={48 + index * 28}
                    y={135 - height}
                    width="18"
                    height={height}
                    rx="3"
                  />
                ))}
              </g>
              <g className="ap-label">
                <text x="48" y="154">Jan</text>
                <text x="132" y="154">Apr</text>
                <text x="216" y="154">Jul</text>
                <text x="300" y="154">Oct</text>
                <text x="330" y="154">Dec</text>
              </g>
            </svg>
          </figure>
        </ChartCard>

        <ChartCard title="Invoices by approval status">
          <div className="ap-donut-layout">
            <div className="ap-donut" role="img" aria-label="73 percent approved" />
            <Legend
              items={[
                ["Approved", "brand"],
                ["Pending", "brand-soft"],
                ["On hold", "orange"],
                ["Rejected", "neutral"],
              ]}
            />
          </div>
        </ChartCard>

        <ChartCard title="Invoices pending by vendor">
          <div
            className="ap-stacked-chart"
            role="img"
            aria-label="Vendor A has the most pending invoices, followed by vendors B through E"
          >
            {VENDOR_STACKS.map((stack, index) => (
              <div className="ap-stack" key={index}>
                {stack.map((height, part) => (
                  <span
                    className={`ap-stack-${["light", "medium", "dark"][part]}`}
                    key={part}
                    style={{ height: `${(height / MAX_VENDOR_STACK) * 100}%` }}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="ap-vendor-labels" aria-hidden="true">
            {["A", "B", "C", "D", "E"].map((vendor) => (
              <span key={vendor}>
                <span className="ap-vendor-prefix">Vendor </span>
                {vendor}
              </span>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="Average processing time by month">
          <figure
            className="ap-chart"
            role="img"
            aria-label="Average processing time decreased steadily over twelve months"
          >
            <svg viewBox="0 0 360 165" aria-hidden="true">
              <path className="ap-axis" d="M20 20H350 M20 60H350 M20 100H350 M20 140H350" />
              <path
                className="ap-trend-line"
                d="M20 43 L50 51 L80 73 L110 82 L140 104 L170 117 L200 134 L230 134 L260 147 L290 151 L320 157 L350 157"
              />
              <g className="ap-trend-points">
                {[[20, 43], [80, 73], [140, 104], [200, 134], [260, 147], [320, 157], [350, 157]].map(([cx, cy]) => (
                  <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" />
                ))}
              </g>
            </svg>
          </figure>
        </ChartCard>

        <ChartCard title="Invoices by receipt method">
          <div className="ap-methods">
            {METHODS.map((method) => (
              <div className="ap-method" key={method.label}>
                <span>{method.label}</span>
                <span className="ap-method-track" aria-hidden="true">
                  <span style={{ width: method.width }} />
                </span>
                <strong>{method.value}</strong>
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="Average processing time by vendor">
          <div className="ap-donut-layout">
            <div
              className="ap-donut ap-vendor-donut"
              role="img"
              aria-label="Average vendor processing time is 5.2 days"
            />
            <Legend
              items={[
                ["Vendor A", "brand"],
                ["Vendor B", "brand-soft"],
                ["Vendor C", "orange"],
                ["Vendor D", "yellow"],
                ["Others", "purple"],
              ]}
            />
          </div>
        </ChartCard>
      </div>
    </section>
  );
}

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="ap-card">
      <h3>{title}</h3>
      {children}
    </article>
  );
}

function Legend({ items }: { items: ReadonlyArray<readonly [string, string]> }) {
  return (
    <div className="ap-legend" aria-hidden="true">
      {items.map(([label, tone]) => (
        <span key={label}>
          <i className={`ap-key-${tone}`} />
          {label}
        </span>
      ))}
    </div>
  );
}
