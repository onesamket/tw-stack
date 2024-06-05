import express from "express";
import userRouter from "./routes/user.routes";
import errorMiddleware from "./middleware/error";

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

app.listen(port, () => {
  console.log(`🚀 Server Running on port http://localhost:${port}...`);
});
