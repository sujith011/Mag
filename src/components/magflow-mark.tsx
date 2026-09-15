import { cn } from "@/lib/cn";

export function MagFlowMark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-ink sm:gap-2", className)}>
      <svg
        viewBox="0 0 28 28"
        className="size-6 shrink-0 sm:size-7"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="28" height="28" rx="8" className="fill-brand" />
        <path
          d="M7.4 20V8h3.15l3.45 7.4L17.45 8H20.6v12h-2.55v-7.35L14.7 20h-1.4l-3.35-7.35V20H7.4Z"
          className="fill-canvas"
        />
      </svg>
      <span className="text-sm font-semibold tracking-tight sm:text-base">
        MagFlow<span className="text-brand">.ai</span>
      </span>
    </span>
  );
}
