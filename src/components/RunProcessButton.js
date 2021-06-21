import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import configData from "../config.json";

//https://react-bootstrap.github.io/components/modal/
//https://react-bootstrap.github.io/components/forms/
// dok formularza - macie tez tu przyklady fajnej walidacji np

//w zaleznosci od tego jaka architekture przyjmiecie - ten przycisk moze byc uniwersalny, lub musicie do kazdej tabeli zrobic nowy
// Tak z doswiadczenia moge powiedziec ze juniorzy zawsze chca pisac wszystko jak najbardziej uniwersalnie (bo DRY) a potem czesto sa problemy przez to
// jezeli bedziecie chceli uniwersalnie to pewnie musicie w propsach jakies rzeczy przygotowac - np tablice inputów i po niej mapować, adrest posta etc.
// albo do kazdej tabeli przygotować oddzielny modal - wtedy jakoś to sensownie podzielcie w katalogi.

const RunProcessButton = ({ onSubmit }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [unitcode, setUnitCode] = useState("");
  const [incrpct, setPCT] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${configData.SERVER_URL}/runProcess`, {
        unitcode,
        incrpct,
      })
      .catch(() =>
        console.log(
          "warto obsłużyć w jakiś sposób błąd - najlepiej byłoby coś wyswietlić userowi xD"
        )
      );
    //poprostu zamykamy, ale fajniej byłoby coś pokazać
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
            <Form.Control
              placeholder="Type proper Unit Code"
              type="text"
              value={unitcode}
              onChange={(e) => setUnitCode(e.target.value)}
            />
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
