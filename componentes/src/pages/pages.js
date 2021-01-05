import React, { useEffect, useState } from "react";
import PropTypes, { array } from "prop-types";
import "../App.css";
import TaskForm from "../components/taskForm";
import Tasks from "../components/tasks";

const Pages = () => {
  const [tasks, setTasks] = useState([]);

  const handleRemove = (task) => {
    let newTasks = [...tasks];
    let arrayIndex = newTasks.indexOf(task);
    newTasks.splice(arrayIndex, 1);
    setTasks(newTasks);
    console.log(newTasks);
  };

  const handleAdd = (task) => {
    setTasks([...tasks, task]);

    // console.log(tasks);
  };

  return (
    <div className="ContainerPage">
      {tasks.length === 0 && (
        <div className="title">
          <h1>There aren't Tasks!</h1>
        </div>
      )}

      <TaskForm handleAdd={handleAdd} />
      <Tasks data={tasks} handleRemove={handleRemove} />
    </div>
  );
};

export default Pages;
