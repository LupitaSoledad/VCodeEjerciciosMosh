import React from "react";
import Tasks from "./tasks";

export default {
  title: "Tasks",
  component: Tasks,
};

const data = [
  { id: 1, description: "Tomar agua", completed: true, created: "14/10/2020" },
  { id: 2, description: "Comer", completed: false, created: "15/10/2020" },
  { id: 3, description: "Bañarse", completed: true, created: "15/11/2020" },
  { id: 4, description: "cenar", completed: false, created: "15/11/2020" },
  { id: 4, description: "dormir", completed: true, created: "15/11/2020" },
];

const handleRemove = (id) => {
  alert("removed " + id);
};

export const TasksB = () => {
  return <Tasks data={data} handleRemove={handleRemove}></Tasks>;
};
