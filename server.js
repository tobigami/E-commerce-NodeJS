const app = require('./src/app');

const PORT = 4000;

const server = app.listen(PORT, () => {
    console.log('Server is running....');
});

process.on('SIGINT', () => {
    server.close(() => console.log('server is close'));
});
