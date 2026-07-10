<template>
  <UCard 
    :ui="{ body: { padding: 'p-6' } }"
    class="text-center hover:shadow-xl transition-shadow duration-300"
  >
    <!-- Image -->
    <div class="mb-4">
      <img 
        :src="member.image" 
        :alt="member.name"
        class="w-32 h-32 rounded-full object-cover mx-auto border-4 border-blue-100"
      />
    </div>

    <!-- Info -->
    <h3 class="text-xl font-bold text-slate-900 mb-1" style="font-family: 'Righteous', sans-serif;">
      {{ member.name }}
    </h3>
    
    <p class="text-blue-600 font-medium mb-3">
      {{ member.role }}
    </p>
    
    <p class="text-slate-600 text-sm">
      {{ member.bio }}
    </p>
  </UCard>
</template>

<script setup lang="ts">
import type { TeamMember } from '~/types'

defineProps<{
  member: TeamMember
}>()
</script>
