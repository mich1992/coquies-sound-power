# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Familias y parejas de Santa Marta (Magdalena) y alrededores que están organizando una celebración: bodas, quinceañeros, cumpleaños y fiestas nocturnas. Llegan casi siempre desde el celular (Instagram, TikTok, WhatsApp, Google) buscando quién les pone el sonido, las luces, el DJ o el picó, y quieren saber rápido qué incluye, si les alcanza y cómo cotizar.

## Product Purpose

Producciones Coquíes (Coquies Saw Power) alquila sonido profesional, iluminación, DJ y picó (turbo) para eventos sociales. El sitio existe para que el visitante entienda qué servicio le sirve para su tipo de evento y abra una conversación de cotización (WhatsApp o formulario). Éxito = cotizaciones por WhatsApp.

## Positioning

Empresa local de Santa Marta que une dos mundos: la producción cuidada que pide una boda o un quinceañero, y la potencia del picó costeño para la fiesta grande y nocturna. Un mismo proveedor para el vals y para el bailoteo de madrugada.

## Operating Context

- Contacto principal: WhatsApp +57 300 734 8547 (`https://wa.me/573007348547`).
- Formulario de cotización que envía email vía Resend (`POST /api/contact`).
- Eventos prioritarios, en orden: bodas, quinceañeros, picó/turbo, cumpleaños, fiestas nocturnas. Alquiler de equipos suelto es secundario.
- Rutas existentes: inicio, servicios (alquiler de equipos, turbo-picó, iluminación, DJ), paquetes, nosotros, galería, contacto.

## Capabilities and Constraints

- Stack: Astro 7 + islas Vue 3, Tailwind CSS v4, `@vueuse/motion`, `@iconify/vue`, despliegue en Vercel.
- Contenido editable en los arrays de `src/components/views/*.vue`.
- Español de Colombia, tuteo.

## Brand Commitments

- Nombre legal: "Producciones Coquíes". Nombre comercial / logo: "Coquies Saw Power".
- Paleta: polar 60% · glaciar 30% · amarillo sol 10% (complementario al azul; accesible).
- Correo empresa (cotizaciones): producionescoquies@gmail.com (`CONTACT_EMAIL`).
- Propietario: Deudibet Emilio Coquies Galindo (DJ principal). 300 734 8547 · deudibet1@gmail.com (personal).
- DJ: Jhoan David Granadoz — 302 850 1774.
- Logo en `public/images/logo.JPEG`.

## Evidence on Hand

- Testimonios y cifras actuales (500+ eventos, 10+ años) confirmados como reales por el cliente.
- Fotos y videos propios de eventos: el cliente los entregará después (directorio pendiente). Mientras tanto se usan fotos de stand-in, listadas para reemplazo.
- No inventar precios, clientes ni cifras nuevas.

## Product Principles

1. WhatsApp a un toque desde cualquier pantalla: es el canal real de venta.
2. Hablar por tipo de evento (boda, quince, cumple, noche, picó) antes que por catálogo de equipos.
3. Mostrar el evento funcionando (pista llena, luces, montaje), no el equipo en abstracto.
4. Móvil primero: la mayoría llega desde redes sociales en el teléfono.
