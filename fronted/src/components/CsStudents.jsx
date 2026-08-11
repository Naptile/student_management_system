export default function CsStudents({students}){
    const computerScience=[
        "computerScience", 
        "ComputerScience",
        "cs",
        "CS",
        "cS",
        "Computer Science",
        "computer science",
            
    ]
    const csStudents = students.reduce((accumulator,student)=>{
        
        if((student.course==="computerScience")|| (student.course==="ComputerScience")|| (student.course==="cs") || (student.course==="Cs") ||(student.course=== "cS") ||(student.course==="Computer Science") ||(student.course=== "computer Science")||(student.course=== "Computer Science")||(student.course==="CS")){
            return accumulator+1         
        }
        return accumulator
    },0)
    return(
        <div className="flex flex-col justify-center items-center gap-3 w-sm shadow-xl bg-white rounded-3xl py-12 border-l-green-500 border-l-6 border-r-blue-500 border-r-6 ">
            <h1 className="font-bold text-2xl text-blue-500">Total Cs Students</h1>
            <p className="flex h-15 w-15 rounded-full bg-green-500 items-center justify-center text-white font-bold text-xl">{csStudents} </p>
        </div>
    )
}