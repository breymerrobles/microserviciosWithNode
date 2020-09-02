const express = require('express');
const app = express();

const response = {
    data: [],
    service: 'User service',
    architecture: 'Microservices'
};
const logger = (message) => {
    console.log(`[User service]: ${message}`);
}
app.use((req, res, next) => {
    response.data = [];
    next();
});

app.get('/api/v2/users', (req, res, next) => {
    response.data = ['Gian Franco', 'Marcela ', 'Breymer Yesit ', 'Emiliano Yesid'];
    logger('Get user data...');
    return res.send(response);
});


module.exports = app;