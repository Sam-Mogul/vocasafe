-- ===================================================
-- VOCASAFE WATCH™ RLS POLICY ACCESS CONTROLS
-- ===================================================

-- 1. Enable RLS and define insert policy on contacts table
alter table public.contacts enable row level security;

create policy "Allow public insert to contacts" on public.contacts
  for insert
  with check (true);

-- 2. Enable RLS and define insert policy on newsletter_subscribers table
alter table public.newsletter_subscribers enable row level security;

create policy "Allow public insert to newsletter_subscribers" on public.newsletter_subscribers
  for insert
  with check (true);

-- 3. Enable RLS and define insert policy on uploads table
alter table public.uploads enable row level security;

create policy "Allow public insert to uploads" on public.uploads
  for insert
  with check (true);
