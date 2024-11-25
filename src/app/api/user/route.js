import { connectDB } from "@/lib/dbConnect";
import { UsersModal } from "@/lib/modals/UserModal";

export async function POST(request) {
    await connectDB();
    const obj = await request.json();
    console.log("object => ", obj);

    // check this user exist
    const user = await UsersModal({ email: obj.email });
    console.log("User =>", user);
    
    return Response.json('User Post Request');
}

export async function GET() {
    return Response.json('User Get Request');
}
