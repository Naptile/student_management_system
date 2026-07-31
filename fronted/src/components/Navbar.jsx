export default function Navbar({search,setSearch}){
    return(
        <nav className="bg-white shadow-sm mb-3 p-4">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className="text-6xl">🎓</div>
                <h1 className="text-bold text-xl">Student Management System</h1>
                </div>
                <input type="text"
                placeholder="Search student"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                className="bg-gray-100  rounded-xl py-2 px-6 outline-green-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                 <div>
                    welcome <span className="text-2xl ">👋</span> 
                 </div>
            </div>
        </nav>
    )
}