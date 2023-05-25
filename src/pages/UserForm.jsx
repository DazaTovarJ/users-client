import React from "react";
import {Formik} from "formik";
import {Button, Form} from "react-bootstrap";

function UserForm() {
  return (
    <>
      <h2>New User</h2>
      <Formik>
        <Form>
          <Form.Group controlId="given-name" className="mb-3">
            <Form.Label>Given Name:</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              placeholder="Enter your name"
            />
          </Form.Group>
          <Form.Group controlId="family-name" className="mb-3">
            <Form.Label>Family Name:</Form.Label>
            <Form.Control
              type="text"
              name="apellido"
              placeholder="Enter your family name"
            />
          </Form.Group>
          <Form.Group controlId="address" className="mb-3">
            <Form.Label>Address:</Form.Label>
            <Form.Control
              type="text"
              name="direccion"
              placeholder="Enter your address"
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="outline-dark">Save</Button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default UserForm;
