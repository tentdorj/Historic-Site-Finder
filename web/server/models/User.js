
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    badge: { type: Number, required: true, unique: true },
    karmaRating: { type: Number, default: 0 },
    // comments: [{
    //   description: { type: String, required: true },
    //   date: { type: Date, required: true },
    //   likes: { type: Number, required: true },
    // }]
});
 

const User = mongoose.model('User', userSchema);
module.exports = User;