<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <UBadge color="blue" variant="subtle" size="lg" class="mb-4">
              <Icon name="i-heroicons-speaker-wave" class="w-4 h-4 mr-2" />
              Servicio Premium
            </UBadge>
            <h1 class="text-4xl md:text-5xl font-bold mb-6" style="font-family: 'Righteous', sans-serif;">
              Alquiler de Equipos de Sonido Profesional
            </h1>
            <p class="text-xl text-slate-200 mb-8">
              Equipos de audio de última generación para garantizar la mejor experiencia sonora en tu evento.
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
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop"
              alt="Equipos de sonido profesional"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Equipment Details -->
    <section class="py-20 bg-white">
      <UContainer>
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-slate-900 mb-8" style="font-family: 'Righteous', sans-serif;">
            ¿Qué Incluye el Servicio?
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <UCard v-for="item in equipment" :key="item.title">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon :name="item.icon" class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 class="font-bold text-slate-900 mb-2">{{ item.title }}</h3>
                  <p class="text-slate-600 text-sm">{{ item.description }}</p>
                </div>
              </div>
            </UCard>
          </div>

          <h2 class="text-3xl font-bold text-slate-900 mb-6" style="font-family: 'Righteous', sans-serif;">
            Especificaciones Técnicas
          </h2>

          <div class="bg-slate-50 rounded-xl p-8 mb-12">
            <ul class="space-y-4">
              <li v-for="spec in specifications" :key="spec" class="flex items-start gap-3">
                <Icon name="i-heroicons-check-circle-solid" class="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span class="text-slate-700">{{ spec }}</span>
              </li>
            </ul>
          </div>

          <h2 class="text-3xl font-bold text-slate-900 mb-6" style="font-family: 'Righteous', sans-serif;">
            Ideal Para
          </h2>

          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div v-for="eventType in eventTypes" :key="eventType" 
                 class="bg-blue-50 rounded-lg p-4 text-center">
              <p class="font-semibold text-slate-900">{{ eventType }}</p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-blue-600 text-white">
      <UContainer>
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6" style="font-family: 'Righteous', sans-serif;">
            ¿Necesitas Más Información?
          </h2>
          <p class="text-xl mb-8">
            Contáctanos y te ayudaremos a elegir el equipo perfecto para tu evento.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton 
              to="/contacto" 
              size="xl" 
              color="white"
              class="cursor-pointer"
            >
              Solicitar Cotización
            </UButton>
            <UButton 
              href="https://wa.me/573001234567" 
              size="xl" 
              color="white"
              variant="outline"
              target="_blank"
              class="cursor-pointer"
            >
              <Icon name="i-simple-icons-whatsapp" class="w-5 h-5 mr-2" />
              Escribir por WhatsApp
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
const equipment = [
  {
    title: 'Parlantes de Alta Potencia',
    description: 'Sistemas de altavoces desde 1000W hasta 5000W para cualquier tamaño de evento',
    icon: 'i-heroicons-speaker-wave'
  },
  {
    title: 'Micrófonos Inalámbricos',
    description: 'Micrófonos profesionales con tecnología anti-interferencias',
    icon: 'i-heroicons-microphone'
  },
  {
    title: 'Consolas de Mezcla',
    description: 'Consolas digitales y análogas de 16 a 32 canales',
    icon: 'i-heroicons-adjustments-horizontal'
  },
  {
    title: 'Subwoofers',
    description: 'Graves potentes para música electrónica y eventos de alto impacto',
    icon: 'i-heroicons-musical-note'
  },
  {
    title: 'Procesadores de Audio',
    description: 'Ecualizadores y procesadores para optimizar la calidad del sonido',
    icon: 'i-heroicons-cpu-chip'
  },
  {
    title: 'Instalación Completa',
    description: 'Montaje, configuración y prueba de sonido incluidos',
    icon: 'i-heroicons-wrench-screwdriver'
  }
]

const specifications = [
  'Parlantes activos y pasivos de 1000W a 5000W',
  'Cobertura de 50 a 500+ personas según configuración',
  'Micrófonos inalámbricos UHF de mano y diadema',
  'Consolas digitales con efectos integrados',
  'Cables y conectores profesionales',
  'Racks de amplificación y procesamiento',
  'Monitores de escenario disponibles',
  'Soporte técnico durante todo el evento'
]

const eventTypes = [
  'Bodas',
  'XV Años',
  'Cumpleaños',
  'Eventos Corporativos',
  'Conferencias',
  'Conciertos',
  'Festivales',
  'Fiestas Privadas',
  'Eventos Religiosos'
]
</script>
