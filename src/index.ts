import express from "express";
import dotenvv from "dotenv";
import userRouter from "./route/userRoute";

dotenvv.config();

const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.get("/", (_, res) => {
  res.send("Helllo world");
});

app.use("/api/user", userRouter);
app.listen(port, () => {
  console.log(`Server started in port: ${port}`);
});
