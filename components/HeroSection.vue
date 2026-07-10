<template>
  <section class="relative min-h-[700px] lg:min-h-screen flex items-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
        :src="heroImage"
        alt="Evento profesional"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-900/75 to-blue-900/80"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
    </div>

    <!-- Content -->
    <UContainer class="relative z-10">
      <div class="max-w-4xl mx-auto text-center py-20 lg:py-24">
        <!-- Badge -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
          class="mb-6 inline-flex"
        >
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 backdrop-blur-md shadow-lg">
            <Icon name="i-heroicons-star" class="w-4 h-4 text-yellow-300" />
            <span class="text-sm font-semibold text-white">Más de 10 años de experiencia</span>
          </div>
        </div>

        <!-- Heading -->
        <h1
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          style="font-family: 'Righteous', sans-serif; line-height: 1.2;"
        >
          Haz de tu Evento una
          <span class="text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Experiencia Inolvidable</span>
        </h1>

        <!-- Description -->
        <p
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600 } }"
          class="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Alquiler de equipos de sonido profesional, iluminación LED, Turbo (Picó) y servicios de DJ para todo tipo de eventos.
        </p>

        <!-- CTA Buttons -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 800 } }"
          class="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <UButton
            to="/contacto"
            size="xl"
            color="white"
            class="cursor-pointer bg-white/20 backdrop-blur-md border-2 border-white/60 text-white hover:bg-white/30 hover:border-white transition-all duration-300 font-semibold text-base px-8"
          >
            <Icon name="i-heroicons-chat-bubble-left-right" class="w-5 h-5 mr-2" />
            Solicitar Cotización
          </UButton>
          <UButton
            to="/servicios"
            size="xl"
            color="white"
            class="cursor-pointer bg-white/20 backdrop-blur-md border-2 border-white/60 text-white hover:bg-white/30 hover:border-white transition-all duration-300 font-semibold text-base px-8"
          >
            <Icon name="i-heroicons-sparkles" class="w-5 h-5 mr-2" />
            Ver Servicios
          </UButton>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
          <StatItem
            v-for="stat in stats"
            :key="stat.label"
            :target="stat.value"
            :suffix="stat.suffix"
            :label="stat.label"
          />
        </div>
      </div>
    </UContainer>

    <!-- Scroll Indicator -->
    <div
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { duration: 600, delay: 1400 } }"
      class="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div class="animate-bounce-slow">
        <Icon name="i-heroicons-chevron-down" class="w-8 h-8 text-white/70" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const heroImage = 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&h=1080&fit=crop&q=80'

const stats = [
  { value: 500, suffix: '+', label: 'Eventos Realizados' },
  { value: 10, suffix: '+', label: 'Años de Experiencia' },
  { value: 100, suffix: '%', label: 'Clientes Satisfechos' },
  { value: 24, suffix: '/7', label: 'Soporte Disponible' }
]
</script>
