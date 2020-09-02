const express = require('express');
const app = express();

const response = {
    data: [],
    service: 'Monolitihic service',
    architecture: 'Monolithic'
};
app.use((req, res, next) => {
    response.data = [];
    next();
});

app.get('/api/v1/users', (req, res, next) => {
    response.data = ['Gian', 'Marcela', 'Breymer', 'Emiliano'];
    return res.send(response);
});

app.get('/api/v1/books', (req, res, next) => {
    response.data = ['VS Code dummy', 'Node js', 'Java code', '.net code'];
    return res.send(response);
});

app.get('/api/v1/cars', (req, res, next) => {
    response.data = ['Ferrari', 'Renault', 'Audi', 'Mercedes'];
    return res.send(response);
});
module.exports = app;