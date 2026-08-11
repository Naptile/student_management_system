export default function StatCard({value,messsage,icon,students}){    
        return(
        <div className="flex flex-col justify-center items-center  gap-3 w-sm shadow-xl bg-white rounded-3xl py-12 border-l-green-500 border-l-6 border-r-blue-500 border-r-6  hover:shadow-blue-500   border border-slate-200">
            <div className="text-5xl text-blue-600">{icon}</div>
            <h1 className="font-bold text-2xl text-blue-500">{messsage}</h1>
            <p className="flex h-15 w-15 rounded-full bg-green-500 items-center justify-center text-white font-bold text-xl">{value}</p>
       </div>
    )
    
}