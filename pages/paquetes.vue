<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
      <UContainer>
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6" style="font-family: 'Righteous', sans-serif;">
            Paquetes y Precios
          </h1>
          <p class="text-xl text-slate-200">
            Elige el paquete perfecto para tu evento. Todos nuestros paquetes son personalizables según tus necesidades.
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Pricing Cards -->
    <section class="py-20 bg-white">
      <UContainer>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <PricingCard 
            v-for="pkg in packages" 
            :key="pkg.id"
            :package="pkg"
            :highlighted="pkg.highlighted"
          />
        </div>

        <!-- Note -->
        <div class="max-w-3xl mx-auto">
          <UAlert
            color="blue"
            variant="soft"
            title="Nota Importante"
            description="Los precios son referenciales y pueden variar según la ubicación, duración del evento y servicios adicionales. Contáctanos para obtener una cotización personalizada."
          />
        </div>
      </UContainer>
    </section>

    <!-- Comparison Table -->
    <section class="py-20 bg-slate-50">
      <UContainer>
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-slate-900 mb-8 text-center" style="font-family: 'Righteous', sans-serif;">
            Comparación de Paquetes
          </h2>

          <div class="overflow-x-auto">
            <table class="w-full bg-white rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr class="bg-blue-600 text-white">
                  <th class="py-4 px-6 text-left">Característica</th>
                  <th class="py-4 px-6 text-center">Básico</th>
                  <th class="py-4 px-6 text-center">Estándar</th>
                  <th class="py-4 px-6 text-center">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, index) in comparisonTable" :key="index" 
                    :class="index % 2 === 0 ? 'bg-slate-50' : 'bg-white'">
                  <td class="py-4 px-6 font-medium text-slate-900">{{ row.feature }}</td>
                  <td class="py-4 px-6 text-center">
                    <Icon v-if="row.basic === true" name="i-heroicons-check-circle-solid" class="w-6 h-6 text-green-600 mx-auto" />
                    <Icon v-else-if="row.basic === false" name="i-heroicons-x-circle-solid" class="w-6 h-6 text-gray-300 mx-auto" />
                    <span v-else class="text-slate-600">{{ row.basic }}</span>
                  </td>
                  <td class="py-4 px-6 text-center">
                    <Icon v-if="row.standard === true" name="i-heroicons-check-circle-solid" class="w-6 h-6 text-green-600 mx-auto" />
                    <Icon v-else-if="row.standard === false" name="i-heroicons-x-circle-solid" class="w-6 h-6 text-gray-300 mx-auto" />
                    <span v-else class="text-slate-600">{{ row.standard }}</span>
                  </td>
                  <td class="py-4 px-6 text-center">
                    <Icon v-if="row.premium === true" name="i-heroicons-check-circle-solid" class="w-6 h-6 text-green-600 mx-auto" />
                    <Icon v-else-if="row.premium === false" name="i-heroicons-x-circle-solid" class="w-6 h-6 text-gray-300 mx-auto" />
                    <span v-else class="text-slate-600">{{ row.premium }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-blue-600 text-white">
      <UContainer>
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6" style="font-family: 'Righteous', sans-serif;">
            ¿Necesitas un Paquete Personalizado?
          </h2>
          <p class="text-xl mb-8">
            Contáctanos y diseñaremos un paquete a la medida de tus necesidades y presupuesto.
          </p>
          <UButton 
            to="/contacto" 
            size="xl" 
            color="white"
            class="cursor-pointer"
          >
            Solicitar Cotización Personalizada
          </UButton>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { PricingPackage } from '~/types'

useSeoMeta({
  title: 'Paquetes y Precios - Coquies Sound Power',
  description: 'Conoce nuestros paquetes de sonido, iluminación y DJ para eventos. Precios competitivos y paquetes personalizables.',
  ogTitle: 'Paquetes y Precios'
})

const packages: PricingPackage[] = [
  {
    id: 1,
    name: 'Paquete Básico',
    description: 'Ideal para eventos pequeños e íntimos',
    price: 'Desde $800.000',
    highlighted: false,
    features: [
      'Sistema de sonido básico (hasta 100 personas)',
      '2 micrófonos inalámbricos',
      'Instalación y configuración',
      'Soporte técnico básico',
      '4 horas de servicio'
    ]
  },
  {
    id: 2,
    name: 'Paquete Estándar',
    description: 'Perfecto para la mayoría de eventos',
    price: 'Desde $1.500.000',
    highlighted: true,
    features: [
      'Sistema de sonido profesional (hasta 300 personas)',
      '4 micrófonos inalámbricos',
      'Iluminación LED básica (8 luces)',
      'DJ profesional incluido',
      'Instalación y configuración completa',
      'Soporte técnico durante el evento',
      '6 horas de servicio'
    ]
  },
  {
    id: 3,
    name: 'Paquete Premium',
    description: 'Experiencia completa para eventos grandes',
    price: 'Desde $3.000.000',
    highlighted: false,
    features: [
      'Sistema de sonido de alta potencia (500+ personas)',
      'Micrófonos profesionales ilimitados',
      'Iluminación LED completa (16+ luces)',
      'Efectos láser y especiales',
      'DJ profesional certificado',
      'Pantallas LED',
      'Generador eléctrico (si es necesario)',
      'Instalación premium',
      'Soporte técnico especializado',
      '8 horas de servicio',
      'Sesión de planificación pre-evento'
    ]
  }
]

const comparisonTable = [
  { feature: 'Capacidad de personas', basic: 'Hasta 100', standard: 'Hasta 300', premium: '500+' },
  { feature: 'Micrófonos inalámbricos', basic: '2', standard: '4', premium: 'Ilimitados' },
  { feature: 'Sistema de sonido', basic: 'Básico', standard: 'Profesional', premium: 'Alta potencia' },
  { feature: 'Iluminación LED', basic: false, standard: true, premium: true },
  { feature: 'Efectos láser', basic: false, standard: false, premium: true },
  { feature: 'DJ profesional', basic: false, standard: true, premium: true },
  { feature: 'Pantallas LED', basic: false, standard: false, premium: true },
  { feature: 'Generador eléctrico', basic: false, standard: 'Opcional', premium: 'Incluido' },
  { feature: 'Horas de servicio', basic: '4 hrs', standard: '6 hrs', premium: '8 hrs' },
  { feature: 'Soporte técnico', basic: 'Básico', standard: 'Completo', premium: 'Especializado' },
  { feature: 'Planificación pre-evento', basic: false, standard: false, premium: true }
]
</script>
