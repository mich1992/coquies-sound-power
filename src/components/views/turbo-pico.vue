<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <UBadge color="blue" variant="subtle" size="lg" class="mb-4">
              <Icon name="i-heroicons-truck" class="w-4 h-4 mr-2" />
              Servicio Espectacular
            </UBadge>
            <h1 class="text-4xl md:text-5xl font-bold mb-6" style="font-family: 'Righteous', sans-serif;">
              Turbo (Pickup o Picó)
            </h1>
            <p class="text-xl text-slate-200 mb-8">
              El sistema de sonido móvil más potente y espectacular. Perfecto para fiestas al aire libre y eventos masivos.
            </p>
            <UButton 
              to="/contacto" 
              size="xl" 
              color="blue"
              class="cursor-pointer"
            >
              Solicitar Cotización
            </UButton>
          </div>
          <div class="rounded-2xl overflow-hidden shadow-2xl bg-[var(--navy)] p-3 sm:p-4">
            <img
              :src="turboPhoto"
              alt="Turbo Coquies Saw Power con luces en evento nocturno"
              class="w-full max-h-[28rem] object-contain mx-auto rounded-lg"
              width="1200"
              height="1385"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Content -->
    <section class="py-20 bg-white">
      <UContainer>
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-slate-900 mb-8" style="font-family: 'Righteous', sans-serif;">
            ¿Qué es el Turbo o Picó?
          </h2>
          
          <p class="text-lg text-slate-700 mb-8">
            El Turbo, también conocido como Picó o Pickup, es un sistema de sonido móvil de ultra alta potencia montado en un vehículo. 
            Combina potentes parlantes, iluminación LED sincronizada, pantallas visuales y efectos especiales para crear una experiencia 
            audiovisual completa e impactante.
          </p>

          <h2 class="text-3xl font-bold text-slate-900 mb-6" style="font-family: 'Righteous', sans-serif;">
            Características del Servicio
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <UCard v-for="feature in features" :key="feature.title">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon :name="feature.icon" class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 class="font-bold text-slate-900 mb-2">{{ feature.title }}</h3>
                  <p class="text-slate-600 text-sm">{{ feature.description }}</p>
                </div>
              </div>
            </UCard>
          </div>

          <div class="bg-blue-50 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-slate-900 mb-4">Incluye:</h3>
            <ul class="space-y-3">
              <li v-for="item in includes" :key="item" class="flex items-start gap-3">
                <Icon name="i-heroicons-check-circle-solid" class="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span class="text-slate-700">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-blue-600 text-white">
      <UContainer>
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6" style="font-family: 'Righteous', sans-serif;">
            Haz de tu Fiesta un Evento Inolvidable
          </h2>
          <p class="text-xl mb-8">
            Contrata nuestro servicio de Turbo y sorprende a todos tus invitados.
          </p>
          <UButton 
            to="/contacto" 
            size="xl" 
            color="white"
            class="cursor-pointer"
          >
            Solicitar Cotización
          </UButton>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
import { turboPhoto } from '@/data/media'

const features = [
  {
    title: 'Sonido de Ultra Potencia',
    description: 'Sistemas de 10,000W+ para cubrir grandes espacios',
    icon: 'i-heroicons-speaker-wave'
  },
  {
    title: 'Iluminación LED',
    description: 'Luces RGB sincronizadas con la música',
    icon: 'i-heroicons-light-bulb'
  },
  {
    title: 'Pantallas LED',
    description: 'Visuales y videos para mayor impacto',
    icon: 'i-heroicons-tv'
  },
  {
    title: 'Operador Profesional',
    description: 'DJ/operador incluido en el servicio',
    icon: 'i-heroicons-user'
  }
]

const includes = [
  'Turbo completo con sonido de alta potencia (10,000W+)',
  'Sistema de iluminación LED sincronizado',
  'Pantallas LED para visuales y videos',
  'DJ/Operador profesional',
  'Generador eléctrico (si es necesario)',
  'Transporte e instalación',
  'Música de todos los géneros',
  'Efectos especiales (humo, láser)',
  'Animación y conducción'
]
</script>
