<template>
  <footer class="bg-[var(--black)] text-white relative pb-4 lg:pb-0">
    <div class="absolute top-0 inset-x-0 h-1 bg-[var(--gold)]"></div>

    <UContainer>
      <div class="py-12 lg:py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div class="md:col-span-5 text-center md:text-left">
          <img
            src="/brand/logo-coquies.webp"
            alt=""
            width="88"
            height="88"
            class="mx-auto md:mx-0 h-[5.5rem] w-[5.5rem] object-contain rounded-2xl bg-white/95 p-1"
          />
          <p class="font-display text-2xl font-extrabold tracking-[-0.02em] text-white mt-4">
            {{ brand.short }}
          </p>
          <p class="mt-1 text-sm font-medium text-white/85">{{ brand.legal }}</p>
          <p class="mt-3 max-w-sm mx-auto md:mx-0 text-white/88 leading-relaxed text-[15px]">
            Sonido, luces, DJ y picó para bodas, quinceañeros, cumpleaños y fiestas en Santa Marta.
          </p>
        </div>

        <div class="md:col-span-3">
          <p class="footer-label">Navegación</p>
          <ul class="space-y-2.5">
            <li v-for="link in quickLinks" :key="link.to">
              <NuxtLink :to="link.to" class="footer-link">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="md:col-span-4">
          <p class="footer-label">Servicios</p>
          <ul class="space-y-2.5 mb-8">
            <li v-for="service in services" :key="service.to">
              <NuxtLink :to="service.to" class="footer-link">
                {{ service.label }}
              </NuxtLink>
            </li>
          </ul>

          <p class="footer-label">Contacto</p>
          <div class="space-y-2 text-[15px]">
            <a
              :href="social.whatsapp"
              class="block font-bold text-white hover:text-[var(--gold)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp · {{ social.whatsappDisplay }}
            </a>
            <a
              href="tel:+573007348547"
              class="block text-white/88 hover:text-white"
            >
              Llamar · +57 {{ social.whatsappDisplay }}
            </a>
            <a
              :href="`mailto:${social.email}`"
              class="block text-white/88 hover:text-white break-all"
            >
              {{ social.email }}
            </a>
          </div>

          <p class="footer-label mt-8">Redes</p>
          <div class="pt-1">
            <SocialLinks variant="footer" />
          </div>
        </div>
      </div>

      <div class="border-t border-white/15 py-6 text-sm text-white/88 text-center md:text-left">
        <p>© {{ currentYear }} {{ brand.legal }}. Santa Marta, Magdalena.</p>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
import { social } from '@/data/social'
import { brand } from '@/data/brand'
import SocialLinks from '@/components/SocialLinks.vue'

const currentYear = new Date().getFullYear()

const quickLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Paquetes', to: '/paquetes' },
  { label: 'Galería', to: '/galeria' },
  { label: 'Contacto', to: '/contacto' },
]

const services = [
  { label: 'Alquiler de equipos', to: '/servicios/alquiler-equipos' },
  { label: 'Turbo (picó)', to: '/servicios/turbo-pico' },
  { label: 'Iluminación', to: '/servicios/iluminacion' },
  { label: 'DJ', to: '/servicios/dj' },
]
</script>

<style scoped>
.font-display {
  font-family: "Bricolage Grotesque", sans-serif;
}

.footer-label {
  margin-bottom: 0.75rem;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--festive);
}

.footer-link {
  font-size: 15px;
  font-weight: 500;
  color: rgb(255 255 255 / 88%);
  text-decoration: none;
}

.footer-link:hover {
  color: #ffffff;
}
</style>
