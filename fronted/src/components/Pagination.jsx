import { useEffect } from "react";

export default function Pagination({totalStudents,studentsPerPage,currentPage,setCurrentPage,search}){
    const totalPages = Math.ceil(
        totalStudents / studentsPerPage
    );
    const pageNumbers =Array.from(
        {length:totalPages},
        (_,index)=>index+1
    );

    useEffect(()=>{
        setCurrentPage(1)
    },[search])
    return(
        <div className="text-center p-4 flex flex-wrap justify-center">
            
            <button
            disabled={currentPage===1}
            onClick={()=>setCurrentPage(currentPage-1)}
            className="bg-white px-4 py-2 rounded-lg disabled:opacity-5"
            
            >Prev</button>

            {pageNumbers.map((page)=>(
                <button 
                key={page}
                onClick={()=>setCurrentPage(page)}
                className={`px-4 py-2 ml-2 rounded-lg ${page===currentPage ? "bg-blue-500 text-white" :" bg-gray-200 hover:bg-gray-300"}`}
                >
                    {page}
                </button>
            )
            )}

            <button
            onClick={()=>setCurrentPage(currentPage+1)}
            disabled={currentPage === totalPages}
            className="bg-white px-4 py-2 rounded-lg ml-2 disabled:opacity-5"
            >
                Next
            </button>

        </div>
    )
}