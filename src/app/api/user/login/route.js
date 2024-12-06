import { connectDB } from "@/lib/dbConnect";
import { UserModal } from "@/lib/modals/UserModal";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // Connect to the database
        await connectDB();

        // Parse the request body
        const obj = await request.json();
        console.log("Login obj =>", obj);

        // Check if user exists
        const user = await UserModal.findOne({ email: obj.email });
        if (!user) {
            return NextResponse.json(
                { error: true, msg: "User Not Found" },
                { status: 404 }
            );
        }

        // Verify the password
        const isPasswordMatch = await bcrypt.compare(obj.password, user.password);
        if (!isPasswordMatch) {
            return NextResponse.json(
                { error: true, msg: "Password is not valid" },
                { status: 401 }
            );
        }

        console.log("isPasswordMatch =>", isPasswordMatch);

        // Successful login response
        return NextResponse.json(
            { success: true, msg: "Login successful" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error in POST handler:", error);

        // Return an internal server error response
        return NextResponse.json(
            { error: true, msg: "Internal Server Error" },
            { status: 500 }
        );
    }
}
