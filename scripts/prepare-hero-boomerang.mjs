import { execFileSync } from 'node:child_process'
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = path.resolve(import.meta.dirname, '..')
const FFMPEG = path.join(ROOT, 'node_modules/ffmpeg-static/ffmpeg')
const SRC = path.join(ROOT, 'public/media/videos/evento-4.mp4')
const OUT_DIR = path.join(ROOT, 'public/media/videos')
const GALLERY = path.join(ROOT, 'public/media/gallery')

const START = '9.5'
const DURATION = '2.15'
/**
 * Vertical 9:16 — tarjeta del hero. No usar transpose: el MP4 ya trae rotación −90°
 * y ffmpeg la aplica al decodificar; un transpose extra deja el turbo “de lado”.
 */
const VF = 'scale=-2:1280,crop=720:1280:(iw-720)/2:(ih-1280)/2,setsar=1'

async function main() {
  try {
    await fs.access(FFMPEG)
  } catch {
    console.error('ffmpeg-static missing. Run: node node_modules/ffmpeg-static/install.js')
    process.exit(1)
  }

  const work = path.join(OUT_DIR, '.boomerang-build')
  await fs.mkdir(work, { recursive: true })
  const forward = path.join(work, 'forward.mp4')
  const reversed = path.join(work, 'reversed.mp4')
  const out = path.join(OUT_DIR, 'hero-boomerang.mp4')
  const posterOut = path.join(GALLERY, 'hero-boomerang-poster.webp')

  execFileSync(
    FFMPEG,
    [
      '-y',
      '-ss',
      START,
      '-i',
      SRC,
      '-t',
      DURATION,
      '-an',
      '-vf',
      VF,
      '-c:v',
      'libx264',
      '-profile:v',
      'high',
      '-pix_fmt',
      'yuv420p',
      '-crf',
      '26',
      '-preset',
      'medium',
      '-movflags',
      '+faststart',
      forward,
    ],
    { stdio: 'inherit' },
  )

  execFileSync(
    FFMPEG,
    [
      '-y',
      '-i',
      forward,
      '-vf',
      'reverse',
      '-an',
      '-c:v',
      'libx264',
      '-profile:v',
      'high',
      '-pix_fmt',
      'yuv420p',
      '-crf',
      '26',
      '-preset',
      'medium',
      forward.replace('forward.mp4', 'reversed.mp4'),
    ],
    { stdio: 'inherit' },
  )

  execFileSync(
    FFMPEG,
    [
      '-y',
      '-i',
      forward,
      '-i',
      reversed,
      '-filter_complex',
      '[0:v][1:v]concat=n=2:v=1:a=0',
      '-an',
      '-c:v',
      'libx264',
      '-profile:v',
      'high',
      '-pix_fmt',
      'yuv420p',
      '-crf',
      '26',
      '-preset',
      'medium',
      '-movflags',
      '+faststart',
      out,
    ],
    { stdio: 'inherit' },
  )

  const posterJpg = path.join(work, 'poster.jpg')
  execFileSync(
    FFMPEG,
    ['-y', '-ss', '0', '-i', out, '-frames:v', '1', '-q:v', '2', '-update', '1', posterJpg],
    { stdio: 'inherit' },
  )

  await sharp(posterJpg)
    .webp({ quality: 82 })
    .toFile(posterOut)

  await fs.rm(work, { recursive: true, force: true })

  const stat = await fs.stat(out)
  console.log(`hero-boomerang.mp4 → ${(stat.size / 1024 / 1024).toFixed(2)} MiB`)
  console.log(`poster → ${path.relative(ROOT, posterOut)}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
