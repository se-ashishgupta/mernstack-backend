import mongoose from "mongoose";
mongoose.set("strictQuery", false);

export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.DATABASE);
  console.log(`MongoDb Connected with ${connection.host}`);
};
