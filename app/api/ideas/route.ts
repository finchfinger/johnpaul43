import { NextResponse } from "next/server";
import { insertIntoSupabase } from "@/lib/supabase-rest";

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (clean(body.website, 200)) return NextResponse.json({ ok: true });

    const idea = clean(body.idea, 3000);
    const email = clean(body.email, 254).toLowerCase();
    if (!idea || !email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    await insertIntoSupabase("community_ideas", {
      idea,
      email,
      consented_to_email: true,
      source: "website_idea_form",
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to save submission" }, { status: 500 });
  }
}
