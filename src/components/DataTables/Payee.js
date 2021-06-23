import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import {Container,Row,Col, DropdownButton, Dropdown} from "react-bootstrap";
import Header from "../Header";
import axios from "axios";
import configData from "../../config.json";



const GetPayees = () => {
  const [payees, setPayees] = useState();

  useEffect(async () => {
    //dobrze byloby obsłuzyć błąd serwera - i napisać coś userowi - dałem loading - ale tak naprawde powinny być 3 stany: ok, loading, błąd
    const result = await axios(configData.SERVER_URL +'/showpayee');
    setPayees(result.data);
  }, []);

  const handleSubmit = (unitCode,idPayee) => {
    axios
      .post(`${configData.SERVER_URL}/changeunit`, {
        idPayee,
        unitCode,
      }).then(()=> window.location.reload())
  };

  return (
    <>
    <Header />   
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
                <DropdownButton id="dropdown-basic-button" title={payee.unit_code} block>
                <Dropdown.Item onSelect={() => handleSubmit("France",payee.idPayee)} >France</Dropdown.Item>
                <Dropdown.Item onSelect={() => handleSubmit("Germany",payee.idPayee)}>Germany</Dropdown.Item>
                <Dropdown.Item onSelect={() => handleSubmit("Poland",payee.idPayee)} >Poland</Dropdown.Item>
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
