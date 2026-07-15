-- Run this once in Supabase > SQL Editor.

create table if not exists public.date_plans (
  id text primary key,
  guest_name text not null default 'David',
  accepted boolean not null default false,
  selected_style text check (selected_style in ('casual', 'dining', 'creative')),
  confirmed_at timestamptz,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);

alter table public.date_plans enable row level security;

grant select, insert, update on table public.date_plans to authenticated;

-- Both approved login accounts have the same access to this single invitation row.
drop policy if exists "authenticated users can read david plan" on public.date_plans;
create policy "authenticated users can read david plan"
on public.date_plans
for select
to authenticated
using (id = 'david-28');

drop policy if exists "authenticated users can create david plan" on public.date_plans;
create policy "authenticated users can create david plan"
on public.date_plans
for insert
to authenticated
with check (id = 'david-28' and updated_by = (select auth.uid()));

drop policy if exists "authenticated users can update david plan" on public.date_plans;
create policy "authenticated users can update david plan"
on public.date_plans
for update
to authenticated
using (id = 'david-28')
with check (id = 'david-28' and updated_by = (select auth.uid()));

insert into public.date_plans (id, guest_name, accepted)
values ('david-28', 'David', false)
on conflict (id) do nothing;
