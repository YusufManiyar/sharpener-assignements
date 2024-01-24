
const http = require('http');

const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('In this middleware')
    next()
})

app.use((req, res, next) => {
    console.log('In this another middleware')
    res.send('<h1> Hello from Express</h1>')
    next()
})

const server = http.createServer(app);

server.listen(4000);