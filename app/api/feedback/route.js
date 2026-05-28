import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req) {
  try {
    const body = await req.json();
    const { problem, dataAnswer, riskAnswer, roleAnswer } = body;

    const prompt = `
You are an AI literacy tutor. A student designed an AI system for a biotech problem.

Biotech problem: ${problem}
Data needed: ${dataAnswer}
Risks: ${riskAnswer}
Role: ${roleAnswer}

Give a clear, encouraging, 3-paragraph explanation of:
1. What they did well
2. What they could improve
3. One ethical consideration they should think about
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const feedback = completion.choices?.[0]?.message?.content || "No feedback generated.";

    return NextResponse.json({ feedback });
  } catch (err) {
    console.error("Groq error:", err);
    return NextResponse.json({ feedback: "Error: " + err.message });
  }
}
