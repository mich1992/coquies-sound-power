<template>
  <nav class="mobile-dock" aria-label="Acciones rápidas">
    <a
      href="tel:+573007348547"
      class="mobile-dock__btn mobile-dock__btn--call"
    >
      <Icon name="i-heroicons-phone" class="w-5 h-5" aria-hidden="true" />
      <span>Llamar</span>
    </a>
    <a
      :href="social.whatsapp"
      class="mobile-dock__btn mobile-dock__btn--wa"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name="i-simple-icons-whatsapp" class="w-5 h-5" aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  </nav>
</template>

<script setup lang="ts">
import Icon from '@/components/ui/Icon.vue'
import { social } from '@/data/social'
</script>
