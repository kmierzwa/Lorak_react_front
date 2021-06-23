import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import configData from "../config.json";

const ModalButton = ({ onSubmit }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${configData.SERVER_URL}/adduser`, {
        firstName,
        lastName,
        login,
        pass,
      }).then(()=> window.location.reload())
      .catch((e) =>
        console.log(e)
      );
    setShow(false);
    onSubmit();
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add user
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              placeholder="John"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
             <Form.Label>Surname</Form.Label>
            <Form.Control
              placeholder="Travolta"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Form.Label>Login</Form.Label>
            <Form.Control
              placeholder="j.travolta@domain.com"
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />  
            <Form.Label>Password</Form.Label>
            <Form.Control
              placeholder="****"
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            
          </Form.Group>
          <Button variant="success" type="submit">
            Add
          </Button>
        </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalButton;
