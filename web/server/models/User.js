
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    name: { type: String },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    badge: { type: Number, default: 0 },
    karmaRating: { type: Number, default: 0 },
    // comments: [{
    //   description: { type: String, required: true },
    //   date: { type: Date, required: true },
    //   likes: { type: Number, required: true },
    // }]
});




userSchema.methods.toJSON = function() {
    const userObject = this.toObject();
    delete userObject.password;
    return userObject;
  };
  

userSchema.pre('save', async function(next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 12);
    }
    next();
});

userSchema.methods.isValidPassword = async function(providedPassword) {
    try {
        console.log("gddf");
        return await bcrypt.compare(providedPassword, this.password);
    } catch (error) {
        throw new Error(error);
    }
};

const User = mongoose.model('User', userSchema);
module.exports = User;