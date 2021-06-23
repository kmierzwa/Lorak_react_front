import React, { useState } from "react";
import { Modal, Button, Form,Dropdown,DropdownButton } from "react-bootstrap";
import axios from "axios";
import configData from "../config.json";


const RunProcessButton = ({ onSubmit }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [unitcode, setUnitCode] = useState("Poland");
  const [incrpct, setPCT] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${configData.SERVER_URL}/runProcess`, {
        unitcode,
        incrpct,
      })
      .catch((e) =>
        console.log(e)
      );
    setShow(false);
    onSubmit();
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Run Process
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Chose Unit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>UnitCode</Form.Label>
              <DropdownButton id="dropdown-basic-button" title={unitcode} block>
                <Dropdown.Item onSelect={() => setUnitCode("France")} >France</Dropdown.Item>
                <Dropdown.Item onSelect={() => setUnitCode("Gremany")}>Germany</Dropdown.Item>
                <Dropdown.Item onSelect={() => setUnitCode("Poland")} >Poland</Dropdown.Item>
              </DropdownButton>
              <Form.Label>Incr %</Form.Label>
              <Form.Control
                placeholder="Type int value to increase base pay"
                type="text"
                value={incrpct}
                onChange={(e) => setPCT(e.target.value)}
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RunProcessButton;
