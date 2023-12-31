const express = require('express');
const bikemen = require('./dataset/bikemen');
const heroSliderImages = require('./dataset/heroSliderImages');
const notifications = require('./dataset/notifications');
const pricelist = require('./dataset/pricelist');
const faqs = require('./dataset/faqs');
const cors = require('cors')

const server = express();
server.use(cors({
    origin: '*',
    methods: ['GET']
}));

const HOST = 'localhost'
const PORT = process.env.PORT || 8888;

server.get('/', (req, res) => {
    res.send('Welcome to the Directoride app Server')
})

server.get('/riders', (req, res) => {
    res.status(200).json(bikemen)
})

server.get('/hero-slides', (req, res) => {
    res.status(200).json(heroSliderImages)
}) 

server.get('/notifications', (req, res) => {
    res.status(200).json(notifications)
})

server.get('/pricelist', (req, res) => {
    res.status(200).json(pricelist)
})

server.get('/faqs', (req, res) => {
    res.status(200).send(faqs)
})

server.listen(PORT, () => console.log(`server Running at: ${HOST}:${PORT}`));