import axios from "axios"
import api from "../services/api" 
import { useState,useEffect } from "react"
import StudentsTable from "../components/StudentsTable";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import StudentsForm from "../components/StudentsForm";

export default function Home(){
    const[students,setStudents] = useState([]);
    const[editingStudent,setEditingStudent] = useState(null);
    const[loading,setLoading] = useState(false);
    const[search,setSearch] = useState("");

//     const searchTerm = search.toLowerCase();
//     const filteredStudents = students.filter((student) =>
//     student.name.toLowerCase().includes(searchTerm) ||
//     student.email.toLowerCase().includes(searchTerm) ||
//     student.admissionNumber.toLowerCase().includes(searchTerm) ||
//     student.course.toLowerCase().includes(searchTerm) ||
//     
// student.yearAdmitted.toString().includes(search)
// );
        const filteredStudents = students.filter((student) => {

        return [
            student.name,
            student.email,
            student.admissionNumber,
            student.course,
            student.yearAdmitted.toString()
        ].some((field) =>
            field.toLowerCase().includes(search.toLowerCase())
        );

    });
    const fetchStudents = async() =>{  
        setLoading(true)  
        try {            
            const response = await api.get("/students")
            setStudents(response.data)
            
              } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }        
        };


        useEffect(()=>{
            fetchStudents();
        },[]);



        const handleDelete = async(id) =>{
            const confirmDelete = window.confirm("Are you sure you want to delete this student?");
            if (!confirmDelete) {
                return;                
                 
            }
                try{
                    await api.delete(`/students/${id}`)
                    setStudents((prevStudents) =>
                    prevStudents.filter(
                        (student) => student._id !== id
                    )
                );

                 alert("Student deleted successfully!");

                }catch(error){
                    alert(error)
                }
            }
                       
    return(
        <>
        <Navbar setSearch={setSearch} search={search}/>
        <StudentsForm fetchStudents={fetchStudents} 
        editingStudent={editingStudent}
        setEditingStudent={setEditingStudent}
        />
        <StudentsTable students={filteredStudents} handleDelete={handleDelete} setEditingStudent={setEditingStudent} loading={loading}/>
        <Footer />
        </>
    )
    
} 