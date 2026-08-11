import api from "../services/api" 
import { useState,useEffect } from "react"
import StudentsTable from "../components/StudentsTable";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import StudentsForm from "../components/StudentsForm";
import Dashboard from "../components/Dashboard";
import { FaUserGraduate } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import StatCard from "../components/StatCard";
import { FaCalendarAlt } from "react-icons/fa";
import CourseCharts from "../components/CourseCharts";
import { toast } from "react-toastify";
import Pagination from "../components/Pagination";

export default function Home(){
    const[students,setStudents] = useState([]);
    const[editingStudent,setEditingStudent] = useState(null);
    const[loading,setLoading] = useState(false);
    const[search,setSearch] = useState("");

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

//     const courses = [
//     new Set(
//         students.map((student) => student.course)
//     )
// ];


    const fetchStudents = async() =>{  
        setLoading(true)  
        try {            
            const response = await api.get("/students")
            setStudents(response.data)
            
              } catch (error) {
                toast.error(error.response?.data?.error || "Failed to fetch students")
        }finally{
            setLoading(false)
        }        
        };

        useEffect(()=>{
            fetchStudents();
        },[]);

        // DELETE STUDENT
        const handleDelete = async(id) =>{
            const confirmDelete = window.confirm("Are you sure you want to delete this student?");
            if (!confirmDelete)return;               
                try{
                    await api.delete(`/students/${id}`)
                    setStudents((prevStudents) =>
                    prevStudents.filter(
                        (student) => student._id !== id
                    )
                );

                 toast.success("Student deleted successfully!");

                }catch(error){
                    toast.error(error.response?.data?.error || "Something Went Wrong")
                }
            };

            const totalStudents = students.length;

            const totalUnits = new Set(students.map((student)=>student.course)).size;        

            const totalCsStudents = students.reduce((acc,student)=>{
                if(student.course==="CS"){
                    return acc+=1
                }
                return acc;
                    
            },0);

            const totalYears = students.reduce((acc,student)=>acc+=student.yearAdmitted,0);
            const averageYears =totalYears>0 ? Math.round(totalYears/totalStudents) :0
            
            //pagination
            const[currentPage,setCurrentPage] = useState(1);
            const studentsPerPage = 5;
            const indexOfLastStudent = currentPage*studentsPerPage;
            const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
            const currentStudents = filteredStudents.slice(
                indexOfFirstStudent,
                indexOfLastStudent
            )

    return(
        <div className="min-h-screen bg-slate-50 ">
            <Navbar search={search} setSearch={setSearch} />

            <div className="mb-6">  
                <h1 className="text-2xl sm:text-3xl font-bold text-center">
                    Student Dashboard
                </h1>

                <p className="text-gray-500 mt-1 text-center mb-2">
                    Manage and monitor your students
                </p>
              
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2  lg:grid-cols-4  gap-4 px-25">
                    <StatCard icon={<FaUserGraduate/>} messsage={"Total Students"} value={totalStudents}/>
                    <StatCard icon={<MdMenuBook/>} messsage={"Total Courses"} value={totalUnits}/>
                    <StatCard icon={<MdMenuBook/>} messsage={"Total CS students"} value={totalCsStudents}/>
                    <StatCard icon={<FaCalendarAlt className="text-purple-500"/>} messsage={"Averange Years"} value={averageYears}/>
                </div> 
                <div className="flex flex-col md:flex-row gap-3 m-4 items-center  w-full ">
                     <div className="overflow-x-auto "><CourseCharts students={students}  /></div>
                      <StudentsForm fetchStudents={fetchStudents} editingStudent={editingStudent}  setEditingStudent={setEditingStudent} loading={loading} setLoading={setLoading}  /> 
                    
                 </div>                   
                   
                                         
                                                       
            </div>

            
            <StudentsTable students={currentStudents} handleDelete={handleDelete} setEditingStudent={setEditingStudent} loading={loading} search={search}/>            
            <Pagination 
            totalStudents={filteredStudents.length}
            studentsPerPage={studentsPerPage}
            currentPage={currentPage}
            search={search}
            setCurrentPage={setCurrentPage}
            />
            <Footer />
        </div>
    )
    
} 

