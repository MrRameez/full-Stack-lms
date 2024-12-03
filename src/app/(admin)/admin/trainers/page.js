import { UserTrainerTable } from "@/components/DataTables/UserTable";
import { UserTrainerModal } from "@/components/Dialogs/UserDailog";



export default function Trainers(){
    return(
        <div className="min-h-screen p-10">
            <div className="flex justify-between my-2">
                <h1 className="text-4xl font-bold text-center">Trainer</h1>
                <UserTrainerModal/>
            </div>
            <UserTrainerTable/>
        </div>
    )
}