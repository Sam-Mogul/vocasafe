# Vocasafe Watch™ — Site Operations Handoff & Database Operations Document

Welcome to your new custom Next.js website! This site is designed for high-performance, excellent SEO, premium visuals, and easy maintenance. This document provides clear, step-by-step instructions so that Catherine's team can operate, write, and update the website completely independently.

---

## 1. Managing the Blog (Sanity.io Studio)

We have built the blog structure to support **Sanity.io**. You have a visual editor that allows you to easily compose and catalog posts.

### How to Publish or Edit a Post:
1. **Login:** Log in to your Sanity project dashboard (at `https://www.sanity.io/manage` or your deployed Sanity Studio url).
2. **Schema Selection:** In the Studio, you will see three content types:
   - **Post:** The actual article.
   - **Author:** Author bios (e.g., *Catherine Katambo* or *Vocasafe Watch Team*).
   - **Category:** Categorization tags (e.g., *Wearable AAC Tech*, *Safety Innovations*).
3. **Adding a New Post:**
   - Click **Create Document** under **Post**.
   - Input the **Title**, set the **Slug** (click "Generate" to automatically create the Wix-matching text), choose the **Author**, and assign one or more **Categories**.
   - Write the article inside the **Body** field (supporting rich headings, bold lists, and images).
   - Click **Publish**. Within 60 seconds, Next.js will automatically detect the new post and display it live on your site!

---

## 2. Managing Downloadable PDFs (Supabase Storage)

The downloadable documents on the **Resources** page are served from secure file pathways. To update these files (e.g., uploading a revised *Product Overview Sheet*):

1. **Access Storage:** Log in to your **Supabase Dashboard** and open your project.
2. **Bucket Selection:** Open the **Storage** tab from the sidebar and click on the **public** bucket named `documents` (or the folder `/public/pdfs/` inside your repository code).
3. **Upload the File:** 
   - Upload the new PDF and name it exactly after its original filename to keep links intact:
     - `vocasafe-product-overview.pdf` (Product Overview Sheet)
     - `vocasafe-pilot-interest-form.pdf` (Pilot Interest Form)
     - `vocasafe-brand-story.pdf` (Brand Story One-Pager)
     - `vocasafe-crowdfunding-faq.pdf` (Crowdfunding FAQ)
     - `vocasafe-qr-code.pdf` (Co-Design QR Code flyer)
   - If you choose to host them locally in the code instead of Supabase, simply drop the new PDF into the `public/pdfs/` folder of the code repository and push the changes to GitHub. Vercel will rebuild and update the download links instantly!

---

## 3. Database Architecture: Next.js API Routes vs. Supabase Edge Functions

### Do you need to use Supabase Edge Functions?
**No, you do not need to use Supabase Edge Functions.** 

Since this application is built on Next.js 14+ (App Router), our API routes (`/app/api/contact/route.ts`, etc.) run as secure, serverless Node.js backend functions on Vercel. 
- Using Next.js API routes keeps your entire codebase consolidated in a single repository.
- It ensures you do not have to write, maintain, or deploy separate Edge Functions, reducing deployment time and cold starts.
- It is fully secure: these routes run purely on the server-side, meaning sensitive keys like your `RESEND_API_KEY` and `SUPABASE_SERVICE_ROLE_KEY` are never exposed to the browser.

---

## 4. Scalable Supabase PostgreSQL Database Setup

To prepare your Supabase backend to store submissions, navigate to your **Supabase Project -> SQL Editor**, click **New Query**, and copy-paste the highly optimized DDL script below. 

This detailed script is fully indexed and structured to easily scale to millions of submissions:

```sql
-- ==========================================
-- VOCASAFE WATCH™ SCALABLE DATABASE SCHEMA
-- ==========================================

-- 1. Create Contacts & Waitlist Table
create table if not exists public.contacts (
  id uuid default gen_random_uuid() primary key,
  first_name text not null check (char_length(first_name) >= 1),
  last_name text not null check (char_length(last_name) >= 1),
  email text not null check (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$'),
  phone text,
  organization text,
  inquiry_type text not null,
  message text,
  attachment_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Create Newsletter Subscribers Table
create table if not exists public.newsletter_subscribers (
  id uuid default gen_random_uuid() primary key,
  email text not null unique check (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$'),
  consent boolean not null default false check (consent = true),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Create Uploads Table for secure resource page submissions
create table if not exists public.uploads (
  id uuid default gen_random_uuid() primary key,
  name text,
  email text not null check (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$'),
  organization text,
  message text,
  file_urls text[] not null, -- Array of secure download links
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ==========================================
-- INDEXES FOR HIGH-SCALE QUERY OPTIMIZATION
-- ==========================================

-- Optimized index for contact inquiry filtering (e.g. searching contacts by inquiry type)
create index if not exists idx_contacts_inquiry_type on public.contacts (inquiry_type);

-- Optimized index for contact registration timelines
create index if not exists idx_contacts_created_at on public.contacts (created_at desc);

-- Optimized index for searching subscribers by email
create index if not exists idx_newsletter_subscribers_email on public.newsletter_subscribers (email);

-- Optimized index for subscriber registration timelines
create index if not exists idx_newsletter_subscribers_created_at on public.newsletter_subscribers (created_at desc);

-- Optimized index for uploads timelines
create index if not exists idx_uploads_created_at on public.uploads (created_at desc);

-- ==========================================
-- ROW LEVEL SECURITY (RLS) POLICY EXPLANATION
-- ==========================================
-- By default, Supabase enables RLS. 
-- Because Vocasafe's backend API routes write to your database using the secure "SUPABASE_SERVICE_ROLE_KEY",
-- all database insertions bypass RLS safely on the server side. 
-- No public-write policies are required in the dashboard, protecting your records from external browser tampering!
```

---

## 5. Updating Corporate Contact Information

If Vocasafe changes its phone number, headquarters address, or primary alert emails, you can update them instantly in one central place:

1. **Config File:** In the codebase, contact details are configured in the Navbar (`components/layout/Navbar.tsx`) and Footer (`components/layout/Footer.tsx`) components, and read server-side from environment variables.
2. **Target Variables:**
   - `RESEND_TO_EMAIL`: The recipient email where form entries and waitlist alerts are sent (Default fallback: `info@vocasafewatch.net, catherine@vocasafewatch.net`).
   - `RESEND_FROM_EMAIL`: The verified email sender domain configured in your Resend account (Default: `noreply@vocasafewatch.net`).

---

## 6. Launch Checklist & Environment Variables

When deploying the site to **Vercel** from Git, navigate to **Project Settings -> Environment Variables** and add the following keys to make the live database and email integrations active:

```env
# Resend Email Client Keys
RESEND_API_KEY=re_your_api_key_here
RESEND_TO_EMAIL=info@vocasafewatch.net, catherine@vocasafewatch.net  # Comma-separated dual delivery
RESEND_FROM_EMAIL=noreply@vocasafewatch.net

# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Supabase Database & Storage Configs
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsIn...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsIn... # Required for direct DB table inserts

# Headless blog content (Sanity.io)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=skyour_sanity_write_token
```

If you ever run the site locally for development, copy the variables above into a file named `.env.local` in the root folder, and start the local compiler using `npm run dev`.

---
*Developed by Cysparks Technologies for Vocasafe Watch™ Website Launch.*
