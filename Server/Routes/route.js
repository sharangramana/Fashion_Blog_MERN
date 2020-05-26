const express = require('express')
const router = express.Router()
const User = require('../Models/User')

//routes and gets all posts
router.get("/", async (req, res) => {
    try {
        const allUserDetails = await User.find();
        res.json(allUserDetails);
    }
    catch (err) {
        res.json({ message: err })
    }
})

//post the data to the database
router.post("/", async (req, res) =>{
    //console.log(req.body)
    const signup = new User({
        First_name : req.body.First_name,
        Last_name : req.body.Last_name,
        Email : req.body.Email,
        Password : req.body.Password,
    })

    try {
    const saveddata = await signup.save()
    res.json(saveddata);
    }
    catch (err) {
        res.json({message: err})
    }
})

// picking the specific post by id
router.get('/:detailsID', async (req, res) => {
    try {
        const signupdetail = await User.findById(req.params.detailsID)
        res.json(signupdetail)
    }
    catch(err) {
        res.json({message: err})
    }
})

//deleting a post by id
router.delete('/:detailsID', async (req, res) => {
    try {
    const removed = await User.remove({ _id : req.params.detailsID })
    res.json(removed)
    }
    catch (err) {
        res.json({message : err})
    }
})

//update a post
router.patch('/:detailsID', async (req, res) => {
    try {
        const updateddetails = await User.updateOne (
            { _id : req.params.detailsID },
            {$set : { Last_name : req.body.Last_name }}
        )
        res.json(updateddetails)
    }
    catch(err) {
        res.json({message : err})
    }
})  

module.exports = router 

