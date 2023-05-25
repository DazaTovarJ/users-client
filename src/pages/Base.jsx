import React from "react";
import {Container} from "react-bootstrap";
import {Outlet} from "react-router-dom";
import Toolbar from "../components/Toolbar";

function Base() {
  return (
    <>
      <Toolbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default Base;
