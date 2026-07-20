create extension if not exists pgcrypto;

create table if not exists public.campaign_signups (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (char_length(email) between 3 and 254),
  phone text not null check (char_length(phone) between 7 and 40),
  consented_to_email boolean not null default true,
  consented_to_sms boolean not null default true,
  source text not null default 'website_join_modal',
  created_at timestamptz not null default now()
);

create table if not exists public.community_ideas (
  id uuid primary key default gen_random_uuid(),
  idea text not null check (char_length(idea) between 1 and 3000),
  email text not null check (char_length(email) between 3 and 254),
  consented_to_email boolean not null default true,
  source text not null default 'website_idea_form',
  created_at timestamptz not null default now()
);

alter table public.campaign_signups enable row level security;
alter table public.community_ideas enable row level security;

revoke all on table public.campaign_signups from anon, authenticated;
revoke all on table public.community_ideas from anon, authenticated;
grant insert on table public.campaign_signups to anon;
grant insert on table public.community_ideas to anon;

drop policy if exists "public can submit campaign signups" on public.campaign_signups;
create policy "public can submit campaign signups"
on public.campaign_signups for insert to anon
with check (
  consented_to_email = true
  and consented_to_sms = true
  and source = 'website_join_modal'
);

drop policy if exists "public can submit community ideas" on public.community_ideas;
create policy "public can submit community ideas"
on public.community_ideas for insert to anon
with check (
  consented_to_email = true
  and source = 'website_idea_form'
);

create index if not exists campaign_signups_created_at_idx on public.campaign_signups (created_at desc);
create index if not exists community_ideas_created_at_idx on public.community_ideas (created_at desc);
