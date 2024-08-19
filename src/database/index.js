import mongoose from "mongoose";

export default async function setupDatabase(){
  try {
    await mongoose.connect(process.env.DB_URI)
  } catch (err) {
    process.exit(1)
  }
}