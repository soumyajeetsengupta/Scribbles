const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Post = require('./models/Post');
const app = express();
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/'});
const fs = require('fs');

app.use(cors({
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect('mongodb+srv://sgs2305maddy:wiTgAYXnwWgyXWml@cluster0.b0qlv6j.mongodb.net/?retryWrites=true&w=majority');

app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
    const {originalname,path} = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path+'.'+ext;
    fs.renameSync(path, newPath);

    const {title, summary, category, tags, content} = req.body;
    const postDoc = await Post.create({
        title,
        summary,
        category,
        tags,
        content,
        cover: newPath,
    });

    res.json(postDoc);
});

app.get('/post', async (req,res) => {
    const posts = await Post.find().sort({createdAt: -1}).limit(20);
    res.json(posts);
});

app.get('/post/:id', async (req, res) => {
    const {id} = req.params;
    const postDoc = await Post.findById(id);
    res.json(postDoc);
});

app.put('/post', uploadMiddleware.single('file'), async(req, res) => {
    let newPath = null;
    if(req.file) {
        const {originalname,path} = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        newPath = path+'.'+ext;
        fs.renameSync(path, newPath);
    }
    const {id, title, summary, category, tags, content} = req.body;
    const postDoc = await Post.findById(id);

    postDoc.title = title;
    postDoc.summary = summary;
    postDoc.category = category;
    postDoc.tags = tags;
    postDoc.content = content;
    postDoc.cover = newPath ? newPath : postDoc.cover;

    await postDoc.save();

    res.json(postDoc);
});

app.listen(4000);
