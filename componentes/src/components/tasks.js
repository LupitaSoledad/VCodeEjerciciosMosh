import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Task from "./task";

const Tasks = (props) => {
  const [tasks, setTasks] = useState(props.data);

  useEffect(() => {
    setTasks(props.data);
  }, [props.data]);

  return (
    <div>
      <ul className="ul">
        {tasks.map((task, index) => {
          return (
            <Task
              key={index}
              data={task}
              handleRemove={props.handleRemove}
            ></Task>
          );
        })}
      </ul>
    </div>
  );
};

Tasks.propTypes = {
  //data: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Tasks;
