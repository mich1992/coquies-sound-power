import { addCollection } from '@iconify/vue'

let loading: Promise<void> | null = null

/** Carga iconos de redes solo cuando hace falta (chunk aparte). */
export function ensureSocialIcons(): Promise<void> {
  if (!loading) {
    loading = import('@iconify-json/simple-icons/icons.json').then((mod) => {
      addCollection(mod.default)
    })
  }
  return loading
}
