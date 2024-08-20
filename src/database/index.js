import mongoose from "mongoose";
import prettyMilliseconds from "pretty-ms";

export default async function setupDatabase(){
  const startTime = Date.now()
  console.log("🌿 MongoDB Connection Started")
  try {
    await mongoose.connect(process.env.DB_URI)
    console.log("🌿 MongoDB Connection Succesful! " + prettyMilliseconds(Date.now() - startTime))
  } catch (err) {
    console.log("🛑 MongoDB Connection Failed! " + prettyMilliseconds(Date.now() - startTime))
    console.error(err)
    process.exit(1)
  }
}