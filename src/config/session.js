const session = require('express-session');

// En producción (Vercel serverless) usamos MemoryStore para evitar
// que una conexión MySQL fallida mate el proceso.
// Con Fluid Compute habilitado en Vercel, las instancias se reutilizan
// y las sesiones persisten entre requests.
let store = undefined; // undefined → express-session usa MemoryStore por defecto

if (process.env.NODE_ENV !== 'production') {
  try {
    const MySQLStore = require('express-mysql-session')(session);
    store = new MySQLStore({
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'jhoana_boutique',
      createDatabaseTable: true,
      connectionLimit: 2,
      connectTimeout: 5000,
      acquireTimeout: 5000,
      schema: {
        tableName: 'sessions',
        columnNames: { session_id: 'session_id', expires: 'expires', data: 'data' },
      },
    });
    store.on('error', (err) => console.error('❌ Session store error:', err.message));
  } catch (e) {
    console.warn('⚠️ MySQL session store no disponible, usando MemoryStore:', e.message);
  }
}

const sessionConfig = {
  key: 'jhoana.sid',
  secret: process.env.SESSION_SECRET || 'fallback_dev_secret_change_in_prod',
  store, // undefined en producción = MemoryStore (no crashea)
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: parseInt(process.env.SESSION_MAX_AGE) || 86400000,
    sameSite: 'lax',
  },
};

module.exports = { sessionConfig };
