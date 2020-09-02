const server = require('./src/app');
server.listen(process.env.PORT, () => {
    console.log(" Car service running on port:  " + process.env.PORT);
});