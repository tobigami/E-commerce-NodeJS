const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const app = express();

// init middleware
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
// init db

// init routes
app.get('/', (req, res, next) => {
    const text = 'how are you ?';
    return res.status(200).json({
        message: 'hello 1123',
        text: text.repeat(1000),
    });
});

// handling error

module.exports = app;
