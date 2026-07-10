# Producciones Coquies Sound Power

Aplicación web desarrollada con Nuxt 3 para servicios de sonido, iluminación y DJ profesional.

## 🚀 Características

- ✅ Diseño moderno y responsive
- ✅ Nuxt UI para componentes
- ✅ Tipografías personalizadas (Righteous + Poppins)
- ✅ Sistema de cotizaciones por email (Resend)
- ✅ Galería de eventos con lightbox
- ✅ FAQ interactivo
- ✅ SEO optimizado
- ✅ Páginas de servicios detalladas
- ✅ Sistema de paquetes y precios

## 📦 Tecnologías

- **Framework**: Nuxt 3
- **UI**: Nuxt UI (Tailwind CSS)
- **Tipografías**: Google Fonts (Righteous, Poppins)
- **Emails**: Resend
- **Imágenes**: @nuxt/image

## 🛠️ Instalación

1. Clona el repositorio:
```bash
cd /Users/michaelcermeno/projects/coquies-sound-power
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:

Crea un archivo `.env` en la raíz del proyecto:

```bash
cp .env.example .env
```

Edita `.env` y agrega tus credenciales:

```env
RESEND_API_KEY=tu_api_key_aquí
CONTACT_EMAIL=tu_email@dominio.com
```

Para obtener una API key de Resend:
1. Regístrate en https://resend.com
2. Ve a "API Keys" en el dashboard
3. Crea una nueva API key
4. Cópiala al archivo .env

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en http://localhost:3000

## 📂 Estructura del Proyecto

```
├── app.vue                 # Componente raíz
├── nuxt.config.ts         # Configuración de Nuxt
├── components/            # Componentes Vue reutilizables
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   ├── HeroSection.vue
│   ├── ServiceCard.vue
│   ├── TestimonialCard.vue
│   ├── TeamMemberCard.vue
│   ├── PricingCard.vue
│   ├── FaqAccordion.vue
│   └── ContactForm.vue
├── pages/                 # Páginas de la aplicación
│   ├── index.vue         # Página principal
│   ├── servicios/        # Páginas de servicios
│   ├── paquetes.vue      # Precios y paquetes
│   ├── nosotros.vue      # Sobre nosotros
│   ├── galeria.vue       # Galería de fotos
│   └── contacto.vue      # Formulario de contacto
├── layouts/
│   └── default.vue       # Layout principal
├── server/
│   └── api/
│       └── contact.post.ts  # Endpoint para envío de emails
└── types/
    └── index.ts          # Tipos TypeScript
```

## 🎨 Páginas

- **/** - Landing page con hero, servicios y testimonios
- **/servicios** - Lista completa de servicios
- **/servicios/alquiler-equipos** - Detalle de alquiler de equipos
- **/servicios/turbo-pico** - Detalle de Turbo/Picó
- **/servicios/iluminacion** - Detalle de iluminación
- **/servicios/dj** - Detalle de servicios de DJ
- **/paquetes** - Paquetes y precios con tabla comparativa
- **/nosotros** - Sobre la empresa y equipo
- **/galeria** - Galería de eventos con filtros
- **/contacto** - Formulario de cotización y FAQ

## 🔧 Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Producción
npm run build
npm run preview

# Generar sitio estático
npm run generate
```

## 📧 Configuración de Emails

El sistema usa Resend para enviar emails. Para configurar:

1. Crea una cuenta en https://resend.com
2. Obtén tu API key
3. Configúrala en el archivo `.env`
4. (Opcional) Verifica tu dominio para enviar desde tu propio email

**Nota**: Por defecto, Resend permite enviar desde `onboarding@resend.dev`. Para usar tu propio dominio:
1. Ve a "Domains" en el dashboard de Resend
2. Agrega tu dominio
3. Configura los registros DNS requeridos
4. Actualiza el campo `from` en `/server/api/contact.post.ts`

## 🖼️ Personalización

### Cambiar Imágenes

Las imágenes actuales son placeholders de Unsplash. Para usar tus propias imágenes:

1. Coloca tus imágenes en `/public/images/`
2. Actualiza las rutas en los archivos correspondientes:
   - `pages/index.vue` (servicios y testimonios)
   - `pages/servicios/*.vue` (páginas de servicios)
   - `pages/galeria.vue` (galería de eventos)
   - `pages/nosotros.vue` (equipo)

### Cambiar Colores

Los colores se configuran en `nuxt.config.ts`. Nuxt UI usa Tailwind CSS:

```ts
ui: {
  theme: {
    colors: ['blue', 'slate'] // Cambia según tus colores de marca
  }
}
```

### Cambiar Contenido

El contenido está en los archivos `.vue` de cada página. Busca las variables `services`, `testimonials`, `team`, etc. y actualiza con tu información real.

## 🚀 Despliegue

### Vercel (Recomendado)

1. Instala Vercel CLI: `npm i -g vercel`
2. Ejecuta: `vercel`
3. Configura las variables de entorno en el dashboard de Vercel

### Netlify

1. Conecta tu repositorio en Netlify
2. Configura las variables de entorno
3. Build command: `npm run build`
4. Publish directory: `.output/public`

### Otros Proveedores

Nuxt 3 es compatible con cualquier proveedor que soporte Node.js o generación estática.

## 📱 Responsive

La aplicación está optimizada para:
- 📱 Móviles (375px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

## 🔒 Seguridad

- No incluyas el archivo `.env` en el control de versiones
- Usa variables de entorno para información sensible
- Valida todos los inputs del formulario
- Mantén las dependencias actualizadas

## 📄 Licencia

Este proyecto fue creado para Producciones Coquies Sound Power.

## 🙋 Soporte

Para preguntas o problemas, contacta al equipo de desarrollo.

---

Desarrollado con ❤️ usando Nuxt 3
