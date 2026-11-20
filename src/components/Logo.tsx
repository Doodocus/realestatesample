type Props = { light?: boolean; className?: string };

export default function Logo({ light = false, className = "" }: Props) {
  const text = light ? "#FFFFFF" : "#0F1B2D";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true" className="shrink-0">
        <rect x="0.75" y="0.75" width="34.5" height="34.5" rx="10" fill="none" stroke="#B08D57" strokeWidth="1.5" />
        <path d="M10 27 L18 9 L26 27" fill="none" stroke={text} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
        <path d="M8 22.5 L15 19.5 L19.5 21 L28 14.5" fill="none" stroke="#B08D57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="28" cy="14.5" r="1.6" fill="#B08D57" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-xl font-semibold tracking-tight" style={{ color: text }}>
          Aarohan
        </span>
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brass">Land Advisors</span>
      </span>
    </span>
  );
}
