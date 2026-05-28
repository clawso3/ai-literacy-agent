"use client";

import React, { useState, memo } from "react";

const FormSection = memo(function FormSection({ onFeedback }: any) {
  const [problem, setProblem] = useState("");
  const [dataAnswer, setDataAnswer] = useState("");
  const [riskAnswer, setRiskAnswer] = useState("");
  const [roleAnswer, setRoleAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          problem,
          dataAnswer,
          riskAnswer,
          roleAnswer,
        }),
      });

      const data = await response.json();
      onFeedback(data.feedback);
    } catch (error) {
      onFeedback("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <div className="-mt-10 animate-slideUp">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900/80 p-6 shadow-xl ring-1 ring-slate-800/80 backdrop-blur">
          <h2 className="text-lg font-semibold text-slate-50">
            Design your AI‑powered biotech solution
          </h2>
          <p className="mt-1 text-sm text-slate-300">
            Answer the prompts below. The agent will respond with strengths,
            suggestions, and one ethical consideration.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
            {/* 1 */}
            <div>
              <label className="block text-sm font-medium text-slate-100">
                1. What biotech problem are you trying to solve?
              </label>
              <textarea
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                required
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 shadow-sm outline-none transition focus:border-[#F56600] focus:ring-2 focus:ring-[#F56600]/60"
                rows={4}
              />
            </div>

            {/* 2 */}
            <div>
              <label className="block text-sm font-medium text-slate-100">
                2. What data would your AI system need?
              </label>
              <textarea
                value={dataAnswer}
                onChange={(e) => setDataAnswer(e.target.value)}
                required
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 shadow-sm outline-none transition focus:border-[#7A0019] focus:ring-2 focus:ring-[#7A0019]/60"
                rows={4}
              />
            </div>

            {/* 3 */}
            <div>
              <label className="block text-sm font-medium text-slate-100">
                3. What risks or harms could occur?
              </label>
              <textarea
                value={riskAnswer}
                onChange={(e) => setRiskAnswer(e.target.value)}
                required
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 shadow-sm outline-none transition focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/60"
                rows={4}
              />
            </div>

            {/* 4 */}
            <div>
              <label className="block text-sm font-medium text-slate-100">
                4. What role should AI play in your solution?
              </label>
              <textarea
                value={roleAnswer}
                onChange={(e) => setRoleAnswer(e.target.value)}
                required
                className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-50 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/60"
                rows={4}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#F56600] via-[#7A0019] to-[#4F46E5] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-900/40 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Generating…" : "Get AI Feedback"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default FormSection;
