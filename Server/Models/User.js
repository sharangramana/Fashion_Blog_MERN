const mongoose = require('mongoose')

const SignupSchema = ({
    First_name: {
        type: String,
        required: true
    },
    Last_name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Mob_number: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },

})

module.exports = mongoose.model("users", SignupSchema)