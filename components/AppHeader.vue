<template>
  <header
    class="sticky top-0 z-50 transition-all duration-300 overflow-visible"
    :class="[
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-200/50 border-b border-slate-200/50'
        : 'bg-white/80 backdrop-blur-md border-b border-slate-200/30'
    ]"
  >
    <UContainer>
      <nav class="flex items-center justify-between py-4">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Icon name="i-heroicons-speaker-wave" class="w-6 h-6 text-white" />
          </div>
          <div class="hidden sm:block">
            <h1 class="text-xl font-bold text-slate-900" style="font-family: 'Righteous', sans-serif;">
              Coquies Sound Power
            </h1>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <ul class="hidden lg:flex items-center gap-8">
          <li v-for="item in navigation" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="nav-link text-slate-700 hover:text-blue-600 font-medium transition-colors cursor-pointer relative"
              active-class="text-blue-600"
            >
              {{ item.label }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </NuxtLink>
          </li>
        </ul>

        <!-- CTA Button Desktop -->
        <div class="hidden lg:block">
          <UButton
            to="/contacto"
            size="lg"
            color="blue"
            class="cursor-pointer shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            Solicitar Cotización
          </UButton>
        </div>

        <!-- Mobile Menu Button -->
        <UButton
          icon="i-heroicons-bars-3"
          color="gray"
          variant="ghost"
          class="lg:hidden cursor-pointer"
          @click="isMenuOpen = !isMenuOpen"
        />
      </nav>
    </UContainer>

    <!-- Mobile Menu (overlays content) -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMenuOpen" class="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-t border-slate-200/50 z-50">
        <UContainer>
          <ul class="flex flex-col gap-4 py-4">
            <li v-for="item in navigation" :key="item.to">
              <NuxtLink
                :to="item.to"
                class="block py-2 text-slate-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                active-class="text-blue-600"
                @click="isMenuOpen = false"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
            <li class="pt-2">
              <UButton
                to="/contacto"
                color="blue"
                block
                class="cursor-pointer shadow-md shadow-blue-500/20"
                @click="isMenuOpen = false"
              >
                Solicitar Cotización
              </UButton>
            </li>
          </ul>
        </UContainer>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)
const isScrolled = ref(false)

const navigation = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Paquetes', to: '/paquetes' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Galería', to: '/galeria' },
  { label: 'Contacto', to: '/contacto' }
]

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

watch(() => useRoute().path, () => {
  isMenuOpen.value = false
})
</script>

<style scoped>
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, #3b82f6, #1d4ed8);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}
</style>
