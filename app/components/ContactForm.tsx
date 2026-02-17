"use client";

import { useState } from "react";

type Props = {
  venueSlug: string;
  venueName: string;
};

export default function ContactForm({ venueSlug, venueName }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = new FormData(e.currentTarget);

    const payload = {
      venueSlug,
      venueName,
      name: String(form.get("name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      phone: String(form.get("phone") || "").trim(),
      message: String(form.get("message") || "").trim(),
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Failed to send");
      }

      setStatus("sent");
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong");
    }
  }

  return (
    <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-lg font-semibold">Request info / availability</h2>
      <p className="mt-1 text-sm text-white/70">
        Send a quick message to <span className="font-medium">{venueName}</span>.
      </p>

      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-sm text-white/70">Your name</label>
            <input
              name="name"
              required
              className="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 outline-none focus:border-white/30"
              placeholder="Adeniji"
            />
          </div>

          <div>
            <label className="text-sm text-white/70">Email</label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 outline-none focus:border-white/30"
              placeholder="you@email.com"
            />
          </div>
        </div>

        <div>
          <label className="text-sm text-white/70">Phone (optional)</label>
          <input
            name="phone"
            className="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 outline-none focus:border-white/30"
            placeholder="(555) 555-5555"
          />
        </div>

        <div>
          <label className="text-sm text-white/70">Message</label>
          <textarea
            name="message"
            required
            rows={5}
            className="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 outline-none focus:border-white/30"
            placeholder="Date, guest count, event type, questions…"
          />
        </div>

        <button
          disabled={status === "sending" || status === "sent"}
          className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : status === "sent" ? "Sent ✓" : "Send request"}
        </button>

        {status === "error" ? (
          <p className="text-sm text-red-300">Error: {errorMsg}</p>
        ) : null}

        {status === "sent" ? (
          <p className="text-sm text-emerald-300">
            Sent! (Saved locally for now — next we can route this to email/Stripe CRM.)
          </p>
        ) : null}
      </form>
    </section>
  );
}
