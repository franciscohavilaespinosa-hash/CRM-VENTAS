/* ============================================================
   CONFIGURACIÓN — edita SOLO este archivo
   ------------------------------------------------------------
   Pega aquí los dos datos de tu proyecto de Supabase.
   Los encuentras en:  Supabase → Project Settings → API
   (Ver la guía GUIA-DESPLIEGUE.md, paso 2)
   ============================================================ */
window.CRM_CONFIG = {
  // 1) Project URL  (ej. https://abcd1234.supabase.co)
  url: "https://vhyixkrxxkmmcjqigrjx.supabase.co",

  // 2) Publishable key  (empieza con  sb_publishable_...)
  //    Es la llave PÚBLICA, segura para la web.
  //    NO uses la "Secret key" (sb_secret_...): esa es privada.
  anonKey: "sb_publishable_qkcFmuy3pP9vQffaOrlYkw_wKyzgw09",

  // Nombre que se muestra arriba en la app (opcional)
  marca: "EMPOWERING SALES",

  // Agentes del equipo. El "email" DEBE ser el mismo con el que entran a la app
  // (el usuario que creaste en Supabase → Authentication → Users).
  // Agrega una línea por cada agente:
  agentes: [
    { email: "francisco.h.avila.espinosa@gmail.com", nombre: "Francisco" }
    // , { email: "agente2@correo.com", nombre: "María" }
    // , { email: "agente3@correo.com", nombre: "Luis" }
  ]
};
