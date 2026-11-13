<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
      <UContainer>
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-4" style="font-family: 'Righteous', sans-serif;">
            Nuestros Servicios
          </h1>
          <p class="text-xl text-slate-200">
            Soluciones completas de audio, iluminación y entretenimiento profesional para cualquier tipo de evento.
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Services Grid -->
    <section class="py-16 bg-white">
      <UContainer>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard 
            v-for="service in services" 
            :key="service.id"
            :service="service"
          />
        </div>
      </UContainer>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-slate-50">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style="font-family: 'Righteous', sans-serif;">
            ¿Por Qué Elegirnos?
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="benefit in benefits" :key="benefit.title" class="text-center">
            <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon :name="benefit.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-2">{{ benefit.title }}</h3>
            <p class="text-slate-600">{{ benefit.description }}</p>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Service } from '@/types'
import ServiceCard from '@/components/ServiceCard.vue'

const services: Service[] = [
  {
    id: '1',
    title: 'Alquiler de Equipos de Sonido',
    description: 'Equipos de audio profesional de última generación para garantizar la mejor calidad de sonido en tu evento.',
    icon: 'i-heroicons-speaker-wave',
    image: '/media/gallery/14-equipo-parlante-frontal-thumb.webp',
    slug: 'alquiler-equipos',
    features: [
      'Parlantes de alta potencia (1000W - 5000W)',
      'Micrófonos inalámbricos profesionales',
      'Consolas de mezcla digitales',
      'Instalación y configuración incluida',
      'Soporte técnico durante el evento'
    ]
  },
  {
    id: '2',
    title: 'Turbo (Pickup o Picó)',
    description: 'El sistema de sonido móvil más potente y espectacular para fiestas y eventos al aire libre.',
    icon: 'i-heroicons-truck',
    image: '/media/gallery/21-turbo-coquies-luces-thumb.webp',
    slug: 'turbo-pico',
    features: [
      'Sistema de sonido de ultra alta potencia',
      'Iluminación LED sincronizada',
      'Pantallas LED para visuales',
      'Operador profesional incluido',
      'Generador eléctrico disponible'
    ]
  },
  {
    id: '3',
    title: 'Iluminación Profesional',
    description: 'Transformamos cualquier espacio con sistemas de iluminación LED, efectos especiales y diseño de ambientación.',
    icon: 'i-heroicons-light-bulb',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop',
    slug: 'iluminacion',
    features: [
      'Luces LED RGB programables',
      'Efectos láser multicolor',
      'Máquinas de humo y efectos especiales',
      'Iluminación arquitectónica',
      'Diseño de iluminación personalizado'
    ]
  },
  {
    id: '4',
    title: 'Servicios de DJ Profesional',
    description: 'DJs experimentados con amplio repertorio musical y equipo de mezcla de última generación.',
    icon: 'i-heroicons-musical-note',
    image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&h=600&fit=crop',
    slug: 'dj',
    features: [
      'DJs certificados y experimentados',
      'Música de todos los géneros',
      'Equipo de mezcla profesional',
      'Animación y conducción de eventos',
      'Solicitud de canciones personalizadas'
    ]
  }
]

const benefits = [
  {
    title: 'Experiencia',
    icon: 'i-heroicons-star',
    description: 'Más de 10 años brindando servicios profesionales'
  },
  {
    title: 'Calidad',
    icon: 'i-heroicons-shield-check',
    description: 'Equipos de última generación y mejor calidad'
  },
  {
    title: 'Profesionalismo',
    icon: 'i-heroicons-user-group',
    description: 'Personal capacitado y comprometido'
  },
  {
    title: 'Soporte 24/7',
    icon: 'i-heroicons-phone',
    description: 'Atención y soporte en cualquier momento'
  }
]
</script>
