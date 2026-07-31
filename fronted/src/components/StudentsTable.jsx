import {useState} from "react";
import NoStudentFound from "./NoStudentsFound";
import Loading from "./LoadingSpinner";

export default function StudentsTable({students, handleDelete,editingStudent,setEditingStudent,loading}){
       if (loading) {
                return (
                <Loading/>            
                 )
                };

    
    if (students.length === 0) {
                       return (
                        <NoStudentFound/>                   
                       );
                   }
    return(
    
        <div className="overflow-x-auto">
            <table className="p-6  border-spacing-2  w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-200  ">
                    <tr >
                        
                        <th className="p-3 text-left">Name</th>
                        <th className="p-3 text-left">Email</th>
                        <th className="p-3 text-left">Admission Number</th>
                        <th className="p-3 text-left">Course</th>
                        <th className="p-3 text-left">Year Admitted</th>
                        <th className="p-3 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student)=>(
                       
                        <tr key={student._id}
                        className="hover:bg-gray-100 transition border duration-300 "
                        >                    
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.admissionNumber}</td>  
                            <td>{student.course}</td>
                            <td>{student.yearAdmitted}</td> 
                            <td>
                            <div className="flex gap-2 ">
                                <button className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition mb-2 mt-2"
                                onClick={() => setEditingStudent(student)}
                                 >Edit
                               </button>
                                <button 
                                onClick={(e)=>{
                                    e.preventDefault();
                                    handleDelete(student._id)
                                }}
                                className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition  mb-2 mt-2 text-white text-bold" >Delete</button>
                            </div>
                            </td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>
        </div>
    )
}
