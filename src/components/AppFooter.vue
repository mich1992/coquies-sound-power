<template>
  <footer class="bg-[var(--black)] text-white relative">
    <div class="absolute top-0 inset-x-0 h-1 bg-[var(--gold)]"></div>

    <UContainer>
      <div class="py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div class="md:col-span-5">
          <p class="font-display text-2xl font-extrabold tracking-[-0.02em] text-[var(--gold)]">Coquies Sound Power</p>
          <p class="mt-4 max-w-sm text-white/75 leading-relaxed">
            Sonido, luces, DJ y picó para bodas, quinceañeros, cumpleaños y fiestas en Santa Marta.
          </p>
        </div>

        <div class="md:col-span-3">
          <p class="font-semibold mb-4">Páginas</p>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.to">
              <NuxtLink :to="link.to" class="text-white/70 hover:text-[var(--gold)] text-sm">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="md:col-span-4">
          <p class="font-semibold mb-4">Servicios</p>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service.to">
              <NuxtLink :to="service.to" class="text-white/70 hover:text-[var(--gold)] text-sm">
                {{ service.label }}
              </NuxtLink>
            </li>
          </ul>
          <div class="mt-6 space-y-2">
            <a
              :href="social.whatsapp"
              class="block text-[var(--gold)] font-bold text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ social.whatsappDisplay }}
            </a>
            <a
              :href="`mailto:${social.email}`"
              class="block text-white/70 text-sm hover:text-[var(--gold)]"
            >
              {{ social.email }}
            </a>
            <div class="pt-2">
              <SocialLinks variant="footer" />
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-white/10 py-6 text-sm text-white/55">
        <p>© {{ currentYear }} Producciones Coquies Sound Power. Santa Marta, Magdalena.</p>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
import { social } from '@/data/social'
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
</style>
