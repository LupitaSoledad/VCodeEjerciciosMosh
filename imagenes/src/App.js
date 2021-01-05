import React, { useState } from "react";
import "./App.css";

import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVials } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [tasks, setTasks] = useState([]);
  const [estadoTexto, setEstado] = useState("");

  function handleAddTask() {
    let newTasks = [...tasks];

    if (estadoTexto !== "") {
      newTasks.push(estadoTexto);
      setTasks(newTasks);
      setEstado("");
    } else {
      alert("invalido");
    }
  }
  function handleDelete(task) {
    let newTasks = [...tasks];
    let arrayIndex = newTasks.indexOf(task);
    newTasks.splice(arrayIndex, 1);
    setTasks(newTasks);
    console.log(newTasks);
  }

  return (
    <div className="App">
      <div className="ui-container">
        <div className="ui-header">
          <h2>You have {tasks.length} tasks</h2>
        </div>

        <div className="ui-body">
          {tasks.length === 0 && (
            <div className="iconoTaks">
              <FontAwesomeIcon icon={faVials} />
            </div>
          )}

          <div>
            {tasks.map((task, i) => (
              <div className="ui-task-body" key={i}>
                <div className="ui-task">{task}</div>
                <div>
                  <IconButton
                    className="icono"
                    onClick={() => handleDelete(task)}
                  >
                    <HighlightOffIcon>
                      <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
                    </HighlightOffIcon>
                  </IconButton>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ui-footer">
          <input
            type="text"
            className="input"
            placeholder="Agregar Tarea"
            value={estadoTexto}
            onChange={(e) => {
              setEstado(e.target.value);
            }}
          />
          <button
            className="addBtn"
            type="button"
            id="inputGroupFileAddon04"
            onClick={handleAddTask}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
