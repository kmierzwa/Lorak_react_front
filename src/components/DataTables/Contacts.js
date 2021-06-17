import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import ModalButton from "../ModalButton";
import axios from "axios";
import configData from "../../config.json";

const Contacts = () => {
  const [users, setUsers] = useState();

  useEffect(async () => {
    //dobrze byloby obsłuzyć błąd serwera - i napisać coś userowi - dałem loading - ale tak naprawde powinny być 3 stany: ok, loading, błąd
    const result = await axios(configData.SERVER_URL);
    setUsers(result.data);
  }, users);
  //onsubmit dodaje zeby przeladowac komponent
  return (
    <>
      <ModalButton onSubmit={setUsers} />
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
          {users ? (
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
            ))
          ) : (
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default Contacts;
