const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'please fill out this field']
    },
    content: {
        type: String,
        required: [true, 'please fill out this field']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', postSchema)