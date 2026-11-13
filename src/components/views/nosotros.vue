<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20">
      <UContainer>
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6" style="font-family: 'Righteous', sans-serif;">
            Sobre Nosotros
          </h1>
          <p class="text-xl text-slate-200">
            Más de 10 años creando experiencias audiovisuales inolvidables en eventos de toda Colombia.
          </p>
        </div>
      </UContainer>
    </section>

    <!-- About Content -->
    <section class="py-20 bg-white">
      <UContainer>
        <div class="max-w-4xl mx-auto">
          <div class="prose prose-lg max-w-none">
            <h2 class="text-3xl font-bold text-slate-900 mb-6" style="font-family: 'Righteous', sans-serif;">
              Nuestra Historia
            </h2>
            <p class="text-slate-700 mb-6">
              Producciones Coquíes (Coquies Saw Power) nació en 2013 de la pasión por la música y el compromiso de hacer de cada evento
              una experiencia memorable. Hoy dirige el proyecto <strong>{{ owner.fullName }}</strong> desde Santa Marta, con sonido, picó,
              iluminación y DJs que la gente ya conoce en la ciudad.
            </p>
            <p class="text-slate-700 mb-8">
              A lo largo de estos años, hemos tenido el honor de participar en más de 500 eventos, desde bodas íntimas hasta 
              conciertos masivos, siempre manteniendo nuestro compromiso con la calidad, profesionalismo y satisfacción del cliente.
            </p>

            <h2 class="text-3xl font-bold text-slate-900 mb-6" style="font-family: 'Righteous', sans-serif;">
              Nuestra Misión
            </h2>
            <p class="text-slate-700 mb-8">
              Proporcionar servicios de sonido, iluminación y entretenimiento de la más alta calidad, superando las expectativas 
              de nuestros clientes y creando experiencias audiovisuales únicas que hagan de cada evento un momento inolvidable.
            </p>

            <h2 class="text-3xl font-bold text-slate-900 mb-6" style="font-family: 'Righteous', sans-serif;">
              Nuestros Valores
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <UCard v-for="value in values" :key="value.title">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon :name="value.icon" class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 class="font-bold text-slate-900 mb-2">{{ value.title }}</h3>
                  <p class="text-slate-600 text-sm">{{ value.description }}</p>
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-slate-50">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4" style="font-family: 'Righteous', sans-serif;">
            Nuestro Equipo
          </h2>
          <p class="text-slate-600 text-lg">
            Profesionales apasionados comprometidos con la excelencia en cada evento.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <TeamMemberCard
            v-for="member in team"
            :key="member.id"
            :member="member"
          />
        </div>
      </UContainer>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-blue-600 text-white">
      <UContainer>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="text-4xl md:text-5xl font-bold mb-2" style="font-family: 'Righteous', sans-serif;">
              {{ stat.value }}
            </div>
            <div class="text-blue-100">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-white">
      <UContainer>
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6" style="font-family: 'Righteous', sans-serif;">
            ¿Listo para Trabajar con Nosotros?
          </h2>
          <p class="text-xl text-slate-600 mb-8">
            Contáctanos y descubre cómo podemos hacer de tu evento algo extraordinario.
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
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
import TeamMemberCard from '@/components/TeamMemberCard.vue'
import { owner, teamMembers } from '@/data/team'

const values = [
  {
    title: 'Profesionalismo',
    description: 'Compromiso con la excelencia en cada detalle de nuestro servicio',
    icon: 'i-heroicons-shield-check'
  },
  {
    title: 'Calidad',
    description: 'Equipos de última generación y mejores estándares técnicos',
    icon: 'i-heroicons-star'
  },
  {
    title: 'Puntualidad',
    description: 'Respeto por tu tiempo y cumplimiento de horarios acordados',
    icon: 'i-heroicons-clock'
  },
  {
    title: 'Innovación',
    description: 'Constante actualización de equipos y técnicas audiovisuales',
    icon: 'i-heroicons-light-bulb'
  }
]

const team = teamMembers

const stats = [
  { value: '10+', label: 'Años de Experiencia' },
  { value: '500+', label: 'Eventos Realizados' },
  { value: '100%', label: 'Clientes Satisfechos' },
  { value: '24/7', label: 'Soporte Disponible' }
]
</script>
