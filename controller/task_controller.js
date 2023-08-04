import AsyncHandler from "express-async-handler";
import tasks_list from "../seed_data/sample_data.js";
import { count } from "console";
import Task from "../models/tasks.js";

// @desc    Fetch all tasks
// @route   GET /api/tasks
// @access  Public

const get_all_tasks = AsyncHandler(async (req, res) => {
  const all_tasks = await Task.find();
  res.json(all_tasks);
});

// @desc    Fetch a task
// @route   GET /api/tasks/:task_Id
// @access  Public

const get_task_details = AsyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.task_Id);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

// @desc    create a tasks
// @route   GET /api/tasks
// @access  Public

const create_task = AsyncHandler(async (req, res) => {
  const { title, description, status } = req.body;
  const new_task_details = {
    title: title,
    description: description,
    status: status,
  };
  const new_task = Task(new_task_details);
  const created_task = await new_task.save();
  res.status(201).json(created_task);
});

// @desc    update a task
// @route   PUT /api/tasks/:task_Id
// @access  Public

const update_task = AsyncHandler(async (req, res) => {
  const { title, description, status } = req.body;
  console.log(req.body)
  const task = await Task.findById(req.params.task_Id);
  if (task) {
    task.title = title;
    task.description = description;
    task.status = status;

    const created_task = await task.save();
    res.status(201).json(created_task);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

// @desc    delete a task
// @route   Delete /api/tasks/:task_Id
// @access  Public

const delete_task = AsyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.task_Id);
  if (task) {
    await Task.deleteOne({ _id: task._id });
    res.status(200).json({ message: "Task removed" });
  } else {
    res.status(404).json({ message: "Task not exist" });
  }
});

export {
  get_all_tasks,
  get_task_details,
  create_task,
  update_task,
  delete_task,
};
