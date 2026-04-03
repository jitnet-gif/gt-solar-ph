
create extension if not exists "uuid-ossp";

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

create index if not exists quotes_status_idx on public.quotes(status);
create index if not exists quotes_created_at_idx on public.quotes(created_at desc);

alter table public.quotes enable row level security;

drop policy if exists "Allow public insert" on public.quotes;
create policy "Allow public insert"
  on public.quotes for insert
  with check (true);


-- ─── FAQ Table for Chatbot ─────────────────────────────────────────────
create table if not exists public.faq (
  id uuid primary key default uuid_generate_v4(),
  question text not null,
  answer text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_faq_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists faq_updated_at on public.faq;
create trigger faq_updated_at
  before update on public.faq
  for each row execute procedure public.set_faq_updated_at();

alter table public.faq enable row level security;

create policy "Allow public select"
  on public.faq for select
  using (true);

create policy "Allow admin insert"
  on public.faq for insert
  with check (true);

create policy "Allow admin update"
  on public.faq for update
  using (true);
