import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import {Container,Row,Col, DropdownButton, Dropdown} from "react-bootstrap";
import AddButton from "../AddButton";
import RemoveButton from "../RemoveButton"
import axios from "axios";
import configData from "../../config.json";
import Header from "../Header";

const Hierarchy = () => {
  const [mapping, setMapping] = useState();

  useEffect(async () => {
    //dobrze byloby obsłuzyć błąd serwera - i napisać coś userowi - dałem loading - ale tak naprawde powinny być 3 stany: ok, loading, błąd
    const result = await axios(configData.SERVER_URL +'/showhierarchy_mapping');
    setMapping(result.data);
  }, mapping);

  return (
    <>
    <Header />
    <Container>
      <Row className="add-space">
        <Col><AddButton onSubmit={setMapping} />
        <RemoveButton onSubmit={setMapping} /> </Col>
      </Row>
      </Container>    
      <Container>
        <Row className="add-space">
          <Col>
      <Table striped bordered hover>
        <thead>
          <tr>
             <th>User</th>
            <th>Unit Code</th>
          </tr>
        </thead>
        <tbody>
          {mapping ? (
            mapping.map((map) => (
              <tr>
                <td>{map.UserId}</td>
                <td>
                  <DropdownButton id="dropdown-basic-button" title={map.UnitCode}>
                  <Dropdown.Item href="#/action-1">France</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Germany</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Poland</Dropdown.Item>
                  </DropdownButton></td>
              </tr>
            ))
          ) : (
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          )}
        </tbody>
      </Table>
      </Col>
      </Row>
      </Container>
    </>
  );
};

export default Hierarchy;
