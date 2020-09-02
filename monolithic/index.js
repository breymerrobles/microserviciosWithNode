const server = require('./src/app');

//server.listen(process.env.PORT);
server.listen(process.env.PORT, () => {
    console.log(" Aplication running on port: 3000 ");
});