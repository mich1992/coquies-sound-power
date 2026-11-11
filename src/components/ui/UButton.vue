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
    variant?: 'solid' | 'soft' | 'ghost' | 'outline'
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
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
  xl: 'h-14 px-6 text-base',
}

const colorClasses: Record<string, Record<string, string>> = {
  blue: {
    solid: 'bg-[var(--gold)] text-[var(--black)] hover:bg-[var(--yellow)]',
    soft: 'bg-[var(--black)]/5 text-[var(--black)] hover:bg-[var(--black)]/10',
    ghost: 'text-[var(--black)] hover:bg-[var(--gold)]/20',
    outline: 'border-2 border-[var(--black)] text-[var(--black)] bg-transparent hover:bg-[var(--black)] hover:text-[var(--gold)]',
  },
  gray: {
    solid: 'bg-[var(--black)] text-[var(--gold)] hover:bg-[var(--charcoal)]',
    soft: 'bg-white/10 text-inherit hover:bg-white/20',
    ghost: 'text-inherit hover:bg-white/10',
    outline: 'border-2 border-current bg-transparent hover:bg-white/10',
  },
  white: {
    solid: 'bg-white text-[var(--black)] hover:bg-[var(--cream)]',
    soft: 'bg-white/15 text-inherit hover:bg-white/25',
    ghost: 'text-inherit hover:bg-white/10',
    outline: 'border-2 border-current bg-transparent hover:bg-white/10',
  },
}

const buttonClasses = computed(() => [
  'cq-btn inline-flex items-center justify-center gap-2 font-bold rounded-full cursor-pointer',
  sizeClasses[props.size],
  colorClasses[props.color]?.[props.variant] ?? colorClasses.blue.solid,
  props.block ? 'w-full' : '',
  props.disabled ? 'opacity-50 pointer-events-none' : '',
  props.class,
])

function onClick(e: Event) {
  emit('click', e)
}
</script>

<style scoped>
.cq-btn {
  transition: transform 140ms cubic-bezier(0.23, 1, 0.32, 1), background-color 140ms ease, color 140ms ease;
}

.cq-btn:active {
  transform: scale(0.97);
}

@media (hover: hover) and (pointer: fine) {
  .cq-btn:hover {
    transform: translateY(-1px);
  }
}
</style>
