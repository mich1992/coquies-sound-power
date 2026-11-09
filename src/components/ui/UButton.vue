<template>
  <component
    :is="to ? 'a' : 'button'"
    :href="to || undefined"
    :type="to ? undefined : 'button'"
    :class="buttonClasses"
    v-bind="to ? {} : { disabled }"
    @click="onClick"
  >
    <Icon v-if="icon" :name="icon" class="w-5 h-5" />
    <slot name="leading" />
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Icon from '@/components/ui/Icon.vue'

const props = withDefaults(
  defineProps<{
    to?: string
    color?: 'blue' | 'gray' | 'white'
    variant?: 'solid' | 'soft' | 'ghost'
    size?: 'sm' | 'md' | 'lg' | 'xl'
    block?: boolean
    icon?: string
    disabled?: boolean
    class?: string
  }>(),
  {
    color: 'blue',
    variant: 'solid',
    size: 'md',
  }
)

const emit = defineEmits<{ click: [Event] }>()

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2.5 text-base',
  xl: 'px-6 py-3 text-base',
}

const colorClasses: Record<string, Record<string, string>> = {
  blue: {
    solid: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md',
    soft: 'bg-blue-50 text-blue-700 hover:bg-blue-100',
    ghost: 'text-blue-600 hover:bg-blue-50',
  },
  gray: {
    solid: 'bg-slate-600 text-white hover:bg-slate-700',
    soft: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
    ghost: 'text-slate-600 hover:bg-slate-100',
  },
  white: {
    solid: 'bg-white text-slate-900 hover:bg-slate-100',
    soft: 'bg-white/20 text-white hover:bg-white/30',
    ghost: 'text-white hover:bg-white/10',
  },
}

const buttonClasses = computed(() => [
  'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors',
  sizeClasses[props.size],
  colorClasses[props.color]?.[props.variant] ?? colorClasses.blue.solid,
  props.block ? 'w-full' : '',
  props.class,
])

function onClick(e: Event) {
  emit('click', e)
}
</script>
