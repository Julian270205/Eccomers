/**
 * download-site-images.js
 * Descarga TODAS las imágenes del sitio (hero, categorías, lookbook, banners)
 * y las guarda en public/images/site/
 *
 * Uso: node prisma/download-site-images.js
 */
const https = require('https');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images', 'site');

const siteImages = [
  // Hero principal
  {
    file: 'hero-main.jpg',
    url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=90&auto=format&fit=crop',
    desc: 'Hero principal',
  },
  // Categorías
  {
    file: 'cat-vestido.jpg',
    url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=90&auto=format&fit=crop',
    desc: 'Categoría Vestidos',
  },
  {
    file: 'cat-blusa.jpg',
    url: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&q=90&auto=format&fit=crop',
    desc: 'Categoría Blusas',
  },
  {
    file: 'cat-jeans.jpg',
    url: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=90&auto=format&fit=crop',
    desc: 'Categoría Jeans',
  },
  {
    file: 'cat-enterizos.jpg',
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&q=90&auto=format&fit=crop',
    desc: 'Categoría Enterizos',
  },
  // Lookbook
  {
    file: 'look-1.jpg',
    url: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=700&q=90&auto=format&fit=crop',
    desc: 'Lookbook 1 (Vestidos)',
  },
  {
    file: 'look-2.jpg',
    url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=900&q=90&auto=format&fit=crop',
    desc: 'Lookbook 2 (Blusas & Tops)',
  },
  {
    file: 'look-3.jpg',
    url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=450&q=90&auto=format&fit=crop',
    desc: 'Lookbook 3 (Jeans)',
  },
  {
    file: 'look-4.jpg',
    url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=450&q=90&auto=format&fit=crop',
    desc: 'Lookbook 4 (Enterizos)',
  },
  // Banners de colecciones
  {
    file: 'banner-vestidos.jpg',
    url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=90&auto=format&fit=crop',
    desc: 'Banner Vestidos de Temporada',
  },
  {
    file: 'banner-blusas.jpg',
    url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=90&auto=format&fit=crop',
    desc: 'Banner Blusas Elegantes',
  },
  {
    file: 'banner-enterizos.jpg',
    url: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=90&auto=format&fit=crop',
    desc: 'Banner Enterizos & Jumpsuits',
  },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const request = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
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
    request.on('error', (err) => { try { fs.unlinkSync(dest); } catch(_) {} reject(err); });
  });
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log('📥 Descargando imágenes del sitio...\n');
  let ok = 0, fail = 0;

  for (const img of siteImages) {
    const dest = path.join(OUTPUT_DIR, img.file);
    process.stdout.write(`  ${img.desc}... `);
    try {
      await download(img.url, dest);
      const kb = Math.round(fs.statSync(dest).size / 1024);
      console.log(`✅ ${kb}KB`);
      ok++;
    } catch (e) {
      console.log(`❌ ${e.message}`);
      fail++;
    }
  }

  console.log(`\n🌸 Completado: ${ok} descargadas, ${fail} fallidas.`);
  if (ok > 0) console.log('    Reinicia el servidor para ver los cambios.');
}

main().catch(console.error);
