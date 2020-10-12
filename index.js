const express = require('express')
const app = express()

const port = 3055

const configureStore = require('./config/database')
configureStore()

const useragent = require('express-useragent')
app.use(useragent.express())
app.use(express.json())

const routes = require('./config/routes')
app.use('/',routes)

app.listen(port,()=>{
    console.log('listening to port', port)
})
