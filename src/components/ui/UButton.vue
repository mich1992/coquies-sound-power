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
    solid:
      'bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-deep)] hover:text-[var(--navy)] shadow-sm shadow-[var(--gold-deep)]/25',
    soft: 'bg-[var(--festive-muted)] text-[var(--navy)] hover:bg-[var(--festive)]/35',
    ghost: 'text-[var(--navy)] hover:bg-[var(--festive-muted)]',
    outline:
      'border-2 border-[var(--gold-deep)] text-[var(--navy)] bg-transparent hover:bg-[var(--gold)]',
  },
  gray: {
    solid: 'bg-[var(--charcoal)] text-white hover:bg-[var(--black)]',
    soft: 'bg-white/10 text-inherit hover:bg-white/20',
    ghost: 'text-inherit hover:bg-white/10',
    outline: 'border-2 border-current bg-transparent hover:bg-white/10',
  },
  white: {
    solid: 'bg-white text-[var(--navy)] hover:bg-[var(--polar)] shadow-md shadow-black/20',
    soft: 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm',
    ghost: 'text-white hover:bg-white/15',
    outline:
      'border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-[var(--navy)]',
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
