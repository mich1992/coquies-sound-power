# Producciones Coquies Sound Power

Sitio web con **Astro 5** e **islas Vue** para servicios de sonido, iluminación y DJ profesional. Despliegue pensado para **Vercel**.

## Características

- Diseño responsive (Tailwind CSS v4)
- Componentes Vue reutilizados del proyecto Nuxt original
- Capa UI compatible (`UButton`, `UCard`, etc.) con Tailwind
- Cotizaciones por email vía **Resend** (`POST /api/contact`)
- Galería con filtros y lightbox
- SEO por página en layouts Astro

## Tecnologías

- **Framework**: Astro 5 + `@astrojs/vue`
- **Estilos**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animaciones**: `@vueuse/motion` en islas
- **Iconos**: `@iconify/vue` (Heroicons, Simple Icons)
- **Emails**: Resend
- **Hosting**: `@astrojs/vercel`

## Instalación

```bash
pnpm install
cp .env.example .env
# Edita RESEND_API_KEY y CONTACT_EMAIL
pnpm dev
```

La app corre en http://localhost:3000

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `RESEND_API_KEY` | API key de Resend |
| `CONTACT_EMAIL` | Email que recibe cotizaciones |

En Vercel, configura las mismas variables en **Project Settings → Environment Variables**.

## Estructura

```
astro.config.mjs
src/
├── layouts/Layout.astro      # Shell global + SEO
├── pages/                    # Rutas Astro + api/contact.ts
├── components/
│   ├── ui/                   # Wrappers Tailwind (sustituto Nuxt UI)
│   ├── views/                # Vistas migradas desde pages/*.vue
│   └── …                     # Componentes compartidos
├── styles/main.css
├── types/index.ts
└── vue-app.ts                # Registro global de componentes UI
```

## Comandos

```bash
pnpm dev      # Desarrollo (puerto 3000)
pnpm build    # Build producción (adapter Vercel)
pnpm preview  # Preview local del build
```

## Despliegue en Vercel

1. Conecta el repositorio en Vercel (framework: Astro).
2. Build command: `pnpm build`
3. Añade `RESEND_API_KEY` y `CONTACT_EMAIL`.
4. El endpoint `src/pages/api/contact.ts` se despliega como función serverless.

## Personalización

- **Contenido**: arrays en `src/components/views/*.vue`
- **Estilos**: `src/styles/main.css` y tokens `@theme`
- **Email remitente**: campo `from` en `src/pages/api/contact.ts` tras verificar dominio en Resend

## Licencia

Proyecto de Producciones Coquies Sound Power.
