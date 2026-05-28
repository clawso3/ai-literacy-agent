"use client";

import React, { memo } from "react";

const FeedbackSection = memo(function FeedbackSection({ feedback }: any) {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-10">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg animate-fadeIn">
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
          <div className="mt-4 rounded-xl bg-slate-950/60 p-4 text-sm text-slate-100 ring-1 ring-slate-800/80 whitespace-pre-wrap leading-relaxed">
            {feedback}
          </div>
        ) : (
          <div className="mt-4 rounded-xl border border-dashed border-slate-700/80 bg-slate-950/40 p-4 text-xs text-slate-400">
            Submit your responses to see tailored feedback here.
          </div>
        )}
      </div>
    </div>
  );
});

export default FeedbackSection;
