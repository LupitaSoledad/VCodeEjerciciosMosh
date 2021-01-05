import React from "react";
import Task from "./task";

export default {
  title: "Task",
  component: Task,
};

const data = {
  id: 2,
  description: "Tomar agua",
  completed: true,
  created: "14/10/2020",
};

const handleRemove = (id) => {
  alert("removed " + id);
};

export const TaskB = () => {
  return <Task data={data} handleRemove={handleRemove}></Task>;
};
