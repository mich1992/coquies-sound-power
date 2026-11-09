<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="absolute inset-0 bg-black/60 backdrop-blur-sm"
        @click="close"
      />
      <div
        class="relative w-full bg-white rounded-xl shadow-2xl overflow-hidden"
        :class="widthClass"
        @click.stop
      >
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: boolean
  ui?: { width?: string }
}>()

const emit = defineEmits<{ 'update:modelValue': [boolean] }>()

const widthClass = computed(() => {
  const w = props.ui?.width ?? 'max-w-lg'
  return w
})

function close() {
  emit('update:modelValue', false)
}
</script>
