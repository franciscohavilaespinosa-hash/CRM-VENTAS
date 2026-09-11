-- ============================================================
--  CRM de Ventas — Esquema de base de datos (Supabase / Postgres)
--  Cómo usarlo: Supabase → SQL Editor → New query → pega TODO
--  esto → botón "Run". (Ver GUIA-DESPLIEGUE.md, paso 3)
-- ============================================================

-- Tabla única: cada cliente se guarda como un documento JSON.
create table if not exists public.clients (
  id          text primary key,
  data        jsonb       not null,
  updated_at  timestamptz not null default now()
);

-- Seguridad a nivel de fila: nadie entra sin sesión iniciada.
alter table public.clients enable row level security;

-- Política de EQUIPO: cualquier usuario con sesión (tu equipo)
-- puede ver y editar todos los clientes. Los visitantes sin
-- login no ven absolutamente nada.
drop policy if exists "equipo_todo" on public.clients;
create policy "equipo_todo"
  on public.clients
  for all
  to authenticated
  using (true)
  with check (true);

-- Habilita actualizaciones en tiempo real (que un compañero vea
-- lo que otro captura, sin recargar).
alter publication supabase_realtime add table public.clients;
