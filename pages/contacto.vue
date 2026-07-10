<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
      <UContainer>
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6" style="font-family: 'Righteous', sans-serif;">
            Contáctanos
          </h1>
          <p class="text-xl text-slate-200">
            Cuéntanos sobre tu evento y recibe una cotización personalizada en menos de 24 horas.
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Contact Form & Info -->
    <section class="py-20 bg-white">
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Contact Form -->
          <div class="lg:col-span-2">
            <ClientOnly>
              <ContactForm />
            </ClientOnly>
          </div>

          <!-- Contact Info -->
          <div class="space-y-6">
            <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 class="text-xl font-bold text-slate-900 mb-6" style="font-family: 'Righteous', sans-serif;">
                Información de Contacto
              </h3>

              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-slate-900 text-sm">Teléfono</p>
                    <a href="tel:+573001234567" class="text-slate-600 hover:text-blue-600 transition-colors">
                      +57 300 123 4567
                    </a>
                  </div>
                </div>

                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-slate-900 text-sm">WhatsApp</p>
                    <a href="https://wa.me/573001234567" class="text-slate-600 hover:text-green-600 transition-colors">
                      +57 300 123 4567
                    </a>
                  </div>
                </div>

                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-slate-900 text-sm">Email</p>
                    <a href="mailto:info@coquiessound.com" class="text-slate-600 hover:text-purple-600 transition-colors">
                      info@coquiessound.com
                    </a>
                  </div>
                </div>

                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-slate-900 text-sm">Ubicación</p>
                    <p class="text-slate-600">Zona Centro, Colombia</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 class="text-xl font-bold text-slate-900 mb-4" style="font-family: 'Righteous', sans-serif;">
                Horario de Atención
              </h3>
              <div class="space-y-3">
                <div class="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span class="text-slate-700 font-medium">Lunes - Viernes</span>
                  <span class="text-slate-500 text-sm">9:00 AM - 6:00 PM</span>
                </div>
                <div class="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span class="text-slate-700 font-medium">Sábados</span>
                  <span class="text-slate-500 text-sm">10:00 AM - 4:00 PM</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-700 font-medium">Domingos</span>
                  <span class="text-slate-400 text-sm">Solo con cita previa</span>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 class="text-xl font-bold text-slate-900 mb-4" style="font-family: 'Righteous', sans-serif;">
                Síguenos
              </h3>
              <div class="flex gap-3">
                <a href="https://facebook.com" target="_blank" class="w-12 h-12 bg-slate-100 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer group">
                  <svg class="w-6 h-6 text-slate-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" class="w-12 h-12 bg-slate-100 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer group">
                  <svg class="w-6 h-6 text-slate-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://wa.me/573001234567" target="_blank" class="w-12 h-12 bg-slate-100 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors cursor-pointer group">
                  <svg class="w-6 h-6 text-slate-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a href="https://tiktok.com" target="_blank" class="w-12 h-12 bg-slate-100 hover:bg-black rounded-lg flex items-center justify-center transition-colors cursor-pointer group">
                  <svg class="w-6 h-6 text-slate-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-slate-50">
      <UContainer>
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style="font-family: 'Righteous', sans-serif;">
              Preguntas Frecuentes
            </h2>
            <p class="text-slate-600 text-lg">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.
            </p>
          </div>

          <div class="space-y-4">
            <div 
              v-for="(faq, index) in faqs" 
              :key="faq.id"
              class="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button 
                @click="toggleFaq(index)"
                class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span class="font-semibold text-slate-900">{{ faq.question }}</span>
                <svg 
                  class="w-5 h-5 text-slate-500 transition-transform duration-200" 
                  :class="{ 'rotate-180': openFaqs.includes(index) }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                v-show="openFaqs.includes(index)"
                class="px-6 pb-4 text-slate-600"
              >
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Map Section -->
    <section class="py-20 bg-white">
      <UContainer>
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-slate-900 mb-4" style="font-family: 'Righteous', sans-serif;">
            Nuestra Ubicación
          </h2>
          <p class="text-slate-600">
            Visítanos o contáctanos para conocer más sobre nuestros servicios.
          </p>
        </div>

        <div class="max-w-3xl mx-auto aspect-video bg-slate-200 rounded-xl overflow-hidden">
          <div class="w-full h-full flex items-center justify-center text-slate-500">
            <div class="text-center">
              <svg class="w-16 h-16 mx-auto mb-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p>Mapa de ubicación</p>
              <p class="text-sm mt-2">Zona Centro, Colombia</p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Contacto - Coquies Sound Power',
  description: 'Solicita una cotización para tu evento. Teléfono, WhatsApp, email y formulario de contacto disponibles.',
  ogTitle: 'Contacto - Solicita tu Cotización'
})

const openFaqs = ref<number[]>([])

const toggleFaq = (index: number) => {
  if (openFaqs.value.includes(index)) {
    openFaqs.value = openFaqs.value.filter(i => i !== index)
  } else {
    openFaqs.value.push(index)
  }
}

const faqs = [
  {
    id: 1,
    question: '¿Con cuánta anticipación debo reservar?',
    answer: 'Recomendamos reservar con al menos 2-3 meses de anticipación para eventos grandes. Sin embargo, también atendemos eventos con menor tiempo de anticipación según disponibilidad.'
  },
  {
    id: 2,
    question: '¿Cubren eventos fuera de la ciudad?',
    answer: 'Sí, cubrimos eventos en toda la región. Los costos de transporte y logística se incluyen en la cotización según la distancia y complejidad del evento.'
  },
  {
    id: 3,
    question: '¿Qué incluye el precio de la cotización?',
    answer: 'Todas nuestras cotizaciones incluyen: equipos, transporte, instalación, configuración, soporte técnico durante el evento y desmontaje. Los servicios adicionales se detallan específicamente.'
  },
  {
    id: 4,
    question: '¿Puedo contratar solo algunos servicios?',
    answer: 'Sí, ofrecemos servicios individuales (solo sonido, solo iluminación, solo DJ) o paquetes completos. Nos adaptamos a tus necesidades y presupuesto.'
  },
  {
    id: 5,
    question: '¿Qué pasa si hay problemas técnicos durante el evento?',
    answer: 'Contamos con equipos de respaldo y técnicos especializados que estarán presentes durante todo el evento para resolver cualquier inconveniente de inmediato.'
  },
  {
    id: 6,
    question: '¿Realizan pruebas de sonido antes del evento?',
    answer: 'Sí, llegamos con tiempo suficiente antes del evento para realizar todas las pruebas necesarias y asegurar que todo funcione perfectamente.'
  },
  {
    id: 7,
    question: '¿Aceptan pagos en cuotas?',
    answer: 'Sí, ofrecemos planes de pago flexibles. Generalmente solicitamos un anticipo del 50% al confirmar la reserva y el saldo restante el día del evento.'
  },
  {
    id: 8,
    question: '¿Tienen seguro de responsabilidad civil?',
    answer: 'Sí, contamos con pólizas de seguro que cubren nuestros equipos y responsabilidad civil para tu tranquilidad.'
  }
]
</script>
