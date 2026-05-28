"use client";

import React, { memo } from "react";

const HeaderBanner = memo(function HeaderBanner() {
  return (
    <div className="bg-gradient-to-r from-[#F56600] via-[#7A0019] to-[#4F46E5] pb-16 animate-fadeIn">
      <div className="mx-auto max-w-5xl px-4 pt-12 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-100">
          NCCU IAIER × Clemson University
        </p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-5xl">
          AI Literacy Agent
        </h1>

        <p className="mt-3 max-w-2xl text-sm text-orange-50/90 sm:text-base leading-relaxed">
          A reflective AI design companion for the{" "}
          <span className="font-semibold">
            Institute for Artificial Intelligence & Emerging Research
          </span>{" "}
          Summer AI Literacy Series — empowering students to question, design,
          and govern AI systems.
        </p>

        <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm">
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
  );
});

export default HeaderBanner;
