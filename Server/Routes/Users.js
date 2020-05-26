const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const User = require("../Models/User")
users.use(cors())

process.env.SECRET_KEY = "secret"

users.post('/register', (req, res) =>{
    const today = new Date()
    const userData = {
        First_name: req.body.First_name,
        Last_name: req.body.Last_name,
        Email: req.body.Email,
        Mob_number: req.body.Mob_number,
        Password: req.body.Password,
        created : today
    }
    User.findOne({
        Email : req.body.Email 
    })
        .then(user => {
            if(!user) {
                bcrypt.hash(req.body.Password, 10, (err, hash) => {
                    userData.Password = hash
                    User.create(userData)
                        .then(user => {
                            res.json({ status: user.Email + ' registered!' })
                        })
                        .catch( err =>{
                            res.send('error: '+err)
                        })
                })
            } else {
                res.json({ error: "user already exists!!" })
            }
        })
        .catch(err => {
            res.send("error : "+err)
        })
})

users.post("/login", (req, res) => {
    User.findOne({
        Email: req.body.Email
    })
    .then(user => {
        if(user) {
            if(bcrypt.compareSync(req.body.Password, user.Password)) {
                const payLoad = {
                    _id : user._id,
                    First_name: user.First_name,
                    Last_name: user.Last_name,
                    Email: user.Email
                } 
                let token = jwt.sign(payLoad, process.env.SECRET_KEY, {
                    expiresIn : 1440
                })
                res.send(token)
            } else {
                res.json({ error: "User does not exist!!"})
            }
        } else {
            res.json({ error: "User does not exist!!"})
        }
    })  
    .catch( err => {
        res.send("error :"+err)
    })
})

users.get('/profile', (req, res) => {
    var decoded = jst.verify(req.headers['authorization'], process.env.SECRET_KEY)
    User.findOne({
        _id: decoded._id
    })
        .then(user => {
            if(user) {
                res.json(user)
            } else {
                res.send("user does not exist!!")
            }
        })
        .catch( err => {
            res.send("error: "+err)
        })
})


module.exports = users