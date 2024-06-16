import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";

const app = express();

// Middleware :
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(
  urlencoded({
    extended: true,
    limit: "16kb",
  })
);
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());

app.get("/api/v1/test", (req, res) => {
  res.send(`AiJobSaga server running well at ${process.env.PORT}`);
});

// ROUTES ----- IMPORT
import userRouter from "./routes/user.route.js";

// routes
app.use("/api/v1/users", userRouter);

export { app };
