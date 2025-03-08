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
const port = process.env.PORT || 3000
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

const server = http.createServer(app);

require('./routes/config')(app)

Socket.initiateSocket(server)

mongoose.connect(process.env.DB_CONNECTION_STRING).then((res)=>console.log("DB Connected")).catch((err)=>console.log(err))

server.listen(port,()=> console.log(`Listerning on localhost : ${port}`))

app.get('/',(req,res)=> res.status(200).send("Hello World"))


