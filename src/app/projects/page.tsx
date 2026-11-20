import type { Metadata } from "next";
import { Suspense } from "react";
import ProjectsBrowser from "@/components/ProjectsBrowser";

export const metadata: Metadata = {
  title: "Plots",
  description: "Residential, commercial and industrial plots we advise on across the Yamuna Expressway and UP authority schemes.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="border-b border-line bg-ivory pb-10 pt-28 sm:pb-14 lg:pt-36">
        <div className="container-x">
          <p className="eyebrow">Plots</p>
          <h1 className="mt-3 font-serif text-[2.25rem] leading-tight sm:text-5xl">Find a plot that fits</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/65 sm:text-lg">
            Filter by location, type and budget. Every listing comes with an honest briefing on paperwork, timelines and
            surroundings. Rates shown are demo figures.
          </p>
        </div>
      </section>
      <section className="container-x py-10 sm:py-14">
        <Suspense fallback={<p className="text-ink/60">Loading plots…</p>}>
          <ProjectsBrowser />
        </Suspense>
      </section>
    </>
  );
}
