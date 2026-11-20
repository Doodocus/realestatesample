import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`h2 mt-3 ${light ? "!text-white" : ""}`}>{title}</h2>
      {intro && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-white/70" : "text-ink/65"}`}>{intro}</p>}
    </div>
  );
}
