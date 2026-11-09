<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" :class="$attrs.class">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })
</script>
