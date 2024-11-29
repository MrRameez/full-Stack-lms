import { connectDB } from "@/lib/dbConnect";
import { UserModal } from "@/lib/modals/UserModal";

export async function POST(request) {
    await connectDB()
    const obj = await request.json();
    console.log("object => ", obj);

    // check this user exist
    let user = await UserModal.findOne({email: obj.email });

    // if (user) {
    //     return Response.json(
    //         { error: true, msg: "User Already Exist" },
    //         { status: 403}
    //     )
    //  }
    console.log( "user =>",user);
    
    
    return Response.json('User Post Request');
}

export async function GET() {
    return Response.json('User Get Request');
}
