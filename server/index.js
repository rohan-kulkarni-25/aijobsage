import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import { app } from "./app.js";

// Load environment variables
dotenv.config();

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} `);
});
