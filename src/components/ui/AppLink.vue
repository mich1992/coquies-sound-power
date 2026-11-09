<template>
  <a
    :href="to"
    :class="[baseClass, isActive ? [activeClass, 'router-link-active'] : '']"
    v-bind="$attrs"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    to: string
    activeClass?: string
    class?: string
  }>(),
  {
    activeClass: '',
  }
)

const pathname = ref('/')

onMounted(() => {
  pathname.value = window.location.pathname
})

const isActive = computed(() => {
  if (props.to === '/') return pathname.value === '/'
  return pathname.value === props.to || pathname.value.startsWith(`${props.to}/`)
})

const baseClass = computed(() => props.class ?? '')
</script>
