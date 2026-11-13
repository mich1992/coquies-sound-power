import type { TeamMember } from '@/types'

export const owner = {
  fullName: 'Deudibet Emilio Coquies Galindo',
  role: 'Propietario · DJ principal',
  phoneE164: '+573007348547',
  phoneDisplay: '300 734 8547',
  email: 'deudibet1@gmail.com',
} as const

/** Equipo real en escena (cabina y dirección). */
export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: owner.fullName,
    role: owner.role,
    bio: 'Lidera Producciones Coquíes y Coquies Saw Power: sonido, picó y DJ en eventos en Santa Marta y la región.',
    image: '/brand/logo-coquies.webp',
    phone: owner.phoneE164,
    phoneDisplay: owner.phoneDisplay,
    email: owner.email,
  },
  {
    id: 2,
    name: 'Jhoan David Granadoz',
    role: 'DJ',
    bio: 'DJ de la casa: mezcla en vivo y ambiente para bodas, quinceañeros, cumpleaños y fiestas.',
    phone: '+573028501774',
    phoneDisplay: '302 850 1774',
  },
]
