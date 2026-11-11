<template>
  <header class="sticky top-0 z-50 bg-[var(--black)] text-white border-b border-white/10">
    <UContainer>
      <nav class="flex items-center justify-between h-18 py-2" aria-label="Principal">
        <NuxtLink to="/" class="flex items-center gap-3 min-w-0">
          <span class="grid place-items-center h-12 w-12 rounded-xl bg-white overflow-hidden shrink-0">
            <img src="/brand/logo-coquies.webp" alt="" width="48" height="48" class="h-full w-full object-contain" />
          </span>
          <span class="font-display text-[1.05rem] font-extrabold tracking-[-0.02em] text-[var(--gold)] truncate">
            Coquies Sound Power
          </span>
        </NuxtLink>

        <ul class="hidden lg:flex items-center gap-7">
          <li v-for="item in navigation" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="nav-link text-[15px] font-medium text-white/85 hover:text-white"
              active-class="is-active"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>

        <a
          class="hidden lg:inline-flex cq-wa"
          href="https://wa.me/573007348547"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cotizar por WhatsApp
        </a>

        <button
          type="button"
          class="lg:hidden h-11 w-11 inline-flex items-center justify-center rounded-full text-[var(--gold)]"
          :aria-expanded="isMenuOpen"
          aria-controls="site-menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="sr-only">{{ isMenuOpen ? 'Cerrar menú' : 'Abrir menú' }}</span>
          <Icon :name="isMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" class="w-6 h-6" />
        </button>
      </nav>
    </UContainer>

    <Transition
      enter-active-class="transition duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-out"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div
        v-if="isMenuOpen"
        id="site-menu"
        class="lg:hidden border-t border-white/10 bg-[var(--black)]"
      >
        <UContainer>
          <ul class="flex flex-col py-3">
            <li v-for="item in navigation" :key="item.to">
              <NuxtLink
                :to="item.to"
                class="flex h-12 items-center text-lg font-medium text-white"
                @click="isMenuOpen = false"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </UContainer>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navigation = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Paquetes', to: '/paquetes' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Galería', to: '/galeria' },
  { label: 'Contacto', to: '/contacto' },
]
</script>

<style scoped>
.font-display {
  font-family: "Bricolage Grotesque", sans-serif;
}

.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  height: 2px;
  width: 100%;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 180ms cubic-bezier(0.23, 1, 0.32, 1);
}

.nav-link:hover::after,
.nav-link.router-link-active::after,
.nav-link.is-active::after {
  transform: scaleX(1);
}

.cq-wa {
  height: 2.75rem;
  padding: 0 1.1rem;
  border-radius: 999px;
  background: var(--gold);
  color: var(--black);
  font-weight: 700;
  font-size: 0.95rem;
  align-items: center;
  transition: transform 140ms cubic-bezier(0.23, 1, 0.32, 1), background-color 140ms ease;
}

.cq-wa:hover {
  background: var(--yellow);
}

.cq-wa:active {
  transform: scale(0.97);
}
</style>
