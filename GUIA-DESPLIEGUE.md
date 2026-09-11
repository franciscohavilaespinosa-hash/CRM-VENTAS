# CRM de Ventas — Guía para publicarlo en Vercel

Tu equipo entrará por un link, iniciará sesión y trabajará sobre **los mismos
clientes** en tiempo real. Todo con planes **gratuitos** (Supabase + Vercel).

Tiempo estimado: **15–20 minutos**. No necesitas saber programar.

Los archivos de esta carpeta:

| Archivo | Qué es |
|---|---|
| `index.html` | La aplicación (no la edites) |
| `config.js` | Aquí pegas 2 datos de tu base (**sí la editas**) |
| `schema.sql` | El código que crea la tabla en la base |
| `GUIA-DESPLIEGUE.md` | Esta guía |

---

## Paso 1 · Crear la base de datos (Supabase)

1. Entra a **https://supabase.com** → *Start your project* → inicia sesión (con GitHub o correo).
2. Botón **New project**.
   - **Name:** `crm-ventas`
   - **Database Password:** inventa una y **guárdala** (no la usarás en la app, pero Supabase la pide).
   - **Region:** elige la más cercana (ej. *East US* o *West US*).
   - **Create new project** y espera ~2 minutos a que quede lista.

## Paso 2 · Copiar tus 2 llaves

1. En tu proyecto de Supabase, botón **Connect** (arriba) o **Project Settings → API Keys**.
2. Copia estos dos valores (usa el icono de copiar, no los leas de pantalla):
   - **Project URL** → algo como `https://abcd1234.supabase.co`
   - **Publishable key** → empieza con `sb_publishable_...`
     *(Es la llave pública. NO uses la **Secret key** `sb_secret_...`: esa es privada.)*
3. Abre `config.js` (con el Bloc de notas sirve) y pégalos:

```js
window.CRM_CONFIG = {
  url: "https://abcd1234.supabase.co",        // ← tu Project URL
  anonKey: "sb_publishable_XXXXXXXX...",      // ← tu Publishable key
  marca: "CRM de Ventas"
};
```

> La Publishable key es pública **a propósito** y es seguro que vaya en la web:
> la tabla está protegida y **nadie sin sesión iniciada ve ni un dato**.

## Paso 3 · Crear la tabla

1. En Supabase, menú izquierdo: **SQL Editor** → **New query**.
2. Abre `schema.sql`, copia **todo** su contenido, pégalo y presiona **Run**.
3. Debe decir *Success*. Ya existe la tabla `clients`.

## Paso 4 · Crear los usuarios de tu equipo

Así solo entra quien tú autorices (no hay registro abierto).

1. Supabase → **Authentication** → **Users** → **Add user** → *Create new user*.
2. Escribe **correo** y **contraseña** de cada persona (incluido tú).
   - Marca **Auto Confirm User** (o deja *Email Confirm* desactivado) para que puedan entrar de inmediato.
3. Repite por cada integrante. Esos serán los datos con los que inicien sesión en el CRM.

> ¿Prefieres que se registren solos? En **Authentication → Providers → Email**
> activa *Enable Signups*. Para un CRM interno, es más seguro crearlos tú.

## Paso 5 · Publicar en Vercel

**Opción A — Arrastrar y soltar (la más fácil, sin instalar nada):**

1. Entra a **https://vercel.com** e inicia sesión.
2. En el dashboard: **Add New… → Project → Deploy** (busca la opción de subir/*deploy* una carpeta).
   - Si no aparece la de arrastrar, usa la Opción B.
3. Arrastra la carpeta **`crm-ventas` completa** (con `index.html` y `config.js` ya editado).
4. Deploy. En ~1 minuto te da un link tipo `https://crm-ventas-xxxx.vercel.app`.

**Opción B — Con Vercel CLI (si la A no aparece):**

1. Instala Node.js (https://nodejs.org) si no lo tienes.
2. Abre una terminal en esta carpeta y ejecuta:

```bash
npm i -g vercel
vercel
```

3. Acepta las preguntas por defecto. Al terminar te da el link público.

## Paso 6 · Probar y compartir

1. Abre el link de Vercel. Debe pedir **iniciar sesión**.
2. Entra con uno de los usuarios del Paso 4.
3. Agrega un cliente. Ábrelo desde **otro dispositivo/usuario**: debe aparecer solo (tiempo real).
4. Comparte el link con tu equipo. ✅

---

## Cómo actualizar la app después

- **Cambiar datos de conexión o la marca:** edita `config.js` y vuelve a desplegar.
- **Nueva versión de `index.html`:** reemplaza el archivo y despliega otra vez (mismo proyecto en Vercel = mismo link).

## Preguntas frecuentes

**¿Es seguro?** Sí. La tabla tiene *Row Level Security*: sin sesión válida no se
lee ni escribe nada. La `anon key` no da acceso a los datos por sí sola.

**¿Cuánto cuesta?** $0 para empezar. Supabase free: 500 MB de base y hasta 50,000
usuarios activos/mes. Vercel free: de sobra para esto.

**¿Puedo poner mi propio dominio?** Sí, en Vercel → Project → *Domains* agregas
`crm.tudominio.com`.

**¿Y si quiero que cada agente vea solo SUS clientes?** Se puede: se agrega una
columna de "dueño" y se ajusta la política de seguridad. Pídemelo y lo hacemos.

**¿Respaldo?** El botón **Exportar** baja un CSV con todos los clientes cuando quieras.
