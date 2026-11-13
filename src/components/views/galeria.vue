<template>
  <div>
    <section class="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
      <UContainer>
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Galería de eventos</h1>
          <p class="text-xl text-slate-200">
            Cabinas profesionales, montajes de sonido, picó y fiestas en Santa Marta.
          </p>
        </div>
      </UContainer>
    </section>

    <section class="py-16 bg-[var(--cream)]">
      <UContainer>
        <div class="flex flex-wrap justify-center gap-2 mb-10">
          <UButton
            v-for="category in categories"
            :key="category"
            :color="selectedCategory === category ? 'blue' : 'gray'"
            :variant="selectedCategory === category ? 'solid' : 'soft'"
            class="cursor-pointer"
            @click="selectedCategory = category"
          >
            {{ category }}
          </UButton>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <article
            v-for="(item, index) in filteredItems"
            :key="item.url"
            class="group relative aspect-square overflow-hidden rounded-2xl bg-[var(--black)] cursor-pointer"
            @click="openItem(index)"
          >
            <template v-if="item.kind === 'photo'">
              <img
                :src="item.thumb || item.url"
                :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.03]"
                loading="lazy"
              />
            </template>
            <template v-else>
              <img
                :src="item.poster"
                :alt="item.title"
                class="w-full h-full object-cover opacity-90"
                loading="lazy"
              />
              <div class="absolute inset-0 grid place-items-center">
                <span class="h-14 w-14 rounded-full bg-[var(--gold)] text-[var(--navy)] font-bold grid place-items-center">▶</span>
              </div>
            </template>
            <div class="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 to-transparent">
              <p class="text-white font-semibold">{{ item.title }}</p>
            </div>
          </article>
        </div>
      </UContainer>
    </section>

    <UModal v-model="isLightboxOpen">
      <div class="p-3 bg-[var(--black)] rounded-2xl">
        <template v-if="currentItem?.kind === 'photo'">
          <img
            :src="currentItem.url"
            :alt="currentItem.title"
            class="w-full h-auto max-h-[80vh] object-contain rounded-lg"
          />
        </template>
        <template v-else-if="currentItem">
          <video
            :key="currentItem.url"
            :src="currentItem.url"
            :poster="currentItem.poster"
            class="w-full max-h-[80vh] rounded-lg"
            controls
            playsinline
          />
        </template>
        <p class="text-white/80 text-center mt-3 text-sm">{{ currentItem?.title }}</p>
      </div>
    </UModal>

    <section class="py-16 bg-[var(--charcoal)] text-white">
      <UContainer class="text-center max-w-2xl">
        <h2 class="text-3xl font-bold mb-4">¿Quieres que tu evento salga en la galería?</h2>
        <p class="text-white/75 mb-8">Escríbenos por WhatsApp y armamos la cotización para tu fecha.</p>
        <UButton to="/contacto" size="xl" color="blue">Solicitar cotización</UButton>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { galleryCategories, galleryItems, type GalleryItem } from '@/data/media'

const categories = galleryCategories
const selectedCategory = ref<(typeof galleryCategories)[number]>('Todos')
const isLightboxOpen = ref(false)
const currentIndex = ref(0)

const filteredItems = computed(() => {
  if (selectedCategory.value === 'Todos') return galleryItems
  return galleryItems.filter((item) => item.category === selectedCategory.value)
})

const currentItem = computed(() => filteredItems.value[currentIndex.value] as GalleryItem | undefined)

function openItem(index: number) {
  currentIndex.value = index
  isLightboxOpen.value = true
}
</script>
