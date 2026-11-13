/** Nombres oficiales de la marca */
export const brand = {
  /** Razón social / nombre legal */
  legal: 'Producciones Coquíes',
  /** Nombre comercial (como en el logo) */
  short: 'Coquies Saw Power',
} as const

export const brandTitle = (page?: string) =>
  page ? `${page} · ${brand.short}` : `${brand.legal} — ${brand.short}`
