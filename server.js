require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🌸 Jhoana Rosales Boutique corriendo en http://localhost:${PORT}`);
  console.log(`📊 Panel admin: http://localhost:${PORT}/admin`);
  console.log(`🌍 Entorno: ${process.env.NODE_ENV || 'development'}`);
});
