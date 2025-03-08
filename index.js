import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

//App config
const app = express()
const port = process.env.PORT || 3001
const connection_URL = process.env.DB_CONNECTION_STRING


mongoose.connect(connection_URL).then((res)=>console.log("DB Connected")).catch((err)=>console.log(err))

//Listener
app.listen(port,()=> console.log(`Listerning on localhost : ${port}`))


app.get('/',(req,res)=> res.status(200).send("Hello Hari World"))


