<template>
  <UCard 
    :ui="{ 
      body: { padding: 'p-8' },
      ring: highlighted ? 'ring-2 ring-blue-600' : ''
    }"
    :class="[
      'relative h-full flex flex-col',
      highlighted ? 'shadow-2xl scale-105' : 'hover:shadow-xl transition-shadow duration-300'
    ]"
  >
    <!-- Popular Badge -->
    <div v-if="highlighted" class="absolute -top-4 left-1/2 -translate-x-1/2">
      <UBadge color="blue" size="lg">
        <Icon name="i-heroicons-star" class="w-4 h-4 mr-1" />
        Más Popular
      </UBadge>
    </div>

    <!-- Header -->
    <div class="text-center mb-6">
      <h3 class="text-2xl font-bold text-slate-900 mb-2" style="font-family: 'Righteous', sans-serif;">
        {{ package.name }}
      </h3>
      <p class="text-slate-600 text-sm">
        {{ package.description }}
      </p>
    </div>

    <!-- Price -->
    <div class="text-center mb-6 pb-6 border-b border-gray-200">
      <div class="text-4xl font-bold text-slate-900 mb-1" style="font-family: 'Righteous', sans-serif;">
        {{ package.price }}
      </div>
      <div class="text-sm text-slate-500">
        Precio referencial
      </div>
    </div>

    <!-- Features -->
    <ul class="space-y-3 mb-8 flex-grow">
      <li 
        v-for="(feature, index) in package.features" 
        :key="index"
        class="flex items-start gap-3 text-sm"
      >
        <Icon 
          name="i-heroicons-check-circle-solid" 
          class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" 
        />
        <span class="text-slate-700">{{ feature }}</span>
      </li>
    </ul>

    <!-- CTA Button -->
    <UButton 
      to="/contacto"
      :color="highlighted ? 'blue' : 'gray'"
      :variant="highlighted ? 'solid' : 'soft'"
      size="lg"
      block
      class="cursor-pointer"
    >
      Solicitar Cotización
    </UButton>
  </UCard>
</template>

<script setup lang="ts">
import type { PricingPackage } from '~/types'

defineProps<{
  package: PricingPackage
  highlighted?: boolean
}>()
</script>
