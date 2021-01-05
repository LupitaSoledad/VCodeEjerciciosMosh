import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "./header";
import Body from "./body";
import users from "../component/users";

function UserCard() {
  const [editableUsers, setEditableUsers] = useState(users);

  useEffect(() => {
    const newUsers = users.filter((user) => {
      return user.isActive;
    });

    setEditableUsers(newUsers);
  }, [users]);

  function handleCh(e) {
    console.log(e.target.checked);
    if (e.target.checked) {
      setEditableUsers(users);
      console.log("activado");
    } else {
      const newUsers = users.filter((user) => {
        return user.isActive;
      });

      setEditableUsers(newUsers);
    }
  }
  function handleFireUser(index) {
    let newUsers = [...editableUsers];
    newUsers[index].isActive = false;
    setEditableUsers(newUsers);
  }

  return (
    <Container>
      <div className="CheckBox">
        <input
          className="chbox"
          type="checkbox"
          id="active"
          onChange={handleCh}
        />
        Mostrar Inactivos
      </div>
      <div>
        <Row>
          {editableUsers.map((user, index) => {
            {
              return (
                <Col md={4}>
                  <div className="all">
                    <Header picture={user.pictureUrl} />
                    <Body
                      user={user}
                      index={index}
                      onFireUsers={handleFireUser}
                    />
                  </div>
                </Col>
              );
            }
          })}
        </Row>
      </div>
    </Container>
  );
}

/*
sombra
fuente
boton princimal colo rprincipal, sin fondo, y curviados
*/
export default UserCard;
