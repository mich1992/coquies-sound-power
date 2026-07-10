<template>
  <footer class="bg-slate-900 text-white mt-20 relative overflow-hidden">
    <!-- Decorative Gradient Line -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

    <UContainer>
      <div class="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Icon name="i-heroicons-speaker-wave" class="w-6 h-6 text-white" />
            </div>
            <h3 class="text-lg font-bold" style="font-family: 'Righteous', sans-serif;">
              Coquies Sound Power
            </h3>
          </div>
          <p class="text-slate-400 text-sm leading-relaxed">
            Servicios profesionales de sonido, iluminación y DJ para hacer de tu evento una experiencia inolvidable.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold mb-4 text-white">Enlaces Rápidos</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="text-slate-400 hover:text-blue-400 transition-colors text-sm cursor-pointer inline-flex items-center gap-2 group"
              >
                <span class="w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-3"></span>
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-semibold mb-4 text-white">Servicios</h4>
          <ul class="space-y-2">
            <li v-for="service in services" :key="service.to">
              <NuxtLink
                :to="service.to"
                class="text-slate-400 hover:text-blue-400 transition-colors text-sm cursor-pointer inline-flex items-center gap-2 group"
              >
                <span class="w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-3"></span>
                {{ service.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact & Social -->
        <div>
          <h4 class="font-semibold mb-4 text-white">Contacto</h4>
          <ul class="space-y-3 mb-6">
            <li class="flex items-center gap-2 text-slate-400 text-sm">
              <Icon name="i-heroicons-phone" class="w-4 h-4 text-blue-400" />
              <a href="tel:+573001234567" class="hover:text-blue-400 transition-colors">
                +57 300 123 4567
              </a>
            </li>
            <li class="flex items-center gap-2 text-slate-400 text-sm">
              <Icon name="i-heroicons-envelope" class="w-4 h-4 text-blue-400" />
              <a href="mailto:info@coquiessound.com" class="hover:text-blue-400 transition-colors">
                info@coquiessound.com
              </a>
            </li>
          </ul>

          <h4 class="font-semibold mb-3 text-white">Síguenos</h4>
          <div class="flex gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Icon :name="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-slate-800 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-slate-400 text-sm">
          © {{ currentYear }} Producciones Coquies Sound Power. Todos los derechos reservados.
        </p>
        <div class="flex gap-6">
          <a href="#" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">
            Términos y Condiciones
          </a>
          <a href="#" class="text-slate-400 hover:text-blue-400 text-sm transition-colors">
            Política de Privacidad
          </a>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const quickLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Paquetes', to: '/paquetes' },
  { label: 'Galería', to: '/galeria' },
  { label: 'Contacto', to: '/contacto' }
]

const services = [
  { label: 'Alquiler de Equipos', to: '/servicios/alquiler-equipos' },
  { label: 'Turbo (Picó)', to: '/servicios/turbo-pico' },
  { label: 'Iluminación', to: '/servicios/iluminacion' },
  { label: 'Servicios de DJ', to: '/servicios/dj' }
]

const socialLinks = [
  { name: 'Facebook', icon: 'i-simple-icons-facebook', url: 'https://facebook.com' },
  { name: 'Instagram', icon: 'i-simple-icons-instagram', url: 'https://instagram.com' },
  { name: 'WhatsApp', icon: 'i-simple-icons-whatsapp', url: 'https://wa.me/573001234567' },
  { name: 'TikTok', icon: 'i-simple-icons-tiktok', url: 'https://tiktok.com' }
]
</script>
