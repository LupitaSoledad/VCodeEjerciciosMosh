import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Task = (props) => {
  const [task, setTask] = useState(props.data);

  useEffect(() => {
    setTask(props.data);
  }, [props.data]);

  return (
    <div className="Container">
      <input
        className="AddTaskCheckbox"
        type="checkbox"
        checked={task.completed}
        onChange={(e) => {
          setTask({
            ...task,
            completed: e.target.checked,
          });
        }}
      ></input>
      <input
        className="AddTaskText"
        value={task.description}
        type="text"
        onChange={(e) => {
          setTask({
            ...task,
            description: e.target.value,
          });
        }}
      ></input>
      <button
        className="buttonDelete"
        type="button"
        onClick={() => {
          props.handleRemove(task.id);
        }}
      >
        X
      </button>
      <div>{task.created}</div>
    </div>
  );
};

Task.propTypes = {
  //data: PropTypes.object.isRequired,
  data: PropTypes.shape({
    description: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    created: PropTypes.string.isRequired,
  }),
  handleRemove: PropTypes.func.isRequired,
};

export default Task;
