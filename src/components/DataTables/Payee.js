import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import {Container,Row,Col, DropdownButton, Dropdown} from "react-bootstrap";
import AddButton from "../AddButton";
import RemoveButton from "../RemoveButton"
import axios from "axios";
import configData from "../../config.json";



const GetPayees = () => {
  const [payees, setPayees] = useState();

  useEffect(async () => {
    //dobrze byloby obsłuzyć błąd serwera - i napisać coś userowi - dałem loading - ale tak naprawde powinny być 3 stany: ok, loading, błąd
    const result = await axios(configData.SERVER_URL +'/showpayee');
    setPayees(result.data);
  }, payees);

  return (
    <>
    <Container>
      <Row className="add-space">
        <Col><AddButton onSubmit={setPayees} />
        <RemoveButton onSubmit={setPayees} /> </Col>
      </Row>
      </Container>    
      <Container>
        <Row className="add-space">
          <Col>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Birth date</th>
            <th>Phone</th>
            <th>Unit Code</th>
          </tr>
        </thead>
        <tbody>
          {payees ? (
            payees.map((payee) => (
              <tr>
                <td>{payee.lastname}</td>
                <td>{payee.firstname}</td>
                <td>{payee.email}</td>
                <td>{payee.birth_date}</td>
                <td>{payee.home_phone}</td>
                <td>
                  <DropdownButton id="dropdown-basic-button" title={payee.unit_code}>
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

export default GetPayees;
