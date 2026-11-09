<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-linear-to-br from-slate-900 to-blue-900 text-white py-20">
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <UBadge color="blue" variant="subtle" size="lg" class="mb-4">
              <Icon name="i-heroicons-musical-note" class="w-4 h-4 mr-2" />
              DJs Profesionales
            </UBadge>
            <h1 class="text-4xl md:text-5xl font-bold mb-6" style="font-family: 'Righteous', sans-serif;">
              Servicios de DJ Profesional
            </h1>
            <p class="text-xl text-slate-200 mb-8">
              DJs experimentados con amplio repertorio musical y equipo de mezcla de última generación para hacer bailar a todos.
            </p>
            <UButton
              to="/contacto"
              size="xl"
              color="blue"
              class="cursor-pointer"
             >
              Solicitar Cotización
            </UButton>
          </div>
          <div class="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&h=600&fit=crop"
              alt="DJ Profesional"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Content -->
    <section class="py-20 bg-white">
      <UContainer>
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-slate-900 mb-8" style="font-family: 'Righteous', sans-serif;">
            ¿Qué Incluye el Servicio?
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <UCard v-for="feature in features" :key="feature.title">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon :name="feature.icon" class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 class="font-bold text-slate-900 mb-2">{{ feature.title }}</h3>
                  <p class="text-slate-600 text-sm">{{ feature.description }}</p>
                </div>
              </div>
            </UCard>
          </div>

          <h2 class="text-3xl font-bold text-slate-900 mb-6" style="font-family: 'Righteous', sans-serif;">
            Géneros Musicales
          </h2>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div v-for="genre in genres" :key="genre"
                 class="bg-blue-50 rounded-lg p-4 text-center">
              <p class="font-semibold text-slate-900">{{ genre }}</p>
            </div>
          </div>

          <h2 class="text-3xl font-bold text-slate-900 mb-6" style="font-family: 'Righteous', sans-serif;">
            Paquetes de DJ
          </h2>

          <div class="space-y-6">
            <UCard v-for="pkg in packages" :key="pkg.name">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h3 class="text-xl font-bold text-slate-900">{{ pkg.name }}</h3>
                  <p class="text-slate-600 text-sm">{{ pkg.description }}</p>
                </div>
                <div class="text-2xl font-bold text-blue-600">{{ pkg.duration }}</div>
              </div>
              <ul class="space-y-2">
                <li v-for="item in pkg.includes" :key="item" class="flex items-start gap-2 text-sm">
                  <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span class="text-slate-700">{{ item }}</span>
                </li>
              </ul>
            </UCard>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-blue-600 text-white">
      <UContainer>
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6" style="font-family: 'Righteous', sans-serif;">
            La Música Perfecta para tu Evento
          </h2>
          <p class="text-xl mb-8">
            Nuestros DJs se adaptan a tu estilo y hacen que todos bailen toda la noche.
          </p>
          <UButton
            to="/contacto"
            size="xl"
            color="neutral"
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
const features = [
  {
    title: 'DJ Profesional',
    description: 'DJs certificados con años de experiencia',
    icon: 'i-heroicons-user'
  },
  {
    title: 'Equipo Profesional',
    description: 'Controladoras, mezcladores y software de última generación',
    icon: 'i-heroicons-computer-desktop'
  },
  {
    title: 'Amplio Repertorio',
    description: 'Música de todos los géneros y épocas',
    icon: 'i-heroicons-musical-note'
  },
  {
    title: 'Animación',
    description: 'Conducción de eventos y animación de pista',
    icon: 'i-heroicons-megaphone'
  }
]

const genres = [
  'Salsa',
  'Reggaeton',
  'Electrónica',
  'Rock',
  'Pop',
  'Vallenato',
  'Merengue',
  'Bachata',
  'Hip Hop',
  'House',
  'Techno',
  'Cumbia'
]

const packages = [
  {
    name: 'Paquete Básico',
    description: 'Ideal para eventos pequeños',
    duration: '4 horas',
    includes: [
      'DJ profesional',
      'Equipo de mezcla básico',
      'Música de todos los géneros',
      'Micrófono para anuncios'
    ]
  },
  {
    name: 'Paquete Estándar',
    description: 'Perfecto para fiestas medianas',
    duration: '6 horas',
    includes: [
      'DJ profesional certificado',
      'Equipo de mezcla profesional',
      'Iluminación básica incluida',
      'Música personalizada según preferencias',
      'Animación y conducción',
      'Efectos especiales (humo)'
    ]
  },
  {
    name: 'Paquete Premium',
    description: 'Experiencia completa para eventos grandes',
    duration: '8+ horas',
    includes: [
      'DJ profesional de alto nivel',
      'Equipo de mezcla de última generación',
      'Sistema de iluminación completo',
      'Pantallas LED con visuales',
      'Animación y conducción profesional',
      'Efectos especiales avanzados',
      'Lista de canciones personalizada',
      'Sonido de respaldo',
      'Coordinación pre-evento'
    ]
  }
]
</script>
