import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";
import { sanitizeInput, isValidEmail } from "@/lib/utils";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const rawName = formData.get("name") as string;
    const rawEmail = formData.get("email") as string;
    const rawPhone = (formData.get("phone") as string) || "";
    const rawOrganization = (formData.get("organization") as string) || "";
    const rawMessage = (formData.get("message") as string) || "";

    const name = sanitizeInput(rawName);
    const email = sanitizeInput(rawEmail);
    const phone = sanitizeInput(rawPhone);
    const organization = sanitizeInput(rawOrganization);
    const message = sanitizeInput(rawMessage);

    const file = formData.get("file") as File | null;
    const file1 = formData.get("file1") as File | null;
    const file2 = formData.get("file2") as File | null;

    if (!email) {
      return NextResponse.json({ error: "Submitter email is required." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const uploadedUrls: string[] = [];

    // Helper to upload a single file to Supabase Storage
    const uploadToSupabase = async (f: File, prefix: string): Promise<string> => {
      const extension = f.name.split(".").pop();
      const sanitizedName = f.name.replace(/[^a-zA-Z0-9]/g, "_");
      const filePath = `uploads/${prefix}_${Date.now()}_${sanitizedName}.${extension}`;

      const hasSupabase = !!supabase;

      if (!hasSupabase) {
        console.warn(`⚠️ Supabase credentials missing. Generating a local mock URL for: ${f.name}`);
        return `/pdfs/vocasafe-product-overview.pdf?mock=${filePath}`;
      }

      const fileBuffer = Buffer.from(await f.arrayBuffer());
      
      const { data, error } = await supabase.storage
        .from("resource-uploads")
        .upload(filePath, fileBuffer, {
          contentType: f.type,
          upsert: true,
        });

      if (error) {
        console.error(`❌ Supabase Storage Error [${f.name}]:`, error);
        throw new Error(`Failed to upload ${f.name} to storage bucket.`);
      }

      const { data: urlData } = supabase.storage
        .from("resource-uploads")
        .getPublicUrl(filePath);

      return urlData?.publicUrl || "";
    };

    // Parse and process files
    if (file) {
      const url = await uploadToSupabase(file, "contact");
      uploadedUrls.push(url);
    }
    if (file1) {
      const url = await uploadToSupabase(file1, "doc1");
      uploadedUrls.push(url);
    }
    if (file2) {
      const url = await uploadToSupabase(file2, "doc2");
      uploadedUrls.push(url);
    }

    console.log(`📁 Files processed: ${uploadedUrls.length} uploads created.`, uploadedUrls);

    // Save upload metadata to Supabase PostgreSQL 'uploads' table
    if (supabase && uploadedUrls.length > 0) {
      const { error: dbError } = await supabase
        .from("uploads")
        .insert([
          {
            name: name || null,
            email,
            organization: organization || null,
            message: message || null,
            file_urls: uploadedUrls,
          },
        ]);

      if (dbError) {
        console.error("❌ Supabase DB Insertion Error (uploads):", dbError);
        return NextResponse.json({ error: `Failed to save upload metadata to database: ${dbError.message}` }, { status: 500 });
      }
      console.log("✅ Successfully saved upload submission to Supabase DB table 'uploads'.");
    } else if (uploadedUrls.length > 0) {
      console.warn("⚠️ Supabase client not initialized or no files to log. Mocking database metadata insertion locally.");
    }

    // Send notification email to Catherine regarding the secure upload
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey && uploadedUrls.length > 0) {
      const resend = new Resend(apiKey);
      const fromEmail = process.env.RESEND_FROM_EMAIL || "noreply@vocasafewatch.net";
      
      // Support multiple email recipients
      const toEmails = process.env.RESEND_TO_EMAIL
        ? process.env.RESEND_TO_EMAIL.split(",").map(e => e.trim())
        : ["info@vocasafewatch.net", "catherine@vocasafewatch.net"];

      const fileLinksHtml = uploadedUrls
        .map((url, idx) => `
          <li style="margin-bottom: 8px;">
            <strong>Document ${idx + 1}:</strong> 
            <a href="${url}" target="_blank" style="color: #E95F21; font-weight: bold; text-decoration: underline;">
              Download Document ${idx + 1}
            </a>
          </li>
        `)
        .join("");

      const emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 12px; color: #121F36;">
          <h2 style="color: #121F36; border-bottom: 2px solid #E95F21; padding-bottom: 8px; margin-top: 0;">
            Secure Document Upload Alert
          </h2>
          <p style="font-size: 14px;">
            A user has uploaded secure resource files to Vocasafe Watch™:
          </p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 13px;">
            <tr>
              <td style="padding: 4px 0; font-weight: bold; width: 120px;">Name:</td>
              <td>${name || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 4px 0; font-weight: bold;">Email:</td>
              <td><a href="mailto:${email}" style="color: #121F36;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 4px 0; font-weight: bold;">Phone:</td>
              <td>${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 4px 0; font-weight: bold;">Organization:</td>
              <td>${organization || "Not provided"}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 12px; bg-color: #f9f9f9; border-radius: 6px;">
            <h4 style="margin: 0 0 6px 0; font-size: 11px; text-transform: uppercase; color: #121F36;">Message</h4>
            <p style="margin: 0; font-size: 13px; line-height: 1.5; font-style: italic;">
              ${message || "No instructions provided."}
            </p>
          </div>

          <h3 style="color: #121F36; font-size: 14px; border-top: 1px solid #eee; padding-top: 15px; margin-top: 20px;">
            Secure Uploaded Files
          </h3>
          <ul style="padding-left: 20px; font-size: 13px;">
            ${fileLinksHtml}
          </ul>

          <div style="margin-top: 30px; font-size: 9px; color: #9CA3AF; text-align: center; border-top: 1px solid #eee; padding-top: 12px;">
            Vocasafe Storage Alert Operations Hub.
          </div>
        </div>
      `;

      await resend.emails.send({
        from: `Vocasafe Alerts <${fromEmail}>`,
        to: toEmails,
        subject: `[Vocasafe Secure Upload] New Files from ${name || email}`,
        html: emailHtml,
      });
    }

    return NextResponse.json({
      success: true,
      fileUrl: uploadedUrls[0] || "",
      fileUrls: uploadedUrls,
    });
  } catch (err: any) {
    console.error("❌ API Upload Error:", err);
    return NextResponse.json({ error: err.message || "Failed to process uploaded file." }, { status: 500 });
  }
}
