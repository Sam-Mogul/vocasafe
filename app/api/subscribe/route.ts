import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";
import { sanitizeInput, isValidEmail } from "@/lib/utils";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = sanitizeInput(body.email);
    const consent = !!body.consent;

    if (!email) {
      return NextResponse.json({ error: "Email address is required." }, { status: 400 });
    }

    if (!consent) {
      return NextResponse.json({ error: "Consent checkbox must be checked to subscribe." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    console.log("📬 New Vocasafe Newsletter Subscriber:", { email, consent });

    // Step 1: Insert subscriber into Supabase PostgreSQL 'newsletter_subscribers' table
    if (supabase) {
      const { error: dbError } = await supabase
        .from("newsletter_subscribers")
        .insert([
          {
            email,
            consent,
          },
        ]);

      if (dbError) {
        console.error("❌ Supabase DB Insertion Error (newsletter_subscribers):", dbError);
        
        // Handle unique constraint violation in PostgreSQL (code: 23505)
        if (dbError.code === "23505") {
          return NextResponse.json(
            { error: "This email is already subscribed to our newsletter." },
            { status: 400 }
          );
        }

        return NextResponse.json(
          { error: `Failed to save subscription to database: ${dbError.message}` },
          { status: 500 }
        );
      }
      console.log("✅ Successfully saved subscriber to Supabase DB table 'newsletter_subscribers'.");
    } else {
      console.warn("⚠️ Supabase client not initialized. Mocking newsletter database insertion locally.");
    }

    // Step 2: Send email notification via Resend
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("⚠️ RESEND_API_KEY is missing. Skipping live email notification.");
      return NextResponse.json({
        success: true,
        message: "Subscription saved to Supabase database. Add RESEND_API_KEY to send confirmation emails.",
      });
    }

    const resend = new Resend(apiKey);
    const fromEmail = process.env.RESEND_FROM_EMAIL || "noreply@vocasafewatch.net";
    
    // Support multiple email recipients
    const toEmails = process.env.RESEND_TO_EMAIL
      ? process.env.RESEND_TO_EMAIL.split(",").map(e => e.trim())
      : ["info@vocasafewatch.net", "catherine@vocasafewatch.net"];

    const notificationHtml = `
      <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 8px; color: #121F36;">
        <h3 style="color: #E95F21; margin-top: 0; border-bottom: 2px solid #E95F21; padding-bottom: 8px;">
          New Newsletter Subscriber
        </h3>
        <p style="font-size: 14px; line-height: 1.5;">
          A new user has subscribed to the Vocasafe Watch™ newsletter community:
        </p>
        <p style="font-size: 16px; font-weight: bold; background-color: #f9f9f9; padding: 12px; border-radius: 6px; text-align: center;">
          <a href="mailto:${email}" style="color: #121F36; text-decoration: none;">${email}</a>
        </p>
        <div style="font-size: 10px; color: #9CA3AF; text-align: center; border-top: 1px solid #eee; padding-top: 12px;">
          Subscriber consent checkbox: APPROVED.<br />
          © 2026 by Vocasafe Watch™. Automated Notification Hub.
        </div>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: `Vocasafe Alerts <${fromEmail}>`,
      to: toEmails,
      subject: `[Vocasafe Subscriber] New Signup: ${email}`,
      html: notificationHtml,
    });

    if (error) {
      console.error("❌ Resend Subscriber Notification Error:", error);
    }

    return NextResponse.json({ success: true, message: "Successfully subscribed to the newsletter!" });
  } catch (err: any) {
    console.error("❌ Subscribe API Error:", err);
    return NextResponse.json({ error: err.message || "Internal server error." }, { status: 500 });
  }
}
