import mongoose from "mongoose";
import { DB_DEV, DB_NAME } from "../constants.js";

// Function which will connect application to mongodb database.
export const connectDB = async () => {
  try {
    if (process.env.NODE_ENV == "dev") {
      const connectionInstance = await mongoose.connect(
        `${process.env.MONGODB_URI}/${DB_DEV}`
      );
      console.log(
        `\nMongoDB Connected !! DB HOST :${connectionInstance.connection.host} in DEV MODE.`
      );
    } else {
      const connectionInstance = await mongoose.connect(
        `${process.env.MONGODB_URI}/${DB_NAME}`
      );
      console.log(
        `\n 🥳 MongoDB Connected !! DB HOST :${connectionInstance.connection.host}`
      );
    }
  } catch (error) {
    console.error("ERR: AT connectDB Function", error);
    process.exit(1); // There are multiple exit codes.
  }
};
