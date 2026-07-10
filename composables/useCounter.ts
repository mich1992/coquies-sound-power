import { ref, watch } from 'vue'

export function useCounter(
  target: number,
  duration = 2000,
  startOnView = false
) {
  const count = ref(0)
  const isStarted = ref(false)

  function easeOutExpo(t: number): number {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
  }

  function start() {
    if (isStarted.value) return
    isStarted.value = true

    const startTime = performance.now()

    function update(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutExpo(progress)

      count.value = Math.round(easedProgress * target)

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }

    requestAnimationFrame(update)
  }

  function reset() {
    count.value = 0
    isStarted.value = false
  }

  return {
    count,
    start,
    reset
  }
}
