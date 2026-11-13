<template>
  <ScrollReveal>
    <UCard
      :ui="{
        body: { padding: 'p-6' },
        header: { padding: 'p-0' }
      }"
      class="card-hover h-full overflow-hidden border-0 shadow-lg shadow-slate-200/50 ring-1 ring-slate-200/60"
    >
      <!-- Image -->
      <template #header>
        <div class="relative h-48 overflow-hidden">
          <div class="img-zoom w-full h-full">
            <img
              :src="service.image"
              :alt="service.title"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div class="absolute bottom-4 left-4">
            <div class="w-12 h-12 bg-[var(--gold)] rounded-xl flex items-center justify-center">
              <Icon :name="service.icon" class="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </template>

      <!-- Content -->
      <div class="space-y-4">
        <h3 class="text-xl font-bold text-slate-900" style="font-family: 'Righteous', sans-serif;">
          {{ service.title }}
        </h3>

        <p class="text-slate-600 text-sm leading-relaxed">
          {{ service.description }}
        </p>

        <ul class="space-y-2">
          <li
            v-for="(feature, index) in service.features.slice(0, 3)"
            :key="index"
            class="flex items-start gap-2 text-sm text-slate-600"
          >
            <Icon name="i-heroicons-check-circle-solid" class="w-5 h-5 text-[var(--gold-deep)] flex-shrink-0 mt-0.5" />
            <span>{{ feature }}</span>
          </li>
        </ul>

        <UButton
          :to="`/servicios/${service.slug}`"
          color="blue"
          variant="ghost"
          block
          class="mt-4 cursor-pointer group"
        >
          <span>Ver Detalles</span>
          <Icon name="i-heroicons-arrow-right" class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </UButton>
      </div>
    </UCard>
  </ScrollReveal>
</template>

<script setup lang="ts">
import type { Service } from '@/types'
import ScrollReveal from '@/components/ScrollReveal.vue'

defineProps<{
  service: Service
}>()
</script>

<style scoped>
.card-hover {
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
}
.card-hover:hover {
  transform: scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  --tw-ring-color: rgba(255, 198, 26, 0.35);
}

.img-zoom {
  transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
}
.card-hover:hover .img-zoom {
  transform: scale(1.08);
}
</style>
