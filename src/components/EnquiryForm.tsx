"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

const interests = ["Residential", "Commercial", "Industrial", "Not sure"] as const;

type Props = {
  projectName?: string;
  defaultInterest?: (typeof interests)[number];
  title?: string;
  idPrefix?: string;
};

type Errors = Partial<Record<"name" | "mobile" | "consent", string>>;

export default function EnquiryForm({
  projectName,
  defaultInterest = "Not sure",
  title = "Send an enquiry",
  idPrefix = "enq",
}: Props) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [interest, setInterest] = useState<string>(defaultInterest);
  const [message, setMessage] = useState(projectName ? `I'm interested in ${projectName}.` : "");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const validate = (): Errors => {
    const e: Errors = {};
    if (!name.trim()) e.name = "Please enter your name.";
    if (!/^[6-9]\d{9}$/.test(mobile)) e.mobile = "Enter a valid 10-digit Indian mobile number.";
    if (!consent) e.consent = "Please agree so we can contact you.";
    return e;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("loading");
    // TODO: Connect Web3Forms here, e.g.
    // await fetch("https://api.web3forms.com/submit", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ access_key: "YOUR_KEY", name, mobile: `+91${mobile}`, interest, message, project: projectName }),
    // });
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  };

  const waText = [
    `Hi Aarohan, I'm ${name.trim() || "interested in a plot"}.`,
    projectName ? `Project: ${projectName}` : "",
    `Interested in: ${interest}`,
    mobile ? `Mobile: +91 ${mobile}` : "",
    message.trim(),
  ]
    .filter(Boolean)
    .join("\n");

  if (status === "success") {
    return (
      <div className="card p-6 text-center sm:p-8" role="status">
        <CheckCircle2 className="mx-auto h-12 w-12 text-sage" aria-hidden="true" />
        <h3 className="mt-4 font-serif text-2xl">Thank you, {name.split(" ")[0]}.</h3>
        <p className="mt-2 text-ink/70">An advisor will call you on +91 {mobile} within one working day.</p>
        <button
          type="button"
          className="btn-outline mt-6 w-full sm:w-auto"
          onClick={() => {
            setStatus("idle");
            setName("");
            setMobile("");
            setConsent(false);
          }}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const id = (s: string) => `${idPrefix}-${s}`;

  return (
    <form onSubmit={onSubmit} noValidate className="card p-5 sm:p-8">
      <h3 className="font-serif text-2xl">{title}</h3>
      {projectName && <p className="mt-1 text-sm text-ink/60">About: {projectName}</p>}

      <div className="mt-6 grid gap-5">
        <div>
          <label htmlFor={id("name")} className="label">
            Name <span className="text-brass">*</span>
          </label>
          <input
            id={id("name")}
            className="field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? id("name-err") : undefined}
          />
          {errors.name && <p id={id("name-err")} className="mt-1.5 text-sm text-red-700">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor={id("mobile")} className="label">
            Mobile <span className="text-brass">*</span>
          </label>
          <div className="flex">
            <span className="inline-flex min-h-[48px] items-center rounded-l-xl border border-r-0 border-line bg-ivory px-3 text-base text-ink/70">
              +91
            </span>
            <input
              id={id("mobile")}
              className="field min-w-0 rounded-l-none"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={10}
              placeholder="98765 43210"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
              aria-invalid={!!errors.mobile}
              aria-describedby={errors.mobile ? id("mobile-err") : undefined}
            />
          </div>
          {errors.mobile && <p id={id("mobile-err")} className="mt-1.5 text-sm text-red-700">{errors.mobile}</p>}
        </div>

        <div>
          <label htmlFor={id("interest")} className="label">
            Interested in
          </label>
          <select id={id("interest")} className="field" value={interest} onChange={(e) => setInterest(e.target.value)}>
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={id("message")} className="label">
            Message <span className="font-normal text-ink/50">(optional)</span>
          </label>
          <textarea
            id={id("message")}
            className="field min-h-[110px] resize-y"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div>
          <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-ink/75">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-5 w-5 shrink-0 accent-brass"
              aria-invalid={!!errors.consent}
            />
            <span>I agree to be contacted by Aarohan Land Advisors by call or WhatsApp about my enquiry.</span>
          </label>
          {errors.consent && <p className="mt-1.5 text-sm text-red-700">{errors.consent}</p>}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <button type="submit" className="btn-primary w-full" disabled={status === "loading"}>
            {status === "loading" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…
              </>
            ) : (
              "Request a call back"
            )}
          </button>
          <a href={whatsappLink(waText)} target="_blank" rel="noopener noreferrer" className="btn-outline w-full">
            <MessageCircle className="h-4 w-4 text-[#1f9e4f]" aria-hidden="true" /> Send on WhatsApp instead
          </a>
        </div>
      </div>
    </form>
  );
}
