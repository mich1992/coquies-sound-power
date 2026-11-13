<template>
  <div :class="variant === 'footer' ? 'flex flex-wrap gap-3' : 'flex flex-wrap gap-3'">
    <a
      v-for="link in socialLinks"
      :key="link.id"
      :href="link.href"
      :aria-label="link.label"
      target="_blank"
      rel="noopener noreferrer"
      :class="[baseClass, variant === 'footer' ? footerClass(link.id) : contactClass(link.id)]"
    >
      <Icon :name="link.icon" class="w-5 h-5 shrink-0" />
      <span v-if="variant === 'contact'" class="text-sm font-semibold">{{ link.short }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { socialLinks, type SocialId } from '@/data/social'

withDefaults(
  defineProps<{
    variant?: 'footer' | 'contact'
  }>(),
  { variant: 'footer' }
)

const baseClass =
  'inline-flex items-center justify-center gap-2 transition-transform duration-150 ease-out active:scale-[0.97]'

const footerClass = (id: SocialId) => {
  const tile =
    'h-11 w-11 rounded-full text-white shadow-md shadow-black/25 ring-2 ring-white/20 hover:brightness-110 hover:ring-white/40'
  const map: Record<SocialId, string> = {
    facebook: `${tile} bg-[#1877F2]`,
    instagram: `${tile} bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]`,
    tiktok: `${tile} bg-[#0f2236]`,
    whatsapp: `${tile} bg-[#128C7E]`,
  }
  return map[id]
}

const contactClass = (id: SocialId) => {
  const map: Record<SocialId, string> = {
    facebook:
      'rounded-full border border-[#1877F2]/35 bg-[#1877F2]/10 px-4 py-2 text-[#1877F2] hover:bg-[#1877F2]/15',
    instagram:
      'rounded-full border border-[#ee2a7b]/35 bg-[#ee2a7b]/10 px-4 py-2 text-[#c13584] hover:bg-[#ee2a7b]/15',
    tiktok:
      'rounded-full border border-black/20 bg-black/5 px-4 py-2 text-black hover:bg-black/10',
    whatsapp:
      'rounded-full border border-[#25D366]/35 bg-[#25D366]/10 px-4 py-2 text-[#128C7E] hover:bg-[#25D366]/15',
  }
  return map[id]
}
</script>
