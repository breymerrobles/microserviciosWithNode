const server = require('./src/app');
server.listen(process.env.PORT, () => {
    console.log(" Cars service running on port:  " + process.env.PORT);
});