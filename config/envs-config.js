'use strict';

require('dotenv').config();

const all = {
    basePath: '/cms/v1',
    env: process.env.ENVIRONMENT || 'development',
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 5005,

    databaseUrl: process.env.DATABASE_URL
};

module.exports = all;