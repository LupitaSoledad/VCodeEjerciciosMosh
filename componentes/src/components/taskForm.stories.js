import React from "react";
import TaskForm from "./taskForm";

export default {
  title: "TaskForm",
  component: TaskForm,
};

const data = {
  description: "Tomar agua",
};

const handleAdd = (task) => {
  console.log(task);
};

export const TaskFormB = () => {
  return <TaskForm data={data} handleAdd={handleAdd}></TaskForm>;
};
