-- ===================================================
-- VOCASAFE WATCH™ ADDITIONAL DATABASE MIGRATION
-- ===================================================

-- Create Uploads Table for secure resource page submissions
create table if not exists public.uploads (
  id uuid default gen_random_uuid() primary key,
  name text,
  email text not null check (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$'),
  organization text,
  message text,
  file_urls text[] not null, -- Array of secure download links
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Index for uploads timelines
create index if not exists idx_uploads_created_at on public.uploads (created_at desc);
