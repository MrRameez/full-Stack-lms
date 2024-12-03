import { connectDB } from "@/lib/dbConnect";
import { UserModal } from "@/lib/modals/UserModal";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Award } from "lucide-react";

export async function POST(request) {
    await connectDB();
    const obj = await request.json();
    console.log("Login obj =>", obj);

    const user = await UserModal.findOne({ email: obj.email })
    if (!user)
        return (
            { error: true, msg: "User Not Found" },
            {
                status: 400,
            }
        )

    const isPasswordMatch = await bcrypt.compare(obj.password, user.password)
    if (!isPasswordMatch)
        return (
            { error: true, msg: "User Not Found" },
            {
                status: 400,
            }
        )

    console.log("isPasswordMatch =>", isPasswordMatch);

    //check this user exist
    return Response.json("workink on login")
}