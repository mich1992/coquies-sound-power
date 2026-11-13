<template>
  <ScrollReveal>
    <UCard
      :ui="{ body: { padding: 'p-6' } }"
      class="testimonial-card h-full border-0 shadow-lg shadow-slate-200/50 ring-1 ring-slate-200/60"
    >
      <div class="flex flex-col h-full relative">
        <div class="absolute -top-2 -left-2 text-6xl text-blue-400/10 font-serif leading-none select-none">"</div>

        <div class="flex gap-1 mb-4">
          <Icon
            v-for="star in 5"
            :key="star"
            name="i-heroicons-star-solid"
            class="w-5 h-5"
            :class="star <= testimonial.rating ? 'text-[var(--gold)]' : 'text-gray-200'"
          />
        </div>

        <blockquote class="text-slate-700 mb-6 flex-grow italic leading-relaxed">
          "{{ testimonial.content }}"
        </blockquote>

        <div class="flex items-center gap-4 pt-4 border-t border-slate-100">
          <img
            :src="testimonial.image"
            :alt="testimonial.name"
            class="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/20"
          />
          <div>
            <div class="font-semibold text-slate-900">
              {{ testimonial.name }}
            </div>
            <div class="text-sm text-slate-500">
              {{ testimonial.role }}
            </div>
          </div>
        </div>
      </div>
    </UCard>
  </ScrollReveal>
</template>

<script setup lang="ts">
import type { Testimonial } from '@/types'
import ScrollReveal from '@/components/ScrollReveal.vue'

defineProps<{
  testimonial: Testimonial
}>()
</script>

<style scoped>
.testimonial-card {
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
}
.testimonial-card:hover {
  transform: scale(1.02);
  box-shadow: 0 20px 60px rgba(59, 130, 246, 0.1), 0 10px 30px rgba(0, 0, 0, 0.06);
  --tw-ring-color: rgba(59, 130, 246, 0.25);
}
</style>
