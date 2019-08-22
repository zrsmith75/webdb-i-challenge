const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());


server.get('/', (req, res) => {

})

server.get('/:id', (req, res) => {

})

server.post('/', (req, res) => {

})

server.put('/:id', (req, res) => {

})

server.delete('/:id'. (req, res) => {

})



module.exports = server;