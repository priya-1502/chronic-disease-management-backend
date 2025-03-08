const  express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const { Socket } = require('./utilities/socket')
const http = require('http');

dotenv.config()

//App config
const app = express()
const port = process.env.PORT || 3001
const connection_URL = process.env.DB_CONNECTION_STRING
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

app.use((req,res,next)=>{
    console.log(new Date())
    next()
})

require('./routes/config')(app)

mongoose.connect(connection_URL).then((res)=>console.log("DB Connected")).catch((err)=>console.log(err))

const server = http.createServer(app);

Socket.initiateSocket(server)

//Listener
server.listen(port,()=> console.log(`Listerning on localhost : ${port}`))


app.get('/',(req,res)=> res.status(200).send("Hello Hari World"))


