const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Post = require('./models/post.model')

dotenv.config({ path: '.env' });


const app = express();
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_STRING.replace('<password>', process.env.DB_PASSWORD), {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) return console.log('database connected.');
    console.log(err.message)
})

app.get('/', (req, res, next) => {
    res.send(new Date())
})
app.get('/fake', async (req, res) => {
    const post = await Post.create({ title: 'post 1', content: 'content 1' })

    return res.status(200).json({
        status: 'success',
        data: post
    })
})
app.listen(PORT, () => console.log('server is running on port', PORT))