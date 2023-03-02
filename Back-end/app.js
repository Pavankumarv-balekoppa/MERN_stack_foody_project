
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 4000


const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

//!require database models
const User = require('./models/users')
const Post = require('./models/posts')

//!middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors()) // cross origin resource sharing

//! data base connetvity
const dbURL = "mongodb://localhost:27017/foodie"
mongoose.connect(dbURL).then(() => {
    console.log("Connected to database");
})

//!posting the data from the from page
app.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, userdata) => {
        if (userdata) {
            if (req.body.password == userdata.password) {
                res.send({ message: 'login successfull' })
            } else {
                res.send({ message: 'login failed' })
            }
        } else {
            res.send({ message: 'no account seems not match with your credentials' })
        }
    })
})

app.post('/signup', async (req, res) => {
    User.findOne({ email: req.body.email }, (err, userData) => {
        if (userData) {
            res.send({ message: "Seems like you already have an account with this email address" })
        } else {
            const data = new User({
                name: req.body.name,
                email: req.body.email,
                number: req.body.number,
                password: req.body.password
            })
            data.save(() => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "User registered successfully" })
                }
            })
        }
    })
})

app.get('/posts', async (req,res)=>{
    try {
        const posts= await Post.find()
        res.send(posts)
    } catch (error) {
        console.log(error);
    }
})

app.get('/posts/:id', async (req,res)=>{
    const {id}=req.params
    try {
        const singleposts= await Post.findById(id)
        res.send(singleposts)
    } catch (error) {
        console.log(error);
    }
})

app.post('/add-posts', async (req, res) => {
    let postData = new Post({
        author: req.body.author,
        title: req.body.title,
        summary: req.body.summary,
        image: req.body.image,
        location: req.body.location
    })
    try {
        await postData.save()
        res.send({ message: "Post added sussefuly" })
    }
    catch (err) {
        res.send({ messages: "Faild to poste" })
    }
})
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})