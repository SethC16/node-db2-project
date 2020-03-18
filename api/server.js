const express = require('express');

const carsRouter = require('../router/carRouter');
const server = express();

server.use(express.json());
server.use('/api/cars', carsRouter);

module.exports = server;