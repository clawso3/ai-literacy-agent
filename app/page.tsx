"use client";

import React from "react";
import { useState } from "react";

export default function Home() {
  const [problem, setProblem] = useState("");
  const [dataAnswer, setDataAnswer] = useState("");
  const [riskAnswer, setRiskAnswer] = useState("");
  const [roleAnswer, setRoleAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          problem,
          dataAnswer,
          riskAnswer,
          roleAnswer,
        }),
      });

      const data = await response.json();
      setFeedback(data.feedback);
    } catch (error) {
      console.error("Error generating feedback:", error);
      setFeedback("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 animate-fadeIn">
      {/* Top gradient banner */}
      <div className="bg-gradient-to-r from-[#F56600] via-[#7A0019] to-[#4F46E5] pb-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 pt-10 sm:px-6 lg:px-8">
          <header className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-100">
                NCCU IAIER • Clemson University
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                AI Literacy Agent
              </h1>
              <p className="mt-2 max-w-xl text-sm text-orange-50/90 sm:text-base">
                A reflective AI design companion for the{" "}
                <span className="font-semibold">
                  Institute for Artificial Intelligence & Emerging Research
                </span>{" "}
                Summer AI Literacy Series.
              </p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs sm:text-sm">
              <p className="font-semibold text-orange-50">
                Summer 2026 • Biotech & AI Literacy
              </p>
              <p className="text-orange-100/90">
                Facilitated by{" "}
                <span className="font-semibold">Christopher Lawson</span>
              </p>
            </div>
          </header>

          <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
            <span className="rounded-full bg-black/20 px-3 py-1 text-orange-100">
              Biotech problem framing
            </span>
            <span className="rounded-full bg-black/20 px-3 py-1 text-orange-100">
              Data & risk reflection
            </span>
            <span className="rounded-full bg-black/20 px-3 py-1 text-orange-100">
              Ethical AI practice
            </span>
          </div>
        </div>
      </div>

      {/* Main content card */}
      <div className="-mt-10 pb-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
          <section className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            {/* Form card */}
            <div className="rounded-2xl bg-slate-900/80 p-6 shadow-xl ring-1 ring-slate-800/80 backdrop-blur animate-slideUp">
              <h2 className="text-lg font-semibold text-slate-50">
                Design your AI‑powered biotech solution
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                Answer the prompts below. The agent will respond with strengths,
                suggestions, and one ethical consideration.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-6 flex flex-col gap-5"
              >
                <div>
                  <label className="block text-sm font-medium text-slate-100">
                    1. What biotech problem are you trying to solve?
                  </label>
                  <p className="mt-1 text-xs text-slate-400">
                    Be as specific as possible (e.g., diagnostics, drug
                    discovery, public health, genomics).
                  </p>
                  <textarea
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 shadow-sm outline-none ring-0 transition focus:border-[#F56600] focus:ring-2 focus:ring-[#F56600]/60"
                    rows={4}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-100">
                    2. What data would your AI system need?
                  </label>
                  <p className="mt-1 text-xs text-slate-400">
                    Think about data sources, structure, sensitivity, and who
                    controls access.
                  </p>
                  <textarea
                    value={dataAnswer}
                    onChange={(e) => setDataAnswer(e.target.value)}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 shadow-sm outline-none ring-0 transition focus:border-[#7A0019] focus:ring-2 focus:ring-[#7A0019]/60"
                    rows={4}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-100">
                    3. What risks or harms could occur?
                  </label>
                  <p className="mt-1 text-xs text-slate-400">
                    Consider bias, misuse, exclusion, safety, and unintended
                    consequences.
                  </p>
                  <textarea
                    value={riskAnswer}
                    onChange={(e) => setRiskAnswer(e.target.value)}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 shadow-sm outline-none ring-0 transition focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/60"
                    rows={4}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-100">
                    4. What role should AI play in your solution?
                  </label>
                  <p className="mt-1 text-xs text-slate-400">
                    Is AI assisting, augmenting, automating, or deciding? Who
                    stays in the loop?
                  </p>
                  <textarea
                    value={roleAnswer}
                    onChange={(e) => setRoleAnswer(e.target.value)}
                    required
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 shadow-sm outline-none ring-0 transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/60"
                    rows={4}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#F56600] via-[#7A0019] to-[#4F46E5] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-900/40 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="h-3 w-3 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Generating feedback…
                    </span>
                  ) : (
                    "Get AI Feedback"
                  )}
                </button>
              </form>
            </div>

            {/* Feedback / context column */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg">
                <h3 className="text-sm font-semibold text-slate-100">
                  AI Feedback
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  The agent responds in three parts:{" "}
                  <span className="font-semibold text-slate-200">
                    strengths, improvements, and one ethical consideration.
                  </span>
                </p>

                {feedback ? (
                  <div className="mt-4 rounded-xl bg-slate-950/60 p-4 text-sm text-slate-100 ring-1 ring-slate-800/80">
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                      Generated reflection
                    </div>
                    <div className="whitespace-pre-wrap leading-relaxed">
                      {feedback}
                    </div>
                  </div>
                ) : (
                  <div className="mt-4 rounded-xl border border-dashed border-slate-700/80 bg-slate-950/40 p-4 text-xs text-slate-400">
                    Submit your responses on the left to see tailored feedback
                    here. This is designed for students to practice{" "}
                    <span className="font-semibold text-slate-200">
                      reasoning about AI systems, not just using them.
                    </span>
                  </div>
                )}
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300">
                <p className="font-semibold text-slate-100">
                  Institute for Artificial Intelligence & Emerging Research
                </p>
                <p className="mt-1">
                  A collaborative effort to build{" "}
                  <span className="font-semibold">
                    equitable, critical AI literacy
                  </span>{" "}
                  across institutions, centering students’ ability to question,
                  design, and govern AI systems.
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-4 flex flex-col items-start justify-between gap-3 border-t border-slate-800 pt-4 text-xs text-slate-500 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} NCCU IAIER · Clemson University ·
              AI Literacy Agent Prototype
            </p>
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-600">
              Designed for the Summer AI Literacy Series
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
