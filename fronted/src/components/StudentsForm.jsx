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

    const [error,setError]= useState("");
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
                toast.error(error.response?.data?.error ||error.response?.data?.message || "Something went wrong")
                setError(error.response?.data?.error ||error.response?.data?.message || error.message)
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
        <div className=" flex flex-col items-center justify-center  w-full lg:w-lg  bg-white shadow-xl border border-slate-300 ">
            {error&&(
                <p className="text-red-500 m-2">{error}</p>
            )}
            <h1 className=" text-center text-3xl font-semi-bold p-4">{editingStudent ? "Edit Student" : "Add Student"}</h1>
            <form onSubmit={handleSubmit}
            className="p-6 "
            >
                <input type="text" 
                placeholder="Name"
                value={form.name}
                onChange={(e)=>setForm({...form,name:e.target.value})}
                required
                className="w-full px-6 py-2 bg-gray-300   rounded-xl  outline-green-500 hover:bg-gray-200 mb-3  mb-3 transition duration-300"
                />

                <input type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e)=>setForm({...form,email:e.target.value})}
                required
                className="w-full px-6 py-2 bg-gray-300  outline-green-500 rounded-xl hover:bg-gray-200 mb-3 transition duration-300"
                />

                <input type="text" 
                placeholder="Admission Number"
                value={form.admissionNumber}
                onChange={(e)=>setForm({...form,admissionNumber:e.target.value})}
                required
                className="w-full px-6 py-2 bg-gray-300  outline:green-500 rounded-xl hover:bg-gray-200 mb-3  outline-green-500   mb-3 transition duration-300"
                />
                <select 
                value={form.course}
                 onChange={(e)=>setForm({...form,course:e.target.value})}
                 className="w-full px-6 py-2 bg-gray-300   rounded-xl  outline-green-500 hover:bg-gray-200 mb-3  mb-3 transition duration-300"
                 
                 >
                   <option value="">Choose course</option>
                    <option value="math">Math</option>
                    <option value="english">English</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="biology">Biology</option>
                    <option value="kiswahili">Kiswahili</option>
                    <option value="physics">Physics</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="cre">CRE</option>
                    <option value="homeScience">Home Science</option>
                </select>
               
                <input type="number"
                placeholder="Year Admitted"
                value={form.yearAdmitted}
                onChange={(e)=>setForm({...form,yearAdmitted:e.target.value})}
                required
                className="w-full px-6 py-2 bg-gray-300  rounded-xl hover:bg-gray-200  mb-3 outline-green-500  mb-3 transition-colors duration-300 "
                />

                <button 
                type="submit"
                disabled={loading}
                className="bg-green-500 w-full py-2 rounded-xl text-lg   transition-colors duration-300">
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


