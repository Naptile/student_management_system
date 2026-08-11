import {useState} from "react";
import NoStudentFound from "./NoStudentsFound";
import Loading from "./LoadingSpinner";
export default function StudentsTable({students, handleDelete,setEditingStudent,loading,search}){
       if (loading) {
                return<Loading/>
                };
    
    if (students.length === 0){
                       return (
                        <NoStudentFound search={search} />                   
                       );
                   }
    return(    
        <div className="overflow-x-auto ">
            <table className="p-6  border-spacing-2 min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-200  ">
                    <tr >                        
                        <th className="p-3 text-left">Name</th>
                        <th className="p-3 text-left">Email</th>
                        <th className="p-3 text-left whitespace-nowrap">Admission Number</th>
                        <th className="p-3 text-left">Course</th>
                        <th className="p-3 text-left whitespace-nowrap">Year Admitted</th>
                        <th className="p-3 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student)=>(                       
                        <tr key={student._id}
                        className="border-b hover:bg-gray-50 transition-colors duration-200 "
                        >                  
                            <td className="p-3 whitespace-nowrap">{student.name}</td>
                            <td className="p-3">{student.email}</td>
                            <td className="p-3">{student.admissionNumber}</td>  
                            <td className="p-3">{student.course}</td>
                            <td className="p-3">{student.yearAdmitted}</td> 
                            <td className="p-3">
                            <div className="flex gap-2 ">
                                <button className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600 transition mb-2 mt-2"
                                onClick={() => setEditingStudent(student)}
                                 >Edit
                               </button>
                                <button 
                                onClick={()=>handleDelete(student._id)}
                                className="bg-red-500 px-6 py-3 rounded-lg hover:bg-red-600 transition  mb-2 mt-2 text-white " >Delete</button>
                            </div>
                            </td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>
        </div>
    )
}
