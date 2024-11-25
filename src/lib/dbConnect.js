// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config(); // Load environment variables

// const MONGODB_URI = process.env.MONGODB_URI;

// let isConnected = false; // Track the connection status

// export async function connectDB() {
//   if (isConnected) {
//     console.log("Already connected to the database.");
//     return;
//   }

//   if (!MONGODB_URI) {
//     console.error("MONGODB_URI is not defined in the environment variables.");
//     return;
//   }

//   try {
//     const connection = await mongoose.connect(MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       connectTimeoutMS: 10000,
//       socketTimeoutMS: 45000,
//     });
//     isConnected = connection.connections[0].readyState === 1;
//     console.log("Database connected successfully.");
//   } catch (err) {
//     console.error("Database connection error:", err);
//   }
// }





import mongoose from "mongoose";

export async function connectDB() {
  try {
    let connection;
    console.log("connection?.connection=>", connection?.connection);
    if (connection?.connection?.readyState != 1) {
      connection = await mongoose.connect(process.env.MONGODB_URI);
      console.log("DB Connected");
    }
  } catch (err) {
    console.log("err=>", err);
  }
}