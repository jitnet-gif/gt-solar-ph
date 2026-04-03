-- ─────────────────────────────────────────────────────────────────────────────
-- GT Solar PH — Supabase Schema
-- Run this in: supabase.com → SQL Editor → New Query → Run
-- ─────────────────────────────────────────────────────────────────────────────

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Quotes table
create table if not exists public.quotes (
  id           uuid primary key default uuid_generate_v4(),
  name         text not null,
  phone        text not null,
  address      text not null,
  monthly_bill text not null default 'Not specified',
  system_type  text not null default 'Not specified',
  status       text not null default 'new'
                 check (status in ('new','contacted','site_visit','quoted','converted','lost')),
  notes        text,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- Auto-update updated_at on row change
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists quotes_updated_at on public.quotes;
create trigger quotes_updated_at
  before update on public.quotes
  for each row execute procedure public.set_updated_at();

-- Indexes
create index if not exists quotes_status_idx on public.quotes(status);
create index if not exists quotes_created_at_idx on public.quotes(created_at desc);

-- ─── Row Level Security ───────────────────────────────────────────────────────
-- Public cannot read quotes (admin-only via service role)
alter table public.quotes enable row level security;

-- Allow INSERT from public (quote form submissions)
create policy "Allow public insert"
  on public.quotes for insert
  with check (true);

-- No public SELECT — service role bypasses RLS
-- Admin reads via SUPABASE_SERVICE_ROLE_KEY (server-side only)
