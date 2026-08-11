import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

export default function CourseCharts({ students }) {

    const courseStats = students.reduce((acc, student) => {

        if (student.course in acc) {
            acc[student.course] += 1;
        } else {
            acc[student.course] = 1;
        }

        return acc;

    }, {});


    const chartData = Object.entries(courseStats).map(
        ([course, total]) => ({
            course,
            total
        })
    );


    return (
        <div className="bg-white rounded-xl shadow-lg  w-lg p-4 sm:p-6 mt-8 mb-8 w-full max-w-5xl">

            <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Students Per Course
            </h2>

            <div className="h-[280px] sm:h-[350px]">

                <ResponsiveContainer width="100%" height="100%">

                    <BarChart
                        data={chartData}
                        margin={{
                            top: 10,
                            right: 10,
                            left: 0,
                            bottom: 10
                        }}
                    >

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis
                            dataKey="course"
                            tick={{ fontSize: 12 }}
                        />

                        <YAxis
                            allowDecimals={false}
                        />

                        <Tooltip />

                        <Bar
                            dataKey="total"
                            fill="#3b82f6"
                            radius={[6, 6, 0, 0]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}