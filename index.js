const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
require ('dotenv').config()

const app = express()

app.use(bodyparser.urlencoded ({extended: false}))
app.use(bodyparser.json())

app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'Estas conectado :p'
    })
})

//configuracion de rutas
const authRoutes = require('./routes/auth')

app.use('/api/user', authRoutes )

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`SERVIDOR TRABAJANDO EN EL PUERTO: ${PORT}`)
})