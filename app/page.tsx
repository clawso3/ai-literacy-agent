"use client";

import { useState } from "react";
import HeaderBanner from "./components/HeaderBanner";
import FormSection from "./components/FormSection";
import FeedbackSection from "./components/FeedbackSection";
import Footer from "./components/Footer";

export default function Home() {
  const [feedback, setFeedback] = useState("");

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <HeaderBanner />
      <FormSection onFeedback={setFeedback} />
      <FeedbackSection feedback={feedback} />
      <Footer />
    </main>
  );
}
