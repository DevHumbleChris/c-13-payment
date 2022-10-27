require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mainRoute = require('./routes')

const app = express()
const PORT = process.env.PORT

// Middlewares.
app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/', mainRoute)

app.listen(PORT, () => {
    console.log(`Server up and running at PORT:${PORT}`)
})

module.exports = {
    app
}
