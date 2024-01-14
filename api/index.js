const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Post = require('./models/Post');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/'});
const fs = require('fs');
const app = express();

app.use(cors());

app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect('mongodb+srv://sgs2305maddy:wiTgAYXnwWgyXWml@cluster0.b0qlv6j.mongodb.net/?retryWrites=true&w=majority');

app.post('/post', async (req, res) => {
    /*const {comments} = req.body;
    const postDoc = await Post.create({
        comments,
    });
    console.log(comments);
    res.json(comments);*/
});

app.get('/post', async (req,res) => {
    const posts = await Post.find().sort({createdAt: -1}).limit(20);
    res.json(posts);
});

app.get('/post/:id', async (req, res) => {
    const {id} = req.params;
    const postDoc = await Post.findById(id);
    postDoc.views = 1 + postDoc.views;
    await postDoc.save();
    res.json(postDoc);
});

app.put('/post', async(req, res) => {
    /*const {comments} = req.body;
    const postDoc = await Post.findById(id);
    postDoc.comments = comments;
    await postDoc.save();
    res.json(req.body);*/
});

app.listen(4000);
