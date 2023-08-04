import express from "express";
import task_routes from "./routes/task_routes.js";
import connectDB from "./config/db.js";
import cors from "cors";

const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/tasks", task_routes);

app.listen(PORT, () => {
  console.log("Server is runnning");
});
