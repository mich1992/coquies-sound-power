<template>
  <span
    class="inline-flex items-center font-medium rounded-md"
    :class="[sizeClasses, colorClasses]"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    color?: 'blue' | 'gray'
    variant?: 'subtle' | 'solid'
    size?: 'sm' | 'md' | 'lg'
  }>(),
  {
    color: 'blue',
    variant: 'subtle',
    size: 'md',
  }
)

const sizeClasses = computed(() => {
  const map = { sm: 'px-2 py-0.5 text-xs', md: 'px-2.5 py-1 text-sm', lg: 'px-3 py-1.5 text-sm' }
  return map[props.size]
})

const colorClasses = computed(() => {
  if (props.color === 'blue' && props.variant === 'subtle') {
    return 'bg-blue-50 text-blue-700 border border-blue-100'
  }
  if (props.color === 'blue') {
    return 'bg-blue-600 text-white'
  }
  return 'bg-slate-100 text-slate-700'
})
</script>
