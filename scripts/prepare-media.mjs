import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = path.resolve(import.meta.dirname, '..')
const SRC = path.join(ROOT, 'fotos-videos')
const OUT_GALLERY = path.join(ROOT, 'public/media/gallery')
const OUT_VIDEOS = path.join(ROOT, 'public/media/videos')

const PHOTOS = [
  ['01-evento-1.jpeg', 'WhatsApp Image 2026-11-10 at 15.53.24.jpeg'],
  ['02-evento-2.jpeg', 'WhatsApp Image 2026-11-10 at 15.53.24 (2).jpeg'],
  ['03-evento-3.jpeg', 'WhatsApp Image 2026-11-10 at 15.53.24 (4).jpeg'],
  ['04-evento-4.jpeg', 'WhatsApp Image 2026-11-10 at 15.53.24 (5).jpeg'],
  ['05-evento-5.jpeg', 'WhatsApp Image 2026-11-10 at 15.53.25.jpeg'],
  ['06-evento-6.jpeg', 'WhatsApp Image 2026-11-10 at 15.53.25 (1).jpeg'],
  ['07-evento-7.jpeg', 'WhatsApp Image 2026-11-10 at 15.53.25 (2).jpeg'],
  ['08-evento-8.jpeg', 'WhatsApp Image 2026-11-10 at 15.53.25 (3).jpeg'],
  ['09-legacy-2.jpeg', '2.JPEG'],
  ['10-legacy-3.jpeg', '3.JPEG'],
  ['11-legacy-4.jpg', '4.jpg'],
  ['12-equipo.png', '4.PNG'],
  ['13-equipo-alt.png', 'IMG_0399.PNG'],
  ['14-arte-publicitario.png', 'coquies-&morales.png'],
  ['15-logo-foto.jpeg', 'att.5oS0YgMMcG9_2o8NR5mOJ3dSOdQ9yMuckE-sOF6KOJo.JPEG'],
]

const VIDEOS = [
  ['evento-1.mp4', 'WhatsApp Video 2026-11-10 at 15.53.26.mp4'],
  ['evento-2.mp4', 'WhatsApp Video 2026-11-10 at 15.53.26 (2).mp4'],
  ['evento-3.mp4', 'WhatsApp Video 2026-11-10 at 15.53.32.mp4'],
  ['evento-4.mp4', 'WhatsApp Video 2026-11-10 at 15.53.33.mp4'],
  ['evento-5.mp4', 'WhatsApp Video 2026-11-10 at 15.53.34.mp4'],
]

await fs.mkdir(OUT_GALLERY, { recursive: true })
await fs.mkdir(OUT_VIDEOS, { recursive: true })

const manifest = []

for (const [outName, srcName] of PHOTOS) {
  const srcPath = path.join(SRC, srcName)
  const outPath = path.join(OUT_GALLERY, outName.replace(/\.[^.]+$/, '.webp'))
  const heroPath = path.join(OUT_GALLERY, outName.replace(/\.[^.]+$/, '-thumb.webp'))

  await sharp(srcPath)
    .rotate()
    .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(outPath)

  await sharp(srcPath)
    .rotate()
    .resize({ width: 800, height: 800, fit: 'cover', position: 'centre' })
    .webp({ quality: 80 })
    .toFile(heroPath)

  const meta = await sharp(outPath).metadata()
  manifest.push({
    file: path.basename(outPath),
    thumb: path.basename(heroPath),
    width: meta.width,
    height: meta.height,
  })
}

for (const [outName, srcName] of VIDEOS) {
  await fs.copyFile(path.join(SRC, srcName), path.join(OUT_VIDEOS, outName))
}

await fs.writeFile(
  path.join(OUT_GALLERY, 'manifest.json'),
  JSON.stringify({ photos: manifest, videos: VIDEOS.map(([name]) => name) }, null, 2)
)

console.log(`Prepared ${manifest.length} photos and ${VIDEOS.length} videos`)
