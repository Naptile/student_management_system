import {useState,useEffect} from "react";
import api from "../services/api"
import {toast} from "react-toastify"
export default function StudentForm({fetchStudents,loading,setLoading, editingStudent, setEditingStudent }){
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
                e.preventDefault();
                setLoading(true)
            try {
                if (editingStudent) {
                        await api.put(`/students/${editingStudent._id}`, form);
                        toast.success("Student Updated successfully!!")
                        setEditingStudent(null);
                    } else {
                        await api.post("/students",form);
                        toast.success("Student added Successfully!!")
                    }
                await fetchStudents();
                
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
                toast.error(error.response?.data?.error || "Something went wrong")
            }

            finally{
                setLoading(false)
            }
        
        }         


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
        <div className="bg-white  w-lg shadow-sm hover:bg-slate-200 duration-300">
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
                type="submit"
                disabled={loading}
                className="bg-green-500 w-full py-2 rounded-xl text-lg  hover:bg-green-600 transition duration-300">
                    {loading
                    ?"Saving..."
                    :editingStudent
                    ?"Update Student"
                    :"Add Student"
                    }
                 
                    {/* {editingStudent ? "update Student " :"Add Student"} */}
                    </button>

            </form>
        </div>
    )
}


