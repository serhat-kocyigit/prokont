if (!process.env.PROKONT_ADMIN_USER || !process.env.PROKONT_ADMIN_PASSWORD) {
  throw Error('Set PROKONT_ADMIN_USER and PROKONT_ADMIN_PASSWORD in .env before starting production.');
}

process.env.NODE_ENV = 'production';
require('./server.js');
