"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { SlidersHorizontal, X, SearchX } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { budgets, locations, plotTypes } from "@/data/site";

type Filters = { location: string; type: string; budget: string };

function matches(p: (typeof projects)[number], f: Filters) {
  if (f.location && p.location !== f.location) return false;
  if (f.type && p.type !== f.type) return false;
  if (f.budget) {
    const b = budgets.find((x) => x.value === f.budget);
    if (b) {
      const low = p.sizes.min * p.ratePerSqm;
      const high = p.sizes.max * p.ratePerSqm;
      if (high < b.min || low > b.max) return false; // ranges must overlap
    }
  }
  return true;
}

function FilterFields({ f, set, idp }: { f: Filters; set: (k: keyof Filters, v: string) => void; idp: string }) {
  return (
    <div className="grid gap-5">
      <div>
        <label htmlFor={`${idp}-loc`} className="label">Location</label>
        <select id={`${idp}-loc`} className="field" value={f.location} onChange={(e) => set("location", e.target.value)}>
          <option value="">Any location</option>
          {locations.map((l) => <option key={l}>{l}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor={`${idp}-type`} className="label">Plot type</label>
        <select id={`${idp}-type`} className="field" value={f.type} onChange={(e) => set("type", e.target.value)}>
          <option value="">Any type</option>
          {plotTypes.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor={`${idp}-budget`} className="label">Budget</label>
        <select id={`${idp}-budget`} className="field" value={f.budget} onChange={(e) => set("budget", e.target.value)}>
          <option value="">Any budget</option>
          {budgets.map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
        </select>
      </div>
    </div>
  );
}

export default function ProjectsBrowser() {
  const router = useRouter();
  const params = useSearchParams();
  const f: Filters = {
    location: params.get("location") ?? "",
    type: params.get("type") ?? "",
    budget: params.get("budget") ?? "",
  };
  const [drawer, setDrawer] = useState(false);

  const results = useMemo(() => projects.filter((p) => matches(p, f)), [f.location, f.type, f.budget]); // eslint-disable-line react-hooks/exhaustive-deps
  const activeCount = [f.location, f.type, f.budget].filter(Boolean).length;

  const write = (next: Filters) => {
    const q = new URLSearchParams();
    (Object.keys(next) as (keyof Filters)[]).forEach((k) => next[k] && q.set(k, next[k]));
    const qs = q.toString();
    router.replace(`/projects/${qs ? `?${qs}` : ""}`, { scroll: false });
  };
  const set = (k: keyof Filters, v: string) => write({ ...f, [k]: v });
  const clear = () => write({ location: "", type: "", budget: "" });

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-10">
      {/* Desktop sidebar */}
      <aside className="hidden lg:block">
        <div className="card sticky top-28 p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="font-serif text-xl">Filters</h2>
            {activeCount > 0 && (
              <button type="button" onClick={clear} className="min-h-[44px] text-sm font-semibold text-brass hover:underline">
                Clear all
              </button>
            )}
          </div>
          <FilterFields f={f} set={set} idp="d" />
        </div>
      </aside>

      <div className="min-w-0">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-base text-ink/70" aria-live="polite">
            <span className="font-semibold text-ink">{results.length}</span> {results.length === 1 ? "plot" : "plots"} found
          </p>
          <div className="flex items-center gap-2">
            {activeCount > 0 && (
              <button type="button" onClick={clear} className="min-h-[44px] px-2 text-sm font-semibold text-brass hover:underline lg:hidden">
                Clear filters
              </button>
            )}
            <button type="button" onClick={() => setDrawer(true)} className="btn-outline px-5 lg:hidden">
              <SlidersHorizontal className="h-4 w-4" aria-hidden="true" /> Filters
              {activeCount > 0 && (
                <span className="ml-1 rounded-full bg-brass px-2 py-0.5 text-xs text-white">{activeCount}</span>
              )}
            </button>
          </div>
        </div>

        {results.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {results.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        ) : (
          <div className="card mt-6 flex flex-col items-center px-6 py-16 text-center">
            <SearchX className="h-10 w-10 text-brass" aria-hidden="true" />
            <h2 className="mt-4 font-serif text-2xl">No plots match these filters</h2>
            <p className="mt-2 max-w-md text-ink/65">
              Try a different budget or location, or ask an advisor. We often know of options that aren&apos;t listed here.
            </p>
            <button type="button" onClick={clear} className="btn-primary mt-6 w-full sm:w-auto">Clear filters</button>
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${drawer ? "" : "pointer-events-none"}`}
        aria-hidden={!drawer}
      >
        <div
          className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ${drawer ? "opacity-100" : "opacity-0"}`}
          onClick={() => setDrawer(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Filters"
          className={`absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-white p-5 pb-8 transition-transform duration-300 ${
            drawer ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-line" />
          <div className="mb-5 flex items-center justify-between">
            <h2 className="font-serif text-2xl">Filters</h2>
            <button
              type="button"
              onClick={() => setDrawer(false)}
              aria-label="Close filters"
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full"
              tabIndex={drawer ? 0 : -1}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          {drawer && <FilterFields f={f} set={set} idp="m" />}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button type="button" onClick={clear} className="btn-outline w-full" tabIndex={drawer ? 0 : -1}>Clear</button>
            <button type="button" onClick={() => setDrawer(false)} className="btn-primary w-full" tabIndex={drawer ? 0 : -1}>
              Show {results.length}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
