import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { navLinks, site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white/75">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm font-serif text-xl text-white">{site.tagline}</p>
          <p className="mt-3 max-w-sm text-[15px] leading-relaxed">{site.description}</p>
        </div>

        <div>
          <h2 className="eyebrow">Quick links</h2>
          <ul className="mt-4 space-y-1">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="inline-flex min-h-[40px] items-center hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Office</h2>
          <ul className="mt-4 space-y-3 text-[15px]">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
              <span>{site.address}</span>
            </li>
            <li>
              <a href={site.phoneHref} className="flex min-h-[40px] items-center gap-3 hover:text-white">
                <Phone className="h-4 w-4 shrink-0 text-brass" aria-hidden="true" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex min-h-[40px] items-center gap-3 break-all hover:text-white">
                <Mail className="h-4 w-4 shrink-0 text-brass" aria-hidden="true" /> {site.email}
              </a>
            </li>
            <li className="text-sm text-white/60">RERA: {site.rera}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 pb-24 text-sm text-white/55 md:flex-row md:items-center md:justify-between lg:pb-6">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Demo website — listings, prices and reviews are sample content.</p>
        </div>
      </div>
    </footer>
  );
}
