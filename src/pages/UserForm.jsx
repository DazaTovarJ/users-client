import React from "react";
import {Formik} from "formik";
import {Button, Form} from "react-bootstrap";
import {createUser} from "../api/users.api";

const initialForm = {
  nombre: "",
  apellido: "",
  direccion: "",
};

function UserForm() {
  const sendData = async (values) => {
    try {
      const response = await createUser(values);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>New User</h2>
      <Formik
        initialValues={initialForm}
        onSubmit={(values, actions) => {
          sendData(values);
          actions.resetForm();
        }}
      >
        {({values, handleChange, handleSubmit}) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="given-name" className="mb-3">
              <Form.Label>Given Name:</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={values.nombre}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group controlId="family-name" className="mb-3">
              <Form.Label>Family Name:</Form.Label>
              <Form.Control
                type="text"
                name="apellido"
                value={values.apellido}
                onChange={handleChange}
                placeholder="Enter your family name"
              />
            </Form.Group>
            <Form.Group controlId="address" className="mb-3">
              <Form.Label>Address:</Form.Label>
              <Form.Control
                type="text"
                name="direccion"
                value={values.direccion}
                onChange={handleChange}
                placeholder="Enter your address"
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="outline-dark" type="submit">
                Save
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default UserForm;
