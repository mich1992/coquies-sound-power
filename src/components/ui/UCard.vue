<template>
  <div
    class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
    :class="[ringClass, props.class]"
  >
    <div :class="bodyPadding">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  ui?: {
    body?: { padding?: string }
    ring?: string
  }
  class?: string
}>()

const bodyPadding = computed(() => props.ui?.body?.padding ?? 'p-6')

const ringClass = computed(() => {
  const ring = props.ui?.ring ?? ''
  if (ring.includes('ring-blue')) return 'ring-2 ring-blue-600'
  return ring
})
</script>
