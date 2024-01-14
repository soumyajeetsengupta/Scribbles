const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const PostSchema = new Schema({
    title:String,
    summary:String,
    category:String,
    tags:String,
    content:String,
    cover:String, 
    views:Number,
}, {
    timestamps: true,
});

const PostModel = model('Post', PostSchema);
module.exports = PostModel;