import { NextResponse } from "next/server";
import Groq from "groq-sdk";

export async function POST(req: Request) {
  try {
    const { problem, dataAnswer, riskAnswer, roleAnswer } = await req.json();

    const client = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const prompt = `
You are an AI literacy reflection assistant. Analyze the student's biotech AI design.

Problem: ${problem}
Data Needed: ${dataAnswer}
Risks: ${riskAnswer}
AI Role: ${roleAnswer}

Respond with:
1. Strengths
2. Suggestions
3. One ethical consideration
`;

    const completion = await client.chat.completions.create({
      model: "llama3-70b-8192",
      messages: [{ role: "user", content: prompt }],
    });

    return NextResponse.json({
      feedback: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Something went wrong generating feedback." },
      { status: 500 }
    );
  }
}
