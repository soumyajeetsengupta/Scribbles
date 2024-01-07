const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Post = require('./models/Post');
const app = express();
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/'});
const fs = require('fs');

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads'))

mongoose.connect('mongodb+srv://sgs2305maddy:wiTgAYXnwWgyXWml@cluster0.b0qlv6j.mongodb.net/?retryWrites=true&w=majority');

app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
    const {originalname,path} = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path+'.'+ext;
    fs.renameSync(path, newPath);

    const {title, summary, content} = req.body;
    const postDoc = await Post.create({
        title,
        summary,
        content,
        cover: newPath,
    });

    res.json(postDoc);
});

app.get('/post', async (req,res) => {
    const posts = await Post.find().sort({createdAt: -1}).limit(20);
    res.json(posts);
})

app.listen(4000);