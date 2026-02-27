"use client";

import emailjs from "@emailjs/browser";
import { type FormEvent, useState } from "react";
import SectionReveal from "@/components/SectionReveal";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

type SubmitState = "idle" | "sending" | "success" | "error" | "missing_config";

const initialState: ContactFormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<ContactFormState>(initialState);
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
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
          to_name: "Gabriel Adegboyega",
        },
        { publicKey }
      );
      setSubmitState("success");
      setForm(initialState);
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <SectionReveal id="contact" className="section-shell">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
            Contact
          </p>
          <h2 className="font-heading text-4xl font-bold leading-tight text-text sm:text-5xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="max-w-md leading-relaxed text-muted">
            Open to full-time roles and freelance projects.
          </p>
          <a
            href="https://github.com/Eldren-cmd"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-line px-4 py-2 text-sm font-medium text-text transition hover:border-primary hover:text-primary"
          >
            GitHub: @Eldren-cmd
          </a>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://github.com/Eldren-cmd"
              target="_blank"
              rel="noreferrer"
              className="gold-glow-hover rounded-full border border-secondary px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-secondary hover:border-primary hover:text-primary"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin-url"
              target="_blank"
              rel="noreferrer"
              className="gold-glow-hover rounded-full border border-secondary px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-secondary hover:border-primary hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="surface-card rounded-3xl p-6 sm:p-8"
          noValidate
        >
          <div className="grid gap-4">
            <label className="grid gap-1.5 text-sm font-medium text-text">
              Name
              <input
                type="text"
                required
                value={form.name}
                onChange={(event) =>
                  setForm((current) => ({ ...current, name: event.target.value }))
                }
                placeholder="Your name"
                className="rounded-xl border border-line bg-surface px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
              />
            </label>

            <label className="grid gap-1.5 text-sm font-medium text-text">
              Email
              <input
                type="email"
                required
                value={form.email}
                onChange={(event) =>
                  setForm((current) => ({ ...current, email: event.target.value }))
                }
                placeholder="you@example.com"
                className="rounded-xl border border-line bg-surface px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
              />
            </label>

            <label className="grid gap-1.5 text-sm font-medium text-text">
              Message
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    message: event.target.value,
                  }))
                }
                placeholder="Tell me about your project"
                className="rounded-xl border border-line bg-surface px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={submitState === "sending"}
            className="gold-glow-hover mt-6 rounded-full border border-primary bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-[#1A0A2E] transition hover:bg-secondary hover:text-[#FAF7FF] disabled:cursor-not-allowed disabled:opacity-70 dark:text-[#1A1040]"
          >
            {submitState === "sending" ? "Sending..." : "Submit"}
          </button>

          {submitState === "success" && (
            <p className="mt-4 text-sm text-emerald-500 dark:text-emerald-300">
              Message sent successfully.
            </p>
          )}
          {submitState === "error" && (
            <p className="mt-4 text-sm text-red-600 dark:text-red-300">
              Message failed to send. Please try again.
            </p>
          )}
          {submitState === "missing_config" && (
            <p className="mt-4 text-sm text-amber-700 dark:text-amber-300">
              EmailJS keys are missing. Add them to `.env.local`.
            </p>
          )}
        </form>
      </div>
    </SectionReveal>
  );
}
