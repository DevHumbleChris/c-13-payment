const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    accessToken: {
        type: String,
        required: true
    },
    displayName: {
        type: String
    },
    email: {
        type: String
    },
    uid: {
        type: String,
        required: true
    },
    transactionDetails: {
        type: String
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)
