"use client";

import React, { memo } from "react";

const Footer = memo(function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-12 border-t border-slate-800 pt-4 text-xs text-slate-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} NCCU IAIER · Clemson University · AI Literacy Agent Prototype
        </p>
        <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-600">
          Designed for the Summer AI Literacy Series
        </p>
      </div>
    </footer>
  );
});

export default Footer;
