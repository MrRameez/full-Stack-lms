import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    fullname: String,
    email: { type: String, required: true }, // Corrected `require` to `required`
    provider: String,
    profileImg: String,
    password: String,
    role: { type: String, default: "user" },
    gender: String,
    address: String,
  }, { timestamps: true });

export const UserModel =
  mongoose.models.Users || mongoose.model("Users", userSchema);
