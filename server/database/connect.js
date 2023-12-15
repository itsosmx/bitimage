import mongoose from "mongoose";


export default async function connectDB() {

  mongoose.set("strictQuery", true);
  await mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));
}