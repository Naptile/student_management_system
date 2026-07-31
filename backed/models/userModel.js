const mongoose = require("mongoose");
const { applyTimestamps } = require("./studentModel");

const userSchema = new mngoose.schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
},{Timestamps:true});

const User = mongoose.model("User",studentSchema);
module.exports = User;