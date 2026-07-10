<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
      <UContainer>
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6" style="font-family: 'Righteous', sans-serif;">
            Galería de Eventos
          </h1>
          <p class="text-xl text-slate-200">
            Momentos capturados de nuestros eventos más memorables.
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Gallery -->
    <section class="py-20 bg-white">
      <UContainer>
        <!-- Filters -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <UButton
            v-for="category in categories"
            :key="category"
            :color="selectedCategory === category ? 'blue' : 'gray'"
            :variant="selectedCategory === category ? 'solid' : 'soft'"
            @click="selectedCategory = category"
            class="cursor-pointer"
          >
            {{ category }}
          </UButton>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(image, index) in filteredImages"
            :key="index"
            class="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            @click="openLightbox(index)"
          >
            <img
              :src="image.url"
              :alt="image.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <h3 class="text-white font-bold text-lg mb-1">{{ image.title }}</h3>
                <p class="text-slate-300 text-sm">{{ image.category }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredImages.length === 0" class="text-center py-16">
          <Icon name="i-heroicons-photo" class="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <p class="text-slate-600">No hay imágenes en esta categoría.</p>
        </div>
      </UContainer>
    </section>

    <!-- Lightbox Modal -->
    <UModal v-model="isLightboxOpen" :ui="{ width: 'max-w-6xl' }">
      <div class="p-4 bg-slate-900">
        <div class="relative">
          <img
            v-if="currentImage"
            :src="currentImage.url"
            :alt="currentImage.title"
            class="w-full h-auto rounded-lg"
          />
          
          <!-- Navigation Buttons -->
          <button
            v-if="currentImageIndex > 0"
            @click="previousImage"
            class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors cursor-pointer"
          >
            <Icon name="i-heroicons-chevron-left" class="w-6 h-6 text-white" />
          </button>
          
          <button
            v-if="currentImageIndex < filteredImages.length - 1"
            @click="nextImage"
            class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors cursor-pointer"
          >
            <Icon name="i-heroicons-chevron-right" class="w-6 h-6 text-white" />
          </button>

          <!-- Image Info -->
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 class="text-white font-bold text-xl mb-1">{{ currentImage?.title }}</h3>
            <p class="text-slate-300">{{ currentImage?.category }}</p>
          </div>
        </div>
      </div>
    </UModal>

    <!-- CTA Section -->
    <section class="py-20 bg-blue-600 text-white">
      <UContainer>
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6" style="font-family: 'Righteous', sans-serif;">
            ¿Quieres que tu Evento sea el Próximo?
          </h2>
          <p class="text-xl mb-8">
            Contáctanos y hagamos de tu evento una experiencia inolvidable.
          </p>
          <UButton 
            to="/contacto" 
            size="xl" 
            color="white"
            class="cursor-pointer"
          >
            Solicitar Cotización
          </UButton>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Galería - Coquies Sound Power',
  description: 'Mira nuestros trabajos: bodas, XV años, fiestas corporativas y más eventos realizados con éxito.',
  ogTitle: 'Galería de Eventos'
})

interface GalleryImage {
  url: string
  title: string
  category: string
}

const selectedCategory = ref('Todos')
const isLightboxOpen = ref(false)
const currentImageIndex = ref(0)

const categories = ['Todos', 'Bodas', 'XV Años', 'Fiestas', 'Corporativos', 'Conciertos']

const images: GalleryImage[] = [
  { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=800&fit=crop', title: 'Boda en Jardín', category: 'Bodas' },
  { url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=800&fit=crop', title: 'XV Años Elegante', category: 'XV Años' },
  { url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=800&fit=crop', title: 'Concierto al Aire Libre', category: 'Conciertos' },
  { url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=800&fit=crop', title: 'Evento Corporativo', category: 'Corporativos' },
  { url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=800&fit=crop', title: 'Iluminación de Concierto', category: 'Conciertos' },
  { url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=800&fit=crop', title: 'Fiesta Privada', category: 'Fiestas' },
  { url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=800&fit=crop', title: 'Boda en Salón', category: 'Bodas' },
  { url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=800&fit=crop', title: 'DJ en Vivo', category: 'Fiestas' },
  { url: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=800&fit=crop', title: 'Conferencia Corporativa', category: 'Corporativos' },
  { url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&h=800&fit=crop', title: 'XV Años con DJ', category: 'XV Años' },
  { url: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=800&fit=crop', title: 'Iluminación LED', category: 'Fiestas' },
  { url: 'https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?w=800&h=800&fit=crop', title: 'Boda de Noche', category: 'Bodas' }
]

const filteredImages = computed(() => {
  if (selectedCategory.value === 'Todos') {
    return images
  }
  return images.filter(img => img.category === selectedCategory.value)
})

const currentImage = computed(() => {
  return filteredImages.value[currentImageIndex.value]
})

const openLightbox = (index: number) => {
  currentImageIndex.value = index
  isLightboxOpen.value = true
}

const nextImage = () => {
  if (currentImageIndex.value < filteredImages.value.length - 1) {
    currentImageIndex.value++
  }
}

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}
</script>
