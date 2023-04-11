'use strict';
const {
    db: { host, name, port },
} = require('../configs/config.mongoDB');
const mongoose = require('mongoose');
const connectString = `mongodb://${host}:${port}/${name}`;
console.log(connectString);

class Database {
    constructor() {
        this.connect();
    }

    connect(type = 'mongo') {
        // dev
        if (1 === 1) {
            mongoose.set('debug', true);
            mongoose.set('debug', { color: true });
        }

        mongoose
            .connect(connectString)
            .then((_) => console.log('connect DB success Pro'))
            .catch((_) => {
                console.log('connect error');
            });
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const instanceMongoDB = Database.getInstance();
module.exports = instanceMongoDB;
