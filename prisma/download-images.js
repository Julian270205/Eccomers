/**
 * download-images.js
 * Descarga imágenes de productos desde Unsplash y las guarda en public/images/products/
 * Luego actualiza la base de datos para usar rutas locales.
 *
 * Uso: node prisma/download-images.js
 */
require('dotenv').config();
const https = require('https');
const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'products');

const products = [
  {
    slug: 'blusa-floral-primavera',
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=90&auto=format&fit=crop',
    file: 'blusa-floral-primavera.jpg',
  },
  {
    slug: 'vestido-midi-negro-elegante',
    url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=90&auto=format&fit=crop',
    file: 'vestido-midi-negro-elegante.jpg',
  },
  {
    slug: 'jean-skinny-azul-clasico',
    url: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=90&auto=format&fit=crop',
    file: 'jean-skinny-azul-clasico.jpg',
  },
  {
    slug: 'falda-plisada-rosa-pastel',
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=90&auto=format&fit=crop',
    file: 'falda-plisada-rosa-pastel.jpg',
  },
  {
    slug: 'camisa-blanca-clasica',
    url: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600&q=90&auto=format&fit=crop',
    file: 'camisa-blanca-clasica.jpg',
  },
  {
    slug: 'shorts-denim-verano',
    url: 'https://images.unsplash.com/photo-1548549557-dbe9946621da?w=600&q=90&auto=format&fit=crop',
    file: 'shorts-denim-verano.jpg',
  },
  {
    slug: 'pantalon-palazzo-beige',
    url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=90&auto=format&fit=crop',
    file: 'pantalon-palazzo-beige.jpg',
  },
  {
    slug: 'enterizo-floral-vacacional',
    url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=90&auto=format&fit=crop',
    file: 'enterizo-floral-vacacional.jpg',
  },
  {
    slug: 'vestido-bohemio-maxi',
    url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=90&auto=format&fit=crop',
    file: 'vestido-bohemio-maxi.jpg',
  },
  {
    slug: 'blusa-off-shoulder-coral',
    url: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=90&auto=format&fit=crop',
    file: 'blusa-off-shoulder-coral.jpg',
  },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const request = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      // Seguir redirecciones (Unsplash redirige a CDN)
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    });
    request.on('error', (err) => { fs.unlinkSync(dest); reject(err); });
  });
}

async function main() {
  // Crear carpeta si no existe
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log('📥 Descargando imágenes de productos...\n');

  let downloaded = 0;
  let failed = 0;

  for (const p of products) {
    const dest = path.join(OUTPUT_DIR, p.file);
    const localPath = `/images/products/${p.file}`;

    process.stdout.write(`  → ${p.slug}... `);
    try {
      await download(p.url, dest);
      const kb = Math.round(fs.statSync(dest).size / 1024);
      console.log(`✅ ${kb}KB`);

      // Actualizar imageUrl en la DB a ruta local
      await prisma.product.update({
        where: { slug: p.slug },
        data: { imageUrl: localPath },
      });
      downloaded++;
    } catch (e) {
      console.log(`❌ ${e.message}`);
      failed++;
    }
  }

  console.log(`\n🌸 Completado: ${downloaded} descargadas, ${failed} fallidas.`);
  if (downloaded > 0) {
    console.log('✔️  Base de datos actualizada con rutas locales (/images/products/...)');
    console.log('    Reinicia el servidor para ver los cambios.');
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
