require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))

app.use(express.json())

const rout = require('./routes/time')
app.use('/time', rout)

app.listen(3000, () => console.log('Server Started'))