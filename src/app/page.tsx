import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import SmartImage from "@/components/SmartImage";
import SearchCard from "@/components/SearchCard";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import CountUp from "@/components/CountUp";
import ProjectCard from "@/components/ProjectCard";
import Testimonials from "@/components/Testimonials";
import EnquiryForm from "@/components/EnquiryForm";
import { authorities, categories, site, stats, steps, whyUs } from "@/data/site";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink pb-28 pt-28 sm:items-center sm:pb-36">
        <SmartImage src="/images/hero/hero.jpg" alt="Open plots along the Yamuna Expressway at golden hour" label="Hero image" hideLabel priority className="-z-10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/40 sm:bg-gradient-to-r sm:from-ink/90 sm:via-ink/60 sm:to-ink/20" />
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow !text-[#d6b781]">Independent plot advisory · Noida & Yamuna Expressway</p>
            <h1 className="mt-4 font-serif text-[2.25rem] leading-[1.1] text-white sm:text-5xl lg:text-[4rem]">
              Buy the right plot, with an advisor on your side.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              We help you choose, check and buy residential, commercial and industrial plots on the Jewar Airport belt and UP
              authority schemes. We don&apos;t sell our own inventory, so our advice stays on your side.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/projects/" className="btn-brass w-full sm:w-auto">
                Explore Plots <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/#contact" className="btn w-full border border-white/40 text-white hover:bg-white/10 sm:w-auto">
                Talk to an Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search card */}
      <div className="container-x relative z-10 -mt-16 sm:-mt-20">
        <SearchCard />
      </div>

      {/* Trust strip */}
      <section aria-label="Authorities we work with" className="container-x py-10 sm:py-12">
        <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:justify-center">
          <p className="text-sm text-ink/60">Guidance on plots and schemes from</p>
          <ul className="flex flex-wrap justify-center gap-2">
            {authorities.map((a) => (
              <li key={a} className="rounded-full border border-line bg-ivory px-4 py-2 text-sm font-semibold text-ink/80">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Categories */}
      <section className="container-x py-14 sm:py-20">
        <SectionHeading eyebrow="Plot categories" title="What are you looking to buy?" intro="Tell us the purpose and we'll narrow down the right schemes and locations." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <FadeIn key={c.type} delay={i * 0.08} className={i === 2 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <Link
                href={`/projects/?type=${c.type}`}
                className="group relative isolate flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl bg-ink p-6 sm:aspect-[16/10] lg:aspect-[4/5]"
              >
                <SmartImage src={c.image} alt={`${c.type} plots`} label={`${c.type} plots`} className="-z-10 transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                <h3 className="font-serif text-2xl text-white sm:text-3xl">{c.type}</h3>
                <p className="mt-2 max-w-xs text-[15px] text-white/80">{c.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#d6b781]">
                  View plots <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section id="about" className="bg-ivory py-16 sm:py-24">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink lg:aspect-[4/5]">
            <SmartImage src="/images/sections/advisor.jpg" alt="An Aarohan advisor reviewing a site plan with clients" label="Advisor image" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl bg-white/95 p-4 sm:right-auto">
              <ShieldCheck className="h-8 w-8 shrink-0 text-sage" aria-hidden="true" />
              <p className="text-sm leading-snug">
                <span className="block font-semibold">No inventory of our own</span>
                <span className="text-ink/60">Our advice isn&apos;t tied to a sale.</span>
              </p>
            </div>
          </FadeIn>
          <div>
            <SectionHeading
              eyebrow="Why Aarohan"
              title="An advisor first. Never a seller."
              intro="For over two decades we've helped families and businesses buy land around Noida with their eyes open. Here's what that looks like."
            />
            <ol className="mt-8 grid gap-6 sm:grid-cols-2">
              {whyUs.map((w, i) => (
                <li key={w.title} className="border-t border-line pt-5">
                  <span className="font-serif text-2xl text-brass">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-lg font-semibold">{w.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink/65">{w.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section aria-label="Our track record" className="bg-ink py-14 sm:py-16">
        <dl className="container-x grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:border-l lg:border-white/10 lg:first:border-l-0">
              <dd className="font-serif text-4xl text-white sm:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </dd>
              <dt className="mt-2 text-sm text-white/65 sm:text-base">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* Featured plots */}
      <section className="container-x py-16 sm:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Featured plots" title="Plots we're advising on now" intro="A sample of current options. Rates are indicative and change with each scheme." />
          <Link href="/projects/" className="btn-outline hidden shrink-0 md:inline-flex">
            View all plots <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((p, i) => (
            <FadeIn key={p.slug} delay={(i % 3) * 0.06}>
              <ProjectCard project={p} />
            </FadeIn>
          ))}
        </div>
        <Link href="/projects/" className="btn-primary mt-8 w-full md:hidden">
          View all plots <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </section>

      {/* How it works */}
      <section className="bg-ivory py-16 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="How it works" title="Four calm steps to your plot" center />
          <ol className="relative mt-12 grid gap-8 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="relative flex gap-5 lg:flex-col lg:gap-0">
                {/* connector line */}
                {i < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-6 top-12 h-[calc(100%-1rem)] w-px bg-line lg:left-12 lg:top-6 lg:h-px lg:w-[calc(100%-1.5rem)]"
                  />
                )}
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brass bg-white font-serif text-lg text-brass">
                  {i + 1}
                </span>
                <div className="lg:mt-5 lg:pr-4">
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink/65">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-x py-16 sm:py-24">
        <SectionHeading eyebrow="Client stories" title="What buyers tell us" />
        <div className="mt-10">
          <Testimonials />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-ivory py-16 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Talk to an advisor"
              intro="Share a few details and we'll call you back, usually the same day. No pressure, no sales pitch."
            />
            <ul className="mt-8 space-y-4 text-base">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brass" aria-hidden="true" />
                <span>{site.address}</span>
              </li>
              <li>
                <a href={site.phoneHref} className="flex min-h-[44px] items-center gap-3 hover:text-sage">
                  <Phone className="h-5 w-5 shrink-0 text-brass" aria-hidden="true" /> {site.phone} (call or WhatsApp)
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex min-h-[44px] items-center gap-3 break-all hover:text-sage">
                  <Mail className="h-5 w-5 shrink-0 text-brass" aria-hidden="true" /> {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brass" aria-hidden="true" /> {site.hours}
              </li>
            </ul>
            <div className="mt-8 aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-white sm:aspect-[16/9]">
              <iframe
                title="Map of Aarohan office, Sector 18, Noida"
                src={site.mapEmbed}
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <EnquiryForm idPrefix="home" />
          </div>
        </div>
      </section>
    </>
  );
}
