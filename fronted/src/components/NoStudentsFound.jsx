export default function NoStudentFound(){
    return(
        <div className="w-full items-center flex flex-col justify-center bg-white py-16 rounded-xl shadow-md">
            <div className="text-6xl">
                🎓
            </div>
            <h1 className="font-bold text-2xl mt-4 ">No student Found</h1>
            <p className="text-gray-500 mt-2">start by adding your first student</p>

        </div>
    )
}