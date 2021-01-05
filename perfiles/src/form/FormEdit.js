import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { getUserById, updateUser } from "../component/users";

function FormEdit() {
  let { id } = useParams();

  const user = getUserById(id);

  const [newUser, setNewUser] = useState(user);

  //console.log(newUser.name);

  function handleValidar() {
    if (
      newUser.name === "" ||
      newUser.lastName === "" ||
      newUser.userName === ""
    ) {
      alert("favor de llenar los campos vacios!!");
    } else {
      const update = updateUser(newUser);
      alert("Operación exitosa");
      console.log("Updata: ", update);
    }

    console.log(
      "name: ",
      newUser.name,
      "LastName: ",
      newUser.lastName,
      "UserName:",
      newUser.userName,
      "active: ",
      newUser.isActive
    );
  }

  function handleInputChange(e, propertyName) {
    let newUserState = { ...newUser };
    newUserState[propertyName] = e.target.value;
    setNewUser(newUserState);
  }
  function handleCheck(e) {
    let newUserState = { ...newUser };
    newUserState["isActive"] = e.target.checked;
    setNewUser(newUserState);
  }

  return (
    <div className="formContainer">
      <Form>
        <Form.Group controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => handleInputChange(e, "name")}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>LastName</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="LastName"
            value={newUser.lastName}
            onChange={(e) => handleInputChange(e, "lastName")}
            required
            //onChange={}
          />
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type="text"
            placeholder="UserName"
            value={newUser.userName}
            onChange={(e) => handleInputChange(e, "userName")}
            required
          />
          <input
            type="checkbox"
            checked={newUser.isActive}
            onChange={handleCheck}
            required
          />
          Active
        </Form.Group>
      </Form>
      <Link className="btnEditar" onClick={handleValidar} to="/UserCard">
        Save
      </Link>
    </div>
  );
}

export default FormEdit;
