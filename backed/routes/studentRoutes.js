const express = require("express");
const router = express.Router();
const{
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
    updateStatus,
} = require("../controllers/studentController");

router.post("/students",createStudent);
router.get("/students",getStudents);
router.get("/students/:id",getStudentById);
router.put("/students/:id",updateStudent);
router.put("/students/updateStatus/:id",updateStudent);
router.delete("/students/:id",deleteStudent);

module.exports = router;