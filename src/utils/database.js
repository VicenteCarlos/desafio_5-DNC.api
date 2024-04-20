import mongoose from "mongoose";

const URI =
  "mongodb+srv://vicentecarloshehe:xBxQIPUkrcX5dzc4@cluster0.z3m8bja.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  
const databaseConnection = async () => {
  if (!global.mongoose) {
    mongoose.set("strictQuery", false);
    global.mongoose = await mongoose.connect(URI);
  }
};

export default databaseConnection;
