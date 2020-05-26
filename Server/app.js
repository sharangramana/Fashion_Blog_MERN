// all the imports
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")
require('dotenv/config')
const bodyParser = require('body-parser')
const Users = require('./Routes/Users') //importing routes

//

app.use(cors())      //cross platform suuport
app.use(bodyParser.json())     // middleware to parse the reply to json

// all middleware
app.use('/users', Users)


app.listen(5000)  //listen

app.get("/users", (req, res) => {
    res.send("We are on signup page")
})

// connecting to db
mongoose
    .connect(
            process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            })
            .then(()=> console.log("DB is connected!!"))
            .catch(err =>console.log("Refused to connect...", err))   


