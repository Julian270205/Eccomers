const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const sessionStore = new MySQLStore({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'jhoana_boutique',
  createDatabaseTable: true,
  schema: {
    tableName: 'sessions',
    columnNames: {
      session_id: 'session_id',
      expires: 'expires',
      data: 'data',
    },
  },
});

const sessionConfig = {
  key: 'jhoana.sid',
  secret: process.env.SESSION_SECRET || 'fallback_dev_secret_change_in_prod',
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: parseInt(process.env.SESSION_MAX_AGE) || 86400000, // 24h
    sameSite: 'lax',
  },
};

module.exports = { sessionConfig, sessionStore };
