import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link, Route, Switch } from "react-router-dom";

//date.index --- muestra el index
// date --- muestra el inActive y el index

function Button({ name, active, onFireUser, index, id }) {
  return (
    <Container fluid>
      <Row>
        <Col xs={6}>
          <Route>
            <Link className="btnEditar" to={`/FormEdit/${id}`}>
              Edit
            </Link>
          </Route>
        </Col>

        <Col xs={6}>
          {active && (
            <button className="btnDespedir" onClick={() => onFireUser(index)}>
              Fire
            </button>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Button;
