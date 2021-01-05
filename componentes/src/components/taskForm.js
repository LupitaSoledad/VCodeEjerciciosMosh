import React, { useState } from "react";
import PropTypes from "prop-types";

const TaskForm = (props) => {
  const [task, setTask] = useState({
    description: "",
  });

  return (
    <div className="endAdd">
      <input
        className="AddTask"
        value={task.description}
        placeholder="Agregar Tarea"
        type="text"
        onChange={(e) => {
          setTask({
            ...task,
            description: e.target.value,
          });
        }}
      ></input>

      <button
        className="buttonAdd"
        type="button"
        onClick={() => {
          props.handleAdd(task);
        }}
      >
        Add
      </button>
    </div>
  );
};

TaskForm.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};

export default TaskForm;
