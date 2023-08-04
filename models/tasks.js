import mongoose from "mongoose";

const taskschema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
  }
);


const Task = mongoose.model("Task", taskschema);

export default Task;
