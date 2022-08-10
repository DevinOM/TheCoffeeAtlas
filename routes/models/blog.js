const mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    message: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Blog', blogSchema);