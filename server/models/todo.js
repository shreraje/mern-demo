const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    //setup properties for a Todo
    text: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;