import { CourseTable } from "@/components/DataTables/CourseTable";
import { Button } from "@/components/ui/button";



export default function Courses() {
    return (
        <div className="min-h-screen p-10">
            <div className="flex justify-between my-2">
                <h1 className="text-4xl font-bold text-center">Courses</h1>
                <Button>Add Courses</Button>
            </div>
            <CourseTable />
        </div>
    )
}