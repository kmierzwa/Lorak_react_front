import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import {Container,Row,Col} from "react-bootstrap";
import ModalButton from "../ModalButton";
import RemoveButton from "../RemoveButton"
import axios from "axios";
import configData from "../../config.json";
import '../../App.css';


const GetUsers = () => {
  const [users, setUsers] = useState();

  useEffect(async () => {
    //dobrze byloby obsłuzyć błąd serwera - i napisać coś userowi - dałem loading - ale tak naprawde powinny być 3 stany: ok, loading, błąd
    const result = await axios(configData.SERVER_URL);
    setUsers(result.data);
  }, users);
  //onsubmit dodaje zeby przeladowac komponent
  return (
    <>
    <Container>
      <Row className="add-space">
        <Col><ModalButton onSubmit={setUsers} />
        <RemoveButton onSubmit={setUsers} /> </Col>
      </Row>
      </Container>    
      <Container>
        <Row className="add-space">
          <Col>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users ? (
            users.map((user) => (
              <tr>
                <td><input type="checkbox" value="" id="flexCheckDefault"></input></td>
                <td>{user.id_user}</td>
                <td>{user.firstname_user}</td>
                <td>{user.lastname_user}</td>
                <td>{user.login_user}</td>
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

export default GetUsers;
