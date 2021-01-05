import React, { useState } from "react";
import Add from "../Components/Add";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";



const User = () => {
  const [name, setName] = useState("");
  const [Age, setAge] = useState();

  function handleAdd() {
    if (name === "" || Age === 0) {
      alert("Introduce los datos");
    } else {
      alert("Name: " + name + "\n" + "Age: " + Age);
      console.log(name, Age);
    }
  }

  return (
    <div className="ContainerUser">
      <div>
        <div className="ContainerName">
          <h6>Name:</h6>
          <input
            className="Name"
            type="text"
            placeholder="User Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="ContainerAge">
          <h6>Age:</h6>
          <input
            className="Age"
            type={Number}
            placeholder="User Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
      </div>
      <div className="End">
        <button className="ButtonAdd" onClick={handleAdd}>
          Sing In
          <FontAwesomeIcon icon={faCoffee} />
        </button>
      </div>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string,
  Age: PropTypes.number,
  handleAdd: PropTypes.func,
};

export default User;
