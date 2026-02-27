"use client";

import emailjs from "@emailjs/browser";
import { type FormEvent, useRef, useState } from "react";
import SectionReveal from "@/components/SectionReveal";

type ContactFormState = {
  from_name: string;
  from_email: string;
  message: string;
};

type SubmitState = "idle" | "sending" | "success" | "error";

const initialState: ContactFormState = {
  from_name: "",
  from_email: "",
  message: "",
};

const EMAILJS_SERVICE_ID = "service_k3n5f78";
const EMAILJS_TEMPLATE_ID = "template_5kktl2l";
const EMAILJS_PUBLIC_KEY = "c6l-w_zIIX03NZUXE";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) {
      return;
    }

    setSubmitState("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
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
              href="https://www.linkedin.com/in/adenrele-gabriel-9332b9183/"
              target="_blank"
              rel="noreferrer"
              className="gold-glow-hover rounded-full border border-secondary px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-secondary hover:border-primary hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="surface-card rounded-3xl p-6 sm:p-8"
          noValidate
        >
          <input type="hidden" name="reply_to" value={form.from_email} />

          <div className="grid gap-4">
            <label className="grid gap-1.5 text-sm font-medium text-text">
              Name
              <input
                type="text"
                name="from_name"
                required
                value={form.from_name}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    from_name: event.target.value,
                  }))
                }
                placeholder="Your name"
                className="rounded-xl border border-line bg-surface px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25"
              />
            </label>

            <label className="grid gap-1.5 text-sm font-medium text-text">
              Email
              <input
                type="email"
                name="from_email"
                required
                value={form.from_email}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    from_email: event.target.value,
                  }))
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
                name="message"
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
            {submitState === "sending" ? (
              <span className="inline-flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#1A0A2E] border-t-transparent dark:border-[#1A1040] dark:border-t-transparent" />
                Sending...
              </span>
            ) : (
              "Submit"
            )}
          </button>

          {submitState === "success" && (
            <p className="mt-4 text-sm font-medium text-primary">
              Message sent! Gabriel will get back to you soon.
            </p>
          )}
          {submitState === "error" && (
            <p className="mt-4 text-sm text-red-600 dark:text-red-300">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </SectionReveal>
  );
}
