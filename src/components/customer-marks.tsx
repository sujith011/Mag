const MARKS = [
  { name: "Northline", glyph: "Nl" },
  { name: "Allard Group", glyph: "Ag" },
  { name: "Harbor Field", glyph: "Hf" },
  { name: "Kestrel Health", glyph: "Kh" },
  { name: "Redwood Energy", glyph: "Re" },
  { name: "Lumen Transit", glyph: "Lt" },
  { name: "Calder Steel", glyph: "Cs" },
  { name: "Whitford Labs", glyph: "Wl" },
] as const;

function Monogram({ glyph, name }: { glyph: string; name: string }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-ink" title={name}>
      <svg
        viewBox="0 0 36 36"
        className="size-9 shrink-0"
        aria-hidden="true"
        focusable="false"
      >
        <rect
          x="1"
          y="1"
          width="34"
          height="34"
          rx="8"
          className="fill-none stroke-ink"
          strokeWidth="1.4"
        />
        <text
          x="18"
          y="23"
          textAnchor="middle"
          className="fill-ink"
          fontSize="12"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontWeight="600"
        >
          {glyph}
        </text>
      </svg>
      <span className="text-sm font-semibold tracking-tight">{name}</span>
    </span>
  );
}

export function CustomerMarquee() {
  const loop = [...MARKS, ...MARKS];
  return (
    <div className="overflow-hidden border-y border-line bg-canvas py-6 sm:py-8">
      <p className="sr-only">Trusted by finance teams at</p>
      <div className="marquee-track flex w-max items-center gap-8 px-6 sm:gap-12 sm:px-8">
        {loop.map((mark, i) => (
          <Monogram
            key={`${mark.name}-${i}`}
            glyph={mark.glyph}
            name={mark.name}
          />
        ))}
      </div>
    </div>
  );
}
