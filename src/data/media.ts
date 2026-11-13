export interface GalleryItem {
  url: string
  thumb?: string
  title: string
  category: 'Bodas' | 'Fiestas' | 'Equipos' | 'Marca'
  kind: 'photo' | 'video'
  poster?: string
}

export const galleryCategories = ['Todos', 'Bodas', 'Fiestas', 'Equipos', 'Marca'] as const

/** Orden intercalado: cabinas/montajes y picó, para no parecer solo pickup. */
export const galleryItems: GalleryItem[] = [
  {
    url: '/media/gallery/18-dj-atardecer.webp',
    thumb: '/media/gallery/18-dj-atardecer-thumb.webp',
    title: 'Cabina y DJ al atardecer',
    category: 'Fiestas',
    kind: 'photo',
  },
  {
    url: '/media/gallery/20-dj-recepcion.webp',
    thumb: '/media/gallery/20-dj-recepcion-thumb.webp',
    title: 'Cabina profesional en recepción',
    category: 'Bodas',
    kind: 'photo',
  },
  {
    url: '/media/gallery/03-evento-3.webp',
    thumb: '/media/gallery/03-evento-3-thumb.webp',
    title: 'Cabina con iluminación en evento',
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
    url: '/media/gallery/17-montaje-hotel.webp',
    thumb: '/media/gallery/17-montaje-hotel-thumb.webp',
    title: 'Montaje de sonido en hotel',
    category: 'Equipos',
    kind: 'photo',
  },
  {
    url: '/media/gallery/21-turbo-coquies-luces.webp',
    thumb: '/media/gallery/21-turbo-coquies-luces-thumb.webp',
    title: 'Turbo Coquies — luces y pantalla',
    category: 'Equipos',
    kind: 'photo',
  },
  {
    url: '/media/gallery/01-evento-1.webp',
    thumb: '/media/gallery/01-evento-1-thumb.webp',
    title: 'Escenario al aire libre',
    category: 'Bodas',
    kind: 'photo',
  },
  {
    url: '/media/gallery/22-turbo-coquies-show.webp',
    thumb: '/media/gallery/22-turbo-coquies-show-thumb.webp',
    title: 'Picó en vivo',
    category: 'Fiestas',
    kind: 'photo',
  },
  {
    url: '/media/gallery/04-evento-4.webp',
    thumb: '/media/gallery/04-evento-4-thumb.webp',
    title: 'Sonido para evento social',
    category: 'Bodas',
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
    url: '/media/gallery/19-turbo-noche.webp',
    thumb: '/media/gallery/19-turbo-noche-thumb.webp',
    title: 'Picó iluminado en la noche',
    category: 'Equipos',
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
    url: '/media/gallery/08-evento-8.webp',
    thumb: '/media/gallery/08-evento-8-thumb.webp',
    title: 'Montaje nocturno',
    category: 'Fiestas',
    kind: 'photo',
  },
  {
    url: '/media/gallery/16-turbo-coquies.webp',
    thumb: '/media/gallery/16-turbo-coquies-thumb.webp',
    title: 'Detalle del turbo',
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
    url: '/media/gallery/02-evento-2.webp',
    thumb: '/media/gallery/02-evento-2-thumb.webp',
    title: 'Ambiente de celebración',
    category: 'Fiestas',
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
    poster: '/media/gallery/20-dj-recepcion-thumb.webp',
    title: 'Video — cabina en evento',
    category: 'Bodas',
    kind: 'video',
  },
  {
    url: '/media/videos/evento-3.mp4',
    poster: '/media/gallery/17-montaje-hotel-thumb.webp',
    title: 'Video de montaje',
    category: 'Equipos',
    kind: 'video',
  },
  {
    url: '/media/videos/evento-5.mp4',
    poster: '/media/gallery/21-turbo-coquies-luces-thumb.webp',
    title: 'Video — luces del picó',
    category: 'Equipos',
    kind: 'video',
  },
]

/** Foto de fondo del hero (atardecer / cabina). */
export const heroPhoto = '/media/gallery/hero-portada.webp'
/** Mini boomerang del turbo (luces en loop, ~4 s). */
export const heroVideoBoomerang = '/media/videos/hero-boomerang.mp4?v=3'
export const heroBoomerangPoster = '/media/gallery/hero-boomerang-poster.webp?v=3'

/** Fotos reales de parlantes (página Alquiler de equipos). */
export const equipmentPhotos = {
  hero: '/media/gallery/15-equipo-parlante-lateral.webp',
  frontal: '/media/gallery/14-equipo-parlante-frontal.webp',
  lateral: '/media/gallery/15-equipo-parlante-lateral.webp',
} as const

/** Picó / turbo Coquies (página Turbo y tarjetas de servicio). */
export const turboPhoto = '/media/gallery/21-turbo-coquies-luces.webp'
export const turboPhotoThumb = '/media/gallery/21-turbo-coquies-luces-thumb.webp'
