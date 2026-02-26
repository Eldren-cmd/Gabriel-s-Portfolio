"use client";

import emailjs from "@emailjs/browser";
import { type FormEvent, useState } from "react";
import SectionReveal from "@/components/SectionReveal";

type ContactState = {
  name: string;
  email: string;
  message: string;
};

type SubmitState = "idle" | "sending" | "success" | "error" | "missing_config";

const initialState: ContactState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactSection() {
  const [formState, setFormState] = useState<ContactState>(initialState);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitState("missing_config");
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formState.name,
          reply_to: formState.email,
          message: formState.message,
          to_name: "Gabriel Adegboyega",
        },
        { publicKey }
      );

      setSubmitState("success");
      setFormState(initialState);
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <SectionReveal id="contact" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
            Contact
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="max-w-md leading-relaxed text-[var(--text-muted)]">
            Looking for a developer for freelance work or a full-time role? Send
            a message and I&apos;ll get back to you quickly.
          </p>

          <div className="space-y-3 pt-2">
            <a
              className="block text-lg font-semibold text-[var(--text-primary)] underline decoration-[var(--accent)] decoration-2 underline-offset-4"
              href="mailto:adenrelegabriel@gmail.com"
            >
              adenrelegabriel@gmail.com
            </a>
            <div className="flex flex-wrap gap-3">
              <a
                className="rounded-full border border-white/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                href="https://github.com/Eldren-cmd"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="rounded-full border border-white/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="card-surface rounded-3xl p-7 sm:p-8"
          noValidate
        >
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-medium">
              Name
              <input
                type="text"
                required
                value={formState.name}
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    name: event.target.value,
                  }))
                }
                className="rounded-xl border border-white/20 bg-[#1A1A2E] px-4 py-3 text-sm outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/25"
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium">
              Email
              <input
                type="email"
                required
                value={formState.email}
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    email: event.target.value,
                  }))
                }
                className="rounded-xl border border-white/20 bg-[#1A1A2E] px-4 py-3 text-sm outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/25"
                placeholder="you@example.com"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium">
              Message
              <textarea
                required
                rows={5}
                value={formState.message}
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    message: event.target.value,
                  }))
                }
                className="rounded-xl border border-white/20 bg-[#1A1A2E] px-4 py-3 text-sm outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/25"
                placeholder="Tell me about your project..."
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={submitState === "sending"}
            className="mt-6 rounded-full bg-[var(--accent)] px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(233,69,96,0.35)] disabled:cursor-not-allowed disabled:opacity-75"
          >
            {submitState === "sending" ? "Sending..." : "Submit"}
          </button>

          {submitState === "success" && (
            <p className="mt-4 text-sm text-emerald-300">
              Message sent successfully.
            </p>
          )}
          {submitState === "error" && (
            <p className="mt-4 text-sm text-rose-300">
              Message failed to send. Please try again.
            </p>
          )}
          {submitState === "missing_config" && (
            <p className="mt-4 text-sm text-amber-200">
              EmailJS keys are missing. Add them to `.env.local` using
              `.env.example`.
            </p>
          )}
        </form>
      </div>
    </SectionReveal>
  );
}
