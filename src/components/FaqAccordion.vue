<template>
  <UAccordion 
    :items="items"
    :ui="{
      wrapper: 'space-y-3',
      item: {
        base: 'bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors'
      }
    }"
  >
    <template #default="{ item, open }">
      <UButton 
        color="white" 
        variant="ghost"
        class="w-full cursor-pointer"
      >
        <template #leading>
          <Icon 
            name="i-heroicons-chevron-right" 
            class="w-5 h-5 transition-transform duration-200"
            :class="{ 'rotate-90': open }"
          />
        </template>

        <span class="font-semibold text-slate-900 text-left flex-1">
          {{ item.label }}
        </span>
      </UButton>
    </template>

    <template #item="{ item }">
      <div class="px-4 pb-4 text-slate-600">
        {{ item.content }}
      </div>
    </template>
  </UAccordion>
</template>

<script setup lang="ts">
import type { FAQ } from '@/types'

const props = defineProps<{
  faqs: FAQ[]
}>()

const items = computed(() => 
  props.faqs.map(faq => ({
    label: faq.question,
    content: faq.answer,
    defaultOpen: false
  }))
)
</script>
