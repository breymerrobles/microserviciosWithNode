const express = require('express');
const app = express();

const response = {
    data: [],
    service: 'Book service',
    architecture: 'Microservices'
};
const logger = (message) => {
    console.log(`[Book service]: ${message}`);
}
app.use((req, res, next) => {
    response.data = [];
    next();
});

app.get('/api/v2/books', (req, res, next) => {
    response.data = ['VS Code expert', 'Node js bible', 'Java dummy', '.net code expert'];
    logger('Get books data...');
    return res.send(response);
});


module.exports = app;