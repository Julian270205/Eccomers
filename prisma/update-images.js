/**
 * update-images.js
 * Actualiza las URLs de imagen de todos los productos con fotos reales tipo e-commerce.
 * Uso: node prisma/update-images.js
 */
require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const productImages = [
  {
    slug: 'blusa-floral-primavera',
    // Blusa floral colorida, modelo frontal, fondo neutro
    imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=90',
  },
  {
    slug: 'vestido-midi-negro-elegante',
    // Vestido negro midi elegante, pose editorial limpia
    imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=90',
  },
  {
    slug: 'jean-skinny-azul-clasico',
    // Jean skinny azul clásico, modelo de cuerpo completo
    imageUrl: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&q=90',
  },
  {
    slug: 'falda-plisada-rosa-pastel',
    // Falda plisada rosa pastel, fondo claro
    imageUrl: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=90',
  },
  {
    slug: 'camisa-blanca-clasica',
    // Camisa blanca clásica, look minimalista
    imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=90',
  },
  {
    slug: 'shorts-denim-verano',
    // Shorts denim verano, estilo casual fresco
    imageUrl: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=600&q=90',
  },
  {
    slug: 'pantalon-palazzo-beige',
    // Pantalón palazzo beige, caída fluida, cuerpo completo
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=90',
  },
  {
    slug: 'enterizo-floral-vacacional',
    // Enterizo jumpsuit floral, pose veraniega
    imageUrl: 'https://images.unsplash.com/photo-1559386484-97dfc0e15539?w=600&q=90',
  },
  {
    slug: 'vestido-bohemio-maxi',
    // Vestido bohemio maxi, estampado étnico
    imageUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=90',
  },
  {
    slug: 'blusa-off-shoulder-coral',
    // Blusa off-shoulder, escote pronunciado, color cálido
    imageUrl: 'https://images.unsplash.com/photo-1614251056789-2e9edf8fcafe?w=600&q=90',
  },
];

async function main() {
  console.log('🖼️  Actualizando imágenes de productos...\n');
  let updated = 0;
  let skipped = 0;

  for (const { slug, imageUrl } of productImages) {
    try {
      await prisma.product.update({
        where: { slug },
        data: { imageUrl },
      });
      console.log(`✅ ${slug}`);
      updated++;
    } catch (e) {
      console.log(`⚠️  No encontrado: ${slug}`);
      skipped++;
    }
  }

  console.log(`\n🌸 Listo: ${updated} actualizados, ${skipped} no encontrados.`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
