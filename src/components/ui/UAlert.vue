<template>
  <div class="rounded-lg border p-4" :class="colorClasses">
    <p v-if="title" class="font-semibold mb-1">{{ title }}</p>
    <p v-if="description" class="text-sm opacity-90">{{ description }}</p>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    color?: 'blue' | 'amber'
    variant?: 'soft' | 'solid'
    title?: string
    description?: string
  }>(),
  {
    color: 'blue',
    variant: 'soft',
  }
)

const colorClasses = computed(() => {
  if (props.color === 'blue' && props.variant === 'soft') {
    return 'bg-blue-50 border-blue-200 text-blue-900'
  }
  return 'bg-slate-50 border-slate-200 text-slate-900'
})
</script>
