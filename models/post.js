var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: 'Title cannot be blank!'
    }, 
    
    body: {
        type: String,
        required: 'Body cannot be blank!'
    }, 
    
    
    mood: {
        type: String,
        required: 'Mood cannot be blank!'
    }, 
    
    
    date: {
        type: Date,
        default: Date.now
    }
    
})

var Post = mongoose.model('Post', postSchema)

module.exports = Post;