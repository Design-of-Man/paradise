"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { cx } from "@/lib/util";

type Status = "idle" | "sending" | "sent" | "error" | "unconfigured";

const generalTopics = [
  { value: "site", label: "I have a site or land" },
  { value: "build-to-suit", label: "I need a store built" },
  { value: "leasing", label: "I want to lease space" },
  { value: "acquisition", label: "I have a property for sale" },
  { value: "management", label: "Property management" },
  { value: "other", label: "Something else" },
];

const leasingTopics = [
  { value: "leasing", label: "Shop space" },
  { value: "outparcel", label: "Outparcel or pad site" },
  { value: "broker", label: "Broker — registering a prospect" },
  { value: "other", label: "Something else" },
];

/**
 * Enquiry form.
 *
 * Posts to /api/contact. If the deployment has no email provider configured,
 * the route says so explicitly and the form falls back to a pre-filled mailto
 * link rather than silently swallowing the enquiry.
 */
export function ContactForm({
  variant = "general",
  defaultTopic,
}: {
  variant?: "general" | "leasing";
  defaultTopic?: string;
}) {
  const topics = variant === "leasing" ? leasingTopics : generalTopics;
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [fallbackHref, setFallbackHref] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, variant }),
      });
      const body = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("sent");
        form.reset();
        return;
      }

      if (body?.code === "not_configured") {
        // Compose the same enquiry as an email the visitor can send themselves.
        const to = variant === "leasing" ? site.leasingEmail : site.email;
        const subject = `Website enquiry — ${data.topic ?? "general"}`;
        const lines = [
          `Name: ${data.name ?? ""}`,
          `Company: ${data.company ?? ""}`,
          `Email: ${data.email ?? ""}`,
          `Phone: ${data.phone ?? ""}`,
          `Topic: ${data.topic ?? ""}`,
          "",
          data.message ?? "",
        ].join("\n");
        setFallbackHref(
          `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`,
        );
        setStatus("unconfigured");
        return;
      }

      setStatus("error");
      setMessage(body?.error ?? "Something went wrong. Please call the office.");
    } catch {
      setStatus("error");
      setMessage("Network error. Please call the office.");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="border border-accent/40 bg-sand p-8 md:p-10"
      >
        <h3 className="text-2xl">Message received.</h3>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-500">
          Thank you — someone will be in touch shortly. If it is urgent, call{" "}
          <a href={`tel:${site.phone}`} className="link-underline font-semibold text-ink nums">
            {site.phoneDisplay}
          </a>{" "}
          during business hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn btn-ghost mt-7"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate={false}>
      {/* Honeypot — hidden from users, filled by naive bots. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="pv-company-url">Do not fill this in</label>
        <input id="pv-company-url" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" required autoComplete="name" />
        <Field label="Company" name="company" autoComplete="organization" />
        <Field label="Email" name="email" type="email" required autoComplete="email" />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
      </div>

      <div>
        <label
          htmlFor="topic"
          className="block text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-mute"
        >
          What is this about?
        </label>
        <select
          id="topic"
          name="topic"
          defaultValue={defaultTopic ?? topics[0].value}
          className="mt-2.5 w-full appearance-none border border-line bg-paper px-4 py-3 text-[0.9375rem] text-ink transition-colors focus:border-accent focus:outline-none"
        >
          {topics.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-mute"
        >
          Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder={
            variant === "leasing"
              ? "Your use, square footage needed, target market and timing."
              : "Location, acreage, zoning, timing — whatever you have."
          }
          className="mt-2.5 w-full border border-line bg-paper px-4 py-3 text-[0.9375rem] text-ink transition-colors placeholder:text-mute/70 focus:border-accent focus:outline-none"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="border-l-2 border-red-700 bg-red-50 px-4 py-3 text-sm text-red-900">
          {message}
        </p>
      )}

      {status === "unconfigured" && (
        <div role="alert" className="border-l-2 border-accent bg-sand px-4 py-4 text-sm text-ink-500">
          <p className="font-semibold text-ink">Email delivery is not set up on this deployment yet.</p>
          <p className="mt-2">
            Your message has not been sent. Use the button below to send it directly from
            your own email client, or call{" "}
            <a href={`tel:${site.phone}`} className="link-underline font-semibold text-ink nums">
              {site.phoneDisplay}
            </a>
            .
          </p>
          <a href={fallbackHref} className="btn btn-primary mt-4">
            Open in your email app
          </a>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-5 pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className={cx("btn btn-primary", status === "sending" && "opacity-60")}
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p className="text-xs text-mute">
          Or call{" "}
          <a href={`tel:${site.phone}`} className="link-underline font-semibold text-ink nums">
            {site.phoneDisplay}
          </a>
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-mute"
      >
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2.5 w-full border border-line bg-paper px-4 py-3 text-[0.9375rem] text-ink transition-colors focus:border-accent focus:outline-none"
      />
    </div>
  );
}
