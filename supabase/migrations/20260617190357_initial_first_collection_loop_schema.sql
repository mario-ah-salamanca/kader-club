create schema if not exists private;

revoke all on schema private from public;
grant usage on schema private to authenticated, service_role;

create type public.profile_role as enum ('user', 'admin');
create type public.profile_trade_availability as enum (
  'not_trading',
  'open_to_trades',
  'actively_trading'
);
create type public.card_condition as enum (
  'poor',
  'fair',
  'good',
  'very_good',
  'excellent',
  'near_mint',
  'mint',
  'gem_mint'
);
create type public.card_trade_status as enum (
  'not_for_trade',
  'open_to_offers',
  'actively_trading'
);

grant usage on type public.profile_role to authenticated, service_role;
grant usage on type public.profile_trade_availability to authenticated, service_role;
grant usage on type public.card_condition to authenticated, service_role;
grant usage on type public.card_trade_status to authenticated, service_role;

create or replace function private.set_updated_at()
returns trigger
language plpgsql
set search_path = pg_catalog
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  display_name text not null,
  country text,
  favorite_club text,
  bio text,
  trade_availability public.profile_trade_availability not null default 'not_trading',
  role public.profile_role not null default 'user',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint profiles_display_name_not_blank check (length(btrim(display_name)) > 0)
);

create table public.leagues (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  country text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint leagues_name_not_blank check (length(btrim(name)) > 0),
  constraint leagues_name_country_unique unique (name, country)
);

create table public.clubs (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  country text,
  league_id uuid references public.leagues(id) on delete restrict,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint clubs_name_not_blank check (length(btrim(name)) > 0),
  constraint clubs_name_country_unique unique (name, country)
);

create table public.players (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  nationality text,
  position text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint players_name_not_blank check (length(btrim(name)) > 0)
);

create table public.card_sets (
  id uuid primary key default gen_random_uuid(),
  manufacturer text not null,
  name text not null,
  season text not null,
  league_id uuid references public.leagues(id) on delete restrict,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint card_sets_manufacturer_not_blank check (length(btrim(manufacturer)) > 0),
  constraint card_sets_name_not_blank check (length(btrim(name)) > 0),
  constraint card_sets_season_not_blank check (length(btrim(season)) > 0),
  constraint card_sets_unique unique (manufacturer, name, season, league_id)
);

create table public.card_variants (
  id uuid primary key default gen_random_uuid(),
  player_id uuid not null references public.players(id) on delete restrict,
  club_id uuid references public.clubs(id) on delete restrict,
  set_id uuid not null references public.card_sets(id) on delete restrict,
  card_number text not null,
  parallel text not null default 'Base',
  rarity text,
  serial_numbering text,
  rookie_flag boolean not null default false,
  autograph_flag boolean not null default false,
  relic_patch_flag boolean not null default false,
  image_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint card_variants_card_number_not_blank check (length(btrim(card_number)) > 0),
  constraint card_variants_parallel_not_blank check (length(btrim(parallel)) > 0),
  constraint card_variants_unique unique (set_id, player_id, club_id, card_number, parallel)
);

create table public.user_cards (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
  card_variant_id uuid not null references public.card_variants(id) on delete restrict,
  condition public.card_condition not null,
  grade_company text,
  grade_value numeric(4, 1),
  quantity integer not null default 1,
  purchase_price numeric(12, 2),
  purchase_currency char(3) not null default 'EUR',
  trade_status public.card_trade_status not null default 'not_for_trade',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint user_cards_quantity_positive check (quantity > 0),
  constraint user_cards_purchase_price_non_negative check (
    purchase_price is null or purchase_price >= 0
  ),
  constraint user_cards_purchase_currency_iso check (purchase_currency ~ '^[A-Z]{3}$'),
  constraint user_cards_grade_value_range check (
    grade_value is null or (grade_value >= 0 and grade_value <= 10)
  )
);

create index clubs_league_id_idx on public.clubs (league_id);
create index card_sets_league_id_idx on public.card_sets (league_id);
create index card_sets_search_idx on public.card_sets (manufacturer, name, season);
create index card_variants_player_id_idx on public.card_variants (player_id);
create index card_variants_club_id_idx on public.card_variants (club_id);
create index card_variants_set_id_idx on public.card_variants (set_id);
create index card_variants_search_idx on public.card_variants (set_id, card_number, parallel);
create index user_cards_user_id_idx on public.user_cards (user_id);
create index user_cards_card_variant_id_idx on public.user_cards (card_variant_id);
create index user_cards_user_trade_status_idx on public.user_cards (user_id, trade_status);

create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function private.set_updated_at();

create trigger leagues_set_updated_at
before update on public.leagues
for each row execute function private.set_updated_at();

create trigger clubs_set_updated_at
before update on public.clubs
for each row execute function private.set_updated_at();

create trigger players_set_updated_at
before update on public.players
for each row execute function private.set_updated_at();

create trigger card_sets_set_updated_at
before update on public.card_sets
for each row execute function private.set_updated_at();

create trigger card_variants_set_updated_at
before update on public.card_variants
for each row execute function private.set_updated_at();

create trigger user_cards_set_updated_at
before update on public.user_cards
for each row execute function private.set_updated_at();

create or replace function private.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1
    from public.profiles
    where user_id = (select auth.uid())
      and role = 'admin'
  );
$$;

revoke all on function private.is_admin() from public;
grant execute on function private.is_admin() to authenticated, service_role;

grant usage on schema public to anon, authenticated, service_role;

revoke all on table
  public.profiles,
  public.leagues,
  public.clubs,
  public.players,
  public.card_sets,
  public.card_variants,
  public.user_cards
from anon, authenticated, service_role;

grant select on table public.profiles to authenticated;
grant insert (
  user_id,
  display_name,
  country,
  favorite_club,
  bio,
  trade_availability
) on public.profiles to authenticated;
grant update (
  display_name,
  country,
  favorite_club,
  bio,
  trade_availability,
  updated_at
) on public.profiles to authenticated;
grant delete on table public.profiles to authenticated;

grant select on table
  public.leagues,
  public.clubs,
  public.players,
  public.card_sets,
  public.card_variants
to authenticated;

grant insert, update, delete on table
  public.leagues,
  public.clubs,
  public.players,
  public.card_sets,
  public.card_variants
to authenticated;

grant select, insert, update, delete on table public.user_cards to authenticated;

grant select, insert, update, delete on all tables in schema public to service_role;

alter table public.profiles enable row level security;
alter table public.leagues enable row level security;
alter table public.clubs enable row level security;
alter table public.players enable row level security;
alter table public.card_sets enable row level security;
alter table public.card_variants enable row level security;
alter table public.user_cards enable row level security;

create policy "Users can read their own profile"
on public.profiles
for select
to authenticated
using (
  (select auth.uid()) is not null
  and ((select auth.uid()) = user_id or (select private.is_admin()))
);

create policy "Users can create their own profile"
on public.profiles
for insert
to authenticated
with check (
  (select auth.uid()) is not null
  and (select auth.uid()) = user_id
  and role = 'user'
);

create policy "Users can update their own profile"
on public.profiles
for update
to authenticated
using (
  (select auth.uid()) is not null
  and (select auth.uid()) = user_id
)
with check (
  (select auth.uid()) is not null
  and (select auth.uid()) = user_id
  and role = 'user'
);

create policy "Users can delete their own profile"
on public.profiles
for delete
to authenticated
using (
  (select auth.uid()) is not null
  and (select auth.uid()) = user_id
);

create policy "Authenticated users can read leagues"
on public.leagues
for select
to authenticated
using (true);

create policy "Admins can insert leagues"
on public.leagues
for insert
to authenticated
with check ((select private.is_admin()));

create policy "Admins can update leagues"
on public.leagues
for update
to authenticated
using ((select private.is_admin()))
with check ((select private.is_admin()));

create policy "Admins can delete leagues"
on public.leagues
for delete
to authenticated
using ((select private.is_admin()));

create policy "Authenticated users can read clubs"
on public.clubs
for select
to authenticated
using (true);

create policy "Admins can insert clubs"
on public.clubs
for insert
to authenticated
with check ((select private.is_admin()));

create policy "Admins can update clubs"
on public.clubs
for update
to authenticated
using ((select private.is_admin()))
with check ((select private.is_admin()));

create policy "Admins can delete clubs"
on public.clubs
for delete
to authenticated
using ((select private.is_admin()));

create policy "Authenticated users can read players"
on public.players
for select
to authenticated
using (true);

create policy "Admins can insert players"
on public.players
for insert
to authenticated
with check ((select private.is_admin()));

create policy "Admins can update players"
on public.players
for update
to authenticated
using ((select private.is_admin()))
with check ((select private.is_admin()));

create policy "Admins can delete players"
on public.players
for delete
to authenticated
using ((select private.is_admin()));

create policy "Authenticated users can read card sets"
on public.card_sets
for select
to authenticated
using (true);

create policy "Admins can insert card sets"
on public.card_sets
for insert
to authenticated
with check ((select private.is_admin()));

create policy "Admins can update card sets"
on public.card_sets
for update
to authenticated
using ((select private.is_admin()))
with check ((select private.is_admin()));

create policy "Admins can delete card sets"
on public.card_sets
for delete
to authenticated
using ((select private.is_admin()));

create policy "Authenticated users can read card variants"
on public.card_variants
for select
to authenticated
using (true);

create policy "Admins can insert card variants"
on public.card_variants
for insert
to authenticated
with check ((select private.is_admin()));

create policy "Admins can update card variants"
on public.card_variants
for update
to authenticated
using ((select private.is_admin()))
with check ((select private.is_admin()));

create policy "Admins can delete card variants"
on public.card_variants
for delete
to authenticated
using ((select private.is_admin()));

create policy "Users can read their own cards"
on public.user_cards
for select
to authenticated
using (
  (select auth.uid()) is not null
  and (select auth.uid()) = user_id
);

create policy "Users can add cards to their own collection"
on public.user_cards
for insert
to authenticated
with check (
  (select auth.uid()) is not null
  and (select auth.uid()) = user_id
);

create policy "Users can update their own cards"
on public.user_cards
for update
to authenticated
using (
  (select auth.uid()) is not null
  and (select auth.uid()) = user_id
)
with check (
  (select auth.uid()) is not null
  and (select auth.uid()) = user_id
);

create policy "Users can delete their own cards"
on public.user_cards
for delete
to authenticated
using (
  (select auth.uid()) is not null
  and (select auth.uid()) = user_id
);
