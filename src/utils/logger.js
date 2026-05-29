const morgan = require('morgan');

const morganFormat = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';
const httpLogger = morgan(morganFormat);

const logger = {
  info: (...args) => console.log('[INFO]', ...args),
  warn: (...args) => console.warn('[WARN]', ...args),
  error: (...args) => console.error('[ERROR]', ...args),
};

module.exports = { httpLogger, logger };
