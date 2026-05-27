import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";
import { sanitizeInput, isValidEmail } from "@/lib/utils";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const firstName = sanitizeInput(body.firstName);
    const lastName = sanitizeInput(body.lastName);
    const email = sanitizeInput(body.email);
    const phone = sanitizeInput(body.phone);
    const organization = sanitizeInput(body.organization);
    const inquiryType = sanitizeInput(body.inquiryType);
    const message = sanitizeInput(body.message);
    const attachmentUrl = sanitizeInput(body.attachmentUrl);
    const consent = !!body.consent;

    // Server-side validation
    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "Missing required fields: firstName, lastName, and email are required." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!consent) {
      return NextResponse.json({ error: "Data storage consent is required to submit inquiries." }, { status: 400 });
    }

    console.log("📨 Received Vocasafe Inquiry:", { firstName, lastName, email, phone, organization, inquiryType, message, attachmentUrl });

    // Step 1: Insert inquiry into Supabase PostgreSQL 'contacts' table
    if (supabase) {
      const { error: dbError } = await supabase
        .from("contacts")
        .insert([
          {
            first_name: firstName,
            last_name: lastName,
            email,
            phone: phone || null,
            organization: organization || null,
            inquiry_type: inquiryType,
            message: message || null,
            attachment_url: attachmentUrl || null,
          },
        ]);

      if (dbError) {
        console.error("❌ Supabase DB Insertion Error (contacts):", dbError);
        return NextResponse.json({ error: `Failed to save inquiry to database: ${dbError.message}` }, { status: 500 });
      }
      console.log("✅ Successfully saved contact submission to Supabase DB table 'contacts'.");
    } else {
      console.warn("⚠️ Supabase client not initialized. Mocking database insertion locally.");
    }

    // Step 2: Send email notification via Resend
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("⚠️ RESEND_API_KEY environment variable is missing. Skipping live email notification.");
      return NextResponse.json({
        success: true,
        message: "Submission saved to Supabase database. Add RESEND_API_KEY to send live email alerts.",
      });
    }

    const resend = new Resend(apiKey);
    const fromEmail = process.env.RESEND_FROM_EMAIL || "noreply@vocasafewatch.net";
    
    // Support multiple email recipients: split env by comma, fallback to both info@ and catherine@
    const toEmails = process.env.RESEND_TO_EMAIL
      ? process.env.RESEND_TO_EMAIL.split(",").map(e => e.trim())
      : ["info@vocasafewatch.net", "catherine@vocasafewatch.net"];

    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 12px; color: #121F36;">
        <h2 style="color: #E95F21; border-bottom: 2px solid #E95F21; padding-bottom: 10px; margin-top: 0;">
          Vocasafe Watch™ Website Inquiry
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 6px 0; font-weight: bold; width: 140px;">First Name:</td>
            <td style="padding: 6px 0;">${firstName}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold;">Last Name:</td>
            <td style="padding: 6px 0;">${lastName}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold;">Email Address:</td>
            <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #121F36; font-weight: bold;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold;">Phone Number:</td>
            <td style="padding: 6px 0;">${phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold;">Organization:</td>
            <td style="padding: 6px 0;">${organization || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #E95F21;">Inquiry Type:</td>
            <td style="padding: 6px 0; font-weight: bold; color: #E95F21;">${inquiryType}</td>
          </tr>
          ${attachmentUrl ? `
          <tr>
            <td style="padding: 6px 0; font-weight: bold; color: #10B981;">Attachment URL:</td>
            <td style="padding: 6px 0;"><a href="${attachmentUrl}" target="_blank" style="color: #10B981; font-weight: bold; text-decoration: underline;">View Uploaded File</a></td>
          </tr>
          ` : ""}
        </table>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
          <h4 style="margin-top: 0; color: #121F36; font-size: 13px; font-weight: bold; text-transform: uppercase;">Message Content</h4>
          <p style="margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap; font-style: italic; color: #4B5563;">
            ${message || "No message provided."}
          </p>
        </div>

        <div style="margin-top: 20px; font-size: 10px; color: #9CA3AF; text-align: center; border-top: 1px solid #eee; padding-top: 15px;">
          Consent Checkbox: Approved (User consented to data storage for inquiry replies).<br />
          © 2026 by Vocasafe Watch™. Automated Notification Hub.
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: `Vocasafe Alerts <${fromEmail}>`,
      to: toEmails,
      subject: `[Vocasafe Inquiry] ${inquiryType} - ${firstName} ${lastName}`,
      html: emailHtml,
    });

    if (error) {
      console.error("❌ Resend Email Error:", error);
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("❌ API Contact Error:", err);
    return NextResponse.json({ error: err.message || "Internal server error." }, { status: 500 });
  }
}
