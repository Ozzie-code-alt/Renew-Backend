import express from "express";
import dotenvv from "dotenv";
import userRouter from "./route/userRoute";
import cors from "cors";
dotenvv.config();

const port = process.env.PORT || 4000;

const app = express();

app.use(cors({
  origin: 'http://localhost:3000' 
}));

app.use(express.json());
app.get("/", (_, res) => {
  res.send("Helllo world");
});

app.use("/api/user", userRouter);
app.listen(port, () => {
  console.log(`Server started in port: ${port}`);
});
