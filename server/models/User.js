
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    name: { type: String},
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verifyPassword: { type: String, required: false },
    badge: { type: Number, default: 0 },
    karmaRating: { type: Number, default: 0 },
    
});


  

userSchema.pre('save', async function(next) {   // avoid rehashing the password
    //const user = this;
    if (this.isModified('password')) {
        //salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, 12);
        // console.log("this.password \n");
        // console.log(this.password);
    }
    next();
});


userSchema.methods.toJSON = function() {
    const userObject = this.toObject();
    delete userObject.password;
    return userObject;
  };


userSchema.methods.isValidPassword = async function(providedPassword) {
    
    console.log(await bcrypt.compare(providedPassword, this.password));
    return await bcrypt.compare(providedPassword, this.password);
    
};

const User = mongoose.model('User', userSchema);
module.exports = User;