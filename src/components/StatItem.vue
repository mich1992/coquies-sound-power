<template>
  <div ref="el" class="text-center">
    <div class="text-3xl md:text-4xl font-bold text-blue-400 mb-2" style="font-family: 'Righteous', sans-serif;">
      <span ref="numberRef">{{ displayValue }}</span><span>{{ suffix }}</span>
    </div>
    <div class="text-sm text-slate-300">
      {{ label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  target: number
  suffix: string
  label: string
}>()

const displayValue = ref(0)
const el = ref<HTMLElement | null>(null)
const numberRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null
let rafId: number | null = null

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function startCounter() {
  const duration = 2000
  const startTime = performance.now()

  function update(currentTime: number) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easedProgress = easeOutExpo(progress)

    displayValue.value = Math.round(easedProgress * props.target)

    if (progress < 1) {
      rafId = requestAnimationFrame(update)
    }
  }

  rafId = requestAnimationFrame(update)
}

onMounted(() => {
  if (!el.value) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounter()
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.3 }
  )

  observer.observe(el.value)
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
  observer?.disconnect()
})
</script>
