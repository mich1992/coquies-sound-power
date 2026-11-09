<template>
  <div>
    <HeroSection />

    <!-- Services Section -->
    <section class="py-20 bg-white relative">
      <div class="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-900/5 to-transparent"></div>

      <UContainer>
        <ScrollReveal>
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style="font-family: 'Righteous', sans-serif;">
              Nuestros Servicios
            </h2>
            <p class="text-slate-600 text-lg max-w-2xl mx-auto">
              Ofrecemos soluciones completas de audio, iluminación y entretenimiento para hacer de tu evento un éxito rotundo.
            </p>
          </div>
        </ScrollReveal>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            v-for="(service, index) in services"
            :key="service.id"
            :service="service"
          />
        </div>

        <ScrollReveal>
          <div class="text-center mt-12">
            <UButton
              to="/servicios"
              size="lg"
              color="blue"
              variant="outline"
              class="cursor-pointer group"
            >
              Ver Todos los Servicios
              <Icon name="i-heroicons-arrow-right" class="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </UButton>
          </div>
        </ScrollReveal>
      </UContainer>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-slate-50">
      <UContainer>
        <ScrollReveal>
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style="font-family: 'Righteous', sans-serif;">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p class="text-slate-600 text-lg">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
            </p>
          </div>
        </ScrollReveal>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            :testimonial="testimonial"
          />
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
      <div class="absolute top-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>

      <UContainer class="relative z-10">
        <ScrollReveal>
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6" style="font-family: 'Righteous', sans-serif;">
              ¿Listo para Hacer de tu Evento Algo Memorable?
            </h2>
            <p class="text-xl text-blue-100 mb-8">
              Contáctanos ahora y recibe una cotización personalizada sin compromiso.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <UButton
                to="/contacto"
                size="xl"
                color="white"
                class="cursor-pointer shadow-lg shadow-blue-900/20 hover:shadow-xl transition-all duration-300"
              >
                <Icon name="i-heroicons-chat-bubble-left-right" class="w-5 h-5 mr-2" />
                Solicitar Cotización
              </UButton>
              <UButton
                href="https://wa.me/573001234567"
                size="xl"
                color="white"
                variant="outline"
                target="_blank"
                class="cursor-pointer backdrop-blur-sm bg-white/10 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                <Icon name="i-simple-icons-whatsapp" class="w-5 h-5 mr-2" />
                WhatsApp
              </UButton>
            </div>
          </div>
        </ScrollReveal>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Service, Testimonial } from '@/types'
import HeroSection from '@/components/HeroSection.vue'
import ScrollReveal from '@/components/ScrollReveal.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import TestimonialCard from '@/components/TestimonialCard.vue'

const services: Service[] = [
  {
    id: '1',
    title: 'Alquiler de Equipos',
    description: 'Equipos de sonido profesional de alta calidad para eventos de cualquier tamaño.',
    icon: 'i-heroicons-speaker-wave',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
    slug: 'alquiler-equipos',
    features: [
      'Parlantes de alta potencia',
      'Micrófonos inalámbricos',
      'Consolas de mezcla profesionales',
      'Instalación y soporte técnico'
    ]
  },
  {
    id: '2',
    title: 'Turbo (Picó)',
    description: 'Servicio de Turbo o Picó completo con sonido potente y efectos de luces espectaculares.',
    icon: 'i-heroicons-truck',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop',
    slug: 'turbo-pico',
    features: [
      'Sonido de alta potencia',
      'Sistema de iluminación integrado',
      'Pantallas LED',
      'Operador profesional incluido'
    ]
  },
  {
    id: '3',
    title: 'Iluminación',
    description: 'Sistemas de iluminación LED, efectos especiales y ambientación profesional.',
    icon: 'i-heroicons-light-bulb',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop',
    slug: 'iluminacion',
    features: [
      'Luces LED RGB',
      'Efectos láser',
      'Máquinas de humo',
      'Diseño de iluminación personalizado'
    ]
  },
  {
    id: '4',
    title: 'Servicios de DJ',
    description: 'DJs profesionales con amplia experiencia y música para todos los gustos.',
    icon: 'i-heroicons-musical-note',
    image: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&h=600&fit=crop',
    slug: 'dj',
    features: [
      'DJs profesionales',
      'Amplio repertorio musical',
      'Equipo de mezcla profesional',
      'Animación y ambientación'
    ]
  }
]

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'María González',
    role: 'Boda - Diciembre 2023',
    content: 'El servicio fue excepcional. La calidad del sonido y la iluminación hicieron de nuestra boda un evento mágico. Totalmente recomendados.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    name: 'Carlos Ramírez',
    role: 'Fiesta Empresarial',
    content: 'Profesionalismo y calidad en todo momento. El DJ estuvo increíble y todos nuestros invitados quedaron encantados. Sin duda los volveremos a contratar.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=12'
  },
  {
    id: 3,
    name: 'Ana Martínez',
    role: 'XV Años',
    content: 'Superaron nuestras expectativas. El Turbo fue espectacular y la ambientación perfecta. Mi hija quedó feliz y nosotros también.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?img=5'
  }
]
</script>
