import { NextResponse } from "next/server";
import { insertIntoSupabase } from "@/lib/supabase-rest";

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (clean(body.website, 200)) return NextResponse.json({ ok: true });

    const name = clean(body.name, 120);
    const email = clean(body.email, 254).toLowerCase();
    const phone = clean(body.phone, 40);
    if (!name || !email || !phone || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
    }

    await insertIntoSupabase("campaign_signups", {
      name,
      email,
      phone,
      consented_to_email: true,
      consented_to_sms: true,
      source: "website_join_modal",
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to save submission" }, { status: 500 });
  }
}
