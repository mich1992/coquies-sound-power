<template>
  <IconifyIcon :icon="resolvedIcon" :class="props.class" :width="size" :height="size" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon as IconifyIcon } from '@iconify/vue'

const props = defineProps<{
  name: string
  class?: string
}>()

const size = computed(() => {
  const match = props.class?.match(/w-(\d+)/)
  return match ? `${Number(match[1]) * 4}px` : '1.25rem'
})

function resolveIcon(name: string): string {
  if (name.startsWith('i-')) {
    const rest = name.slice(2)
    const dash = rest.indexOf('-')
    if (dash === -1) return rest
    const collection = rest.slice(0, dash)
    const iconName = rest.slice(dash + 1)
    return `${collection}:${iconName}`
  }
  return name
}

const resolvedIcon = computed(() => resolveIcon(props.name))
</script>
