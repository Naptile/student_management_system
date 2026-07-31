const mongoose = require("mongoose");
const Student = require("./models/studentModel")
const dotenv = require("dotenv");
const studentRoutes = require("./routes/studentRoutes");
dotenv.config();
const cors = require("cors");
const connectDB = require("./config/db");

const express = require("express");
const app = express();
connectDB();
app.use(express.json());
app.use(cors());

app.get("/",async(req,res)=>{
    try {
      const students = await Student.find();
      res.status(200).json(students);
    } catch (error) {
      return res.status(500).json({error:error.message})
    }
});

app.use("/api",studentRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`server running on http://localhost:${PORT}`));

