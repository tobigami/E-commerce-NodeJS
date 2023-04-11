'use strict';

const mongoose = require('mongoose');
const connectString = 'mongodb://127.0.0.1/E-commerce';

mongoose
    .connect(connectString)
    .then((_) => console.log('connect DB success'))
    .catch((_) => {
        console.log('connect error');
    });
module.exports = mongoose;
