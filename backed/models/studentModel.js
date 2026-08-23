const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    admissionNumber:{
        type:String,
        required:true,
        unique:true
    },

    yearAdmitted:{
        type:Number,
        required:true
    
    },
    course:{
        type:String,
        required:true,
        enum:["maths","english","chemistry","biology","physics","kiswahili","agriculture","homeScience","cre"],
    },
    status:{
        type:String,
        enum:["Active","Pending","Suspended"],
        default:"Pending"
    }
    
},{timestamps:true});

const Student = mongoose.model("Student",studentSchema);

module.exports=Student;
