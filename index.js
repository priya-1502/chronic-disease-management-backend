import express from 'express'

//App config
const app = express()
const port = process.env.PORT || 3001
// const connection_URL = 'mongodb+srv://admin:hFD58CRomLtUonOK@cluster0.6xtbqnw.mongodb.net/?retryWrites=true&w=majority'

//Listener
app.listen(port,()=> console.log(`Listerning on localhost : ${port}`))


app.get('/',(req,res)=> res.status(200).send("Hello Hari World"));


