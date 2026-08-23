import {Link} from "react-router-dom"
import {useState} from "react"
export default function Navbar({search,setSearch}){
    const[menuOpen,setMenuOpen]=useState(false);
    return(
        <nav className="bg-white border-b border-slate-300 shadow-sm mb-3 p-4 border w-full ">
            <div className="hidden md:flex  justify-center items-center gap-4 ">
                <div className="flex gap-2 items-center ">
                    <div className="text-6xl">🎓</div>
                     <h1 className=" font-bold text-xl ">Student Management System</h1>
                </div>
                <input type="text"
                placeholder="Search name email course yearAdmitted AdmissionNumber"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                className="bg-gray-100  w-2xl rounded-xl py-3 px-13 outline-green-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />              
                <button className="b bg-blue-500 px-4 py-2 rounded-lg whitespace-nowrap text-white font-bold hover:bg-blue-700 transition-colors">Add student+</button>
                 <div >
                    welcome <span className="text-2xl ">👋</span>                 
                 </div>
            </div>


            <div className="md:hidden">

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setMenuOpen(prev => !prev)}
                        className="text-3xl"
                    >
                        ☰
                    </button>
                    <h1 className="font-bold text-xl font-serif text-blue-800">
                        Student Management System
                    </h1>
                </div>

                {menuOpen && (
                    <div className="mt-4 flex flex-col gap-3">
                        {/* <Link to="/">Home</Link>
                        <Link to="/admin">Admin</Link>
                        <Link to="/students">Students</Link> */}
                        <p>Home</p>
                        <p>Admin</p>
                        <p>Students</p>
                    </div>
                )}

        </div>
             
        </nav>
    )
}