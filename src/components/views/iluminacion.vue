<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <UBadge color="blue" variant="subtle" size="lg" class="mb-4">
              <Icon name="i-heroicons-light-bulb" class="w-4 h-4 mr-2" />
              Iluminación Profesional
            </UBadge>
            <h1 class="text-4xl md:text-5xl font-bold mb-6" style="font-family: 'Righteous', sans-serif;">
              Iluminación LED y Efectos Especiales
            </h1>
            <p class="text-xl text-slate-200 mb-8">
              Transforma cualquier espacio con nuestros sistemas de iluminación profesional y crea la atmósfera perfecta para tu evento.
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
              src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop"
              alt="Iluminación LED"
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
          <h2 class="text-3xl font-bold text-slate-900 mb-6" style="font-family: 'Righteous', sans-serif;">
            Sistemas de Iluminación
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <UCard v-for="system in systems" :key="system.title">
              <div class="text-center">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon :name="system.icon" class="w-8 h-8 text-blue-600" />
                </div>
                <h3 class="font-bold text-slate-900 mb-2">{{ system.title }}</h3>
                <p class="text-slate-600 text-sm">{{ system.description }}</p>
              </div>
            </UCard>
          </div>

          <h2 class="text-3xl font-bold text-slate-900 mb-6" style="font-family: 'Righteous', sans-serif;">
            Paquetes de Iluminación
          </h2>

          <div class="space-y-6">
            <UCard v-for="pkg in packages" :key="pkg.name">
              <h3 class="text-xl font-bold text-slate-900 mb-4">{{ pkg.name }}</h3>
              <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li v-for="item in pkg.items" :key="item" class="flex items-start gap-2 text-sm">
                  <Icon name="i-heroicons-check-circle" class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
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
            Crea la Atmósfera Perfecta
          </h2>
          <p class="text-xl mb-8">
            Diseñamos la iluminación ideal para tu evento, adaptada a tu espacio y estilo.
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
const systems = [
  {
    title: 'Luces LED RGB',
    description: 'Iluminación programable con millones de colores',
    icon: 'i-heroicons-light-bulb'
  },
  {
    title: 'Efectos Láser',
    description: 'Proyecciones láser para efectos espectaculares',
    icon: 'i-heroicons-bolt'
  },
  {
    title: 'Efectos Especiales',
    description: 'Humo, niebla baja y efectos atmosféricos',
    icon: 'i-heroicons-sparkles'
  }
]

const packages = [
  {
    name: 'Paquete Básico',
    items: [
      '4-6 luces LED Par RGB',
      '2 luces móviles (moving heads)',
      'Máquina de humo',
      'Controlador DMX',
      'Montaje y programación básica'
    ]
  },
  {
    name: 'Paquete Intermedio',
    items: [
      '8-12 luces LED Par RGB',
      '4 luces móviles (moving heads)',
      '2 efectos láser multicolor',
      'Máquina de humo profesional',
      'Niebla baja (opcional)',
      'Controlador DMX profesional',
      'Programación personalizada'
    ]
  },
  {
    name: 'Paquete Premium',
    items: [
      '16+ luces LED Par RGB',
      '8+ luces móviles (moving heads)',
      '4 efectos láser profesionales',
      'Múltiples máquinas de efectos',
      'Iluminación arquitectónica',
      'Pantallas LED',
      'Sistema de control avanzado',
      'Diseño y programación completa',
      'Operador técnico en sitio'
    ]
  }
]
</script>
