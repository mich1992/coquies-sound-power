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
            <ContactForm />
          </div>

          <!-- Contact Info -->
          <div class="space-y-6">
            <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 class="text-xl font-bold text-slate-900 mb-2" style="font-family: 'Righteous', sans-serif;">
                Información de Contacto
              </h3>
              <p class="text-slate-600 text-sm mb-6">
                <span class="font-semibold text-slate-900">{{ owner.fullName }}</span>
                · {{ owner.role }}
              </p>

              <div class="space-y-4">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-slate-900 text-sm">Teléfono (propietario)</p>
                    <a :href="`tel:${owner.phoneE164}`" class="text-slate-600 hover:text-blue-600 transition-colors">
                      +57 {{ owner.phoneDisplay }}
                    </a>
                  </div>
                </div>

                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-[var(--glacier)]/40 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="i-heroicons-musical-note" class="w-6 h-6 text-[var(--navy)]" />
                  </div>
                  <div>
                    <p class="font-semibold text-slate-900 text-sm">DJ · Jhoan David Granadoz</p>
                    <a href="tel:+573028501774" class="text-slate-600 hover:text-blue-600 transition-colors">
                      +57 302 850 1774
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
                    <a :href="social.whatsapp" class="text-slate-600 hover:text-blue-600 transition-colors">
                      +57 {{ social.whatsappDisplay }}
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
                    <p class="font-semibold text-slate-900 text-sm">Email de la empresa</p>
                    <a :href="`mailto:${social.email}`" class="text-slate-600 hover:text-[var(--gold-deep)] transition-colors">
                      {{ social.email }}
                    </a>
                    <p class="text-slate-600 text-xs mt-1">
                      Propietario:
                      <a :href="`mailto:${owner.email}`" class="hover:text-[var(--gold-deep)]">{{ owner.email }}</a>
                    </p>
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
                  <span class="text-slate-600 text-sm">9:00 AM - 6:00 PM</span>
                </div>
                <div class="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span class="text-slate-700 font-medium">Sábados</span>
                  <span class="text-slate-600 text-sm">10:00 AM - 4:00 PM</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-700 font-medium">Domingos</span>
                  <span class="text-slate-600 text-sm">Solo con cita previa</span>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 class="text-xl font-bold text-slate-900 mb-4" style="font-family: 'Righteous', sans-serif;">
                Síguenos
              </h3>
              <SocialLinks variant="contact" />
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
          <div class="w-full h-full flex items-center justify-center text-slate-600">
            <div class="text-center">
              <svg class="w-16 h-16 mx-auto mb-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
import { ref } from 'vue'
import ContactForm from '@/components/ContactForm.vue'
import Icon from '@/components/ui/Icon.vue'
import { social } from '@/data/social'
import { owner } from '@/data/team'
import SocialLinks from '@/components/SocialLinks.vue'

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
