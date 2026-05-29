require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed...');

  // ── Admin user ─────────────────────────────────────────────
  const adminHash = await bcrypt.hash('Admin2024!', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@jhoanarosales.com' },
    update: {},
    create: {
      name: 'Jhoana Rosales',
      email: 'admin@jhoanarosales.com',
      password: adminHash,
      role: 'admin',
      phone: '3001234567',
      city: 'Cali',
    },
  });
  console.log('✅ Admin creado:', admin.email);

  // ── Demo client ────────────────────────────────────────────
  const clientHash = await bcrypt.hash('Cliente123!', 12);
  await prisma.user.upsert({
    where: { email: 'cliente@demo.com' },
    update: {},
    create: {
      name: 'María García',
      email: 'cliente@demo.com',
      password: clientHash,
      role: 'client',
      phone: '3109876543',
      city: 'Cali',
      loyaltyPoints: 50,
    },
  });
  console.log('✅ Cliente demo creado');

  // ── Products ───────────────────────────────────────────────
  const products = [
    {
      name: 'Blusa Floral Primavera',
      description: 'Blusa de seda con estampado floral delicado. Perfecta para el día a día con un toque elegante. Tela transpirable y de alta calidad.',
      category: 'Blusa',
      basePrice: 85000,
      isFeatured: true,
      slug: 'blusa-floral-primavera',
      imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=90',
      sizes: [
        { size: 'XS', stock: 5 }, { size: 'S', stock: 8 }, { size: 'M', stock: 10 },
        { size: 'L', stock: 6 }, { size: 'XL', stock: 3 },
      ],
    },
    {
      name: 'Vestido Midi Negro Elegante',
      description: 'Vestido midi en crepe negro con escote en V y manga tres cuartos. Ideal para eventos formales e informales. Cierre invisible en la espalda.',
      category: 'Vestido',
      basePrice: 185000,
      isFeatured: true,
      slug: 'vestido-midi-negro-elegante',
      imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=90',
      sizes: [
        { size: 'XS', stock: 2 }, { size: 'S', stock: 5 }, { size: 'M', stock: 7 },
        { size: 'L', stock: 4 }, { size: 'XL', stock: 2 },
      ],
    },
    {
      name: 'Jean Skinny Azul Clásico',
      description: 'Jean skinny de denim premium con lavado clásico. Corte favorecedor que estiliza la figura. 98% algodón, 2% elastano.',
      category: 'Jeans',
      basePrice: 120000,
      isFeatured: true,
      slug: 'jean-skinny-azul-clasico',
      imageUrl: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&q=90',
      sizes: [
        { size: 'XS', stock: 3 }, { size: 'S', stock: 6 }, { size: 'M', stock: 9 },
        { size: 'L', stock: 7 }, { size: 'XL', stock: 4 },
      ],
    },
    {
      name: 'Falda Plisada Rosa Pastel',
      description: 'Falda plisada midi en tonos rosa pastel. Tela fluida que acompaña el movimiento. Cintura elástica para mayor comodidad.',
      category: 'Falda',
      basePrice: 95000,
      isFeatured: false,
      slug: 'falda-plisada-rosa-pastel',
      imageUrl: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&q=85',
      sizes: [
        { size: 'XS', stock: 4 }, { size: 'S', stock: 5 }, { size: 'M', stock: 6 },
        { size: 'L', stock: 3 }, { size: 'XL', stock: 1 },
      ],
    },
    {
      name: 'Camisa Blanca Clásica',
      description: 'Camisa básica blanca de algodón pima. Corte recto con botonadura frontal. Versátil y atemporal, ideal para cualquier ocasión.',
      category: 'Camisa',
      basePrice: 75000,
      isFeatured: false,
      slug: 'camisa-blanca-clasica',
      imageUrl: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=500&q=85',
      sizes: [
        { size: 'XS', stock: 8 }, { size: 'S', stock: 10 }, { size: 'M', stock: 12 },
        { size: 'L', stock: 8 }, { size: 'XL', stock: 5 },
      ],
    },
    {
      name: 'Shorts Denim Verano',
      description: 'Shorts de denim con dobladillo deshilachado para un look casual y fresco. Tiro medio, bolsillos funcionales.',
      category: 'Shorts',
      basePrice: 65000,
      isFeatured: false,
      slug: 'shorts-denim-verano',
      imageUrl: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=500&q=85',
      sizes: [
        { size: 'XS', stock: 6 }, { size: 'S', stock: 8 }, { size: 'M', stock: 7 },
        { size: 'L', stock: 5 }, { size: 'XL', stock: 2 },
      ],
    },
    {
      name: 'Pantalón Palazzo Beige',
      description: 'Pantalón palazzo de tela fluida en tono beige arena. Pierna ancha con caída impecable. Cintura alta elástica.',
      category: 'Pantalones',
      basePrice: 110000,
      isFeatured: true,
      slug: 'pantalon-palazzo-beige',
      imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=85',
      sizes: [
        { size: 'XS', stock: 3 }, { size: 'S', stock: 5 }, { size: 'M', stock: 8 },
        { size: 'L', stock: 6 }, { size: 'XL', stock: 3 },
      ],
    },
    {
      name: 'Enterizo Floral Vacacional',
      description: 'Enterizo tipo jumpsuit con estampado floral vibrante. Escote recto, espalda abierta con lazo. Ideal para vacaciones y eventos diurnos.',
      category: 'Enterizos',
      basePrice: 145000,
      isFeatured: true,
      slug: 'enterizo-floral-vacacional',
      imageUrl: 'https://images.unsplash.com/photo-1559386484-97dfc0e15539?w=500&q=85',
      sizes: [
        { size: 'XS', stock: 2 }, { size: 'S', stock: 4 }, { size: 'M', stock: 5 },
        { size: 'L', stock: 3 }, { size: 'XL', stock: 1 },
      ],
    },
    {
      name: 'Vestido Bohemio Maxi',
      description: 'Vestido maxi con estampado étnico multicolor. Tela ligera ideal para el clima cálido. Escote V con encaje y manga acampanada.',
      category: 'Vestido',
      basePrice: 165000,
      isFeatured: false,
      slug: 'vestido-bohemio-maxi',
      imageUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&q=85',
      sizes: [
        { size: 'S', stock: 3 }, { size: 'M', stock: 5 }, { size: 'L', stock: 4 }, { size: 'XL', stock: 2 },
      ],
    },
    {
      name: 'Blusa Off Shoulder Coral',
      description: 'Blusa off-shoulder en color coral pastel. Manga larga con vuelo. Tela viscosa suave al tacto.',
      category: 'Blusa',
      basePrice: 79000,
      isFeatured: false,
      slug: 'blusa-off-shoulder-coral',
      imageUrl: 'https://images.unsplash.com/photo-1614251056789-2e9edf8fcafe?w=500&q=85',
      sizes: [
        { size: 'XS', stock: 4 }, { size: 'S', stock: 6 }, { size: 'M', stock: 8 },
        { size: 'L', stock: 5 }, { size: 'XL', stock: 2 },
      ],
    },
  ];

  for (const p of products) {
    const { sizes, ...productData } = p;
    const product = await prisma.product.upsert({
      where: { slug: p.slug },
      update: { imageUrl: productData.imageUrl },
      create: {
        ...productData,
        basePrice: productData.basePrice,
        variants: {
          create: sizes.map(s => ({
            size: s.size,
            stock: s.stock,
            sku: `${p.slug.substring(0,10).toUpperCase()}-${s.size}`,
          })),
        },
      },
    });
    console.log(`✅ Producto: ${product.name}`);
  }

  // ── Promotion ──────────────────────────────────────────────
  await prisma.promotion.upsert({
    where: { code: 'BIENVENIDA15' },
    update: {},
    create: {
      name: 'Descuento de Bienvenida 15%',
      code: 'BIENVENIDA15',
      type: 'percentage',
      value: 15,
      minOrderAmount: 50000,
      maxUses: 100,
      startsAt: new Date('2024-01-01'),
      endsAt: new Date('2026-12-31'),
      isActive: true,
      appliesTo: 'all',
    },
  });

  await prisma.promotion.upsert({
    where: { code: 'VERANO20' },
    update: {},
    create: {
      name: 'Verano 2024 - 20% Off',
      code: 'VERANO20',
      type: 'percentage',
      value: 20,
      minOrderAmount: 100000,
      maxUses: 50,
      startsAt: new Date('2024-06-01'),
      endsAt: new Date('2026-08-31'),
      isActive: true,
      appliesTo: 'all',
    },
  });
  console.log('✅ Promociones creadas');

  console.log('\n🌸 Seed completado exitosamente');
  console.log('─────────────────────────────────');
  console.log('👤 Admin: admin@jhoanarosales.com / Admin2024!');
  console.log('👤 Cliente: cliente@demo.com / Cliente123!');
  console.log('🎟️  Cupones: BIENVENIDA15 (15%), VERANO20 (20%)');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
