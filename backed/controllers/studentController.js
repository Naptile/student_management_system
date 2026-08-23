const mongoose = require("mongoose");
const Student = require("../models/studentModel");

exports.getStudents = async(req,res)=>{
    try {
        const students = await Student.find();
        res.status(200).json(students)
    } catch (error) {
        res.status(500).json({error:error.message});
    }

}

exports.updateStatus = async(req,res)=>{
    try {
        const student = await Student.findById(req.params.id);
        status= student.status;
        if (status == "Pending"){
            status="Active"
        }else status ="Pending"

        await student.save();
        res.status(200).json({
            alert:"Status Updated Successfully🎉🎉",
            status
        })

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

exports.getStudentById = async(req,res) =>{
    try{
        const student = await Student.findById(req.params.id);
        if(!student){
           return res.status(404).json("Error Student not found!!");
        }
        res.status(200).json(student);
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

exports.createStudent = async(req,res) =>{
 try {
        const{name,email,admissionNumber,course,yearAdmitted} = req.body;
        const student = new Student({name,email,admissionNumber,course,yearAdmitted});
        const studentExists = await Student.findOne({email});
        if(studentExists){
            return res.status(400).json({
                message:"Student alreadt exists"});
        }
        await student.save();
        res.status(201).json({
            message:"Student Created successfull!!",
            student
        });
    } catch (error) {
        res.status(500).json({
            error:error.message});
    }
}

exports.updateStudent = async(req,res) =>{
    try{
        const{name,email,course,} = req.body;
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        if (!updatedStudent) {
            return res.status(404).json({
                 message: "Student not found"
    });
}
        
        res.status(200).json("Student updated successfully!!");
    }catch(error){
        return res.status(404).json("Student not found")
    }
};

exports.deleteStudent = async(req,res) =>{

    try{
        const{id}= req.params;
        const deletedStudent = await Student.findByIdAndDelete(id);
        res.json("Student Deleted Successfully")

        if(!deletedStudent){
            return res.status(400).json("Student not found")
        }
    }catch(error){
        res.status(500).json({error:error.message})
    }
};
