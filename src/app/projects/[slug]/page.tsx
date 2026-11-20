import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, Navigation } from "lucide-react";
import SmartImage from "@/components/SmartImage";
import EnquiryForm from "@/components/EnquiryForm";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { getProject, mapEmbedFor, projects } from "@/data/projects";
import { formatINR, formatSize } from "@/lib/format";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  return p ? { title: p.title, description: p.summary } : {};
}

export default async function ProjectDetail({ params }: Params) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const similar = [
    ...projects.filter((x) => x.slug !== p.slug && x.type === p.type),
    ...projects.filter((x) => x.slug !== p.slug && x.type !== p.type),
  ].slice(0, 3);

  const facts = [
    { k: "Location", v: p.area },
    { k: "Authority", v: p.authority },
    { k: "Plot sizes", v: formatSize(p.sizes) },
    { k: "Rate (demo)", v: `₹${formatINR(p.ratePerSqm)} / sq m` },
    { k: "Status", v: p.status },
    { k: "Nearby", v: p.landmarks.join(", ") },
  ];

  return (
    <>
      <div className="container-x pt-24 lg:pt-32">
        <Link href="/projects/" className="inline-flex min-h-[44px] items-center gap-2 text-[15px] font-medium text-ink/70 hover:text-ink">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All plots
        </Link>

        <header className="mt-2">
          <span className="eyebrow">{p.type} · {p.location}</span>
          <h1 className="mt-3 font-serif text-[2.25rem] leading-tight sm:text-5xl">{p.title}</h1>
          <p className="mt-3 max-w-2xl text-base text-ink/65 sm:text-lg">{p.summary}</p>
        </header>

        {/* Image grid */}
        <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:grid-rows-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink sm:col-span-2 sm:row-span-2 sm:aspect-auto sm:min-h-[420px]">
            <SmartImage src={p.images[0]} alt={`${p.title} — main view`} priority />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:contents">
            {p.images.slice(1, 3).map((src, i) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink sm:aspect-auto">
                <SmartImage src={src} alt={`${p.title} — view ${i + 2}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-x grid gap-10 py-12 lg:grid-cols-[1fr_400px] lg:gap-14 lg:py-16">
        <div className="min-w-0 space-y-12">
          {/* Key facts */}
          <section aria-labelledby="facts">
            <h2 id="facts" className="font-serif text-2xl sm:text-3xl">Key facts</h2>
            <dl className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {facts.map((f) => (
                <div key={f.k} className="bg-white p-5">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ink/50">{f.k}</dt>
                  <dd className="mt-1.5 text-base font-medium">{f.v}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="about-plot">
            <h2 id="about-plot" className="font-serif text-2xl sm:text-3xl">About these plots</h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75 sm:text-lg">{p.description}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-base">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-sage" aria-hidden="true" /> {h}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="connectivity">
            <h2 id="connectivity" className="font-serif text-2xl sm:text-3xl">Connectivity</h2>
            <ul className="mt-5 divide-y divide-line rounded-2xl border border-line">
              {p.connectivity.map((c) => (
                <li key={c} className="flex items-start gap-3 p-4 text-base">
                  <Navigation className="mt-1 h-4 w-4 shrink-0 text-brass" aria-hidden="true" /> {c}
                </li>
              ))}
            </ul>
            <div className="mt-6 aspect-[4/3] overflow-hidden rounded-2xl border border-line sm:aspect-[16/9]">
              <iframe title={`Map of ${p.area}`} src={mapEmbedFor(p.map)} className="h-full w-full" loading="lazy" />
            </div>
            <p className="mt-2 text-sm text-ink/50">Map location is approximate.</p>
          </section>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <EnquiryForm projectName={p.title} defaultInterest={p.type} title="Ask about this plot" idPrefix="detail" />
        </aside>
      </div>

      <section className="bg-ivory py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading eyebrow="You may also like" title="Similar plots" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {similar.map((s) => <ProjectCard key={s.slug} project={s} />)}
          </div>
        </div>
      </section>
    </>
  );
}
