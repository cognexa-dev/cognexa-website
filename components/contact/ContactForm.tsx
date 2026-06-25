"use client";

import { useState, useRef } from "react";

const interests = [
  "Cybersecurity audit (Surakshitam)",
  "AI automation assessment (Aurobit)",
  "Knowledge intelligence demo (Vidya AI)",
  "Enterprise data management",
  "Full stack assessment",
  "Custom development / consulting",
];

type State = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const toggleInterest = (item: string) =>
    setSelectedInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("submitting");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name"),
      company: fd.get("company"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      role: fd.get("role"),
      interests: selectedInterests,
      message: fd.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setState("error");
        return;
      }

      setState("success");
      formRef.current?.reset();
      setSelectedInterests([]);
    } catch {
      setErrorMsg("Network error. Please try again or call us directly.");
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="flex flex-col items-start gap-6 rounded-2xl border border-green-100 bg-green-50 p-8">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-ink mb-2">Request received</h3>
          <p className="text-muted text-sm leading-relaxed mb-4">
            We have your details and will reach out within 4 business hours to confirm
            scope. Check your inbox — a confirmation has been sent.
          </p>
          <p className="text-sm text-muted">
            Questions now?{" "}
            <a href="tel:+919898931509" className="text-sapphire-600 font-semibold hover:underline">
              +91 98989 31509
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-ink mb-2">
            Full name <span className="text-crimson-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Priya Sharma"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-ink placeholder-slate-400 text-sm
                       focus:outline-none focus:ring-2 focus:ring-sapphire-500 focus:border-transparent transition-shadow"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-ink mb-2">
            Company <span className="text-crimson-500">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="Acme Industries Ltd."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-ink placeholder-slate-400 text-sm
                       focus:outline-none focus:ring-2 focus:ring-sapphire-500 focus:border-transparent transition-shadow"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-ink mb-2">
            Work email <span className="text-crimson-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="priya@acmeindustries.in"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-ink placeholder-slate-400 text-sm
                       focus:outline-none focus:ring-2 focus:ring-sapphire-500 focus:border-transparent transition-shadow"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-ink mb-2">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-ink placeholder-slate-400 text-sm
                       focus:outline-none focus:ring-2 focus:ring-sapphire-500 focus:border-transparent transition-shadow"
          />
        </div>
      </div>

      <div>
        <label htmlFor="role" className="block text-sm font-semibold text-ink mb-2">
          Your role
        </label>
        <select
          id="role"
          name="role"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-ink text-sm
                     focus:outline-none focus:ring-2 focus:ring-sapphire-500 focus:border-transparent transition-shadow"
        >
          <option value="">Select your role</option>
          <option>CTO / CIO</option>
          <option>CISO / Security Head</option>
          <option>COO / Operations Head</option>
          <option>IT Manager / Director</option>
          <option>CEO / Founder</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <p className="text-sm font-semibold text-ink mb-3">
          What are you most interested in? <span className="text-crimson-500">*</span>
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {interests.map((interest) => {
            const checked = selectedInterests.includes(interest);
            return (
              <button
                key={interest}
                type="button"
                onClick={() => toggleInterest(interest)}
                className={`flex items-start gap-3 px-4 py-3 rounded-xl border text-left transition-colors
                  ${checked
                    ? "border-sapphire-400 bg-sapphire-500/6 text-sapphire-700"
                    : "border-slate-200 bg-white text-ink hover:border-sapphire-300 hover:bg-sapphire-500/3"
                  }`}
              >
                <span className={`mt-0.5 w-4 h-4 rounded flex-shrink-0 border flex items-center justify-center transition-colors
                  ${checked ? "bg-sapphire-500 border-sapphire-500" : "border-slate-300"}`}
                >
                  {checked && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>
                <span className="text-sm">{interest}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-ink mb-2">
          Tell us about your current challenge
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Describe what you are trying to solve, or the context behind this request..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-ink placeholder-slate-400 text-sm
                     focus:outline-none focus:ring-2 focus:ring-sapphire-500 focus:border-transparent transition-shadow resize-none"
        />
      </div>

      {state === "error" && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm">
          <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p>{errorMsg}</p>
        </div>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={state === "submitting" || selectedInterests.length === 0}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-sapphire-500 text-white font-semibold text-base
                     hover:bg-sapphire-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors w-full sm:w-auto justify-center"
        >
          {state === "submitting" ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending…
            </>
          ) : (
            <>
              Submit Audit Request
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
        <p className="mt-3 text-xs text-muted">
          We respond within 4 business hours. No obligation.
        </p>
      </div>
    </form>
  );
}
