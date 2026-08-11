 import { FaUserGraduate } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";

export default function Dashboard({ students }) {
   
    const totalStudents = students.length;

    const totalCourses = new Set(
        students.map(student => student.course)
    ).size;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

            <div className="bg-white rounded-xl shadow-lg p-6 flex justify-between items-center hover:shadow-xl transition duration-300">

    <div>
        <h2 className="text-gray-500 text-lg">
            Total Students
        </h2>

        <p className="text-4xl font-bold text-blue-600">
            {totalStudents}
        </p>
    </div>

    <FaUserGraduate
        className="text-6xl text-blue-500"
    />
    <MdMenuBook  className="text-6xl text-blue-500"/>

</div>

            {/* Total Courses */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                <h2 className="text-gray-500 text-lg">
                    Total Courses
                </h2>

                <p className="text-4xl font-bold mt-2">
                    {totalCourses}
                </p>
            </div>

        </div>
    );
}


