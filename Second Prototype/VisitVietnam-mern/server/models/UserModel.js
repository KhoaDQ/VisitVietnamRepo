const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const schema = mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
        },
        Email: {
            type: String,
            unique: true,
            trim: true,
            required: true,
        },
        Password: {
            type: String,
            trim: true,
            required: true,
            minlength: 6,
        },
        Role: {
            type: String,
        }
    },
    { timestamps: true }
);

schema.pre('save', function(next){
    let user = this;
    bcrypt.hash(user.Password, 10, function(error, hash){
        if (error){
            return next(error);
        }else{
            user.Password = hash;
            next();
        }
    })
})

module.exports = { UserModel: mongoose.model("User", schema) };