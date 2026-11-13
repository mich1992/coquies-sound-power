<template>
  <section class="relative min-h-[700px] lg:min-h-screen flex items-center overflow-hidden">
    <div class="absolute inset-0">
      <img
        :src="heroImage"
        alt="Montaje de sonido, luces y cabina DJ de Coquies Saw Power"
        class="w-full h-full object-cover"
        width="800"
        height="800"
        fetchpriority="high"
        decoding="async"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/92 via-[var(--glacier-deep)]/55 to-[var(--glacier)]/25"
      ></div>
    </div>

    <UContainer class="relative z-10">
      <div class="max-w-4xl mx-auto text-center py-20 lg:py-24">
        <div class="mb-6 inline-flex hero-reveal hero-reveal-d1">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 backdrop-blur-md shadow-lg">
            <Icon name="i-heroicons-star" class="w-4 h-4 text-[var(--gold)]" />
            <span class="text-sm font-semibold text-white">Más de 10 años de experiencia</span>
          </div>
        </div>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] hero-reveal hero-reveal-d2">
          Sonido, luces y picó en Santa Marta para tu
          <span class="text-[var(--gold)]">noche inolvidable</span>
        </h1>

        <p class="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed hero-reveal hero-reveal-d3">
          Bodas, quinceañeros, cumpleaños y fiestas con el equipo y la energía que ya conocen en la ciudad.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center hero-reveal hero-reveal-d4">
          <UButton
            to="/contacto"
            size="xl"
            color="blue"
            class="cursor-pointer px-8"
          >
            <Icon name="i-heroicons-chat-bubble-left-right" class="w-5 h-5 mr-2" />
            Solicitar Cotización
          </UButton>
          <UButton
            to="/servicios"
            size="xl"
            color="white"
            variant="outline"
            class="cursor-pointer px-8 hero-cta-secondary"
          >
            <Icon name="i-heroicons-sparkles" class="w-5 h-5 mr-2" />
            Ver Servicios
          </UButton>
        </div>

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

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hero-reveal hero-reveal-d5">
      <div class="animate-bounce-slow">
        <Icon name="i-heroicons-chevron-down" class="w-8 h-8 text-white/70" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import StatItem from '@/components/StatItem.vue'
import { heroPhoto } from '@/data/media'

const heroImage = heroPhoto

const stats = [
  { value: 500, suffix: '+', label: 'Eventos Realizados' },
  { value: 10, suffix: '+', label: 'Años de Experiencia' },
  { value: 100, suffix: '%', label: 'Clientes Satisfechos' },
  { value: 24, suffix: '/7', label: 'Soporte Disponible' }
]
</script>

<style scoped>
.hero-reveal {
  opacity: 0;
  transform: translateY(1.25rem);
  animation: hero-in 0.65s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.hero-reveal-d1 {
  animation-delay: 0.12s;
}
.hero-reveal-d2 {
  animation-delay: 0.22s;
}
.hero-reveal-d3 {
  animation-delay: 0.32s;
}
.hero-reveal-d4 {
  animation-delay: 0.42s;
}
.hero-reveal-d5 {
  animation-delay: 0.72s;
}

@keyframes hero-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-cta-secondary {
  border-width: 2px;
  box-shadow: 0 8px 24px rgb(0 0 0 / 35%);
}

@media (prefers-reduced-motion: reduce) {
  .hero-reveal {
    opacity: 1;
    transform: none;
    animation: none;
  }
}
</style>
