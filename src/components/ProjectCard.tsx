import Link from "next/link";
import { ArrowRight, MapPin, Ruler } from "lucide-react";
import SmartImage from "./SmartImage";
import type { Project } from "@/data/projects";
import { formatINR, formatSize } from "@/lib/format";

export default function ProjectCard({ project }: { project: Project }) {
  const href = `/projects/${project.slug}/`;
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg hover:shadow-ink/5">
      <Link href={href} className="relative block aspect-[4/3] overflow-hidden bg-ivory" tabIndex={-1} aria-hidden="true">
        <SmartImage src={project.images[0]} alt={project.title} className="transition-transform duration-500 group-hover:scale-[1.03]" />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
          {project.type}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl leading-snug">
          <Link href={href} className="hover:text-sage">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 flex items-start gap-2 text-[15px] text-ink/65">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass" aria-hidden="true" /> {project.area}
        </p>
        <p className="mt-1 flex items-center gap-2 text-[15px] text-ink/65">
          <Ruler className="h-4 w-4 shrink-0 text-brass" aria-hidden="true" /> {formatSize(project.sizes)}
        </p>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-3 border-t border-line pt-4">
          <p>
            <span className="block text-xs uppercase tracking-wider text-ink/50">From (demo)</span>
            <span className="font-serif text-xl">₹{formatINR(project.ratePerSqm)}</span>
            <span className="text-sm text-ink/60"> / sq m</span>
          </p>
          <Link href={href} className="inline-flex min-h-[44px] items-center gap-1.5 text-[15px] font-semibold text-ink hover:text-brass">
            View details <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
