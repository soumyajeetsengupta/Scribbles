const express = require('express');
const app = express();
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/'})


app.post('/post', uploadMiddleware.single('file'), (req, res) => {
    res.json({file:req.file});
});

app.listen(4000);