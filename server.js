require('dotenv').config()
const express = require('express')
const cors = require('cors')
const notFound = require('./middlewares/notFound-middleware')
const errorMiddleware = require('./middlewares/error-middleware')

const app = express()

app.use(cors())
app.use(express.json())

// service


// notFound
app.use( notFound )

// error
app.use(errorMiddleware)

let port = process.env.PORT || 8000
app.listen(port, ()=> console.log('Server on Port :', port))
