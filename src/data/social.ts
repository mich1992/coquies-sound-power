export const social = {
  whatsapp: 'https://wa.me/573007348547',
  whatsappDisplay: '300 734 8547',
  /** Correo de la empresa (formulario y cotizaciones) */
  email: 'producionescoquies@gmail.com',
  tiktok: 'https://www.tiktok.com/@producionescoquies',
  facebook: 'https://www.facebook.com/profile.php?id=61596227439990',
  instagram: 'https://www.instagram.com/producionescoquies/',
} as const

export const socialLinks = [
  {
    id: 'facebook',
    label: 'Facebook Producciones Coquíes',
    short: 'Facebook',
    href: social.facebook,
    icon: 'i-simple-icons-facebook',
  },
  {
    id: 'instagram',
    label: 'Instagram @producionescoquies',
    short: '@producionescoquies',
    href: social.instagram,
    icon: 'i-simple-icons-instagram',
  },
  {
    id: 'tiktok',
    label: 'TikTok @producionescoquies',
    short: '@producionescoquies',
    href: social.tiktok,
    icon: 'i-simple-icons-tiktok',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    short: 'WhatsApp',
    href: social.whatsapp,
    icon: 'i-simple-icons-whatsapp',
  },
] as const

export type SocialId = (typeof socialLinks)[number]['id']
