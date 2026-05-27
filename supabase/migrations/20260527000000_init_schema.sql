-- ===================================================
-- VOCASAFE WATCH™ SCALABLE PRODUCTION DATABASE SCHEMA
-- ===================================================

-- 1. Create Contacts, Waitlist, and Co-Design Table
create table if not exists public.contacts (
  id uuid default gen_random_uuid() primary key,
  first_name text not null check (char_length(first_name) >= 1),
  last_name text not null check (char_length(last_name) >= 1),
  email text not null check (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$'),
  phone text,
  organization text,
  inquiry_type text not null,
  message text,
  attachment_url text, -- Store public URLs of secure uploaded files
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Create Newsletter Subscribers Table
create table if not exists public.newsletter_subscribers (
  id uuid default gen_random_uuid() primary key,
  email text not null unique check (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$'),
  consent boolean not null default false check (consent = true),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Initialize secure storage bucket for resource-uploads
insert into storage.buckets (id, name, public)
values ('resource-uploads', 'resource-uploads', true)
on conflict (id) do nothing;

-- ===================================================
-- HIGH-PERFORMANCE CLUSTER INDEXES FOR BIG-DATA SCALE
-- ===================================================

-- Optimized index for contact inquiry filtering (e.g. searching contacts by inquiry type)
create index if not exists idx_contacts_inquiry_type on public.contacts (inquiry_type);

-- Optimized index for chronological queries (latest signups/inquiries first)
create index if not exists idx_contacts_created_at on public.contacts (created_at desc);

-- Optimized index for rapid subscriber lookup
create index if not exists idx_newsletter_subscribers_email on public.newsletter_subscribers (email);

-- Optimized index for subscriber registration timelines
create index if not exists idx_newsletter_subscribers_created_at on public.newsletter_subscribers (created_at desc);

-- ===================================================
-- STORAGE POLICY ACCESS CONTROLS (IDEMPOTENT SETUP)
-- ===================================================

-- Allow public read access to uploaded files in the 'resource-uploads' bucket
do $$
begin
  if not exists (
    select 1 from pg_policies 
    where tablename = 'objects' and schemaname = 'storage' and policyname = 'Allow Public Select for resource-uploads'
  ) then
    create policy "Allow Public Select for resource-uploads" on storage.objects
      for select using (bucket_id = 'resource-uploads');
  end if;
end
$$;

-- Allow public insert access to 'resource-uploads' bucket to accommodate standard submissions
do $$
begin
  if not exists (
    select 1 from pg_policies 
    where tablename = 'objects' and schemaname = 'storage' and policyname = 'Allow Public Insert for resource-uploads'
  ) then
    create policy "Allow Public Insert for resource-uploads" on storage.objects
      for insert with check (bucket_id = 'resource-uploads');
  end if;
end
$$;
