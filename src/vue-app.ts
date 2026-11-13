import type { App } from 'vue'
import '@/lib/iconify-offline'
import UButton from '@/components/ui/UButton.vue'
import UCard from '@/components/ui/UCard.vue'
import UContainer from '@/components/ui/UContainer.vue'
import UBadge from '@/components/ui/UBadge.vue'
import UAlert from '@/components/ui/UAlert.vue'
import UAccordion from '@/components/ui/UAccordion.vue'
import UModal from '@/components/ui/UModal.vue'
import Icon from '@/components/ui/Icon.vue'
import AppLink from '@/components/ui/AppLink.vue'

export default (app: App) => {
  app.component('UButton', UButton)
  app.component('UCard', UCard)
  app.component('UContainer', UContainer)
  app.component('UBadge', UBadge)
  app.component('UAlert', UAlert)
  app.component('UAccordion', UAccordion)
  app.component('UModal', UModal)
  app.component('Icon', Icon)
  app.component('NuxtLink', AppLink)
}
