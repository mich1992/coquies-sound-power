<template>
  <div class="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
    <div class="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4">
      <h3 class="text-2xl font-bold text-white" style="font-family: 'Righteous', sans-serif;">
        Solicita tu Cotización
      </h3>
      <p class="text-blue-100 mt-1">
        Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
      </p>
    </div>

    <form @submit.prevent="handleSubmit" class="p-6 space-y-6">
      <!-- Name -->
      <div>
        <label class="block text-sm font-semibold text-slate-700 mb-2">
          Nombre Completo <span class="text-red-500">*</span>
        </label>
        <input 
          v-model="form.name"
          type="text"
          placeholder="Tu nombre completo"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          :disabled="loading"
        />
      </div>

      <!-- Email & Phone -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-semibold text-slate-700 mb-2">
            Correo Electrónico <span class="text-red-500">*</span>
          </label>
          <input 
            v-model="form.email"
            type="email"
            placeholder="tu@email.com"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            :disabled="loading"
          />
        </div>

        <div>
          <label class="block text-sm font-semibold text-slate-700 mb-2">
            Teléfono <span class="text-red-500">*</span>
          </label>
          <input 
            v-model="form.phone"
            type="tel"
            placeholder="+57 300 123 4567"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            :disabled="loading"
          />
        </div>
      </div>

      <!-- Event Type & Date -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-semibold text-slate-700 mb-2">
            Tipo de Evento <span class="text-red-500">*</span>
          </label>
          <select 
            v-model="form.eventType"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
            :disabled="loading"
          >
            <option value="">Selecciona un tipo</option>
            <option value="boda">Boda</option>
            <option value="xv-anos">XV Años</option>
            <option value="cumpleanos">Cumpleaños</option>
            <option value="empresarial">Fiesta Empresarial</option>
            <option value="concierto">Concierto/Festival</option>
            <option value="privada">Fiesta Privada</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-semibold text-slate-700 mb-2">
            Fecha del Evento <span class="text-red-500">*</span>
          </label>
          <input 
            v-model="form.eventDate"
            type="date"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            :disabled="loading"
          />
        </div>
      </div>

      <!-- Services -->
      <div>
        <label class="block text-sm font-semibold text-slate-700 mb-3">
          Servicios de Interés <span class="text-red-500">*</span>
        </label>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label 
            v-for="service in availableServices" 
            :key="service.value"
            class="flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all"
            :class="form.services.includes(service.value) ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'"
          >
            <input 
              type="checkbox"
              :value="service.value"
              v-model="form.services"
              class="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
              :disabled="loading"
            />
            <span class="text-slate-700">{{ service.label }}</span>
          </label>
        </div>
      </div>

      <!-- Message -->
      <div>
        <label class="block text-sm font-semibold text-slate-700 mb-2">
          Mensaje / Detalles Adicionales
        </label>
        <textarea 
          v-model="form.message"
          placeholder="Cuéntanos más sobre tu evento (número de invitados, lugar, horarios, etc.)"
          rows="4"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
          :disabled="loading"
        ></textarea>
      </div>

      <!-- Submit Button -->
      <button 
        type="submit"
        :disabled="!isFormValid || loading"
        class="w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2"
        :class="isFormValid && !loading 
          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl' 
          : 'bg-gray-300 text-gray-500 cursor-not-allowed'"
      >
        <svg v-if="loading" class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
        {{ loading ? 'Enviando...' : 'Enviar Solicitud' }}
      </button>

      <!-- Success Message -->
      <div 
        v-if="successMessage"
        class="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3"
      >
        <svg class="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <p class="font-semibold text-green-800">{{ successMessage }}</p>
          <button @click="successMessage = ''" class="text-green-600 hover:text-green-800 text-sm mt-1">
            Cerrar
          </button>
        </div>
      </div>

      <!-- Error Message -->
      <div 
        v-if="errorMessage"
        class="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
      >
        <svg class="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <p class="font-semibold text-red-800">{{ errorMessage }}</p>
          <button @click="errorMessage = ''" class="text-red-600 hover:text-red-800 text-sm mt-1">
            Cerrar
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface ContactFormData {
  name: string
  email: string
  phone: string
  eventType: string
  services: string[]
  eventDate: string
  message: string
}

const form = ref<ContactFormData>({
  name: '',
  email: '',
  phone: '',
  eventType: '',
  services: [],
  eventDate: '',
  message: ''
})

const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const availableServices = [
  { label: 'Alquiler de Equipos', value: 'alquiler-equipos' },
  { label: 'Turbo (Picó)', value: 'turbo-pico' },
  { label: 'Iluminación', value: 'iluminacion' },
  { label: 'DJ Profesional', value: 'dj' }
]

const isFormValid = computed(() => {
  return form.value.name.trim() !== '' &&
         form.value.email.trim() !== '' &&
         form.value.phone.trim() !== '' &&
         form.value.eventType !== '' &&
         form.value.services.length > 0 &&
         form.value.eventDate !== ''
})

const handleSubmit = async () => {
  if (!isFormValid.value) return

  loading.value = true
  errorMessage.value = ''
  successMessage.value = ''

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })

    const data = await response.json().catch(() => ({}))
    if (!response.ok) {
      throw new Error(data.message || data.error || 'Error al enviar')
    }

    successMessage.value = '¡Solicitud enviada con éxito! Nos pondremos en contacto contigo pronto.'
    
    form.value = {
      name: '',
      email: '',
      phone: '',
      eventType: '',
      services: [],
      eventDate: '',
      message: ''
    }
  } catch (error: unknown) {
    errorMessage.value =
      error instanceof Error ? error.message : 'Hubo un error al enviar tu solicitud. Por favor, intenta nuevamente.'
  } finally {
    loading.value = false
  }
}
</script>
