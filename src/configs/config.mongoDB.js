'use strict';

// level 0
// const config = {
//     app: {
//         port: 3000,
//     },
//     db: {
//         host: '127.0.0.1',
//         port: 27017,
//         name: 'db',
//     },
// };

// level 1
const dev = {
    app: {
        port: process.env.APP_PORT || 4000,
    },
    db: {
        host: process.env.DEV_DB_HOST || '127.0.0.1',
        port: process.env.DEV_DB_POST || 27017,
        name: process.env.DEV_DB_NAME || 'dbDeveloper',
    },
};

const pro = {
    app: {
        port: process.env.APP_PORT || 4000,
    },
    db: {
        host: process.env.PRO_DB_HOST || '127.0.0.1',
        port: process.env.PRO_DB_PORT || 27017,
        name: process.env.PRO_DB_NAME || 'dbProduct',
    },
};

const config = { dev, pro };
const evn = process.env.NODE_ENV || 'dev';
module.exports = config[evn];
