import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
<<<<<<< HEAD
import Header from "../Header";
=======
import {Container,Row,Col, DropdownButton, Dropdown} from "react-bootstrap";
import AddButton from "../AddButton";
import RemoveButton from "../RemoveButton"
>>>>>>> e164f32d54553f7bc15ff6b34b5d81ead5f8f6e2
import axios from "axios";
import configData from "../../config.json";



const Dupa = () => {
  const [mapping, setMapping] = useState();

  useEffect(async () => {
    //dobrze byloby obsłuzyć błąd serwera - i napisać coś userowi - dałem loading - ale tak naprawde powinny być 3 stany: ok, loading, błąd
    const result = await axios(configData.SERVER_URL +'/showmappingunit');
    setMapping(result.data);
  }, mapping);

  return (
<<<<<<< HEAD
    <><Header />
    <Table striped bordered hover responsive="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Password</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((contact) => (
            <tr>
              <td>{contact.id_user}</td>
              <td>{contact.firstname_user}</td>
              <td>{contact.lastname_user}</td>
              <td>{contact.login_user}</td>
              <td>{contact.password_user}</td>
              <td>
                <a
                  href="#"
                  class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i class="fas fa-download fa-sm text-white-50"></i> Dawaj
                  HAJS!
                </a>
              </td>
            </tr>
          ))}
      </tbody>
    </Table></>
=======
    <>
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
>>>>>>> e164f32d54553f7bc15ff6b34b5d81ead5f8f6e2
  );
};

export default Dupa;
