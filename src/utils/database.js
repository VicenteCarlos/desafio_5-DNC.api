import mongoose from "mongoose";
import "dotenv/config";

const URI =
  "mongodb+srv://admin:xinYSL9HGcAOaJcV@cluster0.wcdaozq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const databaseConnection = async () => {
  if (!global.mongoose) {
    mongoose.set("strictQuery", false);
    global.mongoose = await mongoose.connect(URI);
  }
};

export default databaseConnection;
