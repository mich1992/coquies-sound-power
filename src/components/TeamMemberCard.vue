<template>
  <UCard
    :ui="{ body: { padding: 'p-6' } }"
    class="text-center hover:shadow-xl transition-shadow duration-300 h-full"
  >
    <div class="mb-4">
      <img
        v-if="member.image"
        :src="member.image"
        :alt="member.name"
        class="w-32 h-32 rounded-full object-cover mx-auto border-4 border-[var(--glacier)]/50 bg-white p-1"
      />
      <div
        v-else
        class="w-32 h-32 rounded-full mx-auto border-4 border-[var(--glacier)]/50 bg-[var(--glacier)]/30 flex items-center justify-center"
      >
        <span class="font-display text-3xl font-bold text-[var(--navy)]">{{ initials }}</span>
      </div>
    </div>

    <h3 class="text-xl font-bold text-slate-900 mb-1 font-display">
      {{ member.name }}
    </h3>

    <p class="text-[var(--gold-deep)] font-semibold mb-3">
      {{ member.role }}
    </p>

    <p class="text-slate-600 text-sm mb-4">
      {{ member.bio }}
    </p>

    <ul v-if="member.phoneDisplay || member.email" class="space-y-1.5 text-sm">
      <li v-if="member.phone && member.phoneDisplay">
        <a
          :href="`tel:${member.phone}`"
          class="font-medium text-[var(--navy)] hover:text-[var(--gold)]"
        >
          {{ member.phoneDisplay }}
        </a>
      </li>
      <li v-if="member.email">
        <a
          :href="`mailto:${member.email}`"
          class="font-medium text-[var(--navy)] hover:text-[var(--gold)] break-all"
        >
          {{ member.email }}
        </a>
      </li>
    </ul>
  </UCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TeamMember } from '@/types'

const props = defineProps<{
  member: TeamMember
}>()

const initials = computed(() => {
  const parts = props.member.name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts[parts.length - 1]?.[0] ?? ''
  return (first + last).toUpperCase()
})
</script>

<style scoped>
.font-display {
  font-family: "Bricolage Grotesque", sans-serif;
}
</style>
