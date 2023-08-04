import express from "express";
const router = express.Router();
import { get_all_tasks,get_task_details, create_task, update_task, delete_task } from "../controller/task_controller.js"

router.route("/").get(get_all_tasks).post(create_task);
router
  .route("/:task_Id")
  .get(get_task_details)
  .put(update_task)
  .delete(delete_task);

export default router