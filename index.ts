import express from "express";
import userRouter from "./routes/user.routes";
import errorMiddleware from "./middleware/error";
import authRouter from "./routes/auth.routes";

const app = express();
const port = 8080;

// register  express middlewares
app.use(express.json());

// register  custom middlewares
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// register api routes
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`🚀 Server Running on port http://localhost:${port}...`);
});
