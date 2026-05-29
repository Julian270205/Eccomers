const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

// Test connection
prisma.$connect()
  .then(() => console.log('✅ Conexión a MySQL establecida'))
  .catch((err) => {
    console.error('❌ Error conectando a MySQL:', err.message);
    process.exit(1);
  });

module.exports = prisma;
