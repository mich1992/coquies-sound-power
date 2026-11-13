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

const COLLECTION_PREFIXES = [
  'simple-icons',
  'heroicons-solid',
  'heroicons-outline',
  'heroicons',
  'mdi',
  'lucide',
  'tabler',
] as const

function resolveIcon(name: string): string {
  if (!name.startsWith('i-')) return name

  const rest = name.slice(2)
  for (const prefix of COLLECTION_PREFIXES) {
    if (rest === prefix) return prefix
    if (rest.startsWith(`${prefix}-`)) {
      return `${prefix}:${rest.slice(prefix.length + 1)}`
    }
  }

  const dash = rest.indexOf('-')
  if (dash === -1) return rest
  return `${rest.slice(0, dash)}:${rest.slice(dash + 1)}`
}

const resolvedIcon = computed(() => resolveIcon(props.name))
</script>
