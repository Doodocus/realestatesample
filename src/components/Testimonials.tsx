"use client";

import { useRef, useState } from "react";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    if (!card) return;
    setActive(Math.round(el.scrollLeft / (card.offsetWidth + 16)));
  };

  const goTo = (i: number) => {
    const el = ref.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (el && card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  return (
    <>
      <div
        ref={ref}
        onScroll={onScroll}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0"
        aria-label="Client reviews"
      >
        {testimonials.map((t) => (
          <figure key={t.name} className="card flex w-[85%] shrink-0 snap-start flex-col p-6 sm:w-[46%] lg:w-auto">
            <div className="flex items-center justify-between">
              <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < t.rating ? "fill-brass text-brass" : "text-line"}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="rounded-full bg-ivory px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-ink/55">
                Sample review
              </span>
            </div>
            <Quote className="mt-5 h-6 w-6 text-brass/60" aria-hidden="true" />
            <blockquote className="mt-2 flex-1 text-base leading-relaxed text-ink/80">{t.quote}</blockquote>
            <figcaption className="mt-6 border-t border-line pt-4">
              <span className="block font-semibold">{t.name}</span>
              <span className="text-sm text-ink/55">{t.city}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-5 flex justify-center gap-1 lg:hidden">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show review ${i + 1}`}
            className="flex h-11 w-11 items-center justify-center"
          >
            <span className={`block h-2 rounded-full transition-all ${active === i ? "w-6 bg-brass" : "w-2 bg-line"}`} />
          </button>
        ))}
      </div>
    </>
  );
}
