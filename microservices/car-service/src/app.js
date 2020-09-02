const express = require('express');
const app = express();

const response = {
    data: [],
    service: 'Car service',
    architecture: 'Microservices'
};
const logger = (message) => {
    console.log(`[Car service]: ${message}`);
}
app.use((req, res, next) => {
    response.data = [];
    next();
});

app.get('/api/v2/cars', (req, res, next) => {
    response.data = ['Ferrari 2020', 'Renault Logan', 'Audi A30', 'Mercedes benz'];
    logger('Get car data...');
    return res.send(response);
});

module.exports = app;