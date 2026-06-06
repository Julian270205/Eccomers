const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

// Test connection — en serverless no hacemos process.exit para no matar la función
prisma.$connect()
  .then(() => console.log('✅ Conexión a MySQL establecida'))
  .catch((err) => {
    console.error('❌ Error conectando a MySQL:', err.message);
    // No process.exit en producción: dejar que cada request falle individualmente
    if (process.env.NODE_ENV !== 'production') process.exit(1);
  });

module.exports = prisma;
