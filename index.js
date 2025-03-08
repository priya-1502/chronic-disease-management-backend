const  express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
// import mongoose from 'mongoose'
// import dotenv from 'dotenv'
// import bodyParser from 'body-parser'
// import cors from 'cors'

dotenv.config()

//App config
const app = express()
const port = process.env.PORT || 3001
const connection_URL = process.env.DB_CONNECTION_STRING
app.use(cors())
app.use(bodyParser.json())
app.use((req,res,next)=>{
    console.log(new Date())
    next()
})

require('./routes/config')(app)

mongoose.connect(connection_URL).then((res)=>console.log("DB Connected")).catch((err)=>console.log(err))

//Listener
app.listen(port,()=> console.log(`Listerning on localhost : ${port}`))


app.get('/',(req,res)=> res.status(200).send("Hello Hari World"))


