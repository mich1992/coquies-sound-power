export interface GalleryItem {
  url: string
  thumb?: string
  title: string
  category: 'Bodas' | 'Fiestas' | 'Equipos' | 'Marca'
  kind: 'photo' | 'video'
  poster?: string
}

export const galleryCategories = ['Todos', 'Bodas', 'Fiestas', 'Equipos', 'Marca'] as const

export const galleryItems: GalleryItem[] = [
  {
    url: '/media/gallery/01-evento-1.webp',
    thumb: '/media/gallery/01-evento-1-thumb.webp',
    title: 'Escenario al aire libre',
    category: 'Bodas',
    kind: 'photo',
  },
  {
    url: '/media/gallery/03-evento-3.webp',
    thumb: '/media/gallery/03-evento-3-thumb.webp',
    title: 'Luces y cabina en recepción',
    category: 'Bodas',
    kind: 'photo',
  },
  {
    url: '/media/gallery/05-evento-5.webp',
    thumb: '/media/gallery/05-evento-5-thumb.webp',
    title: 'DJ en plena fiesta',
    category: 'Fiestas',
    kind: 'photo',
  },
  {
    url: '/media/gallery/06-evento-6.webp',
    thumb: '/media/gallery/06-evento-6-thumb.webp',
    title: 'Pista con iluminación',
    category: 'Fiestas',
    kind: 'photo',
  },
  {
    url: '/media/gallery/16-turbo-coquies.webp',
    thumb: '/media/gallery/16-turbo-coquies-thumb.webp',
    title: 'Turbo Coquies en vivo',
    category: 'Equipos',
    kind: 'photo',
  },
  {
    url: '/media/gallery/14-equipo-parlante-frontal.webp',
    thumb: '/media/gallery/14-equipo-parlante-frontal-thumb.webp',
    title: 'Parlante PRO DJ — vista frontal',
    category: 'Equipos',
    kind: 'photo',
  },
  {
    url: '/media/gallery/15-equipo-parlante-lateral.webp',
    thumb: '/media/gallery/15-equipo-parlante-lateral-thumb.webp',
    title: 'Parlante PRO DJ — perfil',
    category: 'Equipos',
    kind: 'photo',
  },
  {
    url: '/media/gallery/07-evento-7.webp',
    thumb: '/media/gallery/07-evento-7-thumb.webp',
    title: 'Rig de luces y sonido',
    category: 'Equipos',
    kind: 'photo',
  },
  {
    url: '/media/gallery/08-evento-8.webp',
    thumb: '/media/gallery/08-evento-8-thumb.webp',
    title: 'Montaje nocturno',
    category: 'Fiestas',
    kind: 'photo',
  },
  {
    url: '/media/gallery/02-evento-2.webp',
    thumb: '/media/gallery/02-evento-2-thumb.webp',
    title: 'Ambiente de celebración',
    category: 'Fiestas',
    kind: 'photo',
  },
  {
    url: '/media/gallery/04-evento-4.webp',
    thumb: '/media/gallery/04-evento-4-thumb.webp',
    title: 'Evento social',
    category: 'Bodas',
    kind: 'photo',
  },
  {
    url: '/media/gallery/09-legacy-2.webp',
    thumb: '/media/gallery/09-legacy-2-thumb.webp',
    title: 'Coquies en acción',
    category: 'Fiestas',
    kind: 'photo',
  },
  {
    url: '/media/gallery/10-legacy-3.webp',
    thumb: '/media/gallery/10-legacy-3-thumb.webp',
    title: 'Noche de baile',
    category: 'Fiestas',
    kind: 'photo',
  },
  {
    url: '/media/gallery/12-equipo.webp',
    thumb: '/media/gallery/12-equipo-thumb.webp',
    title: 'Identidad Coquies',
    category: 'Marca',
    kind: 'photo',
  },
  {
    url: '/media/gallery/13-equipo-alt.webp',
    thumb: '/media/gallery/13-equipo-alt-thumb.webp',
    title: 'Marca turbo',
    category: 'Marca',
    kind: 'photo',
  },
  {
    url: '/media/videos/evento-1.mp4',
    poster: '/media/gallery/05-evento-5-thumb.webp',
    title: 'Video de evento 1',
    category: 'Fiestas',
    kind: 'video',
  },
  {
    url: '/media/videos/evento-3.mp4',
    poster: '/media/gallery/07-evento-7-thumb.webp',
    title: 'Video de montaje',
    category: 'Equipos',
    kind: 'video',
  },
  {
    url: '/media/videos/evento-5.mp4',
    poster: '/media/gallery/08-evento-8-thumb.webp',
    title: 'Video de fiesta',
    category: 'Fiestas',
    kind: 'video',
  },
]

export const heroPhoto = '/media/gallery/hero-portada.webp'

/** Fotos reales de parlantes (página Alquiler de equipos). */
export const equipmentPhotos = {
  hero: '/media/gallery/15-equipo-parlante-lateral.webp',
  frontal: '/media/gallery/14-equipo-parlante-frontal.webp',
  lateral: '/media/gallery/15-equipo-parlante-lateral.webp',
} as const

/** Picó / turbo Coquies (página Turbo y tarjetas de servicio). */
export const turboPhoto = '/media/gallery/16-turbo-coquies.webp'
export const turboPhotoThumb = '/media/gallery/16-turbo-coquies-thumb.webp'
