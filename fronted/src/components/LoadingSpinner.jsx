export default function Loading(){
    return(
        <div className="items-center justify-center text-center flex flex-col p-6 ">
            <div className="text-green-500 rounded-full w-12 h-12 border border-4 animate-spin border-t-transparent"></div>
            <p className="text-gray-600 mt-3 text-lg">Loading Students...</p>
        </div>
    )
}