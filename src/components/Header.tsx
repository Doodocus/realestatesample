"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks, site, whatsappLink } from "@/data/site";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || !isHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        solid ? "border-b border-line bg-ivory/95 backdrop-blur" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link href="/" aria-label={`${site.name} home`} className="flex min-h-[44px] items-center">
          <Logo light={!solid} />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className={`text-[15px] font-medium transition-colors ${
                    solid ? "text-ink/80 hover:text-ink" : "text-white/85 hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className={`btn border px-5 ${
              solid ? "border-line bg-white text-ink hover:border-ink" : "border-white/40 text-white hover:bg-white/10"
            }`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> Call
          </a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-brass px-5">
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className={`-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
            solid ? "text-ink" : "text-white"
          }`}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile full-screen menu */}
      {open && (
        <div role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-50 flex flex-col bg-ivory lg:hidden">
          <div className="container-x flex h-16 items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav aria-label="Mobile" className="container-x flex-1 overflow-y-auto pt-6">
            <ul className="divide-y divide-line border-y border-line">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[60px] items-center font-serif text-2xl text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-ink/60">{site.tagline}</p>
          </nav>
          <div className="container-x grid gap-3 pb-8 pt-4">
            <a href={site.phoneHref} className="btn-outline w-full">
              <Phone className="h-4 w-4" aria-hidden="true" /> Call {site.phone}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-brass w-full">
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
