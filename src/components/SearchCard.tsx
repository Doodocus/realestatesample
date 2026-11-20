"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import { budgets, locations, plotTypes } from "@/data/site";

export default function SearchCard() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const q = new URLSearchParams();
    if (location) q.set("location", location);
    if (type) q.set("type", type);
    if (budget) q.set("budget", budget);
    const qs = q.toString();
    router.push(`/projects/${qs ? `?${qs}` : ""}`);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="card grid gap-4 p-5 shadow-xl shadow-ink/10 sm:grid-cols-2 sm:p-6 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end"
      aria-label="Search plots"
    >
      <div>
        <label htmlFor="s-location" className="label">Location</label>
        <select id="s-location" className="field" value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">Any location</option>
          {locations.map((l) => <option key={l}>{l}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="s-type" className="label">Plot type</label>
        <select id="s-type" className="field" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Any type</option>
          {plotTypes.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2 lg:col-span-1">
        <label htmlFor="s-budget" className="label">Budget</label>
        <select id="s-budget" className="field" value={budget} onChange={(e) => setBudget(e.target.value)}>
          <option value="">Any budget</option>
          {budgets.map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
        </select>
      </div>
      <button type="submit" className="btn-primary w-full sm:col-span-2 lg:col-span-1 lg:min-h-[48px]">
        <Search className="h-4 w-4" aria-hidden="true" /> Search plots
      </button>
    </form>
  );
}
