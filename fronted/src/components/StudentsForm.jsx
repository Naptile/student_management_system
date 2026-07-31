import {useState,useEffect} from "react";
import api from "../services/api"
export default function StudentForm({fetchStudents, editingStudent, setEditingStudent }){
 const[form,setForm] = useState(
        {
            name:"",
            email:"",
            admissionNumber:"",
            course:"",
            yearAdmitted:"",
        }
    )
    const handleSubmit=async(e)=>{
            try {
                e.preventDefault();
                if (editingStudent) {
                        await api.put(`/students/${editingStudent._id}`, form);
                        alert("Student Updated successfully!!")
                        setEditingStudent(null);
                    } else {
                        await api.post("/students", form);
                    }
                fetchStudents();
                
                setForm(
                    {
                        name:"",
                        email:"",
                        admissionNumber:"",
                        course:"",
                        yearAdmitted:"",

                    }
                )

                
            } catch (error) {
                alert(error)
            }}         


             useEffect(() => {
            if (editingStudent) {
                setForm({
                    name: editingStudent.name,
                    email: editingStudent.email,
                    admissionNumber: editingStudent.admissionNumber,
                    course: editingStudent.course,
                    yearAdmitted: editingStudent.yearAdmitted,
                });
            }
        }, [editingStudent]);
    return(
        <div className="bg-slate-100 m-6 w-2xl  shadow-sm hover:bg-slate-200 duration-300">
            <h1 className="p-2 text-center text-3xl font-semi-bold">{editingStudent ? "Edit Student" : "Add Student"}</h1>
            <form onSubmit={handleSubmit}
            className="p-6 "
            >
                <input type="text" 
                placeholder="Name"
                value={form.name}
                onChange={(e)=>setForm({...form,name:e.target.value})}
                required
                className="w-full px-6 py-2 bg-gray-300  outline:green-500 rounded-xl  hover:ring-3  active:ring-green-500 hover:ring-green-500 hover:outline-none mb-3 transition duration-300"
                />

                <input type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e)=>setForm({...form,email:e.target.value})}
                required
                className="w-full px-6 py-2 bg-gray-300  outline:green-500 rounded-xl  hover:ring-3  active:ring-green-500 hover:ring-green-500 hover:outline-none mb-3 transition duration-300"
                />

                <input type="text" 
                placeholder="Admission Number"
                value={form.admissionNumber}
                onChange={(e)=>setForm({...form,admissionNumber:e.target.value})}
                required
                className="w-full px-6 py-2 bg-gray-300  outline:green-500 rounded-xl  hover:ring-3  active:ring-green-500 hover:ring-green-500 hover:outline-none mb-3 transition duration-300"
                />

                <input type="text"
                placeholder="Course"
                value={form.course}
                onChange={(e)=>setForm({...form,course:e.target.value})}
                required
                className="w-full px-6 py-2 bg-gray-300  outline:green-500 rounded-xl  hover:ring-3  active:ring-green-500 hover:ring-green-500 hover:outline-none mb-3 transition duration-300"
                />
                <input type="number"
                placeholder="Year Admitted"
                value={form.yearAdmitted}
                onChange={(e)=>setForm({...form,yearAdmitted:e.target.value})}
                required
                className="w-full px-6 py-2 bg-gray-300  outline:green-500 rounded-xl  hover:ring-3  active:ring-green-500 hover:ring-green-500 hover:outline-none mb-3 transition duration-300"
                />

                <button 
                className="bg-green-500 w-full py-2 rounded-xl text-lg  hover:bg-green-600 transition duration-300">
                    {editingStudent ? "update Student " :"AddStudent"}
                    </button>

            </form>
        </div>
    )
}


