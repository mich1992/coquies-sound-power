<template>
  <div :class="wrapperClass">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="itemClass"
    >
      <div @click="toggle(index)">
        <slot name="default" :item="item" :open="openIndexes.has(index)" />
      </div>
      <div v-show="openIndexes.has(index)">
        <slot name="item" :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

export interface AccordionItem {
  label: string
  content: string
  defaultOpen?: boolean
}

const props = defineProps<{
  items: AccordionItem[]
  ui?: {
    wrapper?: string
    item?: { base?: string }
  }
}>()

const wrapperClass = props.ui?.wrapper ?? 'space-y-3'
const itemClass = props.ui?.item?.base ?? 'bg-white rounded-lg border border-gray-200'

const openIndexes = reactive(new Set<number>())

props.items.forEach((item, i) => {
  if (item.defaultOpen) openIndexes.add(i)
})

function toggle(index: number) {
  if (openIndexes.has(index)) {
    openIndexes.delete(index)
  } else {
    openIndexes.add(index)
  }
}
</script>
